function ChangingSequence(arr) {

  let prev_of_prv = 0;
  let delta = arr.map((v, i, arr) => {
    if (i > 0) {
      return arr[i] - arr[i - 1];
    } else {
      return 0;
    }
  });

  console.log(delta);

  for (let i = 0; i < delta.length; i++) {
    if (i > 1) {
      console.log(i, delta[i - 1], Math.sign(delta[i - 1]), delta[i], Math.sign(delta[i]));
      // different sign
      if (Math.sign(delta[i - 1]) !== Math.sign(delta[i])) {
        return i - 1;
        // same sign
      }
    };
  }
  return -1;
}

module.exports = ChangingSequence;