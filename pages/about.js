import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>About Me</h1>
        <p>
          What do you think I do? If you said web development, then you guessed right 😂. I also make people fall in love, yeah, fall in love with their web applications. Wait!! you thought I was an expert in match making? Nah, if I was I won't be so lonely to pick up this profession 💀
        </p>
      </main>
      <Footer />
    </>
  );
}
