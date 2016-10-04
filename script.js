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
else if ( age >= b && age <= c ) {
    console.log('отличный возраст');
}
else {
    console.log('привет, бабуля!');
}


var date = '22.03';

switch (date){
    case "08.03":console.log('с 8 марта!');

        break;
    case '23.02':console.log('с 23 февраля');

        break;
    case '31.12':console.log('с новым годом');

        break;
    default: console.log('сегодня просто отличный день и безо всякого праздника');

        break;
}
