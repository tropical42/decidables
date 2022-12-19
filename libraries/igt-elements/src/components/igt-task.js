
import {html, css} from 'lit';

import igtElement from '../igt-element';

/*
  DetectableTable element
  <detectable-table>

  Attributes:
  Hit; Miss; FalseAlarm; CorrectRejection;
*/
export default class igtTask extends igtElement {
  static get properties() {
    return {
      deck: {attribute:false,type:Number,reflect:false},
      gain: {attribute:false,type:Number,reflect:false},
      loss: {attribute:false,type:Number,reflect:false},

      deck1count: {attribute:false,type:Number,reflect:false},
      deck2count: {attribute:false,type:Number,reflect:false},
      deck3count: {attribute:false,type:Number,reflect:false},
      deck4count: {attribute:false,type:Number,reflect:false}
    };
  }

  constructor() {
    super();

      this.deck=0;
      this.gain=0;
      this.loss=0;

      this.deck1count=0;
      this.deck2count=0;
      this.deck3count=0;
      this.deck4count=0;

      this.deck1gain=100;
      this.deck2gain=100;
      this.deck3gain=50;
      this.deck4gain=50;

      this.trial=0;

      this.deck1loss=[0,0,-150,0,-300,0,-200,0,-250,-350,0,-350,0,-250,-200,0,-300,-150,0,0,0,-300,0,-350,0,-200,-250,-150,0,0,-350,-200,-250,0,0,0,-150,-300,0,0];
      this.deck2loss=[0,0,0,0,0,0,0,0,-1250,0,0,0,0,-1250,0,0,0,0,0,0,-1250,0,0,0,0,0,0,0,0,0,0,-1250,0,0,0,0,0,0,0,0];
      this.deck3loss=[0,0,-50,0,-50,0,-50,0,-50,-50,0,-25,-75,0,0,0,-25,-75,0,-50,0,0,0,-50,-25,-50,0,0,-75,-50,0,0,0,-25,-25,0,-75,0,-50,-75];
      this.deck4loss=[0,0,0,0,0,0,0,0,0,-250,0,0,0,0,0,0,0,0,0,-250,0,0,0,0,0,0,0,0,-250,0,0,0,0,0,-250,0,0,0,0,0];
  }

  
  sendEvent(deck) {

    this.deck = deck;
    this.trial++;
    this.gain = (deck===1)? this.deck1gain : (deck===2)? this.deck2gain : (deck===3)? this.deck3gain : this.deck4gain;
    this.loss = (deck===1)? this.deck1loss[this.deck1count-1] : (deck===2)? this.deck2loss[this.deck2count-1] : (deck===3)? this.deck3loss[this.deck3count-1] : this.deck4loss[this.deck4count-1];

    this.dispatchEvent(new CustomEvent('igt-task-change', {
      detail: {
      trial: this.trial,
      deck,
      gain: this.gain,
      loss: this.loss,

      deck1count: this.deck1count,
      deck2count: this.deck2count,
      deck3count: this.deck3count,
      deck4count: this.deck4count,
      },
      bubbles: true,
    }));
  }

  deck1event() {
    if (this.trial == 40) return;
    this.deck1count += 1;
    this.sendEvent(1);
  }
  deck2event() {
    if (this.trial == 40) return;
    this.deck2count += 1;
    this.sendEvent(2);
  }
  deck3event() {
    if (this.trial == 40) return;
    this.deck3count += 1;
    this.sendEvent(3);
  }
  deck4event() {
    if (this.trial == 40) return;
    this.deck4count += 1;
    this.sendEvent(4);
  }

  reset() {
    this.deck = 0;
    this.gain = 0; 
    this.loss = 0;

    this.deck1count = 0;
    this.deck2count = 0;
    this.deck3count = 0;
    this.deck4count = 0;

    this.trial=0;
  }


  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: inline-block;
        }
        div.deck {
          display: flex;
          gap: 5px;
        }
        div.gain{
          color: green;
        }
        div.loss{
          color: red;
        }
        div.card {
          width: 200px;
          height: 300px;
          border: 1px solid black;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `,
    ];
  }

  render() {
    
    return html`
    <div class="deck">
    <div class="card" @click=${this.deck1event.bind(this)}><div>Deck 1</div><div><div class="gain">${(this.deck===1)? html`gain is ${this.gain}`:""}</div><div class="loss">${(this.deck===1)? html`loss is ${this.loss}`:""}</div></div><div></div></div>
    <div class="card" @click=${this.deck2event.bind(this)}><div>Deck 2</div><div><div class="gain">${(this.deck===2)? html`gain is ${this.gain}`:""}</div><div class="loss">${(this.deck===2)? html`loss is ${this.loss}`:""}</div></div><div></div></div>
    <div class="card" @click=${this.deck3event.bind(this)}><div>Deck 3</div><div><div class="gain">${(this.deck===3)? html`gain is ${this.gain}`:""}</div><div class="loss">${(this.deck===3)? html`loss is ${this.loss}`:""}</div></div><div></div></div>
    <div class="card" @click=${this.deck4event.bind(this)}><div>Deck 4</div><div><div class="gain">${(this.deck===4)? html`gain is ${this.gain}`:""}</div><div class="loss">${(this.deck===4)? html`loss is ${this.loss}`:""}</div></div><div></div></div>
    </div>  `;
    
  }
}

customElements.define('igt-task', igtTask);