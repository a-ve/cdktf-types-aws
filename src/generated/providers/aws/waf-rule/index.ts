// https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/waf_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/waf_rule#id WafRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/waf_rule#metric_name WafRule#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/waf_rule#name WafRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/waf_rule#tags WafRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/waf_rule#tags_all WafRule#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * predicates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/waf_rule#predicates WafRule#predicates}
  */
  readonly predicates?: WafRulePredicates[] | cdktf.IResolvable;
}
export interface WafRulePredicates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/waf_rule#data_id WafRule#data_id}
  */
  readonly dataId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/waf_rule#negated WafRule#negated}
  */
  readonly negated: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/waf_rule#type WafRule#type}
  */
  readonly type: string;
}

export function wafRulePredicatesToTerraform(struct?: WafRulePredicates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_id: cdktf.stringToTerraform(struct!.dataId),
    negated: cdktf.booleanToTerraform(struct!.negated),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class WafRulePredicatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WafRulePredicates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataId = this._dataId;
    }
    if (this._negated !== undefined) {
      hasAnyValues = true;
      internalValueResult.negated = this._negated;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafRulePredicates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataId = undefined;
      this._negated = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataId = value.dataId;
      this._negated = value.negated;
      this._type = value.type;
    }
  }

  // data_id - computed: false, optional: false, required: true
  private _dataId?: string; 
  public get dataId() {
    return this.getStringAttribute('data_id');
  }
  public set dataId(value: string) {
    this._dataId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataIdInput() {
    return this._dataId;
  }

  // negated - computed: false, optional: false, required: true
  private _negated?: boolean | cdktf.IResolvable; 
  public get negated() {
    return this.getBooleanAttribute('negated');
  }
  public set negated(value: boolean | cdktf.IResolvable) {
    this._negated = value;
  }
  // Temporarily expose input value. Use with caution.
  public get negatedInput() {
    return this._negated;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class WafRulePredicatesList extends cdktf.ComplexList {
  public internalValue? : WafRulePredicates[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WafRulePredicatesOutputReference {
    return new WafRulePredicatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/waf_rule aws_waf_rule}
*/
export class WafRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_waf_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/waf_rule aws_waf_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafRuleConfig
  */
  public constructor(scope: Construct, id: string, config: WafRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_waf_rule',
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
    this._metricName = config.metricName;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._predicates.internalValue = config.predicates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // predicates - computed: false, optional: true, required: false
  private _predicates = new WafRulePredicatesList(this, "predicates", true);
  public get predicates() {
    return this._predicates;
  }
  public putPredicates(value: WafRulePredicates[] | cdktf.IResolvable) {
    this._predicates.internalValue = value;
  }
  public resetPredicates() {
    this._predicates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicatesInput() {
    return this._predicates.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metric_name: cdktf.stringToTerraform(this._metricName),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      predicates: cdktf.listMapper(wafRulePredicatesToTerraform, true)(this._predicates.internalValue),
    };
  }
}
