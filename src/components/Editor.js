import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Editor() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control className="mb-4" size="lg" />
        <Form.Label>Note</Form.Label>
        <Form.Control as="textarea" size="lg" />
      </Form.Group>
      <Button className="mr-2" variant="primary">
        Save
      </Button>
      <Button variant="danger">Delete</Button>
    </Form>
  )
}
