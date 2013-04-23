/* Models namespace */
var models = models || {};

models.Crate = function() {

  this.WIDTH = 0.6;
  this.HEIGHT = 0.6;
  this.DEPTH = 0.6;

  var crate = new THREE.Mesh(
    new THREE.CubeGeometry(this.WIDTH, this.HEIGHT, this.DEPTH),
    new THREE.MeshLambertMaterial({
      map: THREE.ImageUtils.loadTexture('js/objects/crate.jpg')
    })
  );

  crate.overdraw = true;

  return crate;
};
