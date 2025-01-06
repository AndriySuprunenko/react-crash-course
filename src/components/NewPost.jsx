import styles from "./NewPost.module.css";

export default function NewPost() {
  return (
    <form className={styles.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3}></textarea>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required></input>
      </p>
    </form>
  );
}
