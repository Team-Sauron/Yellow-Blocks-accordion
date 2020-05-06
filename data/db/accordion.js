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
            des9: String,
            des10: String,
            des11: String,
            des12: String,
            img10: String,
            img11: String,
            img12: String,
            img13: String,
            img14: String,
            img15: String,
            img16: String,
            img17: String,
            img18: String,
            img19: String,
            img20: String,
            des13: String,
            des14: String,
            des15: String,
            des16: String,
            des17: String,
            des18: String,
            des19: String,
            des20: String,
            des21: String,
            des22: String,
            des23: String,
            des24: String,
            des25: String,
            des26: String,
            des27: String,
            des28: String,
            des29: String,
            des30: String,
            des31: String,
            des32: String,
            des33: String,
            des34: String,
            des35: String,
            des36: String,
            des37: String,
            des38: String,
            des39: String,
            des40: String,
            des41: String,
            des42: String,
            des43: String,
            des44: String,
            des45: String,
            des46: String,
            des47: String,
            des48: String,
            des49: String,
            des50: String,
            des51: String,
            des52: String
        }
    });

const Features = mongoose.model('accordion', accordionSchema);

/*Features.findOne({ 'features.id' : '2'}, function (err, feature) {
    if(err) console.log('errordatA');
    console.log('%s is the id', feature)
})*/

module.exports = Features;
