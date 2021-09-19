import React from "react";
import styles from "./NavBar.module.css";
import {Button} from "@material-ui/core"

function NavBar() {
    return (
        <div id={styles.nav_main_cont}>
            <div className={styles.logo}>
                <img src="https://i.imgur.com/fsKSR4z.png" alt="logo" style={{width: "190px", position: "absolute", marginTop: "-30px"}} />
            </div>
            <div className={styles.home}>
                Home
            </div>
            <div>
                <Button variant="contained" size="small" style={{backgroundColor:"#FFFFFF", fontWeight: "700", color: "#000000", marginLeft: "320px", marginRight: "25px", marginTop: "11px"}}>Login</Button>
            </div>
            <div>
                <Button  variant="contained" color="white" size="small" style={{backgroundColor:"#FFFFFF", fontWeight: "700", color: "#000000", marginTop: "11px"}}>Sign-Up</Button>
            </div>
        </div>
    )
}

export default NavBar;