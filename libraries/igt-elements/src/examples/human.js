


import IGTExample from './igt-example';

/*
  SDTExample_Human element
  <sdt-example-human>
*/
export default class IGTExampleHuman extends IGTExample {
  firstUpdated(/* changedProperties */) {
    //this.count = 1;

    this.igtControl = this.querySelector('igt-control');
    this.igtTask = this.querySelector('igt-task');
    this.igtFeedback = this.querySelector('igt-feedback');

    if (this.igtControl && this.igtControl.hasAttribute('reset')) {
      this.igtControl.addEventListener('igt-control-reset', (/* event */) => {
        if (this.igtTask) {
          this.igtTask.reset();
        }
        if (this.igtFeedback) {
          this.igtFeedback.reset();
        }
      });
    }

    if (this.igtTask) {
      this.igtTask.addEventListener('igt-task-change', (event) => {
        console.log(event.detail.gain);
        if (this.igtFeedback){
          this.igtFeedback.deckChosen(event.detail.trial, event.detail.deck, event.detail.gain, event.detail.loss);
        }
      })
    }
  }
}

customElements.define('igt-example-human', IGTExampleHuman);
