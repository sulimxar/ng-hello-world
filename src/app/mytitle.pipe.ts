import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mytitle'
})
export class MytitlePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value) {
      return this.titleCase(value);
    }
    return null;
  }

  private stopwords = 'a an and at but by for in nor of on or so the to up yet'.split(' ');

  private titleCase(str) {
    if (!str) return null
    if (!str.length) return null
    var words = str.trim().split(/\s+/)

    return words
      .map((word, index) => {
        if (index === 0) return this.capitalize(word)
        if (index === words.length - 1) return this.capitalize(word)
        if (this.stopwords.indexOf(word.toLowerCase()) > -1) return word.toLowerCase()
        return this.capitalize(word)
      })
      .join(' ')
  }

  private capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

}
