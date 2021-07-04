const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
	email:{
        type:String,
        require:true
    },
    username: {
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true
    },
    goal :{
        type:Number,
        require:true
    },
    connection:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "studentSchema"
    },
    created_at:{
        type:Date,
        require:true,
        default:Date.now()
    },
    active:{
        type:Boolean,
        require:true,
        default:true
        
    },
    verified:{
        type:Boolean,
        require:true,
        default:false
    }
})

module.exports = mongoose.model("students",studentSchema)