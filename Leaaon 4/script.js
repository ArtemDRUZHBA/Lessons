let testArray = new Array();
let teenager = 0;
let pensioner = 0;
let worker = 0;
for(let i = 0; i <= 100; i++){
    testArray.push(Math.round(Math.random()*100));
}
console.log(testArray);
testArray.forEach((man)=>{
    if(man < 18) teenager++;
});
console.log(`Teenager: ${teenager}`);
testArray.forEach((man)=>{
    if(man > 63) pensioner++;
});
console.log(`Pensioners: ${pensioner}`);
testArray.forEach((man = 18)=>{
    if(man >= 58) worker++;
});
console.log(`Workers: ${worker}`);
testArray.sort();
console.log(testArray);