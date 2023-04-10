export class Box {
    x;
    y;
    sizeX;
    sizeY;
    speed = {
        x: 0,
        y: 0,
    };
    maxSpeed;
    r = 0;
    g = 0;
    b = 0;
    i = 0;
    constructor(x, y, sizeX, sizeY, maxSpeed) {
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.maxSpeed = maxSpeed;
    }
    beforeUpdate(ctx) {

        this.r++;
        this.g++;
        this.b++;

        if (this.b == 255) {
            this.b = Math.floor(Math.random() * 256);
        }

        if (this.r == 255) {
            this.r = Math.floor(Math.random() * 256);
        }
        if (this.g == 255) {
            this.g = Math.floor(Math.random() * 256);
        }
        let j = Math.floor(Math.random() * 4);

        if (j == 0) {
            this.y += 6;
        } else if (j == 1) {
            this.x += 6;
        } else if (j == 2) {
            this.y -= 6;
        } else if (j == 3) {
            this.x -= 6;
        }

        let siz = Math.floor(Math.random() * 4);
        if (siz == 0) {
            this.sizeX--;
        } else if (siz == 1) {
            this.sizeX++;
        } else if (siz == 2) {
            this.sizeY++;
        } else if (siz == 3) {
            this.sizeY--;
        }
        if (this.sizeX == 0 || this.sizeY == 0) {
            this.sizeX == 100;
            this.sizeY == 100;
        }
        //console.log(ctx.canvas['width'])
        let width = ctx.canvas['width'];
        let height = ctx.canvas['height'];

        if (this.x <= 0 || this.x >= width || this.y <= 0 || this.y >= height) {
            this.x = width / 2
            this.y = height / 2
        }

    }
    update(delta) {
        this.x += (this.maxSpeed / 1000) * delta;
    }
    draw(ctx) {

        console.log(this.r)
        ctx.fillStyle = `rgb(${this.r}, ${this.g}, ${this.b})`;
        ctx.fillRect(
            Math.floor(this.x),
            Math.floor(this.y),
            Math.floor(this.sizeX),
            Math.floor(this.sizeY)
        );

        ctx.rotate((this.i * Math.PI) / 180);
        this.i++
    }
}