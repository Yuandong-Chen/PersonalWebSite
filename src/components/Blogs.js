import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Search from './Search'
import articles from '../data/articles'
import rating from './searchEngine/Rating'

const Title = styled.div`
  text-align: center;
  font-size: 30px;
  font-family: "Times New Roman";
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
`;

const CardFrame = styled.div`
  flex-basis: 15%;
  flex-grow: 0;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  background: white;
  border: solid 0.5px black;
  border-radius: 4px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.toggled? "row": "column"};
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BlogCard = ({title, extract, date, _rating, ...rest}) => {
  return (
    <CardFrame title={title} {...rest}>
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
    return <div dangerouslySetInnerHTML={{ __html: children.replace(/\n/g, '<br />')}} />;
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
