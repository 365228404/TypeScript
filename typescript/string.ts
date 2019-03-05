/**
 * Created by ASUS on 2019/3/4.
 */
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
    fullName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName+ " " + person.fullName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);