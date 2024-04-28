
const fs = require('fs');

//readfile

//readfile in async mode
fs.readFile('abc.txt',(error, data)=>{
    if(error){
        console.log("error");
        console.log(error);
    }else{
        console.log(data.toString());
    }
});

console.log("terminated"); //here terminated will print first because we are use the readFile async so it willnot for exection of method

//for readFile in sync mode
//fs.readFileSync();


//writefile using async mode
let content = "write the content from nodejs file to simple text file, I want to add more data..."

fs.writeFile("write.txt",content,(error) =>{
    if(error){
        console.log("there is error while writing");
        console.log(error);
    }else{
        console.log("write file saved");
    }

});


//appendfile using async method
let data = "Adding new data to abc file using node js append method"
fs.appendFile('abc.txt',data,(error)=>{

    if(error){
        console.log("there is error"+error);
    }
    else{
        console.log("append file saved");
    }
});


//deletefile

fs.unlinkSync("abc.txt",(err)=>{
    if(err){
        console.log("there is error while deleting file" + err);
    }
    else{
        console.log("file deleted successfully");
    }
})

