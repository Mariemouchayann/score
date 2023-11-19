import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ISpeciality } from "../pages/Specialities";
import { Row, Col } from 'antd';

interface HeaderProps {}

const Img = styled.img`
  width: 76px;
  height: 76px;
  flex-shrink: 0;
  color: #1AA5C0;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Ubuntu;
  font-size: 35.013px;
  font-style: normal;
  margin-left: 40px;
  font-weight: 500;
  line-height: 16.561px; /* 47.299% */
`;

const Myscore = styled.span`
  color: #1AA5C0;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Ubuntu;
  font-size: 35.013px;
  font-style: normal;
  font-weight: 500;
  margin-left: 10px;
  line-height: 16.561px; /* 47.299% */
`;

const Header = (props: HeaderProps) => {
  const nav = useNavigate();

  return (
    <Row>
      <header className="h-24 w-full flex justify-start items-start fixed top-0 left-0 bg-white border-b border-gray-300 p-4 z-50">
        <Col span={12} className="flex items-center">
          <Img src="/assets/img/logo.svg" alt="" />
          <Myscore>Myscore IA</Myscore>
        </Col>
        
      </header>
    </Row>
  );
};

export default Header;
