window.onload = () => {
  const scene = document.querySelector('a-scene');

  return navigator.geolocation.getCurrentPosition(
    function (position) {
      loadPlaces(position.coords).then((places) => {
        places.forEach((place) => {
          const latitude = place.location.lat;
          const longitude = place.location.lng;

          // add place name
          const placeText = document.createElement('a-link');
          placeText.setAttribute(
            'gps-entity-place',
            `latitude: ${latitude}; longitude: ${longitude};`
          );
          placeText.setAttribute('title', place.name);
          placeText.setAttribute('scale', '15 15 15');

          placeText.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'));
          });

          scene.appendChild(placeText);
        });
      });
    },
    (err) => console.error('Error in retrieving position', err),
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 27000
    }
  );
};

function LoadPlaces() {
  return [
    {
      name: 'Pokèmon',
      location: {
        lat: 52.675541,
        lng: 1.23128
      }
    }
  ];
}

const models = [
  {
    url: './assets/magnemite/scene.gltf',
    scale: '0.5 0.5 0.5',
    info: 'Magnemite, Lv. 5, HP 10/10',
    rotation: '0 180 0'
  },
  {
    url: './assets/articuno/scene.gltf',
    scale: '0.2 0.2 0.2',
    rotation: '0 180 0',
    info: 'Articuno, Lv. 80, HP 100/100'
  },
  {
    url: './assets/dragonite/scene.gltf',
    scale: '0.08 0.08 0.08',
    rotation: '0 180 0',
    info: 'Dragonite, Lv. 99, HP 150/150'
  }
];

const modelIndex = 0;

const setModel = function (model, entity) {
  if (model.scale) {
    entity.setAttribute('scale', model.scale);
  }

  if (model.rotation) {
    entity.setAttribute('rotation', model.rotation);
  }

  if (model.position) {
    entity.setAttribute('position', model.position);
  }

  entity.setAttribute('gltf-model', model.url);

  const div = document.querySelector('.instructions');
  div.innerText = model.info;
};

function renderPlaces(places) {
  let scene = document.querySelector('a-scene');

  places.forEach((place) => {
    let latitude = place.location.lat;
    let longitude = place.location.lng;

    let model = document.createElement('a-entity');

    model.setAttribute(
      'gps-entity-place',
      `latitude: ${latitude}; longitude: ${longitude};`
    );

    setModel(models[modelIndex], model);

    model.setAttribute('animation-mixer', '');

    document
      .querySelector('button[data-action="change"]')
      .addEventListener('click', function () {
        const entity = document.querySelector('[gps-entity-place]');
        modelIndex++;
        const newIndex = modelIndex % models.length;
        setModel(models[newIndex], entity);
      });

    scene.appendChild(model);
  });
}
