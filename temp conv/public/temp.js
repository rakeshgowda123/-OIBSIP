let celciusInput = document.querySelector('#celcius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelviInput = document.querySelector('#kelvi > input')

let button = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener("input",function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*9/5) + 32
    let kTemp = (cTemp+272.15)
    fahrenheitInput.value = roundNumber(fTemp)
    kelviInput.value = roundNumber(kTemp)


})
fahrenheitInput.addEventListener("input",function(){
    let fTemp = parseFloat(fahrenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) +273.15
    celciusInput.value = roundNumber(cTemp)
    kelviInput.value = roundNumber(kTemp)


})
kelviInput.addEventListener("input",function(){
    let kTemp = parseFloat(kelviInput.value)
    let cTemp = kTemp-237.15
    let fTemp = (kTemp -237.15) * (9/5) + 32

celciusInput.value = roundNumber(cTemp)
fahrenheitInput.value = roundNumber(fTemp)

})


button.addEventListener('click',()=>{
    celciusInput.value = ""
    kelviInput.value = ""
    fahrenheitInput.value = ""
})

const printbtn = document.getElementById("printbtn");
printbtn.addEventListener("click",()=>{
    printbtn.disabled = true;
    window.print();
    // setTimeout(() =>{
    //     printbtn.disabled =false;
    // },1000);
});