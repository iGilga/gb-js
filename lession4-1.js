function numberToObject(num) {
  let result = {};

  if (num >= 0 && num <= 999) {
    let nums = Array.from(num.toString());
    let temp = {
      'единицы': 0,
      'десятки': 0,
      'сотни': 0
    };

    let i = nums.length - 1;
    for(const current in temp) {
      let num = nums[i];
      temp[current] = num;
      if(i != 0) {
        --i;
      } else {
        break;
      }
    }
    result = temp
  }
  return result;
}

let num = Math.random() * 999;
console.log(num);
let result = numberToObject(num);
console.log(result);
