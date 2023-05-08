"use strict";
const mergeObjects = (objA, objB) => {
    return Object.assign(objA, objB);
};
const finalObject = mergeObjects({ name: 'Elvis' }, { age: 32 });
console.log(finalObject.age);
const practisingKeyOf = (obj, key) => {
    return 'value' + obj[key];
};
practisingKeyOf({ name: 'elvis' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Elvis');
textStorage.addItem('Abacha');
textStorage.removeItem('Elvisssss');
console.log(textStorage.getItems());
