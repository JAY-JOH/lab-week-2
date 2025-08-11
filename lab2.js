let numbers =[12, 45, 7, 23, 56, 10];
let largestnumber = 0;
for (let i = 0 ; i < numbers.length ; i++){
    if ( numbers[i] > numbers[i+1]){
        largestnumber = numbers[i];
    }
}
console.log(largestnumber);