const countdown = (i) => {
  console.log(i);

  if (i < 1) {
    return;
  }

  countdown(i - 1);
};

export default countdown;
