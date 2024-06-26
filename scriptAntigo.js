const button = document.querySelector('button')

const sounds = [
  '#sound1',
  '#sound2',
  '#sound3',
  '#sound4',
  '#sound5',
  '#sound6',
  '#sound7',
  '#sound8',
  '#sound9'
]
removeH1Color()

function pararan(){
  anim1 = document.getElementById("an1") 
  anim2 = document.getElementById("an2") 

  anim1.stop()
  anim2.stop()
}

function startAn(){
  anim1 = document.getElementById("an1") 
  anim2 = document.getElementById("an2") 

  anim1.start()
  anim2.start()
}


button.addEventListener('click', function () {
  
  let sound = sounds[Math.floor(Math.random() * sounds.length)]
  let audio = document.querySelector(sound)
  audio.currentTime = 0
  audio.play()
})

let music = document.querySelector('#bckowht')

function play() {
  if (typeof music.loop == 'boolean') {
    music.loop = true
  } else {
    music.addEventListener(
      'ended',
      function () {
        this.currentTime = 0
        this.play()
      },
      false
    )
  }
  music.volume = 0.9
  music.play()
}

function stop() {
  music.pause()
  music.currentTime = 0
}


function marcar(e) {
  // verifica se a classe black esta no elemento e
  if (e.className == "white") {
    e.className = "black";
  } else {
    e.className = "white";
  }
  console.log("change")
}



  

 

 
function changeBackground() {
  let x = document.body;
  x.classList.add("jacksonColor")
}

function removeBackground(){
  
    let y = document.body;
    y.classList.remove("jacksonColor")
  
}

function changeH1Color() {
    let x = document.getElementById("h1");
    x.style.color = x.style.color == "black" ? "white" : "black";
  }

function removeH1Color(){
  let z = document.getElementById("h1");
  z.style.color = "white"
}


function botaoMaluco(){
  michael = document.getElementsByClassName('.button')
  michael.onclick.addEventListener(shift)
  
}







function buttonPlay(){
    myInterval = setInterval(changeH1Color, 400);
   
    
    changeH1Color()
    
    changeBackground()
    
    play()
  }

function buttonPause(){
  clearInterval(myInterval)
  removeH1Color()
  clearInterval(myInterval)
  removeBackground() 
  stop()
  clearInterval(myInterval)

}