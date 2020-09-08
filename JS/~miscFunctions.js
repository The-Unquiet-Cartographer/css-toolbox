///////////////////////////
/* Get values in a range */
///////////////////////////

function GetDegreesFromValueInRange(value /*in*/, range_min, range_max) {
    range_min -= 1;                                 //<== This just ensures that there is always a 0 value and that range_max does not wrap.
    const range_size = range_max-range_min;             //Calculate the size of the range of available hues.
    const valueInRange = value-range_min;               //Calculate where the 'value' input falls within the range.
    const deg = (360 / range_size) * valueInRange;      //Get a hue from the color wheel based on the size of the range and the value given.
    console.log(`Value is ${valueInRange} in a range of ${range_size}, or ~${deg.toFixed(2)}/360\xB0.`);
    return deg;
}

function GetPercentageFromValueInRange(value /*in*/, range_min, range_max) {
    range_min -= 1;                                 //<== This just ensures that there is always a 0 value and that range_max does not wrap.
    const range_size = range_max-range_min;             //Calculate the size of the range of available hues.
    const valueInRange = value-range_min;               //Calculate where the 'value' input falls within the range.
    const pct = (100 / range_size) * valueInRange;      //Get a hue from the color wheel based on the size of the range and the value given.
    console.log(`Value is ${valueInRange} in a range of ${range_size}, or ${pct}%.`);
    return pct;
}


///////////////////////////
/* Constructor Functions */
///////////////////////////

function ConstructHSL (hue, sat, lit) {
    return `color:hsl(${hue}, ${sat}, ${lit})`;
}


//////////////////////
/* String Functions */
//////////////////////

//Return true if strings match, ignoring case.

function Str_Match_noCase(a, b) {
    return typeof a === 'string' && typeof b === 'string'
        ? a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
        : a === b;
}
/*Credit to Samuel Neff @ https://stackoverflow.com/questions/2140627/how-to-do-case-insensitive-string-comparison# */


//Capitalise first letter of each word

function Str_Capitalise (str) {
    str = str.split(" ");       //<== Returns an array

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
}
/*Credit to https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-50.php */

