function rerun(a) {
    var card = document.getElementById("speed");
    document.querySelector(".calc-area").style.transform = "translate(-50%,-50%)";
    card.style.transform = "translate(-50%,500%)";
    if(a == "GB")
      {
        document.querySelector("#GB").classList.add("shown");
      }
    else if(a == "Mb");
      {
      document.querySelector("#Mb").classList.add("shown");
      }
    console.log(a);
  }
  
  function enter_key(e){
    if(e.keyCode==13)
      {
        dwn_time();
      }
  }
  
  function dwn_time() {
    var file_size = document.getElementById("file-size").value;
    var dwn_spd = document.getElementById("down-speed").value;
    var time_s = file_size * 1024 / (dwn_spd / 8);
    var card = document.getElementById("speed");
    time_s = parseFloat(Math.round((time_s) * 100) / 100);
    parseFloat(Math.round(time_s * 100) / 100).toFixed(2);
    var time_m = parseFloat(Math.round((time_s / 60) * 100) / 100).toFixed(2);
    var time_h = parseFloat(Math.round((time_m / 60) * 100) / 100).toFixed(2);
  
    card.innerHTML = "Your file will be downloaded in:<br> " + time_s + " seconds or ,<br>" + time_m + " minutes or ,<br>" + time_h + " hours ";
    card.style.transform = "translate(-50%,100%)";
    document.querySelector(".calc-area").style.transform = "translate(-50%,-70%)";
  }