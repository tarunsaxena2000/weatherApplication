// MapContainer.js
import React from 'react';
import styled from 'styled-components';

const MapContainerWrapper = styled.div`
  width: 100%;
  height: 50vh;
  background-image: url(${process.env.PUBLIC_URL + '/map.jpg'});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const MapContainer = () => {
  return <MapContainerWrapper />;
};

export default MapContainer;
