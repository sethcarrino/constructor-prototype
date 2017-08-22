//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, color, status) {
  this.name = name;
  this.color = color;
};

function Sadie () {
  this.status = 'normal';
  this.color = 'black';
  this.hungry = false;
  this.owner = 'Mason';
}

function Moonshine () {
  this.hungry = true;
}

Sadie.prototype = new Dog();
Moonshine.prototype = new Dog();

// Instances of Dog
// Needed: sadie, moonshine, atticus

let sadie = new Sadie();
let moonshine = new Moonshine();
let atticus = new Dog('Atticus');

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, cool) {
  this.name = name;
  this.pet = dog => {
    dog.status = 'happy';
  }
  this.feed = dog =>{
    dog.hungry = false;
  }
  this.cool = cool;
};



// Instances of Human
// Needed: mason, julia

let mason = new Human('Mason', false);
let julia = new Human('Julia', true);
