const faker = require('faker');



var ranParagraph = faker.lorem.paragraphs()
var ranSentence = faker.lorem.sentence()
var ranWords = faker.lorem.words()
var ranWord = faker.lorem.word()
var ranNumber = faker.random.number()

var s3 = 0;
console.log(ranParagraph)
/*
//arrays of imges(45urls):
    var arrimg1 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
    var arrimg2 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
    var arrimg3 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
    var arrimg4 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
    var arrimg5 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
    var arrimg6 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
    var arrimg7 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
    var arrimg8 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
    var arrimg9 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
    
    var imgurl = [arrimg1,arrimg2,arrimg3,arrimg4,arrimg5,arrimg6,arrimg7,arrimg8,arrimg9]

//arrays w/videos(10urls):
    var arrvid1 = ['https://youtu.be/JGa0E10w8oI', 'https://youtu.be/LJP1DphOWPs', 'https://youtu.be/MUhR-lWJDuk', 'https://youtu.be/ZXareiya3zI?list=UUPLAYER_TimeWarnerCable', 'https://youtu.be/31-hLbF-WRE'];
    var arrvid2 = ['https://youtu.be/JGa0E10w8oI', 'https://youtu.be/LJP1DphOWPs', 'https://youtu.be/MUhR-lWJDuk', 'https://youtu.be/ZXareiya3zI?list=UUPLAYER_TimeWarnerCable', 'https://youtu.be/31-hLbF-WRE'];
    var vidurl = [arrvid1,arrvid2]

//data gen for features:

var featfunc = function() {
    var features = {
   
console.log(featfunc())

/*

'features': {
        'topimage': { 'img': arrimg1[i],
                    'description': ranParagraph()
                    },

        'phraseVideo': {  'phrase': ranSentence(),
                        'video': arrvid1[i]
                    },
    
        'middleFeatures': {   'title': ranSentence(),
                            'subtitles': ranWords(),
                            'description': ranSentence 
                            imag * 6
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

                    delnReturns: {
                        line1: ranSentence,
                        line2: ranSentence,
                        line3: ranSentence,
                        line4: ranSentence,
                        line5: ranSentence
                                }

*/



