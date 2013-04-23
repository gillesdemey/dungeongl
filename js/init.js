/* This script initializes the game
 * Setting up a basic scene, and a camera
 */

/* Scene size */
var SCENE_SETTINGS = {
  WIDTH : 800,
  HEIGHT : 600 };

var CAMERA_SETTINGS = {
  VIEW_ANGLE : 60,
  ASPECT : SCENE_SETTINGS.WIDTH / SCENE_SETTINGS.HEIGHT,
  NEAR : 0.1,
  FAR : 10000 };

/* The game DOM element */
var CONTAINER = document.getElementById("game");

/* Renderer + configuration */
var renderer = new THREE.WebGLRenderer();
renderer.setSize(SCENE_SETTINGS.WIDTH, SCENE_SETTINGS.HEIGHT);

/* Camera + configuration */
var camera = new THREE.PerspectiveCamera(
  CAMERA_SETTINGS.VIEW_ANGLE,
  CAMERA_SETTINGS.ASPECT,
  CAMERA_SETTINGS.NEAR,
  CAMERA_SETTINGS.FAR);

/* Camera position */
camera.position.z = 3;
camera.position.y = 2.5;

/* Camera rotation */
//camera.rotation.x = -45 * Math.PI / 180;

/* Scene & Camera attaching */
var scene = new THREE.Scene();

/* Helpers and debug stuff */
var grid = new THREE.GridHelper( 500, 0.5 );
scene.add(grid);

var selectionAxis = new THREE.AxisHelper( 100 );
scene.add(selectionAxis);

var intersectionPlane = new THREE.Mesh( new THREE.PlaneGeometry( 5000, 5000 ) );
scene.add( intersectionPlane );

/* TODO: tets camera */
//scene.add(camera);

/* Attach the render-supplied DOM element */
CONTAINER.appendChild(renderer.domElement);

/* ----- ADDING MODELS ------ */

/* --- Add custom models --- */
scene.add(barrel = new models.Barrel());
scene.add(crate = new models.Crate());
utils.enableDebug(crate);

/* This camera is now a child of the barrel and will always look at it, and spin around with it */
//barrel.add(camera);

crate.position.x = 1;

/* --- Lights please! --- */

// create a point light
var pointLight =
  new THREE.PointLight(0xFFFFFF);

// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

// add to the scene
scene.add(pointLight);

/* Render loop */
function render() {
  requestAnimationFrame(render);

  camera.lookAt(barrel.position);

  /* Spin me 'round' */
  //barrel.rotation.y -= 0.03;
  crate.rotation.y += 0.04;

  renderer.render(scene, camera);
}
render();