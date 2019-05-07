var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
//*******************************************************************************************************************//
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0); // 1x scale
var grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
//************************************************************************************************************//
function extend(first, second) {
    var result = {};
    for (var prop in first) {
        if (first.hasOwnProperty(prop)) {
            result[prop] = first[prop];
        }
    }
    for (var prop in second) {
        if (second.hasOwnProperty(prop)) {
            result[prop] = second[prop];
        }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (name) {
        console.log("Hello, I'm " + name + ".");
    };
    return ConsoleLogger;
}());
var jim = extend(new Person('Jim'), ConsoleLogger.prototype);
jim.log(jim.name);
//****************************************************************************************************************//
var someArray = [1, "string", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var entry = someArray_1[_i];
    console.log(entry); // 1, "string", false
}
//****************************************************************************************************************//
var entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];
// console.log(entrepreneurs[0]);
// console.log(entrepreneurs[0]['first']);
//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
var i;
var j;
for (i = 0; i < entrepreneurs.length; i++) {
    // console.log(entrepreneurs[i]);
    // console.log(entrepreneurs[i]['year']);
    if ((entrepreneurs[i]['year']) < 1980) {
        if ((entrepreneurs[i]['year']) >= 1970) {
            console.log(entrepreneurs[i]['first'] + " => " + entrepreneurs[i]['year'] + " ");
        }
    }
}
var new_array_first = [];
var new_array_last = [];
for (i = 0; i < entrepreneurs.length; i++) {
    // console.log(entrepreneurs[i]['first']);
    // console.log(entrepreneurs[i]['last']);
    new_array_first.push(entrepreneurs[i]['first']);
    new_array_last.push(entrepreneurs[i]['last']);
}
// Sors une array qui combien le prénom et le nom des entrepreneurs
var result = {};
new_array_first.forEach(function (key, i) { return result[key] = new_array_last[i]; });
console.log(result);
// Quel âge aurait chaque inventeur aujourd'hui ?
var age_this_year = [];
for (i = 0; i < entrepreneurs.length; i++) {
    // console.log(entrepreneurs[i]);
    age_this_year.push(2019 - entrepreneurs[i]['year']);
}
// console.log(age_this_year);
var result_current_age = {};
new_array_first.forEach(function (key, i) { return result_current_age[key] = age_this_year[i]; });
console.log(result_current_age);
var sort_by_last = [];
for (i = 0; i < entrepreneurs.length; i++) {
    // console.log(entrepreneurs[i]);
    sort_by_last.push(entrepreneurs[i]['last']);
}
console.log(sort_by_last.sort());
/**************************************************************************************************************/
var dossiers = [
    { value: "RECEPTION", label: 'Boite de réception', emails: [
            { id: 1, from: "Albator", to: "Rudy", subject: "Je reviens", date: new Date(2014, 2, 20, 15, 30), content: "de 1 :Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
            { id: 2, from: "Capitaine Flam", to: "Rudy", subject: "Bisous de l'espace", date: new Date(2014, 3, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." },
            { id: 3, from: "Pikachu", to: "Rudy", subject: "Pika pika !", date: new Date(2014, 2, 15, 16, 12), content: "Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Pika pika ? Piiiiika Chuuuuuu. Pika pika ! Pikachu. Pika pika pika." },
            { id: 4, from: "Barbapapa", to: "Rudy", subject: "Hulahup Barbatruc", date: new Date(2014, 2, 15, 14, 15), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
        ] },
    { value: "ARCHIVES", label: "Archives", emails: [
            { id: 5, from: "Candy", to: "Rudy", subject: "Bon anniversaire", date: new Date(2014, 2, 15, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
            { id: 6, from: "Hiro Nakamura", to: "Rudy", subject: "Konichiwa", date: new Date(2014, 2, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." },
            { id: 7, from: "Asuka Langley Soryu", to: "Rudy", subject: "Ca va chier", date: new Date(2014, 2, 15, 17, 50), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." }
        ] },
    { value: "ENVOYES", label: "Envoyés", emails: [
            { id: 8, from: "Rudy", to: "Albator", subject: "Bien la famille ?", date: new Date(2014, 2, 15, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
            { id: 9, from: "Rudy", to: "Capitaine Flam", subject: "Gloubiboulga Night", date: new Date(2014, 2, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
        ] },
    { value: "SPAM", label: "Courrier indésirable", emails: [
            { id: 10, from: "Rue du discount", to: "Rudy", subject: "Envie d'un nouveau frigo ?", date: new Date(2014, 2, 15, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
            { id: 11, from: "Sofinnoga", to: "Rudy", subject: "Besoin d'argent ?", date: new Date(2014, 2, 18, 16, 12), content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
        ]
    }
];
// let dossier_trier1 = [];
for (i = 0; i < dossiers.length; i++) {
    // console.log(dossiers[i]['emails']);
    var a = (dossiers[i]['emails']);
    // console.log(a);
    for (j = 0; j < a.length; j++) {
        // console.log(a[j]['id']);
        if (a[j]['id'] == 1) {
            console.log(a[j]['content']);
        }
    }
}
