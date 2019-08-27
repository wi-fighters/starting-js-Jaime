/**
 * This is a fortune teller function
 * Why pay a fortune teller when you can just program your fortune yourself?
 * 
 * @param {number} numberOfChildren
 * @param {String} partnerName
 * @param {String} geoLocation
 * @param {String} jobTitle
 * 
 * @returns {String} TODO: what are we returning?
 * 
 * @example
 * 
 * tellFortune(5, "Partnerino", "Someplace", "Best job ever");
 *     
 **/

function tellFortune(numberOfChildren, partnerName, geoLocation, jobTitle) {
    return `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
}

console.log(tellFortune(2, "Partnerina", "Frankfurt", "web developer"));
console.log(tellFortune(4, "Peter Griffin", "Osaka", "comedian"));
console.log(tellFortune(3, "Homer Simpson", "Springfield", "Batman"));