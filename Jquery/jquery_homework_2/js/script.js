$(function () {
    //1. ունենալ <հ1> վերնագիր,Գրել կոդ , որը կպոխի այդ վերնագիրը մեկ ուրիշով, 5վրկ․ հետո, ապա ևս 5վրկ․ հետո մեկ ուրիշով

        // setInterval(() => {
        //         $("h1").text() === "JavaScript" ? $("h1").text("jQuery") : $("h1").text("JavaScript")
        // },3000)

    //_____________________________________________________________

    // Ունենալ 2 <div> իրաի կողքի, և մեկ կոճակ։ Գրել կոդ , որը կոճակին սեղմելուց հետո կփոխի դիվերի գույները, այդ արժեքները նույնպես ցուցադրելով էջում։

    // function colors() {
    //     let color = ""
    //     for(let i = 0;i < 3;i++){
    //         color += (Math.floor(Math.random()*256))
    //     }
    //     let col = `rgb(${color})`
    //     $(".box1").css("background-color",col)
    // }
    // $("#btn").on("click",colors)

    //_____________________________________________________________

    const box1 = ".box1"
    const box2 = ".box2"
    function colors(box) {
        const str = "abcdef0123456789";
        const array = [];
        for (let i = 0; i < 6; i++) {
            array.push(str.charAt(Math.floor(Math.random() * str.length)));
        }
        let col = `#${array.join("")}`;
        $(box).css("background-color", col)
        let $bg = $(box).css("background-color")
        $("p").text($bg)
    }
    $("#btn").on("click", () => {colors(box1),colors(box2)})

})