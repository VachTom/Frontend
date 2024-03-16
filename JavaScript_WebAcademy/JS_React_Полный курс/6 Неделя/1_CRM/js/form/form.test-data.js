
function dateFull() {
  const now = new Date();
  const year =
    now.getUTCDate() + ".0" + now.getUTCMonth() + "." + now.getUTCFullYear();
  return year;
}

function getTestData() {
  let testData = [
    {
      id: 1,
      data:  dateFull(),
      product: "course-js",
      name: "Вачик Каренович",
      email: "tovm2504@mail.ru",
      phone: "+7 (931) 987-54-56",
      status: "new",
    },
    {
      id: 2,
      data:  dateFull(),
      product: "course-php",
      name: "Андрей Ярославский",
      email: "andYar@mail.ru",
      phone: "+7 (911) 645-55-45",
      status: "new",
    },
    {
      id: 3,
      data:  dateFull(),
      product: "course-html",
      name: "Давид Арменович",
      email: "davArm1101@mail.ru",
      phone: "+7 (999) 879-99-77",
      status: "new",
    },
    {
      id: 4,
      data:  dateFull(),
      product: "course-vue",
      name: "Арцрун Аршакович",
      email: "arcArh76@mail.ru",
      phone: "+7 (931) 444-55-66",
      status: "new",
    },
    {
      id: 5,
      data:  dateFull(),
      product: "course-vue",
      name: "Саркис Лабрадорович",
      email: "lamba@mail.ru",
      phone: "+7 (931) 333-22-11",
      status: "new",
    },
    {
      id: 6,
      data:  dateFull(),
      product: "course-js",
      name: "Армен Акопович",
      email: "armAkop6646@mail.ru",
      phone: "+7 (931) 100-88-77",
      status: "new",
    },
    {
      id: 7,
      data:  dateFull(),
      product: "course-wordpress",
      name: "Владимир Ипресян",
      email: "vladI99@mail.ru",
      phone: "+7 (901) 907-14-14",
      status: "new",
    },
    {
      id: 8,
      data:  dateFull(),
      product: "course-js",
      name: "Алексей Трезубцов",
      email: "aleks88@mail.ru",
      phone: "+7 (914) 980-51-56",
      status: "new",
    },
  ];
  function randomNumb(length) {
    return Math.floor(Math.random() * length);
  }
  const renderRandomNumb = randomNumb(testData.length);
  const renderTestData = testData[renderRandomNumb];
  return renderTestData;
}
const testData = getTestData()

export { getTestData, testData };
