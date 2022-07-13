import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textShort'
})
export class TextShortPipe implements PipeTransform {

  transform(value: string, args?: number): string {
    const index = args
    const lengthOfvalue = value.length
    if(lengthOfvalue > index){
      const result = value.slice(0,index)+"..."
      return result
    }
    else{
      return value;
    }
    
  }

}
