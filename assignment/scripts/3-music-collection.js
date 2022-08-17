console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished, arrayTracks) {
    const obj = {};
    obj.albumTitle = title;
    obj.artist = artist;
    obj.yearPublished = yearPublished;
    obj.arrayTracks = arrayTracks;
    collection.push(obj);
    return obj;
}//end addToCollection

function findByArtist(artist) {
    let artistArray = [];
    for (item in collection) {
        if (collection[item].artist === artist) {
            artistArray.push(collection[item]);
        }
    }
    return artistArray;
}//end findByArtist

//searching track names: collection[0].arrayTracks[0].includes("Papercut") === true
function search(object = {}) {
    let results = [];
    let counter;
    if (Object.values(object).length === 0) {
        return collection;
    } else {
        for (let i = 0; i < Object.keys(collection).length; i++) {
            counter = 0;
            for (key in object) {
                if (collection[i][key] === object[key]) {
                    counter++;
                }
                if (counter === Object.keys(object).length) {
                    results.push(collection[i]);
                }
            }
        }
    }
    return results;
}//end search

function showCollection(array) {
    let counter;
    console.log(`There are ${array.length} albums in this array:`);
    for (item in array) {
        counter = 1;
        console.log(`${array[item].albumTitle} by ${array[item].artist}, published in ${array[item].yearPublished}`)
        for (items in array[item].arrayTracks) {
            console.log(`${counter}. ${array[item].arrayTracks[items]}`);
            counter++;
        }
    }
}//end showCollection

console.log("Adding an album to my collection:", addToCollection("Hybrid Theory", "Linkin Park", 2000, ["Papercut - 3:04", "In the End - 3:36", "Crawling - 3.26"]));
console.log("Adding an album to my collection:", addToCollection("Meteora", "Linkin Park", 2003, ["Easier to Run - 3:24", "Somewhere I Belong - 3:34", "Breaking the Habit - 3:16"]));
console.log("Adding an album to my collection:", addToCollection("Mansion", "NF", 2015, ["Mansion - 5:23", "Motivated - 4:21", "Wait - 4:01"]));
console.log("Adding an album to my collection:", addToCollection("Perception", "NF", 2017, ["Dreams - 3:24", "Remember This - 4:00", "If you want Love - 3:20"]));
console.log("Adding an album to my collection:", addToCollection("Parachutes", "Coldplay", 2000, ["Yellow - 4:29", "Sparks - 3:47", "Don't Panic - 2:17"]));
console.log("Adding an album to my collection:", addToCollection("Blink-182", "Blink-182", 2003, ["All the Small Things - 2:48", "Whats my age again? - 2:29", "Adam's Song - 4:28"]));
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

console.log("Testing search with empty Obj:", search({}));
console.log("Testing search with no arg:", search());
console.log("Testing with LP 2003 Obj:", search(testObject));
console.log("Testing with Elvis 1955 Obj:", search(testObject2));
console.log("Testing with NF 2017 Obj:", search(testObject3));
console.log("Testing with NF 2015 Mansion Obj:", search(testObject4));
console.log("Testing with LP 2000 Papercut Obj:", search(testObject5));


// Add an array of tracks to your album objects. Each track should have a name and duration. You will need to update the functions to support this new property:

// DONE Update the addToCollection function to also take an input parameter for the array of tracks.
// Update search to allow a trackName search criteria.
// DONE Update the showCollection function to display the list of tracks for each album with its name and duration.