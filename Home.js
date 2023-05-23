import styles from "./Home.module.css";
import { useState } from "react";
import { Posts } from "../components/Posts";

export const Home = (props) => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    userPfp: props.user.userPfp,
    name: props.user.name,
    username: props.user.username,
    description: "",
    contentMedia: "",
  });

  const handleDescriptionChange = (event) => {
    setState({ ...state, val1: event.target.value });
    setNewPost({ ...newPost, description: event.target.value });
  };

  const handleMediaURL = (event) => {
    setState({ ...state, val2: event.target.value });
    setNewPost({ ...newPost, contentMedia: event.target.value });
  };

  const addNewPost = () => {
    setPosts([newPost, ...posts]);
    setState({
      val1: "",
      val2: "",
    });
  };

  const [state, setState] = useState({ val1: "", val2: "" });

  return (
    <>
      <div className={styles.friendsList}>
        <h2>Friends</h2>
        <ul>
          <li>
            <img
              src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
              alt="Friend 1"
            />
            <span>Friend 1</span>{" "}
            <span className={styles.timelineText}> +Timeline </span>
            <br />
            <small style={{ color: "green" }}>Online</small>
          </li>
          <li>
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg"
              alt="Friend 2"
            />
            <span>Friend 2</span>{" "}
            <span className={styles.timelineText}> +Timeline </span>
            <br />
            <small>Offline</small>
          </li>
          <li>
            <img
              src="https://media.istockphoto.com/photos/cool-cat-with-shades-picture-id1249884596?k=20&m=1249884596&s=612x612&w=0&h=16nnd8JAJW2MdEghUJnaAiZfPezWoVUTAW9bwOE3Z7E="
              alt="Friend 3"
            />
            <span>Friend 3</span>{" "}
            <span className={styles.timelineText}> +Timeline </span>
            <br />
            <small style={{ color: "green" }}>Online</small>
          </li>
          <li>
            <img
              src="https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60"
              alt="Friend 4"
            />
            <span>Friend 4</span>{" "}
            <span className={styles.timelineText}> +Timeline </span>
            <br />
            <small style={{ color: "green" }}>Online</small>
          </li>
          <li
            style={{
              textAlign: "center",
              color: "rgb(27, 164, 255)",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Suggest Friends
          </li>
        </ul>
      </div>
      <div className={styles.posts} style={{ paddingTop: 85 }}>
        <a className={styles.timelineAddButton} href="#">
          <div
            className={styles.post}
            style={{
              textAlign: "center",
              backgroundColor: "rgb(150, 150, 150)",
              color: "black",
            }}
          >
            +
          </div>
        </a>
        <h2>~ Add New Post ~</h2>
        <label>Description: </label>
        <input
          type="text"
          value={state.val1}
          onChange={handleDescriptionChange}
          placeholder="enter description"
          style={{width: "400px"}}
        />{" "}
        <br />
        <br />
        <label>Media URL: </label>
        <input
          type="text"
          value={state.val2}
          onChange={handleMediaURL}
          placeholder="paste the url here"
          style={{width: "400px"}}
        />{" "}
        <br />
        <br />
        <button onClick={addNewPost} style={{ marginBottom: "20px" }}>
          Add Post
        </button>
        {posts.map((post) => {
          return <Posts post={post} />;
        })}
        <div className={styles.post}>
          <div className={styles.postHeader}>
            <img
              src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
              alt="User 1"
            />
            <h3>User 1</h3>
            <small>1 hour ago</small>
          </div>
          <div className={styles.postContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            auctor, nisi eu bibendum scelerisque, turpis enim gravida velit, sit
            amet iaculis justo est vel eros.
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
        <div className={styles.post}>
          <div className={styles.postHeader}>
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg"
              alt="User 2"
            />
            <h3>User 2</h3>
            <small>2 hours ago</small>
          </div>
          <div className={styles.postContent}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </div>
          <div className={styles.postImage}>
            <img
              src="https://images.unsplash.com/photo-1679939099455-e3dc1d2b6dce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              alt="Post 1"
            />
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
            <button className="share">
              <i className="fa fa-share" />
              Share
            </button>
          </div>
        </div>
        <div className={styles.post}>
          <div className={styles.postHeader}>
            <img
              src="https://media.istockphoto.com/photos/cool-cat-with-shades-picture-id1249884596?k=20&m=1249884596&s=612x612&w=0&h=16nnd8JAJW2MdEghUJnaAiZfPezWoVUTAW9bwOE3Z7E="
              alt="User 3"
            />
            <h3>User 3</h3>
            <small>3 hours ago</small>
          </div>
          <div className={styles.postContent}>
            Proin volutpat mauris non magna tristique blandit. Vivamus placerat
            ipsum in ex varius, at sagittis enim aliquam.
          </div>
          <div className={styles.postImage}>
            <img
              src="https://images.unsplash.com/photo-1680082286331-4473a0801b0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Post 2"
            />
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
        <div className={styles.post}>
          <div className={styles.postHeader}>
            <img
              src="https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60"
              alt="User 4"
            />
            <h3>User 4</h3>
            <small>4 hours ago</small>
          </div>
          <div className={styles.postContent}>
            Aliquam quis diam feugiat, ullamcorper odio nec, molestie ipsum.
            Pellentesque vel aliquam sapien.
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
        <div className={styles.post}>
          <div className={styles.postHeader}>
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-cat-wearing-sunglasses-while-sitting-royalty-free-image-1571755145.jpg"
              alt="User 2"
            />
            <h3>User 2</h3>
            <small>2 hours ago</small>
          </div>
          <div className={styles.postContent}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </div>
          <div className={styles.postImage}>
            <img
              src="https://images.unsplash.com/photo-1679939099455-e3dc1d2b6dce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              alt="Post 1"
            />
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
        <div className={styles.post}>
          <div className={styles.postHeader}>
            <img
              src="https://media.istockphoto.com/photos/cool-cat-with-shades-picture-id1249884596?k=20&m=1249884596&s=612x612&w=0&h=16nnd8JAJW2MdEghUJnaAiZfPezWoVUTAW9bwOE3Z7E="
              alt="User 3"
            />
            <h3>User 3</h3>
            <small>3 hours ago</small>
          </div>
          <div className={styles.postContent}>
            Proin volutpat mauris non magna tristique blandit. Vivamus placerat
            ipsum in ex varius, at sagittis enim aliquam.
          </div>
          <div className={styles.postImage}>
            <img
              src="https://images.unsplash.com/photo-1680082286331-4473a0801b0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="Post 2"
            />
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
      </div>

      <footer>
        <div className={styles.footerContainer}>
          <div className={styles.logo}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png"
              alt="Synchronised Timeline Logo"
            />
          </div>
          <div className={styles.links}>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className={styles.socialIcons}>
            <a href="#">
              <i className="ab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
