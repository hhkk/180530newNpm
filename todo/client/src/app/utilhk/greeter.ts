

console.log ("==================================");

export class Greeter {
    greeting;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        console.log ("==================================xxxxxxx")   ;
        return "Hello, " + this.greeting;
    }
}

let greeter2 = new Greeter("world2");

console.log ("==================================" + new Greeter("world3").greet());