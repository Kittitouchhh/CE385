function fetchDataWithCallback(callback){
    setTimeout(() => {
        const data = "Hi Gus I'm Callback"
        callback(data)
    },2000) 
}

function fetchDataWithPromise(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const success = false

            if(success){
                resolve("Hi Gus I'm Promise When we DoNE!")
            }
            else{
                reject("Sorry i cant do on i Just REJect!")
            }
        }) 
    })
}

console.log("Start dowloading (Callback)....")

fetchDataWithCallback(function(result){
    console.log(result)
    console.log("----------------------------------")
})

console.log("Finish")
console.log("----------------------------------")


console.log("Start dowloading (Promise)....")
fetchDataWithPromise()
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
console.log("End of Script")