var collection=require('../config/collections')
var db=require('../config/connection')
module.exports={
    addproduct:(product,callback)=>{
        console.log(product);
        db.get().collection('product').insertOne(product).then((data)=>{
            
            callback(data.ops[0]._id)

        })
    },
    getallproduct:()=>{
        return new Promise(async(resolve,reject)=>{
            let products=await db.get().collection('product').find().toArray()
            resolve(products)
        })
    }

}