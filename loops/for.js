for (let i = 0; i <= 10; i++) {

    if (i === 3) {
        console.log("that's my favorite number");
        continue;
    } else if (i === 8) {
        console.log("stop the loop");
        break;
    }
    console.log("Number " + i);
};