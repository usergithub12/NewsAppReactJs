import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import Header from "./Components/Header/Header";
import News from "./Components/News/News";
import AddNews from "./Components/AddNews/AddNews";
import Search from "./Components/Search/Search";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//API
import "./APIClient/api";
import APIClient from "./APIClient/api";

class App extends React.Component {
  state = {
    List: [
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
        url:
          "https://seekingalpha.com/article/4293642-square-dorsey-pick-horse",
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
        title:
          "ABN AMRO in Money-Laundering Scandal After Calling Bitcoin ‘Risky’",
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
        title:
          "ABN AMRO in Money-Laundering Scandal After Calling Bitcoin ‘Risky’",
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
    ],
    counter: 100,
    findNews: "",
    countryvalue: "US"
  };

  onCountryChange = cv => {
    this.setState({ countryvalue: cv }, () => {
      console.log("onCountryChange  countryvalue:" + this.state.countryvalue);
    });
  };

  addNews = news => {
    console.log(news);

    this.setState(state => {
      const newList = this.state.List.slice();
      const newNews = {
        id: this.state.counter++,
        sourcename: news.sourcename,
        author: news.author,
        title: news.title,
        description: news.description,
        url: "http://localhost:3000/",
        urlToImage: news.urlToImage,
        publishedAt: new Date().toLocaleString(),
        content: news.content
      };
      newList.push(newNews);
      return {
        List: newList
      };
    });
  };

  onSearch = searchname => {
    this.setState({
      findNews: searchname
    });
  };

  onShowNews = (items, searchValue) => {
    if (searchValue.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    });
  };

  componentDidMount() {
    this.updateNews(this.state.countryvalue);
  }
  componentWillUpdate() {
    this.updateNews(this.state.countryvalue);
  }

  updateNews = country => {
    console.log("from updateNEws ", country);
    const news = new APIClient();
    const newsList = news
      .getAllNews(country)
      .then(({ articles }) => {
        const newsList = articles;
        console.log(articles);

        this.setState(state => {
          return {
            List: newsList
          };
        });
      })

      .catch(err => console.log(err.message));
  };
  render() {
    const showNews = this.onShowNews(this.state.List, this.state.findNews);
    return (
      <Fragment>
        <Router>
          <Header onCountryChange={this.onCountryChange} />
          <Search onSearch={this.onSearch} />
          <Switch>
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h2>List of News</h2>
                  <p>World News</p>
                </div>
              </div>
              <div className="row">
                <div className="card-columns">
                  <Route
                    path="/"
                    exact
                    render={() => (
                      <News NewsList={showNews} onSearch={this.onSearch} />
                    )}
                  />
                  <Route path="/contact" exact component={Contact} />
                  <Route path="/about" exact component={About} />
                </div>
                <Route
                  path="/add"
                  exact
                  render={() => <AddNews addContact={this.addNews} />}
                />
              </div>
            </div>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
