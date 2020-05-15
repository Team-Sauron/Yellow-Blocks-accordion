const faker = require('faker');
const db = require('./accordion.js');


// arrays of imges(urls):

const arrimg = ['https://smegoaccordion.s3.us-east-2.amazonaws.com/1.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/2.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/3.jpg','https://smegoaccordion.s3.us-east-2.amazonaws.com/4.jpg','https://smegoaccordion.s3.us-east-2.amazonaws.com/5.jpg','https://smegoaccordion.s3.us-east-2.amazonaws.com/6.jpg','https://smegoaccordion.s3.us-east-2.amazonaws.com/7.jpg','https://smegoaccordion.s3.us-east-2.amazonaws.com/8.jpg','https://smegoaccordion.s3.us-east-2.amazonaws.com/9.jpg',
'https://smegoaccordion.s3.us-east-2.amazonaws.com/10.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/11.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/12.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/13.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/14.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/15.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/16.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/a.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/b.jpg',
'https://smegoaccordion.s3.us-east-2.amazonaws.com/c.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/d.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/e.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/f.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/g.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/h.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/i.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/j.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/k.jpg',
'https://smegoaccordion.s3.us-east-2.amazonaws.com/l.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/m.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/n.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/m.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/o.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/p.jpg', 'https://smegoaccordion.s3.us-east-2.amazonaws.com/q.jpg'];

// arrays w/videos(10urls):
const arrvid1 = ['https://youtu.be/JGa0E10w8oI', 'https://youtu.be/LJP1DphOWPs', 'https://youtu.be/MUhR-lWJDuk', 'https://youtu.be/ZXareiya3zI?list=UUPLAYER_TimeWarnerCable', 'https://youtu.be/31-hLbF-WRE'];
const arrvid2 = ['https://youtu.be/V8FbxlQe_XA?list=UUPLAYER_LittleBabyBum', 'https://youtu.be/kDFzVeGVlNQ?list=UUPLAYER_colorstv', 'https://youtu.be/9BnLbv6QYcA', 'https://youtu.be/u0Z7EPh8oLU', 'https://youtu.be/UK9_h5Iku64?list=UUPLAYER_cyriak'];


