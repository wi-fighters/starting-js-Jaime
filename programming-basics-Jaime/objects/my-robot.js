const myRobot = new Object();
myRobot.features = {
    vision: "X-Ray",
    gun: "bazooka",
    fly: true,
    swim: true,
    height: 3,
    weight: 150
};

console.log(`\nThese are the characteristics of my robot:`);
console.log(myRobot);

console.log(`\nIs the key 'bazooka' inside 'myRobot'?`);
console.log("fly" in myRobot);

console.log(`\nIs the key 'bazooka' inside 'myRobot.features'?`);
console.log("fly" in myRobot.features);

console.log(`\nNow I'm deleting the skill "gun"`);
delete myRobot.features.gun;
console.log(`\nIs the key 'bazooka' inside 'myRobot.features' now?`);
console.log("bazooka" in myRobot);

console.log(`\nThese are the characteristics of my robot now:`);
console.log(myRobot);

console.log(`\nNow I'm adding the 'gun' feature of my robot again (with another value)`);
if ("gun" in myRobot.features === false) {
    myRobot.features.gun = "rockets";
};

console.log(`\nThese are the characteristics of my robot now:`);
console.log(myRobot);
