function Student(name, age, nextStudent) {
    this.name = name;
    this.age = age;
    this.nextStudent = nextStudent;

    Student.prototype.toString = function () {
        return "name:" + this.name + ",age:" + this.age + ",nextStudent:" + this.nextStudent;
    }
}

var lastStudent = new Student('张三', 10, null);
var lastSecondStudent = new Student('李四', 9, lastStudent);
var firstStudent = new Student('王五', 9, lastSecondStudent);

// console.log(firstStudent);
// console.log(firstStudent.nextStudent);


function findStudentInLinkedList(headStudent, nameToBeFound) {
    var tempStudent = headStudent;
    while (tempStudent != null) {
        if (tempStudent.name === nameToBeFound) {
            console.log(`found student:${tempStudent} in linked list`);
            return tempStudent;
        } else {
            tempStudent = tempStudent.nextStudent;
        }
    }

    console.log(`not found student:${tempStudent} in linked list`);
}

function addStudentInToLinkedList(linkedList, student, nameToBeInsert) {
    var currentStudent = linkedList;

    while (currentStudent != null) {
        if (currentStudent.name === nameToBeInsert) {
            student.nextStudent = currentStudent.nextStudent;
            currentStudent.nextStudent = student;
            return;
        } else {
            currentStudent = currentStudent.nextStudent;
        }
    }
}

function iterateOnLinkedList(headStudent) {
    while (headStudent) {
        console.log(headStudent.toString());
        headStudent = headStudent.nextStudent;
    }
}

function updateStudent(headStudent, toBeChangedName, newStudent) {
    var currentStudent = headStudent;
    while (currentStudent) {
        if (currentStudent.name === toBeChangedName) {
            currentStudent.name = newStudent.name;
            currentStudent.age = newStudent.age;
            return;
        } else {
            currentStudent = currentStudent.nextStudent;
        }
    }
}

function deleteStudent(headStudent, toBeDeletedName) {
    var currentStudent = headStudent;
    while (currentStudent) {
        if (currentStudent.name === toBeDeletedName) {
            headStudent = headStudent.nextStudent;
            return headStudent;
        }
        if (currentStudent.nextStudent.name = toBeDeletedName) {
            var toBeDeletedNameNext = currentStudent.nextStudent && currentStudent.nextStudent.nextStudent;
            if (toBeDeletedNameNext) {
                currentStudent.nextStudent = toBeDeletedNameNext;
                return;
            }
        }
        else {
            currentStudent = currentStudent.nextStudent;
        }
    }
}

// findStudentInLinkedList(firstStudent, "张三");

// findStudentInLinkedList(null, "张三");

addStudentInToLinkedList(firstStudent, new Student('周六', 25, null), '王五')
// iterateOnLinkedList(firstStudent);

// updateStudent(firstStudent, '周六', new Student('邹六', 18, null));
var newList = deleteStudent(firstStudent, '王五');
iterateOnLinkedList(newList);
iterateOnLinkedList(firstStudent);