import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name:'sort'
})

export class sortPipe implements PipeTransform{
    transform(value : any[],args:string):any {
        value.sort((a, b) => {
            if (a.name < b.name) return -1;
            else if (a.name > b.name) return 1;
            else return 0;
          });
    }
}