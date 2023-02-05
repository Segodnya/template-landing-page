export const checkElWidth = () => {
  const docWidth = document.documentElement.offsetWidth;
  console.log("Current Doc Width:", docWidth);
  [].forEach.call(document.querySelectorAll("*"), (el) => {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  });
  console.log("Width Checking Completed!");
};
