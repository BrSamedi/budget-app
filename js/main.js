let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;


startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || typeof (money) == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    countBtn.disabled = 0;
    optionalExpensesBtn.disabled = 0;
    expensesBtn.disabled = 0;
    checkSavings.disabled = 0;
    sumValue.disabled = 0;
    percentValue.disabled = 0;
});

expensesBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        let sum = 0;
        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;

            if ((typeof (a)) === 'string' && (typeof (a)) != 'null' && (typeof (b)) != 'null'
                && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
                sum += +b;
            } else {
                i = i - 1;
            }
        }
        expensesValue.textContent = sum;
    } else {
        expensesBtn.disabled = 1;
    }
});

optionalExpensesBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        for (let i = 0; i < optionalExpensesItem.length; i++) {
            let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    } else {
        optionalExpensesBtn.disabled = 1;
    }
});

countBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay <= 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        countBtn.disabled = 1;
        //daybudgetValue.textContent = "Произошла ошибка";
    }
});

//incomeItem.addEventListener('change', function () {
incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.budget != undefined) {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    } else {
        checkSavings.disabled = 1;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.budget != undefined) {
        if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;

            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    } else {
        sumValue.disabled = 1;
    }
});

percentValue.addEventListener('input', function () {
    if (appData.budget != undefined) {
        if (appData.savings == true) {
            let sum = +sumValue.value,
                percent = +percentValue.value;

            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    } else {
        percentValue.disabled = 1;
    }
});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
};

    // console.log("Наша программа включает в себя данные:");
    // for (let key in appData) {
    //     console.log('Свойство ' + key + ' имет значение ' + appData[key]);
    // }
