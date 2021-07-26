import React from 'react';

const Marker = () => {
  const success = (position) => {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  };

  navigator.geolocation.getCurrentPosition(success);

  return (
    // <a-scene
    //   vr-mode-ui="enabled: false"
    //   embedded
    //   arjs="sourceType: webcam; debugUIEnabled: false;"
    // >
    //   <a-text
    //     value="This content will always face you."
    //     look-at="[gps-camera]"
    //     scale="50 50 50"
    //     gps-entity-place="latitude: 52.675541; longitude: 1.231280;"
    //   ></a-text>
    //   <a-camera gps-camera rotation-reader></a-camera>
    // </a-scene>
    <a-scene
      vr-mode-ui="enabled: false"
      renderer="logarithmicDepthBuffer: true;"
      embedded
      loading-screen="enabled: false;"
      arjs="sourceType: webcam; debugUIEnabled: false;"
    >
      <a-camera gps-camera rotation-reader></a-camera>
      <a-assets>
        <a-asset-item
          id="animated-asset"
          src="assets/asset.gltf"
        ></a-asset-item>
      </a-assets>

      <a-entity
        look-at="[gps-camera]"
        animation-mixer="loop: repeat"
        gltf-model='"#animated-asset"'
        scale="0.08861318584412939 0.08861318584412939 0.08861318584412939"
        gps-entity-place="latitude: 52.675541; longitude: 1.23128;"
      ></a-entity>
    </a-scene>
  );
};

export default Marker;
