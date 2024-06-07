import React from "react";
import * as C from "./style"
import ResumeItem from "../resumeitem";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,    
} from "react-icons/fa";

const Resume = ({ income, expense, total}) => {
    return(
        <C.Container>
           <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp}  value={income}/>
           <ResumeItem title="Saidas" Icon={FaRegArrowAltCircleDown} value={expense}/>
           <ResumeItem title="Total" Icon={FaDollarSign} value={total}/>
        </C.Container>
    );
};

export default Resume;