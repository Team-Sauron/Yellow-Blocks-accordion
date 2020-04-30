var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accordionSchema = new Schema({

    features:   {
        topImage: { img: String,
                   description: String},
    
        phraseVideo: { img: String,
                    description: String},

        middleFeatures: {title: String,
                        subtitle: String,
                        description: String},
        bottomImg: { img: String,
                    desTitle: String,
                    description: String},
        bottomVid: String,
                },

    specifications: {   top: {  img: String,
                                title: String,
                                launch: String,
                                year: Number
                            },

                        middle: { img1: String, des1: String},
                                { img2: String, des1: String},
                                { img3: String, des1: String},
                                { img4: String, des1: String},
                                { img5: String, des1: String},
                                { img6: String, des1: String}    
                    },

    delnReturns: {
        line1: String,
        line2: String,
        line3: String,
        line4: String,
        line5: String
                }
    });
    