const form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const height = Number(document.querySelector("#height").value)
    const weight = Number(document.querySelector("#weight").value)
    const results= document.querySelector("#results")
    if(height==="" || height<0 || isNaN(height)){
        results.innerHTML = "Please enter valid height."
    }
    else if(weight==="" || weight<0 || isNaN(weight)){
        results.innerHTML = "Please enter valid weight."
    }
    else{
        const bmi = (weight/((height/1000)**2)).toFixed(2)
        results.innerHTML = `Your BMI is: ${bmi}. ${bmi<18.6?"You are underweight":(bmi>=18.6 && bmi<=24.9)?"Your BMI is in normal range":"You are overweight."}`

    }
})