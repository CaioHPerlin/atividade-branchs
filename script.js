class TaskManager {
  constructor(listId, taskCountId, inputId, addBtnId, clearBtnId) {
    this.list = document.getElementById(listId);
    this.taskCount = document.getElementById(taskCountId);
    this.input = document.getElementById(inputId);
    this.addBtn = document.getElementById(addBtnId);
    this.clearBtn = document.getElementById(clearBtnId);

    this.addBtn.addEventListener("click", () => this.handleAddTask());
    this.clearBtn.addEventListener("click", () => this.clearTasks());

    this.loadTasks();
  }

  updateTaskCount() {
    this.taskCount.textContent = this.list.children.length;
  }

  saveTasks() {
    const tasks = Array.from(this.list.children).map((li) => ({
      text: li.firstChild.textContent,
      completed: li.classList.contains("completed"),
    }));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(({ text, completed }) => this.addTask(text, completed));
    this.updateTaskCount();
  }

  addTask(text, completed = false) {
    const li = document.createElement("li");
    li.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remover";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", () => this.deleteTask(li));

    li.appendChild(deleteBtn);

    if (completed) {
      li.classList.add("completed");
    }

    li.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") {
        li.classList.toggle("completed");
        this.saveTasks();
      }
    });

    this.list.appendChild(li);
    this.updateTaskCount();
    this.saveTasks();
  }

  deleteTask(li) {
    li.remove();
    this.updateTaskCount();
    this.saveTasks();
  }

  handleAddTask() {
    const text = this.input.value.trim();
    if (!text) return;
    this.addTask(text);
    this.input.value = "";
  }

  clearTasks() {
    this.list.innerHTML = "";
    this.updateTaskCount();
    this.saveTasks();
  }
}

new TaskManager("list", "taskCount", "task", "addBtn", "clearBtn");
