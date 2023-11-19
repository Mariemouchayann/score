import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Question, { IQuestion, IResponse } from "../components/Question";
import { ISpeciality } from "./Specialities";
import { specialtiesData } from "../constants/Specialities";
import { IDisease } from "./Diseases";



interface ScoreProps {
  selectedSpeciality: ISpeciality | null
}

const Score = (props: ScoreProps) => {
  const nav = useNavigate();

  const {selectedSpeciality} = props;

  const response: IResponse = {
    title: "Immobile",
    value: "immobile"
  }
  
  
  const data: Array<IQuestion> = [
    {
      title: "Molicité spontanée ou à la demande ",
      responses: [response]
    }
  ]

  useEffect(()=> {
    const selectedSpeciality = localStorage.getItem("selectedSpeciality");
    const selectedDisease = parseInt(localStorage.getItem("selectedDisease") as string,10);
  
  
   const diseases = specialtiesData.filter((speciality: ISpeciality, index: number) => speciality.name === selectedSpeciality)[0]?.diseases;
   console.log( diseases,selectedDisease)
   const questions = diseases[selectedDisease]?.questions;
    setQuestions(questions);
  }, [])
  const [questions, setQuestions] = useState<Array<IQuestion>>(data)
  return (
    <>
      
      {questions.map((question: IQuestion, index: number) => (
        <Question question={question} />
        
      ))}
      
    </>
  );
};

export default Score;
