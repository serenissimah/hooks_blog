import React from "react";
import axios from "axios";
import { Form, } from "semantic-ui-react";

class BlogForm extends React.Component {
  state = { title: "", body: "", };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/blogs", { ...this.state, })
      .then( res => {
        this.props.add(res.data);
        this.props.toggleForm();
      })
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Title"
              placeholder="Title"
              name="title"
              required
              onChange={this.handleChange}
              value={this.state.title}
            />
            <Form.Input
              label="Body"
              placeholder="Body"
              name="body"
              required
              onChange={this.handleChange}
              value={this.state.body}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </>
    )
  }
}

export default BlogForm;
