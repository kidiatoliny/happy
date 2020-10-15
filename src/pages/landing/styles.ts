import styled from 'styled-components';
import bg from '../../assets/landing.svg'
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const Logo = styled.img`

`
export const ContentWrapper = styled.div`
  width:100%;
  max-width:1100px;
  height:100%;
  max-height:680px;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:space-between;
  position:relative;
  background:url(${bg})
    no-repeat
    80%
    center;

    a{
            position:absolute;
            right:0;
            bottom:0 ;
            width:80px;
            height:80px;
            background:#ffd666;
            border-radius:30px;
            display:flex;
            justify-content:center;
            align-items:center;
            transition: background-color 0.2s;
            &:hover{
              background:#96feff
            }
    }

`
export const Main = styled.div`
   max-width:350px;
`
export const Title = styled.h1`
    font-size:76px;
    font-weight:900;
    line-height:70px;
`
export const SubTitle= styled.p`
    margin-top:40px;
    font-size:24 px;
    font-weight:900;
    line-height:34px;
`

export const Location = styled.div`
position:absolute;
right:0;
top:0;
line-height:34px;
font-size:24 px;
display:flex;
text-align:right;
flex-direction:column;
strong{
  font-weight:800;
}

`
