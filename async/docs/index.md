
# Insurance Async API 1.0.0 documentation

* License: [AWS License 2.0](https://www.license.org/licenses/LICENSE-2.0)
* Default content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

The Async API allows you to  manage the address changes.

### API Roadmap & Current Scope:

* Update Address - Available
* Search Address - Future Version
* Delete Address - Future Version


## Table of Contents

* [Servers](#servers)
  * [test](#test-server)
  * [staging](#staging-server)
  * [production](#production-server)
* [Operations](#operations)
  * [PUB Ins.businessdomain.1.0.0.{pruCustomerId}.address.updated](#pub-prudentialbusinessdomain100prucustomeridaddressupdated-operation)

## Servers

### `test` Server

* URL: `ins.test.cluster.org:8092`
* Protocol: `https`

Test broker

#### Security

##### Security Requirement 1

* Type: `HTTP`
  * Scheme: bearer
  * Bearer format: JWT







### `staging` Server

* URL: `ins.staging.cluster.org:8092`
* Protocol: `https`

Staging broker

#### Security

##### Security Requirement 1

* Type: `HTTP API key`
  * Name: token
  * In: query







### `production` Server

* URL: `ins.prod.cluster.org:8092`
* Protocol: `https 2.0`

Production broker

#### Security

##### Security Requirement 1

* Type: `OAuth2`
  * Flows:

    | Flow | Auth URL | Token URL | Refresh URL | Scopes |
    |---|---|---|---|---|
    | Implicit | [https://pru.com/api/oauth/dialog](https://pru.com/api/oauth/dialog) | - | - | `write:pets`, `read:pets` |









## Operations

### PUB `ins.businessdomain.1.0.0.{pruCustomerId}.address.updated` Operation

*Inform about address changes for a customer.*

* Operation ID: `updateAddressChanges`

The topic on which address updates values may be produced and consumed.

#### Parameters

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| pruCustomerId | string | The ID of the customer. | - | - | **required** |


#### `kinesis` Channel specific information

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| objectName | - | - | `"topicName"` | - | - |

#### `sns` Channel specific information

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | - | - | `"NULL"` | - | - |

#### `sqs` Channel specific information

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | - | - | `"NULL"` | - | - |

#### `ws` Channel specific information

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| method | - | - | `"get"` | - | - |

#### Message Address updated `addressUpdated`

*Inform about Address updates of a particular customer.*

* Content type: [application/json](https://www.iana.org/assignments/media-types/application/json)

##### Headers

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| my-app-header | integer | - | - | [ 0 .. 100 ] | - |

> Examples of headers _(generated)_

```json
{
  "my-app-header": 0
}
```


##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are allowed** |
| id | integer | Identifier for the Event | - | >= 0 | - |
| description | string | Description for the Event | - | - | - |
| eventMessage | object | - | - | - | **additional properties are allowed** |
| eventMessage.sourceSystem | object | - | - | - | **additional properties are allowed** |
| eventMessage.sourceSystem.eventName | string | Source Event Name type | - | - | - |
| eventMessage.sourceSystem.name | string | Source System Name | - | - | - |
| eventMessage.sourceSystem.correlationId | string | Unique Identifier | - | - | - |
| eventMessage.sourceSystem.eventOccuredTime | string | Time when the event occured | - | format (`date-time`) | - |
| eventMessage.domain | object | - | - | - | **additional properties are allowed** |
| eventMessage.domain.type | string | Domain type | - | - | - |
| eventMessage.domain.name | string | Domain Name | - | - | - |
| eventMessage.eventAttributes | object | - | - | - | **additional properties are allowed** |
| eventMessage.eventAttributes.correlationId | string | Unique Identifier | - | - | - |
| eventMessage.eventAttributes.dataElements | array<any> | - | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad | object | - | - | - | **additional properties are allowed** |
| eventMessage.eventAttributes.dataElements.payLoad.content | array<any> | - | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.content.tempalteId | string | tempalteId | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.content.tempalteLocation | string | tempalteLocation | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.content.virtual | object | - | - | - | **additional properties are allowed** |
| eventMessage.eventAttributes.dataElements.payLoad.content.virtual.data | object | - | - | - | **additional properties are allowed** |
| eventMessage.eventAttributes.dataElements.payLoad.content.virtual.data.additionalProperty1 | string | additionalProp1 | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.content.virtual.data.additionalProperty2 | string | additionalProp2 | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.content.virtual.data.additionalProperty3 | string | additionalProp3 | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.metadata | object | - | - | - | **additional properties are allowed** |
| eventMessage.eventAttributes.dataElements.payLoad.metadata.itemSeq | string | itemSeq | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.metadata.applicationAttributes | array<any> | array of strings | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.metadata.documentNo | string | documentNo Identifier | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.metadata.docLocation | string | docLocation | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.metadata.policyNumber | string | policyNumber | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.metadata.documentType | string | documentType | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.metadata.organizationName | string | organizationName | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.metadata.trackingInfo | string | trackingInfo | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.metadata.userActions | array<any> | array of strings | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.metadata.version | string | Version Identifier | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.orgination | object | - | - | - | **additional properties are allowed** |
| eventMessage.eventAttributes.dataElements.payLoad.orgination.applicationID | string | applicationID | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.orgination.imageCount | integer | imageCount Identifier | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.orgination.pageCount | integer | pageCount | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.orgination.priority | string | priority | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.orgination.productType | string | productType | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.orgination.type | string | type | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.orgination.xid | string | xid | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.properties | object | - | - | - | **additional properties are allowed** |
| eventMessage.eventAttributes.dataElements.payLoad.properties.additionalProperty1 | string | additionalProp1 | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.properties.additionalProperty2 | string | additionalProp2 | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.properties.additionalProperty3 | string | additionalProp3 | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.type | string | type | - | - | - |
| eventMessage.eventAttributes.dataElements.payLoad.uid | string | desc of uid | - | - | - |

> Examples of payload _(generated)_

```json
{
  "id": 0,
  "description": "string",
  "eventMessage": {
    "sourceSystem": {
      "eventName": "string",
      "name": "string",
      "correlationId": "string",
      "eventOccuredTime": "2019-08-24T14:15:22Z"
    },
    "domain": {
      "type": "string",
      "name": "string"
    },
    "eventAttributes": {
      "correlationId": "string",
      "dataElements": []
    }
  }
}
```


