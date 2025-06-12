import { Schema, model, models } from 'mongoose';

const section2Schema = new Schema({
    name: { type: String, required: true },
});

const User = models.User || model('User', section2Schema);

export default User;