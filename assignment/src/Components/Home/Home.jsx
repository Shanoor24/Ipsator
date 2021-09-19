import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Apps from "@material-ui/icons/Apps"
import List from "@material-ui/icons/FormatAlignJustify"
import { useDispatch, useSelector } from "react-redux";
import { getData, filterData, getPerticularDataSuccess } from "../../Redux/CarData/actions";
import {Button} from "@material-ui/core"
import { useHistory } from "react-router";


function Home() {
    const [list, setList] = useState(false);
    const [offset, setOffset ] = useState(0);
    const [date, setDate] = useState("");
    const {data} = useSelector((state) => state.cardata);
    const dispatch = useDispatch();
    const history = useHistory();


    const handleDate = (e) => {
        const {value} = e.target;
        setDate(value)
        // console.log(value);
    }

    const handlePagePrev = () => {
        setOffset((prev) => prev - 1)
    }

    const handlePageNext = () => {
        setOffset((prev) => prev + 1)
    }

    const handleFilter = () => {
        dispatch(filterData(offset, date))
    }

    const handleApp = () => {
        setList(false)
    }

    const handleList = () => {
        setList(true);
    }

    const handleSubmit = (date, time) => {
        const pertculerData = data?.filter((item) => item.crash_date === date && item.crash_time === time)

        dispatch(getPerticularDataSuccess(pertculerData));

        history.push(`Vehicle/${date}/${time}`)
    }

    useEffect(() => {
        dispatch(getData(offset))
    }, [offset]);

    return (
        <div id={styles.home_main_cont}>
            <div className={styles.filter_main_cont}>
                <div className={styles.filter_cont}>
                <input type="date" className={styles.input} onChange={handleDate}/>
                <button className={styles.filter_button} onClick={handleFilter}>
                    FILTER
                </button>
                </div>
                <div className={styles.view_cont}>
                    <div>View type:</div>
                    <Apps onClick={handleApp} style={{width: "40px", height: "40px", color: list ? "#000000" : "#2874F0" , border: list ? "1px solid black" : "1px solid #2874F0"}} />
                    <List onClick={handleList} style={{width: "40px", height: "40px", color: !list ? "#000000" : "#2874F0" , border: !list ? "1px solid black" : "1px solid #2874F0"}}></List>
                </div>
            </div>
            { list ? <>
                <div className={styles.list_header}>
                    <div style={{width: "100px"}}>SL No.</div>
                    <div style={{width: "150px"}}>DATE(YYYY-MM-DD)</div>
                    <div style={{width: "100px"}}>TIME</div>
                    <div style={{width: "230px"}}>VEHICLE MODEL</div>
                    <div style={{width: "230px"}}>CRASHED WITH</div>
                    <div style={{width: "150px"}}>DETAILS</div>
                </div>

                {
                    data.map((item, index) => <div className={styles.item}>
                        <div style={{width: "100px", padding: "5px 0px 5px 0px", paddingTop: item.vehicle_type_code1.length > 26 ? "10px" : "5px"}}>{index+1}</div>
                        <div style={{width: "150px", padding: "5px 0px 5px 0px", paddingTop: item.vehicle_type_code1.length > 26 ? "10px" : "5px"}}>{item.crash_date.trim().split("T")[0]}</div>
                        <div style={{width: "100px", padding: "5px 0px 5px 0px", paddingTop: item.vehicle_type_code1.length > 26 ? "10px" : "5px"}}>{item.crash_time}</div>
                        <div style={{width: "230px"}}>{item.vehicle_type_code1}</div>
                        <div style={{width: "230px", padding: "5px 0px 5px 0px", paddingTop: item.vehicle_type_code1.length > 26 ? "10px" : "5px"}}>{item.vehicle_type_code2 ? item.vehicle_type_code2 : "Street Object"}</div>
                        <div style={{width: "150px", padding: "5px 0px 5px 0px", paddingTop: item.vehicle_type_code1.length > 26 ? "8px" : "5px"}}>
                            <button onClick={() => handleSubmit(item.crash_date, item.crash_time)} style={{backgroundColor: "#FF6D38", border: "none", color: "white", padding: "5px 5px 5px 5px", boxSizing: "border-box", borderRadius: "0.2em"}}>See details</button>
                        </div>
                    </div> )
                }
                <div style={{display: "flex", justifyContent: "right", paddingRight: "40px"}}>
                    <Button disabled={offset===0} variant="contained" onClick={handlePagePrev} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', marginLeft:"40px", marginRight:"7px"}}>◄</Button>
                    <div className={styles.page}>{offset + 1}</div>
                    <Button disabled={data.length < 9} onClick={handlePageNext} variant="contained" style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}>►</Button>
                </div>
            </> : <>
                <div className={styles.header}>
                    CRASHED CAR's LIST                    
                </div>
                <div className={styles.list_cont}>
                    {data.map((item, index) => <div>
                        <div className={styles.flex_box}>
                            <div>
                                Date
                            </div>
                            <div>
                                {item.crash_date.trim().split("T")[0]}
                            </div>
                        </div>
                        <div className={styles.flex_box}>
                            <div>
                                Time
                            </div>
                            <div>
                                {item.crash_time}
                            </div>
                        </div>
                        <div className={styles.flex_box}>
                            <div>
                                Vehicle model
                            </div>
                            <div>
                                {item.vehicle_type_code1}
                            </div>
                        </div>
                        <div className={styles.flex_box}>
                            <div>
                                Crashed with
                            </div>
                            <div style={{paddingTop: "10px"}}>
                            {item.vehicle_type_code2 ? item.vehicle_type_code2 : "Street Object"}
                            </div>
                        </div>
                        <div style={{marginTop: "5px"}}>
                            <button onClick={() => handleSubmit(item.crash_date, item.crash_time)} style={{backgroundColor: "#FF6D38", border: "none", color: "white", padding: "5px 5px 5px 5px", boxSizing: "border-box", borderRadius: "0.2em"}}>See Details</button>
                        </div>
                    </div> )}
                </div>
                <div style={{display: "flex", justifyContent: "right", paddingRight: "40px"}}>
                    <Button disabled={offset===0} variant="contained" onClick={handlePagePrev} style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px', marginLeft:"40px", marginRight:"7px"}}>◄</Button>
                    <div className={styles.page}>{offset + 1}</div>
                    <Button disabled={data.length < 9} onClick={handlePageNext} variant="contained" style={{fontFamily: `"M PLUS Rounded 1c", "sans-serif"`, fontWeight:"500", maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}>►</Button>
                </div>
            </>}
        </div>
    )
}

export default Home