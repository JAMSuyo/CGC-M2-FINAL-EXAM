//setting the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 28;
scene.background = new THREE.Color( 0xd9edf4 );


const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );


//floor plane
const floorGeometry = new THREE.PlaneGeometry( 45, 25 );
const floorMaterial = new THREE.MeshBasicMaterial( {color: 0xa97b5c, side: THREE.DoubleSide} );
const floor = new THREE.Mesh( floorGeometry, floorMaterial );
scene.add( floor );

floor.rotation.x = 80;
floor.position.set( 0, -10, 5 );


// left wall
const leftWallGeometry = new THREE.PlaneGeometry( 45, 40 );
const leftWallMaterial = new THREE.MeshBasicMaterial( {color: 0x94ab55, side: THREE.DoubleSide} );
const leftWall = new THREE.Mesh( leftWallGeometry, leftWallMaterial );
scene.add( leftWall );

leftWall.rotation.y = -90;
leftWall.position.set( -30, 0, 10 );


//right wall
const rightWallGeometry = new THREE.PlaneGeometry( 45, 40 );
const rightWallMaterial = new THREE.MeshBasicMaterial( {color: 0x94ab55, side: THREE.DoubleSide} );
const rightWall = new THREE.Mesh( rightWallGeometry, rightWallMaterial );
scene.add( rightWall );

rightWall.rotation.y = 90;
rightWall.position.set( 30, 0, 10 );


//back wall
const backWallGeometry = new THREE.PlaneGeometry ( 45, 40 );
const backWallMaterial = new THREE.MeshBasicMaterial( {color: 0x7a8c46, side: THREE.DoubleSide} );
const backWall = new THREE.Mesh( backWallGeometry, backWallMaterial );
scene.add( backWall );

backWall.position.z = -5;


//ceiling
const ceilingGeometry = new THREE.PlaneGeometry( 55, 25 );
const ceilingMaterial = new THREE.MeshBasicMaterial( {color: 0xf2ebe4, side: THREE.DoubleSide} );
const ceiling = new THREE.Mesh( ceilingGeometry, ceilingMaterial );
scene.add( ceiling );

ceiling.rotation.x = 80;
ceiling.position.set( 0, 20, 5 );



//bed
const bedGeometry = new THREE.BoxGeometry( 15, 5, 25 );
const bedMaterial = new THREE.MeshBasicMaterial( { color: 0xfcb74f } );
const bed = new THREE.Mesh( bedGeometry, bedMaterial );
scene.add( bed );

bed.position.set( 14, -9, -2 );

const bedframe1Geometry = new THREE.BoxGeometry( 1, 38, 1 );
const bedframe1Material = new THREE.MeshBasicMaterial( {color: 0x8b6e4e} );
const bedframe1 = new THREE.Mesh( bedframe1Geometry, bedframe1Material );
scene.add( bedframe1 );

bedframe1.position.x = 6;
bedframe1.position.y = -5;
bedframe1.position.z = -2.5;


const bedframe2Geometry = new THREE.BoxGeometry( 1, 38, 1 );
const bedframe2Material = new THREE.MeshBasicMaterial( {color: 0x8b6e4e} );
const bedframe2 = new THREE.Mesh( bedframe2Geometry, bedframe2Material );
scene.add( bedframe2 );


bedframe2.position.set( 21.8, -4, -5 );

const bedframe3Geometry = new THREE.BoxGeometry( 1, 38, 1 );
const bedframe3Material = new THREE.MeshBasicMaterial( {color: 0x8b6e4e} );
const bedframe3 = new THREE.Mesh( bedframe3Geometry, bedframe3Material );
scene.add( bedframe3 );


bedframe3.position.set( 6, -5, 12 );

const bedframe4Geometry = new THREE.BoxGeometry( 1, 38, 1 );
const bedframe4Material = new THREE.MeshBasicMaterial( {color: 0x8b6e4e} );
const bedframe4 = new THREE.Mesh( bedframe4Geometry, bedframe4Material );
scene.add( bedframe4 );

bedframe4.position.set( 21.8, -5, 10.5 );


const bedframe5Geometry = new THREE.BoxGeometry( 1, 1, 20 );
const bedframe5Material = new THREE.MeshBasicMaterial( {color: 0x8b6e4e} );
const bedframe5 = new THREE.Mesh( bedframe5Geometry, bedframe5Material );
scene.add( bedframe5 );

bedframe5.position.set( 6, 14, 0 );


