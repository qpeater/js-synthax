var studentsAndPoints = ['Алексей Петров', 0, 'Ирина Овчинникова', 60, 'Глеб Стукалов', 30, 'Антон Павлович', 30, 'Виктория Заровская', 30, 'Алексей Левенец', 70, 'Тимур Вамуш', 30, 'Евгений Прочан', 60, 'Александр Малов', 0];

/**
 * Вывести список студентов с их баллами
 */
function showStudentList(students) {
    console.log('Список студентов:');
    for (var i = 0, imax = students.length; i < imax; i += 2) {
        var name = students[i];
        var points = students[i+1];
        console.log('Студент %s набрал %d баллов', name, points);
    }
}

/**
 * Вывести студента с наивысшим количеством баллов
 */
function getBestStudent(students) {
    var max = 0;
    var name = '';
    for (var i = 1; i < students.length; i += 2) {
        if (students[i] > max) {
            max = students[i];
            name = students[i - 1];
        }
    }
    console.log('Студент набравший максимальный балл:');
    console.log('Студент %s имеет максимальный балл %d', name, max);
}

/**
 * Добавить студента
 */
function addStudents(students, name, points) {
    if (points != 'undefined') {
        points = 0;
    }
    students.push(name, points);
}

/**
 * Добавить баллы студенту
 */
function addPointsToStudent(students, name, points) {
    var nameIndex = students.indexOf(name)
    if (nameIndex != -1) {
       students[nameIndex + 1] += points;
    }
}

/**
 * Вывести студентов, у которых 0 баллов
 */
function getWorstStudents(students) {
    console.log('Студенты не набравшие баллов:')
    for (var i = 1; i < students.length; i += 2) {
        if (students[i] == 0) {
            console.log(students[i - 1]);
        }
    }
}

/**
 * Удалить студентов, у которых 0 баллов
 */
function delWorstStudents(students) {
    var zeroIndex = students.indexOf(0);
    while (zeroIndex != -1) {
        students.splice(zeroIndex - 1, 2);
        zeroIndex = students.indexOf(0);
    }
}

showStudentList(studentsAndPoints);

getBestStudent(studentsAndPoints);

addStudents(studentsAndPoints, 'Николай Фролов');
addStudents(studentsAndPoints, 'Олег Боровой');

addPointsToStudent(studentsAndPoints, 'Антон Павлович', 10);
addPointsToStudent(studentsAndPoints, 'Олег Боровой', 10);
addPointsToStudent(studentsAndPoints, 'Дмитрий Фитискин', 10);

console.log(studentsAndPoints);

getWorstStudents(studentsAndPoints);

delWorstStudents(studentsAndPoints);

console.log(studentsAndPoints);
