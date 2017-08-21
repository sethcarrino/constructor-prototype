//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, color, status, hungry, owner) {
  this.name = name;
  this.color = color;
  this.status = status;
  this.hungry = hungry;
  this.owner = owner;

};

// Instances of Dog
// Needed: sadie, moonshine, atticus

let sadie = new Dog('Sadie', 'black', 'normal', false, 'Mason');
let moonshine = new Dog('Moonshine', 'black', 'normal', true);
let atticus = new Dog('Atticus');

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, cool) {
  this.name = name;
  this.pet = function(dog){
    dog.status = 'happy';
  }
  this.feed = function(dog){
    dog.hungry = false;
  }
  this.cool = cool;
};



// Instances of Human
// Needed: mason, julia

let mason = new Human('Mason', false);
let julia = new Human('Julia', true);
