import React, { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Row, Col } from 'antd';


const Input = styled.input`
  width: 616.393px;
  height: 66px;
  padding: 9.429px 18.857px;
  border-radius: 9.429px;
  border: 1.179px solid #1AA5C0;
  background: #FFF;
  color: var(--gray, #8D99AE);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin-top:90px;
  line-height: 20px; /* 111.111% */
  position: fixed; /* Fixez le composant à une position spécifique */
  top: 30px; /* Réglez la position verticale selon vos besoins */
  left: 650px; /* Réglez la position horizontale selon vos besoins */
`;

const Container = styled.div`
  width: 800px;
  height: 60px;
  margin-bottom: 60px;
  margin-top:20px;
`;
const StyledDiv = styled.div`

`

interface SearchInputProps {
  value: string;
  onChange: (term: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  const nav = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    
    <Container>
      <div className="flex items-center mt-22">
        <Input
          type="text"
          placeholder="Tapez le nom du spécialité"
          value={value}
          onChange={handleInputChange}
        />
      </div>
    </Container>
  );
};

export default SearchInput;
