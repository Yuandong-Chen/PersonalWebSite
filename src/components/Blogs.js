import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Search from './Search'
import articles from '../data/articles'
import rating from './searchEngine/Rating'

const Title = styled.h2`

`;

const Extract = styled.span`

`;

const CardFrame = styled.div`
  border: solid 1px blue;
  margin-top: 5px;
`;

const BlogCard = ({title, extract, date, _rating, ...rest}) => {
  return (
    <CardFrame {...rest}>
      <Title>{title}</Title>
      <span>{date}</span>
      <Extract>{extract}</Extract>
      {_rating}
    </CardFrame>
  );
};

const ExpandedBlog = ({title, data, date}) => {

};

class Blogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searching: "", articles: articles.slice().sort((a, b) => {
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

  setSearching = (s) => {
    //we need to modify the rating of our articles
    this.setState({ searching: s.target.value, articles: rating(s.target.value, this.state.articles.slice()) });
  }

  RawHTML({children, className = ""}){
    return <div className={className} dangerouslySetInnerHTML={{ __html: children.replace(/\n/g, '<br />')}} />;
  }

  render() {
    return (
      <div>
      <Flipper flipKey={this.state.searching} spring="gentle">
      <Search onChange={this.setSearching} />
      {
        this.state.articles.map((obj) =>
        <Flipped key={obj.title} flipId={obj.title}>
          <BlogCard
            key={obj.title}
            title={obj.title}
            extract={obj.extract}
            date={obj.date} _rating={obj._rating}/>
        </Flipped>)
      }
      </Flipper>
      </div>
    );
  }
}

export default Blogs;
