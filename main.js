window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  }else{
    navbar.classList.remove("sticky")
  } 
}

//send message button//

let msgBtn = document.getElementById("send-message");
let messageReaction = document.querySelector(".message-reaction")
let after = document.querySelector(".message-reaction h3::after");
let before = document.querySelector(".message-reaction h3::before");

msgBtn.addEventListener("click",changeColor)

function changeColor(){
    msgBtn.style.backgroundColor ="#FFFFF3";
    msgBtn.style.color = "#04e904f3";
    messageReaction.style.display = "block";
    msgBtn.style.border = "1px solid #04e904f3";
   

}


after.addEventListener("click",function(){
  messageReaction.style.display = "none";

})