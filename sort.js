// let x = ['1','2','15','-7','300'];
// let y = x.sort()

// console.log(y)


// function test(array){
//     let hasPos = false;
//     let hasNeg = false;

//     array.forEach(num => {
//         hasPos = num >0;
//         hasNeg = num <0;
//     });

//     return [hasPos, hasNeg]

// }

// console.log(test([0,-1,-2]))
// console.log(test([]))
// console.log(test([0,1,2]))
// console.log(test([-1,0,1]))



function sortBy(array,prop){
    return array.sort((a,b)=>{
        if(a[prop] < b[prop]) return -1
        if(a[prop] > b[prop]) return 1

        return 0;
    })
}

sortBy()