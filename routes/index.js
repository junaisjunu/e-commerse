var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products =[
  {
    name:"samsung",
    category:"mobile",
    discription:"good phone",
    image :"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-5g-r1.jpg"
    

  },
  {
    name:"oppo",
    category:"mobile",
    discription:"good phone",
    image :"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-5g-r1.jpg"
    

  },
  {
    name:"iphone",
    category:"mobile",
    discription:"good phone",
    image :"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-5g-r1.jpg"
    

  },{
    name:"lenova",
    category:"mobile",
    discription:"good phone",
    image :"https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-5g-r1.jpg"
    

  }
  
  ]
  res.render('index', {products});
});

module.exports = router;
