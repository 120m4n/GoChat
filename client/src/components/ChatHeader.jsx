import React from "react";
import Card from "react-bootstrap/Card";

export default ChatHeader = (props) => {
  return (
      <Card title="Chat-App">
          <Form>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="type here."
                      onChange={handleChange}
                  />  <Button
                      size="md"
                      class="mb-2"
                      variant="primary"
                      type="submit"
                      onClick={handleSubmit}
                      disabled={!message}
                  >
                      Send
                  </Button>
              </Form.Group>
              
                  
          </Form>
    </Card>
  );
};
