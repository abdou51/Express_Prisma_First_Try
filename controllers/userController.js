import prisma from '../DB/db.config.js'



export const createUser = async (req, res) =>{
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

export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                todos: true,
            },
        });
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
