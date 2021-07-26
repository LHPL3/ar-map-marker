import React from 'react';
import { Entity, Scene } from 'aframe-react';
import ReactDOM from 'react-dom';

const Marker = () => {
  const success = (position) => {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  };

  navigator.geolocation.getCurrentPosition(success);

  return (
    <Scene>
      <Entity
        geometry={{ primitive: 'box' }}
        material={{ color: 'red' }}
        position={{ x: 0, y: 0, z: -5 }}
      />
      <Entity particle-system={{ preset: 'snow' }} />
      <Entity light={{ type: 'point' }} />
      <Entity gltf-model={{ src: 'virtualcity.gltf' }} />
      <Entity text={{ value: 'Hello, WebVR!' }} />
    </Scene>
  );
};

export default Marker;
