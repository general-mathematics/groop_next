const ArticleList = (props) => {
  const articles = props.articles;
  const listItems = articles.map(() => <li>article</li>);
  return <ul>{listItems}</ul>;
};

export default ArticleList;
