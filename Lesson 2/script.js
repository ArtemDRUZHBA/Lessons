let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");
let t3 = document.getElementById("t3");
let b1 = document.getElementById("b1");

function ReadInputs(){
    let values = new Array();
    values = [t1.value, t2.value, t3.value];
    console.log(values);
}

b1.addEventListener("click",ReadInputs);
document.body.addEventListener("keydown",(e)=>{
    if(e.keyCode == 13)
    ReadInputs();
});

