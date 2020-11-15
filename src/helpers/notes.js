/*
C: create a note
R: Read (get) one note and all notes
U: Update a note
D: Delete a note
*/

const notes = [
  { id: 1, title: 'New note', body: '' },
  { id: 2, title: 'Another note', body: '' },
  { id: 4, title: 'Another note', body: '' },
  { id: 3, title: 'Yet another note', body: '' },
]

export function createNote() {}

export function getNote() {}

export function getNotes() {
  return notes
}

export function updateNote() {}

export function deleteNote() {}
