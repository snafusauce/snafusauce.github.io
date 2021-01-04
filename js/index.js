const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click',() => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
//THIS IS THE TYPING ANIMATION SECTION
var textAnimated = document.querySelector(".animated_text")

var text = ""
var textArr = [
  "I'm a tech professional.",
  "A first-gen college graduate.",
  "A US Marine Corps Veteran.",
  "Diversity Advocate.",
  "Passionate."
]

var letterIndex = -1
var currentTextIndex = -1


function addLetter(){
  // increment letterIndex to get to the next letter
  letterIndex++
  //
  if(letterIndex < text.length) {
    //ADD A DELAY
    setTimeout( function() {
      // add letter
      textAnimated.textContent += text[letterIndex]
      // call itself 
      addLetter()
    }, 100)
  }else if (currentTextIndex != 4){
    setTimeout(function(){
      removeLetter()
    }, 2000)
  }
}

function removeLetter(){
  //decrement letterindex to the next letter
  letterIndex--
  //
  if(letterIndex >=0){
    //Add Delay
    setTimeout( function(){
      //remove letter
      textAnimated.textContent = text.slice(0,letterIndex)
      //call itself
      removeLetter()
    }, 100)
  }else{
    updateText()
  }
}
function updateText(){
  //increment currenttextindex to switch to the next sentence
  currentTextIndex++

  //go to the first string index when currenttextindex has reached the end
  //if(currentTextIndex == textArr.length){
    //currentTextIndex = 0
  //}
  //update text
  text = textArr[currentTextIndex]
  //call the function!
  addLetter();
}
//cool stuff
updateText()
//