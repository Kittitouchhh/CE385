function calculateBMI(weight,height){
    let bmi = weight/(height*height) * 10000

    
    if(bmi <= 18.6){
        console.log(`BMI ของคุณคือ ${bmi.toFixed(2)} มีค่า bmi < 18.5 เกณฑ์: ผอม`)
    }
    if(bmi >= 18.5 && bmi <= 24.9){
        console.log(`BMI ของคุณคือ ${bmi.toFixed(2)} มีค่า bmi > 18.5 เกณฑ์: ปกติ`)
    }
    if(bmi >= 25 && bmi <=29.9){
        console.log(`BMI ของคุณคือ ${bmi.toFixed(2)} มีค่า bmi > 26 เกณฑ์: อ้วน$`)
    }
    if(bmi >=30){
        console.log(`BMI ของคุณคือ ${bmi.toFixed(2)} มีค่า bmi > 30 เกณฑ์: บอส(อ้วนมาก):`)
    }
}
calculateBMI(70,175)