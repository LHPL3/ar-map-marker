import './App.css';

function App() {
  return (
    <div className="App">
      <a-scene
        vr-mode-ui="enabled: false"
        embedded
        arjs="sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false;"
      >
        <a-camera gps-camera rotation-reader></a-camera>

        <a-entity
          gltf-model="./assets/magnemite/scene.gltf"
          rotation="0 180 0"
          scale="0.50 0.50 0.50"
          gps-entity-place="longitude: 1.231280; latitude: 52.675541;"
          animation-mixer
        />
      </a-scene>
    </div>
  );
}

export default App;
