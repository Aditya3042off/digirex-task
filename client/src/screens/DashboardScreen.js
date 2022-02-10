import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const DashboardScreen = () => {
    const dispatch = useDispatch();
    const {userInfo} = useSelector(state => state.userLogin)

    const navigate = useNavigate();

    useEffect(()=>{
        if(!userInfo) {
            navigate("/");
        }
    })

    return <h1>welcome to dashboard</h1>
}

export default DashboardScreen;