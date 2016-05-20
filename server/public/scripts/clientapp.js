$(document).ready(function (){
getZoo();


//Add an animal
$('.animalinfo').on('submit', addAnimal);


});

//AJAX functions
function getZoo () {
  $.ajax({
      type: 'GET',
      url: '/zoo',
      success: function (animals) {
        $('#animalList').empty();
          animals.forEach(function (animal) {

            $container = $('<div class="cage">' + animal.animal_type + ': ' + animal.animal_numbers + '</div>');
              $('#animalList').append($container);
              $container.data('animalID', animal.id);
          });

}
});
};

function addAnimal (event) {
  event.preventDefault();
  var animal = {};

  $.each($('.animalinfo').serializeArray(), function (i, field) {
    animal[field.name] = field.value;
  });
  $.ajax({
    type: 'POST',
    url: '/zoo',
    data: animal,
    success: function (data) {
      getZoo();
    }
  });
};
