function solution(A) {
    A.sort((a, b) => a - b);
    let res = 0;
    for (let i = 0; i < A.length; i++) {
        let count = cal(A[i], A);
        if (count > (A.length - count)) {
            res++;
        }
    }
    return res;
}

function cal(num, A) {
    let l = 0, r = A.length - 1;
    while (l < r) {
        let mid = l + r + 1>> 1;
        if (num >= A[mid]) {
            l = mid;
        } else {
            r = mid - 1;
        }
    }
    // 确保包括当前学生自己
    return l + 1;
}