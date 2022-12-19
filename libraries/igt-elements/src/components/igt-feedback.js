
import {html, css} from 'lit';

import igtElement from '../igt-element';
import * as Plotly from 'plotly.js/lib/core';
import plotlyStyle from './plotly-style.auto';

/*
  DetectableTable element
  <detectable-table>

  Attributes:
  Hit; Miss; FalseAlarm; CorrectRejection;
*/
export default class igtFeedback extends igtElement {
  static get properties() {
    return {
      total: {attribute:false,type:Number,reflect:false},
    };
  }

  constructor() {
    super();

      this.total=2000;
      this.trials=[];
      this.decks=[];
      this.gains=[];
      this.losses=[];
      this.sums=[];
      
  }

  firstUpdated(){

    this.reset();
  }

  reset() {
    this.total = 2000;
    this.trials=[];
    this.decks=[];
    this.gains=[];
    this.losses=[];
    this.sums=[];
    this.plotDecks();
  }


  static get styles() {
    return [
      super.styles,
      plotlyStyle,
      css`
        :host {
          display: inline-block;
        }
        div.plot{
          width:500px;
        }
      `,
    ];
  }

  deckChosen(trial, deck, gain, loss){
    this.total = this.total + gain + loss;
    this.trials.push(trial);
    this.decks.push(deck);
    this.gains.push(gain);
    this.losses.push(loss);
    this.sums.push(gain+loss);
    this.plotDecks();
  }
  plotDecks(){
    const plotMargins = {
      l: 40, r: 10, b: 40, t: 40, pad: 4,
    };

    console.log(this.trials);
    console.log(this.decks);
    Plotly.react(
      this.shadowRoot.querySelector(".plot"),
      [{y: this.decks, x: this.trials, type: 'scatter', mode:'lines+markers', marker:{color:this.sums, size:8, colorscale:[[0, 'red'],[0.926, 'yellow'],[1, 'green']], cmin:-1250, cmax:100, showscale:true}}],
      

      
      {margin: plotMargins, title: `Deck Selections`,
      width:815,
      height:300, 
      datarevision: this.trials[this.trials.length-1],
      modebar:{remove:['zoomIn2d','zoomOut2d','toImage','pan2d','zoom2d','lasso2d','autoScale2d','hoverClosestGl2d','resetScale2d','select2d']},
      xaxis:{range:[0.5,40.5], title:{text:'Trials'}},
      yaxis:{type:'category',categoryarray: [1,2,3,4], categoryorder: 'array', range:[-0.5,3.5], title:{text:'Deck'}},
      //coloraxis:{colorscale:[[-1250, 'white'], [0, 'black']], showscale:true}}
    }
    );

  }

  render() {
    
    return html`
    <p>${(this.trials[this.trials.length-1] == 40)? html`Task complete, final total is: $${this.total}`: html`Total is $${this.total}`}</p>
    <div class="plot"></div>
      `;
  }
}

customElements.define('igt-feedback', igtFeedback);