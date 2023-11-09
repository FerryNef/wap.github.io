//sol 1
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//         this.students.forEach(function (student) {
//             console.log(this.title + ": " + student
//             );
//         }.bind(this));
//     }
// };
// group.showList();


// sol2
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((stu) => {
            (function (student) {
                console.log(this.title + ": " + student);
            }).apply(this, [stu]);
        });
    }
};
group.showList();

// sol33

 let group = {
     title: "Our Group",
     students: ["John", "Pete", "Alice"],
     showList: function () {
         this.students.forEach(student => {
             console.log(this.title + ": " + student
             );
         });
     }
 };
group.showList();


//sol4
 let group = {
title: "Our Group",
     students: ["John", "Pete", "Alice"],
showList: function () {
    this.students.forEach((stu)=> {
        (function (student) {
            console.log(this.title + ": " + student);
    }).call(this, [stu]);
         });
     }
 };
  group.showList();

