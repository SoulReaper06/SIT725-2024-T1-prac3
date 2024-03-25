document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

const submitForm = () => {
  let formData = {};
  formData.first_name = $("#first_name").val();
  formData.last_name = $("#last_name").val();
  formData.mobilenumber = $("#mobilenumber").val();
  formData.email = $("#email").val();
  formData.address = $("#address").val();
  alert(`Thank you ${formData.first_name}, We will get in touch with you shortly`)
  console.log("Form Data Submitted: ", formData);
};


$(document).ready(function () {
  $("#formSubmit").click(() => {
    submitForm();
  });
});