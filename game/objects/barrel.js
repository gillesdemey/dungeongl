/* Models namespace */
var models = models || {};

// Barrel
models.Barrel = function() {

  this.SECTION = 0.4;
  this.HEIGHT = 1;
  this.HITPOINTS = 100;

  var barrel = new THREE.Mesh(
    // API: THREE.CylinderGeometry(bottomRadius, topRadius, height, segmentsRadius, segmentsHeight)
    new THREE.CylinderGeometry(this.SECTION, this.SECTION, this.HEIGHT, 64, 64),
    new THREE.MeshLambertMaterial({
      map: THREE.ImageUtils.loadTexture('game/textures/barrel.jpg')
    })
  );

  barrel.overdraw = false;

  /* Breaking the barrel */
  barrel.destroy = function() {
    this.material.map = THREE.ImageUtils.loadTexture('game/textures/crate.jpg');
    console.log("You broke the barrel!");
  };

  return barrel;
};