//schema and model for dishes collection
const mongoose =require('mongoose');
const Schema = mongoose.Schema;


// adding sub doc and see how it can be stored in dtabase
var commentSchema= new Schema({
    //to store comments about the dish
    rating:  {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment:  {
        type: String,
        required: true
    },
    author:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const dishSchema = new Schema({ //defining schema
    name: {
        type: String,
        required: true, //every document will have named as required field
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    comments:[commentSchema] //to be able to store  arry of type commentSchema in dishesSchema
},
{

timestamps: true
});
var Dishes =mongoose.model('Dish',dishSchema);

module.exports=Dishes;