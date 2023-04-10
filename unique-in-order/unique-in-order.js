var uniqueInOrder=function(iterable){
    let result = [];
    for (let i = 0; i < iterable.length - 1; i++) {
        if (iterable[i] !== iterable[i + 1]) {
            result.push(iterable[i + 1]);
        }
    }
    return result;
}

console.log(uniqueInOrder('AAABBCCCcccGGAAAAPP'));