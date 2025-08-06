/***
Subtask-1:
Display sum of all the odd numbers from 81 to 131.
 */
let os=81, oddSum =0;
while(os<=131){
    if(os%2!=0){
        oddSum+=os;
    }
    os++;
}
console.log("odd sum: ", oddSum);
/***
Subtask-2:
Display sum of all the even numbers from 206 to 311.
 */
let es=81, evenSum =0;
while(es<=131){
    if(es%2==0){
        evenSum+=es;
    }
    es++;
}
console.log("even sum: ", evenSum);