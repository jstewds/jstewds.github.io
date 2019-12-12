let input = document.getElementById('searchInput');

input.addEventListener('keyup',function(key){
  if(key.keyCode == 13){
    let inputStr = input.value;
    if(inputStr.includes(".")){
      location.replace(`https://${inputStr}`);
    }
    else{
      location.replace(`https://www.google.com/search?q=${inputStr}`);
    }
  }
});