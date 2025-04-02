const User = require('../models/userModel');

exports.listAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        const usersWithId = users.map(user => ({
            id: user._id.toString(),
            name: user.name,
            email: user.email
        }));

        res.set('Content-Range', `users 0-${users.length - 1}/${users.length}`);
        res.set('Access-Control-Expose-Headers', 'Content-Range');
        
        // 🚨 React Admin + ra-data-simple-rest espera um array direto aqui!
        res.status(200).json(usersWithId);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();

        // Respondendo diretamente com os dados (sem "data")
        res.status(200).json({
            id: savedUser._id.toString(), 
            name: savedUser.name,
            email: savedUser.email
        });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ error: 'E-mail já está em uso.' });
        } else {
            res.status(400).json({ error: error.message });
        }
    }
};




exports.getUser = async (req, res) => {
    console.log("🔍 Buscando usuário com ID:", req.params.id);
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            console.log("❌ Usuário não encontrado.");
            return res.status(404).json({ message: 'User not found' });
        }

        console.log("✅ Usuário encontrado:", user);
        res.status(200).json({
            id: user.id.toString(), 
            name: user.name,
            email: user.email
        });
    } catch (error) {
        console.error("🚨 Erro ao buscar usuário:", error);
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

        res.status(200).json({
            id: user.id.toString(), 
            name: user.name,
            email: user.email
        });
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
