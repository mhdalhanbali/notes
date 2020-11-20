import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import List from './components/List'
import Editor from './components/Editor'

function App() {
  return (
    <Container>
      <Jumbotron>
        <h1>Notes</h1>
      </Jumbotron>
      <Row>
        <Col xs={12} md={4}>
          <Button className="mb-4" variant="dark" block>
            New note
          </Button>
          <List />
        </Col>
        <Col xs={12} md={8}>
          <Editor />
        </Col>
      </Row>
    </Container>
  )
}

export default App
