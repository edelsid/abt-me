import jpg1 from '../assets/1.jpg'
import jpg2 from '../assets/2.jpg'
import jpg3 from '../assets/3.jpg'
import jpg4 from '../assets/4.jpg'
import jpg5 from '../assets/5.jpg'
import jpg6 from '../assets/6.jpg'
import games from '../assets/games.jpg'
import zrazy from '../assets/zrazy.jpg'
import church1 from '../assets/church1.png'
import church2 from '../assets/church2.jpg'
import candles from '../assets/candles1.jpg'
import sea from '../assets/sea.jpg'
import pencils from '../assets/pencil.jpg'

const questions =[{
  "id": 1,
  "color": "linear-gradient(60deg,rgba(212, 39, 33, 1) 0%, rgba(253, 124, 84, 1) 100%)",
  "question": "No matter my age I will always be a proud gamer! 🎮 Guess my favorite genre!",
  "right": 2,
  "img": jpg1,
  "photo": [ games ],
  "answers": [{
    "id": 1,
    "text": "🎉 Strategy"
  }, {
    "id": 2,
    "text": "👏 Role-playing"
  }, {
    "id": 3,
    "text": "❤️ Survival"
  }]
}, {
  "id": 2,
  "color": "linear-gradient(60deg,rgba(31, 139, 116, 1) 0%, rgba(63, 219, 84, 1) 100%)",
  "question": "Drawing is one of my main hobbies 🎨 What do you think is my go-to way of drawing?",
  "right": 1,
  "img": jpg2,
  "photo": [ pencils ],
  "answers": [{
    "id": 1,
    "text": "🎉 Pencil"
  }, {
    "id": 2,
    "text": "👏 Tablet"
  }, {
    "id": 3,
    "text": "❤️ Pastel"
  }]
}, {
  "id": 3,
  "color": "linear-gradient(60deg,rgba(139, 38, 118, 1) 0%, rgba(151, 98, 219, 1) 100%)",
  "question": "I've travelled to fewer places than most people here, but I've been to some ✈️ What do you think is my favorite tourist attraction?",
  "right": 3,
  "img": jpg3,
  "photo": [ church1, church2 ],
  "answers": [{
    "id": 1,
    "text": "🎉 17th century palace"
  }, {
    "id": 2,
    "text": "👏 A modern minimalistic art museum"
  }, {
    "id": 3,
    "text": "❤️ Ruins of a church"
  }]
}, {
  "id": 4,
  "color": "linear-gradient(60deg,rgba(197, 126, 20, 1) 0%, rgba(231, 173, 47, 1) 100%)",
  "question": "Sometimes we try our best and still fail 😔 There's one dish that I just can't manage to cook properly! What is it?",
  "img": jpg4,
  "photo": [ zrazy ],
  "right": 2,
  "answers": [{
    "id": 1,
    "text": "🎉 Pancakes"
  }, {
    "id": 2,
    "text": "👏 Potato zrazy"
  }, {
    "id": 3,
    "text": "❤️ Creamy mushroom soup"
  }]
}, {
  "id": 5,
  "color": "linear-gradient(60deg,rgba(29, 50, 168, 1) 0%, rgba(98, 171, 219, 1) 100%)",
  "question": "There's always more of the world to see 🗺️ Try to guess a place I've never been before!",
  "img": jpg5,
  "photo": [ sea ],
  "right": 1,
  "answers": [{
    "id": 1,
    "text": "🎉 Warm sea"
  }, {
    "id": 2,
    "text": "👏 The mountains"
  }, {
    "id": 3,
    "text": "❤️ The steppe"
  }]
}, {
  "id": 6,
  "color": "linear-gradient(60deg,rgba(202, 60, 67, 1) 0%, rgba(255, 145, 218, 1) 100%)",
  "question": "Everyone loves gifts! I have one thing in particular that I like to receive.",
  "img": jpg6,
  "photo": [ candles ],
  "right": 3,
  "answers": [{
    "id": 1,
    "text": "🎉 Electronics"
  }, {
    "id": 2,
    "text": "👏 Vintage jewelry"
  }, {
    "id": 3,
    "text": "❤️ Candles"
  }]
}];

export default questions;