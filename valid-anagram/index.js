/**
 * O(n log n) because of sort()
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagramNLogN = function (s, t) {
  if (s.length !== t.length) return false;

  const sort = (str) => [...str].sort().join("");

  return sort(s) === sort(t);
};

/**
 * O(n) with hash table
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();
  for (const letter of s) {
    const letterCount = map.get(letter) || 0;
    map.set(letter, letterCount + 1);
  }

  for (const letter of t) {
    const letterCount = map.get(letter);
    if (!letterCount) return false;
    map.set(letter, letterCount - 1);
  }

  for (const letterCount of map.values()) {
    if (letterCount > 0) return false;
  }

  return true;
};
