import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'gender' })
export class GenderPipe implements PipeTransform {

  transform(value?: boolean): string {
    return value ? '男' : '女';
  }

}
