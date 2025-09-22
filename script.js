const deleteTask = (li) => {
  li.remove();
};

document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("task");
  const texto = input.value.trim();
  if (texto !== "") {
    const li = document.createElement("li");
    li.textContent = texto;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remover";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", () => {
      deleteTask(li);
    });

    li.appendChild(deleteBtn);

    document.getElementById("list").appendChild(li);
    input.value = "";
  }
});
