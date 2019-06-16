//get the document ready
$(document).ready(function(){

    //declares what happens when the user clicks the submit button. on click, the user's score will be revealed.
    const submitButton = document.querySelector(".submit-button");
    const test = $('.submit-button');
    submitButton.addEventListener("click", getScore);

}) 

//scroll funtion that declares what the scroller is, and then createScroller displays where the funtion is applied to.

function createScroller(clickElement, target) {
    $(clickElement).click(function() {
        $('html,body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
}

    createScroller('.button1', 'form')
    createScroller('.question1', '.question2')
    createScroller('.question2', '.question3')
    createScroller('.submit-button', '.results')

function getScore() {
    const form = document.querySelector("#quiz");
    const inputs = form.querySelectorAll("input");

   //scores initially start at 0 by default until a user selects an answer

    let joyDivision = 0;
    let talkingHeads = 0;
    let newOrder = 0;
    let saltPeppa = 0;

   
    Array.prototype.forEach.call(inputs, function(input) {
    
         //quiz works as a point system. when a user selects an answer, a score of 1 is stored 
    if (input.checked) {
      
        switch (input.value) {
            case "joyDivision": joyDivision++; break;
            case "talkingHeads": talkingHeads++; break;
            case "newOrder": newOrder++; break;
            case "saltPeppa": saltPeppa++; break;
            
                
            default: 
            $('.quiz-answer').empty()
                
        }
    }
});


// if the user's score is greater than the defualt value, that score will be appended to the page 
    let largestScore = 0;
        yourType = "Nothing - because you need to select an option from each question to get your song!";

        if (joyDivision > largestScore) {
            yourType = "Joy Division, 'Disorder'. You must be super fun at parties....";
        }
        if (talkingHeads > largestScore) {
            yourType = "Talking Heads, 'Once In A Lifetime'. Stay weird!";
            largestScore = talkingHeads;
        }
        if (newOrder > largestScore) {
            yourType = "New Order, 'Bizarre Love Triangle'. Show me one person that doesn't like this song.";
            largestScore = newOrder;
        }
        if (saltPeppa > largestScore) {
             yourType = "Salt-N-Peppa, 'Push It'. Congratulations - You are super fly.";
            largestScore = saltPeppa;
        }

      
// results are appended to the page (the empty html div) on submit

    $('.quiz-answer').empty()
    $('.quiz-answer').append(`<p>Your 80's jam is: ${yourType}</p>`)
    
}









    