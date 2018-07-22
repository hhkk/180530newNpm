console.log ("==================================");

class Greeter {
    greeting;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter2 = new Greeter("world");

console.log ("==================================" + greeter2.greet());