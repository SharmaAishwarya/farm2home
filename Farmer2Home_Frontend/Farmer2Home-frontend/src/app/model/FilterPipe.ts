import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], term): any {
        console.log('term', term);
      
        return term 
            ? items.filter(item => item.name.indexOf(term) !== -1)
            : items;
    }
}