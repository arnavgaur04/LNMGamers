if (localStorage.getItem("uid") == null) {
    document.querySelector("body").innerHTML = "NOT ALLOWED";
    console.log("uid hahahahhahhahahaha");
}


else
{

var myVar;
document.getElementById("after_load").style.display = "none";
function loader() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("after_load").style.display = "block";
  for (let i = 0; i < 10; i++) {
    document.querySelectorAll(".radio")[i].checked = false;
  }
}

document.body.onload = loader();

var c = new Array();
var val;
var input = new Array();
var td = document.querySelectorAll('td');
var value = document.querySelectorAll(".value");
var book_now = document.querySelector(".book_now");
book_now.innerHTML = "Book Now";
book_now.disabled = true;
var Price = 0;
var date = new Date();
var price = new Array();
for (let i = 0; i < 10; i++) {
    input[i] = document.querySelectorAll(".radio")[i];
    c.push(1);
    price.push(0);
    value[i].innerHTML = 1;
}
image = document.querySelectorAll(".image");

if (date.getHours() >= 20) {
    date.setDate(date.getDate() + 1);
    document.querySelector('.date').innerHTML = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
}

else
{
    document.querySelector('.date').innerHTML = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
}

for (let i = 0; i < 10; i++) {
    image[i].setAttribute("style", "background-image: url('one-player.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
    var j = 1 + 4*i;
    td[j].setAttribute("style", "text-align: left;padding: 2vw");
}

function right(i) {
    if (input[i].checked == true) {
        price[i] = 0;

        if (i < 9) {
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
                price[i] = 240;
                image[i].setAttribute("style", "background-image: url('four-players.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
            }
        }

        else
        {
            if (c[i] < 4) {
                c[i]++;
                value[i].innerHTML = c[i];
                input[i].value = i + " " + c[i];
            }
        
            if (c[i] == 1) {
                price[i] = 160;
                image[i].setAttribute("style", "background-image: url('one-player.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
            }
        
            else if (c[i] == 2) {
                price[i] = 300;
                image[i].setAttribute("style", "background-image: url('two-players.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
            }
            
            else if (c[i]==3) {
                price[i] = 400;
                image[i].setAttribute("style", "background-image: url('three-players.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
            }
        
            else if(c[i] == 4)
            {
                price[i] = 480;
                image[i].setAttribute("style", "background-image: url('four-players.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
            }
        }

        sum();
        book_now.innerHTML = "Rs." + Price;
        console.log(Price);
    }

}

function left(i) {
    if (input[i].checked == true) {
        price[i] = 0;

        if (i < 9) {
            if (c[i] > 1) {
                c[i]--;
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
            
            else if (c[i] == 3) {
                price[i] = 200;
                image[i].setAttribute("style", "background-image: url('three-players.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
            }
        
            else if(c[i] == 4)
            {
                price[i] = 240;
                image[i].setAttribute("style", "background-image: url('four-players.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
            }
        }

        else
        {
            if (c[i] > 1) {
                c[i]--;
                value[i].innerHTML = c[i];
                input[i].value = i + " " + c[i];
            }
        
            if (c[i] == 1) {
                price[i] = 160;
                image[i].setAttribute("style", "background-image: url('one-player.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
            }
        
            else if (c[i] == 2) {
                price[i] = 300;
                image[i].setAttribute("style", "background-image: url('two-players.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
            }
            
            else if (c[i]==3) {
                price[i] = 400;
                image[i].setAttribute("style", "background-image: url('three-players.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
            }
        
            else if(c[i] == 4)
            {
                price[i] = 480;
                image[i].setAttribute("style", "background-image: url('four-players.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
            }
        }

        sum();
        book_now.innerHTML = "Rs." + Price;
        console.log(Price);
    }

}


$(".radio").click(function()
{
    if (this.checked == true && this.value[0] == 9) {
        Price = Price - price[8];
        console.log(price[8]);
        price[8] = 0;
        input[8].value = "8 1";
        c[8] = 0;
        value[8].innerHTML = 1;
        image[8].setAttribute("style", "background-image: url('one-player.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
        document.querySelectorAll('.radio')[8].checked = false;
    }
    
    if (this.checked == true && this.value[0] == 8) {
        Price = Price - price[9];
        console.log(price[8]);
        price[9] = 0;
        input[9].value = "9 1";
        c[9] = 0;
        value[9].innerHTML = 1;
        image[9].setAttribute("style", "background-image: url('one-player.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
        document.querySelectorAll('.radio')[9].checked = false;
    }

    if ($('.radio:checked').length > 3) {
        this.checked = false;
    }

    if ((this).checked == false) {
        val = (this).value[0];
        this.value = this.value[0] + " 1";
        Price = Price - price[val];
        price[val] = 0;
        c[val] = 1;
        value[val].innerHTML = c[val];
        image[val].setAttribute("style", "background-image: url('one-player.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
    }

    else
    {
        val = (this).value[0];

        if (val == 9) {
            price[val] = 160;
        }

        else
        {
            price[val] = 80;
        }

        Price = Price + price[val];
    }

    console.log(Price);
    
    if (Price == 0) {
        book_now.innerHTML = "Book Now";
        book_now.disabled = true;
    }
    
    else
    {
        book_now.disabled = false;
        book_now.innerHTML = "Rs." + Price;
    }
})


$(".clear").click(function()
{
    Price = 0;
    var radio = document.querySelectorAll(".radio");
    for (let i = 0; i < 10; i++) {
        radio[i].checked = false;
        value[i].innerHTML = 1;
        c[i] = 1;
        price[i] = 0;
        image[i].setAttribute("style", "background-image: url('one-player.png');background-position: center;background-size: contain;background-repeat: no-repeat;");
    }
    book_now.disabled = true;
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


}




