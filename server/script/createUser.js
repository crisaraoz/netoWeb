import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../mongodb/models/user.js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '../../server/.env' })

const run = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);

        const hashedPassword = await bcrypt.hash('1111', 10);

        const user = new User({
            username: '1111',
            password: hashedPassword
        });

        await user.save();

        console.log('Usuario creado:', user);
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.disconnect();
    }
};

run();
