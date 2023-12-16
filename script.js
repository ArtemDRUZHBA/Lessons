let food = document.getElementById("food");
let address = document.getElementById("address");
let phone = document.getElementById("phone");
let btn = document.getElementById("send");

btn = addEventListener("click", function(){
    let package = `Food: ${food.value}\nAddress: ${address.value}\nPhone: ${phone.value}`;
    console.log(package);
    food.value = '';
    address.value = '';
    phone.value = '';
});
let a = 10;
let b = 5;
console.log(`sum = ${a + b}, sub = ${a - b}, div = ${a * b}, mult = ${a / b}, pow = ${a ** b}`);