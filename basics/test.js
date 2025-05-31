

/*console.log("parva jain")

const heros =["parv","dishan","divyansh","shree"]
let myObj = {
    name : "parv",
    age : 22,
}

console.table(myObj);

const myFunction = function(){
    console.log("hello world");
}

const gamename=new String('parva jain')
console.log(gamename)
console.log(typeof gamename)

const score = 400
const balance =new Number(100)
console.log(balance)
console.log(balance.toString())
console.log(balance.toFixed(1))

const oN=23.4567
console.log(oN.toPrecision(3))
const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'))



//++++++++++maths+++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4))//-ve to +ve
//Math.round
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))

console.log(Math.random())//values bw 0 to 1
console.log(Math.floor(Math.random()*10)+1)

const min =10
const max =20
//********imp formula ***********
console.log(Math.floor(Math.random()*(max-min+1)) + min)

//++++++++++++dates+++++++++++++++++++++++

let myDate =new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())
console.log(myDate.toDateString())
console.log(typeof myDate)

let myCreateDate=new Date(2025,0,26)
console.log(myCreateDate.toDateString())

let myTimeStamp= Date.now()
console.log(myTimeStamp)
console.log(myCreateDate.getTime())
 console.log(Math.floor(Date.now()/1000));


 let newDate=new Date()
 console.log(newDate);
 console.log(newDate.getMonth() + 1)
  console.log(newDate.getDate())

let newDate =new Date()
  newDate.toLocaleString('default',{
    weekday : "long"
  })
  console.log(newDate)
*/
  //arrray++++++++++++++ js array are resizable,make shallow copies heap(same refrance points)
  const myarr = [0,1,2,3,4,5]
  const myheros = ["shaktiman","heros"]
  console.log(myarr,myheros)
myarr.push(6)
myarr.push(7)
console.log(myarr,myheros)
myarr.pop()
myarr.unshift(9)//similarly shift
console.log(myarr,myheros)
console.log(myarr.includes(9))
console.log(myarr.indexOf(4))
const newArr =myarr.join()
