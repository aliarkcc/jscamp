
//Soru 1 asal sayı öğrenme

function AsalBul(...params) {
    for (let i = 0; i < params[i]; i++) 
    {
        var sayac=0
        if(params[i]%2==0)
        {
            sayac++
        }
        if(sayac==0)
        {
            console.log(params[i]+" Asal")
        }
        else
        {
            console.log(params[i]+" Asal Değil")
        }
    }
}

AsalBul(3,5,7,10)

//Soru 2 Arkadaş sayı öğrenme


function ArkadasBul(say1,say2) {
    var sayac1=0
    var sayac2=0
    
    for (let i = 1; i < say1; i++) {
        if(say1%i==0)
        {
            sayac1=sayac1+i
        }
    }
    for (let j = 1; j < say2; j++) {
        if(say2%j==0)
        {
            sayac2=sayac2+j
        }
    }
    if(sayac1==say2 && say1==sayac2)
    {
        console.log("Arkadas")
    }
    else
    {
        console.log("Arkadas Degil")
    }
    
}

ArkadasBul(220,284)

//Soru3 1000 e kadar olan mükemmel sayılar


    for (let i = 1; i <= 10000; i++) 
    {
        var toplam=0
        for (let j = 0; j < i; j++) 
        {
            if(i%j==0)
            {
                toplam=toplam+j
            }
            
        }
        if(toplam==i)
        {
            console.log(toplam)
        }
    }


//Soru4 1000 E Kadar olan asal sayılar


for (let i = 3; i <=1000; i++)
{
    var asalsay=0
    for (let j = 0; j <= i; j++) 
    {
        if(i%2==0)
        {
            asalsay++
        }
        if(asalsay==0)
        {
            console.log(i)
        }
    }
    
}