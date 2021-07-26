import React from 'react';

const Marker = () => {
  return (
    <a-scene
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false;"
    >
      <a-camera
        gps-camera
        rotation-reader
        simulateLatitude="latitude: 52"
        simulateLongitude="longitude: 1.2"
      ></a-camera>
      <a-box
        material="color: yellow"
        gps-entity-place="latitude: 52; longitude: 1.2"
        rotation="0 180 0"
        scale="0.15 0.15 0.15"
      ></a-box>
    </a-scene>
  );
};

export default Marker;
