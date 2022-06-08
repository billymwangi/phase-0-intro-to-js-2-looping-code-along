// Code your solutions in this file
// const names = ["Guadalupe", "Ollie", "Aki"]

//   function writeCards(names) {
//     for (let i = 0; i < names.length; i++) {
//       console.log(`Thank you, ${names[i]},for the wonderful birthday gift!`);
//       debugger;
//     }
  
//     return names;
//   }
  
//   writeCards(names);

let countdown = 10;
while (countdown > -1) {
  console.log(countdown--);
}
 
const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names) {
    let i = 0;
    while (i < names.length) {
        console.log(`Thank you ${names[i]}, for the wonderful birthday gift!`);
        i++;
        debugger;
    }
    return (names)
}
writeCards(names)

for (let i = 0; i< 5; i++){
  console.log(i)
}
