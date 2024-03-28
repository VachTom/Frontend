function init() {
  const id = getRequstId();
}

function getRequstId() {
  const params = new URLSearchParams(window.location.search);
  const idReq = parseInt(params.get("id"));

  const req = JSON.parse(localStorage.getItem("requst"));

  const resultRequst = req.filter((item) => item.id === idReq);
  console.log("Вроде это", resultRequst);
}
init();