const bedframe6Geometry = new THREE.BoxGeometry( 14, 1, 1 );
const bedframe6Material = new THREE.MeshBasicMaterial( {color: 0x8b6e4e} );
const bedframe6 = new THREE.Mesh( bedframe6Geometry, bedframe6Material );
scene.add( bedframe6 );

bedframe6.position.set( 12, 12.5, 0 );


const bedfootGeometry = new THREE.BoxGeometry ( 13.5, 4, 0.5 );
const bedfootMaterial = new THREE.MeshBasicMaterial( {color: 0x8b6e4e} );
const bedfoot = new THREE.Mesh( bedfootGeometry, bedfootMaterial );
scene.add( bedfoot );

bedfoot.position.set( 12, -6, 13.5 );



//blanket
const blanketGeometry = new THREE.BoxGeometry( 15, 5, 6 );
const blanketMaterial = new THREE.MeshBasicMaterial( {color: 0xf9f5f1 });
const blanket = new THREE.Mesh( blanketGeometry, blanketMaterial );
scene.add( blanket );

blanket.position.set( 14, -9, -2 );


//table
const tableGeometry = new THREE.BoxGeometry( 22, 1, 6 );
const tableMaterial = new THREE.MeshBasicMaterial( {color: 0x8b6e4e} );
const table = new THREE.Mesh( tableGeometry, tableMaterial );
scene.add( table );

table.position.set( -10, -4, 0 );

const leg1Geometry = new THREE.BoxGeometry( 0.5, 7, 0.5 );
const leg1Material = new THREE.MeshBasicMaterial( {color: 0x8b6e4e} );
const leg1 = new THREE.Mesh( leg1Geometry, leg1Material );
scene.add( leg1 );

leg1.position.set( -19, -7, 3 );

const leg2Geometry = new THREE.BoxGeometry( 0.9, 7, 0.5 );
const leg2Material = new THREE.MeshBasicMaterial( {color: 0x8b6e4e} );
const leg2 = new THREE.Mesh( leg2Geometry, leg2Material );
scene.add( leg2 );

leg2.position.set( 0, -7, 3 );

const leg3Geometry = new THREE.BoxGeometry( 0.5, 7, 0.5 );
const leg3Material = new THREE.MeshBasicMaterial( {color: 0x8b6e4e} );
const leg3 = new THREE.Mesh( leg3Geometry, leg3Material );
scene.add( leg3 );

leg3.position.set( -19, -6.8, -1 );


//windows
const window1Geometry = new THREE.PlaneGeometry( 13, 15 );
const window1Material = new THREE.MeshBasicMaterial( {color: 0xc8e5f4, side: THREE.DoubleSide });
const window1 = new THREE.Mesh( window1Geometry, window1Material );
scene.add( window1 );

window1.position.set( -10, 6, 0 );

const frame1Geometry = new THREE.BoxGeometry( 1, 16, 1 );
const frame1Material = new THREE.MeshBasicMaterial( {color: 0x6d5345} );
const frame1 = new THREE.Mesh( frame1Geometry, frame1Material );
scene.add( frame1 );

frame1.position.x = -16.5;
frame1.position.y = 6;

const frame2Geometry = new THREE.BoxGeometry( 1, 16, 1 );
const frame2Material = new THREE.MeshBasicMaterial( {color: 0x6d5345} );
const frame2 = new THREE.Mesh( frame2Geometry, frame2Material );
scene.add( frame2 );

frame2.position.x = -3.5;
frame2.position.y = 6;

const frame3Geometry = new THREE.BoxGeometry( 14, 1, 1 );
const frame3Material = new THREE.MeshBasicMaterial( {color: 0x6d5345} );
const frame3 = new THREE.Mesh( frame3Geometry, frame3Material );
scene.add( frame3 );

frame3.position.x = -10;
frame3.position.y = -1.8;

const frame4Geometry = new THREE.BoxGeometry( 14, 1, 1 );
const frame4Material = new THREE.MeshBasicMaterial( {color: 0x6d5345} );
const frame4 = new THREE.Mesh( frame4Geometry, frame4Material );
scene.add( frame4 );

frame4.position.x = -10;
frame4.position.y = 13.8;

const midframe1Geometry = new THREE.BoxGeometry( 0.5, 16, 0.5 );
const midframe1Material = new THREE.MeshBasicMaterial( {color: 0x6d5345} );
const midframe1 = new THREE.Mesh( midframe1Geometry, midframe1Material );
scene.add( midframe1 );

midframe1.position.x = -10;
midframe1.position.y = 6;

