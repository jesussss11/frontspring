import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultimage = [];
    for(const imagen of value){
      if(imagen.name.toLowerCase().indexOf(arg.toLowerCase()) >- 1){
       resultimage.push(imagen);

      };
    };
    return resultimage;
  }

}
