const students = [
    {id: 21, name:"Omor Sunny"},
    {id: 31, name:"Mannaa"},
    {id: 41, name:"Dipjol"},
    {id: 51, name:"Shabnur"}
];

// const nameArray = [];

// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const studentsName = element.name;
//     nameArray.push(studentsName);

    
// }

const names = students.map(x => x.name);
const ids = students.map(x=> x.id);
const bigger = students.filter(x=> x.id > 31);
const biggerOne = students.find(x=> x.id > 31);
console.log(biggerOne);
