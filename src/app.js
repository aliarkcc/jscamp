let sayi1="asd";
sayi1="Mehmet Ali";
let student={id:1,name:"Mali"}
//console.log(student)

//Save(student,20); 

function Save(ogrenci,puan=100) {
    console.log(ogrenci.name+":"+puan)
}

let students=["Mehmet Ali","Caner","Yaren"]

//console.log(students)

let students2=[students,{id:4,name:"Efe"},"Aksaray",{sinif:"11/B",ogretmen:"Sultan İztaş"}]

//console.log(students2)


let showProducts=function (id,...products) {
    console.log(id)
    console.log(products[1])
}

//showProducts(1 ,["HAHA","0","Mal"],["HAHA","1","Mal"],["HAHA","2","Mal"])
let points=[1,2,4,5,6,7,8,9,10]
//console.log(Math.max(...points))

let populations=[10000,20000,30000]
let[a,b,c]=populations
//console.log(a)

let category={id:1,name:"Ekmek"}

//console.log(category.id)
//console.log(category["name"])


let {id,name}=category

console.log(name)