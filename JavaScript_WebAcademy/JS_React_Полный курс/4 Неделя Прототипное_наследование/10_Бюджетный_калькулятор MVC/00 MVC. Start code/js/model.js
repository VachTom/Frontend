// DATA
const budget = [];

function createRecord(formData) {
  // Расчет id
  let id = 1;
  if (budget.length > 0) {
    const lastElement = budget[budget.length - 1];
    const lastElID = lastElement.id;
    id = lastElID + 1;
  }
  // Формируем запись
  const record = {
    id: id,
    type: formData.type,
    title: formData.title.trim(),
    value: +formData.value,
  };
  // Добавляем запись в данные
  budget.push(record);
  console.log(budget);

  return record;
}

function deleteRecord(id) {
  const index = budget.findIndex(function (element) {
    if (+id === element.id) return true;
  });

  // Remove from array
  budget.splice(index, 1);
  console.log(budget)
}
export { createRecord, deleteRecord };
