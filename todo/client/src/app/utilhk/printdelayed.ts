"use strict";

// printDelayed is a 'Promise<void>'
async function printDelayed(elements: string[]) {
    for (const element of elements) {
        await delay(2000);
        console.log(element);
    }
}

async function delay(milliseconds: number) {
    console.log("returning promise");
    return new Promise<void>(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

printDelayed(["Hello", "beautiful", "asynchronous"]).then(() => {
    console.log();
    console.log("Printed every element!");
});