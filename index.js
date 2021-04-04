// maybe figure this out sometime
// function messageHelper(message){
//   console.log(message);
//   return message;
// }

function wakeDog(dogName, dogBreed) {
  let message = `Wake ${dogName} the ${dogBreed}`;
  console.log(message);
  return message;
} 

function leashDog(dogName, dogBreed) {
  let message = `Leash ${dogName} the ${dogBreed}`;
  console.log(message);
  return message;
}

function walkToPark(dogName, dogBreed) {
  let message = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(message);
  return message;
}

function throwFrisbee(dogName, dogBreed) {
  let message = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(message);
  return message;
}

function walkHome(dogName, dogBreed) {
  let message = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(message);
  return message;
}

function unleashDog(dogName, dogBreed) {
  let message = `Unleash ${dogName} the ${dogBreed}`;
  console.log(message);
  return message;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
  let i = 0;
  let result = [];
  while (i < routine.length) {
    result.push(routine[i](dogName, dogBreed));
    i++;
  }
  return result;
}