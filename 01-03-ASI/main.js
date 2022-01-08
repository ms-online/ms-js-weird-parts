// console.log('hello world')
// console.log('summer');

// js并不会在每一行的每一个换行符后添加";"
// let sum = 1 +
// 2
// console.log(sum)


function test (){
    return
    {
        age:27
    }
}

const obj = test();
console.log(obj) // undefined