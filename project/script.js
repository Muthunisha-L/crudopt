// selecting popupbox,popup overlay and button

var popupboxdata=document.querySelector(".popupbox")
var overlaydata=document.querySelector(".overlay")
var buttondata=document.getElementById("add-popup")

buttondata.addEventListener("click",function(){
    overlaydata.style.display="block"
    popupboxdata.style.display="block"
})

// select cancel button

var cancel=document.getElementById("cancelbook")
cancel.addEventListener("click",function(event){
    // addeventlistener la default ah event irukum and form use pannum button click panna 
    // page loga agama iruka preventdefault method use pannanum
    event.preventDefault()
    overlaydata.style.display="none"
    popupboxdata.style.display="none"
})

// select container,addbook,booktitle,bookauthor,bookdescription

var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var booktitle=document.getElementById("booktitle")
var bookauthor=document.getElementById("bookauthor")
var bookdescription=document.getElementById("bookdescription")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    // template literals
    div.innerHTML=`<h2>${booktitle.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${bookdescription.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    overlaydata.style.display="none"
    popupboxdata.style.display="none"

})

function deletebook(event)
{
    event.target.parentElement.remove()
}













