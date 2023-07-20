/**
 * title : practise row node js 
 * author:Mahedi Hassan
 * des : practise row node js 
 */


// here is the all core modules

const http = require("http");

const fs = require("fs");

// handle reqres from the helper folder

const { ReQResHandler } = require("./helpers/reqres")


// here is the all core modules

// here is module sca

const app = {

};

app.config = {
    port: 3000
};

app.createserver = () => {

    const server = http.createServer(app.handleReqRes);


    server.listen(app.config.port, () => {
        console.log(`server is running on port ${app.config.port}`);
    });


};

app.handleReqRes = ReQResHandler;

app.createserver();