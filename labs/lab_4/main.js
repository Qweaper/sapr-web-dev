import * as THREE from "https://unpkg.com/three/build/three.module.js";
import { default as Stats } from "https://cdnjs.cloudflare.com/ajax/libs/stats.js/r17/Stats.min.js";


document.forms[0].addEventListener('change', (e) => {
  tetrahed.material.color.set(e.target.value);
  myMesh.material.color.set(e.target.value)
})
const spotLightCheker = document.getElementById('spot-light');
const directLightCheker = document.getElementById('direct-light');

directLightCheker.addEventListener('click', (e) => 
{
  if (spotLight.power > 1) {spotLight.power = 0;}
  else{spotLight.power = 5;}
})

spotLightCheker.addEventListener('click', (e) => 
{
  if (light.power > 1) {light.power = 0;}
  else{light.power = 5;}
})

const clock = new THREE.Clock(); // Создаём таймер
let scene = new THREE.Scene();  // создаём сцену

// const stats = Stats(); // Статистика фпс
// document.body.appendChild(stats.dom);

let edgeLen = 1;
let myMeshVert_arr = [0, 0, 0, 0, 0, edgeLen, (Math.sqrt(3)*edgeLen/2), 0, edgeLen/2, (Math.sqrt(3)*edgeLen/6), edgeLen, edgeLen/2];
let myMeshIndices = [0, 1, 2, 0, 1, 3, 1, 2, 3, 0, 2, 3];
let custom_geom = new THREE.BufferGeometry();
custom_geom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(myMeshVert_arr), 3));
custom_geom.setIndex(myMeshIndices);
custom_geom.computeVertexNormals();
let material2 = new THREE.MeshPhongMaterial({ color: 'pink', side: THREE.DoubleSide });
let myMesh = new THREE.Mesh(custom_geom, material2);
myMesh.position.set(-1, 0.5, 1);
myMesh.castShadow = true;
myMesh.receiveShadow = true;
scene.add(myMesh);


let vertices = [0, 0, 0, 10, 0, 0, 10, 0, 10, 0, 0, 10]; // точки для базовой плоскости

let indices = [2, 1, 0, 0, 3, 2]; // порядок соединения точек

let cameraTarget = new THREE.Vector3(0, 0.4, 0); // создание направленной по вектору камеры

let geometry = new THREE.BufferGeometry();  //  рендеринг ФИГУР

geometry.setAttribute(
  "position",
  new THREE.BufferAttribute(new Float32Array(vertices), 3) 
);
geometry.setIndex(indices);        
geometry.computeVertexNormals();

let material = new THREE.MeshPhongMaterial({ color: 0xaaaaaa }); // создание материала

let mesh = new THREE.Mesh(geometry, material); // объект фигуры
mesh.position.set(-5, 0, -5);
mesh.receiveShadow = true

const spotLight = new THREE.SpotLight("#ffffff"); // создание источника света с белым цветом
spotLight.position.set(2, 2, 2); // создание позиции
spotLight.castShadow = true; // откидывание тени
spotLight.intensity = 1;     // яркость
spotLight.shadow.camera.near = 0.1;
spotLight.shadow.camera.far = 50;
spotLight.shadow.mapSize.width = 2048;
spotLight.shadow.mapSize.height = 2048;
// spotLight.shadow.bias = -0.01;
spotLight.penumbra = 0.5;
spotLight.target.position.set(0, 0, 0);

const spotLightHelper = new THREE.SpotLightHelper(spotLight);  // показывает границы элеметнов света
scene.add(spotLight);
scene.add(spotLight.target);
scene.add(spotLightHelper);
scene.add(mesh);

const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.PointLight(color, intensity);
light.castShadow = true;
light.power = 1;
light.near = 0.1;
light.far = 50;
light.decay = 2;
light.distance = Infinity;
light.position.y = 10;
scene.add(light);

const tetrahedGeometry = new THREE.TetrahedronGeometry(0.7);                      //  создание объекта
const tetrahedMaterial = new THREE.MeshPhongMaterial({ color: 0xffff00 });
const tetrahed = new THREE.Mesh(tetrahedGeometry, tetrahedMaterial);
tetrahed.position.y = 0.8;
tetrahed.castShadow = true; 
tetrahed.receiveShadow = true;

let verticalPlaneGeometry = new THREE.PlaneGeometry(8, 5);
let verticalPlaneMatirial = new THREE.MeshBasicMaterial( {color: 0xaaaaaa, side: THREE.DoubleSide} );
let verticalPlane = new THREE.Mesh(verticalPlaneGeometry, verticalPlaneMatirial);

let verticalPlaneGeometry2 = new THREE.PlaneGeometry(3, 5);
let verticalPlaneMatirial2 = new THREE.MeshBasicMaterial( {color: 0x00aaaa, side: THREE.DoubleSide} );
let verticalPlane2 = new THREE.Mesh(verticalPlaneGeometry2, verticalPlaneMatirial2);

// let rot = 1;
// tetrahed.rotation.x = -rot;
// tetrahed.rotation.z = rot;

verticalPlane.position.x = 0;
verticalPlane.position.y = 1;
verticalPlane.position.z = -3;
// verticalPlane.castShadow = true;
verticalPlane.receiveShadow = true;

verticalPlane2.position.x = -3;
verticalPlane2.position.y = 2;
verticalPlane2.position.z = 0;
verticalPlane2.rotation.y = 4.5;
// verticalPlane2.castShadow = true;
verticalPlane2.receiveShadow = true;

scene.add(verticalPlane);
scene.add(verticalPlane2)
scene.add(tetrahed);

let camera = new THREE.PerspectiveCamera(  //  создание непосредственно камеры
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 1, 5);  // установка камеры на позицию
// camera.position.z = 5;
// camera.position.y = 1;

let renderer = new THREE.WebGLRenderer({ antialias: true });       // рендер сцены
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;


function animate() {   //  анимация сцены
  requestAnimationFrame(animate);

  //stats.update();
  spotLightHelper.update();

  const elapsedTime = clock.getElapsedTime();

//   camera.position.x = Math.cos(elapsedTime * 0.5) * 2;
//   camera.position.z = Math.sin(elapsedTime * 0.5) * 2;
  camera.lookAt(cameraTarget);

  renderer.render(scene, camera);
}

animate();
