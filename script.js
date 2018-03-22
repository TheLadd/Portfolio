// For "Websites"

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
        count = 0;
    }
}

function webCar() {
    if (count == 0) {
        document.getElementById("oof").setAttribute("src", "images/website-img/climate.PNG");
        document.getElementById("web-head").innerHTML = "Climate Change";
        document.getElementById("web-text").innerHTML = "This website was my first full length website. I collaborated with a school mate, Avery Seabolt, to design it. The project that was assigned to us was to make a website based off of an endangered species. However, I have a passion for environmental issues, so we decided to go with climate change. <br> This site used mostly HTML5 and CSS3, but it also has a small amount of JavaScript.";
        return 0;
    } else if (count == 1) {
        document.getElementById("oof").setAttribute("src", "images/website-img/ethics.PNG");
        document.getElementById("web-head").innerHTML = "Digital Ethics";
        document.getElementById("web-text").innerHTML = "This website was designed to cover the entirety of digital ethics, so, as you would imagine, there were many pages and many collaboraters. The pages that I worked on were the main page of the site and the main page of the Digital Security portion of the site. <br> This site was made with HTML5, CSS3, and JavaScript.";
        return 1;
    } else if (count == 2) {
        document.getElementById("oof").setAttribute("src", "images/website-img/zen.PNG");
        document.getElementById("web-head").innerHTML = "Zen Garden";
        document.getElementById("web-text").innerHTML = "Zen Garden is a CSS workshop where all of the HTML is already written, and the programmer is tasked with styling it. <br> This project used solely CSS3.</p>";
        return 2;
    }
}

// For "Writing"

var cnt = 0;

function cntUp() {
        cnt += 1;
    if (cnt > 2) {
        cnt = 2;
    }
}

function cntDown() {
    cnt -= 1;
    if (cnt < 0) {
        cnt = 0;
    }
}

function wriCar() {
    if (cnt == 0) {
        document.getElementById("write-head").innerHTML = "Marijuana Legalization Essay";
        document.getElementById("write-text").innerHTML = "I wrote this essay in the time right before the law that allowed marijuana to be used recreationally in California was passed. I was curious as to what the effects of the legalization would be, so I wrote an essay about it.";
    } else if (cnt == 1) {
        document.getElementById("write-head").innerHTML = "Lorem Ipsum";
        document.getElementById("write-text").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro rerum delectus veniam ea, quidem repellat fuga tempore perspiciatis nam eius modi. Id eveniet atque expedita impedit, nisi maxime maiores pariatur!";
    } else if (cnt == 2) {
        document.getElementById("write-head").innerHTML = "Lorem Ipsum2";
        document.getElementById("write-text").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro rerum delectus veniam ea, quidem repellat fuga tempore perspiciatis nam eius modi. Id eveniet atque expedita impedit, nisi maxime maiores pariatur!2";
    }
    
}

function heck() {
    console.log("prock");
    return scrollTo(0, 396);
}