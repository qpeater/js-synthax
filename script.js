for (var a = 1; a<=100; a++){
    if ((a % 2) == 0){
        console.log(a);
    }
}

var age = 50,
    a = 17,
    b = 18,
    c = 61;

if ( age < a ){
    console.log('вы слишком молоды');
}
else if ( age >= b && age < c ) {
    console.log('отличный возраст');
}
else {
    console.log('привет, бабуля!');
}
