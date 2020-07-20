const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {

    console.log('Connected correctly to server');

    // var newDish =
    Dishes.create({
        name: 'Uthappizza',
        description: 'test'
    })
    .then((dish) => {
        console.log(dish);

        return Dishes.findByIdAndUpdate(dish._id, {
            //updating(dish_id the dish we have inserted and modify it)
            $set: { description: 'Updated test'}
            //modifying the dish we have jz inserted
        },{ 
            new: true //once the update of dish is complete ,it will return the updated dish
        })
        .exec();
    })
    .then((dish) => {
        console.log(dish);
//insert comments into the dish ie comments is field in dish ie push in array of comments Schema
        dish.comments.push({
            rating: 5,
            comment: 'I\'m getting a sinking feeling!',
            author: 'Leonardo di Carpaccio'
        });

        return dish.save();// save after modifying dish
    })
    .then((dish) => {
        console.log(dish); // modified dish

        return Dishes.remove({});
    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });
});


    // newDish.save()
    //     .then((dish) => {
    //         console.log(dish);

    //         return Dishes.find({});
    //     })
//         .then((dishes) => {
//             console.log(dishes);

//             return Dishes.remove({});
//         })
//         .then(() => {
//             return mongoose.connection.close();
//         })
//         .catch((err) => {
//             console.log(err);
//         });
