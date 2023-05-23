import styles from "./Profile.module.css";
import { Link } from "react-router-dom";

export const Profile = (props) => {
  return (
    <div style={{ paddingTop: 100 }}>
      <div className={styles.profileContainer}>
        <div className={styles.profilePicture}>
          <img
            src="https://remote-tools-images.s3.amazonaws.com/best+discord+pfp/blog+12/anime/anime/1+(1).jpg"
            alt="Profile Picture"
          />
        </div>
        <div className={styles.profileDetails}>
          <h1>{props.user.name || "John Doe"}</h1>
          <h2>{props.user.username ? `@${props.user.username}` : "@johndoe"}</h2>
          <p>{props.user.bio || "This is a bio"}</p>
          <ul>
            <li>
              <strong>Posts:</strong> 9
            </li>
            <li>
              <strong>Followers:</strong> 150
            </li>
            <li>
              <strong>Following:</strong> 50
            </li>
          </ul>

          <div className={styles.profileButtons}>
            <Link to="/settings" style={{ textDecoration: "none" }}>
              <button
                style={{
                  backgroundColor: "#4267b2",
                  color: "white",
                  border: "1px solid #4267b2",
                }}
              >
                Edit Profile
              </button>
            </Link>
            <button>Log Out</button>
          </div>
        </div>
      </div>
      <div className={styles.postsContainer}>
        <div className={styles.post}>
          <img
            src="https://i.pinimg.com/564x/24/10/c5/2410c594b2e391baa9e63674dd535f22.jpg"
            alt="Post 1"
          />
        </div>
        <div className={styles.post}>
          <img
            src="https://i.pinimg.com/564x/57/ff/58/57ff58218b2b034678d06a5aaa773702.jpg"
            alt="Post 2"
          />
        </div>
        <div className={styles.post}>
          <img
            src="https://i.pinimg.com/564x/f0/cc/4f/f0cc4fed29acf129a6f45e21d326e8c5.jpg"
            alt="Post 3"
          />
        </div>
        <div className={styles.post}>
          <img
            src="https://i.pinimg.com/564x/3b/09/53/3b0953619a117227dceb87c651bc0dde.jpg"
            alt="Post 4"
          />
        </div>
        <div className={styles.post}>
          <img
            src="https://i.pinimg.com/564x/d2/62/28/d26228dc665d0558f1c939e4bd474566.jpg"
            alt="Post 5"
          />
        </div>
        <div className={styles.post}>
          <img
            src="https://i.pinimg.com/564x/5f/06/99/5f0699ccb77fa065176e688b7734e5c8.jpg"
            alt="Post 6"
          />
        </div>
        <div className={styles.post}>
          <img
            src="https://i.pinimg.com/564x/0c/6a/76/0c6a76df3a86e6a1c1b039c8d225304f.jpg"
            alt="Post 7"
          />
        </div>
        <div className={styles.post}>
          <img
            src="https://i.pinimg.com/564x/9f/aa/f2/9faaf2ae53d4609410d45e9eb659b586.jpg"
            alt="Post 8"
          />
        </div>
        <div className={styles.post}>
          <img
            src="https://i.pinimg.com/564x/53/73/a1/5373a114f7608615fb5ee3c38ed3624c.jpg"
            alt="Post 9"
          />
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
              <i className="fab fa-facebook-f" />
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
    </div>
  );
};
