let button = document.getElementById("button")
let input = document.getElementById("input")
let img = document.getElementById("img")

button.addEventListener('click',onButtonClick)

async function  onButtonClick  (){
    let container = document.getElementsByClassName("container")[0]
 button.innerText = "Generating QR Code ....."
     img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
    img.addEventListener("load",()=> {
        container.classList.add("active")
        button.innerText = "Generate QR Code"
    })
    
   
    img.innerText= result
}

