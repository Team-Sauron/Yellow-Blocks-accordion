const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/smego', {useNewUrlParser: true, useUnifiedTopology: true })

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

    const accordionSchema = new mongoose.Schema({
        features: {
            id: Number,
            t1: String,
            t2: String,
            t3: String,
            t4: String,
            des1: String,
            des2: String,
            des3: String,
            des4: String,
            des5: String,
            des6: String,
            des7: String,
            des8: String,
            des49: String,
            des50: String,
            des51: String,
            des52: String,
            sub1: String,
            sub2: String,
            sub3: String,
            sub4: String,
            sub5: String,
            sub6: String,
            sub7: String,
            img1: String,
            img2: String,
            img3: String,
            img4: String,
            img5: String,
            img6: String,
            img7: String,
            img8: String,
            img9: String,
            vid1: String,
            vid2: String,
            t5: String,
            sub8: String,
            sub9: String,
            year: Number,
            item1: {
                A: String,
                B: String,
                C: String,
                D: String,
                E: String,                
                },
            item2: {
                A: String,
                B: String,
                C: String,
                D: String,
                E: String,
            },            
            item3: {
                A: String,
                B: String,
                C: String,
                D: String,
                E: String,
            },
            item4: {
                A: String,
                B: String,
                C: String,
                D: String,
                E: String,
            },            
            item5: {
                A: String,
                B: String,
                C: String,
                D: String,
                E: String,
            },            
            item6: {
                A: String,
                B: String,
                C: String,
                D: String,
                E: String,
            },
            item7: {
                A: String,
                B: String,
                C: String,
                D: String,
                E: String,
            },
            item8: {
                A: String,
                B: String,
                C: String,
                D: String,
                E: String,
            },
            item9: {
                A: String,
                B: String,
                C: String,
                D: String,
                E: String,
            },
            item10: {
                A: String,
                B: String,
                C: String,
                D: String,
                E: String,
            }         
            
            
            
            
        }
    });

const Features = mongoose.model('accordion', accordionSchema);

/*Features.findOne({ 'features.id' : '2'}, function (err, feature) {
    if(err) console.log('errordatA');
    console.log('%s is the id', feature)
})*/

module.exports = Features;
