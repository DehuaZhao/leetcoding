/**
 * @param {string} s
 * @return {number}
 *
 * time:  O(n)
 * space: O(min{n, m}), m is charset
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = start + 1;
    let subString = '';
    let length = 0;

    for (let i = 0; i < s.length; i++) {
        let cur = s[i];

        if (subString.includes(cur)) {
            start = start + subString.indexOf(cur) + 1;
            end = end + 1;
        } else {
            end = i + 1;
        }

        subString = s.substring(start, end);

        length = Math.max(subString.length, length);
    }

    return length;
};

/**
 * @param {string} s
 * @return {number}
 *
 * time:  O(n)
 * space: O(min{n, m}), m is charset
 */
var lengthOfLongestSubstring2 = function(s) {
    let ans = 0;
    let map = new Map();
    for (let i = 0, j = 0; j < s.length; j++) {
        if (map.has(s.charAt(j))) {
            i = Math.max(map.get(s.charAt(j)), i);
        }
        ans = Math.max(ans, j - i + 1);
        map.set(s.charAt(j), j + 1);

        console.log(i,j)
        console.log(map)
    }
    return ans;
}

var lengthOfLongestSubstring3 = function(s) {
    let ans = 0;
    let index = new Array(128).fill(0);
    for (let i = 0, j = 0; j < s.length; j++) {
        i = Math.max(index[s.charAt(j)], i);
        ans = Math.max(ans, j - i + 1);
        index[s.charAt(j)] = j + 1;
        console.log(i, j)
        console.log(ans)
    }

    return ans;
}

console.time();
console.log('length is', lengthOfLongestSubstring3("abcabcbb"));
console.timeEnd();
