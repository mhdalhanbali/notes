import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import {getNotes} from '../helpers/notes'

export default function List({selectedNote, setSelectedNote, notes}) {
  const onSelectNote = (note) => {
    setSelectedNote(note)
  }

  if (notes.length === 0) {
    return <p>No notes found</p>
  }
  return (
    <ListGroup as="ul">
      {getNotes().map((note, index) => (
        <ListGroup.Item
          active={selectedNote ? note.id === selectedNote.id : false}
          onClick={() => onSelectNote(note)}
          as="li"
        >
          {note.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
