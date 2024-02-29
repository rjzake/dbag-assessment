const array = [5,4,6,7,3,5,7,3];
let temp = [];
let duplicate = [];
array.forEach(item => {
  if (temp.includes(item)){
    duplicate.push(item);
  } else {
    temp.push(item);
  }
});

console.log(duplicate);
