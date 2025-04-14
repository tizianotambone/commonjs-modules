function fullName(firstName,LastName){
    
    return{
        firstName,
        LastName
    }
    };

module.exports={fullName};


function hobbies(hobbyOne, hobbyTwo, hobbyThree){
    return[hobbyOne, hobbyTwo, hobbyThree];
}
module.exports={hobbies};

function cose(){
    return{fullName:fullName("gino","paoli"), hobbies:hobbies("basket","calcio","tennis")}
}

module.exports={cose};