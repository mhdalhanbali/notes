const notes = [
  {id: 1, title: 'First Note', body: 'First Body'},
  {id: 2, title: 'Second Note', body: 'Second Body'},
  {id: 4, title: 'Third Note', body: 'Third Body'},
  {id: 3, title: 'Fourth Note', body: 'Fourth Body'},
]

export function createNote(title, body) {
  const note = {
    id: Date.now(),
    title,
    body,
  }
  notes.push(note)
  return note
}

export function getNote(id) {
  return notes.find((note) => note.id === id)
}

export function getNotes() {
  return notes
}

export function updateNote(id, title, body) {
  const indexToUpdate = notes.findIndex((note) => note.id === id)
  const note = {
    id,
    title,
    body,
  }
  notes.splice(indexToUpdate, 1)
  notes.splice(0, 0, note)
  return notes
}

export function deleteNote(id) {
  const indexToDelete = notes.findIndex((note) => note.id === id)
  if (indexToDelete >= 0) notes.splice(indexToDelete, 1)
  return true
}
