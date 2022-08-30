//1
const data = { a: 1 };
const dataV2 = [5,6,6,8]
//write your code here 

function isPlainObject(item) {
    if(Object.prototype.toString.call(item) === '[object Object]'){
        return true} else {return false}
} 
console.log(isPlainObject(data)); // true
console.log(isPlainObject(dataV2))
console.log(Object.prototype.toString.call(dataV2));

//2
const data2 = { a: 1, b: 2 };

function makePairs(item) {

    return Object.entries(item)
}
//write your code here 
console.log(makePairs(data2)); // [['a', 1], ['b', 2]] 

//3
const data3 = { a: 1, b: 2 };

function without (item, value) {
    // let newData = {}
    // if(item.filter(el => Object.keys[el] === value).length > 0){
    //     console.log(newData.push(item))
    // }
    for (const key in item) { // meal is an object
        // console.log('key is', key);
        
        if (key.includes(value) && item[key] !== '') {
    
            delete item.value
            return item
        }
        
      }

    // const result = this.menu.filter(el => el.name === item).length > 0 // returns an array

}
//write your code here 
console.log(without(data3, 'b')); // { a: 1 }


//4
const data4 = { a: 1, b: undefined };
const data40 = { a:undefined };
const data22 = {}
const data33 = {aa:25, bb:65, cc: undefined}

function isEmpty(item) {
    for(let key in item){
        if(item[key] === undefined && Object.keys(item).length === 1){
            return true
        }
    }
    if(Object.keys(item).length === 0){
        return true
    } return false
} 

//write your code here 
console.log(isEmpty(data4)); // false
console.log(isEmpty(data40)); // true 
console.log(isEmpty(data22));
console.log(isEmpty(data33));

//5
const data5 = { a: 1, b: 1 };  
const data51 = { a: 1, b: 1 };  
const data52 = { a: 1, b: 2 };
//write your code here 

function isEqual(obj1, obj2){
 
    let array1 = Object.getOwnPropertyNames(obj1);
    let array2 = Object.getOwnPropertyNames(obj2);

    if(array1.length !== array2.length) {
        return false
    } 
    for(let i = 0; i <= array1.length; i++) {
        let key = array1[i];

        if (obj1[key] !== obj2[key]) {
            return false
        }
    } return true
} 
//or 

// function isEqual(obj1, obj2) {
//     if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
//       return true;
//     } else {
//       return false;
//     }
//   }

console.log(isEqual(data5, data51)); // true  
console.log(isEqual(data5, data52)); // false

//6
// const data6 = { a: { b: [1, 2, 3] } }
// //write your code here 
// console.log(invoke(data6, 'a.b', 'splice', [1, 2])) // [2, 3]


// //7
// const data7 = { a: { b: undefined } };
// //write your code here 
// console.log(isEmptyDeep(data7));


// //8
// const data8 = { a: 1, b: { c: 1 } };  
// const data81= { a: 1, b: { c: 1 } };  
// const data82= { a: 1, b: { c: 2 } };
// //write your code here 
// console.log(isEqualDeep(data8, data81));// true  
// console.log(isEqualDeep(data8, data82)); // false  


// //9
// const data9 = { a: 1, b: 2 };  
// const data91 = { c: 1, b: 2 };
// //write your code here 
// console.log(intersection(data9, data91)); // { b: 2 }


// //10
// const data10 = { a: 1, b: { c: 3 } };  
// const data11 = { c: 1, b: { c: 3 } };
// //write your code here 
// console.log(intersectionDeep(data10, data11)); // { b: { c: 3 } }