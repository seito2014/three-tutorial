"use strict";var init=function(){var e={width:window.innerWidth,height:window.innerHeight},t=new THREE.Scene,i=new THREE.PerspectiveCamera(45,e.width/e.height,.1,3e3);i.position.x=0,i.position.y=200,i.position.z=400,i.lookAt(new THREE.Vector3(0,0,0));var o=new THREE.SpotLight(16777215);o.position.set(600,600,600),o.castShadow=!0,o.intensity=2,t.add(o);var n=new THREE.MTLLoader;n.setTexturePath("./assets/obj/city/"),n.setPath("./assets/obj/city/"),n.load("city.mtl",function(e){e.preload();var i=new THREE.OBJLoader;i.setMaterials(e),i.setPath("./assets/obj/city/"),i.load("city.obj",function(e){e.rotation.x=-.3,e.rotation.y=0,e.rotation.z=0,e.position.x=500,e.position.y=250,e.position.z=1e3,t.add(e)})});var a=new THREE.WebGLRenderer;a.setClearColor(new THREE.Color(15658734)),a.setSize(e.width,e.height),a.shadowMap.enabled=!0,a.setPixelRatio(window.devicePixelRatio),document.getElementById("js-WebGL").appendChild(a.domElement);var r=new THREE.TrackballControls(i),s=function d(){r.update(),i.position.y+=.25,i.position.z+=.5,requestAnimationFrame(d),a.render(t,i)};s()};window.onload=init();
//# sourceMappingURL=city-dist.js.map