const { myFileWriter, myFileReader, myFileDeleter, myFileUpdater } = require(".");

myFileWriter('input.txt','Avinash');
myFileReader('input.txt').then(data => { console.log(data) });
myFileUpdater('input.txt' , " is a Developer")
// myFileDeleter('input.txt')
