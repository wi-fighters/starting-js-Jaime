let i = 0;
while (i <= 10) {
    if (i === 3) {
        console.log("that's my favorite number");
        continue;
    } else if (i === 8) {
        console.log("stop the loop");
        break;
    }
    i++;

    console.log("Number " + i);
}