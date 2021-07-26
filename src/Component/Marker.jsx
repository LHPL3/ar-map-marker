import React from 'react';
import { Entity, Scene } from 'aframe-react';

const Marker = () => {
  return (
    <div>
      <a-scene
        vr-mode-ui="enabled: false"
        embedded
        arjs="sourceType: webcam; debugUIEnabled: false;"
      >
        <a-text
          value="PLZ"
          look-at="gps-camera"
          scale="0.5 0.5 0.5"
          gps-entity-place="latitude: 52.675541; longitude: 1.231280;"
        ></a-text>
        <a-camera gps-camera rotation-reader></a-camera>
      </a-scene>
    </div>
  );
};
export default Marker;
