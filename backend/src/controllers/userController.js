const User = require('../models/userModel');

exports.listAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        
        const usersWithId = users.map(user => ({
            id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
        }));

        res.set('Content-Range', `users 0-${users.length - 1}/${users.length}`);
        res.set('Access-Control-Expose-Headers', 'Content-Range');
        res.status(200).json(usersWithId);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();

        // Converte para objeto simples
        const userObject = savedUser.toObject();

        // Adiciona o campo 'id'
        userObject.id = userObject._id;
        delete userObject._id; // opcional, se não quiser enviar _id duplicado
        delete userObject.__v; // remove versão do mongoose

        res.status(201).json({ data: userObject });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ error: 'E-mail já está em uso.' });
        } else {
            res.status(400).json({ error: error.message });
        }
    }
};


exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const userObject = user.toObject();
        userObject.id = userObject._id;
        delete userObject._id;
        delete userObject.__v;

        res.status(200).json({ data: userObject });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const userObject = user.toObject();
        userObject.id = userObject._id;
        delete userObject._id;
        delete userObject.__v;

        res.status(200).json({ data: userObject });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ data: { id: user._id } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
