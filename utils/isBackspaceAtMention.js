const isBackspaceAtMention = ({start, end}, text) => {
    if(start) {           
        let firstHalfMention = text.substr(0, start).match(/@\w*|\w*/g) || [];    
         
        if(firstHalfMention.length > 0){
            let first = firstHalfMention.filter(item => item !== '');
        
           return first[first.length-1].match(/@\w*/) ? true : false;
        }     
        return firstHalfMention;
}
}

export default isBackspaceAtMention;