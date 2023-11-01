/* Марк ,  Пол  и Мэри  играют в баскетбол в разных командах.


За последние 3 игры:

Команда Марка набрала по 110, 120 ,130 очков.
Команда Пола набрала 90, 130, 135 очков.
Команда Мэри набрала  80, 130 , 150 очков.

Результат игры между двумя командами
Рассчитайте общее количество набранных очков отдельно для команд Марка и Пола.
Напишите блок с условиями if - else if, для определения какая из этих двух команд выиграла по общему количеству набранных очков. Предусмотрите вариант с ничьей.

Результат игры между тремя командами
Добавьте данные по третьей команде Мэри. С очками набранными за три раунда. Посчитайте общее количество набранных очков для команды Мэри.
Напишите блок с условиями if - else if, для определения какая из трех команд выиграла.
Подсказка:  вам пригодится оператор &&
Предусмотрите все возможные варианты с ничьей:
- ничья между тремя командами
- ничья между двумя командами победителями, сообщить какие это команды. */

const round1Mark = 110;
const round2Mark = 120;
const round3Mark = 130;
const teamMark = round1Mark + round2Mark + round3Mark;
console.log("Команда Марка: ", teamMark);

const round1Pol = 90;
const round2Pol = 130;
const round3Pol = 135;
const teamPol = round1Pol + round2Pol + round3Pol;
console.log("Команда Пола: ", teamPol);

const round1Mery = 80;
const round2Mery = 130;
const round3Mery = 150;
const teamMery = round1Mery + round2Mery + round3Mery;
console.log("Команда Мэри: ", teamMery);

console.log("\nИгра между 2-мя командами - Пола и Марка:");
if (teamMark > teamPol) {
  console.log("Команда Марка выиграла!");
} else if (teamMark < teamPol) {
  console.log("Команда Пола выиграла!");
} else {
  console.log("Ничья!");
}

console.log("\nИгра между 3-мя командами - Марка, Пола и Мэри:");
switch (teamMark, teamPol, teamMery) {
  // Один победитель
  case teamMark > teamPol && teamMark > teamMery:
    console.log("Выиграла команда Марка: ", teamMark);
    break;
  case teamPol > teamMark && teamPol > teamMery:
    console.log("Выиграла команда Мэри: ", teamPol);
    break;
  case teamMery > teamMark && teamMery > teamPol:
    console.log("Выиграла команда Пола: ", teamMery);
    break;
  default:
    break;
}

// Два победителя
teamMark == teamPol && teamMark > teamMery ? console.log("2 победителя: команда Марка и Пола") : console.log();
teamMark == teamMery && teamMark > teamPol ? console.log("2 победителя: команда Марка и Мэри") : console.log();
teamMery == teamPol && teamMery > teamMark ? console.log("2 победителя: команда Мэри и Пола")  : console.log();

// Победила дружда
teamMery == teamPol && teamMery == teamMark ? console.log("Ничья! ", teamMark, teamPol, teamMery) : console.log();




