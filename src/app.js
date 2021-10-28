import form from "./form";
import result from "./result";

let resultEl;
let formEl;

document.addEventListener("DOMContentLoaded", async () => {
  formEl = document.createElement("div");
  formEl.innerHTML = form.render();
  document.body.appendChild(formEl);

  resultEl = document.createElement("div");
  resultEl.innerHTML = await result.render();
  document.body.appendChild(resultEl);
});

if (module.hot) {
  console.log("hot module 켜짐");

  module.hot.accept("./result", async () => {
    console.log("result modul 변경");
    resultEl.innerHTML = await result.render();
  });

  module.hot.accept("./form", () => {
    formEl.innerHTML = form.render();
  });
}
