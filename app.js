// const string = "Bla Bla";
// function countCharacters(Text){
// const historgram = {};
// for(let i in Text){
//   const ch = Text[i]
//  historgram[ch] = (historgram[ch] || 0) + 1
// };
// return historgram
// };
// console.log(countCharacters(string))


// const string = "Hello World !"

//  function firstLetter(string) {
//   const result = [];
//   const newString = string.split(' ')
//   for(let char of newString){
//     result.push(char[0])
//   }
//   return result
// }

// console.log(firstLetter(string))


// function printGrid(grid){
//   for(let i = 0; i < grid.length; i++){
//     console.log(grid[i].join(' '));
//   }
// }

// function create2DGrid(size){
//   let i = size;
//   const grid = [];
//   while(i--) grid.push(new Array(size));
//   return grid;
// }


// function createSpiral(n){
//   const spiral = create2DGrid(n);
//   let currentNumber = 1;
//   let i= 0;
//   let j = 0;
//   let di = 0;
//   let dj = 1;

//   while (currentNumber <= n * n){
//     spiral[i][j] = currentNumber++;
//     if(j + dj === n || i + di === n || j + dj === -1 || spiral[i+di][j + dj]){
//       const tmpDi = di;
//       di = dj;
//       dj = -tmpDi;
//     }
//     i += di;
//     j += dj;
//   }
//   return spiral;
// };

// printGrid(createSpiral(7));


// const ages = [15,23,51,2,22,12,5,23]

// function filtering(Array){
//   return Array.filter((age)=>{return age > 20})
// }

// console.log(filtering(ages))


// const students = [
//   {age:20},
//   {age:10}, 
//   {age:30},
//   {age:21},
//   {age:25},
//   {age:12},
//   {age:19},
// ]


// function filterStudens(students,cb){
//   let result = [];
//   for(let student of students){
//     if(cb(student)){
//       result.push(student)
//     }
//   }
//   return result;
// }

// console.log(filterStudens(students,(student)=>{
//   return student.age > 20;
// }));


// console.log(
//   students.filter((student)=>{
//     return student.age > 20
//   })
// )



// const string = "Bla Bla";
// const word = "l"
// function countCharacters(Text,word){
// const historgram = {};
// historgram[word] = 0;
// for(let i of Text){
//  if(i === word){
//   historgram[word]++
  
//   }
// };
//  return historgram
// };
// console.log(countCharacters(string,word))


// const [, , characterToFind, word] = process.argv ;

// let count = 0;

// for( let character of word){
//   if(character === characterToFind) count++
// }


// console.log(``)