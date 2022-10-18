const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand2', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection open!!')
    })
    .catch(err => {
        console.log('Oh no Error!!!!')
        console.log(err)
    })

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save().then(p => {
//     console.log(p)
// })
//     .catch(e => {
//         console.log(e)
//     })

const seedProducts = [
    {
        name: 'Berrys',
        price: 1.99,
        category: 'fruit'
    },
    {
        name: 'Cucumber',
        price: 0.99,
        category: 'vegetable'
    },
    {
        name: 'Watermelon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Cheese',
        price: 3.99,
        category: 'dairy'
    },
    {
        name: 'Milk',
        price: 1.59,
        category: 'dairy'
    },
    {
        name: 'Strawberries',
        price: 2.99,
        category: 'fruit'
    },
    {
        name: 'Asparagus',
        price: 4.99,
        category: 'vegetable'
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })