/* This script initializes the game
 * Setting up a basic scene, and a camera
 */

/* Namespaces */
var Game = Game || {};

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
Game.renderer = new THREE.WebGLRenderer();
Game.renderer.setSize(SCENE_SETTINGS.WIDTH, SCENE_SETTINGS.HEIGHT);

/* Camera + configuration */
Game.camera = new THREE.PerspectiveCamera(
  CAMERA_SETTINGS.VIEW_ANGLE,
  CAMERA_SETTINGS.ASPECT,
  CAMERA_SETTINGS.NEAR,
  CAMERA_SETTINGS.FAR);

/* Camera position */
Game.camera.position.z = 3;
Game.camera.position.y = 2.5;

/* Camera rotation */
//camera.rotation.x = -45 * Math.PI / 180;

/* Scene & Camera attaching */
Game.scene = new THREE.Scene();

/* Helpers and debug stuff */
Game.grid = new THREE.GridHelper( 500, 0.5 );
Game.scene.add(Game.grid);

Game.selectionAxis = new THREE.AxisHelper( 100 );
Game.scene.add(Game.selectionAxis);

Game.intersectionPlane = new THREE.Mesh( new THREE.PlaneGeometry( 5000, 5000 ) );
Game.scene.add( Game.intersectionPlane );

/* Attach the render-supplied DOM element */
CONTAINER.appendChild(Game.renderer.domElement);

/* ----- ADDING MODELS ------ */

/* --- Add custom models --- */
Game.scene.add(barrel = new Game.models.Barrel());
Game.scene.add(crate = new Game.models.Crate());

/* This camera is now a child of the barrel and will always look at it, and spin around with it */
barrel.add(Game.camera);

crate.position.x = 1;

/* --- Lights please! --- */

// create a point light
Game.pointLight =
  new THREE.PointLight(0xFFFFFF);

// set its position
Game.pointLight.position.x = 10;
Game.pointLight.position.y = 50;
Game.pointLight.position.z = 130;

// add to the scene
Game.scene.add(Game.pointLight);

var i = 0;

/* Render loop */
function render() {
  requestAnimationFrame(render);

  Game.camera.lookAt(barrel.position);

  /* Spin me 'round' */
  crate.rotation.y += 0.04;

  Game.renderer.render(Game.scene, Game.camera);
}
/* enable debugging */
THREE.utils.enableDebug(Game.scene);
render();