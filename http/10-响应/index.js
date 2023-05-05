let tds = document.querySelectorAll('td');

tds.forEach(it => {
  it.onclick = function() {
    this.style.background = '#222'
  }
})