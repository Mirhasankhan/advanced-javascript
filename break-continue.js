// const nums = [2, 3, 65, 22, 33, 95, 15, 12];

// for(let i = 0; i < nums.length; i++){
//     if(nums[i]> 21){
//         break;
//     }
//     console.log(nums[i]);
// }

const nums = [2, -3, 65, 22, 33, -95, 15, 12];

for(let i = 0; i < nums.length; i++){
    if(nums[i]< 0){
        continue;
    }
    console.log(nums[i]);
}