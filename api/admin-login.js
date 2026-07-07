export default async function handler(req,res){

if(req.method!=="POST"){

return res.status(405).end();

}

const{

username,
password

}=req.body;

if(

username===process.env.ADMIN_USERNAME&&

password===process.env.ADMIN_PASSWORD

){

return res.status(200).json({

success:true,

token:
Math.random()
.toString(36)
.substring(2)

});

}

return res.status(401).json({

success:false,

message:"Username atau password salah."

});

}
