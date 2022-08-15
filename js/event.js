document
  .getElementById("delete-confirmation")
  .addEventListener("keyup", function (event) {
    const text = event.target.value;

    const deleteButton = document.getElementById("hide-button");
    if (text === "delete") {
      deleteButton.removeAttribute("disabled");
    } else {
      deleteButton.setAttribute("disabled", true);
    }
  });

// document.getElementById("hide-button").addEventListener("click", function () {
//   const textInfo = document.getElementById("text-info");
//   textInfo.style.display = "none";
// });

// // commnet box creation
// // step: add event listener to the post button
// document.getElementById("btn-box").addEventListener("click", function () {
//   // step-2: get the comment
//   const commentBox = document.getElementById("comment-box");
//   const newCommnet = commentBox.value;
//   //   step3: set the commnet inside of the commnet container
//   //   1. get the comment commentContainer
//   //   2. create element p( based n needed)
//   //   3. set innertext of create element
//   //   4. add the p tag using appendChild
//   const commentContainer = document.getElementById("comment-container");
//   const p = document.createElement("p");
//   p.innerText = newCommnet;

//   //   clear the text area
//   commentBox.value = "";
//   commentContainer.appendChild(p);
// });

document.getElementById("btn-box").addEventListener("click", function () {
  const commentBox = document.getElementById("comment-box");
  const newComment = commentBox.value;
  const commentContainer = document.getElementById("comment-container");
  const p = document.createElement("p");
  p.innerText = newComment;

  commentBox.value = "";
  commentContainer.appendChild(p);
});
