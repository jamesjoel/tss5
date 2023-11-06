import React from "react";
import "../../assets/Modal.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalHeader from "./modal-props/ModalHeader";

function Modal({ setOpenModal }) {

    let [indiaCity, setIndiaCity] = useState([]);
    let [indiaState, setIndiaState] = useState([]);

    let State = async()=>{
        let response = await axios.get("http://localhost:8080/api/indiacity/state")
        setIndiaState(response.data)  
    }

    useEffect(()=>{
        State()
    }, [])

    let City = async(event) =>{
        let state = event.target.value;
        let response = await axios.get("http://localhost:8080/api/indiacity/"+state)
        setIndiaCity(response.data)
    }

return (
    <>
        <div className="modalBackground">
        <div className="modalContainer container">
        {modalOpen && <ModalHeader setOpenModal={setModalOpen} />}
        </div>
    </div>
    </>
  );
}

export default Modal;