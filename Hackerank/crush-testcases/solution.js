function arrayManipulation(n, queries) {
    const accum = {};
    let last = 0,
        maxValue = 0;
    for (const [a, b, k] of queries) {
        accum[a] = (accum[a] || 0) + k;
        accum[b + 1] = (accum[b + 1] || 0) - k;
    }
    for (let itr = 1; itr <= n; itr++) {
        const current = accum[itr] || 0;
        last = last + current;
        if (last > maxValue) maxValue = last;
    }
    console.log('maxValue ->', maxValue)
    return maxValue;
}

arrayManipulation(10, [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
]) // 10

// arrayManipulation(5, [
//     [5, 3],
//     [1, 2, 100],
//     [2, 5, 100],
//     [3, 4, 100],
// ]) // 200


// arrayManipulation(10, [
//     [10, 4],
//     [2, 6, 8],
//     [3, 5, 7],
//     [1, 8, 1],
//     [5, 9, 15],
// ]) // 31

// arrayManipulation(4, [
//     [4, 3],
//     [2, 3, 603],
//     [1, 1, 286],
//     [4, 4, 882]
// ]) // Expected 882
