export default function rating(find, articles) {
  // use find to compute new _rating of articles
  let a = new Set(find.split(" "));
  let i = 0;
  for (; i < articles.length; i++) {
    let b = new Set(articles[i].tags.split(" "));
    articles[i]._rating = (new Set([...a].filter(x => b.has(x)))).size;
  }
  return articles.sort((a, b) => {
    if(a._rating != b._rating) {
      return b._rating - a._rating;
    }
    else {
      if(a.date < b.date) {
        return 1;
      }
      return -1;
    }
  })
}
