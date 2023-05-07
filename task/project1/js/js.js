var tasks =
  localStorage.getItem("tasks") == null
    ? []
    : JSON.parse(localStorage.getItem("tasks"));
const updateData = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const getData = () => {
  var task = document.getElementById("taskInput").value;
  var date = document.getElementById("dateInput").value;
  var time = document.getElementById("timeInput").value;
  var taskInfo = new Object();
  taskInfo.task = task;
  taskInfo.date = date;
  taskInfo.time = time;
  taskInfo.itemID = Date.now();
  tasks.push(taskInfo);
  console.log(tasks);
  updateData();
  document.getElementById("taskForm").reset();
  makeNote();
};
const makeNote = () => {
  var result = "";
  // var counter = 0;
  tasks.map((item) => {
    result += `
        <div id="note" class="note">
        <button class="btn close float-end" onclick=removeNote(${item.itemID})>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path
              d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
            />
          </svg>
        </button>
        <div class="container scroll">
          ${item.task}
        </div>
        <div class="row date">${item.date}</div>
        <div class="row time">${item.time}</div>
      </div>
        `;
    // counter++;
  });
  document.getElementById("taskRow").innerHTML = result;
};
// const removeNote = (id) => {
//   var newId = Number(id);
//   tasks.splice(newId, 1);
//   updateData();
//   makeNote();
// };
const removeNote = (timeStamp) => {
  tasks = tasks.filter((singleItem) => singleItem.itemID != timeStamp);
  makeNote();
  updateData();
};

makeNote();
