const updateTaskCount = () => {
  const count = document.getElementById("list").children.length;
  document.getElementById("taskCount").textContent = count;
};

const deleteTask = (li) => {
  li.remove();
  updateTaskCount();
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
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    document.getElementById("list").appendChild(li);
    input.value = "";
    updateTaskCount();
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  const list = document.getElementById("list");
  list.innerHTML = "";
  updateTaskCount();
});
