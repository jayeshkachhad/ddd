$(document).ready(function () {
    // console.log("vuyjhg")

    $("ul").hide()


    $(".tileHeading").click(function (e) {
        console.log("Clicked tileHeading")
        e.stopPropagation()
        $(".subMenuUl").children("h6").children("img").css({ "rotate": "0deg", "background-color": "rgb(214, 214, 214)", "border-radius": "10px" });


        $(".subMenuUlsub").hide("fast")
        if ($(this).children(".subMenuUl").is(":visible")) {
            $(this).children(".subMenuUl").hide("fast")
            $(this).children("h5").children("img").css({ "rotate": "0deg", "background-color": "rgb(214, 214, 214)", "border-radius": "10px" })
        } else {
            $(".tileHeading").children("h5").children("img").css({ "rotate": "0deg", "background-color": "rgb(214, 214, 214)", "border-radius": "10px" })
            $(".subMenuUl").hide("fast")
            $(this).children(".subMenuUl").show("fast")
            $(this).children("h5").children("img").css({ "rotate": "180deg", "background-color": "aquamarine", "border-radius": "10px" });
        }
    })


    $(".subMenuUl").click(function (e) {
        console.log("Clecked subMenuUl")
        e.stopPropagation();
        $(".subMenuUlsubAgain").hide()


        if ($(this).children(".subMenuUlsub").is(":visible")) {
            $(this).children(".subMenuUlsub").hide("fast")
            $(this).children("h6").children("img").css({ "rotate": "0deg", "background-color": "rgb(214, 214, 214)", "border-radius": "10px" })
        } else {
            $(".subMenuUlsub").hide("fast")
            $(this).children(".subMenuUlsub").show("fast")
            $(".subMenuUlsub").children("h6").children("img").css({ "rotate": "0deg", "background-color": "rgb(214, 214, 214)", "border-radius": "10px" })
            $(this).children("h6").children("img").css({ "rotate": "180deg", "background-color": "aquamarine", "border-radius": "10px" })
        }
    })


    $(".subMenuUlsub").click(function (e) {
        console.log("Clicked subMenuUlsub")
        e.stopPropagation();
        if ($(this).children(".subMenuUlsubAgain").is(":visible")) {
            $(this).children(".subMenuUlsubAgain").hide("fast")
            $(this).children("h6").children("img").css({ "rotate": "0deg", "background-color": "rgb(214, 214, 214)", "border-radius": "10px" })
        } else {
            $(".subMenuUlsubAgain").hide("fast")
            $(".subMenuUlsub").children("h6").children("img").css({ "rotate": "0deg", "background-color": "rgb(214, 214, 214)", "border-radius": "10px" })
            $(this).children(".subMenuUlsubAgain").show("fast")
            $(this).children("h6").children("img").css({ "rotate": "180deg", "background-color": "aquamarine", "border-radius": "10px" })
        }
    })

    $(".mini").click(function (e) {
        e.stopPropagation()

        console.log("Clicked Mini")
    })

})

// ({"rotate":"180deg", "background-color": "aquamarine", "border-radius": "10px"})