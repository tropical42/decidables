
import SDTMath from '@decidable/detectable-math';

import SDTExample from './sdt-example';

/*
  SDTExample_Human element
  <sdt-example-human>
*/
export default class SDTExampleHuman extends SDTExample {
  firstUpdated(/* changedProperties */) {
    this.count = 1;

    this.sdtControl = this.querySelector('sdt-control');
    this.rdkTask = this.querySelector('rdk-task');
    this.sdtResponse = this.querySelector('sdt-response');
    this.sdtTable = this.querySelector('sdt-table');
    this.rocSpace = this.querySelector('roc-space');
    this.sdtModel = this.querySelector('sdt-model');

    if (this.rocSpace) {
      if (this.rocSpace.hasAttribute('history')) {
        this.rocSpace.set(0.5, 0.5, 'default', this.count);
      }
    }

    if (this.sdtControl && this.sdtControl.hasAttribute('trials')) {
      this.sdtControl.addEventListener('sdt-control-trials', (event) => {
        if (this.rdkTask) {
          this.rdkTask.trials = event.detail.trials;
        }

        if (this.sdtResponse) {
          this.sdtResponse.trialTotal = event.detail.trials;
        }
      });
    }

    if (this.sdtControl && this.sdtControl.hasAttribute('duration')) {
      this.sdtControl.addEventListener('sdt-control-duration', (event) => {
        if (this.rdkTask) {
          this.rdkTask.duration = event.detail.duration;
          this.rdkTask.wait = event.detail.duration;
          this.rdkTask.iti = event.detail.duration;
        }
      });
    }

    if (this.sdtControl && this.sdtControl.hasAttribute('coherence')) {
      this.sdtControl.addEventListener('sdt-control-coherence', (event) => {
        if (this.rdkTask) {
          this.rdkTask.coherence = event.detail.coherence;
        }
      });
    }

    if (this.sdtControl && this.sdtControl.hasAttribute('payoff')) {
      this.sdtControl.addEventListener('sdt-control-payoff', (event) => {
        if (this.sdtResponse) {
          this.sdtResponse.hPayoff = event.detail.payoff;
          this.sdtResponse.mPayoff = -event.detail.payoff + 0; // Get rid of -0
          this.sdtResponse.faPayoff = -(100 - event.detail.payoff) + 0; // Get rid of -0
          this.sdtResponse.crPayoff = (100 - event.detail.payoff);
        }
        if (this.sdtTable) {
          this.sdtTable.hPayoff = event.detail.payoff;
          this.sdtTable.mPayoff = -event.detail.payoff + 0; // Get rid of -0
          this.sdtTable.faPayoff = -(100 - event.detail.payoff) + 0; // Get rid of -0
          this.sdtTable.crPayoff = (100 - event.detail.payoff);
        }
      });
    }

    if (this.sdtControl && this.sdtControl.hasAttribute('run')) {
      this.sdtControl.addEventListener('sdt-control-run', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.running = true;
        }
      });
    }

    if (this.sdtControl && this.sdtControl.hasAttribute('pause')) {
      this.sdtControl.addEventListener('sdt-control-pause', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.running = false;
        }
      });
    }

    if (this.sdtControl && this.sdtControl.hasAttribute('reset')) {
      this.sdtControl.addEventListener('sdt-control-reset', (/* event */) => {
        if (this.rdkTask) {
          this.rdkTask.reset();
        }

        if (this.sdtResponse) {
          this.sdtResponse.reset();
        }

        if (this.sdtTable) {
          this.sdtTable.h = 0;
          this.sdtTable.m = 0;
          this.sdtTable.fa = 0;
          this.sdtTable.cr = 0;
        }

        if (this.rocSpace) {
          if (this.rocSpace.hasAttribute('history')) {
            this.count += 1;
            this.rocSpace.set(0.5, 0.5, `point${this.count}`, this.count);
          } else {
            this.rocSpace.hr = 0.5;
            this.rocSpace.far = 0.5;
          }
        }

        if (this.sdtModel) {
          this.sdtModel.d = 0;
          this.sdtModel.c = 0;
        }
      });
    }

    if (this.rdkTask) {
      if (this.sdtResponse) {
        this.sdtResponse.trialTotal = this.rdkTask.trials;
      }
    }

    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-trial-start', (event) => {
        if (this.sdtResponse) {
          this.sdtResponse.start(event.detail.signal, event.detail.trial);
        }
      });
    }

    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-trial-end', (/* event */) => {
        if (this.sdtResponse) {
          this.sdtResponse.stop();
        }
      });
    }

    if (this.rdkTask) {
      this.rdkTask.addEventListener('rdk-block-end', (/* event */) => {
        if (this.sdtControl) {
          this.sdtControl.complete();
        }
      });
    }

    if (this.sdtResponse) {
      this.sdtResponse.addEventListener('sdt-response', (event) => {
        if (this.sdtTable) {
          this.sdtTable.h = event.detail.h;
          this.sdtTable.m = event.detail.m;
          this.sdtTable.fa = event.detail.fa;
          this.sdtTable.cr = event.detail.cr;
        }

        const newhr = SDTMath.hM2Hr((event.detail.h + 1), (event.detail.m + 1));
        const newfar = SDTMath.faCr2Far((event.detail.fa + 1), (event.detail.cr + 1));

        if (this.rocSpace) {
          if (this.rocSpace.hasAttribute('history')) {
            this.rocSpace.set(newhr, newfar, (this.count === 1) ? 'default' : `point${this.count}`, this.count);
          } else {
            this.rocSpace.hr = newhr;
            this.rocSpace.far = newfar;
          }
        }

        if (this.sdtModel) {
          this.sdtModel.d = SDTMath.hrFar2D(newhr, newfar);
          this.sdtModel.c = SDTMath.hrFar2C(newhr, newfar);
        }
      });
    }
  }
}

customElements.define('sdt-example-human', SDTExampleHuman);