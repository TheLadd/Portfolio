var count = 0;

function countUp() {
    count += 1;
    if (count > 2) {
        count = 2;
    }
}

function countDown() {
    count -= 1;
    if (count < 0) {
        count = 0
    }
}

function webCar() {
    if (count == 0) {
        document.getElementById("web").getElementsByTagName("img").setAttribute("src", "images/website-img/climate.PNG");
        return 0;
    } else if (count == 1) {
        document.getElementById("web").getElementsByTagName("img").setAttribute("src", "images/website-img/ethics.PNG");
        return 1;
    } else if (count == 2) {
        document.getElementById("web").getElementsByTagName("img").setAttribute("src", "images/website-img/zen.PNG");
        return 2;
    }
}

