/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    let ones = 0
    for(let i = 0;i < nums.length;i++){
        if(nums[i] === 1) ones++
    }
    if(ones === 0) return 0
    let left = 0
    let zeros = 0
    let minZeros = nums.length
    for(let right = 0;right < nums.length + ones;right++){
        let index = right % nums.length
        if(nums[index] === 0) zeros++
        if(right - left + 1 === ones){
            if(zeros < minZeros) minZeros = zeros
            if(nums[left++] === 0) zeros--
        }
    }
    return minZeros
};