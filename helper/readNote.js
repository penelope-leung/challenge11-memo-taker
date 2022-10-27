const fs = require("fs");

const NOTES_JSON_PATH = './db/notes.json';
function readNote(callback) {
    fs.readFile(NOTES_JSON_PATH, (err, data) => {
          callback(JSON.parse(data));
    });
}

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

function readAndAppendNote(newNote) {
    fs.readFile(NOTES_JSON_PATH, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
          const parsedData = JSON.parse(data);
          parsedData.push(newNote);
          writeToFile(NOTES_JSON_PATH, parsedData);
        }
      });
}

module.exports = {
    readNote,
    readAndAppendNote,
    writeToFile,
    NOTES_JSON_PATH
}