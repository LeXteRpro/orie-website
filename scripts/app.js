
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
	    console.log("App started...");
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



})();







//I’m a passionate Web Design and Developer student currently working through my two year <em>"Interactive Web Design and Development" </em>program. I am a music enthusiast, an avid coffee lover, and I love solving puzzles. I create to inspire. Read my <a href="">Full Biography</a></p>
