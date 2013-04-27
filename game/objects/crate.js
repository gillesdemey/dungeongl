/* Namespaces */
var Game = Game || {};
Game.models = Game.models || {};

Game.models.Crate = function(width, height, depth) {

  /* Private properties with default values */
  width   =   typeof width  === 'undefined' ? 0.6 : width;
  height  =   typeof height === 'undefined' ? 0.6 : height;
  depth   =   typeof depth  === 'undefined' ? 0.6 : depth;

  /* Set the geometry */
  this.setGeometry(
    new THREE.CubeGeometry(width, height, depth)
  );

  /* Set the material */
  this.setMaterial(
    new THREE.MeshLambertMaterial({
      map: THREE.ImageUtils.loadTexture('game/textures/crate.jpg')
    })
  );

  return this;

};

/* Inherit from THREE.Mesh */
Game.models.Crate.prototype = new THREE.Mesh();

/* Jump function for Crate model */
Game.models.Crate.prototype.jump = function() {
  function jump() {
    requestAnimationFrame(jump);
        // speed  // 0 to 1
    i = (i + 0.1) % Math.PI;
                        // height
    crate.position.y =  Math.sin( i ) / 1.5;
  }
  jump();
};