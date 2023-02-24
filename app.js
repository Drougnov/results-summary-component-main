let scorePoint = 0;
let sum = 0;


fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        const summaryList = document.querySelector('.summary__list');
        summaryList.innerHTML = '';

        for(let i=0; i<data.length; i++){
            summaryList.innerHTML += `
                <li class="summary__item">
                    <div class="summary__icon-container">
                        <img src="${data[i].icon}" alt="" class="summary__icon">
                        <p class="summary__text">${data[i].category}</p>
                    </div>
                    <span class="summary__score"><span class="summary__score-point">${data[i].score}</span> / 100</span>
                </li>`
            sum += data[i].score;
        }
        scorePoint = Math.round(sum / data.length);
        let scorePointText = document.querySelector('.result__score-point');
        var count = 0;
        var interval = setInterval(function() {
            count++;
            scorePointText.innerText = count;
            if (count >= scorePoint) {
                clearInterval(interval);
            }
        }, 10);
    });