import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: true
    },
    Age: {
        type: Number,
        require: true
        },
    CreatedAt: {
        type: Date,
        default: Date.now(),
    },
})
const users = mongoose.model('usuarios', userSchema)// usuarios = documento (tabela conectada)
export default users