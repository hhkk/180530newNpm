

console.log("hksleep loading --------------------------------------------------");

function hksleep(ms) {
    return new Promise<void>(resolve => setTimeout(resolve, ms));
}

async function demo() {
    let greeter2 = new Greeter("world");

    console.log('Taking a break...');
    //await xxxsleep(2000);
    console.log('Two second later');
}