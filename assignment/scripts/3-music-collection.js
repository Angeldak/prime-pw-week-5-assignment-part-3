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

console.log("Adding an album to my collection:", addToCollection("Hybrid Theory", "Linkin Park", 2000));
console.log("Adding an album to my collection:", addToCollection("Meteora", "Linkin Park", 2003));
console.log("Adding an album to my collection:", addToCollection("Mansion", "NF", 2015));
console.log("Adding an album to my collection:", addToCollection("Perception", "NF", 2017));
console.log("Adding an album to my collection:", addToCollection("Parachutes", "Coldplay", 2000));
console.log("Adding an album to my collection:", addToCollection("Blink-182", "Blink-182", 2003));
console.log("Here is my updated collection:", collection);
