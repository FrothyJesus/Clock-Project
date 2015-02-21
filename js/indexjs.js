$.ajax({
    url:'clock.html',
        type:'GET',
        success: function(data){
           $('#test').html($(data).find('#Vancouver').html());
        }
});