const midframe2Geometry = new THREE.BoxGeometry( 14, 0.5, 0.5 );
const midframe2Material = new THREE.MeshBasicMaterial( {color: 0x6d5345} );
const midframe2 = new THREE.Mesh( midframe2Geometry, midframe2Material );
scene.add( midframe2 );

midframe2.position.x = -10;
midframe2.position.y = 6;



//lamp
const lampGeometry = new THREE.CylinderGeometry( 2, 3, 4, 8 ); 
const lampMaterial = new THREE.MeshBasicMaterial( {color: 0xf1e19f} ); 
const lamp = new THREE.Mesh( lampGeometry, lampMaterial ); 
scene.add( lamp );

lamp.position.set( 3, 0, -2 );

const lampStandGeometry = new THREE.CylinderGeometry( 0.3, 0.3, 15, 8 );
const lampStandMaterial = new THREE.MeshBasicMaterial( {color: 0x7c6654} );
const lampStand = new THREE.Mesh( lampStandGeometry, lampStandMaterial );
scene.add( lampStand );

lampStand.position.set( 3, -5, -2 );

const lampBaseGeometry = new THREE.CylinderGeometry( 2, 3, 0.5, 32 );
const lampBaseMaterial = new THREE.MeshBasicMaterial( {color: 0x695a4b} );
const lampBase = new THREE.Mesh( lampBaseGeometry, lampBaseMaterial );
scene.add( lampBase );

lampBase.position.set( 3, -10, -1 );



//chair 
const seatGeometry = new THREE.CylinderGeometry( 3, 3, 5, 16 );
const seatMaterial = new THREE.MeshBasicMaterial( {color: 0xfcb74f} );
const seat = new THREE.Mesh( seatGeometry, seatMaterial );
scene.add( seat );

seat.position.set( -9, -10, 5 );

const chairBaseGeometry = new THREE.CylinderGeometry( 3.1, 3.1, 2, 16 );
const chairBaseMaterial = new THREE.MeshBasicMaterial( {color: 0x695a4b} );
const chairBase = new THREE.Mesh( chairBaseGeometry, chairBaseMaterial );
scene.add( chairBase );

chairBase.position.set( -9, -10, 5 );


//shelf1
const shelfGeometry = new THREE.BoxGeometry( 5, 1, 7 );
const shelfMaterial = new THREE.MeshBasicMaterial( {color: 0x8b6e4e} );
const shelf = new THREE.Mesh( shelfGeometry, shelfMaterial );
scene.add( shelf );

shelf.position.set( -20, 4, 10 );

const shelf2Geometry = new THREE.BoxGeometry( 5, 1, 7 );
const shelf2Material = new THREE.MeshBasicMaterial( {color: 0x8b6e4e} );
const shelf2 = new THREE.Mesh( shelf2Geometry, shelf2Material );
scene.add( shelf2 );

shelf2.position.set( -20, 8, 4 );


//toy ball
const ballGeometry = new THREE.SphereGeometry( 1, 32, 32 );
const ballMaterial = new THREE.MeshBasicMaterial( {color: 0x3080cc} );
const ball = new THREE.Mesh( ballGeometry, ballMaterial );
scene.add( ball );

ball.position.set( -4, -2.5, 1 );



//cabinet
const farGeometry = new THREE.BoxGeometry( 4, 9, 0.5 );
const farMaterial = new THREE.MeshBasicMaterial( {color: 0x8b6e4e} );
const far = new THREE.Mesh( farGeometry, farMaterial );
scene.add( far );

far.position.set( -20, -6, 7 );

const top1Geometry = new THREE.BoxGeometry( 4, 0.5, 6 );
const top1Material = new THREE.MeshBasicMaterial( {color: 0x8b6e4e} );
const top1 = new THREE.Mesh( top1Geometry, top1Material );
scene.add( top1 );

top1.position.set( -20, -1.5, 9 );

const midGeometry = new THREE.BoxGeometry( 3, 0.5, 5.5 );
const midMaterial = new THREE.MeshBasicMaterial( {color: 0x665542} );
const mid = new THREE.Mesh( midGeometry, midMaterial );
scene.add( mid );

mid.position.set( -20, -5, 9 );

const nearGeometry = new THREE.BoxGeometry( 4, 8.5, 0.5 );
const nearMaterial = new THREE.MeshBasicMaterial( {color: 0x665542} );
const near = new THREE.Mesh( nearGeometry, nearMaterial );
scene.add( near );

near.position.set( -20, -6, 11.5 );




function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );


}

console.log("rendered")
animate();