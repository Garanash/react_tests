import "./Post.css";

function Post(props) {
  const { id, title, userId, body } = props;
  return (
    <div className="post">
      <small>{id}</small>
      <h2> {title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default Post;
