/* Models namespace */
var models = models || {};

models.Crate = function() {

  this.WIDTH = 0.6;
  this.HEIGHT = 0.6;
  this.DEPTH = 0.6;

  var crate = new THREE.Mesh(
    new THREE.CubeGeometry(this.WIDTH, this.HEIGHT, this.DEPTH),
    new THREE.MeshLambertMaterial({
      map: THREE.ImageUtils.loadTexture('game/textures/crate.jpg')
    })
  );

  crate.overdraw = true;

  crate.jump = function() {
    function render() {
      requestAnimationFrame(render);
          // speed  // 0 to 1
      i = (i + 0.1) % Math.PI;
                          // height
      crate.position.y =  Math.sin( i ) / 1.5;
      renderer.render(scene, camera);
    }
    render();
  };

  return crate;
};
