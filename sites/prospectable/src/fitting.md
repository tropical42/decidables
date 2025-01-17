---
title: 'Model Fitting: Fitting Human Performance to Cumulative Prospect Theory'
layout: page
script: page
---

## From human performance to model parameters

Fitting the model to your performance.

<cpt-example-human>
  <prospectable-control trials="10" run pause reset></prospectable-control>
  <risky-task trials="10"></risky-task>
  <prospectable-response interactive trial feedback="outcome" payoff="both"></prospectable-response>
  <cpt-probability></cpt-probability>
  <cpt-value></cpt-value>
  <decision-space point="rest" alpha="1" lambda="1" gamma="1"></decision-space>
  <cpt-fit></cpt-fit>
<!--
  <cpt-calculation numeric interactive></cpt-calculation>
  <cpt-space></cpt-space>
 -->
</cpt-example-human>
