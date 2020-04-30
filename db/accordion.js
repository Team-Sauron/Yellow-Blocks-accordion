const faker = require('faker')

var ranParagraph = faker.lorem.paragraphs()
var ranSentence = faker.lorem.sentence()
var ranWords = faker.lorem.words()
var ranWord = faker.lorem.word()
var ranNumber = faker.random.number()

//arrays of imges:
    var arrimg1 = [img1, img2, img3, img4, img5];
    var arrimg2 = [img1, img2, img3, img4, img5];
    var arrimg3 = [img1, img2, img3, img4, img5];
    var arrimg4 = [img1, img2, img3, img4, img5];
    var arrimg5 = [img1, img2, img3, img4, img5];
    var arrimg6 = [img1, img2, img3, img4, img5];
    var arrimg7 = [img1, img2, img3, img4, img5];
    var arrimg8 = [img1, img2, img3, img4, img5];
    var arrimg9 = [img1, img2, img3, img4, img5];

//arrays w/videos
    var arrvid1 = [vid1, vid2, vid3, vid4, vid5];
    var arrvid2 = [vid1, vid2, vid3, vid4, vid5];
console.log(ranNumber)

'features': {
        'topimage' : { 'img': arrimg1[i],
                    'description': ranParagraph()
                    },

        'phraseVideo': {  'phrase': ranSentence(),
                        'video': arrvid1[i]
                    },
    
        'middleFeatures': {   'title': ranSentence(),
                            'subtitles': ranWords(),
                            'description': ranSentence 
                    },

        'bottomimg': {'img': arrimg2[i],
                    'desTitle': ranSentence(),
                    'description': ranSentence(),
                    },

        'bottomvideo': arrvid2[i]
        }

    'Specifications': { 'top' : {   'img': arrimg3[i]
                                'title': ranSentence(),
                                'subtitle': ranWords(),
                                'launch' : faker.fake("{{lorem.word}} {{lorem.word}}");    
                                'year': ranNumber();            
                            }

                    'middle': {  {'img1': arrimg4[i];
                                'des1': { filesize: faker.fake("{{random.number}} {{lorem.word}}")}
                                }
                                {'img2': arrimg5[i];
                                'des2': { filesize: faker.fake("{{random.number}} {{lorem.word}}")}
                                }
                                {'img3': arrimg6[i];
                                'des3': { filesize: faker.fake("{{random.number}} {{lorem.word}}")}
                                }
                                {'img4': arrimg7[i];
                                'des4': { filesize: faker.fake("{{random.number}} {{lorem.word}}")}
                                }
                                {'img5': arrimg8[i];
                                 'des5': { filesize: faker.fake("{{random.number}} {{lorem.word}}")}
                                }
                                {'img6': arrimg9[i] 
                                 'des6': { filesize: faker.fake("{{random.number}} {{lorem.word}}")}
                                }
                            }
                    }



