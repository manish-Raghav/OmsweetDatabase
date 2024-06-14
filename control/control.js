const productmoddele = require("../Moddele/Products");
const Login =require("../Moddele/Login")






const signup = async(req ,res) =>{
    const name = req.body.name;
    const Lname = req.body.lstname;
    const email = req.body.email;
    const pass = req.body.pass;

    if(!name || !Lname || !email || !pass)
    {
      
    }


}

const login = async(req ,res) =>{

}




const getdata =async (req,res)=>{
    const alldata = await productmoddele.find();
    res.status(200).json(alldata);
//    res.send("all data is here")
}


const getchocolate = async (req ,res) =>{
    const alldata = await productmoddele.find({product_name:"chocolates"});
    res.status(200).json(alldata);
}
const getsweet = async (req ,res) =>{
    const alldata = await productmoddele.find({product_name:"sweet"});
    res.status(200).json(alldata);
}
const getfood = async (req ,res) =>{
    const alldata = await productmoddele.find({product_name:"food"});
    res.status(200).json(alldata);
}
const getbak = async (req ,res) =>{
    const alldata = await productmoddele.find({product_name:"Bakries"});
    res.status(200).json(alldata);
}



const putdata = async (req,res) =>{
    //   console.log(req.file,req.body);
  console.log('all data started from heree');
    
      const  product_name = req.body.pro; 
      const Name = req.body.nm;
      const quantity = req.body.qnt;
      const price = req.body.ps;
      const discount = req.body.ds;
      const  description = req.body.dscr;
       const imgdata = req.file.path;
       const img1 = imgdata.substr(7);



    

    
       
    const newUser = new productmoddele({  
       
         product_name,
          Name,
          quantity,
          price,
          discount,
          description,
          img1,
        
      });
    
      await newUser.save();
       return res.status(200).json(newUser);
}
module.exports ={getdata , putdata,getchocolate ,getsweet ,getfood ,getbak,signup ,login};