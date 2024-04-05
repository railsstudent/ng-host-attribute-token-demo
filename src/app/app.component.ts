import { ChangeDetectionStrategy, Component } from '@angular/core';
import 'zone.js';
import { HostAttrStylesComponent } from './host-attrs/host-attr-styles/host-attr-styles.component';
import { HostAttrStylesDirective } from './host-attrs/host-attr-styles-directive/host-attr-styles.directive';
import { HostAttrClassDirective } from './host-attrs/host-attr-class-directive/host-attr-class.directive';
import { HostAttrCompositionDirective } from './host-attrs/host-attr-composition-directive/host-attr-composition.directive';

@Component({
  selector: 'app-root',
  imports: [HostAttrStylesComponent, HostAttrStylesDirective, HostAttrClassDirective, HostAttrCompositionDirective],
  standalone: true,
  template: `
    <h1>{{ name }}!</h1>
    <app-host-attr padding='1rem' font-size='28' 
      color='orange' backgroundColor='rebeccapurple'
    />
    <app-host-attr />

    <p app-host-attr-styles padding='1.25rem' font-size='20' 
      color='yellow' backgroundColor='red'>
      Style by Host Attr Styles Directive
    </p>

    <p app-host-attr-styles>
      Style by Host Attr Styles Directive
    </p>

    <p app-host-attr-class type='primary'>
      Primary class
    </p>

    <p app-host-attr-class type='secondary'>
      Secondary class
    </p>

    <p app-host-attr-class>Default primary class</p>

    <p app-host-attr-composition padding="1.75rem" 
      font-weight='600' font-size="32" color="rebeccapurple" 
      backgroundColor='yellow'>
      Host Attribute Composition Directive API
    </p>
    <p app-host-attr-composition >
      Default Host Attribute Composition Directive API
    </p>
  `,
  styles: `
    :host {
      display: block;
      padding: 0.5rem;
    }
    
    p {
      margin: 0.5rem 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  name = 'Host Attribute Token Demos';
}
