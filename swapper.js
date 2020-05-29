// key1, a string
// object1, an object
// key2, a string
// object2, an object
// Your function should:

//1. fetch the value stored in key1 in object1,
//2. and then store that value in key2 of object2.
//3. take the original value stored in key2 of object2, and store that in key1 of object1.
// not need to return anything.


const swapper = function(key1, object1, key2, object2) {
  // Store the value of Obj1[key1]
  let temp = object1[key1];

  // Assign object1[key1] value of obj2[k2]
  object1[key1] = object2[key2];
  
  // ASsign object2[k2] value of of ob
  object2[key2] = temp;


  console.log('Swap!');
  console.log('object1: ', object1);
  console.log('object2: ', object2);
};

swapper('a', { a: 1 , b: 2, c: 3 }, 'c', { a: 4, b: 3, c: 5 });
swapper('b', { a: 8 , b: 7, c: 6 }, 'd', { a: 5, b: 1, c: 2, d: 12});
swapper('c', { a: 1 , b: 3, c: 3, d: 7 }, 'c', { a: 4, b: 0, c: 5 });