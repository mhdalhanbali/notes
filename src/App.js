import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { notes } from './helpers/notes'

function App() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}>
          <ul>
            {notes.map((note) => (
              <li>{note}</li>
            ))}
          </ul>
        </Col>
        <Col xs={12} md={8}>
          Editor
        </Col>
      </Row>
    </Container>
  )
}

export default App
