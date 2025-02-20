```javascript
// Incorrect usage of $inc operator with a string value
db.collection.updateOne({name: "John"}, {$inc: {age: "1"}});
```