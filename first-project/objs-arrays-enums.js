"use strict";
let favoriteActivies;
favoriteActivies = ['Pernille'];
console.log(favoriteActivies);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["STUDENT"] = 1] = "STUDENT";
    Role[Role["TEACHER"] = 2] = "TEACHER";
})(Role || (Role = {}));
