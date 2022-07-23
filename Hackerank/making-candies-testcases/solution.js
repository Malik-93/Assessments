
function minimumPasses(m, w, p, n) {
    let invest = 0,
        spend = Math.ceil(n / (m * w)),
        candies = 0;
    while (invest < spend) {
        let dinvest = Math.ceil((p - candies) / (m * w)),
            upgrade = Math.floor(candies / p)
        invest += dinvest;
        candies += m * w * dinvest;
        if (Math.floor(candies / p) >= Math.abs(m - w)) {
            candies -= Math.abs(m - w) * p;
            m > w ? w = m : m = w;
            if (upgrade > 0) {
                if (upgrade % 2 === 0) {
                    m = w = m + (upgrade / 2);
                } else {
                    m = w = m + Math.floor(upgrade / 2);
                    m++;
                }
                candies -= upgrade * p;
            }
        } else {
            m > w ? w += upgrade : m += upgrade;
            candies -= upgrade * p;
        }
        let minPass = Math.ceil((n - candies) / (m * w));
        if (spend > minPass + invest) spend = minPass + invest;
    }
    console.log('spend ->', spend);
    return spend;


}
minimumPasses(5184889632, 5184889632, 20, 10000) // 1
// minimumPasses(1, 1, 6, 45) // 16;
// minimumPasses(3, 1, 2, 12) // 3;
// minimumPasses(1, 100, 10000000000, 1000000000000) // 617737754;
// minimumPasses(123456789012, 215987654321, 50000000000, 1000000000000) // 1


