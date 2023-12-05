var currentTime = dayjs();
console.log(currentTime);
var timeSlot = $('.timeslot');

$(document).ready(function() {
  for (let i = 0; i <= 23; i++) {
    console.log(`hour${i} = ` + localStorage.getItem(`hour${i}`));
    let timeSlotContent;

    if (localStorage.getItem(`hour${i}`) != null) {
      timeSlotContent = `<div id="hour${i}" class="row time-block present">
                           <div class="col-2 col-md-1 hour text-center py-3">${i}:00</div>
                           <textarea id="taskText${i}" class="col-8 col-md-10 description" rows="3">${localStorage.getItem(`hour${i}`)}</textarea>
                           <button id="saveButton${i}" class="btn saveBtn col-2 col-md-1" aria-label="save">
                             <i class="fas fa-save" aria-hidden="true"></i>
                           </button>
                         </div>`;
    } else {
      timeSlotContent = `<div id="hour${i}" class="row time-block present">
                           <div class="col-2 col-md-1 hour text-center py-3">${i}:00</div>
                           <textarea id="taskText${i}" class="col-8 col-md-10 description" rows="3"></textarea>
                           <button id="saveButton${i}" class="btn saveBtn col-2 col-md-1" aria-label="save">
                             <i class="fas fa-save" aria-hidden="true"></i>
                           </button>
                         </div>`;
    }

    timeSlot.append(timeSlotContent);

    // IIFE to capture the current value of i
    (function(index) {
      $("#saveButton" + index).on('click', function() {
        var taskText = $("#taskText" + index).val();
        localStorage.setItem(`hour${index}`, taskText);
        console.log("Task for hour " + index + " = " + taskText);
        console.log("Stored in localStorage: " + localStorage.getItem(`hour${index}`));
      });
    })(i);
  }
});

console.log("ready!");
