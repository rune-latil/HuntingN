const main = document.querySelector("#main");
const qna = document.querySelector('#qna');
const ending = document.querySelector('#ending');

function addAnswer(answerText) {
    let a = document.querySelector('.answerBox');
    let answer = document.createElement('button');
    a.appendChild(answer);
    answer.innerHTML = answerText;
}


function goNext(qIdx) {
    let q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;

    for (let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer);
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