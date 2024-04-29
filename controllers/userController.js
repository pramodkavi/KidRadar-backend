const UserModel = require("../models/user");

exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json({ data: users });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Failed to fetch users" });
    }
    };

exports.getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user
        = await UserModel.findById(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ data: user });
    }
    catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Failed to fetch user" });

    }
}

exports.createUser = async (req, res) => {
    try {
        const userData = req.body;
        const user = new UserModel(userData);
        const savedUser = await user.save();
        res.status(201).json({ id: savedUser._id });
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).json({ error: "Failed to save user" });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;
        const updatedUser = await UserModel.findByIdAndUpdate(id, updateData, {
            new: true,
        });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ data: updatedUser });
    }
    catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Failed to update user" });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUser = await UserModel.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: "Failed to delete user" });
    }
}

