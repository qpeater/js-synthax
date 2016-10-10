var studentsAndPoints = ['Алексей Петров', 0, 'Ирина Овчинникова', 60, 'Глеб Стукалов', 30, 'Антон Павлович', 30, 'Виктория Заровская', 30, 'Алексей Левенец', 70, 'Тимур Вамуш', 30, 'Евгений Прочан', 60, 'Александр Малов', 0];
var maxIndex = -1, minIndex = -1, max, min;

// console.log(studentsAndPoints.length); // количество элементов в массиве

console.log('Список студентов:');
for (var i = 0, imax = studentsAndPoints.length; i < imax; i+=2) {
    var name = studentsAndPoints[i];
    var points = studentsAndPoints[i+1];
    console.log('Студент %s набрал %d баллов', name, points);
} // список студентов с баллами

console.log('Студент набравший максимальный балл:');
for (var i = 1, imax = studentsAndPoints.length; i < imax; i+=2) {
    if (maxIndex < 0 || studentsAndPoints[i] > max) {
        maxIndex = i;
        max = studentsAndPoints[i];
        nameIndex = maxIndex -1;
        name = studentsAndPoints[nameIndex];
    }
}
    console.log('Студент %s имеет максимальный балл %d', name, max); // студент с наибольшим количеством баллов

studentsAndPoints.push('Николай Фролов', 0, 'Олег Боровой', 0); // добавлены два студента в конец массива

console.log(studentsAndPoints.indexOf('Николай Фролов') +1);
console.log(studentsAndPoints.indexOf('Олег Боровой') +1);

// var studentsAndPoints[19] = studentsAndPoints[19] +10;
// var studentsAndPoints[21] = studentsAndPoints[21] +10;

// for (var i = 0, imax = studentsAndPoints.length; i < imax; ++i) {
//     console.log(studentsAndPoints[i]);
// } // все элементы в массиве

console.log('Студенты не набравшие баллов:');
for (var i = 1, imax = studentsAndPoints.length; i < imax; i+=2) {
    if (studentsAndPoints[i] == 0) {
        name = studentsAndPoints[i-1];
    }
    console.log(name);
} // студенты, у которых 0 баллов
