
function dateFull() {
  const now = new Date();
  const year =
    now.getUTCDate() + ".0" + now.getUTCMonth() + "." + now.getUTCFullYear();
  return year;
}

function getTestData() {
  let testData = [
    {
      id: 0,
      date:  dateFull(),
      product: "Курс по JavaScript",
      name: "Вачик Каренович",
      email: "tovm2504@mail.ru",
      phone: "+7 (931) 987-54-56",
      status: "Новая",
    },
    {
      id: 1,
      date:  dateFull(),
      product: "Курс по PHP",
      name: "Андрей Ярославский",
      email: "andYar@mail.ru",
      phone: "+7 (911) 645-55-45",
      status: "Новая",
    },
    {
      id: 2,
      date:  dateFull(),
      product: "Курс по верстке",
      name: "Давид Арменович",
      email: "davArm1101@mail.ru",
      phone: "+7 (999) 879-99-77",
      status: "Новая",
    },
    {
      id: 3,
      date:  dateFull(),
      product: "Курс по VUE JS",
      name: "Арцрун Аршакович",
      email: "arcArh76@mail.ru",
      phone: "+7 (931) 444-55-66",
      status: "Новая",
    },
    {
      id: 4,
      date:  dateFull(),
      product: "Курс по VUE JS",
      name: "Саркис Лабрадорович",
      email: "lamba@mail.ru",
      phone: "+7 (931) 333-22-11",
      status: "Новая",
    },
    {
      id: 5,
      date:  dateFull(),
      product: "Курс по JavaScript",
      name: "Армен Акопович",
      email: "armAkop6646@mail.ru",
      phone: "+7 (931) 100-88-77",
      status: "Новая",
    },
    {
      id: 6,
      date:  dateFull(),
      product: "Курс по WordPress",
      name: "Владимир Ипресян",
      email: "vladI99@mail.ru",
      phone: "+7 (901) 907-14-14",
      status: "Новая",
    },
    {
      id: 7,
      date:  dateFull(),
      product: "Курс по JavaScript",
      name: "Алексей Трезубцов",
      email: "aleks88@mail.ru",
      phone: "+7 (914) 980-51-56",
      status: "Новая",
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
