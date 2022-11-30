
---
# CI/CD Test
title: Swagger Insurance Org v1.0.0
language_tabs:
  - shell: shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python.
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkul
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.-->

<h1 id="swagger-insurance-org">Swagger Insurance Org v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An API that use a Insurance Org as an example to demonstrate features in the swagger-2.0 specification

Base URLs:
 
* <a href="http://premiumstore.swagger.io/api">http://premiumstore.swagger.io/api</a>

<a href="http://swagger.io/terms/">Terms of service</a>

 License: MIT

<h1 id="swagger-insurance-org-default">Default</h1>

## findPremiums

<a id="opIdfindPremiums"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://premiumstore.swagger.io/api/premiums \
  -H 'Accept: application/json'

```

```http
GET http://premiumstore.swagger.io/api/premiums HTTP/1.1
Host: premiumstore.swagger.io
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://premiumstore.swagger.io/api/premiums',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://premiumstore.swagger.io/api/premiums',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://premiumstore.swagger.io/api/premiums', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://premiumstore.swagger.io/api/premiums', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://premiumstore.swagger.io/api/premiums");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://premiumstore.swagger.io/api/premiums", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /premiums`

Returns all premiums from the system that the user has access to

<h3 id="findpremiums-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tags|query|array[string]|false|tags to filter by|
|limit|query|integer(int32)|false|maximum number of results to return|

> Example responses

> 200 Response

```json
[
  {
    "firstname": "string",
    "lastname": "string",
    "dateofbirth": "string",
    "tag": "string",
    "id": 0
  }
]
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<firstname>string</firstname>
<lastname>string</lastname>
<dateofbirth>string</dateofbirth>
<tag>string</tag>
<id>0</id>
```

```
[{"firstname":"string","lastname":"string","dateofbirth":"string","tag":"string","id":0}]
```

<h3 id="findpremiums-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|premium response|Inline|
|default|Default|unexpected error|[ErrorModel](#schemaerrormodel)|

<h3 id="findpremiums-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[allOf]|false|none|none|

*allOf*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|[NewPremium](#schemanewpremium)|false|none|none|
|»» firstname|string|false|none|name of the user|
|»» lastname|string|false|none|none|
|»» dateofbirth|string|false|none|none|
|»» tag|string|false|none|none|

*and*

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» *anonymous*|object|false|none|none|
|»» id|integer(int64)|true|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## addPremium

<a id="opIdaddPremium"></a>

> Code samples

```shell
# You can also use wget
curl -X POST http://premiumstore.swagger.io/api/premiums \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST http://premiumstore.swagger.io/api/premiums HTTP/1.1
Host: premiumstore.swagger.io
Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "firstname": "string",
  "lastname": "string",
  "dateofbirth": "string",
  "tag": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('http://premiumstore.swagger.io/api/premiums',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post 'http://premiumstore.swagger.io/api/premiums',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('http://premiumstore.swagger.io/api/premiums', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','http://premiumstore.swagger.io/api/premiums', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://premiumstore.swagger.io/api/premiums");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "http://premiumstore.swagger.io/api/premiums", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /premiums`

Creates a new premium in the store.  Duplicates are allowed

> Body parameter

```json
{
  "firstname": "string",
  "lastname": "string",
  "dateofbirth": "string",
  "tag": "string"
}
```

<h3 id="addpremium-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewPremium](#schemanewpremium)|true|Premium to add to the store|

> Example responses

> 200 Response

```json
{
  "firstname": "string",
  "lastname": "string",
  "dateofbirth": "string",
  "tag": "string",
  "id": 0
}
```

<h3 id="addpremium-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|premium response|[Premium](#schemapremium)|
|default|Default|unexpected error|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

## findPremiumById

<a id="opIdfindPremiumById"></a>

> Code samples

```shell
# You can also use wget
curl -X GET http://premiumstore.swagger.io/api/premiums/{id} \
  -H 'Accept: application/json'

```

```http
GET http://premiumstore.swagger.io/api/premiums/{id} HTTP/1.1
Host: premiumstore.swagger.io
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://premiumstore.swagger.io/api/premiums/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get 'http://premiumstore.swagger.io/api/premiums/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('http://premiumstore.swagger.io/api/premiums/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://premiumstore.swagger.io/api/premiums/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://premiumstore.swagger.io/api/premiums/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://premiumstore.swagger.io/api/premiums/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /premiums/{id}`

Returns a user based on a single ID, if the user does not have access to the premium

<h3 id="findpremiumbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|ID of premium to fetch|

> Example responses

> 200 Response

```json
{
  "firstname": "string",
  "lastname": "string",
  "dateofbirth": "string",
  "tag": "string",
  "id": 0
}
```

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Premium>
  <firstname>string</firstname>
  <lastname>string</lastname>
  <dateofbirth>string</dateofbirth>
  <tag>string</tag>
  <id>0</id>
</Premium>
```

```
{"firstname":"string","lastname":"string","dateofbirth":"string","tag":"string","id":0}
```

<h3 id="findpremiumbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|premium response|[Premium](#schemapremium)|
|default|Default|unexpected error|[ErrorModel](#schemaerrormodel)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="swagger-insurance-org-provider">Provider</h1>

## deletePremium

<a id="opIddeletePremium"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE http://premiumstore.swagger.io/api/premiums/{id} \
  -H 'Accept: application/json'

```

```http
DELETE http://premiumstore.swagger.io/api/premiums/{id} HTTP/1.1
Host: premiumstore.swagger.io
Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('http://premiumstore.swagger.io/api/premiums/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.delete 'http://premiumstore.swagger.io/api/premiums/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.delete('http://premiumstore.swagger.io/api/premiums/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','http://premiumstore.swagger.io/api/premiums/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://premiumstore.swagger.io/api/premiums/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "http://premiumstore.swagger.io/api/premiums/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /premiums/{id}`

deletes a single premium based on the ID supplied

<h3 id="deletepremium-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer(int64)|true|ID of premium to delete|

> Example responses

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="deletepremium-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|premium deleted|None|
|default|Default|unexpected error|[ErrorModel](#schemaerrormodel)|

<h3 id="deletepremium-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Premium">Premium</h2>
<!-- backwards compatibility -->
<a id="schemapremium"></a>
<a id="schema_Premium"></a>
<a id="tocSpremium"></a>
<a id="tocspremium"></a>

```json
{
  "firstname": "string",
  "lastname": "string",
  "dateofbirth": "string",
  "tag": "string",
  "id": 0
}

```

### Properties

allOf

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[NewPremium](#schemanewpremium)|false|none|none|

and

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|object|false|none|none|
|» id|integer(int64)|true|none|none|

<h2 id="tocS_NewPremium">NewPremium</h2>
<!-- backwards compatibility -->
<a id="schemanewpremium"></a>
<a id="schema_NewPremium"></a>
<a id="tocSnewpremium"></a>
<a id="tocsnewpremium"></a>

```json
{
  "firstname": "string",
  "lastname": "string",
  "dateofbirth": "string",
  "tag": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstname|string|false|none|name of the user|
|lastname|string|false|none|none|
|dateofbirth|string|false|none|none|
|tag|string|false|none|none|

<h2 id="tocS_ErrorModel">ErrorModel</h2>
<!-- backwards compatibility -->
<a id="schemaerrormodel"></a>
<a id="schema_ErrorModel"></a>
<a id="tocSerrormodel"></a>
<a id="tocserrormodel"></a>

```json
{
  "code": 0,
  "message": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|

