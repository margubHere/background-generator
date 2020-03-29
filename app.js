// fonksiyon tanımlama

// function merhaba(name = "bilgi yok",age = "bilgi yok"){
    
    
//     // if (typeof name === "undefined") name ="bilgi yok";
//     // if (typeof age === "undefined") age = "bilgi yok";
//     console.log(`isim ${name} Yaş: ${age}`);
// }

// merhaba("murat",24);  // function call

// merhaba("bugra",423);

// merhaba();

// merhaba("kadir");
// merhaba(3);



// function square(x) {
//     return x * x;
//     console.log("nabeer4");  // returndan sonra fonksion durur
// }
// function cube (x){
//     return x*x*x;
// }

// let a = cube(square(12));

// console.log(a); 

// function merhaba(){
//     return "merhaba";
// }

// console.log(merhaba());




// function exppression 

// const merhaba = function(name){
//     console.log("merhaba " + name);

// };


// merhaba("murat");




//  immediatly invoked function expression  (IIFE)  tanımlandığı yerde çalışan fonksiyonlar

// (function(name){
//     console.log("merhaba " + name)
// })("murat");


const database = {
    host: "localhost",
    add: function(){
        console.log("eklendi");
    },
    get: function(){
        console.log("elde edildi");
    },
    update: function(id){
        console.log(`ID: ${id} Güncellendi`);
    },
    delete: function(id){
        console.log(`ID: ${id} silindi`);
    }
}

console.log(database.host);

database.add();

database.delete(10);

database.update(1);