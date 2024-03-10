
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
      product: "Курс по JavaScript",
      name: "Вачик Каренович",
      email: "tovm2504@mail.ru",
      phone: "8(931)987-54-56",
      status: "new",
    },
    {
      id: 2,
      data:  dateFull(),
      product: "Курс по PHP",
      name: "Андрей Ярославский",
      email: "andYar@mail.ru",
      phone: "8(911)645-55-45",
      status: "new",
    },
    {
      id: 3,
      data:  dateFull(),
      product: "Курс по верстке",
      name: "Давид Арменович",
      email: "davArm1101@mail.ru",
      phone: "8(999)879-99-77",
      status: "new",
    },
    {
      id: 4,
      data:  dateFull(),
      product: "Курс по VUE JS",
      name: "Арцрун Аршакович",
      email: "arcArh76@mail.ru",
      phone: "8(931)444-55-66",
      status: "new",
    },
    {
      id: 5,
      data:  dateFull(),
      product: "Курс по VUE JS",
      name: "Саркис Лабрадорович",
      email: "lamba@mail.ru",
      phone: "8(931)333-22-11",
      status: "new",
    },
    {
      id: 6,
      data:  dateFull(),
      product: "Курс по JavaScript",
      name: "Армен Акопович",
      email: "armAkop6646@mail.ru",
      phone: "8(931)100-88-77",
      status: "new",
    },
    {
      id: 7,
      data:  dateFull(),
      product: "Курс по WordPress",
      name: "Владимир Ипресян",
      email: "vladI99@mail.ru",
      phone: "8(901)907-14-14",
      status: "new",
    },
    {
      id: 8,
      data:  dateFull(),
      product: "Курс по JavaScript",
      name: "Алексей Трезубцов",
      email: "aleks88@mail.ru",
      phone: "8(914)980-51-56",
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

function renderTestData(item) {
  // if () {

  // }
  const htmlGetTestData = ` <div class="form-group">
                              <input
                                id="email"
                                type="email"
                                name="email"
                                autocomplete="on"
                                class="form-control"
                                placeholder="Email"
                                required
                              />
                            </div>`;

  const s = [
    ` <div class="form-group">
                                        <input 
                                          id="name"
                                          type="text"
                                          name="name"
                                          autocomplete="on"
                                          class="form-control"
                                          placeholder="Имя и Фамилия"
                                          required
                                        />
                                      </div>
                                      <div class="form-group">
                                        <input
                                          id="phone"
                                          type="text"
                                          name="phone"
                                          autocomplete="on"
                                          class="form-control"
                                          placeholder="Телефон"
                                        />
                                      </div>
                                      <div class="form-group">
                                        <input
                                          id="email"
                                          type="email"
                                          name="email"
                                          autocomplete="on"
                                          class="form-control"
                                          placeholder="Email"
                                          required
                                        />
                                      </div>`,
  ];
}

export { getTestData };
