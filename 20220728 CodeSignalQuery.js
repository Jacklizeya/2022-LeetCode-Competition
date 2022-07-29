
function solution(a, b, queries) {
    let result =[];
    let aFrequencyStorage = generageFrequency(a);
    let bFrequencyStorage = generageFrequency(b);
    for (let query of queries) {
        console.log('query', query)
        if(query.length ===3) {
            let i = query[1];
            let x = query[2];
            bFrequencyStorage[b[i]] --;
            b[i] += x;
            if (bFrequencyStorage[b[i]]) {
                bFrequencyStorage[b[i]] ++;
            }
            else {
                bFrequencyStorage[b[i]] = 1;
            }
        }
        else {
            let x=query[1];
            console.log(a, b, aFrequencyStorage, bFrequencyStorage)
            result.push(pairs(aFrequencyStorage, bFrequencyStorage, x));
        }
    }
    return result;
}

function pairs (storageA, storageB, x) {
    console.log("debugger", storageA, storageB, x)
    let pairs = 0;
    for(let numberKey in storageA) {
        if (storageB[x-numberKey]) {
            pairs += storageA[numberKey] * storageB[x-numberKey];

        }
    }
return pairs;
}

function generageFrequency(arr) {
    let storage ={};
    for(let item of arr) {
        if(!storage[item]) {
            storage[item] = 1;
        }
        else {
            storage[item] ++;
        }
    }
    console.log(storage);
    return storage;
}

console.log(solution([1, 2, 3,], [1, 4], [[1, 5] , [0, 0, 2], [1, 5]]))
