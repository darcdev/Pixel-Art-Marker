$(function(){

  $("#sizePicker").submit(function makeGrid(grid){
     
     $("table tr").remove();


    let rows = $("#inputHeight").val();
    let cols = $("#inputWeight").val();

     for(let i=1; i<=rows; i++ ){
      
       $("table").append("<tr></tr>")

       for(let i=1; i<=cols; i++){

        $("tr:last").append("<td></td>")
        $("td").attr("class","cells")
       }

     }
     grid.preventDefault();

     $(".cells").click(function(evt){
       
       let color= $("#colorPicker").val()
      $(evt.target).css("background-color",color);

     });

  });


});