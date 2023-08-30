var text="10";
console.log(Number(text))

// =============================================================================================

var candies={
    chocolate :10 ,
    lollipops : null ,
    sourStrips :undefined ,
    jellBeans : 8 ,
    licorice : null
} ;

console.log(candies.chocolate || null);
console.log(candies.lollipops || null);
console.log(candies.sourStrips || null);
console.log(candies.jellBeans || null);
console.log(candies.licorice || null);


if( (candies.chocolate || null ) === null ){
    console.log( candies.chocolate)
}
else{
    console.log( `Available from chocolate can ${candies.chocolate} ` )
}

if( (candies.lollipops || null) ===null ){
    console.log( candies.lollipops)
}
else{
    console.log(`Available from lollipops can ${candies.lollipops}`)
}

if( (candies.sourStrips || null) ===null){
    console.log(candies.sourStrips)
}
else{
    console.log(`Available from sourStrips can ${candies.sourStrips}`)
}

if( (candies.jellBeans || null) ===null ){
    console.log(candies.jellBeans)
}
else{
    console.log(`Available from jellBeans can ${candies.jellBeans}`)
}


if( (candies.licorice || null) ===null ){
    console.log(candies.licorice)
}

else{
    console.log(`Available from licorice can ${candies.licorice}`)
}



// ==============================================================================================================


function getShawarma( name , age){
    
    var Shawarma={
        mate : 2 ,
        chick : 3
    }

    if(age >= 20){
        console.log(`mate ${Shawarma.mate}`)
    }
    else{
        console.log(`chick ${Shawarma.chick}`)
    }
}

getShawarma("megahed" ,30);


// ============================================================================================================

function calculate(num1 ,num2 ,method){

    if(method==="sum")
    {
        var result= num1 +num2;
        console.log(result);
    }

    else if(method==="sub"){
        var result=num1 - num2;
        console.log(result);
    }

    else if(method==="multi"){
        var result=num1 +num2;
        console.log(result);
    }

    else if(method==="divid"){
        var result=num1 /num2 ;
        console.log(result);
    }

    else{
        console.log("Unknown Method , Trg Agin");
    }

}

calculate(1 , 2 , "sum");


// ===============================================================================================================


var theNamePlane="Flying Egypt" ;

switch(theNamePlane){

    case "Flying Egypt":
        console.log("From  8 PM To 10 PM");
        break;
    case "Flying Sinai":
        console.log("From  1 AM  To 5 AM");
        break;
    case "Flying Alexandria":
        console.log("From 8 AM To 1 PM");
        break;
    default:
        console.log("Checked The Name of Plane ,Try Agin");
}

// =================================================================================================================



var month=1 ;

switch(month){

    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("Not Found ,Try Agin");
}

// =================================================================================================================

var MoSalah=11 , Messi=10 ;

MoSalah === 11 ? console.log("Plying in Liverpool") :  console.log("Plying in Egypt");

Messi===10 ? console.log("Plying in Barcelona and InterMiami") : console.log("Plying in PSG");

// =======================================================================================================

var day= 30 ;
day >= 40 ? console.log("Hot") : day >= 35  ? console.log("day between 35 to 40") : console.log("Moderate") ;


// ========================================================================================================



//casting

var test=true;
console.log(test.toString())

var number1=10;
console.log(number1.toString())

var number2="10";
console.log(Number(number2)); 
console.log(Boolean(number2));
