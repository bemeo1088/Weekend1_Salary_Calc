console.log('js sourced');
$(document).ready(readyNow);
var isSubmitButtonClicked = false;

function readyNow() {
    $("#submit").on('click', submitButton);
    $('#results').on('click', ".delete", removeRow);
}


function submitButton() {

     var fname = $('#fname').val();
     var lname = $('#lname').val();
     var id = $('#id').val();
     var title = $('#title').val();
     var salary = $('#salary').val();
     if (!isSubmitButtonClicked){
        $('#header').append('<th>Delete</th>');
        isSubmitButtonClicked = true;
     }
    $('#results').append('<tr><td>' + fname + '</td><td>' + lname + '</td><td>' + id + '</td><td>' + title + '</td><td class="colSalary">' + salary + '</td><td><button type="button" class="delete">Delete</button></td></tr>');

    clearInput();

    averageCost();
}

function clearInput() {
    $('.input').val('');
}

function averageCost() {
   var sum = 0;
   var numRows = 0;
   $('.colSalary').each(function(){
      sum += parseInt($(this).text());
      numRows += 1;
   });
   var average = Math.round(sum/numRows);
   $('#average').val(average);
}

function removeRow() {
    $(this).parents('tr').first().remove();
    averageCost();
}
