import React from "react";

import "./NewsItem.css";

class NewsItem extends React.Component {
  render() {
    const {
      sourcename,
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      content
    } = this.props;

    return (
      <div className="card col-lg-4 col-md-6 col-sm-12 border-0">
        <div className="card-body">
          <div className="row">
            <img src={urlToImage} />
          </div>
          <div className="card-body">
            <div className="news-content">
              <a href={url}>
                <h2>{title} </h2>
              </a>
              <p>{description}</p>
            </div>
            <div className="news-footer">
              <div className="news-author">
                <ul className="list-inline list-unstyled">
                  <li className="list-inline-item text-secondary">
                    <i className="fa fa-user"></i>
                    {author}
                  </li>
                  <li className="list-inline-item text-secondary">
                    {/* <i className="fa fa-user"></i> */}
                    {sourcename}
                  </li>
                  <li className="list-inline-item text-secondary">
                    <i className="fa fa-eye"></i>
                    110 Views
                  </li>
                  <li className="list-inline-item text-secondary">
                    <i className="fa fa-calendar"></i>
                    {publishedAt}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
