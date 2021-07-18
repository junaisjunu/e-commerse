var express = require('express');
var router = express.Router();
var producthelper=require('../helper/product-helper')

/* GET users listing. */
router.get('/', function(req, res, next) {
producthelper.getallproduct().then((products)=>{
  console.log(products);
  res.render('admin/view-products',{admin:true,products});
})
 
});
router.get('/add-product',(req,res)=>{
  res.render('admin/add-product')

})
router.post('/add-product',(req,res)=>{
  
  console.log(req.files.image);
  producthelper.addproduct(req.body,(id)=>{
    let image=req.files.image
    image.mv('./public/images/'+id+'.jpg',(err,done)=>{
      if(!err)
{
  res.render("admin/add-product")
}   
 })
    
  })
})
module.exports = router;
