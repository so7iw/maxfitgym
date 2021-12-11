    $(document).ready( () =>{
    $(".add").hide();
    $(".showHide").click(function(e){
        e.preventDefault();
        if ($(this).text() === "Read More") $(this).text("Hide");
        else $(this).text("Read more");
        $(this).closest('.caption').children('.add').slideToggle(650);    
    })
}); 