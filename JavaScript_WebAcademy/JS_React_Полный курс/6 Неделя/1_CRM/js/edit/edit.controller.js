function init() {
  const id = getRequstId();
}

function getRequstId() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  console.log(id);

  const req = JSON.parse(localStorage.getItem("requst"));
  console.log(req);

  req.find((index) => {
  });
}
init();
