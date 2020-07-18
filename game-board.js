const deck = [
    {
      name: "Bulbasaur",
      damage: 40,
      imgsrc: 'assets/Bulbasaur.jpg',
    }, {
      name: "Caterpie",
      damage: 30,
      imgsrc: './assets/Caterpie.jpg',
    }, {
      name: "Charmander",
      damage: 30,
      imgsrc: 'assets/Charmander.jpg',
    }, {
      name: "Clefairy",
      damage: 50,
      imgsrc: 'assets/Clefairy.jpg',
    }, {
      name: "Jigglypuff",
      damage: 50,
      imgsrc: 'assets/jiggalypuff.jpg',
    }, {
      name: "Mankey",
      damage: 30,
      imgsrc: 'assets/mankey.jpg'
    }, {
      name: "Meowth",
      damage: 50,
      imgsrc: 'assets/meowth.jpg',
    }, {
      name: "Nidoran - female",
      damage: 60,
      imgsrc: 'assets/nidoran-F.jpg',
    }, {
      name: "Nidoran - male",
      damage: 50,
      imgsrc: 'assets/Nidoran-m.jpg'
    }, {
      name: "Oddish",
      damage: 40,
      imgsrc: 'assets/oddish.jpg',
    }, {
      name: "Pidgey",
      damage: 30,
      imgsrc: 'assets/pidgey.jpg',
    }, {
      name: "Pikachu",
      damage: 60,
      imgsrc: 'assets/pikachu.jpg',
    }, {
      name: "Poliwag",
      damage: 40,
      imgsrc: 'assets/poliwag.jpg'
    }, {
      name: "Psyduck",
      damage: 60,
      imgsrc: 'assets/psyduck.jpg'
    }, {
      name: "Rattata",
      damage: 20,
      imgsrc: 'assets/rattatat.jpg'
    }, {
      name: "Squirtle",
      damage: 30,
      imgsrc: 'assets/squirtle.jpeg',
    }, {
      name: "Vulpix",
      damage: 40,
      imgsrc: 'assets/vulpix.jpg'
    }, {
      name: "Weedle", 
      damage: 30,
      imgsrc: 'assets/weedle.jpg'
    }, {
      name: "Alakazam",
      damage: 60,
      imgsrc: 'assets/alakazam.jpg'
    }, {
      name: "Gyarados",
      damage: 60,
      imgsrc: 'assets/Gyarados.jpg'
    }, {
      name: "Staryu",
      damage: 40,
      imgsrc: 'assets/Staryu.jpg'
    }, {
      name: "Porygon",
      damage: 40,
      imgsrc: 'assets/Porygon.jpg'
    }, {
      name: "Abra",
      damage: 30,
      imgsrc: 'assets/Abra.jpg'
    }, {
      name: "Voltorb",
      damage: 20,
      imgsrc: 'assets/Voltorb.jpg'
    }, {
      name: "Beedrill",
      damage: 60,
      imgsrc: 'assets/Beedrill.jpg'
    }, {
      name: "Gastly",
      damage: 40,
      imgsrc: 'assets/Gastly.jpg'
    }, {
      name: "Farfetchd",
      damage: 50,
      imgsrc: 'assets/Farfetchd.jpg'
    }, {
      name: "Magikarp",
      damage: 0,
      imgsrc: 'assets/Magikarp.jpg'
    }, {
      name: "Dragonair",
      damage: 60,
      imgsrc: 'assets/Dragonair.jpg'
    }, {
      name: "Blastoise",
      damage: 60,
      imgsrc: 'assets/Blastoise.jpg'
    }, {
      name: "Dratini",
      damage: 30,
      imgsrc: 'assets/Dratini.jpg'
    }, {
      name: "Charmeleon",
      damage: 40,
      imgsrc: 'assets/Charmeleon.jpg'
    }, 
  ]
const redsDeck = []
const npcDeck = []
let redsScore = 0
let npcScore = 0
var audio = new Audio('./assets/Kids-Cheering.wav');
var audioAww = new Audio('./assets/aww2.wav');

function   dealCards() {
    for (var i = 1; i <= 3; i++){
      if (redsDeck.length < 3){
        redsDeck.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0])
          }
          if (npcDeck.length < 3){
            npcDeck.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0])
          }
          if(deck.length < 2){
            if (redsScore > npcScore){
              window.location.replace('winner-loser.html')
            }
            else if (npcScore > redsScore){
              window.location.replace('loser.html')
            }
            else{
              console.log(`It's a Tie`)
            }
          } 
    }


let cardOne = redsDeck[0].name + ' ' + redsDeck[0].damage
let Oneimg = redsDeck[0].imgsrc;

