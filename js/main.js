const main = document.querySelector("#main");
const qna = document.querySelector('#qna');
const ending = document.querySelector('#ending');

function addAnswer(answerText, qIdx) {
    let a = document.querySelector('.answerBox');
    let answer = document.createElement('button');
    answer.classList.add('answerList')
    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function () {
        let children = document.querySelectorAll('.answerList');
        for (let i = 0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.display = 'none';
        }
        goNext(++qIdx);
    }, false);
}


function goNext(qIdx) {
    let q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;

    for (let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx);
    }

}

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
        let qIdx = 0;
        goNext(qIdx);
    })

}