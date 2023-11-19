import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IDisease } from "../pages/Diseases";

export interface IResponse {
    title: string,
    value: string
}
export interface IQuestion {
                                                                
    title: string;
    responses: Array<IResponse>
}


interface QuestionProps {
    question: IQuestion
}

const Question = (props: QuestionProps) => {

    const { title, responses } = props.question;

    const nav = useNavigate();
    return (
        <div className="flex flex-col gap-4">
            <span className="text-lg text-[#85A3B4]">{title}</span>

            {responses?.map((response: IResponse, index: number) => (
                
                <div className="flex justify-start items-center gap-4">
                    <input aria-label="" type="radio" name="conscience" value={response.value} id="conscience0" />
                    <label className="text-[#62899F] text-md font-semibold">{response.title}</label>
                </div>
            ))}


        </div>

    );
};

export default Question;
