
    var InputURL = document.getElementById("link");
    var Button = document.getElementById("send");

    Button.addEventListener("click", ()=>{
      sendURL(InputURL.value);
    })

    function sendURL(URL){
      var cutURL = URL.slice(0, 13);
  
// Berilgan link youtube linki ekanligiga boshlang'ich oddiy tekshiruv

      if (cutURL === "https://youtu") {
      window.location.href += `download?URL=${URL}`;
      document.getElementById("spinners").style.display = "block"     
      } else {
        alert("Please enter valid YouTube link ... 🤨🤨🤨")
      }
    }
