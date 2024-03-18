 var gtr = document.querySelector("h5")

var add = document.querySelector("#add")
var remove = document.querySelector("#remove")


remove.addEventListener("click",function(){
    gtr.innerHTML="stranger"
    
    gtr.style.color = "red"
})



add.addEventListener("click",function () {
    gtr.innerHTML="friends"
    gtr.style.color = "green"
})



