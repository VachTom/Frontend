function getTestData() {
  let dates = new Date();
  dates =
    dates.getUTCDate() + ".0" + dates.getUTCMonth() + "." + dates.getFullYear();
  testData = [
    {
      id: 0,
      data: dates,
      product: "Курс по JavaScript",
      name: "Вачик Каренович",
      email: "tovm2504@mail.ru",
      tel: "8(931)987-54-56",
      status: "new",
    },
    {
      id: 0,
      data: dates,
      product: "Курс по PHP",
      name: "Андрей Ярославский",
      email: "andYar@mail.ru",
      tel: "8(911)645-55-45",
      status: "new",
    },
    {
      id: 0,
      data: dates,
      product: "Курс по верстке",
      name: "Давид Арменович",
      email: "davArm1101@mail.ru",
      tel: "8(999)879-99-77",
      status: "new",
    },
    {
      id: 0,
      data: dates,
      product: "Курс по VUE JS",
      name: "Арцрун Аршакович",
      email: "arcArh76@mail.ru",
      tel: "8(931)444-55-66",
      status: "new",
    },
    {
      id: 0,
      data: dates,
      product: "Курс по VUE JS",
      name: "Саркис Лабрадорович",
      email: "lamba@mail.ru",
      tel: "8(931)333-22-11",
      status: "new",
    },
    {
      id: 0,
      data: dates,
      product: "Курс по JavaScript",
      name: "Армен Акопович",
      email: "armAkop6646@mail.ru",
      tel: "8(931)100-88-77",
      status: "new",
    },
    {
      id: 0,
      data: dates,
      product: "Курс по WordPress",
      name: "Владимир Ипресян",
      email: "vladI99@mail.ru",
      tel: "8(901)907-14-14",
      status: "new",
    },
    {
      id: 0,
      data: dates,
      product: "Курс по JavaScript",
      name: "Алексей Трезубцов",
      email: "aleks88@mail.ru",
      tel: "8(914)980-51-56",
      status: "new",
    },
  ];
  console.log(testData);
}
getTestData();
export { getTestData };
