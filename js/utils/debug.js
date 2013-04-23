/* Utils namespace */
var utils = utils || {};

utils.enableDebug = function( object ) {

  if ( typeof object === 'undefined' ) {

    for (var i = scene.children.length - 1; i >= 0; i--) {

      object = scene.children[i];

      if ( object instanceof THREE.Mesh ) {
        utils.enableDebug( object );
      }

    }
  } else {
    /* TODO: check if they do not alreay have debug helpers */

    /* Add axis helper */
    object.add(new THREE.AxisHelper());

    /* Add selectionBox */
    var selectionBox = new THREE.BoxHelper();
    selectionBox.material.color.setHex( 0xffff00 );
    selectionBox.material.transparent = true;
    selectionBox.update( object );
    object.add( selectionBox );
  }
};

utils.disableDebug = function( object ) {

  /* TODO: remove all when no object given */

  if ( typeof object === 'undefined' ) {
    for (var i = scene.children.length - 1; i >= 0; i--) {

      object = scene.children[i];

      if ( object instanceof THREE.Mesh ) {
        utils.disableDebug( object );
      }
    }
  } else {

    for ( var i = object.children.length - 1; i >= 0; i-- ) {
      if ( object.children[i] instanceof THREE.BoxHelper || object.children[i] instanceof THREE.AxisHelper ) {
        object.remove( object.children[i] );
      }
    }

  }
};