let cardTwo = redsDeck[1].name + ' ' + redsDeck[1].damage
let Twoimg = redsDeck[1].imgsrc;

let cardThree = redsDeck[2].name + ' ' + redsDeck[2].damage
let Threeimg = redsDeck[2].imgsrc;


let npcOne = npcDeck[0].name + ' ' + npcDeck[0].damage
let npcOneImg = npcDeck[0].imgsrc

let npcTwo = npcDeck[1].name + ' ' + npcDeck[1].damage
let npcTwoImg = npcDeck[1].imgsrc

let npcThree = npcDeck[2].name + ' ' + npcDeck[2].damage
let npcThreeImg = npcDeck[2].imgsrc


    $('.cardOne').append().html(cardOne)
    $('.cardOne').css({'background-image': 'url('+ Oneimg +')'});

    $('.cardTwo').append().html(cardTwo)
    $('.cardTwo').css({'background-image': 'url('+ Twoimg +')'});

    $('.cardThree').append().html(cardThree)
    $('.cardThree').css({'background-image': 'url('+ Threeimg +')'});

    $('#pcCard1').append().html(npcOne)
    $('#pcCard1').css({'background-image': 'url('+ npcOneImg +')'});

    $('#pcCard2').append().html(npcTwo)
    $('#pcCard2').css({'background-image': 'url('+ npcTwoImg +')'});

    $('#pcCard3').append().html(npcThree)
    $('#pcCard3').css({'background-image': 'url('+ npcThreeImg +')'});
}

const cardOneFight = () => {
  let redsDamg = redsDeck[0].damage
  let npcDamg = npcDeck[0].damage

  if (redsDamg > npcDamg){
    audio.play()
    alert('You Win!')
    redsScore += 1
    $('.battleContainer > h1').html('Your Score ' + redsScore)
    redsDeck.splice(0, 1)
    npcDeck.splice(0, 1)
  }
  if (redsDamg < npcDamg){
    audioAww.play()
    alert('You Lose!')
    npcScore += 1
    $('#score').html('NPC Score ' + npcScore)
    redsDeck.splice(0, 1)
    npcDeck.splice(0, 1)
  }
  if (redsDamg === npcDamg){
    alert(`It's a tie`)
    redsDeck.splice(0, 1)
    npcDeck.splice(0, 1)
  }
  if(redsScore == 5){
    window.location.replace('winner-loser.html')
  }
  if (npcScore == 5){
    window.location.replace('loser.html')
  }

}
const cardTwoFight = () => {
  let redsDamg = redsDeck[1].damage
  let npcDamg = npcDeck[1].damage

  if (redsDamg > npcDamg){
    audio.play()
    alert('You Win!')
    redsScore += 1
    $('.battleContainer > h1').html('Your Score ' + redsScore)
    redsDeck.splice(1, 1)
    npcDeck.splice(1, 1)
  }
  if (redsDamg < npcDamg){
    audioAww.play()
    alert('You lose!')
    npcScore += 1
    $('#score').html('NPC Score ' + npcScore)
    redsDeck.splice(1, 1)
    npcDeck.splice(1, 1)
  }
  if (redsDamg === npcDamg){
    alert(`It's a tie`)
    redsDeck.splice(1, 1)
    npcDeck.splice(1, 1)
  }
  if(redsScore == 5){
    window.location.replace('winner-loser.html')
  }
  if (npcScore == 5){
    window.location.replace('loser.html')
  }

}
const cardThreeFight = () => {
  let redsDamg = redsDeck[2].damage
  let npcDamg = npcDeck[2].damage

  if (redsDamg > npcDamg){
    audio.play()
    alert('You Win!')
    redsScore += 1
    $('.battleContainer > h1').html('Your Score ' + redsScore)
    redsDeck.splice(2, 1)
    npcDeck.splice(2, 1)
  }
  if (redsDamg < npcDamg){
    audioAww.play()
    alert('You lose!')
    npcScore += 1
    $('#score').html('NPC Score ' + npcScore)
    redsDeck.splice(2, 1)
    npcDeck.splice(2, 1)
  }
  if (redsDamg == npcDamg){
    alert(`it's a tie`)
    redsDeck.splice(2, 1)
    npcDeck.splice(2, 1)
  }
  if(redsScore == 5){
    window.location.replace('winner-loser.html')
  }
  if (npcScore == 5){
    window.location.replace('loser.html')
  }

}

  $('#two').on('click', cardOneFight);
  $('#three').on('click', cardTwoFight);
  $('#four').on('click', cardThreeFight)
   

 



$('#one').on('click', dealCards);
