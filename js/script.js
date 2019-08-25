let a = function(num){
    const b = a(num++)
    return b;
}
a(5);