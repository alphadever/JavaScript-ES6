/* Ex1 ******************************************** */
var Cars = ['BMW', 'Audi', 'Ferrari', 'Jaguar'];
// basic foreach
Cars.forEach((color) => {
    console.log(color);
});
/* Ex2 ******************************************** */
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
numbers.forEach((number) => {
    sum += number;
})
console.log(sum);
/* Ex3 ******************************************** */
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var sum = 0;
var adder = (number) => {
    sum += number;
}
numbers.forEach(adder);
console.log(sum);
/* Ex4 ******************************************** */
function handlePosts() {
    var posts = [
        { id: 23, title: 'Daily JS News' },
        { id: 52, title: 'Code Refactor City' },
        { id: 105, title: 'The Brightest Ruby' }
    ];

    posts.forEach((post) => {
        savePost(post[i]);
    });
}
/* Ex5 ******************************************** */
var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];
var areas = [];
images.forEach((image) => {
    areas.push(image.height * image.width);
});
console.log(areas);