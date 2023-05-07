/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const meterToFeet = document.getElementById("unit-one")
const literToGallon = document.getElementById("unit-two")
const kiloPounds = document.getElementById("unit-three")
const errorAlert = document.getElementById("alert")
const feetRate = 3.281
const gallonRate = 0.264
const poundRate = 2.204



function convertUnits (){
    let input = parseInt(inputEl.value)
        if ( input >= 0 ) {
         // Conversion between meter and feet
            let toFeet = input * feetRate
            let toMeters = input/feetRate
            // Conversion between liter and gallons
            let toLiter = input/gallonRate
            let toGallons = input * gallonRate
            // Conversion between kilogram and pounds
            let toPounds = input * poundRate
            let tokillogram = input/poundRate
    
            meterToFeet.innerHTML = `${input} meters = ${toFeet.toFixed(3)} feet | ${input} feet = ${toMeters.toFixed(3)}  meters`
            literToGallon.innerHTML = `${input} liters = ${toGallons.toFixed(3)} gallons | ${input} gallons = ${toLiter.toFixed(3)}  litters`
            kiloPounds.innerHTML = `${input} Kilos = ${toPounds.toFixed(3)} pounds | ${input} pounds = ${tokillogram.toFixed(3)}  kilos`
            errorAlert.textContent = ""
        } else if (input < 0 ){
            errorAlert.textContent = " Error : Please enter a positive number"
            }
        else{
            errorAlert.textContent = "OOPS! Please enter a  number"
            }
    }
      
    
convertBtn.addEventListener("click", function(){    
    convertUnits()
})