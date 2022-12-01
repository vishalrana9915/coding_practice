/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let hashMap = { a_vowel: 0, b_vowel: 0 };
  for (let i = 0; i < s.length / 2; i++) {
    console.log({ a_v: s[i], b_v: s[s.length / 2 + i] });
    if (vowels.has(s[i].toLowerCase())) {
      hashMap.a_vowel++;
    }
    if (vowels.has(s[s.length / 2 + i].toLowerCase())) {
      hashMap.b_vowel++;
    }
  }

  console.log({ hashMap });
  return hashMap["a_vowel"] === hashMap["b_vowel"];
};

console.log(halvesAreAlike("teUtbook"));
