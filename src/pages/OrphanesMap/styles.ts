import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display:flex;
  position:relative;

  a{
    position:absolute;
    right:40px;
    bottom:40px;
    width: 64px;
    height: 64px;
    background:#15c3d6;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:20px;
    transition:background-color 0.2s;
    z-index:1000;
    &:hover{
      background-color:#17d6eb
    }
  }

`;

export const SideBar = styled.aside`
width:440px;
background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
padding:80px;
display:flex;
flex-direction:column;
justify-content:space-between;

`
export const Header = styled.div`
`
export const Logo = styled.img`
`
export const Title = styled.h2`
  font-size:40px;
  font-weight:800;
  line-height:42px;
  margin-top:64px;
`
export const SubTitle = styled.p`
  line-height:28px;
  margin-top:24px;
`
export const Footer = styled.div`
  display:flex;
  flex-direction:column;
  line-height:24px;

  strong{
    font-weight:24px;
  }

`
export const Map = styled.div`
`