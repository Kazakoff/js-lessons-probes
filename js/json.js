/* JSON != Object
{
  name: "Вася",       // ошибка: ключ name без кавычек!
  "surname": 'Петров',// ошибка: одинарные кавычки у значения 'Петров'!
  "age": 35,           // .. а тут всё в порядке.
  "isAdmin": false    // и тут тоже всё ок
}

*/
var str = '{"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}';

var event = JSON.parse(str, function(key, value) {
  if (key == "date") return new Date(value);
  return value;
});

alert(event.date.getDate());

var room = {
  number: 23,
  occupy: function() {
    alert(this.number);
  }
};

var event = {
  title: "Конференция",
  date: new Date(Date.UTC(2014, 0, 1)),
  room: room
};

alert(JSON.stringify(event));
/*
    {
      "title":"Конференция",
      "date":"2014-01-01T00:00:00.000Z",  // (1)
      "room": {"number":23}               // (2)
    }
  */

var user = {
  name: "Вася",
  age: 25,
  window: window
};

var str = JSON.stringify(user, function(key, value) {
  if (key == "window") return undefined;
  return value;
});

alert(str); // {"name":"Вася","age":25}
