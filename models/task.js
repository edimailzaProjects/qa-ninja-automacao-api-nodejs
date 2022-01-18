import mongoose from 'mongoose';

let Task = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Oops! Title is required.'],
        unique: true //não permite cadastrar tarefa repetida
    },
    owner: {
        type: String,
        required: [true, 'Oops! Owner is required.']
    },
    done: Boolean
});

export default mongoose.model('Task', Task);