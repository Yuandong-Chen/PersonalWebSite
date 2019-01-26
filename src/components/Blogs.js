import React from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Search from './Search'
import articles from '../data/articles'
import rating from './searchEngine/Rating'

const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-family: "Times New Roman";
  padding-top:10px;
`;

const Extract = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  display: inline-block;
  font-family: "Times New Roman";
`;

const DateArticle = styled.div`
  padding-left:50px;
  display: flow;
  font-family: "Times New Roman";
`;

const Data = styled.div`
  padding-left:50px;
  padding-right:50px;
  font-family: "Times New Roman";
  padding-bottom: 50px;
`;

const CardFrame = styled.div`
  flex-basis: 20%;
  flex-grow: 0;
  margin-top: 20px;
  background: white;
  border-top: solid 0.5px black;
  border-bottom: solid 0.5px black;
  ${props => props.toggled && css`
    border: solid 0.5px black;
    border-radius: 4px;
    `};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.toggled? "row": "column"};
  padding-left:${props => props.toggled? "50px": "none"};
  padding-right:${props => props.toggled? "50px": "none"};
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const BlogCard = ({toggled, title, extract, date, _rating, ...rest}) => {
  return (
    <CardFrame toggled={toggled} title={title} {...rest}>
    <Flipped inverseFlipId={title}>
      <Title title={title}>{title}</Title>
    </Flipped>
      <DateArticle title={title}>{date}</DateArticle>
      <Extract title={title}>{extract}</Extract>
    </CardFrame>
  );
};

const ExpandedBlog = ({title, data, date, onClick}) => {
  return <Flipped flipId={title}>
  <div onClick={onClick}>
  <Title>{title}</Title>
  <DateArticle>{date}</DateArticle>
  <Data>{data}</Data>
  </div>
  </Flipped>
};

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inFullScreen:null, toggled:false, searching: "", articles: articles.slice().sort((a, b) => {
      if(b.date > a.date) return 1;
      if(a.date == b.date) {
        if(a.title < b.date) {
          return -1
        }
        return 1;
      }
      return -1;
    })};
  }

  setToggle = () => {
    this.setState(({toggled}) => ({toggled: !toggled}));
  }

  setFullScreen = (s) => {
    s.preventDefault();
    s.stopPropagation();
    let i = s.target.title;
    this.setState(({isFullScreen}) => ({isFullScreen: i}));
  }

  onCancel = () => {
    this.setState(({isFullScreen}) => ({isFullScreen: null}));
  }

  setSearching = (s) => {
    //we need to modify the rating of our articles
    this.setState({ searching: s.target.value, articles: rating(s.target.value, this.state.articles.slice()) });
  }

  RawHTML(children){
    return <div className="inner" dangerouslySetInnerHTML={{ __html: children}} />;
  }

  render() {
    return (
      <Flipper flipKey={this.state.searching+this.state.toggled+this.state.isFullScreen} spring="stiff">
      {this.state.isFullScreen?
      this.state.articles.filter((x) => (x.title == this.state.isFullScreen))
      .map((obj) => {return <ExpandedBlog key={obj.title} onClick={this.onCancel} title={obj.title} data={this.RawHTML(obj.data)} date={obj.date} />})
      :<div><Search onChange={this.setSearching} onClick={this.setToggle} />
      <Wrapper toggled={this.state.toggled} onClick={this.setFullScreen}>
      {
        this.state.articles.map((obj) =>
        <Flipped key={obj.title} flipId={obj.title} stagger={true}>
          <BlogCard
            toggled={this.state.toggled}
            key={obj.title}
            title={obj.title}
            extract={obj.extract}
            date={obj.date}
            _rating={obj._rating}
            />
        </Flipped>)
      }
      </Wrapper></div>}
      </Flipper>
    );
  }
}

export default Blogs;
