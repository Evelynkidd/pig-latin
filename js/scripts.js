$(document).ready(function(){
  $("#pig-latin-form").submit(function(event){
    var str = $("#sentence").val().toLowerCase();

    function translatePigLatin(str){
      var vowels = ["a", "e", "i", "o", "u"],
      result = str.split("");

      if (vowels.includes(str.charAt(0))){
        return str += "way";
      }else{
        for(var i = 0; i < str.length; i++){
          if(!vowels.includes(str[i])){
            result.push(result.shift());
          }else{
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
