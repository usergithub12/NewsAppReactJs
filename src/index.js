import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Header from "./Components/Header/Header";
import News from "./Components/News/News";

const List = [
  {
    id: 1,
    sourcename: "Seekingalpha.com",
    author: "John Oates",
    title:
      "Now Uncle Sam would like a word with Brit teen TalkTalk hacker about a huge crypto-coin heist",
    description:
      "Someone's popular! One of the teens behind the 2015 hack on UK telco TalkTalk has been indicted in the US over a huge cryptocurrency heist.…",
    url:
      "https://www.theregister.co.uk/2019/09/26/talktalk_hacker_indicted_in_us/",
    urlToImage: "https://regmedia.co.uk/2016/08/31/cryingnomoney.jpg",
    publishedAt: "2019-09-26T12:02:20Z",
    content:
      "One of the teens behind the 2015 hack on UK telco TalkTalk has been indicted in the US over a huge cryptocurrency heist.\r\nElliott Gunton, 19, is facing five separate charges ranging from computer fraud and abuse to wire fraud and aggravated identity theft. Po… [+2088 chars]"
  },
  {
    id: 2,
    sourcename: "Theregister.co.uk",
    author: "The Prospector",
    title: "Square: Dorsey Should Pick A Horse",
    description:
      "Square has expanded its payment processing ecosystem with several new service offerings in recent years, but that innovation appears to be slowing. Though the c",
    url: "https://seekingalpha.com/article/4293642-square-dorsey-pick-horse",
    urlToImage:
      "https://static.seekingalpha.com/uploads/2019/1/4/49692420-1546624527920104.png",
    publishedAt: "2019-09-26T11:54:07Z",
    content:
      "Thesis\r\nWhen the year began, it felt like Square (SQ) was on a continual innovation binge. It had added its free debit card for businesses in January, making the Square payment platform and services ecosystem even more indispensable to small business clients.… [+7698 chars]"
  },
  {
    id: 3,
    sourcename: "Cointelegraph.com",
    author: "Cointelegraph By Marie Huillet",
    title: "ABN AMRO in Money-Laundering Scandal After Calling Bitcoin ‘Risky’",
    description:
      "Dutch bank ABN AMRO finds itself in the midst of a major alleged money laundering scandal, having leveled criticisms at “unregulated cryptocurrencies” earlier this year",
    url:
      "https://cointelegraph.com/news/abn-amro-in-money-laundering-scandal-after-calling-bitcoin-risky",
    urlToImage:
      "https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9lMWU4MDJjNDlkNTU1YzYzMjk0ZTljYzhkNTc5OTc4My5qcGc=.jpg",
    publishedAt: "2019-09-26T11:42:00Z",
    content:
      "Having trumped up the risks of unregulated cryptocurrencies earlier this year, Dutchbank ABN Amro NV finds itself in the midst of a major money-laundering scandal.\r\nOn Sept. 26, Bloomberg reported on news of a criminal probe into the bank’s alleged failures t… [+2515 chars]"
  },
  {
    id: 4,
    sourcename: "Cointelegraph.com",
    author: "Cointelegraph By Marie Huillet",
    title: "ABN AMRO in Money-Laundering Scandal After Calling Bitcoin ‘Risky’",
    description:
      "Dutch bank ABN AMRO finds itself in the midst of a major alleged money laundering scandal, having leveled criticisms at “unregulated cryptocurrencies” earlier this year",
    url:
      "https://cointelegraph.com/news/abn-amro-in-money-laundering-scandal-after-calling-bitcoin-risky",
    urlToImage:
      "https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9lMWU4MDJjNDlkNTU1YzYzMjk0ZTljYzhkNTc5OTc4My5qcGc=.jpg",
    publishedAt: "2019-09-26T11:42:00Z",
    content:
      "Having trumped up the risks of unregulated cryptocurrencies earlier this year, Dutchbank ABN Amro NV finds itself in the midst of a major money-laundering scandal.\r\nOn Sept. 26, Bloomberg reported on news of a criminal probe into the bank’s alleged failures t… [+2515 chars]"
  }
];

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>List of News</h2>
              <p>World News</p>
            </div>
          </div>
          <div className="row">
            <News NewsList={List} />
          </div>
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
