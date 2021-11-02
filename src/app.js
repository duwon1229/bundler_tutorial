import form from "./form";
// import result from "./result";
import "./app.css";

let resultEl;
let formEl;

document.addEventListener("DOMContentLoaded", async () => {
  formEl = document.createElement("div");
  formEl.innerHTML = form.render();
  document.body.appendChild(formEl);

  import(/* webpackChunkName: "result" */ "./result.js").then(async (m) => {
    const result = m.default;
    resultEl = document.createElement("div");
    resultEl.innerHTML = await result.render();
    document.body.appendChild(resultEl);
  });
});

console.log("app.js");
