var customerName = "Foo";
var card = { amount: 7, product: "Bar", unitprice: 42 };

var message = `Hello ${customerName},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`;

function get(strings, ...params) {
  strings.forEach(el => {
    console.log(el);
  });
  params.forEach(el => {
    console.log(el);
  });
}

get`http://example.com/foo?bar=${11 + 10}&quux=${20 * 2}`;

console.log(String.raw`foo\n${42}bar` === "foo\\n42bar");
