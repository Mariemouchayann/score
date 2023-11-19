import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import DiseaseCard from "../components/DiseaseCard";
import { IQuestion } from "../components/Question";
import { ISpeciality } from "./Specialities";
import { specialtiesData } from "../constants/Specialities";

export interface IDisease {
  id?: number;
  name: string;
  questions: Array<IQuestion>;
}

export interface IDiseaseObject {
  selectedSpeciality: ISpeciality;
}

interface DiseaseProps {
  selectedSpeciality: ISpeciality | null;
  
}

const Disease: React.FC<DiseaseProps> = (props: DiseaseProps) => {
  const params = useParams();
  const nav = useNavigate();
  const location = useLocation();
  const [selectedDiseaseId, setSelectedDiseaseId] = useState<number | null>(null);
  const [diseases, setDiseases] = useState<Array<IDisease>>([]);
 
  useEffect(() => {
    const selectedSpeciality = localStorage.getItem("selectedSpeciality");
    const diseases = specialtiesData.filter((speciality: ISpeciality, index: number) => speciality.name === selectedSpeciality)[0]?.diseases;
    setDiseases(diseases);
  }, []);

  useEffect(() => {
    if (selectedDiseaseId !== null) {
      localStorage.setItem("selectedDisease", selectedDiseaseId.toString());
    }
  }, [selectedDiseaseId]);
    return (
    <div className="max-w-[80%] w-[80%] flex flex-wrap gap-9 mx-auto mt-8">
      {diseases?.map((disease: IDisease, index: number) => (
        <DiseaseCard key={index} disease={{ ...disease, id: index }} onClick={() => setSelectedDiseaseId(index)} />
      ))}
      <Link to={`/score`} className="bg-[#1BA7C1] px-[100px] py-2 rounded-full mt-8 text-white mx-auto">Continuer</Link>
    </div>
  );
};
export default Disease;






