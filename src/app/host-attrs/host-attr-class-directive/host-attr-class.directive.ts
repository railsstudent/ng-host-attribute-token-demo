import { Directive } from '@angular/core';
import { injectHostAttrToken } from '../host-attr-token.util';

@Directive({
  selector: '[app-host-attr-class]',
  standalone: true,
  host: {
    '[class.primary]': 'isPrimary',
    '[class.secondary]': 'isSecondary',
  },
})
export class HostAttrClassDirective {
  type = injectHostAttrToken('type', 'primary');
  isPrimary = this.type === 'primary';
  isSecondary = this.type === 'secondary';
}
