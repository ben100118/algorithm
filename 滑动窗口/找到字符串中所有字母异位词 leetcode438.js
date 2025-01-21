/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let pCount = new Array(26).fill(0)
    let sCount = new Array(26).fill(0)
    for (let c of p) {
        pCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    let left = 0
    let res = []
    for(let right = 0;right < s.length;right++){
        sCount[s[right].charCodeAt(0) - 'a'.charCodeAt(0)]++
        if(right - left + 1 === p.length){
            if (sCount.toString() === pCount.toString()) {
                res.push(left);
                console.log(1)
            }
            sCount[s[left].charCodeAt(0) - 'a'.charCodeAt(0)]--
            left++
        }
        
    }
    return res
};