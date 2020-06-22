document.addEventListener('DOMContentLoaded', function () {
    const SlotRolls = [
        "appelsin", "appelsin", "appelsin", "appelsin", "appelsin", "appelsin", "appelsin", "appelsin", "appelsin", "appelsin", "appelsin",
        "blomme", "blomme", "blomme", "blomme", "blomme", "blomme", "blomme", "blomme", "blomme", "blomme",
        "citron", "citron", "citron", "citron", "citron", "citron", "citron", "citron", "citron", "citron",
        "JS", "JS", "JS", "JS", "JS", "JS", "JS", "JS", "JS", "JS",
        "kirsebaer", "kirsebaer", "kirsebaer", "kirsebaer", "kirsebaer", "kirsebaer", "kirsebaer", "kirsebaer", "kirsebaer", "kirsebaer",
    ];
    let path = "./icons/"




    let roller1 = document.querySelector("#left");
    let roller2 = document.querySelector("#middle");
    let roller3 = document.querySelector("#right");
    let losemoney = document.querySelector("#money");
    let moneytocredit = document.querySelector("#more__money");


    let appelsinprize = 10;
    let blommeprize = 25;
    let citronprize = 50;
    let JSprize = 75;
    let kirsebaerprize = 100;
















    document.querySelector("#spin").addEventListener("click", Draw);

    function Draw() {
        document.querySelector("#spin").setAttribute("disabled", "")
        let timer = 15

        var Random = setInterval(function () {


            {

                let RandomSlot1 = Math.floor(Math.random() * SlotRolls.length)
                const newImage1 = path + SlotRolls[RandomSlot1] + ".png";
                let RandomSlot2 = Math.floor(Math.random() * SlotRolls.length)
                const newImage2 = path + SlotRolls[RandomSlot2] + ".png";
                let RandomSlot3 = Math.floor(Math.random() * SlotRolls.length)
                const newImage3 = path + SlotRolls[RandomSlot3] + ".png";




                timer--;
                console.log(timer);

                roller1.src = newImage1;
                roller2.src = newImage2;
                roller3.src = newImage3;



                console.log(newImage1)
                console.log(newImage2)
                console.log(newImage3)




                if (timer === 0) {
                    clearInterval(Random);
                    document.querySelector("#spin").removeAttribute("disabled")
                    if (newImage1 == newImage2 && newImage1 == newImage3) {
                        document.querySelector("#prizetext").innerHTML = "lou viton";


                    } else if (newImage1 == newImage2 || newImage1 == newImage3 || newImage2 == newImage3) {
                        document.querySelector("#prizetext").innerHTML = "filler text";
                    } else {
                        document.querySelector("#prizetext").innerHTML = "no identical";

                    }

                }

            }
        }, 50)
            ;



    }


    let showhide__sheet = document.querySelector("#spinner__cheat_sheet")
    let showhide__sheet_button = document.querySelector("#showhide__button")

    showhide__sheet_button.addEventListener('click', showhide)

    function showhide() {

        if (showhide__sheet.style.display === "block") {
            showhide__sheet.style.display = "none";
        } else {
            showhide__sheet.style.display = "block";
        }
        console.log(showhide__sheet)
    }

















});



