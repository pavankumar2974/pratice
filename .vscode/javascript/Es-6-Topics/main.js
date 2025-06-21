//logical operator
function disName(name){
    return name;
}
let a = true;
let b = false;

console.log(a && disName("pavan")); //shows value
 console.log(a || disName("pavan"));//shows True or false

 //Template literals

 let name1="pavan";
 let name2="kumar";
 console.log(name1 + "" + name2, `${name1}`+`${name2}`);
 