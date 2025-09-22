const updateTaskCount = () => {
  const count = document.getElementById("list").children.length;
  document.getElementById("taskCount").textContent = count;
};

const saveTasks = () => {
  const tasks = [];
  document.querySelectorAll("#list li").forEach((li) => {
    tasks.push({
      text: li.firstChild.textContent,
      completed: li.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const loadTasks = () => {
  const saved = JSON.parse(localStorage.getItem("tasks")) || [];
  saved.forEach((task) => {
    addTask(task.text, task.completed);
  });
  updateTaskCount();
};

const deleteTask = (li) => {
  li.remove();
  updateTaskCount();
  saveTasks();
};

const addTask = (texto, completed = false) => {
  const li = document.createElement("li");
  li.textContent = texto;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remover";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.addEventListener("click", () => {
    deleteTask(li);
  });

  li.appendChild(deleteBtn);

  if (completed) {
    li.classList.add("completed");
  }

  li.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") {
      li.classList.toggle("completed");
      saveTasks();
    }
  });

  document.getElementById("list").appendChild(li);
  updateTaskCount();
  saveTasks();
};

document.getElementById("addBtn").addEventListener("click", () => {
  const input = document.getElementById("task");
  const texto = input.value.trim();
  if (texto !== "") {
    addTask(texto);
    input.value = "";
  }
});

document.getElementById("clearBtn").addEventListener("click", () => {
  const list = document.getElementById("list");
  list.innerHTML = "";
  updateTaskCount();
  saveTasks();
});

loadTasks();
