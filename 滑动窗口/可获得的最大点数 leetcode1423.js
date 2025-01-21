/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let totalSum = cardPoints.reduce((sum, num) => sum += num, 0)
    if(cardPoints.length === k) return totalSum
    let lastK = cardPoints.length - k
    let minSum = 0
    let res = totalSum
    let left = 0
    for(let right = 0;right < cardPoints.length;right++){
        minSum += cardPoints[right]
        if(right - left + 1 === lastK){
            if(res > minSum) res = minSum
            minSum -= cardPoints[left++]
        }
    }
    return totalSum - res
};