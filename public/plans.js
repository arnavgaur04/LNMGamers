var clear = document.getElementById("clear");

$("#clear").click(function()
{
    var radio = document.querySelectorAll(".radio");
    for (let i = 0; i < 5; i++) {
        radio[i].checked = false;
    }
})

function submit() {
    document.getElementById("submit").click();
}

