
var express = require('express');
var axios = require('axios');
var cheerio = require('cheerio');
var ejs = require("ejs");
var bodyparser = require('body-parser');
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
   hosts: [ 'http://elastic:changeme@localhost:9200']
});

var app = express();
app.engine('ejs', ejs.renderFile);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
// =============== Get Shoes =================== //
// ============================================= //
app.get('/',function(req,res) {
    res.render('test.ejs', {title: 'Test Page', content: 'this is test.'});
});

app.post('/data',function(req,res){
    const response = client.search({
        index: 'shoes',
        type: 'nike',
        body: {
          query: {
            match: {
              "shoes_desc": req.body.search
            }
          }
        }
      }).then((data)=>{
          list = data.hits.hits;
            res.send(list);
      })
      console.log(req.body.search)
})
// ===============  Server  ================== //
// =========================================== //
app.listen(3300,function() {
    console.log('Server is running!');
});
// =========================================== //
// =========================================== //
