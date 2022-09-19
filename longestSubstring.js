var lengthOfLongestSubstring = function(s) {
    let subStringLength=1;
    let currentStringLength=0;
    let elements=[]
    console.log({s})
    for(let i=0;i<s.length-1;i++){
        for(let j=i+1; j< s.length; j++){
            if(elements.length == 0){
                elements.push(s[i]);
                currentStringLength =1;
            }
            console.log({elements, i, j})
            if(elements.indexOf(s[j])>=0){
                elements = [];
                currentStringLength = 0;
                break;
            }else {
                elements.push(s[j]);
                currentStringLength += 1;
            }

            if(currentStringLength > subStringLength){
                subStringLength = currentStringLength
            }
        }
    }
    
    console.log({subStringLength})
    return subStringLength;
};

// lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("bbbbbb")
// lengthOfLongestSubstring('pwwkew')
// lengthOfLongestSubstring("dvdf")