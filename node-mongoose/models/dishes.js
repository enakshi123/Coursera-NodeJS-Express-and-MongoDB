//schema and model for dishes collection
const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({ //defining schema
    name: {
        type: String,
        required: true, //every document will have named as required field
        unique: true
    },
    description: {
        type: String,
        required: true
    }
},
{

timestamps: true
});
var Dishes =mongoose.model('Dish',dishSchema);

module.exports=Dishes;