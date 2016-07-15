// main.js

var assert = require('power-assert');
var EncodingLangSa = require('../index.js');

describe('EncodingLangSa', function() {
  var conv;
  describe('convert', function() {
    it('kami -> iast', function() {
      conv = EncodingLangSa.converter('kami', 'iast')
      assert.strictEqual('a-iuṅ ṛḷk eoṇ aiauc hayavaraṭ laṇ khaphachaṭhathaṭatav kapay śaṣasar hal',
        conv('a-iu.g .r.lk eo.n aiauc hayavara.t la.n khaphacha.thatha.tatav kapay .ca.sasar hal'));
      assert.strictEqual('vāsāṃsi jīrṇāni yathā vihāya navāni gṛhṇāti nalo \'parāṇi/ tathā śarīrāṇi vihāya jīrṇāny anyāni saṃyāti navāni dehī//',
        conv('vaasaa.msi jiir.naani yathaa vihaaya navaani g.rh.naati nalo \'paraa.ni/ tathaa .cariiraa.ni vihaaya jiir.naany anyaani sa.myaati navaani dehii//'));
    });

    it('kami -> deva', function() {
      conv = EncodingLangSa.converter('kami', 'deva'),
      assert.strictEqual('अइउङ् ऋऌक् एओण् ऐऔच् हयवरट् लण् खफछठथटतव् कपय् शषसर् हल्',
        conv('^a^i^u.g ^.r^.lk ^e^o.n ^ai^auc hayavara.t la.n khaphacha.thatha.tatav kapay .ca.sasar hal'));
      assert.strictEqual('वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नलो ऽपराणि । तथा शरीराणि विहाय जीर्णान्य् अन्यानि संयाति नवानि देही ॥',
        conv('vaasaa.msi jiir.naani yathaa vihaaya navaani g.rh.naati nalo \'paraa.ni/ tathaa .cariiraa.ni vihaaya jiir.naany ^anyaani sa.myaati navaani dehii//'));
    });

    it('iast -> deva (with option removeSpace)', function() {
      conv = EncodingLangSa.converter('iast', 'deva', {
        removeSpace: true
      });
      assert.strictEqual('अइउङ्ऋऌक्एओण्ऐऔच्हयवरट्लण्खफछठथटतव्कपय्शषसर्हल्',
        conv('^a^i^uṅ ^ṛ^ḷk ^e^oṇ ^ai^auc hayavaraṭ laṇ khaphachaṭhathaṭatav kapay śaṣasar hal'));
      assert.strictEqual('वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नलो ऽपराणि । तथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही ॥',
        conv('vāsāṃsi jīrṇāni yathā vihāya navāni gṛhṇāti nalo \'parāṇi/ tathā śarīrāṇi vihāya jīrṇāny anyāni saṃyāti navāni dehī//'));
    });

    it('deva -> iast', function() {
      conv = EncodingLangSa.converter('deva', 'iast'),
      assert.strictEqual('^a^i^uṅ ^ṛ^ḷk ^e^oṇ ^ai^auc hayavaraṭ laṇ khaphachaṭhathaṭatav kapay śaṣasar hal',
        conv('अइउङ् ऋऌक् एओण् ऐऔच् हयवरट् लण् खफछठथटतव् कपय् शषसर् हल्'));
      assert.strictEqual('vāsāṃsi jīrṇāni yathā vihāya navāni gṛhṇāti nalo \'parāṇi/ tathā śarīrāṇi vihāya jīrṇāny ^anyāni saṃyāti navāni dehī//',
        conv('वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नलो ऽपराणि । तथा शरीराणि विहाय जीर्णान्य् अन्यानि संयाति नवानि देही ॥'));
    });
  });

  describe('sort', function() {
    var sorter, arr;
    // ランダム要素が入るので 3回ずつテストしてみる・・・
    function shuffle(array) {
      var arr = array.slice(0), m = arr.length, t, i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = arr[m];
        arr[m] = arr[i];
        arr[i] = t;
      }
      return arr;
    }
    it('kami', function() {
      sorter = EncodingLangSa.sorter('kami');
      arr = [
        'a', 'a.cv', 'a.cva', 'a.cva.h', 'a.cvii',
        'aa', 'ii.cvara.m', 'ii.cvara.h',
        '.r', ':r', '.l', ':l', 'ai', 'au',
        'dev ena', 'deva',  'devena', 'devo', 'daiva'
      ];
      assert.deepEqual(arr, shuffle(arr).sort(sorter));
      assert.deepEqual(arr, shuffle(arr).sort(sorter));
      assert.deepEqual(arr, shuffle(arr).sort(sorter));
    });
    it('iast', function() {
      sorter = EncodingLangSa.sorter('iast')
      arr = [
        'a', 'aśv', 'aśva', 'aśvaḥ', 'aśvī',
        'ā', 'īśvaraṃ', 'īśvaraḥ',
        'ṛ', 'ṝ', 'ḷ', 'ḹ', 'ai', 'au',
        'dev ena', 'deva',  'devena', 'devo', 'daiva'
      ];
      assert.deepEqual(arr, shuffle(arr).sort(sorter));
      assert.deepEqual(arr, shuffle(arr).sort(sorter));
      assert.deepEqual(arr, shuffle(arr).sort(sorter));
    });
    it('deva', function() {
      sorter = EncodingLangSa.sorter('deva')
      arr = [
        'अ', 'अश्व्', 'अश्व', 'अश्वः', 'अश्वी',
        'आ', 'ईश्वरं', 'ईश्वरः',
        'ऋ', 'ॠ', 'ऌ', 'ॡ', 'ऐ', 'औ',
        'देव् एन', 'देव',  'देवेन', 'देवो', 'दैव'
      ];
      assert.deepEqual(arr, shuffle(arr).sort(sorter));
      assert.deepEqual(arr, shuffle(arr).sort(sorter));
      assert.deepEqual(arr, shuffle(arr).sort(sorter));
    });
  })
});
