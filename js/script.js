const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('cv-container').appendChild(renderer.domElement);

        // Create 3D objects and add them to the scene

        const animate = () => {
            requestAnimationFrame(animate);

            // Update object properties for animation

            renderer.render(scene, camera);
        };

        animate();
