// Code your solutions in this file
function writeCards(names, event){
    let emptyArray = []
    for (let i = 0; i < names.length; i++){
        emptyArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return emptyArray;
}
function countDown(x) {
    for (let i = x; i >= 0; i--) {
        console.log(i)
    }
}