import * as model from "../model.js";

import * as view from "../form/form.view"
/* <tr>
<th scope="row">1</th>
 <td>01.04.2020</td>
 <td>Курс по верстке</td>
 <td>Петр Сергеевич</td>
 <td>info@inbox.ru</td>
 <td>+7 (909) 77-55-777</td>
 <td>
  <div class="badge badge-pill badge-danger">Новый</div>
 </td>
 <td>
  <a href="edit.html">Редактировать</a>
 </td>
</tr> 
<div class="badge badge-pill badge-warning">В работе</div>
<div class="badge badge-pill badge-success">Завершенный</div>
*/
// ДЛЯ ПРИСВАИВАНИЯ СТАТУСА 

const getLStorage = JSON.parse(localStorage.getItem("requst"));
console.log(getLStorage)


const s = `
           <tr>
            <th scope="row">1</th>
            <td>01.04.2020</td>
            <td>Курс по верстке</td>
            <td>Петр Сергеевич</td>
            <td>info@inbox.ru</td>
            <td>+7 (909) 77-55-777</td>
            <td>
             <div class="badge badge-pill badge-danger">Новый</div>
            </td>
            <td>
             <a href="edit.html">Редактировать</a>
            </td>
           <tr>
            <div class="badge badge-pill badge-warning">В работе</div>
            <div class="badge badge-pill badge-success">Завершенный</div>
`