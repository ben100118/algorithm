function solution(n, array) {
    let maxArea = 0;

    // 遍历所有可能的窗口大小 k
    for (let k = 1; k <= n; k++) {
        let minHeight = Infinity;
        let currentArea = 0;

        // 初始化窗口
        for (let i = 0; i < k; i++) {
            minHeight = Math.min(minHeight, array[i]);
        }
        currentArea = k * minHeight;
        maxArea = Math.max(maxArea, currentArea);

        // 滑动窗口
        for (let i = k; i < n; i++) {
            // 移除窗口左边的元素
            if (array[i - k] === minHeight) {
                // 如果移除的元素是最小值，重新计算最小值
                minHeight = Math.min(...array.slice(i - k + 1, i + 1));
            } else {
                // 否则，只需比较新加入的元素
                minHeight = Math.min(minHeight, array[i]);
            }
            currentArea = k * minHeight;
            maxArea = Math.max(maxArea, currentArea);
        }
    }

    return maxArea;
}

function main() {
    // Add your test cases here
    console.log(solution(5, [1, 2, 3, 4, 5]) === 9);
    console.log(solution(6, [5, 4, 3, 2, 1, 6]) === 9);
    console.log(solution(4, [4, 4, 4, 4]) === 16);
}

main();