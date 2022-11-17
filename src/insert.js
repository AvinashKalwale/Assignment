const {MongoClient} = require('mongodb')
const url= 'mongodb://localhost:27017';

let dbConnect = require("./mongodb");
let insert = async () => {
  let db = await dbConnect();
  let result = await db.insert([
    {
      name: "Avinash",
      age: 22,
    },
    {
      name: "ramesh",
      age: 23,
    },
  ]);
  console.log("successfuly added");
};
insert();
