import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'noSanitize' })
export class NoSanitizePipe implements PipeTransform {
   constructor(private domSanitizer: DomSanitizer) {

   }
   transform(html: string): SafeHtml {
      //for changing color of the code which is wrapped in pre tag
      var startIndex = html.match('.<pre.')
      var endIndex = html.match('."false">.')
      if(startIndex != null){
         html = html.slice(0,startIndex.index+1)+'<pre class="ql-syntax pt-4 pl-4" spellcheck="false" style="color:white;background-color:#333">'+html.slice(endIndex.index+9,html.length-1)
      }
      return this.domSanitizer.bypassSecurityTrustHtml(html);
   }
}