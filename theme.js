function darkmode() {
  var wasDarkmode = localStorage.getItem('darkmode') === 'true';
  localStorage.setItem('darkmode', !wasDarkmode);
  var element = document.body;
  element.classList.toggle('dark-mode', !wasDarkmode);
}

function onload() {
  document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
}




