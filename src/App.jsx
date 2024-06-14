import styles from "./App.module.css";
import { Hero } from "./componets/Hero/Hero";
import Navbar from "./componets/Navbar/Navbar";

export default function App() {
  return (
    <div className={styles.App}>
        <Navbar/>
        <Hero/>

    </div>
  )
}
