let str = [1, 2, 3, 2, 4, 6, 3];

let i = 0,
  j = str.length - 1;

while (i < j) {
  let temp = str[i];
  str[i] = str[j];
  str[j] = temp;
  i++;
  j--;
}

console.log(str);
