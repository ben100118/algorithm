/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let res = 0, left = 0
    let map = new Map()
    for(let right = 0;right < s.length;right++){
        map.set(s[right], (map.get(s[right]) ?? 0) + 1)
        while(map.get(s[right]) > 2){
            map.set(s[left], map.get(s[left]) - 1)
            left++
        }
        res = Math.max(res, right - left + 1)
    }
    return res
};