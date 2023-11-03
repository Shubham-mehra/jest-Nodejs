const Anagram={
    isAnagram:(str)=>{
        var strrr=str;
        console.log("replace value " ,strrr.replace(/[^\w]/g,''))
        return str.replace(/[^\w]/g,'')
        .toLowerCase()
        .split('')
        .reverse()
        .join('')
    }
}

module.exports=Anagram;