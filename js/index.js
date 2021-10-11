const num = [10, 20, 30, 40, 50];
function includes (array, searchElement){
    for( let index of array){
        if (index === searchElement) return true;
        return false;
    }
}
console.log(includes(num,10));
//true