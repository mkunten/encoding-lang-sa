# encoding-lang-sa [![Build Status](https://travis-ci.org/mkunten/encoding-lang-sa.svg?branch=master)](https://travis-ci.org/mkunten/encoding-lang-sa)
transcription conversion tool for Sanskrit (supports only lower cases)

supported transcription formats:
- deva: Devanāgarī
- iast: (customized) International Alphabet of Sanskrit Transliteration
- kami: (customized) kamimura encoding
- kh: Harvard-Kyoto 

See `encs` defined in index.js for details.

## Install

```sh
npm install https://github.com/mkunten/encoding-lang-sa.git --save
```

## Usage

### nodejs

#### convert
```javascript
var EncodingLangSa = require('encoding-lang-sa');

// IAST to Devanāgarī
var kh2iast = EncodingLangSa.converter('kh', 'iast');
console.log(kh2iast('AsId rAjA nalo nAma vIrasenasuto balI/'));
// -> āsīd rājā nalo nāma vīrasenasuto balī/

// IAST to Devanāgarī
var iast2deva = EncodingLangSa.converter('iast', 'deva', { removeSpace: true });
console.log(iast2deva('^āsīd rājā nalo nāma vīrasenasuto balī/'));
// -> आसीद्राजा नलो नाम वीरसेनसुतो बली ।
// * independent vowels like आ are romanized with the prefix '^'.
```

#### sort

```javascript
// IAST
var iastSorter = EncodingLangSa.sorter('iast');
console.log([ 'aśva', 'aiśvarya', 'āśva', 'aśvin', 'iśvara' ].sort(iastSorter));
// -> [ 'aśva', 'aśvin', 'āśva', 'iśvara', 'aiśvarya' ]
```

### browser

```html
<script type="application/javascript" src="/path/to/static/js/encoding-lang-sa.js"></script>
```

#### convert

```javascript
// IAST to Devanāgarī
var kh2iast = EncodingLangSa.converter('kh', 'iast');
console.log(kh2iast('AsId rAjA nalo nAma vIrasenasuto balI/'));
// -> āsīd rājā nalo nāma vīrasenasuto balī/

// IAST to Devanāgarī
var iast2deva = EncodingLangSa.converter('iast', 'deva', { removeSpace: true });
console.log(iast2deva('^āsīd rājā nalo nāma vīrasenasuto balī/'));
// -> आसीद्राजा नलो नाम वीरसेनसुतो बली ।
</script>
```

#### sort

```javascript
// IAST
var iastSorter = EncodingLangSa.sorter('iast');
console.log([ 'aśva', 'aiśvarya', 'āśva', 'aśvin', 'iśvara' ].sort(iastSorter));
// -> [ 'aśva', 'aśvin', 'āśva', 'iśvara', 'aiśvarya' ]
```

## Version
0.0.2

## License
MIT
