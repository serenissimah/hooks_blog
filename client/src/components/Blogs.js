import React from "react";
import axios from "axios";
import { List, Header, Segment, } from "semantic-ui-react";

class Blogs extends React.Component {
  state = { blogs: [], };

  componentDidMount() {
    axios.get("/api/blogs")
      .then( res => {
        this.setState({ blogs: res.data, });
      })
  }

  renderBlogs = () => {
    const { blogs, } = this.state;
    return blogs.map( blog => (
      <Segment key={blog.id}>
        <List.Header as="h3">{blog.title}</List.Header>
        <List.Description>
          { blog.body }
        </List.Description>
      </Segment>
    ))
  }

  render() {
    return (
      <>
        <Header as="h1">My Blogs</Header>
        <br />
        <List>
          { this.renderBlogs() }
        </List>
      </>
    )
  }
}

export default Blogs;