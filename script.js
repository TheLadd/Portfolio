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
        document.getElementById("p1").innerHTML = "A teen is in their room, crying. They found an altered image of themselves where, instead of themselves having a head, they have a turkey leg atop their torso, and the caption, “Patsy? More like Fatsy!” ";
        document.getElementById("p2").innerHTML = "Neglecting to be a conscious creator of content could lead to aspects of the poster’s life going awry. Posting inappropriate content, such as images of one drinking alcohol or a line of text that makes fun of someone, can be seen by anyone (even if you post it on a private account!), and anyone includes persons of authority. If, somehow, your boss manages to see something inappropriate that you posted/is related to you, you could easily be fired or demoted, which would lead to a drop in your income. ";
        document.getElementById("p3").innerHTML = "Posting inappropriate content about others isn’t the only thing that can get you in trouble with society.  Posting/sending naked or provocative images of yourself (otherwise known as “nudes”) can lead to major issues. These issues include revenge porn (the act of an ex posting nude photos or porn of their ex as an act of revenge), leaking nudes, and blackmail. All of these can easily ruin somebodies life, especially if they are in a position of authority or leadership.";
        document.getElementById("lonk").href = "writing/";
    } else if (cnt == 1) {
        document.getElementById("write-head").innerHTML = "Ready Player One Essay";
        document.getElementById("write-text").innerHTML = "In 11th grade, one of the books that we read for English was the novel Ready Player One, which seemed strange at the time, because it wasn't a literary classic. After we finished it, we were tasked with determing whether or not a contemporary book such as this could/should become a literary classic, and I argued that it could.";
        document.getElementById("p1").innerHTML = "In the novel Ready Player One, author Ernest Cline not only writes a phenomenal and compelling story, but he also touches on some important topics. These topics, while rather contemporary, should classify this novel as a prime candidate for a literary necessity for schools. The topics, social and ethical, may not seem too applicable to life due to them being exacerbated for dramatic effect, but this hasn’t stopped other works, such as 1984 and it’s unrealistic theme of limiting freedom of speech (or freedom of anything, really).";
        document.getElementById("p2").innerHTML = "Today, climate change has yet to make any major changes to the environment, but, according to NASA and many other scientists, it most definitely will if the human race stays its course. Cline makes this a pivotal plot point in Ready Player One, and he shows us a world that has been ravaged by the possible effects of climate change. One of the main characters, Art3mis, illuminates readers to this fact when she says, “... the world is ruins, entire countries are flooded…” (133). Other lines of dialogue and narration fill us in that the world [in the novel] had entered major famines due to climate change, as well as a debilitating energy crisis (which was caused by fossil fuels becoming too rare to sell commercially, effectively removing them as an energy source).";
        document.getElementById("p3").innerHTML = "In today’s day and age, homophobia, racism, and other forms of judgement play too large a part in society. Aech, one of the main characters in the novel, is assumed to be a “normal” guy for the majority of the story, but is later revealed to not be who he was expected to be (318). Despite Aech being a minority in a variety of ways, none of the characters ever pass judgement on him for this. This concept of judging people based on their character, rather than what they are, is an important moral value that many people have yet to learn.";
        document.getElementById("lonk").href = "writing/RPO_Essay_Ribera_Owen.docx";
    } else if (cnt == 2) {
        document.getElementById("write-head").innerHTML = "Cyberbulying Essay";
        document.getElementById("write-text").innerHTML = "In my 11th grade English class, we went through a unit of digital ethics. At the end of this unit, we were tasked with writing an essay about a major issue within the realm of digital ethics, and I chose cyberbullying because my older sister had a very intense run in with cyberbullying.";
        document.getElementById("p1").innerHTML = "A teen is in their room, crying. They found an altered image of themselves where, instead of themselves having a head, they have a turkey leg atop their torso, and the caption, “Patsy? More like Fatsy!” ";
        document.getElementById("p2").innerHTML = "Neglecting to be a conscious creator of content could lead to aspects of the poster’s life going awry. Posting inappropriate content, such as images of one drinking alcohol or a line of text that makes fun of someone, can be seen by anyone (even if you post it on a private account!), and anyone includes persons of authority. If, somehow, your boss manages to see something inappropriate that you posted/is related to you, you could easily be fired or demoted, which would lead to a drop in your income. ";
        document.getElementById("p3").innerHTML = "Posting inappropriate content about others isn’t the only thing that can get you in trouble with society.  Posting/sending naked or provocative images of yourself (otherwise known as “nudes”) can lead to major issues. These issues include revenge porn (the act of an ex posting nude photos or porn of their ex as an act of revenge), leaking nudes, and blackmail. All of these can easily ruin somebodies life, especially if they are in a position of authority or leadership.";
        document.getElementById("lonk").href = "writing/Cyberbully.docx";
    }
    
}

function heck() {
    return scrollTo(0, 396);
}

function sub() {
    var aler = "Thank you for your message"
    
    if (document.getElementById("fname").value === "") {
        aler = "Please fill in the required fields";
    } else if (document.getElementById("lname").value === "") {
        aler = "Please fill in the required fields";
    } else if (document.getElementById("email").value === "") {
        aler = "Please fill in the required fields";
    } else if (document.getElementById("message").value === "") {
        aler = "Please fill in the required fields";
    } else if (/@/.test(document.getElementById("email").value) === false){
        if (aler === "Thank you for your message") {
            aler = "Please enter a valid email"
        } else {
            aler += "Please enter a valid email";
        }
    }
    return alert(aler)
}