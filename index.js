const cats=["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop("Garfield")
}
function destructivelyRemoveFirstCat(){
   cats.shift("Milo") 
}
function appendCat(name){
   
    const newArray=[...cats, "Broom"]
    return newArray
}
function  prependCat(name){
    const newArray=["Arnold", ...cats]
    return newArray
}
function  removeLastCat(){
    const newArray = cats.slice(0,  cats.length-1)
    return newArray
}
function  removeFirstCat(){
    const newArray = cats.slice(1)
    return newArray
}