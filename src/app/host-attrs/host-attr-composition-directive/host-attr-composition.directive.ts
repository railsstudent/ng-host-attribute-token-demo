import { Directive } from "@angular/core";
import { injectHostAttrToken } from "../host-attr-token.util";
import { HostAttrStylesDirective } from "../host-attr-styles-directive/host-attr-styles.directive";

@Directive({
  selector: '[app-host-attr-composition]',
  standalone: true,
  host: {
    "[style.fontWeight]": 'fontWeight',
  },
  hostDirectives: [
    {
      directive: HostAttrStylesDirective
    }
  ]
})
export class HostAttrCompositionDirective {
  fontWeight = injectHostAttrToken('font-weight', 'bold'); 
}