// https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/dx_hosted_private_virtual_interface_accepter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DxHostedPrivateVirtualInterfaceAccepterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/dx_hosted_private_virtual_interface_accepter#dx_gateway_id DxHostedPrivateVirtualInterfaceAccepter#dx_gateway_id}
  */
  readonly dxGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/dx_hosted_private_virtual_interface_accepter#id DxHostedPrivateVirtualInterfaceAccepter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/dx_hosted_private_virtual_interface_accepter#tags DxHostedPrivateVirtualInterfaceAccepter#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/dx_hosted_private_virtual_interface_accepter#tags_all DxHostedPrivateVirtualInterfaceAccepter#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/dx_hosted_private_virtual_interface_accepter#virtual_interface_id DxHostedPrivateVirtualInterfaceAccepter#virtual_interface_id}
  */
  readonly virtualInterfaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/dx_hosted_private_virtual_interface_accepter#vpn_gateway_id DxHostedPrivateVirtualInterfaceAccepter#vpn_gateway_id}
  */
  readonly vpnGatewayId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/dx_hosted_private_virtual_interface_accepter#timeouts DxHostedPrivateVirtualInterfaceAccepter#timeouts}
  */
  readonly timeouts?: DxHostedPrivateVirtualInterfaceAccepterTimeouts;
}
export interface DxHostedPrivateVirtualInterfaceAccepterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/dx_hosted_private_virtual_interface_accepter#create DxHostedPrivateVirtualInterfaceAccepter#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/dx_hosted_private_virtual_interface_accepter#delete DxHostedPrivateVirtualInterfaceAccepter#delete}
  */
  readonly delete?: string;
}

export function dxHostedPrivateVirtualInterfaceAccepterTimeoutsToTerraform(struct?: DxHostedPrivateVirtualInterfaceAccepterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DxHostedPrivateVirtualInterfaceAccepterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DxHostedPrivateVirtualInterfaceAccepterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/dx_hosted_private_virtual_interface_accepter aws_dx_hosted_private_virtual_interface_accepter}
*/
export class DxHostedPrivateVirtualInterfaceAccepter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_dx_hosted_private_virtual_interface_accepter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.6.2/docs/resources/dx_hosted_private_virtual_interface_accepter aws_dx_hosted_private_virtual_interface_accepter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DxHostedPrivateVirtualInterfaceAccepterConfig
  */
  public constructor(scope: Construct, id: string, config: DxHostedPrivateVirtualInterfaceAccepterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_dx_hosted_private_virtual_interface_accepter',
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
    this._dxGatewayId = config.dxGatewayId;
    this._id = config.id;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._virtualInterfaceId = config.virtualInterfaceId;
    this._vpnGatewayId = config.vpnGatewayId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // dx_gateway_id - computed: false, optional: true, required: false
  private _dxGatewayId?: string; 
  public get dxGatewayId() {
    return this.getStringAttribute('dx_gateway_id');
  }
  public set dxGatewayId(value: string) {
    this._dxGatewayId = value;
  }
  public resetDxGatewayId() {
    this._dxGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dxGatewayIdInput() {
    return this._dxGatewayId;
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

  // virtual_interface_id - computed: false, optional: false, required: true
  private _virtualInterfaceId?: string; 
  public get virtualInterfaceId() {
    return this.getStringAttribute('virtual_interface_id');
  }
  public set virtualInterfaceId(value: string) {
    this._virtualInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualInterfaceIdInput() {
    return this._virtualInterfaceId;
  }

  // vpn_gateway_id - computed: false, optional: true, required: false
  private _vpnGatewayId?: string; 
  public get vpnGatewayId() {
    return this.getStringAttribute('vpn_gateway_id');
  }
  public set vpnGatewayId(value: string) {
    this._vpnGatewayId = value;
  }
  public resetVpnGatewayId() {
    this._vpnGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayIdInput() {
    return this._vpnGatewayId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DxHostedPrivateVirtualInterfaceAccepterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DxHostedPrivateVirtualInterfaceAccepterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dx_gateway_id: cdktf.stringToTerraform(this._dxGatewayId),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      virtual_interface_id: cdktf.stringToTerraform(this._virtualInterfaceId),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
      timeouts: dxHostedPrivateVirtualInterfaceAccepterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
