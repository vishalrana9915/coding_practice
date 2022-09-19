var groupAnagrams = function(strs) {
    let groups = [];
    let processed = {}
    for(let i=0;i<strs.length;i++){
        let arr = []
        if(!processed[strs[i]]){
            processed[strs[i]] = true;
            arr.push(strs[i]);
            for(let j=i+1; j< strs.length;j++){
                let isAnagram = checkIfAnaGram(strs[i],strs[j]);
                if(isAnagram){
                    arr.push(strs[j]);
                    processed[strs[j]] = true;
                }
            }
            if(arr[0] !== undefined || null){
                groups.push(arr);
            }
        }
        
        
    }
    return groups
};



/**
*Checking if this string is an anagram or not
*/
const checkIfAnaGram = (s,t)=>{
    if(s.length !== t.length) return false;
    let hash = {};
    for(let i=0;i<s.length;i++){
        hash[s[i]] = hash[s[i]] ? hash[s[i]]+1 : 1;
    }
    
    for(let i=0;i<t.length;i++){
        if(!hash[t[i]] || hash[t[i]]-1 <0){
            return false;
        }else{
            hash[t[i]] -=1;
        }
    }
    
    return true;
}


// const groupAnagrams = (strs)=>{
//     let groups = {}
//     for(let i=0;i<strs.length;i++){
//         let SubArray = strs[i].split("");
//         let sum = 0;
//         SubArray.forEach(element => {
//             sum += element.charCodeAt();
//         });
//         if(groups[sum]){
//             groups[sum].push(strs[i])
//         } else{
//             groups[sum] = [strs[i]]
//         }
//     }

//     return Object.values(groups)
// }

// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// console.log(groupAnagrams(["a"]))
// console.log(groupAnagrams([""]))
// console.log(groupAnagrams(["cab","tin","pew","duh","may","ill","buy","bar","max","doc"])) //[["max"],["buy"],["doc"],["may"],["ill"],["duh"],["tin"],["bar"],["pew"],["cab"]]
