/**
 * We are checking which letter are misplaced and swapping them accordingly
 * @param {*} letter, current letter that is misplaced
 * @param {*} word1_count, word 1 letters with count
 * @param {*} word2_count, word 2 letters with count
 * @param {*} processed, letters that are processed and can;t be changes again
 * @returns Boolean
 */
const findDisplacedLetter = function (
  letter,
  word1_count,
  word2_count,
  processed
) {
  let expectedMatch = word2_count[letter];
  if (!expectedMatch) return false;
  let displacedLetter = null;
  for (let i in word1_count) {
    if (word1_count[i] == expectedMatch && !processed[i]) {
      displacedLetter = i;
    }
  }
  console.log({
    letter,
    expectedMatch,
    word1_count,
    word2_count,
    displacedLetter,
  });

  return displacedLetter;
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length != word2.length) {
    return false;
  }
  let new_word1 = word1.split("").sort().join("");
  let new_word2 = word2.split("").sort().join("");
  if (new_word1 == new_word2) {
    return true;
  }

  let word1_count = {};
  let word2_count = {};
  let word1_set = new Set();
  let word2_set = new Set();
  //get word count
  for (let i = 0; i < new_word1.length; i++) {
    if (word1_count[new_word1.charAt(i)]) {
      word1_count[new_word1.charAt(i)] += 1;
    } else {
      word1_count[new_word1.charAt(i)] = 1;
    }
    word1_set.add(new_word1.charAt(i));
    word2_set.add(new_word2.charAt(i));

    if (word2_count[new_word2.charAt(i)]) {
      word2_count[new_word2.charAt(i)] += 1;
    } else {
      word2_count[new_word2.charAt(i)] = 1;
    }
  }

  if (word1_set != word1_set) {
    return false;
  }
  console.log("BEFORE _====>", { word1_count, word2_count });

  let match = true;
  let processed = {};
  for (let i in word1_count) {
    if (word1_count[i] != word2_count[i]) {
      // need to replace it with something
      // we need swap the current alphabet that has counts which it was suppose to have
      let hasDisjoin = findDisplacedLetter(
        i,
        word1_count,
        word2_count,
        processed
      );
      if (!hasDisjoin) {
        match = false;
      } else {
        [word1_count[i], word1_count[hasDisjoin]] = [
          word1_count[hasDisjoin],
          word1_count[i],
        ];
      }
      processed[i] = true;
    }
  }
  console.log("AFTER _====>", { word1_count, word2_count });
  return match;
};

console.log(closeStrings("aabbbc", "abbccc"));
// console.log(closeStrings("a", "aa"));
// console.log(closeStrings("uau", "ssx"));

// we need to make sure that character need to have same order first
// word1 = "cabbba", word2 = "abbccc"
/**
 * word  1 = aabbbc
 * word 2 = abbccc
 * checking at 1 correct, checking at 2 , not correct,
 */
