//Wait for DOM to load.
$(document).ready(() => {
  //Listen for a click event on the modal button.
  $("#modal-button").click(() => {
    //Clear the modal from any previous content
    $(".modal-body").html("");
    //Request data from /courses?format=json asynchronously.
    $.get("/api/courses", (results = {}) => {
      let data = results.data;
      if (!data || !data.courses) return;
      //Loop through array of data in the response.
      data.courses.forEach(course => {
        //Append each course to the modal.
        $(".modal-body").append(
          `<div>
						<span class="course-title">
							${course.title}
						</span>
						<button class='button ${course.joined ? "joined-button" : "join-button"}' data-id="${course._id}">
							${course.joined ? "Joined" : "Join"}
						</button>
						<div class="course-description">
							${course.description}
						</div>
					</div>`
        );
      });
    }).then(() => {
      //Call addJoinButtonListener to add an event listener on your buttons after the AJAX request completes.
      addJoinButtonListener();
    });
  });
});

let addJoinButtonListener = () => {
  $(".join-button").click(event => {
    let $button = $(event.target),
      courseId = $button.data("id");
    $.get(`/api/courses/${courseId}/join`, (results = {}) => {
      let data = results.data;
      if (data && data.success) {
        $button
          .text("Joined")
          .addClass("joined-button")
          .removeClass("join-button");
      } else {
        $button.text("Try again");
      }
    });
  });
};
