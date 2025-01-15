//Day-2 of Learning.js

//Arrays
/*const grocery=['carrot','onion','potato']
console.log(grocery)
console.log(grocery.length)
const firstitem=grocery[0]
console.log(firstitem)
const lastitem=grocery[grocery.length-1]
console.log(lastitem)
grocery[1]='mushroom'
console.log(grocery)
grocery[8]='onion'
console.log(grocery)
let people=[
    'Franklin Roosevelt',
    'Thomas Edison',
    'Benjamin Franklin'
]
console.log(people[0])
people[1]='Inventor of the lightbulb'
console.log(people)

//position of array
const names=['Dhruv','Ram','Shyam']
const pos1=names.indexOf('Dhruv')
const pos2=names.indexOf('Ram')
console.log(pos1,pos2)

//Adding at start
const array=[3,4,5]
array.unshift(1,2)
console.log(array)

//Adding at end
array.push(6)
console.log(array)

//Removing items from end
const array1=array.pop()
console.log(array)

//Removing item from start
const array2=array.shift()
console.log(array)

//Exercise
let people1 = [
    'Benjamin Franklin',
    'Thomas Edison',
    'Franklin Roosevelt',
    'Mahatma Gandhi',
    'Napoleon Bonaparte',
    'Abraham Lincoln'
  ]
const copy=people1.slice()
const p=people1.indexOf('Mahatama Gandhi')
console.log('index of Mahatamai Gandhi= '+p)
people1.unshift('Winston Churchill')
console.log('Adding using unshift at start: '+people1)
const sp=people1.splice(0,0,'Albert Einstein')
console.log('Adding using splice at start: '+people1)
people.push('Charles Darwin')
console.log('Adding using pop at last: '+people)
const s=people1.splice(people1.length,0,'Walt Disney')
console.log('Adding using pop at last: '+people1)
const copy1=copy.splice(3,0,'Pablo Picasso','Ludwig van Beethoven')
console.log('Adding after Mahatama gandhi: '+copy1)
const remove=copy.shift()
console.log(('Removing using shift: ')+remove)
const remove1=copy.shift()
console.log(('Removing using shift: ')+remove1)*/

//For loop
function ballhit(){

}
for(let i=0;i<5;i++){
    const hit=i+1
    ballhit()
    console.log('number of times ballhit = '+hit+' times.')
    if (i<1){
        console.log('ballhit only one time')
    }
}
const vegetables=['potato','onion','carrot']
for(let i=0;i<vegetables.length;i++){
    console.log('there are '+vegetables[i],' in basket')
}
for(let vegetable of vegetables){
    console.log('there are '+ vegetable+' in the basket')

}
const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]
let array=[]
for(const num of numbers){
    if(num >10){
        array.push(num)
}
}
console.log(array)


