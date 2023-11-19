import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpecialityCard from "../components/SpecialityCard";
import { specialtiesData } from "../constants/Specialities";
import { IDisease } from "./Diseases";
import styled from 'styled-components';
import Header from "../layout/Header";
import { Pagination } from "antd";
import SearchInput from "../components/SearchInput";

const Div = styled.div`
  margin-top: 10px;
  margin-left: 420px;
  max-width: 60%;
`;

const Container = styled.div`
  overflow: hidden;
  height: 800px;
`;
const SpaceAboveComponent = styled.div`
`;

export interface ISpeciality {
  name: string;
  image: string;
  diseasesLink: string;
  diseases: Array<IDisease>;
}

interface SpecialitiesProps {
  setSelectedSpeciality: React.Dispatch<React.SetStateAction<ISpeciality | null>>;
  selectedSpeciality: any;
}


const Specialities: React.FC<SpecialitiesProps> = (props: SpecialitiesProps) => {
  const nav = useNavigate();
  const { selectedSpeciality, setSelectedSpeciality } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 12;// nbr de page
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentSpecialities = specialtiesData
    .filter((speciality) => speciality.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(startIndex, endIndex);

  useEffect(() => {
    if (selectedSpeciality) {
      localStorage.setItem("selectedSpeciality", selectedSpeciality.name);
      nav(`${selectedSpeciality.diseasesLink}`);
    }
  }, [selectedSpeciality, nav]);
  
  return (
    <>
      <Container>
        <SpaceAboveComponent />
        <SearchInput
          value={searchTerm}
          onChange={(term: string) => setSearchTerm(term)}
        />
        <Div className="max-w-[70%] w-[70%]  flex flex-wrap gap-9" >
          {currentSpecialities.map((speciality: ISpeciality, index: number) => (
            <SpecialityCard
              key={index}
              onClick={(speciality: ISpeciality) => setSelectedSpeciality(speciality)}
              speciality={speciality}
            
            />
          ))}
        </Div>
        <Pagination
          current={currentPage}
          total={specialtiesData.filter((speciality) =>
            speciality.name.toLowerCase().includes(searchTerm.toLowerCase())
            
          ).length}
          pageSize={ITEMS_PER_PAGE}
          onChange={handlePageChange}
          style={{
            marginTop: "25px",
            display: "flex",
            justifyContent: "center",
            background: '#FFFF',
            color: 'var(--gray, #8D99AE)',
            cursor: 'pointer',
            
          }}
        />
      </Container>
    </>
  );
};
export default Specialities;
