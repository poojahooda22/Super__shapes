var slider;


var n1 = 0.8;
var n2 = 0.8;
var n3 = 0.8;
var m = 10;
var a = 4;
var b = 4;
var osc = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    // slider = createSlider(0, 10, 5, 1);
}

function superShape(theta) {
    
    //formula

    var part1 = (1/a) * cos(theta * m / 4);
    part1 = abs(part1);
    part1 = pow(part1, n2);

    var part2 = (1/b) * sin(theta * m / 4);
    part2 = abs(part2);
    part2 = pow(part2, n3);

    var part3 = pow(part1 + part2, 1 / n1);
    if(part3 === 0) {
        return 0;
    }

    return (1 / part3);
}

function draw() {

    // m = slider.value();

    m = map(sin(osc), -1, 1, 0, 10);

    osc += 0.02;

    background(0);
    translate(width / 2, height / 2);

    // var a = 200;
    // var b = 100;
    // var n = slider.value();
    noStroke();
    fill(255);

    var radius = 100;
    var total = 500;
    var increment = TWO_PI / total;

    beginShape();

    for(var angle = 0; angle < TWO_PI; angle += increment) {
        var r = superShape(angle);
        var x = radius * r * cos(angle);
        var y = radius * r * sin(angle);

        vertex(x,y);
    }
    endShape(CLOSE);
}
