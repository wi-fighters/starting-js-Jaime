// Different forms to do the same closure:
// 1:

const sayMyName = () => {
    const name = "Jaime";

    return showMyName = () => {
        console.log(name);
    };
};

const giveName = sayMyName();
giveName();

// 2:

// const sayMyName = () => {
//     const name = "Jaime";

//     showMyName = () => {
//         console.log(name);
//     };
//     return showMyName;
// };

// const giveName = sayMyName();
// giveName();

// // 3:

// function sayMyName() => {
//     const name = "Jaime";

//     return showMyName = () => {
//         console.log(name);
//     };
// };

// const giveName = sayMyName();
// giveName();
