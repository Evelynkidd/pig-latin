$(document).ready(function(){
  $("#pig-latin-form").submit(function(event){
    var str = $("#sentence").val().toLowerCase();

    function translatePigLatin(str){
      //declared variable with vowels in an array
      var vowels = ["a", "e", "i", "o", "u"],
      //spliting the user input value
      result = str.split("");
      //if the user input starts with a vowel, add the string "way" to the end of the user input
      if (vowels.includes(str.charAt(0))){
        return str += "way";
      //else, loop
      }else{
        //variable index starts at a value of 0, sets a condition that if the var value is under the length of the string it will add 1 value every loop
        for(var i = 0; i < str.length; i++){
          //if there are no vowels (! indicates "no"), checks to see if the first letter in the string is a vowel, this code will only work for the first letter of the word otherwise it is passed off back to line 11
          if(!vowels.includes(str[i])){
            //shift moves the first value (the first letter of a word) to the back
            result.push(result.shift());
          }else{
            //push adds "ay" to any values (word) that make it through the vowel check and has its first value (letter) shifted to the back"
            result.push("ay");
            return result.join("");
          }
        }
      }
    }
    $("#output").show().text(translatePigLatin(str));
      event.preventDefault();
    });
});
