import prisma from '../DB/db.config.js'


export const createTodo = async (req, res) => {
    const { title, completed, userId } = req.body;

    try {
        const newTodo = await prisma.todo.create({
            data: {
                title,
                completed,
                userId,
            },
        });

        res.status(201).json(newTodo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getTodos = async (req, res) => {
    try {
        const todos = await prisma.todo.findMany({
            include: {
                user: true,
            },
        });
        return res.status(200).json(todos);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
