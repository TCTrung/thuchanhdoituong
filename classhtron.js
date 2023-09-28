class Circle {
    x;
    y;
    radius;
    color;
    ctx;

    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color= color;
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius,0,Math.PI*2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    getRadius(radius) {
        return this.radius;
    }
    getArea() {
        return (Math.PI * this.radius * this.radius);

    }

}
let circle = new Circle(200,200,+prompt("Nhap ban kinh"),'yellow');
circle.draw();
circle.getRadius()
circle.getArea()
document.write('Ban kinh la ' + circle.getRadius() + '<br/>')
document.write('Dien tich la ' + circle.getArea())