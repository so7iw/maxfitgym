
    $(".add").hide();
        console.log("hello ")

        console.log($(".add"))

    $(".showHide").click(function(e){
        e.preventDefault();
        if ($(this).text() === "Read More") $(this).text("Hide");
        else $(this).text("Read More");
        $(this).closest('.caption').children('.add').slideToggle(650);    
    })


    console.log(document.querySelectorAll(".add"))