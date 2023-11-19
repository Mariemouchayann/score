import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import { IDisease } from "../pages/Diseases";
interface DiseaseProps {
    disease: IDisease,
    onClick: any
}

const DiseaseCard = (props: DiseaseProps) => {
    
    const { name } = props.disease;
    const nav = useNavigate();
    return (
        <div className="h-[80px] w-[344px] shadow flex justify-center items-center border flex-col gap-2 font-bold rounded-lg hover:bg-[#198097]  text-[#198097] hover:text-white  ">
            <button className="" id={props.disease.id?.toString()} onClick={props.onClick}>{name}</button>
        </div>
    );
};
export default DiseaseCard;
