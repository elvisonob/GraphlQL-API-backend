const mergeObjects = <T, U>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

const finalObject = mergeObjects({ name: 'Elvis' }, { age: 32 });

console.log(finalObject.age);

const practisingKeyOf = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return 'value' + obj[key];
};

practisingKeyOf({ name: 'elvis' }, 'name');

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem('Elvis');
textStorage.addItem('Abacha');
textStorage.removeItem('Elvisssss');
console.log(textStorage.getItems());
