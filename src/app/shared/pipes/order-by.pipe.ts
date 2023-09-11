import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], key: string, isAsc: boolean = true): any[] {
    if(!Array.isArray(array) || array.length<=1){
      return array;
    }

    console.log("tsdfa");
    const compareFn = (a: any, b: any): number =>{
      const valueA = this.getItemByPath(a, key);
      const valueB = this.getItemByPath(b, key);;

      if(valueA< valueB){
        return isAsc ? -1:1;
      }
      else if(valueA>valueB){
        return isAsc? 1: -1;
      }
      else{
        return 0;
      }
    };

    const clonedArray = [...array];

    return clonedArray.sort(compareFn);
  }

   getItemByPath(obj: any, itemPath: string): any | undefined {
    return itemPath.split('.').reduce((currentItem, key) => currentItem?.[key], obj);
  }

}
