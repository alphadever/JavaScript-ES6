/* Ex1 ******************************************** */
var images = [{
        height: 10,
        width: 30
    },
    {
        height: 20,
        width: 90
    },
    {
        height: 54,
        width: 32
    }
];

var areas = images.map((image) => {
    return (image.height * image.width);
});
console.log(areas);

/* Ex2 ******************************************** */
var Cars = [{
    model: 'BMW',
    price: '30000'
}, {
    model: 'Audi',
    price: '95000'
}];

var price = Cars.map((car) => {
    return car.price;
});

/* Ex3 ******************************************** */
var images = [{
        height: '34px',
        width: '39px'
    },
    {
        height: '54px',
        width: '19px'
    },
    {
        height: '83px',
        width: '75px'
    },
];

var heights = images.map((image) => {
    return image.height;
});

/* Ex4 ******************************************** */
var trips = [{
        distance: 34,
        time: 10
    },
    {
        distance: 90,
        time: 50
    },
    {
        distance: 59,
        time: 25
    }
];

var speeds = trips.map((trip) => {
    return time * distance;
});

/* Ex5 ******************************************** */
var trips = [{
        distance: 34,
        time: 10
    },
    {
        distance: 90,
        time: 50
    },
    {
        distance: 59,
        time: 25
    }
];
var pluck = (array, property) => {
    return array.map((item) => {
        return item[property];
    });
};
var result = pluck(trips, 'time');
console.log(result);
