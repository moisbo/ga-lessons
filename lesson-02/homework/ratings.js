var ages = [1, 23, 8, 12, 16];
var ratings = ['G', 'PG', 'M', 'MA'];
var minAgeForRating = [0, 9, 12, 15];

ages.forEach(function (age) {
    var allowed = minAgeForRating.filter(function (mafr) {      
        return mafr < age;
    });
    var rating = [];
    allowed.forEach(function (a, index) {
        rating.push(ratings[index]);
    });
    console.log("Age " + age + " is allowed to see " + rating);
});