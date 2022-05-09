const main = document.querySelector("#main");
const qna = document.querySelector('#qna')
const ending = document.querySelector('#ending')


function start() {
    main.style.webkitAnimation = 'fadeOut 1s';
    main.style.Animation = 'fadeOut 1s';

    setTimeout(function () {
        qna.style.webkitAnimation = 'fadeIn 1s';
        qna.style.Animation = 'fadeIn 1s';
        setTimeout(function () {
            main.style.display = 'none';
            qna.style.display = 'block';
        }, 600)
    })

}