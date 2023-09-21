document.addEventListener('DOMContentLoaded', function() {
    // конечная дата
    const deadline = new Date(2023, 9, 22);
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат 
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }
    // получаем элементы, содержащие компоненты даты
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });
  //выбор фотографий по клику

  document.addEventListener('DOMContentLoaded', function(){
   
    document.querySelectorAll('.sale__button').forEach((tabsBtn) => {
        tabsBtn.addEventListener('click',(event) => {
            const path = event.currentTarget.dataset.path
            
            document.querySelectorAll('.sale__image-head').forEach((workСontainer) => {
                workСontainer.classList.remove('sale__image-active')
            });
            document.querySelector(`[data-target = "${path}"]`).classList.add('sale__image-active')
        });
        
    });
});
// Звездный рейтинг
class Rating {
  constructor(dom) {
    //Добавляем svg без заливки
    dom.innerHTML = '<svg width="80" height="20" viewBox="0 0 80 7" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>';
    this.svg = dom.querySelector('svg');
    for(var i = 0; i < 5; i++)
      this.svg.innerHTML += `<path data-value="${i+1}" transform="translate(${i*15},0)"  d="M6.90676 10.3054L7.16212 10.4575L10.5115 12.4525L10.5117 12.4526C10.7619 12.6018 11.027 12.3742 10.9717 12.1389L6.90676 10.3054ZM6.90676 10.3054L6.65114 10.4571L3.30171 12.4441L3.30082 12.4447C3.05049 12.5939 2.78528 12.3661 2.84087 12.1307L3.72861 8.37933L3.79895 8.0821L3.56661 7.88384L0.604582 5.3563L0.604406 5.35615C0.410935 5.19121 0.502686 4.86583 0.779118 4.84418L0.779118 4.84418L0.781721 4.84396L4.67997 4.51809L4.97872 4.49311L5.09744 4.21783L6.62285 0.680863L6.62285 0.680865L6.62369 0.678906C6.72536 0.440365 7.08714 0.440365 7.18881 0.678907L7.18949 0.680489L8.71489 4.22541L8.8335 4.50104L9.13253 4.52604L13.0308 4.85192L13.0334 4.85212C13.3098 4.87378 13.4016 5.19916 13.2081 5.3641L13.2079 5.36425L10.2459 7.89179L10.0135 8.09005L10.0839 8.38728L10.9716 12.1386L6.90676 10.3054Z" stroke="#F8B656"/>`;
    this.svg.onclick = e => this.change(e);
    this.render();
  }
  change(e) {
    let value = e.target.dataset.value;
    value && (this.svg.parentNode.dataset.value = value); 
    this.render();
  }
  render() {
    this.svg.querySelectorAll('path').forEach(star => {
      let on = +this.svg.parentNode.dataset.value >= +star.dataset.value;
      star.classList.toggle('active', on);
    });
  }
}
document.querySelectorAll('.sale__rating').forEach(dom => new Rating(dom));

document.addEventListener('DOMContentLoaded', function(){
  const selectColor = document.querySelector('.select-wrapper');
  const selectSize = document.querySelector('.select-wrapper__size');
  const imageIcon = document.querySelector('.select-icon')
  const imageIconSize = document.querySelector('.select-icon__size')
  selectColor.addEventListener('click', ()=> {
    imageIcon.classList.toggle('select__icon-active')
  });
  selectSize.addEventListener('click', () => {
    imageIconSize.classList.toggle('select__icon-active');
  })
});
