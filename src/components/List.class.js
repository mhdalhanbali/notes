import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { getNotes } from '../helpers/notes'

export default class List extends React.Component {
  state = { selectedNote: undefined }

  // const [selectedNote, setSelectedNote] = useState(undefined)
  onSelectNote = (note) => {
    // setSelectedNote(note)
    this.setState({ selectedNote: note })
  }

  render() {
    const { selectedNote } = this.state // this.state.selectedNote
    return (
      <ListGroup as="ul">
        {getNotes().map((note, index) => (
          <ListGroup.Item
            active={selectedNote ? note.id === selectedNote.id : false}
            onClick={() => this.onSelectNote(note)}
            as="li"
          >
            {note.title}
          </ListGroup.Item>
        ))}
      </ListGroup>
    )
  }
}
