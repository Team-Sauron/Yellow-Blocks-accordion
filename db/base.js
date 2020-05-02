const faker = require('faker');


// arrays of imges(45urls):
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
const arrimg20 = ['https://cdn.pixabay.com/photo/2016/08/26/22/28/iron-gate-1623303_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/10/13/13/59/bananas-1737836_960_720.jpg', 'https://cdn.pixabay.com/photo/2016/05/09/11/09/tennis-1381230_960_720.jpg', 'https://cdn.pixabay.com/photo/2018/12/12/20/14/the-old-breakwater-3871577_960_720.jpg', 'https://cdn.pixabay.com/photo/2020/04/10/05/54/odd-job-5024178_960_720.jpg'];
// arrays w/videos(10urls):
const arrvid1 = ['https://youtu.be/JGa0E10w8oI', 'https://youtu.be/LJP1DphOWPs', 'https://youtu.be/MUhR-lWJDuk', 'https://youtu.be/ZXareiya3zI?list=UUPLAYER_TimeWarnerCable', 'https://youtu.be/31-hLbF-WRE'];
const arrvid2 = ['https://youtu.be/JGa0E10w8oI', 'https://youtu.be/LJP1DphOWPs', 'https://youtu.be/MUhR-lWJDuk', 'https://youtu.be/ZXareiya3zI?list=UUPLAYER_TimeWarnerCable', 'https://youtu.be/31-hLbF-WRE'];


function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function featfunc() {
  const resfet = [];
  let i = 0;

  while (i < 3) {
    const features = { };
    features.t1 = `${capitalize(faker.lorem.sentence(nb_words = 3, variable_nb_words = true))} ${capitalize(faker.lorem.sentence(nb_words = 3, variable_nb_words = true))}`;
    features.t2 = capitalize(faker.lorem.sentence(nb_words = 9, variable_nb_words = true));
    features.t3 = faker.fake('{{lorem.word}} {{lorem.word}} {{lorem.word}} {{lorem.word}} {{lorem.word}} {{lorem.word}} {{lorem.word}} {{lorem.word}} {{lorem.word}} {{lorem.word}}');
    features.t4 = `${capitalize(faker.lorem.sentence(nb_words = 3, variable_nb_words = true))} ${capitalize(faker.lorem.sentence(nb_words = 3, variable_nb_words = true))}`;
    features.des1 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 9, variable_nb_words = true)}`;
    features.des2 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 9, variable_nb_words = true)}`;
    features.des3 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 9, variable_nb_words = true)}`;
    features.des4 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 9, variable_nb_words = true)}`;
    features.des5 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 9, variable_nb_words = true)}`;
    features.des6 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 9, variable_nb_words = true)}`;
    features.des7 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 9, variable_nb_words = true)}`;
    features.des8 = `${capitalize(faker.lorem.word())} ${faker.lorem.sentence(nb_words = 9, variable_nb_words = true)}`;
    features.sub1 = `${capitalize(faker.lorem.sentence(nb_words = 3, variable_nb_words = true))}`;
    features.sub2 = `${capitalize(faker.lorem.sentence(nb_words = 3, variable_nb_words = true))}`;
    features.sub3 = `${capitalize(faker.lorem.sentence(nb_words = 3, variable_nb_words = true))}`;
    features.sub4 = `${capitalize(faker.lorem.sentence(nb_words = 3, variable_nb_words = true))}`;
    features.sub5 = `${capitalize(faker.lorem.sentence(nb_words = 3, variable_nb_words = true))}`;
    features.sub6 = `${capitalize(faker.lorem.sentence(nb_words = 3, variable_nb_words = true))}`;
    features.sub7 = `${capitalize(faker.lorem.sentence(nb_words = 3, variable_nb_words = true))}`;
    features.img1 = arrimg1[i % 4];
    features.img2 = arrimg2[i % 4];
    features.img3 = arrimg3[i % 4];
    features.img4 = arrimg4[i % 4];
    features.img5 = arrimg5[i % 4];
    features.img6 = arrimg6[i % 4];
    features.img7 = arrimg7[i % 4];
    features.img8 = arrimg8[i % 4];
    features.img9 = arrimg9[i % 4];
    features.vid1 = arrvid1[i % 4];
    features.vid2 = arrvid2[i % 4];
    features.t5 = `${faker.lorem.sentence(nb_words = 9, variable_nb_words = true).toUpperCase()}`;
    features.sub8 = `${faker.lorem.sentence(nb_words = 3, variable_nb_words = true).toUpperCase()}-${faker.random.number()}`;
    features.sub9 = `${capitalize(faker.lorem.word())} ${capitalize(faker.lorem.word())}`;
    features.year = `${faker.random.number()}`;
    features.des9 = `${faker.random.number()} MB`;
    features.des10 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.des11 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des12 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.img10 = arrimg10[i % 4];
    features.img11 = arrimg11[i % 4];
    features.img12 = arrimg12[i % 4];
    features.img13 = arrimg13[i % 4];
    features.img14 = arrimg14[i % 4];
    features.img15 = arrimg15[i % 4];
    features.img16 = arrimg16[i % 4];
    features.img17 = arrimg17[i % 4];
    features.img18 = arrimg18[i % 4];
    features.img19 = arrimg19[i % 4];
    features.img20 = arrimg20[i % 4];
    features.des13 = `${faker.random.number()} MB`;
    features.des14 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.des15 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des16 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des17 = `${faker.random.number()} MB`;
    features.des18 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.des19 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des20 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des21 = `${faker.random.number()} MB`;
    features.des22 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.des23 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des24 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des25 = `${faker.random.number()} MB`;
    features.des26 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.des27 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des28 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des29 = `${faker.random.number()} MB`;
    features.des30 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.des31 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des32 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des33 = `${faker.random.number()} MB`;
    features.des34 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.des35 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des36 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des37 = `${faker.random.number()} MB`;
    features.des38 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.des39 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des40 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des41 = `${faker.random.number()} MB`;
    features.des42 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.des43 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des44 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des45 = `${faker.random.number()} MB`;
    features.des46 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.des47 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des48 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des49 = `${faker.random.number()} MB`;
    features.des50 = `${faker.lorem.word().toUpperCase()} ${faker.random.number()}/${faker.random.number()}+${faker.random.number()} ${faker.random.number()}`;
    features.des51 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`;
    features.des52 = `${faker.lorem.sentence(nb_words = 20, variable_nb_words = true)}`
    resfet.push(features);
    i += 1;
    // db.insert
  }

  return resfet;
}
