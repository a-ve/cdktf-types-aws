// https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/data-sources/lambda_functions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsLambdaFunctionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/data-sources/lambda_functions#id DataAwsLambdaFunctions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/data-sources/lambda_functions aws_lambda_functions}
*/
export class DataAwsLambdaFunctions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_functions";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/data-sources/lambda_functions aws_lambda_functions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsLambdaFunctionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsLambdaFunctionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_functions',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.6.2',
        providerVersionConstraint: '~> 5.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // function_arns - computed: true, optional: false, required: false
  public get functionArns() {
    return this.getListAttribute('function_arns');
  }

  // function_names - computed: true, optional: false, required: false
  public get functionNames() {
    return this.getListAttribute('function_names');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
