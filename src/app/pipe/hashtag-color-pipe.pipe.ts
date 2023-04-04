import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hashtagColorPipe'
})
export class HashtagColorPipePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/#\w+/g, '<span style="color:red;">$&</span>');
  }

}
