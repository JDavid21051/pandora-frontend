import {Pipe, PipeTransform} from '@angular/core';
import {TAG_TYPE_ENUM} from "../const/tag-type.const";


@Pipe({
  name: 'showTag'
})
export class ShowTagPipe implements PipeTransform {

  transform(value: string): string {
    return TAG_TYPE_ENUM[value];
  }

}
