import React from 'react';
import { Link } from 'react-router-dom';
import {Map,TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {
  SubTitle,
  Title,Logo,
  Container,
  Footer,
  Header,
  SideBar,
} from './styles';

import { FiPlus } from 'react-icons/fi'

import logo from './../../assets/map-marker.svg'



const OrphanesMap: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <Header>
          <Logo src={logo} alt='map-marker'/>
          <Title>
            Escolha um Orfanato no mapa
          </Title>
          <SubTitle>
            Muitas crianças estão
            esperando a sua visita :)
          </SubTitle>
        </Header>
        <Footer>
          <strong>Mindelo</strong>
          <span>Alto Miramar</span>
        </Footer>
      </SideBar>

        <Map

         center={[16.8879404,-24.9847277]}
         zoom={18}
         style={{ width:'100%', height:'100% '}}
        >

          <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAP_BOX_TOKEN}`}
          />

      </Map>
      <Link to="">
        <FiPlus size={32} color='#fff'/>
      </Link>
    </Container>
  );
}

export default OrphanesMap;