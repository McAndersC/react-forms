import mongoose, {Schema} from 'mongoose';

const contactScheme = new Schema( {

    name : {type: String},
    email : {type: String, unique: true},
    age : {type: Number},
    message : {type: String}

} );

export default mongoose.models.contact || mongoose.model('contact', contactScheme);

