import Navbar from "../navPortion/navPortion";
import styles from "./landing-page.module.css";

export default function LandingPage(){
    return(<>
        <div className={styles.landingPage}>
             <Navbar/>
        </div>
    </>)
}