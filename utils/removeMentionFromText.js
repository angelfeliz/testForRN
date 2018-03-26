const removeMentionFromText = ({start, end}, text = '') => {
   
    if(start && end === start) {           
    
       let newText =  text;
       let characters = text.substr(0,start).match(/@\w*/g);
       let lettersCount = 0;
       
       if(characters) {
           lettersCount = characters[characters.length-1].length;
       }

       if(text.charAt(start-lettersCount).match(/\w/)) {
          return text;
       }
    
       if(!text.substr(start).match(/\w/g)) {
         newText = text.substr(0, start-lettersCount);
       }
       else {
        newText = text.substr(0, start-lettersCount) + text.substr(start) ;
       }     
                     
       return newText;
    }
}

export default removeMentionFromText;