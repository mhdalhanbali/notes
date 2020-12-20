import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {createNote, getNotes, updateNote, deleteNote} from '../helpers/notes'
import Alert from 'react-bootstrap/Alert'

const STATUS_INITIAL_VALUE = ''

export default function Editor({selectedNote, refreshList, setSelectedNote}) {
  const [title, setTitle] = useState(undefined)
  const [body, setBody] = useState(undefined)
  const [status, setStatus] = useState(STATUS_INITIAL_VALUE)

  useEffect(() => {
    setTimeout(() => setStatus(STATUS_INITIAL_VALUE), 3000)
  }, [status])

  useEffect(() => {
    if (selectedNote) return setTitle(selectedNote.title)
  }, [selectedNote])
  useEffect(() => {
    if (selectedNote) return setBody(selectedNote.body)
    setBody('')
  }, [selectedNote])
  useEffect(() => {
    if (selectedNote) return setBody(selectedNote.body)
    setTitle('')
  }, [selectedNote])

  const onChangeTitle = (e) => setTitle(e.target.value)
  const onChangeBody = (e) => setBody(e.target.value)
  const onSave = (e) => {
    if (title === '') {
      return alert("Title field can't be empty!")
    }
    if (body === '') {
      return alert("Body field can't be empty!")
    }
    e.preventDefault()
    if (selectedNote) {
      setTitle('')
      setBody('')
      setStatus(
        <Alert className="mt-4" variant={'success'}>
          Your note has been Updated successfully
        </Alert>
      )
      updateNote(selectedNote.id, title, body)
      return refreshList()
    }
  }
  const onDelete = (e) => {
    e.preventDefault()
    console.log(selectedNote)
    deleteNote(selectedNote.id)
    refreshList()
    setTitle('')
    setBody('')
    setStatus(
      <Alert className="mt-4" variant={'success'}>
        Your note has been deleted successfully
      </Alert>
    )
  }

  const onCreate = (e) => {
    if (title === '') {
      return alert("Title field can't be empty!")
    }
    if (body === '') {
      return alert("Body field can't be empty!")
    }
    e.preventDefault()
    createNote(title, body)
    setTitle('')
    refreshList()
    setBody('')
    setStatus(
      <Alert className="mt-4" variant={'success'}>
        Your note has been created successfully
      </Alert>
    )
  }
  console.log(getNotes())
  return (
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control className="mb-4" size="lg" value={title} onChange={onChangeTitle} />
        <Form.Label>Note</Form.Label>
        <Form.Control as="textarea" size="lg" value={body} onChange={onChangeBody} />
      </Form.Group>
      {!selectedNote && (
        <Button onClick={onCreate} className="mr-2" variant="primary">
          Create
        </Button>
      )}

      {selectedNote && (
        <Button onClick={onSave} className="mr-2" variant="primary">
          Update
        </Button>
      )}

      {selectedNote && (
        <Button onClick={onDelete} variant="danger">
          Delete
        </Button>
      )}
      {status && <p>{status}</p>}
    </Form>
  )
}
