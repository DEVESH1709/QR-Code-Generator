

const wrapper =document.querySelector(".wrapper"),
generateBtn =wrapper.querySelector(".form button");
qrinput =wrapper.querySelector(".form input");
let resetbutton = document.querySelector(".btn")

qrImg = wrapper.querySelector(".qrcode img")
generateBtn.addEventListener("click",()=>{
    let qrValue = qrinput.value;
    if(!qrValue) return;
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data= ${qrValue} `
 generateBtn.innerText ="Generating QR code..."
    // console.log(qrValue)
    qrImg.addEventListener("load",()=>{
        wrapper.classList.add("active");
        generateBtn.innerText="Generate QR code"
    })

})

resetbutton.addEventListener("click",()=>{
    wrapper.classList.remove("active");
})