import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import styles from "./PerticularCar.module.css"

function PerticularCar() {
    const history = useHistory();

    const handleBack = () => {
        history.push("/")
    }

    const {perticular_data} = useSelector((state) => state.cardata)
    return (
        <div>
            <div className={styles.header}>
                CRASH CAR FULL DETAILS
            </div>
            <div className={styles.details_cont}>
                <div className={styles.flex_box}>
                    <div>
                        Date
                    </div>
                    <div>
                        {perticular_data[0]?.crash_date.trim().split("T")[0]}
                    </div>
                </div>
                <div className={styles.flex_box}>
                    <div>
                        Time
                    </div>
                    <div>
                        {perticular_data[0]?.crash_time}
                    </div>
                </div>
                <div className={styles.flex_box}>
                    <div>
                        Street name
                    </div>
                    <div>
                        {perticular_data[0]?.on_street_name}
                    </div>
                </div>
                <div className={styles.flex_box}>
                    <div>
                        No. of persons injured
                    </div>
                    <div>
                        {perticular_data[0]?.number_of_persons_injured}
                    </div>
                </div>
                <div className={styles.flex_box}>
                    <div>
                        No. of persons killed
                    </div>
                    <div>
                        {perticular_data[0]?.number_of_persons_killed}
                    </div>
                </div>
                <div className={styles.flex_box}>
                    <div>
                        No. of pedestrians injured
                    </div>
                    <div>
                        {perticular_data[0]?.number_of_pedestrians_injured}
                    </div>
                </div>
                <div className={styles.flex_box}>
                    <div>
                        No. of pedestrians killed
                    </div>
                    <div>
                        {perticular_data[0]?.number_of_pedestrians_killed}
                    </div>
                </div>
                <div className={styles.flex_box}>
                    <div>
                        No. of cyclist injured
                    </div>
                    <div>
                        {perticular_data[0]?.number_of_cyclist_injured}
                    </div>
                </div>
                <div className={styles.flex_box}>
                    <div>
                        No. of cyclist killed
                    </div>
                    <div>
                        {perticular_data[0]?.number_of_cyclist_killed}
                    </div>
                </div>
                <div className={styles.flex_box}>
                    <div>
                        No. of motorist injured
                    </div>
                    <div>
                        {perticular_data[0]?.number_of_motorist_injured}
                    </div>
                </div>
                <div className={styles.flex_box}>
                    <div>
                        No. of motorist killed
                    </div>
                    <div>
                        {perticular_data[0]?.number_of_motorist_killed}
                    </div>
                </div>
                <div className={styles.flex_box}>
                    <div>
                        Contributing factor vehicle 1
                    </div>
                    <div>
                        {perticular_data[0]?.contributing_factor_vehicle_1}
                    </div>
                </div>
                <div className={styles.flex_box}>
                    <div>
                        Contributing factor vehicle 2
                    </div>
                    <div>
                        {perticular_data[0]?.contributing_factor_vehicle_2}
                    </div>
                </div>
                <div className={styles.flex_box}>
                    <div>
                        Collision Id
                    </div>
                    <div>
                        {perticular_data[0]?.collision_id}
                    </div>
                </div>
                <div className={styles.flex_box}>
                    <div>
                        Vehicle type code 1
                    </div>
                    <div>
                        {perticular_data[0]?.vehicle_type_code1}
                    </div>
                </div>
                <div className={styles.flex_box}>
                    <div>
                        Vehicle type code 2
                    </div>
                    <div>
                        {perticular_data[0]?.vehicle_type_code2 ? perticular_data[0]?.vehicle_type_code2 : "Null" }
                    </div>
                </div>
            </div>
            <div>
                <button onClick={handleBack} style={{backgroundColor: "#FF6D38", border: "none", color: "white", padding: "5px 5px 5px 5px", boxSizing: "border-box", borderRadius: "0.2em", marginTop: "10px"}}>
                    BACK
                </button>
            </div>
        </div>
    )
}

export default PerticularCar;