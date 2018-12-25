class CelestialBody {
    constructor(size, distance, speed, angle) {
        this.size = size; /** The diameter of this Body in pixels */
        this.x; /** Set by "update" Method - The X Coord in the graphic */
        this.y; /** Set by "update" Method - The Y Coord in the graphic */
        this.orbits = null; /** The CelestialBody this revolves around */
        this.distance = distance; /** Distance to "this.orbits" */
        this.angle = angle; /** Angle to "this.orbits" */


        this.speed = speed; /** Speed of this Body */
        // if (Math.random() > .5) {
        //     this.speed *= -1;
        // }

        this.isOrbitedBy = []; /** The CelestialBodies orbiting this */

        //this.color = color(random(255), random(255), random(255)); /** Temporary for use in P5 */
        this.color = color(255, 255, 255);
        this.sprite = null;
        this.doDrawOutlines = true;
    }

    /**
     * Add a Body to revolve around this Body
     * @param {CelestialBody} body The body to add to this gravitational zone. Also sets body.orbits
     */
    addBody(body) {
        this.isOrbitedBy.push(body);
        body.orbits = this;
    }

    update() {
        if (this.orbits != null) {
            this.x = this.orbits.x + this.distance * cos(this.angle);
            this.y = this.orbits.y + this.distance * sin(this.angle);
        }

        for (let body of this.isOrbitedBy) {
            body.update();
        }

        this.angle += this.speed;
    }

    draw() {
        /** Draw self */
        if (this.sprite == null) {
            fill(this.color);
            stroke(0);
            ellipse(this.x, this.y, this.size / 2);
        } else {
            image(this.sprite, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        }

        /** Draw things orbiting this */
        if (this.doDrawOutlines) {
            this.drawOutlines();
        }
        for (let body of this.isOrbitedBy) {
            body.draw();
        }
    }

    drawOutlines() {
        if (this.orbits) {
            push();
            noFill();
            stroke(red(this.color), green(this.color), blue(this.color), 20);
            ellipse(this.orbits.x, this.orbits.y, this.distance * 2);
            line(this.x, this.y, this.orbits.x, this.orbits.y);
            pop();
        }
    }
}