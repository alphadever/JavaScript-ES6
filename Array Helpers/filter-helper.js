/* Ex1 ******************************************** */
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
// >50
var filteredNumbers = numbers.filter((number) => {
    return (number > 50);
});
console.log(filteredNumbers);

/* Ex2 ******************************************** */
var users = [{
        id: 1,
        admin: true
    },
    {
        id: 2,
        admin: false
    },
    {
        id: 3,
        admin: false
    },
    {
        id: 4,
        admin: false
    },
    {
        id: 5,
        admin: true
    },
];

var filteredUsers = users.filter((user) => {
    return user.admin;
});
console.log(filteredUsers);

/* Ex3 ******************************************** */
var users = [{
        id: 1,
        admin: true
    },
    {
        id: 2,
        admin: false
    },
    {
        id: 3,
        admin: false
    },
    {
        id: 4,
        admin: false
    },
    {
        id: 5,
        admin: true
    },
];

var reject = (array, iteratorFunction) => {
    return array.filter(item => {
        return !iteratorFunction(item);
    });
};

var result = reject(users, (item) => {
    return item.id == 3;
});


console.log(result);