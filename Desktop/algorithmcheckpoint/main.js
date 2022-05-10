function Sentence(str){
  
    console.log(`${str.length}`);
  
    console.log(str.trim().split(/\s+/).length); //word count
  
  
     // find the count of vowels
     const count = str.match(/[aeiou]/gi).length;
  
     // return number of vowels
    console.log(count); 
  
  }
  
  
  Sentence("At this checkpoint, you are asked to write an algorithm that read a sentence, which ends with a point, character by character, and to determine:");