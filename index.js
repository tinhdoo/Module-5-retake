const numbers = [1, 2, 3, 4, 5];


numbers.forEach((num, index) => {
    console.log(`Số: ${num}` + 'vị trí' + index);
});


const doubled = numbers.map(num =>
    num * 2
);
console.log(doubled);


const greaterThanThree = numbers.filter(num=> num > 3);
console.log(greaterThanThree);


const sum = numbers.reduce(acc, curr =>
     acc + curr
, 0);
console.log(sum);