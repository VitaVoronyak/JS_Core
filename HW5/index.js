//task1
function propsCount(currentObject){
    let count = 0;
    for(i in currentObject){
        if(currentObject.hasOwnProperty(i))
        count++;
    }
    console.log(count);
}

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" ,
};


//task2
function showProps(currentObject){
    let arrProperties = [];
    let arrValues = [];
    
    for (i in currentObject) {
        arrProperties.push(i);
        arrValues.push(currentObject[i])
    }
    console.log(arrProperties);
    console.log(arrValues);
}

let dog = {
    name: "Bobic",
    color: "black",
    age: 2,
    breed: "Labrador",
    owner: "Ira"
}

//task3
class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        console.log(this.name + ' ' + this.surname);
    }
}

class Student extends Person{
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }
    showFullName(middleNme){
        console.log(this.name + ' ' + this.surname + ' ' + middleNme);
    }
    showCourse(){
        let today = new Date();
        let year = today.getFullYear();
        let currentYear = year - this.year;
        return currentYear;
    }
}

let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse()); 


//task4
class Worker{
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    #experience = 1.2;
    salaryExp;
    showSalary(){
       let salary = this.dayRate * this.workingDays;
       console.log(this.fullName + ' ' + 'salary' + ':' + salary);
    }
    showSalaryWithExperience(){
        let salary2 = this.dayRate * this.workingDays * this.#experience;
        console.log(this.fullName + ' ' + 'salary' + ':' + salary2);
        this.salaryExp = salary2;
    } 
    get showExp() {
        return this.#experience;
    }
    set setExp(value) {
        this.#experience = value;
    }

}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);                 
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);                 
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();



function sortWorkers(){
    let arr = [];
   
    arr.push(worker1, worker2, worker3);
    arr.sort(function (a, b){
        return a.salaryExp - b.salaryExp;
    });
    
    for (let i = 0; i<arr.length; i++){
        console.log(arr[i].fullName + ':' + arr[i].salaryExp);
    }
}
sortWorkers();



//task5
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure{
    constructor(a, b){
        super();
        this.a = a;
        this.b = b;
    }
    getArea(){
        let S = (this.a*this.b)/2;
        return S;
    }
}

class Square extends GeometricFigure{
    constructor(a){
        super();
        this.a = a;
    }
    getArea(){
        return this.a * this.a;
    }
}

class Circle extends GeometricFigure{
    constructor(r){
        super();
        this.r = r;
    }
    getArea(){
        let s = 3.14 * this.r * this.r;
        return s;
    }
}


const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
	console.log(handleFigures(figures));


function handleFigures(figures){
    let totalS = 0; 
    for (let i = 0; i < figures.length;i++){
        if(figures[i] instanceof GeometricFigure){
            console.log(`Geometric figure: ${figures[i].toString()} - area:${figures[i].getArea()}`)
            totalS = totalS + figures[i].getArea();
        }
    }
    console.log(totalS);
}
