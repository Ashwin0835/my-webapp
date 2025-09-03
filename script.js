function addTask() 
{
  let inputBox = document.getElementById("name_Input");
  let text = inputBox.value.trim();

  if (text === "") 
{
    alert("Please write something!");
    return;
  }

  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerText = text;

  span.onclick = function() 
  {
    if (span.style.textDecoration === "line-through") 
    {
      span.style.textDecoration = "none";
    } 
    else 
    {
      span.style.textDecoration = "line-through";
    }
  };
  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.className = "editBtn";
  editBtn.onclick = function() 
  {
    let newText = prompt("Change the task:", span.innerText);
    if (newText) 
    {
      span.innerText = newText;
      showMessage("Task edited: " + newText);
    }
  };

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "deleteBtn";
  deleteBtn.onclick = function() 
  {
    li.remove();
    showMessage("Task deleted!");
  };

  let saveBtn = document.createElement("button");
  saveBtn.innerText = "Save";
  saveBtn.className = "saveBtn";
  saveBtn.onclick = function() 
  {
    showMessage("Task saved: " + span.innerText);
  };
  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  li.appendChild(saveBtn);

  document.getElementById("taskList").appendChild(li);

  showMessage("Task added: " + text);
  inputBox.value = "";
}

function showMessage(msg) 
{
  document.getElementById("message").innerText = msg;
}