// code your solution here
function saturdayFun (activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`)
}
// console.log(saturdayFun("Go to the movies"));

function mondayWork (activity = "go to the office"){
    return (`This Monday, I will ${activity}.`)
}

function wrapAdjective (highlight = "*"){
    return function (message = "special"){
        return (`You are ${highlight}${message}${highlight}!`)       
    }
}
//console.log(wrapAdjective("||")("a dedicated programmer"))