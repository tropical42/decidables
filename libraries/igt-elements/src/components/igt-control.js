
import {html, css} from 'lit';

import '@decidables/decidables-elements/button';
//import '@decidables/decidables-elements/slider';
//import '@decidables/decidables-elements/switch';
//import '@decidables/decidables-elements/toggle';
//import '@decidables/decidables-elements/toggle-option';

import igtElement from '../igt-element';

/*
  DetectableControl element
  <detectable-control>

  Attributes:

*/
export default class igtControl extends igtElement {
  static get properties() {
    return {
      reset: {
        attribute: 'reset',
        type: Boolean,
        reflect: true,
      },
    };
  }

  constructor() {
    super();

    // Attributes
    this.reset = false;

    // Properties
  }
  doReset() {
    this.dispatchEvent(new CustomEvent('igt-control-reset', {
      detail: {},
      bubbles: true,
    }));
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
        }

        .holder {
          display: flex;

          flex-direction: row;

          align-items: stretch;
          justify-content: center;
        }

        .buttons {
          display: flex;

          flex-direction: column;

          align-items: stretch;
          justify-content: center;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="holder">
            <div class="buttons">
              <decidables-button name="reset" @click=${this.doReset.bind(this)}>Reset</decidables-button>
                
            </div>
      </div>`;
  }
}

customElements.define('igt-control', igtControl);
