const uniqid = require('uniqid')
const fs = require('fs')
const chalk = require('chalk')


const notesFunctions = (notesFunc,notes,mainNotes) => {

    if(notesFunc === 'add'){

        if(notes === undefined){
            console.error(chalk.red.inverse.bold("Sorry no notes to add"))
        }
    
        else{
    
        mainNotes.notes.push({noteId:uniqid(),note:notes})
    
            fs.writeFileSync('notes.json',JSON.stringify(mainNotes))
    
        }
    
    }
    
    else if(notesFunc === 'delete'){
    
        if(notes === undefined || mainNotes.notes.length===0){
            console.error(chalk.red.inverse.bold("Sorry no notes to delete"))
        }
    
        else{
    
        mainNotes.notes = mainNotes.notes.filter(c => {
            return c.noteId !== notes
        })
    
            fs.writeFileSync('notes.json',JSON.stringify(mainNotes))
    
        }
    
    }
    
    else if(notesFunc === 'list'){
    
        if(mainNotes.notes.length===0){
            console.error(chalk.red.inverse.bold("Sorry no notes to list"))
        }
    
        else{
    
            mainNotes.notes.forEach(c => {
                console.log(`${c.noteId} --- ${c.note}`)
            })
    
    
        }

}
}

const checkFileExists = (filename) => {
    if(!fs.existsSync(`./${filename}`)){
        fs.writeFileSync(`${filename}`,JSON.stringify({notes:[]}))
    }
}

module.exports = {notesFunctions,checkFileExists}