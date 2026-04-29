const cameraDistance = 5;
function animate(t = 0) {
    const time = t * 0.0002;
    requestAnimationFrame(animate);
    solarSystem.userData.update(time);
    renderer.render(scene, camera);
    if (useAnimmatedCamera) {
        camera.position.x = Math.cos(time * 0.75) * cameraDistance;
        camera.position.y = Math.cos(time * 0.75);
        camera.position.z = Math.sin(time * 0.75) * cameraDistance;
        camera.lookAt(0, 0, 0);
    } else {
        controls.update();
    }
}

animate();


