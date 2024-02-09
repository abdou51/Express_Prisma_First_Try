import prisma from '../DB/db.config.js'



export const createUser = async (req, res) =>{
    console.log(req.body)
    const {name, email, password} = req.body


    if(!email || !password || !name){
        return res.status(400).json({message: "Please provide all the details"})
    }

    
    const findUser = await prisma.user.findUnique({
        where: {
            email: email
        }
    })


    if(findUser){
        return res.status(400).json({message: "User already exists"})
    }


    const createdUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    })
    return res.status(200).json({message: "User created successfully", data: createdUser})
}