//// Write a function to find grater no from array
let arr=[23,4,-56,73,9,100]
// let graterno=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]> graterno){
//         graterno=arr[i]
//     }
// }
// console.log(graterno)

//--------------------
function grtNo(arr){
    let graterno=0
for(let i=0;i<arr.length;i++){
    if(arr[i]> graterno){
        graterno=arr[i]
    }
}
return graterno
}

console.log(grtNo(arr))

//---------------
// Write a function to sort array assending
function sort(arr){  
    let newArr=[]
    let temp;
    for(let i=0;i<arr.length;i++){

    for(let i=0;i<arr.length;i++){
        if(arr[i]<arr[i+1]&&i+1<arr.length){
            temp=arr[i+1]
            arr[i+1]=arr[i]
            arr[i]=temp
        }
    }
}
    return arr
}
console.log(sort(arr))
//let arr=[23,4,-56,73,9,100]
//---------------------------------------------

//-------------------
// Write a function to reverse given number like 341 to 143
let a=341

//console.log(a.split("").reverse().join(""))
console.log(a.toString().split("").reverse().join(""))

//--------------------------------------

//make gratest no from array elements
//arr=[23,4,-56,73,9,100]
let newArr=arr.join("").split("")
console.log(newArr)
let b="1234506789"
let newarr2=newArr.filter(el=>{
    return b.includes(el.toString())
    //console.log(el.toString())
})

function sort1(arr){  
    let newArr=[]
    let temp;
    for(let i=0;i<arr.length;i++){

    for(let i=0;i<arr.length;i++){
        if(arr[i]<arr[i+1]&&i+1<arr.length){
            temp=arr[i+1]
            arr[i+1]=arr[i]
            arr[i]=temp
        }
    }
}
    return arr
}

console.log(newarr2)
console.log(sort1(newarr2).join("")) 

// Write a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
let arr2=[11,22,33,44,55,66,77]

let evenNoAdd=0
let oddNoAdd=0
for(let i=0;i<arr2.length;i++){
    if(arr2[i]%2==0){
        evenNoAdd=evenNoAdd+arr2[i]
    }
    else {
        oddNoAdd=oddNoAdd+arr2[i]
    }
}
console.log(evenNoAdd)
console.log(oddNoAdd)

// -----------------------------
// Write a function that takes a string as input and returns the reverse of that string.

// Write a function to make even or odd seperate array .
let rowArr=[22,11,44,555,66,77,88,99,100,111]
let evenArr=[]
let oddArr=[]

function sortArr(arr){
    arr.forEach(el => {
        if(el%2==0){
            evenArr.push(el)
        }
        else {
            oddArr.push(el)
        }
    });
}

sortArr(rowArr)
console.log(`even Array = ${evenArr}`)
console.log(`odd Array = ${oddArr}`)


// Write a function that takes a string as input and returns the reverse of that string.

str="dipanshu"
console.log(str.split("").reverse().join(""))
let revStr="";
for(let i=str.length-1;i>=0;i--){
    revStr=revStr+str[i]
}
console.log(revStr)
let revStr2=""
for(let i=0;i<str.length;i++){
    revStr2=str[i]+revStr2
}
console.log(revStr2)
//---------------------------------------------------------------

// Write a function that takes an array of strings and returns a new array with only the strings that have a length greater than 5.


strArr=["dipanshu","chawde","neel","niranjan","nitin","aditya"]
// strArr.forEach(el=>{
//     el.split().length==
// })

let newArr3=strArr.filter(el=>{
    return el.split("").length > 5
})
console.log(newArr3)

//---------------------------
let newArr4=[];
for(let i=0;i<strArr.length;i++){
    let aa=strArr[i]
    if(aa.length > 5){
        newArr4.push(strArr[i])
    }
}

console.log(newArr4)

// Write a function to count the number of vowels (a, e, i, o, u) in a given string.

let str1="my name is dipanshu"
let count=0
vovel ="aeiouAEIOU"
for(let i=0;i<str1.length;i++){
    if(vovel.includes(str1[i])){
        count++
    }
}
console.log(count)

// Write a function to check if a given string is a palindrome 

let str2="nitin"
let revs=""
for(let i=0;i<str2.length;i++){
    revs=str2[i]+revs
}
//console.log(revs)
if(revs==str2){
    console.log(`${str2} is palandrome`)
}
else {
    console.log(`${str2} is not palandrome`)
}


//Write a function to capitalize the first letter of each word in a given sentence.

let str3="my name is dipanshu"
let cstr=""
cstr=cstr+str3[0].toUpperCase()
for(let i=1;i<str3.length;i++){
    
    if(str3[i]== " "){
        cstr=cstr+str3[i]
        cstr=cstr+str3[i+1].toUpperCase()
        i=i+1
    }
    else {
        cstr=cstr+str3[i]
    }

}

console.log(cstr)
//---------------------------------------------
// Write a function to reverse words in a given sentence.
str3="my name is dipanshu"

strToRev = str3.split(" ")
let revArr=[]
strToRev.forEach(el=>{
    revArr.push(el.split("").reverse().join(""))
})

console.log(revArr.join(" "))


//program to delete duplicate charactor from string
str3="my name is dipanshu"
let str4 = new Set(str3)
//str4=str3
let str5=[]
str5=str4
console.log(Array.from(str4).join(""))

//write a function to find count of  char
//solution 1
str3="my name is dipanshu"

let frequency={}

for(let i=0;i<str3.length;i++){
    char=str3[i]
    if(!frequency[char]){
                frequency[char]=1
       
    }
    else {
        frequency[char]++
    }
  }
    console.log(frequency)

   Object.entries(frequency).forEach(([char , count])=>{
    console.log(`char: ${char} and frequency :${count} `)
   })

//-------------------------------------------
//solution2
//  str3 = "my name is dipanshu";
// const frequency = {};

// for (let i = 0; i < str3.length; i++) {
//     let char = str3[i];
//     if (!frequency[char]) {
//         frequency[char] = 1;
//     } else {
//         frequency[char]++;
//     }
// }

// for (const [char, count] of Object.entries(frequency)) {
//     console.log(`Count of '${char}' is ${count}`);
// }

//solution3---------------------------------------

let newStr="i am dipanshu"
let chars=[]
let counts=[]

for(let i=0;i<newStr.length;i++){
    let char=newStr[i]
   let index =chars.indexOf(char)
   if(index === -1){
    chars.push(char)
    counts.push(1)
   }
   else{
    counts[index]++
   }
}

console.log("answer is ")
for(let i=0;i<chars.length;i++){
console.log(`char :  ${chars[i]} and count : ${counts[i]}`)
}


//-----------------------------
//write a function to print a number from 100 to 999 whose addition is 21
console.log("-------------------------")
for(let i=100;i<=999;i++){
    let count=0;
    let istr=i.toString().split("")
    //console.log(istr)
    for(let i=0;i<istr.length;i++){
        count=count+Number(istr[i])
    }
    if(count==21){
        console.log(i)
    }
}

console.log("-------------------------")
//write a code to print 
// *
// * *
// * * * 
// * * * * 
// * * * * * *

let str6='*'
for(let i=1;i<=5;i++){
    console.log(str6.repeat(i))
}

console.log("-------------------------")
//write a code to print 
// * * * * * *
// * * * * 
// * * *
// * *
// *
str6='*'
for(let i=5;i>=1;i--){
    console.log(`${str6} `.repeat(i))
}