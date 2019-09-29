import React from "react";
import "./AddNews.css";

class AddNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sourcename: "",
      author: "",
      title: "",
      description: "",
      urlToImage: "",
      content: ""
    };
  }

  onGetValue = event => {
    console.log(event.target.value);
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const news = {
      sourcename: this.state.sourcename,
      author: this.state.author,
      title: this.state.title,
      description: this.state.description,
      urlToImage: this.state.urlToImage,
      content: this.state.content
    };

    this.props.addContact(news);
  };

  render() {
    return (
      <div className="col-md-10 offset-md-1 row-block">
        <form onSubmit={this.onSubmit}>
          <div className="form-label-group">
            <input
              name="sourcename"
              type="text"
              placeholder="Source"
              className="form-control"
              onChange={this.onGetValue}
            />
          </div>
          <input
            name="author"
            type="text"
            placeholder="Author"
            className="form-control"
            onChange={this.onGetValue}
          />
          <input
            name="title"
            className="form-control"
            placeholder="title"
            type="text"
            onChange={this.onGetValue}
          />
          <input
            name="description"
            className="form-control"
            placeholder="description"
            type="text"
            onChange={this.onGetValue}
          />
          <input
            name="urlToImage"
            className="form-control"
            placeholder="urlToImage"
            type="text"
            onChange={this.onGetValue}
          />
          <input
            name="content"
            className="form-control"
            placeholder="content"
            type="text"
            onChange={this.onGetValue}
          />

          <button className="btn btn-success w-100" type="submit">
            Add News
          </button>
        </form>
      </div>
    );
  }
}

export default AddNews;
