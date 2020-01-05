function Student(name, age, lastStudent, nextStudent) {
    this.name = name;
    this.age = age;
    this.lastStudent = lastStudent;
    this.nextStudent = nextStudent;

    Student.prototype.toString = function () {
        return "name:" + this.name + ", age:" + this.age + ", lastStudent:" + (this.lastStudent && this.lastStudent.name) + ", nextStudent:" + (this.nextStudent && this.nextStudent.name);
    };

    Student.prototype.setLastStudent = function (lastStudent) {
        this.lastStudent = lastStudent;
    };

    Student.prototype.setNextStudent = function (nextStudent) {
        this.nextStudent = nextStudent;
    };
}


var zhangsan = new Student('zhangsan', 10, null, null);
var lisi = new Student('lisi', 12, null, null);
var wangwu = new Student('wangwu', 9, null, null);
var zouliu = new Student('zouliu', 18, null, null);
var liuer = new Student('liuer', 28, null, null);


zhangsan.setLastStudent(null);
zhangsan.setNextStudent(lisi);
lisi.setLastStudent(zhangsan);
lisi.setNextStudent(wangwu);
wangwu.setLastStudent(lisi);
wangwu.setNextStudent(zouliu);
zouliu.setLastStudent(wangwu);
zouliu.setNextStudent(liuer);
liuer.setLastStudent(zouliu);
liuer.setNextStudent(null);


function iterateOnDualLinkedList(dualLinkedList, ascOrder) {
    var currentNode = dualLinkedList;
    while (currentNode) {
        console.log(currentNode.toString());
        if (ascOrder) {
            currentNode = currentNode.nextStudent;
        } else {
            currentNode = currentNode.lastStudent;
        }
    }
}

// iterateOnDualLinkedList(zhangsan, true);
// iterateOnDualLinkedList(liuer, false);
// iterateOnDualLinkedList(zouliu, false);


function addStudentInToDualLinkedList(dualLinkedList, toBeInsetName, student, ascOrder) {
    var currentNode = dualLinkedList;
    while (currentNode) {
        if (currentNode.name === toBeInsetName) {
            var currentNodeLast = currentNode.lastStudent;
            currentNode.lastStudent = student;
            student.nextStudent = currentNode;
            student.lastStudent = currentNodeLast;
            currentNodeLast && (currentNodeLast.nextStudent = student);
            return;
        }

        if (ascOrder) {
            currentNode = currentNode.nextStudent;
        } else {
            currentNode = currentNode.lastStudent;
        }
    }
}

var linqi = new Student('linqi', 16, null, null);
// addStudentInToDualLinkedList(liuer, 'wangwu', linqi, false);
// iterateOnDualLinkedList(zhangsan, true);


function updateStudent(dualLinkedList, toBeChangedName, student, ascOrder) {
    var currentNode = dualLinkedList;
    while (currentNode) {
        if (currentNode.name === toBeChangedName) {
            currentNode.name = student.name;
            currentNode.age = student.age;
            return;
        }
        if (ascOrder) {
            currentNode = currentNode.nextStudent;
        } else {
            currentNode = currentNode.lastStudent;
        }
    }
}

var newStu = new Student('wangliu', 27, null, null);
updateStudent(zhangsan, 'wangwu', newStu, true);
iterateOnDualLinkedList(zhangsan, true);