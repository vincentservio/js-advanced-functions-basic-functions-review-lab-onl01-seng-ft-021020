// Your code here
function saturdayFun(activity="roller-skate") {
    return(`This Saturday, I want to ${activity}!`)
}

function mondayWork(activity="go to the office") {
    return (`This Monday, I will ${activity}.`)
}
// mondayWork()

function wrapAdjective(y = "*") {
    return function (x = "||") {
        return `You are ${y}${x}${y}!`
    }
}

const Calculator = {
   add(p, c) {
      return p + c
    },
    subtract(p, c) {
        return p - c
    },
    multiply(p, c) {
        return p * c
    },
    divide(p, c) {
        return p / c
    }
    
}
function actionApplyer(si, sp) {
    let x = si 

    for (let i = 0; i < sp.length; i++) {
        x = sp[i](x)
    }
return x
}
