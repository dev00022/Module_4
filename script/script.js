let names = ["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
for(let i=0; i<names.length; i++){
    let first = names[i].charAt(0).toLocaleLowerCase();
    if(first === "j"){
        console.log("Good Buy"+" "+names[i]);
    }
    else{
        console.log("Hello"+ " "+names[i]);
    }
}  