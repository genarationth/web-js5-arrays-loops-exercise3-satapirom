for (let i = 1; i<6;i++){
    console.log("* ".repeat(i));
}

//4
let xValue = 8;
while(xValue > 0){
    console.log(xValue)
    xValue -=0.5;
}

//print odd  1-100
let i = 1;
while (i<=100) {
    if (i % 2) {
        console.log(i);
    }
    i++;
}

//print 1 through n
// let j = 1;
// let n =6;
// while(j <= n){
//     console.log(`[${j}]`);
//     j++;
//}

//sum 
let sum = 0;
let k = 1;
let n = 5;

while(k <= n){
    sum += k;
    k++;
}
console.log(sum);

