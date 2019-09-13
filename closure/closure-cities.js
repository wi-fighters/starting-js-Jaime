// We can reassign values in this function like this:

// function setLocation(city) { // setLocation() has one parameter: city so we have to call it with one argument. In this case: "Paris" and then "Lyon"
//     var country = "France";

//     function printLocation() { // printLocation() has no parameters, so we can't call it with arguments
//         console.log("You are in " + city + ", " + country);
//     }

//     return printLocation;
// }

// var currentLocation = setLocation("Paris");
// currentLocation();
// currentLocation = setLocation("Lyon"); // we reassign the parameter of setLocation() by changing it here, where we reassign the value of setLocation(), which is the outer function
// currentLocation();


// ---------------------------------------------------------

// or like this:

function setLocation() { // now setLocation() has no parameters, so no arguments can be passed to it
    var country = "France";

    function printLocation(city) { // printLocation has one parameter so we have to call this function with one argument. We do it first with "Paris" and then with "Lyon"
        console.log("You are in " + city + ", " + country);
    }

    return printLocation;
}

var currentLocation = setLocation();
currentLocation("Paris");
currentLocation("Lyon"); // we just call the inner function changing the argument we are going to pass to its parameter
