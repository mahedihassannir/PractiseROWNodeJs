/* name:reqResHandler
 * description:reqResHandler
 * author : "Mahedi Hassan"
 */


// core modules

const url = require("url")

const { StringDecoder } = require("string_decoder");



const handler = {

};


handler.ReQResHandler = (req, res) => {



    /**
     * 
     * description
     *what we crete here

     first we find the url 
     them main side paht 

     then reimed path

     then metod delete post pathch update

     query

     header
     total =6 creating 

     * 
     */

    // main path
    const parseUrl = url.parse(req.url, true);

    // side path

    const path = parseUrl.pathname;

    // trimed path
    const trimedpath = path.replace(/^\/+|\/+$/g, '')

    // method here
    const method = req.method.toLowerCase();

    // query
    const query = parseUrl.query;


    // headres
    const header = req.headers;

    // here is the buffer
    const decoder = new StringDecoder('utf-8');

    let realData = '';

    req.on('data', (buffer) => {
        realData += decoder.write(buffer)
    })
    req.on('end', () => {
        realData += decoder.end();

        console.log(realData);

        // basic res handle

        res.end("yes our server is created successfully and its work");


    })





};


module.exports = handler;

