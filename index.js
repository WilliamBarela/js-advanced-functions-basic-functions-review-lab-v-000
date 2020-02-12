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
// ES5

/*

*/
