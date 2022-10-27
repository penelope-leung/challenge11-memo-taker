const fs = require('fs');
const notes = require('express').Router();
var { readNote, readAndAppendNote, writeToFile, NOTES_JSON_PATH } = require('../helper/readNote');
var { v4: uuid } = require('uuid');

console.log('v4: ', uuid())
// GET Route for retrieving all the notes
notes.get('/', (req, res) => {


    readNote((data) => {
        res.json(data);
    })
    
//   readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI note
notes.post('/', (req, res) => {
  console.log(req.body);


  const { text, title } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    readAndAppendNote(newNote);
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});


notes.delete('/:id', (req, res) => {
    console.log('req', req.params.id)


    
    readNote(data => {
        console.log('current', data);
        const newArray = data.filter(note => {
            return note.id !== req.params.id
        });

        console.log('new array', newArray)

        writeToFile(NOTES_JSON_PATH, newArray)
        res.json(); 
    })
  });

module.exports = notes;
