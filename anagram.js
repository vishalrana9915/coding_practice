var isAnagram = function(s, t) {
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
};

console.log(isAnagram("aacc",'ccac'));
console.log(isAnagram("anagram",'nagaram'))
console.log(isAnagram("rat",'car'))