function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function featfunc() {
  db.collection.drop();
  let i = 0;
  while (i <= 100) {
    const features = new db();
    features.features.id = i;
    features.features.t1 = `${capitalize(faker.lorem.words(nb_words = 3, variable_nb_words = true))} ${capitalize(faker.lorem.words(nb_words = 6, variable_nb_words = true))}`;
    features.features.t2 = `${capitalize(faker.lorem.words(nb_words = 9, variable_nb_words = true))}`;
    features.features.t3 = faker.fake('{{lorem.word}} {{lorem.word}} {{lorem.word}} {{lorem.word}} {{lorem.word}} {{lorem.word}} {{lorem.word}} {{lorem.word}} {{lorem.word}} {{lorem.word}}');
    features.features.t4 = `${capitalize(faker.lorem.words(nb_words = 3, variable_nb_words = true))} ${capitalize(faker.lorem.words(nb_words = 3, variable_nb_words = true))}`;
    features.features.des1 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 9, variable_nb_words = true)}`;
    features.features.des2 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 9, variable_nb_words = true)}`;
    features.features.des3 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 9, variable_nb_words = true)}`;
    features.features.des4 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 9, variable_nb_words = true)}`;
    features.features.des5 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 9, variable_nb_words = true)}`;
    features.features.des6 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 9, variable_nb_words = true)}`;
    features.features.des7 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 9, variable_nb_words = true)}`;
    features.features.des8 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 9, variable_nb_words = true)}`;
    features.features.sub1 = `${capitalize(faker.lorem.words(nb_words = 3, variable_nb_words = true))}`;
    features.features.sub2 = `${capitalize(faker.lorem.words(nb_words = 3, variable_nb_words = true))}`;
    features.features.sub3 = `${capitalize(faker.lorem.words(nb_words = 3, variable_nb_words = true))}`;
    features.features.sub4 = `${capitalize(faker.lorem.words(nb_words = 3, variable_nb_words = true))}`;
    features.features.sub5 = `${capitalize(faker.lorem.words(nb_words = 3, variable_nb_words = true))}`;
    features.features.sub6 = `${capitalize(faker.lorem.words(nb_words = 3, variable_nb_words = true))}`;
    features.features.sub7 = `${capitalize(faker.lorem.sentence(nb_words = 3, variable_nb_words = true))}`;
    features.features.img1 = arrimg[i % arrimg.length];
    features.features.img2 = arrimg[(i + 1) % arrimg.length];
    features.features.img3 = arrimg[(i + 2) % arrimg.length];
    features.features.img4 = arrimg[(i + 3) % arrimg.length];
    features.features.img5 = arrimg[(i + 4) % arrimg.length];
    features.features.img6 = arrimg[(i + 5) % arrimg.length];
    features.features.img7 = arrimg[(i + 6) % arrimg.length];
    features.features.img8 = arrimg[(i + 7) % arrimg.length];
    features.features.img9 = arrimg[(i + 8) % arrimg.length];
    features.features.vid1 = arrvid1[i % 5];
    features.features.vid2 = arrvid2[i % 5];
    features.features.t5 = `${faker.lorem.words(nb_words = 9, variable_nb_words = true).toUpperCase()}`;
    features.features.sub8 = `${faker.lorem.words(nb_words = 3, variable_nb_words = true).toUpperCase()}-${faker.random.number()}`;
    features.features.sub9 = `${capitalize(faker.lorem.word())} ${capitalize(faker.lorem.word())}`;
    features.features.year = `${faker.random.number()}`;
    features.features.item1.B = `${faker.random.number()} MB`;
    features.features.item1.C = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item1.D = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.item1.E = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.item1.A = arrimg[(i + 9 )% arrimg.length];
    features.features.item2.A = arrimg[(i + 10) % arrimg.length];
    features.features.item3.A = arrimg[(i + 11) % arrimg.length];
    features.features.item4.A = arrimg[(i + 12) % arrimg.length];
    features.features.item5.A = arrimg[(i + 13) % arrimg.length];
    features.features.item6.A = arrimg[(i + 14) % arrimg.length];
    features.features.item7.A = arrimg[(i + 15) % arrimg.length];
    features.features.item8.A = arrimg[(i + 16) % arrimg.length];
    features.features.item9.A = arrimg[(i + 17) % arrimg.length];
    features.features.item10.A = arrimg[(i + 18) % arrimg.length];
    features.features.item2.B = `${faker.random.number()} MB`;
    features.features.item2.C = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item2.D = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.item2.E = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.item3.B = `${faker.random.number()} MB`;
    features.features.item3.C = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item3.D = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.item3.E = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.item4.B = `${faker.random.number()} MB`;
    features.features.item4.C = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item4.D = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.item4.E = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.item5.B = `${faker.random.number()} MB`;
    features.features.item5.C = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item5.D = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.item5.E = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.item6.B = `${faker.random.number()} MB`;
    features.features.item6.C = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item6.D = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.item6.E = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.item7.B = `${faker.random.number()} MB`;
    features.features.item7.C = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item7.D = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.item7.E = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.item8.B = `${faker.random.number()} MB`;
    features.features.item8.C = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item8.D = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.item8.E = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.item9.B = `${faker.random.number()} MB`;
    features.features.item9.C = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item9.D = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.item9.E = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.item10.B = `${faker.random.number()} MB`;
    features.features.item10.C = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item10.D = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.item10.E = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 10, variable_nb_words = true)}`;
    features.features.des49 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 16, variable_nb_words = true)}`;
    features.features.des50 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 16, variable_nb_words = true)}`;
    features.features.des51 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 16, variable_nb_words = true)}`;
    features.features.des52 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 16, variable_nb_words = true)}`;

    i += 1;
    features.save((err,res) => {
      if (err) {
        console.log('error');
      } else {
        console.log('datasaved');
      }
    });
  }
}

featfunc();
