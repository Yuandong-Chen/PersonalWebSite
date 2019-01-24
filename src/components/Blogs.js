import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
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

const BlogCard = ({title, extract, date, _rating}) => {
  return (
    <CardFrame>
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
    this.state = { searching: "" };
  }

  setSearching = (s) => {
    //we need to modify the rating of our articles
    if (s.target.value == "") {
      let i = 0;
      for (; i < articles.length; i++) {
        window.articles[i]._rating = 0
      }
    }
    else {
      rating(s.target.value);
    }
    this.setState({ searching: s.target.value });
  }

  RawHTML({children, className = ""}){
    return <div className={className} dangerouslySetInnerHTML={{ __html: children.replace(/\n/g, '<br />')}} />;
  }

  render() {
    return (
      <div>
      <Search onChange={this.setSearching} />
      {
        window.articles.sort((a, b) => {
          if(a._rating != b._rating) {
            return b._rating - a._rating;
          }
          else {
            if(a.date < b.date) {
              return 1;
            }
            return -1;
          }
        }).map((obj) =>
          <BlogCard
            key={obj.title}
            title={obj.title}
            extract={obj.extract}
            date={obj.date} _rating={obj._rating}/> )
      }
      </div>
    );
  }
}

export default Blogs;
