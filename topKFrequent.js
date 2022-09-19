var topKFrequent = function(nums, k) {
    let heap = {}
    for(let i=0;i<nums.length;i++){
        if(heap[nums[i]]){
            heap[nums[i]] += 1;
        }else{
            heap[nums[i]] = 1;
        }
    }

    console.log({heap});

    for(let values in heap){
        console.log({values})
    }


    let values = Object.keys(heap).sort((r,s)=>
    {if(r <s){return -1} else return 1});
    return values.slice(0,k)
};

// console.log(topKFrequent([1,1,1,2,2,3],2));
// console.log(topKFrequent([1],1))
// console.log(topKFrequent([-1,-1],1))
// console.log(topKFrequent([3,0,1,0],1))  
console.log(topKFrequent([4,1,-1,2,-1,2,3],2))