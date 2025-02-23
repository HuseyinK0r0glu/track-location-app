const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        unique: true,
        required: true
    },
    password : {
        type: String,
        required: true 
    }
});

// it runs before saving a document to db
// we are using this for hashing 
// we use function and not the arrow function version because the user we are currently trying to save is available as "this" but in arrow functions "this" refers to the context of the file 

userSchema.pre('save', function(next) {
    const user = this;
    if(!user.isModified('password')){
        return next();
    }

    bcrypt.genSalt(10,(error,salt) => {
        if(error){
            return next(error);
        }

        bcrypt.hash(user.password , salt , (error,hash) => {
            if(error){
                return next(error);
            }
            user.password = hash;
            next();
        });
    });

});

userSchema.methods.comparePasswords = function(candidatePassword) {
    const user = this;
    return new Promise( (resolve,reject) => {
        bcrypt.compare(candidatePassword,user.password,(err,isMatched) => {
            if(err){
                return reject(err);
            }

            if(!isMatched){
                return reject(false);
            }

            resolve(true);
        });
    });
};

/// we dont export or import this because mongoose only needs this line for just once
/// if we import that this line is going to be executed again it will give error 
mongoose.model('User',userSchema);
