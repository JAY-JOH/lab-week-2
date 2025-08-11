let nums = [2, 5, 8, 11, 14, 17, 20];
let count = 0;
for (let i = 0 ; i < nums.length ; i++){
    if(nums[i] % 2 === 0) {
        count ++;
    }
}
console.log(count);