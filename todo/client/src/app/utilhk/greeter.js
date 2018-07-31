console.log("==================================");
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter2 = new Greeter("world");
console.log("==================================" + greeter2.greet());
