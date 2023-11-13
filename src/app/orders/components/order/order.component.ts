import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orderForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.orderForm = this.fb.group({
      firstName: ['', [Validators.required, this.capitalizeValidator]],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      phones: this.fb.array([]),
      selfPickup: [false],
      deliveryAddress: [''],
    });

    // Добавление первого телефона
    this.addPhone();
  }

  // Валидатор для имени пользователя (первая буква в верхнем регистре)
  capitalizeValidator(control: AbstractControl) {
    const value = control.value;
    if (value && value.length > 0) {
      const firstChar = value.charAt(0);
      if (firstChar !== firstChar.toUpperCase()) {
        return { capitalize: true };
      }
    }
    return null;
  }

  // Добавление контактного телефона
  addPhone() {
    const phones = this.orderForm.get('phones') as FormArray;
    phones.push(this.fb.control(''));
  }

  // Удаление контактного телефона
  removePhone(index: number) {
    const phones = this.orderForm.get('phones') as FormArray;
    phones.removeAt(index);
  }

  // Получение массива телефонов для удобства использования в шаблоне
  get phoneControls(): FormControl[] {
    return (this.orderForm.get('phones') as FormArray).controls as FormControl[];
  }

  // Проверка, нужно ли показать поле адреса доставки
  showDeliveryAddress() {
    return this.orderForm.get('selfPickup')?.value === false;
  }

  // Обработка отправки формы
  submitForm() {
    if (this.orderForm.valid) {
      console.log('Form submitted:', this.orderForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
