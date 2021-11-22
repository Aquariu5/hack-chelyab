const simples = (last) => {
    let all = [];
    for (let i = 3; i < last; ++i) {
        let flag = true;
        for (let j = i - 1; j >=2; --j) {
            if (i % j == 0) {
                flag = false;
                break;
            }
        }
        if (flag)
            all.push(i);
    }
    return all;
}

let input = 600851475143

const splitnah = (input) => {
    let coef = 10000;
    let low = simples(coef);
    let ans;
    let potentials = [];
    while (input != 1) {
        for (let sim of low) {
            if (input % sim == 0) {
                potentials.push(sim);
                input /= sim;
                if (input == 1) {
                    ans = Math.max(...potentials);
                    return ans;
                }
            }
        }
        low = simples(input);
    }
    return ans; 
}
console.log(splitnah(600851475143));

