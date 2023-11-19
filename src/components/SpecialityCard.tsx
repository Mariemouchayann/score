import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ISpeciality } from "../pages/Specialities";

interface SpecialityCardProps {
  speciality: ISpeciality;
  onClick: (speciality: ISpeciality) => void;
}
const Card = styled.div`
  height: 172px;
  width: 230px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e2e8f0;
  flex-direction: column;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
`;

const SpecialityCard: React.FC<SpecialityCardProps> = ({ speciality, onClick }) => {
  const nav = useNavigate();

  return (
    <>
    <Card onClick={() => onClick(speciality)}>
      <img src={speciality.image} alt="" />
      <span style={{ color: "#3BB1BE" }}>{speciality.name}</span>
      </Card>
    </>
  );
};

export default SpecialityCard;
