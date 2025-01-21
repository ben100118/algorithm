var totalFruit = function(fruits) {
    let ans = 0, left = 0
    const map = new Map()
    for(let right = 0;right < fruits.length;right++){
        map.set(fruits[right], (map.get(fruits[right]) ?? 0) + 1)
        while(map.size > 2){
            const out = fruits[left]
            map.set(out, map.get(out) - 1)
            if(map.get(out) === 0) map.delete(out)
            left++
        }
        ans = Math.max(ans, right - left + 1)
    }
    return ans
};