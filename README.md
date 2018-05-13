[![Maintainability](https://api.codeclimate.com/v1/badges/efbe808800ef9ea77cfc/maintainability)](https://codeclimate.com/github/denis-ok/project-lvl2-s185/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/efbe808800ef9ea77cfc/test_coverage)](https://codeclimate.com/github/denis-ok/project-lvl2-s185/test_coverage) [![Build Status](https://travis-ci.org/denis-ok/hexlet-lvl-2-diff-generator.svg?branch=master)](https://travis-ci.org/denis-ok/hexlet-lvl-2-diff-generator)
### Gendiff
**Hexlet JavaScript Project: level 2**
___
This package is a CLI utility for generating diff between two config files.
Input formats: json, yaml, ini
Output formats: json, plain

Main purpose of working on this project was practice in Deep-First-Search recursion algorithm and learn principles of how to parse and use abstract syntacs trees. From architectural point of view it is something like adapter and facade patterns.


**Installation:**
```
$ npm install -g strelkov-gendiff
```

**Usage:**
```
  Usage: gendiff [options] <file1> <file2>

  This program take two config files as arguments and show difference

  Options:

    -V, --version        output the version number
    -f, --format [type]  Output file format (default, JSON, plain)
    -h, --help           output usage information
```

##### Example:

**Config 1:**
```
{
  "common": {
    "setting1": "Value 1",
    "setting2": "200",
    "setting3": true,
    "setting6": {
      "key": "value"
    }
  },
  "group1": {
    "baz": "bas",
    "foo": "bar"
  },
  "group2": {
    "abc": "12345"
  }
}
```

**Config 2:**
```
{
  "common": {
    "setting1": "Value 1",
    "setting3": true,
    "setting4": "blah blah",
    "setting5": {
      "key5": "value5"
    },
    "setting6": {
      "key": "value",
      "ops": "vops"
    }
  },

  "group1": {
    "foo": "bar",
    "baz": "bars"
  },

  "group3": {
    "fee": "100500"
  }
}

```

**Result Diff (default format):**
```
{
    common: {
        setting1: Value 1
      - setting2: 200
        setting3: true
        setting6: {
            key: value
          + ops: vops
        }
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
    }
    group1: {
      + baz: bars
      - baz: bas
        foo: bar
    }
  - group2: {
        abc: 12345
    }
  + group3: {
        fee: 100500
    }
}
```
