

const expenses= [{
        id:'1',
        description:'Gum',
        note:'',
        amount: 195 ,
        createdAt: 0
    }, {
        id:'2',
        description:'Rent',
        note:'',
        amount: 19050 ,
        createdAt: moment(0).subtract(4,'days').valueOf()
    }, {
        id:'3',
        description:'Credit Car',
        note:'',
        amount: 3000 ,
        createdAt: moment(0).add(4,'days').valueOf()
    }
]

const getExpensesTotal = (arg) =>{
    let sum = 0;
    arg.map(({amount}) => {
        return sum += amount
    })
    return sum
}

const total = getExpensesTotal(expenses);
console.log(total);