import React, { useState } from "react";
import styles from "./Home.module.css";
import Apps from "@material-ui/icons/Apps"
import List from "@material-ui/icons/FormatAlignJustify"


function Home() {
    const [list, setList] = useState(false);

    const handleApp = () => {
        setList(false)
    }

    const handleList = () => {
        setList(true);
    }

    return (
        <div id={styles.home_main_cont}>
            <div className={styles.filter_main_cont}>
                <div className={styles.filter_cont}>
                <input type="date" className={styles.input}/>
                <button className={styles.filter_button}>
                    FILTER
                </button>
                </div>
                <div className={styles.view_cont}>
                    <div>View type:</div>
                    <Apps onClick={handleApp} style={{width: "40px", height: "40px", color: list ? "#000000" : "#2874F0" , border: list ? "1px solid black" : "1px solid #2874F0"}} />
                    <List onClick={handleList} style={{width: "40px", height: "40px", color: !list ? "#000000" : "#2874F0" , border: !list ? "1px solid black" : "1px solid #2874F0"}}></List>
                </div>
            </div>

            <div>
                
            </div>
        </div>
    )
}

export default Home