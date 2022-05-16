const main = document.querySelector("#main");
const qna = document.querySelector('#qna');
const ending = document.querySelector('#ending');
const endPoint = 11;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function calResult() {
    let result = select.indexOf(Math.max(...select));
    return result;
}

function goResult() {
    qna.style.webkitAnimation = 'fadeOut 1s';
    qna.style.Animation = 'fadeOut 1s';

    setTimeout(function () {
        ending.style.webkitAnimation = 'fadeIn 1s';
        ending.style.Animation = 'fadeIn 1s';
        setTimeout(function () {
            qna.style.display = 'none';
            ending.style.display = 'block';
        }, 450)
    })

    console.log(select);
}

function addAnswer(answerText, qIdx, idx) {
    let a = document.querySelector('.answerBox');
    let answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('.fadeIn');
    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", function () {
        let children = document.querySelectorAll('.answerList');
        qna.style.webkitAnimation = 'fadeOut 1s';
        qna.style.Animation = 'fadeOut 1s';

        setTimeout(() => {
            qna.style.webkitAnimation = 'fadeIn 2s';
            qna.style.Animation = 'fadeIn 2s';
            select[qIdx] = idx;
            for (let i = 0; i < children.length; i++) {
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        }, 450)
    }, false);
}


function goNext(qIdx) {
    if (qIdx == endPoint) {
        goResult();
        return;
    }
    let q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;

    for (let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }

    let status = document.querySelector('.statusBar');
    status.style.width = (100 / endPoint) * (qIdx + 1) + '%';

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