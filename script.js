
  var clicked = true;

  function toggleBtnClick() {
    if (clicked) {
        document.getElementById('pagestyle').setAttribute('href', 'styles/light.css');
        clicked = false;
    } else {
      document.getElementById('pagestyle').setAttribute('href', 'styles/dark.css');
      clicked = true;
    }
  }