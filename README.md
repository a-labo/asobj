asobj
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/a-labo/asobj
[bd_travis_url]: http://travis-ci.org/a-labo/asobj
[bd_travis_shield_url]: http://img.shields.io/travis/a-labo/asobj.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/a-labo/asobj
[bd_travis_com_shield_url]: https://api.travis-ci.com/a-labo/asobj.svg?token=
[bd_license_url]: https://github.com/a-labo/asobj/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/a-labo/asobj
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/a-labo/asobj.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/a-labo/asobj.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/a-labo/asobj
[bd_gemnasium_shield_url]: https://gemnasium.com/a-labo/asobj.svg
[bd_npm_url]: http://www.npmjs.org/package/asobj
[bd_npm_shield_url]: http://img.shields.io/npm/v/asobj.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Object utiltify

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install asobj --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

const { clone } = require('asobj')

{
  let obj = clone({
    foo: 'bar',
    baz: 'quz'
  }, {
    without: 'baz'
  })
  console.log(obj) // -> { foo: 'bar' }
}

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Functions.md.hbs" Start -->

<a name="section-doc-guides-03-functions-md"></a>

Functions
---------

Available functions

| Signature | Description |
| ---- | ----------- |
| `.assign() -> Object` | Assign object |
| `.cleanup(values) -> Object` | Delete undefined properties. |
| `.clone(src, options) -> Object` | Clone a object |
| `.deepEqual(obj1, obj2) -> boolean` | Compare object deeply |
| `.dig(src, keys) -> *` | Dig object props |
| `.shallowEqual(obj1, obj2) -> boolean` | Performs equality by iterating through keys on an object and returning false |


<!-- Section from "doc/guides/03.Functions.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/a-labo/asobj/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [a-labo][a_labo_url]

[a_labo_url]: https://github.com/a-labo

<!-- Links End -->
