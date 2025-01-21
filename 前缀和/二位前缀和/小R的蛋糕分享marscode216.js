function solution(n, m, a) {
    // PLEASE DO NOT MODIFY THE FUNCTION SIGNATURE
    // write code here
    let res = 1e9
    let preSum = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => 0));
    //计算前缀和
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            preSum[i][j] = preSum[i - 1][j] + preSum[i][j - 1] - preSum[i - 1][j - 1] + a[i - 1][j - 1]
        }
    }
    let totalSum = preSum[n][m]
    let maxLen = n > m ? m : n
    for (let len = 1; len <= maxLen; len++) {
        if (len === 1) {
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < m; j++) {
                    res = Math.min(res, Math.abs(totalSum -  2 * a[i][j]))
                }
            }
        } else {
            for (let i = len; i <= n; i++) {
                for (let j = len; j <= m; j++) {
                    let s1 = preSum[i][j] - preSum[i - len][j] - preSum[i][j - len] + preSum[i - len][j - len]
                    let s2 = totalSum - s1
                    res = Math.min(res, Math.abs(s1 - s2))
                }
            }
        }
    }
    // console.log(res)
    return res;
}

function main() {
    console.log(solution(3, 3, [[1, 2, 3], [2, 3, 4], [3, 2, 1]]) === 1);
    console.log(solution(4, 4, [[1, 2, 3, 4], [4, 3, 2, 1], [1, 2, 3, 4], [4, 3, 2, 1]]) === 2);
    console.log(solution(2, 2, [[5, 5], [5, 5]]) === 10);
}

main();