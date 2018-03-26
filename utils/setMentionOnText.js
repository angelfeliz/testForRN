 const  setMentionOnText =  (mention, text = '', start = 0) => {
  
  let newText = '';        
  
  let characters = text.substr(0,start).match(/@\w*/g);
  
  let lettersCount = 0;
  
  if(characters) {
      lettersCount = characters[characters.length-1].length;     
      let charactersAtLeft = text.substr(start - 1 - lettersCount, start).length;       
      let characterAtLeft = '';
      if(charactersAtLeft <= 1) {
        characterAtLeft = '';
      }
      else{
        characterAtLeft = text.substr(start - 1 - lettersCount, start).charAt(0) === ' ' ? '' : ' ';
      }        
      
  let characterAtRight = text.charAt(start) === ' ' ? '' : ' ';  
  newText = text.substr(0, start - lettersCount) + characterAtLeft + '@'+mention + characterAtRight + text.substr(start);            
       
  return newText;
  }
}

export default setMentionOnText;