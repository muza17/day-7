//function1
function function1(ism="mijoz", yil=2021, debt=428){
    console.log("Hurmatli"+ ism + "! " + "Sizning" + yil + " - yil uchun elektr energiyasidan umumiy qarz miqdoringiz " + debt + " so'mni tashkil qilyapti.");

}

console.log( function1("Hayrulla Sodiqovich Akmalov", 2011, 300));
console.log( function1("Akmal Sodiqovich Hayrullayev", 1300));
console.log( function1("Sodiq Akmalovich Hayrullayev" , 2021, 549));

//function2
function uchburchakPerimetri (a,b,c){
    if((a+b)>c&&(a+c)>b&&(b+c)>a){
        P= a+b+c;
        
        console.log("Uchburchakning perimetri " + P+ " ga teng");
        alert("Uchburchakning perimetri " + P + " ga teng");
        
    }
    else {
        console.log("Uchburchakning perimetrini hisoblab bo'lmaydi. Bunday uchburchak mavjud emas!");
        alert("Uchburchakning perimetrini hisoblab bo'lmaydi. Bunday uchburchak mavjud emas!"); 
    }

}
uchburchakPerimetri (5,6,13);
uchburchakPerimetri (5,6,10);


//function3
function diskriminant(a,b,c){
    return b**2 - 4*a*c;
}

console.log(diskriminant(13,2,9));

//function4
function dtmScore (fan1, fan2, fan3){
    var totalScore = 0;
    var fan1 = Number(prompt ("1-faningizdan to'gri topgan savollar soni: "));
    totalScore=totalScore + 3.1*fan1;
    var fan2 = Number(prompt ("2-faningizdan to'gri topgan savollar soni: "));
    totalScore=totalScore + 2.1*fan2;
    var fan3 = (prompt ("3-faningizdan to'gri topgan savollar soni: "));
    totalScore=totalScore + 1.1*fan3;
    console.log(totalScore);
    return totalScore;

} 
alert(dtmScore());

//function5
function range(){
    var son = Number(prompt("Dasturni qanday baholaysiz(1-5)?"));

    if(son==5){
        alert("Tashakkur! Sizga xizmat ko'rsatayotganimizdan mamnunmiz");
    }
     else if(son==4){
        alert("Tashakkur! Biroz kamchiliklar uchun uzr so'raymiz");
     }
     else if(son==3){
        alert("Tashakkur! Ba'zi kamchiliklar uchun uzr so'raymiz");
     }
     else if(son==2){
        alert("Tashakkur! Barcha kamchiliklar uchun uzr so'raymiz");
     }
     else{
        alert("Dasturni qaytadan yuklab ko'ring ");
     }
}
range();

//function6
function chegirma() {
    var yosh = Number(prompt("Chegirmalar bo'limiga xush kelibsiz. Quyidagi savollarga javob berishingizni so'raymiz"+"\n"+"Nechchi yoshdasiz?"));

    var isStudent = confirm("Siz talabamisiz?");

    if(isStudent||(yosh<=21)){
        alert("10% lik chegirmalardan foydalanishingiz mumkin");
    }
    else{
        alert("Uzr! Chegirmalardan foydalana olmaysiz");
    }
}

chegirma();

//function7

function masofa(vaqt, tezlik){
    return vaqt*tezlik;
}

var masofa1 = masofa(20, 100);
var masofa2 = masofa(10, 75);
var umumiyYol = masofa1+masofa2;
alert( "Umumiy bosib o'tilgan yo'l " + umumiyYol+ " ga teng" );

//function8
//2 ta son taqqoslanadi
function taqqoslash(){
    var a= Number(prompt("Birinchi sonni kiriting :"));
    var b= Number(prompt("Ikkinchi sonni kiriting :"));
    

    if(a-b>0){
        return a;

    } else if(b-a>0){
        return b;
    } else{
        return "Siz kiritgan sonlar teng";
    }
}    

alert(taqqoslash());



//function9
//qoldiqni topish
function qoldiq(a, b){
    return a-(Math.floor(a/b))*b;  
}

alert(qoldiq(9, 2));

//function10
//jismoniy shaxslardan olinadigan daromad soli;iini hisoblash
function daromadSoliq(){

    var daromad = Number(prompt("Sizning daromadingiz miqdori?"));
    
    return daromad*12/100;
    
}
console.log(daromadSoliq());





