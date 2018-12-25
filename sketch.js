let origin;

function setup() {
    createCanvas(windowWidth - 4, windowHeight - 4);

    origin = new CelestialBody();
    origin.x = width / 2;
    origin.y = height / 2;
    origin.size = 100;
    origin.color = 0;

    loadImage("assets/sun_shiny.png", function (loadedImage) {
        origin.sprite = loadedImage;
    });

    createSolarSystem();
    //randomUniverse();
}

function draw() {
    background(15, 25, 59);
    stroke(0);
    origin.update();
    origin.draw();
}

function randomUniverse() {
    for (let i = 0; i < 10; i++) {
        /** Generate random planet */
        let size = random(50, 100);
        let distance = random(size, height / 2);
        let speed = random(0, 0.002);

        //50 / 50 change to move in either direction
        if (Math.random() > .5) {
            speed *= -1;
        }
        let angle = random(0, 1000);
        let p = new CelestialBody(size, distance, speed, angle);

        let cl = color(random(255), random(255), random(255));
        p.color = cl;

        let moons = floor(random(0, 4));
        for (let n = 0; n < moons; n++) {
            let ms = random(p.size / 4, p.size / 2);
            let md = random(p.size / 3, ms * 2);
            let msp = p.speed * random(2, 3);

            if (Math.random() > .5) {
                msp *= -1;
            }

            let ma = random(0, 1000);
            let moon = new CelestialBody(ms, md, msp, ma);
            moon.color = cl;

            p.addBody(moon);
        }
        origin.addBody(p);
    }
}

function createSolarSystem() {

    let scaleSize = 10;
    let scaleDistance = height / 2 / 6;
    let scaleSpeed = 2;

    loadImage("assets/mercury.png", function (loadedImage) {
        let planet = new CelestialBody(1 * scaleSize, 0.5 * scaleDistance, scaleSpeed / 88, random(1000));
        planet.sprite = loadedImage;
        origin.addBody(planet);
    });

    loadImage("assets/venus.png", function (loadedImage) {
        let planet = new CelestialBody(2 * scaleSize, 0.8 * scaleDistance, scaleSpeed / 225, random(1000));
        planet.sprite = loadedImage;
        origin.addBody(planet);
    });

    loadImage("assets/earth.png", function (loadedImage) {
        let planet = new CelestialBody(2 * scaleSize, 1 * scaleDistance, scaleSpeed / 365, random(1000));
        planet.sprite = loadedImage;
        origin.addBody(planet);

        loadImage("assets/moon.png", function (loadedImage) {
            let moon = new CelestialBody(planet.size / 3, planet.size * .8, planet.speed * 24, random(1000));
            moon.sprite = loadedImage;
            planet.addBody(moon);
        });


    });

    loadImage("assets/mars.png", function (loadedImage) {
        let planet = new CelestialBody(2 * scaleSize, 1.5 * scaleDistance, scaleSpeed / 687, random(1000));
        planet.sprite = loadedImage;
        origin.addBody(planet);


        loadImage("assets/moon.png", function (loadedImage) {
            for (let i = 0; i < 2; i++) {
                let moon = new CelestialBody(planet.size / 5, planet.size * random(.6, .8), planet.speed * random(20, 30), random(1000));
                moon.sprite = loadedImage;
                planet.addBody(moon);
            }
        });

    });

    loadImage("assets/AsteroidAnimation.png", function (loadedImage) {
        console.log(loadedImage);
        for (let i = 0; i < 600; i++) {
            // 8 x 8 of 128 px images
            let x = floor(random(8));
            let y = floor(random(8));

            let sprite = loadedImage.get(x * 128, y * 128, 128, 128);

            let distance = random(2, 3.5);
            let speed = random(150, 500);

            let asteroid = new CelestialBody(1 * scaleSize, distance * scaleDistance, scaleSpeed / speed, random(1000));
            asteroid.sprite = sprite;
            asteroid.doDrawOutlines = false;
            origin.addBody(asteroid);
        }
    });

    loadImage("assets/jupiter.png", function (loadedImage) {
        let planet = new CelestialBody(4 * scaleSize, 4 * scaleDistance, scaleSpeed / (3 * 365), random(1000));
        planet.sprite = loadedImage;
        origin.addBody(planet);

        loadImage("assets/moon.png", function (loadedImage) {
            for (let i = 0; i < 20; i++) {
                let moon = new CelestialBody(planet.size / 20, planet.size * random(.6, .8), planet.speed * random(20, 30), random(1000));
                moon.sprite = loadedImage;
                planet.addBody(moon);
            }
        });
    });

    loadImage("assets/saturn.png", function (loadedImage) {
        let planet = new CelestialBody(6 * scaleSize, 4.5 * scaleDistance, scaleSpeed / (4 * 365), random(1000));
        planet.sprite = loadedImage;
        origin.addBody(planet);

        loadImage("assets/moon.png", function (loadedImage) {
            for (let i = 0; i < 15; i++) {
                let moon = new CelestialBody(planet.size / random(15, 20), planet.size * random(.6, .8), planet.speed * random(20, 30), random(1000));
                moon.sprite = loadedImage;
                planet.addBody(moon);
            }
        });
    });

    loadImage("assets/uranus.png", function (loadedImage) {
        let planet = new CelestialBody(3 * scaleSize, 5 * scaleDistance, scaleSpeed / (5 * 365), random(1000));
        planet.sprite = loadedImage;
        origin.addBody(planet);

        loadImage("assets/moon.png", function (loadedImage) {
            for (let i = 0; i < 15; i++) {
                let moon = new CelestialBody(planet.size / random(8, 10), planet.size * random(.6, .8), planet.speed * random(20, 30), random(1000));
                moon.sprite = loadedImage;
                planet.addBody(moon);
            }
        });
    });

    loadImage("assets/neptune.png", function (loadedImage) {
        let planet = new CelestialBody(3 * scaleSize, 5.9 * scaleDistance, scaleSpeed / (6 * 365), random(1000));
        planet.sprite = loadedImage;
        origin.addBody(planet);

        loadImage("assets/moon.png", function (loadedImage) {
            for (let i = 0; i < 6; i++) {
                let moon = new CelestialBody(planet.size / random(8, 10), planet.size * random(.6, .8), planet.speed * random(20, 30), random(1000));
                moon.sprite = loadedImage;
                planet.addBody(moon);
            }
        });
    });
}