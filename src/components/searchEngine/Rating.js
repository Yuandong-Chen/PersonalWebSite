export default function rating(find) {
  // use find to compute new _rating of articles
  let a = new Set(find.split(" "));
  let i = 0;
  for (; i < window.articles.length; i++) {
    let b = new Set(window.articles[i].tags.split(" "));
    window.articles[i]._rating = (new Set([...a].filter(x => b.has(x)))).size;
  }
}
