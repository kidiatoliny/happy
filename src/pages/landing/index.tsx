import React from 'react';

import {  Container, ContentWrapper, Icon, Location, Logo, Main, SubTitle, Title} from './styles';
import logo from './../../assets/Logo.svg'
import {FiArrowRight} from 'react-icons/fi'
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
        <Icon href="#">
          <FiArrowRight size={26} color='rgba(0,0,0,0.6)'/>
        </Icon>

       </ContentWrapper>


     </Container>
   );
 }

 export default Landing;