const notesFunctions = require('./utils')
const fs = require('fs')


notesFunctions.checkFileExists('notes.json')

const notesFunc = process.argv[2]
const notes = process.argv[3]

let mainNotes = JSON.parse(fs.readFileSync('notes.json').toString())

notesFunctions.notesFunctions(notesFunc,notes,mainNotes)


