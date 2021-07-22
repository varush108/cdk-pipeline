#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { CdkPipelineStack } from '../lib/cdk pipeline-stack';

const app = new App();

new CdkPipelineStack(app, 'CdkPipelineStack', {
  env: { account: '114502122548', region: 'us-east-1' },
});

app.synth();