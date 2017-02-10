<<<<<<< HEAD
"use strict";

//Scroll Down to Portfolio section 
$("#portfolio-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio-doc").offset().top
    }, 500);
});

//Scroll Down to Contact section 
$("#contact-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#cta").offset().top
    }, 500);
});


  // Anonymous function with named alias
(function(){

    // Declare an anonymous function with named alias
    var replaceWhoIsOrie = function() {
               console.log("Replace Paragraph description of Orie")
        var whoIsOrie;
        whoIsOrie = document.getElementById("whoIsOrie");
        whoIsOrie.innerHTML = "I’m a passionate Web Design and Developer student currently working through my two year <em>Interactive Web Design and Development </em>program. I am a music enthusiast, an avid coffee lover, and I love solving puzzles. I create to inspire.";
    };
    
    // Call the replaceFirstParagrah function
    replaceWhoIsOrie();
    

    // Declare an anonymous function with named alias
    var replaceWhatOrieDoes = function() {
               console.log("Replace Paragraph of what Orie does")
        var whatOrieDoes;
        whatOrieDoes = document.getElementById("whatOrieDoes");
        whatOrieDoes.innerHTML = "I create, design, and modify web pages and templates. I code from scratch involving both client-side and server-side scripting. I am also familiar with using a variety of common frameworks and plugins when necessary. Web is what I do..";
    };

    replaceWhatOrieDoes();

var replaceGoalsOfOrie = function() {
	console.log ("Replace paragraph of Orie's Goals")

	var goalsOfOrie;

	goalsOfOrie = document.getElementById("goalsOfOrie");
	goalsOfOrie.innerHTML = "I look forward to work closely and effectively with clients and/or staff with a sense of humor and enthusiasm. I wake up every morning with new, fresh ideas, and I believe in doing it right the first time. As I progress I feel I am leaning towards front-end development";
}

replaceGoalsOfOrie();

=======
/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";

    // Load the navbar dynamically via jQuery and Ajax
    var header = $('#mainHeader').load("partials/nav.html", function() {
        var bodyid = $('body').attr('id');
        switch (bodyid.toString()) {
            case "index":
                $('#indexLink').attr("class", "active");
                break;
            case "projects":
                $('#projectsLink').attr("class", "active");
                break;
            case "contact":
                $('#contactLink').attr("class", "active");
                break;
        }
    });

    //CreateJS Section

    // Global Variables
    var screenWidth = 468;
    var screenHeight = 200;

    // References
    var canvas = document.getElementById("canvas");
    canvas.setAttribute("width", screenWidth.toString());
    canvas.setAttribute("height", screenHeight.toString());

    // Create Stage
    var stage = new createjs.Stage(canvas);

    var helloLabel = null;
    var helloLabelMove = 1;

    var button = null;
    var buttonMove = 0;

    function init() {
        console.log("Testing");
 
        stage.enableMouseOver(20);

        // Frame Rate
        createjs.Ticker.framerate = 60;
        
        // listen for Frame Ticker
        createjs.Ticker.on("tick", animationLoop);

        main();
    }

    // Run every Frame
    function animationLoop() {
        

        helloLabel.x += helloLabelMove;
        button.x += buttonMove;


        if ((helloLabel.x >= screenWidth) || (helloLabel.x <= 270)) {
            helloLabelMove *= -1;
        }
        
        // Refresh
        stage.update();
    }

    function main() {
        console.log("Testing");
        button = new createjs.Bitmap('../Assets/images/pick-me.jpg');
        button.regX = button.getBounds().width * 0.5;
        button.regY = button.getBounds().height * 0.5;
        button.scaleX = 1;
        button.scaleY = 1;
        button.x = screenWidth * 0.5;
        button.y = screenHeight * 0.5;
        stage.addChild(button);

        helloLabel = new createjs.Text("See Work", "30px Consolas", "white");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.9;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = screenWidth * 0.7;
        helloLabel.y = screenHeight * 0.5;
        stage.addChild(helloLabel);

        button.on("click", function() {
            if(helloLabel.text === "Clicked!") {
                helloLabel.text = "View";
            } else {
                helloLabel.text = "Viewing Portfolio";
                window.location.replace("http://google.com");
            }
            
            helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
            helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        });

        button.on('mouseover', function() {
            button.alpha = 0.5;
        })

        button.on('mouseout', function() {
            button.alpha = 1;
        })
    }

    window.onload = init;
>>>>>>> 8062a6048dbd641b2166c00d56c5bb709daeee63


// console.log("Hello, User!");
// var email = document.getElementById("form_email");
// var password = document.getElementById("form_password");
// var message = document.getElementById("form_message");
// var submit = document.getElementById("submit_button");

// submit.addEventListener("click", function(event) {
//     console.log ("Email " + email.value);
//     console.log ("Password: " + password.value);

// }); // End Event Handler




})();

