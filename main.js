function preload() {

}
function setup() {
    canavs = createCanvas(640, 480);
    canavs.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 250, 150, 220, 200);

    fil(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    }
    function take_snapshot(){
        save('atudent_name.png');
    }