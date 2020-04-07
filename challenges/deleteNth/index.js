export default function deleteNth(arr, n) {
  const obj = {};

  return arr.filter(el => {
    if (obj[el]) obj[el]++;
    else obj[el] = 1;

    return obj[el] <= n;
  });
}
