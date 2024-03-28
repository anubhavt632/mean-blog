import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import User from '../models/user.model.js';

export const test = (req, res) => {
    res.json({ message: 'API is working!' });
};

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, 'You are not allowed to update this user'));
    }

    try {
        // Check if password is provided and meets requirements before hashing
        if (req.body.password) {
            if (req.body.password.length < 6) {
                return next(errorHandler(400, 'Password must be at least 6 characters'));
            }
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        // Prepare update object based on provided fields
        const updateFields = {};
        if (req.body.username) {
            if (req.body.username.length < 7 || req.body.username.length > 20) {
                return next(errorHandler(400, 'Username must be between 7 and 20 characters'));
            }
            if (req.body.username.includes(' ')) {
                return next(errorHandler(400, 'Username cannot contain spaces'));
            }
            if (req.body.username !== req.body.username.toLowerCase()) {
                return next(errorHandler(400, 'Username must be lowercase'));
            }
            if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
                return next(errorHandler(400, 'Username can only contain letters and numbers'));
            }
            updateFields.username = req.body.username;
        }

        if (req.body.email) {
            // Validate email format if necessary
            updateFields.email = req.body.email;
        }

        if (req.body.profilePicture) {
            // Handle profile picture update if necessary
            updateFields.profilePicture = req.body.profilePicture;
        }

        if (req.body.password) {
            // Only update password if a new password is provided
            updateFields.password = req.body.password;
        }

        // Update user with the constructed update object
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, { $set: updateFields }, { new: true });

        // Exclude password from the response
        const { password, ...rest } = updatedUser._doc;
        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};
