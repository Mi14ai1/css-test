const ranges = document.querySelectorAll('[data-range]');
export const rangeInit = () => {
  if (ranges.length === 0) {
    return;
  }

  ranges.forEach((range) => {
    const inputSlider = range.querySelector('.range__slider');
    const rangeValue = range.querySelector('.range__value');
    if (!inputSlider||!rangeValue) {
      return;
    }

    rangeValue.innerText= inputSlider.value;

    range.addEventListener('input', (e) => {
      e.preventDefault();
      console.log(this);
      rangeValue.innerText= inputSlider.value;
    });
  });

};
