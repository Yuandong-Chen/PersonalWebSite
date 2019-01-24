import React from 'react';
import ReactDOM from 'react-dom';
import Loading from './components/Loading'
import Home from './components/Home'
import articles from './data/articles'

class App extends React.Component {
  constructor(props) {
    super(props);
    window.articles = articles;
    this.precompute = this.precompute.bind(this);
    this.state = { isLoading: true };
  }

  precompute() {
    window.articles.sort((a, b) => {
      if(b.date > a.date) return 1;
      if(a.date == b.date) {
        if(a.title < b.date) {
          return -1
        }
        return 1;
      }
      return -1;
    });
    this.setState({isLoading: false});
  }

  componentDidMount() {
    setTimeout(() => { this.precompute() }, 500);
  }

  render() {
    return(
        this.state.isLoading? <Loading/>:<Home/>
    );
  }
}

export default App;
