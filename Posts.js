import styles from "./Posts.module.css";

export const Posts = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <img src={props.post.userPfp} />
        <div>
          <h3 style={{marginBottom: '0px'}}>{props.post.name}</h3>
          <h5 className={styles.postUsername}> @johndoe</h5>
        </div>
        <small>1 hour ago</small>
      </div>
      <div className={styles.postContent}>{props.post.description}</div>
      <div className={styles.postImage}>
        <img src={props.post.contentMedia} />
      </div>
      <div className={styles.postActions}>
        <button className={styles.like}>
          <i className="fa fa-thumbs-up" />
          Like
        </button>
        <button className={styles.comment}>
          <i className="fa fa-comment" />
          Comment
        </button>
        <button className={styles.share}>
          <i className="fa fa-share" />
          Share
        </button>
      </div>
    </div>
  );
};
