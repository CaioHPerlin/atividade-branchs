document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("task");
  const texto = input.value.trim();
  if (texto !== "") {
    const li = document.createElement("li");
    li.textContent = texto;
    document.getElementById("list").appendChild(li);
    input.value = "";
  }
});
