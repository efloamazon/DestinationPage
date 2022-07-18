const submitBtn = document.getElementById("submit_bnt")
submitBtn.addEventListener("click", (evtObj) => {
    evtObj.preventDefault();
})

const destinationVal = document.getElementById("name").value;
const locationVal = document.getElementById("location").value;
const photoVal = document.getElementById("photo").value;
const descriptionVal = document.getElementById("description").value;

