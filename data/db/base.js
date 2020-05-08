const faker = require('faker');
const db = require('./accordion.js');


// arrays of imges(urls):
const arrimg1 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
const arrimg2 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
const arrimg3 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
const arrimg4 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
const arrimg5 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
const arrimg6 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
const arrimg7 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
const arrimg8 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
const arrimg9 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
const arrimg10 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
const arrimg11 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
const arrimg12 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
const arrimg13 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
const arrimg14 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
const arrimg15 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
const arrimg16 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
const arrimg17 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
const arrimg18 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
const arrimg19 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];

// arrays w/videos(10urls):
const arrvid1 = ['https://youtu.be/JGa0E10w8oI', 'https://youtu.be/LJP1DphOWPs', 'https://youtu.be/MUhR-lWJDuk', 'https://youtu.be/ZXareiya3zI?list=UUPLAYER_TimeWarnerCable', 'https://youtu.be/31-hLbF-WRE'];
const arrvid2 = ['https://youtu.be/JGa0E10w8oI', 'https://youtu.be/LJP1DphOWPs', 'https://youtu.be/MUhR-lWJDuk', 'https://youtu.be/ZXareiya3zI?list=UUPLAYER_TimeWarnerCable', 'https://youtu.be/31-hLbF-WRE'];


function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function takeDot(string) {
  if(string[string-1] === ".") {
    string = string.slice(0,-1);
  }
  return string
}


function featfunc() {
  
  let i = 0;
  while (i < 10) {
    const features = new db();
    //db.collection.remove({})
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
    features.features.img1 = arrimg1[i % 5];
    features.features.img2 = arrimg2[i % 5];
    features.features.img3 = arrimg3[i % 5];
    features.features.img4 = arrimg4[i % 5];
    features.features.img5 = arrimg5[i % 5];
    features.features.img6 = arrimg6[i % 5];
    features.features.img7 = arrimg7[i % 5];
    features.features.img8 = arrimg8[i % 5];
    features.features.img9 = arrimg9[i % 5];
    features.features.vid1 = arrvid1[i % 5];
    features.features.vid2 = arrvid2[i % 5];
    features.features.t5 = `${faker.lorem.words(nb_words = 9, variable_nb_words = true).toUpperCase()}`;
    features.features.sub8 = `${faker.lorem.words(nb_words = 3, variable_nb_words = true).toUpperCase()}-${faker.random.number()}`;
    features.features.sub9 = `${capitalize(faker.lorem.word())} ${capitalize(faker.lorem.word())}`;
    features.features.year = `${faker.random.number()}`;
    features.features.item1.des9 = `${faker.random.number()} MB`;
    features.features.item1.des10 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item1.des11 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    features.features.item1.des12 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    features.features.item1.img10 = arrimg10[i % 5];
    features.features.item2.img11 = arrimg11[i % 5];
    features.features.item3.img12 = arrimg12[i % 5];
    features.features.item4.img13 = arrimg13[i % 5];
    features.features.item5.img14 = arrimg14[i % 5];
    features.features.item6.img15 = arrimg15[i % 5];
    features.features.item7.img16 = arrimg16[i % 5];
    features.features.item8.img17 = arrimg17[i % 5];
    features.features.item9.img18 = arrimg18[i % 5];
    features.features.item10.img19 = arrimg19[i % 5];
    features.features.item2.des13 = `${faker.random.number()} MB`;
    features.features.item2.des14 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item2.des15 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    features.features.item2.des16 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    features.features.item3.des17 = `${faker.random.number()} MB`;
    features.features.item3.des18 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item3.des19 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    features.features.item3.des20 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    features.features.item4.des21 = `${faker.random.number()} MB`;
    features.features.item4.des22 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item4.des23 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    features.features.item4.des24 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    features.features.item5.des25 = `${faker.random.number()} MB`;
    features.features.item5.des26 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item5.des27 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    features.features.item5.des28 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    features.features.item6.des29 = `${faker.random.number()} MB`;
    features.features.item6.des30 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item6.des31 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    features.features.item6.des32 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    features.features.item7.des33 = `${faker.random.number()} MB`;
    features.features.item7.des34 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item7.des35 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    features.features.item7.des36 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    features.features.item8.des37 = `${faker.random.number()} MB`;
    features.features.item8.des38 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item8.des39 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    features.features.item8.des40 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    features.features.item9.des41 = `${faker.random.number()} MB`;
    features.features.item9.des42 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item9.des43 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    features.features.item9.des44 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    features.features.item10.des45 = `${faker.random.number()} MB`;
    features.features.item10.des46 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.features.item10.des47 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    features.features.item10.des48 = `${faker.lorem.words(nb_words = 20, variable_nb_words = true)}`;
    
    features.features.des49 = `${faker.lorem.word().toUpperCase()} ${faker.lorem.sentence(nb_words = 16, variable_nb_words = true)}`;
    features.features.des50 = `${faker.lorem.word().toUpperCase()} ${faker.lorem.sentence(nb_words = 16, variable_nb_words = true)}`;
    features.features.des51 = `${faker.lorem.word().toUpperCase()} ${faker.lorem.sentence(nb_words = 16, variable_nb_words = true)}`;
    features.features.des52 = `${faker.lorem.word().toUpperCase()} ${faker.lorem.sentence(nb_words = 16, variable_nb_words = true)}`;
    
    i += 1;
    features.save((err,res)=>{
      if (err) {
        console.log('error')
      } else {
        console.log('datasaved')
      }
    })  
  }

  
}

featfunc()
