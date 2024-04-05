import { Directive } from "@angular/core";
import { injectHostAttrToken } from "../host-attr-token.util";

@Directive({
  selector: '[app-host-attr-styles]',
  standalone: true,
  host: {
    "[style.background]": 'background',
    "[style.padding]": 'padding',
    "[style.fontSize.px]": 'fontSize',
    "[style.color]": 'color',
  }
})
export class HostAttrStylesDirective {
  padding = injectHostAttrToken('padding', '0.5rem');  
  fontSize = injectHostAttrToken('font-size', '18');  
  color = injectHostAttrToken('color', 'yellow');
  background = injectHostAttrToken('backgroundColor', '#abc');
}