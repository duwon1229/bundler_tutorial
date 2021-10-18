import axios from "axios";

document.addEventListener("DOMContentLoaded", async () => {
  const res = await axios.get("/api/users");
  console.log(res);
  document.body.innerHTML = `
    <img src="${nyancat}" />`;
});
