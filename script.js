
const persons = [new Person('Mary','Smith', 28), new Person('John', 'Smith', 35),
    new Person("Tigran","Petrosian",41), new Person('Peter','Jackson',18)];


console.log('After sort', persons);
sort(persons, (p1, p2) => (p1.age - p2.age)); //TODO sort by age 18,28,35,41. use comparator
printArray(persons)

sort(persons, compareByLastName);
printArray(persons);

// printArray(persons);
// sort_lastName(persons);
// printArray(persons);
//TODO * sort by firstName and lastName (кол-во букв, если одинаково то алфавитный порядок)

//TODO ** создать калькулятор, чтобы я мог в вызов функции написать что я хочу посчитать и как.



function sort (arr, comparator) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - 1 - j; i++) {
            if (comparator(arr[i], arr[i + 1]) > 0) {
                let temp = arr[i];
                arr[i] = arr[i+ 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

function compareByLastName(p1, p2) {
    let res =0;

    if (p1.lastName.length < p2.lastName.length) {
        res = 1;
    } else if (p1.lastName.length > p2.lastName.length) {
        res = -1;
    }
    return res;
}

function printArray(arr) {
    console.log('==================');
    for(let i=0; i < arr.length; i++){
        console.log(arr[i]);
    }
    console.log('==================');
}
function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName =function (){
        return `${this.firstName} ${this.lastName}`;
    }
}
