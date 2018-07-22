

console.log("hksleep loading --------------------------------------------------");

function hksleep(ms) {
    return new Promise<void>(resolve => setTimeout(resolve, ms));
}

async function demo() {
    console.log('Taking a break...');
    await sleep(2000);
    console.log('Two second later');
}