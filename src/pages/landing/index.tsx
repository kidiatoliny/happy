import React from 'react';

import {  Container, ContentWrapper,Location, Logo, Main, SubTitle, Title} from './styles';
import logo from './../../assets/Logo.svg'
import {FiArrowRight} from 'react-icons/fi'
import { Link } from 'react-router-dom';
 const Landing: React.FC = () => {
   return (
     <Container>
       <ContentWrapper>
         <Logo src={logo} alt='happy logo'/>

         <Main>
            <Title>Leve Feliciadade para o mundo</Title>
            <SubTitle>
            Visite orfanatos e mude o dia
            de muitas crianças.
            </SubTitle>
         </Main>
          <Location>
            <strong>Mindelo</strong>
            <span>Alto Miramar</span>
        </Location>
        <Link to="/app">
          <FiArrowRight size={26} color='rgba(0,0,0,0.6)'/>
        </Link>

       </ContentWrapper>


     </Container>
   );
 }

 export default Landing;