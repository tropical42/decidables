import * as d3 from 'd3';

import SDTExample from './sdt-example';

/*
  SDTExampleUnequal element
  <sdt-example-unequal>
*/
export default class SDTExampleUnequal extends SDTExample {
  firstUpdated(/* changedProperties */) {
    this.sdtControl = this.querySelector('sdt-control');
    this.rocSpace = this.querySelector('roc-space');
    this.sdtModel = this.querySelector('sdt-model');

    if (this.sdtControl) {
      this.sdtControl.addEventListener('sdt-control-z-roc', (event) => {
        this.rocSpace.zRoc = event.detail.zRoc;
      });
    }

    if (this.rocSpace) {
      this.rocSpace.setWithSDT(1, 0, 'default', '', 1); // Set 'default' to equal variance for contours
    }

    if (this.sdtModel) {
      if (this.rocSpace) {
        d3.range(-1.5, 1.6, 0.5).forEach((c, index) => {
          this.rocSpace.setWithSDT(this.sdtModel.d, c, `point${index}`, '', this.sdtModel.s);
        });
      }

      this.sdtModel.addEventListener('sdt-model-change', (event) => {
        if (this.rocSpace) {
          d3.range(-1.5, 1.6, 0.5).forEach((c, index) => {
            this.rocSpace.setWithSDT(event.detail.d, c, `point${index}`, '', event.detail.s);
          });
        }
      });
    }
  }
}

customElements.define('sdt-example-unequal', SDTExampleUnequal);