function Operation(type,a,b){
    if(type === "+"){
        return a+b 
    } else if(type === "-"){
        return a-b 
    } else if(type === "*"){
        return a*b 
    } else if(type === "/"){
        return a/b 
    } else {
        return "Invalid Operation Type."
    }
}
module.exports = Operation