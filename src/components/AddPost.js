import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../styles/addpost.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';



function AddPost() {

  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    const newPost = {
      title: title,
      body: body,
      userId: userId
    };
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-Type': 'application/json'
      }

    })
      .then(response => response.json())
      .then((json) => console.log(json));


  };


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='main_add_post'>
        <div className='button_add_post'>
          <Button variant="primary" onClick={handleShow} >Modal
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton variant="white">
              <Modal.Title>Create Post</Modal.Title>
            </Modal.Header>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}

                  />
                  <Form.Control.Feedback type="invalid">
                    Error
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Body</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Error
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                  <Form.Label>UserId</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="UserId"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Error
                  </Form.Control.Feedback>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Button type="submit">Submit form</Button>
            </Form>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default AddPost;