import data from './data.json' with { type: 'json' };
const main = document.getElementById('main');

const dayBtn = document.getElementById('daily');
const weekBtn = document.getElementById('weekly');
const monthBtn = document.getElementById('monthly');

console.log(main)
console.log(main.dataset.theme);

let innerHtml = '';
for (const item of data) {
    innerHtml += `
        <section
            class="${item.title.toLowerCase()}"
        >
            <div class="box">
                <div class="box__top">
                    <h3>${item.title}</h3>
                    <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                        fill="#BBC0FF" fill-rule="evenodd" />
                    </svg>
                </div>
                <div class="box__bottom weekly">
                    <h2>${item.timeframes.weekly.current}hrs</h2>
                    <p>Last Week - ${item.timeframes.weekly.previous}hrs</p>
                </div>
                <div class="box__bottom daily">
                    <h2>${item.timeframes.daily.current}hrs</h2>
                    <p>Yesterday - ${item.timeframes.daily.previous}hrs</p>
                </div>
                <div class="box__bottom monthly">
                    <h2>${item.timeframes.monthly.current}hrs</h2>
                    <p>Last Month - ${item.timeframes.monthly.previous}hrs</p>
                </div>
            </div>
        </section>
    `;
}
main.innerHTML = innerHtml;

function changeToTheme(btn) {
    const btns = [dayBtn, weekBtn, monthBtn];

    for (const btn of btns) { 
        btn.classList.remove('active');
    }

    btn.classList.add('active');
    main.dataset.theme = btn.id;
}

dayBtn.addEventListener('click', () => { 
    changeToTheme(dayBtn);
});

weekBtn.addEventListener('click', () => { 
    changeToTheme(weekBtn);
});

monthBtn.addEventListener('click', () => {
    changeToTheme(monthBtn);
 });