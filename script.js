var gifUrls = [
    { url: 'op1.gif', duration: 5000 },
    { url: 'op2.gif', duration: 5000 },
    { url: 'op3.gif', duration: 5000 },
    { url: 'op4.gif', duration: 5000 },
    { url: 'op5.gif', duration: 5000 },
    { url: 'op6.gif', duration: 5000 },
    { url: 'op7.gif', duration: 5000 },
    { url: 'op8.gif', duration: 5000 },
    { url: 'op9.gif', duration: 5000 },
    { url: 'op10.gif', duration: 5000 },
    { url: 'op11.gif', duration: 5000 },
    { url: 'op12.gif', duration: 5000 },
    { url: 'op13.gif', duration: 5000 },
    { url: 'op14.gif', duration: 5000 },
    { url: 'op15.gif', duration: 5000 },
    { url: 'op16.gif', duration: 5000 },
    { url: 'op17.gif', duration: 5000 }
  ];
  var currentIndex = 0;

  var spanElement = document.getElementById('gifSpan');

  function changeBackgroundImage() {
    var currentGif = gifUrls[currentIndex];
    spanElement.style.backgroundImage = 'url(' + currentGif.url + ')';
    currentIndex = (currentIndex + 1) % gifUrls.length;
    setTimeout(changeBackgroundImage, currentGif.duration);
  }

  changeBackgroundImage();