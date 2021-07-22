import { Construct, SecretValue, Stack, StackProps } from '@aws-cdk/core';
import { CodePipeline, CodePipelineSource, ShellStep } from "@aws-cdk/pipelines";
import {Bucket} from "@aws-cdk/aws-s3"

/**
 * The stack that defines the application pipeline
 */

export class CdkpipelinesDemoPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    const bucket = Bucket.fromBucketName(this,"pipeline-bucket","cdk-pipeline")
    const pipeline = new CodePipeline(this, 'Pipeline', {
      // The pipeline name
      pipelineName: 'MyServicePipeline',

       // How it will be built and synthesized
       synth: new ShellStep('Synth', {
         // Where the source can be found

         input: CodePipelineSource.gitHub('varush108/cdk-pipeline', 'main'),
         
         // Install dependencies, build and run cdk synth
         commands: [
           'npm ci',
           'npm run build',
           'npx cdk synth'
	 ],
       }),
    });

    // This is where we add the application stages
    // ...
  }
}