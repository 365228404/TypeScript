/**
 * Created by ASUS on 2019/3/4.
 */
function greeter(person: string) {
    return "Hello, " + person;
}

let user = '666';

document.body.innerHTML = greeter(user);