function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../../";
    }).catch(() => {
        alert("Erro ao fazer logout!");
    })
}

findTransactions()

function findTransactions() {
    setTimeout(() => {
        addTransactionsToScreen(fakeTransactions)
    }, 1000);
}

function addTransactionsToScreen(transactions) {
    const orderedList = document.getElementById('transactions');

    transactions.forEach(element => {
        const li = document.createElement('li');
        li.classList.add(element.type);

        const data = document.createElement('p');
        data.innerHTML = formatDate(element.date);
        li.appendChild(data);

        const money = document.createElement('p');
        money.innerHTML = formatMoney(element.money);
        li.appendChild(money);

        const type = document.createElement('p');
        type.innerHTML = element.transactionType;
        li.appendChild(type);

        if (element.description) {
            const description = document.createElement('p');
            description.innerHTML = element.description;
            li.appendChild(description);
        }

        orderedList.appendChild(li);
    });
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('pt');
}

function formatMoney(money) {
    return `${money.currency} ${money.value.toFixed(2)}`;
}

const fakeTransactions = [
    {
        type: 'expense',
        date: '2023-01-1',
        money: {
            currency: 'R$',
            value: 759.36
        },
        transactionType: 'Supermercado'
    },

    {
        type: 'income',
        date: '2023-01-10',
        money: {
            currency: 'R$',
            value: 1500
        },
        transactionType: 'Salário',
        description: 'Empresa A'
    },

    {
        type: 'expense',
        date: '2023-01-4',
        money: {
            currency: 'EUR',
            value: 10
        },
        transactionType: 'Transporte',
        description: 'Metrô ida e volta'
    },

    {
        type: 'expense',
        date: '2023-01-17',
        money: {
            currency: 'USD',
            value: 753.16
        },
        transactionType: 'Aluguel',
        description: 'Moradia'
    },

    {
        type: 'expense',
        date: '2023-01-1',
        money: {
            currency: 'R$',
            value: 759.36
        },
        transactionType: 'Supermercado'
    },

    {
        type: 'income',
        date: '2023-01-10',
        money: {
            currency: 'R$',
            value: 1500
        },
        transactionType: 'Salário',
        description: 'Empresa A'
    },

    {
        type: 'expense',
        date: '2023-01-4',
        money: {
            currency: 'EUR',
            value: 10
        },
        transactionType: 'Transporte',
        description: 'Metrô ida e volta'
    },

    {
        type: 'expense',
        date: '2023-01-17',
        money: {
            currency: 'USD',
            value: 753.16
        },
        transactionType: 'Aluguel',
        description: 'Moradia'
    },

    {
        type: 'expense',
        date: '2023-01-1',
        money: {
            currency: 'R$',
            value: 759.36
        },
        transactionType: 'Supermercado'
    },

    {
        type: 'income',
        date: '2023-01-10',
        money: {
            currency: 'R$',
            value: 1500
        },
        transactionType: 'Salário',
        description: 'Empresa A'
    },

    {
        type: 'expense',
        date: '2023-01-4',
        money: {
            currency: 'EUR',
            value: 10
        },
        transactionType: 'Transporte',
        description: 'Metrô ida e volta'
    },

    {
        type: 'expense',
        date: '2023-01-17',
        money: {
            currency: 'USD',
            value: 753.16
        },
        transactionType: 'Aluguel',
        description: 'Moradia'
    }


]
