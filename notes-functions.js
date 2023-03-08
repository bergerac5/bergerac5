

// Read existing notes from localStorage
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if(notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// save the notes to localStorage
const savedNotes = function (notes) {
    localStorage.getItem('notes', JSON.stringify(notes))
}

// Generate the DOM structure for a note
const GenerateNoteDOM = function (note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    // setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)

    //setup note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'unnamed note'
    }
    noteEl.appendChild(textEl)

    return noteEl
}

// render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase()) 
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note){
        const noteEl = GenerateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

// Save the note to localStorage
const saveNotes =  function (notes){
    localStorage.setItem('notes',JSON.stringify(notes))
}
