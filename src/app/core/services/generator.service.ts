import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  public generate(n: number): string{
    const characters = (() => {
      let charset = '';
      for (let i = 48; i <= 57; i++) { // 0-9
        charset += String.fromCharCode(i);
      }
      for (let i = 65; i <= 90; i++) { // A-Z
        charset += String.fromCharCode(i);
      }
      for (let i = 97; i <= 122; i++) { // a-z
        charset += String.fromCharCode(i);
      }
      return charset;
    })();

    let result = '';
    const charactersLength = characters.length;
    for(let i =0;i<n;i++){
      const randomIndex = Math.floor(Math.random()* charactersLength);
      result+= characters.charAt(randomIndex);
    }
    return result;
  }
}
