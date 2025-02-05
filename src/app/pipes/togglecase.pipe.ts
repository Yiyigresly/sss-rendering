import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})
export class Togglecase implements PipeTransform {

  transform(value: string, uppercase: boolean = false): string {
    return uppercase ? value.toUpperCase() : value.toLowerCase();
  }

}
