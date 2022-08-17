console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished) {
    const obj = {};
    obj.albumTitle = title;
    obj.artist = artist;
    obj.yearPublished = yearPublished;
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

function search(object = {}) {
    let results = [];
    if (Object.values(object).length === 0) {
        return collection;
    } else {
        for (let i = 0; i < collection.length; i++) {
            for (let j = 0; j < Object.keys(object).length; j++) {
                if (collection[i][Object.keys(object)[j]] === object[Object.keys(object)[j]] &&
                    collection[i][Object.keys(object)[j + 1]] === object[Object.keys(object)[j + 1]] &&
                    collection[i][Object.keys(object)[j + 1]] !== undefined) {
                    results.push(collection[i]);
                }
            }
        }
    }
    return results;
}//end search

function showCollection(array) {
    console.log(`There are ${array.length} albums in this array:`);
    for (item in array) {
        console.log(`${array[item].albumTitle} by ${array[item].artist}, published in ${array[item].yearPublished}`)
    }
}//end showCollection

console.log("Adding an album to my collection:", addToCollection("Hybrid Theory", "Linkin Park", 2000));
console.log("Adding an album to my collection:", addToCollection("Meteora", "Linkin Park", 2003));
console.log("Adding an album to my collection:", addToCollection("Mansion", "NF", 2015));
console.log("Adding an album to my collection:", addToCollection("Perception", "NF", 2017));
console.log("Adding an album to my collection:", addToCollection("Parachutes", "Coldplay", 2000));
console.log("Adding an album to my collection:", addToCollection("Blink-182", "Blink-182", 2003));
console.log("Here is my updated collection:", collection);

showCollection(collection);
console.log("Testing findByArtist Function:", findByArtist("Linkin Park"));
console.log("Testing findByArtist Function:", findByArtist("NF"));
console.log("Testing findByArtist Function:", findByArtist("Elvis"));


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

console.log("Testing search with empty Obj:", search({}));
console.log("Testing search with no arg:", search());
console.log("Testing with LP 2003 Obj:", search(testObject));
console.log("Testing with Elvis 1955 Obj:", search(testObject2));
console.log("Testing with NF 2017 Obj:", search(testObject3));
console.log("Testing with NF 2015 Mansion Obj:", search(testObject4));  //Does not work with additional arguments - Need to refactor


// Create a function called search. This function should:

// Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
// { artist: 'Ray Charles', year: 1957 }
// The returned output from search should meet these requirements:
// Return a new array of all items in the collection matching all of the search criteria.
// If no results are found, return an empty array.
// If there is no search object or an empty search object provided as input, then return all albums in the collection.
