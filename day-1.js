// Day-1 of Learning.JS

console.log('This is my first javascript program')

//string
console.log('this is a string')

//string concatenation
console.log('bat'+'man')

//addition of numbers in different ways
console.log('1'+'1')
console.log(1+1)

// performing arithmetic operations ( Addition,subtraction,multiply,divide,modulus(remainder))
console.log(10+5)
console.log(10-5)
console.log(10*5)
console.log(10/5)
console.log(10%5)

//Boolean
console.log(true)

//variables
const age=20
console.log(age)
let sum=0
let num1=300
let num2=50
sum=num1+num2
console.log(sum)

//Function
function hello(){
    console.log('hello!')
}
hello()

//passing values 
function name(firstname,lastname){
    console.log('first name is: '+firstname)
    console.log('lastname is: '+lastname)
}
name('Dhruv','Gupta')
name()
function logger(arg){
    console.log(arg)
}
logger('hello')

//Arrow function with _
const ten = _ =>10
const rslt = ten()
console.log(rslt) 

//Arrow function with ()
const num=()=>10
const result =num()
console.log(result)

//objects

//Empty object
const obj={}

//Dot notation
const aobj={
    firstnam:"Dhruv"
}
console.log(aobj.firstnam)

//Bracket notation
const anobj={
    firstnam:"Dhruv"
}
console.log(anobj['firstnam'])

/*set value of a property by dot notation
const dotobj={
    dotobj.lastnam="Gupta"
}
console.log(dotobj.lastnam)

//set value of a property by bracket notation
const bracketobj={
    bracketobj['lastnam']="Gupta"
}
console.log(bracketobj[lastnam])*/

//function in object
const anobject={
    sayname:function (){
        console.log('my name is Dhruv')
    }
}
anobject.sayname()

