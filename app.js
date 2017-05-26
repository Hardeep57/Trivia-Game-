console.log("game")
<div id="countdown">31</div>
<!-- Script -->
  var seconds;
  var temp;
 
  function countdown(){
    seconds = document.getElementById('countdown').innerHTML;
    seconds = parseInt(seconds, 30);
 
    if (seconds == 1){
      temp = document.getElementById('countdown');
      temp.innerHTML = "all done, bye bye";
      return;
    }
 
    seconds--;
    temp = document.getElementById('countdown');
    temp.innerHTML = seconds;
    timeoutMyOswego = setTimeout(countdown, 30000);
  } 
 
