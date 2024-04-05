import { NgStyle } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed } from "@angular/core";
import { injectHostAttrToken } from "../host-attr-token.util";

@Component({
  selector: 'app-host-attr',
  imports: [NgStyle],
  standalone: true,
  template: `
    <p>Inject Host Attribute Token in a component</p>
    <p [ngStyle]="styles()">
      Style this element
    </p>
  `,
  styles: `
    p {
      margin-bottom: 0.5rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HostAttrStylesComponent {
  padding = injectHostAttrToken('padding', '0.5rem');  
  fontSize = injectHostAttrToken('font-size', '18');  
  color = injectHostAttrToken('color', 'yellow');
  background = injectHostAttrToken('backgroundColor', '#abc');

  styles = computed(() => ({
    padding: this.padding,
    'fontSize.px': this.fontSize,
    color: this.color,
    background: this.background,
  }));
}