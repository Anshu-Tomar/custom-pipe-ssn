import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ssnpipe'
})
export class SsnpipePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: string, showMask :boolean): string {
   
    if (!showMask || value.length <10) {
      return value;
    }
    return "XXX-XX-" + value.substr(0, value.length - 6);
  }

}
