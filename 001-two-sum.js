const data = require('./001-two-sum-data.js');

/**
 * original solution - brute force
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * time:  O(n^2)
 * space: O(1)
 */
var twoSum1 = function(nums, target) {
    for (let i = 0; i< nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};

/**
 * adopted solution - one pass
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * time: O(n)
 * space:O(n)
 */
var twoSum2 = (nums, target) => {
    var mapping = {};

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (mapping.hasOwnProperty(complement)) {
            return [mapping[complement], i]
        }
        mapping[nums[i]] = i;
    }
    return [];
}

var twoSum3 = (nums, target) => {
    var map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (complement in map) {
            return [map[complement], i]
        }
        map[nums[i]] = i;
    }
    return [];
}

var twoSum4 = (nums, target) => {
    var map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i);
    }
    return [];
}

console.time();
console.log('twoSum2', twoSum1(data.arr, data.target));
console.timeEnd();
