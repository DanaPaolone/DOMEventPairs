let cookieCounter = 0;
let cookieText = document.getElementById("cookieText")
let cookieImage = document.getElementsByTagName("cookie1")
cookieImage.addEventListenter("click",function(){
    cookieCounter++
    cookieText.innerHTML = cookieCounter
})