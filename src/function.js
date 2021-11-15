// function addToCart(product) {
//     console.log(product+" Sepete Eklendi!")
// }

// addToCart("Elma")
// addToCart("Yumurta")
// addToCart("Karpuz")

// let sayHello=(params)=>{
//     console.log(params+" Fonksiyon")
// }
// sayHello("ilk")

// let sayHello2=function (params) {
//     console.log(params+" Fonskiyon")
// }

// sayHello2("ikinci")

// function addToCart2(productName,quantity,unitPrice) {

// }
// addToCart("Elma",2,4)
// addToCart("Muz",5,10)
// addToCart("Salam",12,15)

// function addToCart3(product) {
//     console.log(product.productName)
// }

// let product1={productName:"Elmas",unitPrice:10,quantity:5}
// addToCart3(product1)

// let sayi1=10
// let sayi2=20
// sayi1=sayi2
// sayi2=100

// console.log(sayi1)


// function addToCart4(...products) {
//     console.log(products)
// }
// let product2={productName:"Elmas",unitPrice:10,quantity:5}
// let product3={productName:"Elmas",unitPrice:10,quantity:5}
// addToCart4(product2,product3)


// function add(bisey,...numbers) {
//     let total=0;
//     for (let i = 0; i < numbers.length; i++) {
//         total=total+numbers[i]
        
//     }
//     console.log(total)
//     console.log(bisey)
// }
// add(1,7,4)

// let numbers=[20,30,452,147]

// let [icAnadolu,gDogu,karadeniz,[icAnadoluSehir,GDoguSehir,KaradenizSehir]]=[
//     {name:"İç Anadolu",population:"20M"},
//     {name:"Güney Doğu Anadolu",population:"5M"},
//     {name:"Karadeniz",population:"10M"},
//     [
//         ["Aksaray","Niğde"],
//         ["Mardin","Gaziantep"],
//         ["Sinop","Trabzon"]
//     ]
// ]
// // console.log(icAnadolu.population)
// // console.log(karadeniz.name)
// console.log(icAnadoluSehir)

let nproductName,nunitPrice,nquantity
({productName:nproductName,unitPrice:nunitPrice,quantity:nquantity}
    ={productName:"Elma",unitPrice:10,quantity:5})
console.log(nproductName)