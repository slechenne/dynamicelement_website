

var clock = new THREE.Clock();
var mixer;

function init_blender() {

  renderer1 = new THREE.WebGLRenderer({alpha: true, antialias: true});
  renderer1.setPixelRatio( window.devicePixelRatio );
  renderer1.setSize(window.innerWidth,window.innerHeight);
  renderer1.setClearColor( 0x000000, 0 );
  document.querySelector('#hand_schild').appendChild( renderer1.domElement );

  renderer2 = new THREE.WebGLRenderer({alpha: true});
  renderer2.setPixelRatio( window.devicePixelRatio );
  renderer2.setSize( window.innerWidth, window.innerHeight);
  renderer2.setClearColor( 0x000000, 0 );
  document.querySelector('#padlock').appendChild( renderer2.domElement );



  sceneL = new THREE.Scene();
  sceneR = new THREE.Scene();

  in_camera();
  in_light();

  // var controls = new THREE.OrbitControls( camera2, renderer1.domElement);
  // var controls2 = new THREE.OrbitControls( camera, renderer2.domElement);



  let loader = new THREE.GLTFLoader();

  loader.load('blender/hand_schild_bone-anim.gltf', function(gltf1){
    hand_schild = gltf1.scene;
    sceneL.add(hand_schild);

    mixer = new THREE.AnimationMixer( hand_schild );
		mixer.clipAction( gltf1.animations[0]).play();

    animate();
  });

  loader.load('blender/padlock.gltf', function(gltf2){
    padlock = gltf2.scene.children[3];

    sceneR.add(gltf2.scene);
    animate();
  });
}







var angularSpeed = 0.1;
var lastTime = 0;

function animate() {

  var time = (new Date()).getTime();
  var timeDiff = time - lastTime;
  var angularChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;
  padlock.rotation.z += angularChange;
  lastTime = time;


  var delta = clock.getDelta();
	mixer.update( delta );

  renderer1.render(sceneL,camera2);
  renderer2.render(sceneR,camera);

  requestAnimationFrame(function(){
    animate();
  });
}



init_blender();






function in_camera() {

  camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
  camera.rotation.x = 0.0;
  camera.rotation.y = 0.0;
  camera.rotation.z = 0.0;
  camera.position.x = 0;
  camera.position.y = 2.5;
  camera.position.z = 35;

  camera2 = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
  camera2.rotation.x = -0.14271081878701433;
  camera2.rotation.y = 0.4002973461247441;
  camera2.rotation.z = 0.06326391005982086;
  camera2.position.x = 32;
  camera2.position.y = 14;
  camera2.position.z = 29;

}

function in_light(){

  hlightL = new THREE.AmbientLight (0xEAD3C4,50);
  sceneL.add(hlightL);

  hlightR = new THREE.AmbientLight (0x404040,100);
  sceneR.add(hlightR);



  lightL = new THREE.PointLight(0xEAD3C4,70);
  lightL.position.set(14000,6000,300);
  sceneL.add(lightL);

  lightR = new THREE.PointLight(0xffffff,5);
  lightR.position.set(5000,1000,0);
  sceneR.add(lightR);



  light2L = new THREE.PointLight(0xEAD3C4,20);
  light2L.position.set(-5000,3000,5000);
  sceneL.add(light2L);

  light2R = new THREE.PointLight(0xfaffcf,4);
  light2R.position.set(-5000,3000,5000);
  sceneR.add(light2R);

}











//
//
//
//
//
// var camera, scene, renderer1, renderer2;
//
// 			var mesh1, mesh2, mesh3;
// 			var color = new THREE.Color();
//
// 			init();
// 			animate();
//
// 			function init() {
//
// 				camera = new THREE.PerspectiveCamera( 20, window.innerWidth / ( window.innerHeight / 2 ), 1, 10000 );
//
// 				scene = new THREE.Scene();
// 				scene.background = new THREE.Color( 0xffffff );
//
// 				var light = new THREE.DirectionalLight( 0xffffff );
// 				light.position.set( 0, 0, 1 );
// 				scene.add( light );
//
// 				var light = new THREE.DirectionalLight( 0xffff00, 0.75 );
// 				light.position.set( 0, 0, - 1 );
// 				scene.add( light );
//
//
//
//
				// renderer1 = new THREE.WebGLRenderer( { antialias: true } );
				// renderer1.setPixelRatio( window.devicePixelRatio );
				// renderer1.setSize( window.innerWidth, window.innerHeight / 2 );
				// document.body.appendChild( renderer1.domElement );
        //
				// renderer2 = new THREE.WebGLRenderer();
				// renderer2.setPixelRatio( window.devicePixelRatio );
				// renderer2.setSize( window.innerWidth, window.innerHeight / 2 );
				// document.body.appendChild( renderer2.domElement );
//
// 			}
//
// 			function animate() {
//
// 				requestAnimationFrame( animate );
//
// 				renderer1.render( scene, camera );
// 				renderer2.render( scene, camera );
//
// 			}
