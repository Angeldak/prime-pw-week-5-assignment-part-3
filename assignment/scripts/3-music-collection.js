console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished, /**/) { //Enter unlimited args for "Track Name", "Duration" after year
    let args = Array.from(arguments);
    let remainingArgs = args.slice(3, args.length);
    const obj = {};  //Initiate object for push
    obj.albumTitle = title;  //Assigning arguments to object keys
    obj.artist = artist;
    obj.yearPublished = yearPublished;
    obj.arrayTracks = [];
    for (let i = 0; i < remainingArgs.length; i++) {
        if (i % 2 === 0) {
            obj.arrayTracks.push({ arrayTrack: remainingArgs[i] });
        } else {
            obj.arrayTracks[obj.arrayTracks.length - 1].trackDuration = remainingArgs[i];
        }
    };
    collection.push(obj);  //Adding object to collection
    return obj;
}//end addToCollection

function findByArtist(artist) {
    let artistArray = [];  //Initiating array for return
    for (item in collection) {  //Begin looping over collection
        if (collection[item].artist === artist) {  //Checking if collection artist matches artist argument
            artistArray.push(collection[item]);  //Push to array for return
        }
    }
    return artistArray;
}//end findByArtist

//ORIGINAL WORKING SEARCH FUNCTION - REFACTORING BELOW
// //searching track names: collection[0].arrayTracks[0].includes("Papercut") === true
// function search(object = {}) {
//     let results = [];  //Initiating Results Array
//     let counter;  //Initiating Counter
//     if (Object.values(object).length === 0) {  //Checking if object argument is blank or not included (defaults to black)
//         return collection;
//     } else {
//         for (let i = 0; i < Object.keys(collection).length; i++) {  //Begins looping over collection
//             counter = 0;  //Resets counter after reach iteration
//             for (key in object) {  //Begins looping over object argument
//                 if (Object.keys(object).indexOf("arrayTracks") !== -1) {  //Checks if object argument includes arrayTracks
//                     for (let j = 0; j < collection[i].arrayTracks.length; j++) {  //Begins looping over collection tracks
//                         if (collection[i].arrayTracks[j].includes(object["arrayTracks"])) {  //Checking if collection tracks include object track phrase
//                             counter++;  //Increases counter if track is found
//                         }  //End checking collection tracks
//                     }  //End looping over collection tracks
//                 } else if (collection[i][key] === object[key]) {  //If no tracks in object argument then check other object keys against collection
//                     counter++;  //Increase counter if object match is found
//                 }
//                 if (counter === Object.keys(object).length) {  //Check is all object arguments were found
//                     results.push(collection[i]);  //If all object arguments found, push to array
//                 }  //End check for all-other object arguments
//             }  //End looping over object argument
//         }  //End looping over collection
//     }  //End else
//     return results;
// }//end search

function search(object = {}) {

}; //end refactored search

function showCollection(array) {
    let counter;  //Initiating counter
    console.log(`There are ${array.length} albums in this array:`);
    for (item in array) {  //Begin looping over argument array
        counter = 1;  //Resetting counter after each iteration
        console.log(`${array[item].albumTitle} by ${array[item].artist}, published in ${array[item].yearPublished}`)
        for (items in array[item].arrayTracks) {  //Begin looping over tracks in the object array
            console.log(`${counter}. ${array[item].arrayTracks[items].arrayTrack} - ${array[item].arrayTracks[items].trackDuration}`);
            counter++;  //Increasing counter for bullet point
        }
    }
}//end showCollection

console.log("Adding an album to my collection:", addToCollection("Hybrid Theory", "Linkin Park", 2000, "Papercut", "3:04", "In the End", "3:36", "Crawling", "3:26"));
console.log("Adding an album to my collection:", addToCollection("Meteora", "Linkin Park", 2003, "Easier to Run", "3:24", "Somewhere I Belong", "3:34", "Breaking the Habit", "3:16"));
console.log("Adding an album to my collection:", addToCollection("Mansion", "NF", 2015, "Mansion", "5:23", "Motivated", "4:21", "Wait", "4:01"));
console.log("Adding an album to my collection:", addToCollection("Perception", "NF", 2017, "Dreams", "3:24", "Remember This", "4:00", "If you want Love", "3:20"));
console.log("Adding an album to my collection:", addToCollection("Parachutes", "Coldplay", 2000, "Yellow", "4:29", "Sparks", "3:47", "Don't Panic", "2:17"));
console.log("Adding an album to my collection:", addToCollection("Blink-182", "Blink-182", 2003, "All the Small Things", "2:48", "Whats my age again?", "2:29", "Adam's Song", "4:28"));
console.log("Here is my updated collection:", collection);
showCollection(collection);

console.log("Testing findByArtist Function w/ Linkin Park:", findByArtist("Linkin Park"));
console.log("Testing findByArtist Function w/ NF:", findByArtist("NF"));
console.log("Testing findByArtist Function w/ Elvis:", findByArtist("Elvis"));


//Stretch Goal number one
const testObject = {
    artist: "Linkin Park",
    yearPublished: 2003
}
const testObject2 = {
    artist: "Ray Charles",
    yearPublished: 1957
}
const testObject3 = {
    artist: "NF",
    yearPublished: 2017
}
const testObject4 = {
    artist: "NF",
    yearPublished: 2015,
    albumTitle: "Mansion"
}
const testObject5 = {
    artist: "Linkin Park",
    yearPublished: 2000,
    arrayTracks: "Papercut"
}
const testObject6 = {
    artist: "Blink-182",
    yearPublished: 2003,
    arrayTracks: "Small Things"
}

console.log("Testing search with empty Obj:", search({}));
console.log("Testing search with no arg:", search());
console.log("Testing search with LP 2003 Obj:", search(testObject));
console.log("Testing search with Elvis 1955 Obj:", search(testObject2));
console.log("Testing search with NF 2017 Obj:", search(testObject3));
console.log("Testing search with NF 2015 Mansion Obj:", search(testObject4));
console.log("Testing search with LP 2000 Papercut Obj:", search(testObject5));
console.log("Testing search with Blink-182 2003 Small Things Obj:", search(testObject6));
