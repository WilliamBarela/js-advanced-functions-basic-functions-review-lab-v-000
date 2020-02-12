// Your code here

// ES5, function declaration. By default, it may be hoisted
/*
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}
*/

// ES6
const saturdayFun = (activity = "roller-skate") => {
  return `This Saturday, I want to ${activity}!`
}

// both of these two are Functional expressions (not hoisted)
const mondayWork = (activity = "go to the office") => {
  return  `This Monday, I will ${activity}.`
}

//Anonymous Functions:
/*
// ES5
function(){console.log("do something")}

//ES6
() => {console.log("do something")
*/

//closures ES6

/*
const wrapAdjective = (flair = "*") => {
  return (quality = "special") => {
    return `You are ${flair + quality + flair}!`
  }
}
*/
// closure ES5

function wrapAdjective(flair = "*"){
  return function(quality = "special"){
    return `You are ${flair + quality + flair}!`
  }
}


