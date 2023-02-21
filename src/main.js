var c = new Array();
var val;
var input = new Array();
var td = document.querySelectorAll('td');
var value = document.querySelectorAll(".value");
var book_now = document.querySelector(".book_now");
book_now.innerHTML = "Book Now";
var Price = 0;
var price = new Array();
for (let i = 0; i < 10; i++) {
    input[i] = document.querySelectorAll(".radio")[i];
    c.push(1);
    price.push(0);
    value[i].innerHTML = 1;
}
image = document.querySelectorAll(".image");

for (let i = 0; i < 10; i++) {
    image[i].setAttribute("style", "background-image: url('one-player.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
    var j = 1 + 4*i;
    td[j].setAttribute("style", "text-align: left;padding: 2vw");
}

function right(i) {
    if (input[i].checked == true) {
        price[i] = 0;
        if (c[i] < 4) {
            c[i]++;
            value[i].innerHTML = c[i];
            input[i].value = i + " " + c[i];
        }
    
        if (c[i] == 1) {
            price[i] = 80;
            image[i].setAttribute("style", "background-image: url('one-player.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
        }
    
        else if (c[i] == 2) {
            price[i] = 150;
            image[i].setAttribute("style", "background-image: url('two-players.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
        }
        
        else if (c[i]==3) {
            price[i] = 200;
            image[i].setAttribute("style", "background-image: url('three-players.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
        }
    
        else if(c[i] == 4)
        {
            price[i] = 250;
            image[i].setAttribute("style", "background-image: url('four-players.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
        }

        sum();
        book_now.innerHTML = "Rs." + Price;
        console.log(Price);
    }

}

function left(i) {
    if (input[i].checked == true) {
        price[i] = 0;
        if (c[i] > 1) {
            c[i]--;
            value[i].innerHTML = c[i];
            input[i].value = i + " " + c[i];
        }
    
        if (c[i] == 1) {
            price[i] = 80;
            image[i].setAttribute("style", "background-image: url('one-player.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
        }
    
        else if (c[i]==2) {
            price[i] = 150;
            image[i].setAttribute("style", "background-image: url('two-players.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
        }
        
        else if (c[i]==3) {
            price[i] = 200;
            image[i].setAttribute("style", "background-image: url('three-players.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
        }
    
        else if (c[i] == 4)
        {
            price[i] = 250;
            image[i].setAttribute("style", "background-image: url('four-players.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
        }

        sum();
        book_now.innerHTML = "Rs." + Price;
        console.log(Price);
    }

}

$(".radio").click(function()
{
    if ($('.radio:checked').length > 3) {
        this.checked = false;
    }

    if ((this).checked == false) {
        if ((this).value[0] == "a") {
            val = 10;
        }
        
        else
        {
            val = (this).value[0];
        }
        
        Price = Price - price[val];
        price[val] = 0;
        c[val] = 1;
        value[val].innerHTML = c[val];
        image[val].setAttribute("style", "background-image: url('one-player.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
    }

    else
    {
        if ((this).value[0] == "a") {
            val = 10;
        }
        
        else
        {
            val = (this).value[0];
        }

        Price = Price + 80;
        price[val] = 80;
    }

    console.log(Price);
    
    if (Price == 0) {
        book_now.innerHTML = "Book Now";
    }
    
    else
    {
        book_now.innerHTML = "Rs." + Price;
    }
})


$(".clear").click(function()
{
    Price = 0;
    var radio = document.querySelectorAll(".radio");
    for (let i = 0; i < 10; i++) {
        radio[i].checked = false;
    }
    book_now.innerHTML = "Book Now";
})

function sum() {
    Price = 0;
    for (let index = 0; index < 10; index++) {
        Price = Price + price[index]
    }
}

function submit() {
    document.getElementById("submit").click();
}

// $('input.radio').on('click', function (evt) {
    // if ($('.radio:checked').length > 3) {
    //     this.checked = false;
    //     if ((this).value[0] == "a") {
    //         val = 10;
    //     }
        
    //     else
    //     {
    //         val = (this).value[0];
    //     }
    //     Price = Price - price[val];
    // }
// });

