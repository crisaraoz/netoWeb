import User from '../mongodb/models/user.js';

const getAllUsers = async (req, res) => {};

const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const userExists = await User.findOne({ username });
        if (userExists) {
            return res.status(400).json({ message: "El usuario ya existe" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,
            password: hashedPassword 
        });

        res.status(201).json(newUser);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    console.log("Login request received", req.body);
    try {
        const { username } = req.body;
        const user = await User.findOne({ username });
        console.log("user: ", user);
        console.log("username: ", username);

        if (user.username === username) {
            res.status(200).json(user);
        }else{
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserInfoByID = async (req, res) => {};

export {
    getAllUsers,
    createUser,
    getUserInfoByID,
    loginUser
}