import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { BaseFxDirective, MediaMonitor } from '@angular/flex-layout';

const FLEX_FILL_CSS = {
  'margin': 0,
  'width': '100%',
  'height': '100%',
  'min-width': '100%',
  'min-height': '100%'
};

@Directive({
  selector: '[appFlexFill]'
})
export class FlexFillDirective extends BaseFxDirective {
  constructor(monitor: MediaMonitor, public elRef: ElementRef, public renderer: Renderer2) {
    super(monitor, elRef, renderer);
    this._applyStyleToElement(FLEX_FILL_CSS);
  }
}
