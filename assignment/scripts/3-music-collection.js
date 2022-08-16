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
