window.addEventListener('load', function () {
    // alert("welcome");

    includeHTML();
    //read();
    readFp();
    readFs();
    readFt();
    readFe();
    readFm();
    readFf();
    readFa();

    if (window.sessionStorage.getItem("email")===null) {

        document.getElementById("sRoot").innerHTML=''; ;
        
    } else {
        document.getElementById("sRoot").append(window.sessionStorage.getItem("email")) ;  
    }
    
    //display the first tab ie home tab
    document.getElementById("home").style.display = "block";
});

function OneFarm(name,age) {
    this.name = name;
    this.age = age;
    
}

// web storage support
function webStorage(x) {
    //check support for web storage eg localStorage or sessionStorage
    if (typeof (Storage) !== "undefined") {
        //Store name
        //window.localStorage.setItem("name", x);
        window.sessionStorage.setItem("email", x);
        // retrieve name example
        //document.getElementById("sessionRoot").innerHTML=window.localStorage.getItem("name");
        //document.getElementById("sRoot").innerHTML = window.sessionStorage.getItem("email");
        // removing name from storage like this
        //window.localStorage.removeItem("name");
    } else {
        //No web storage support
        console.log("Sorry! No web storage support");
    }
}
// count the number of click
function clickCounter() {
    //check support for web storage eg localStorage or sessionStorage
    if (typeof (Storage) !== "undefined") {

        if (window.sessionStorage.clickcount) {
            window.sessionStorage.clickcount = Number(window.sessionStorage.clickcount) + 1;
        } else {
            window.sessionStorage.clickcount = 1;
        }

        document.getElementById("cartCount").innerHTML = window.sessionStorage.clickcount;

    } else {
        console.log("Sorry! No web storage support");
    }
}

// open the side navigation bar
function openNav() {
    document.getElementById("mysidenav").style.width = "250px";
}
// open the side navigation bar
function closeNav() {
    document.getElementById("mysidenav").style.width = "0";
}

// open tabs


function displayTab(evt, tabname) {

    var x, tablinks, tabcontents, tabname;

    tabcontents = document.getElementsByClassName("tabcontent");
    for (x = 0; x < tabcontents.length; x++) {
        tabcontents[x].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (x = 0; x < tablinks.length; x++) {
        tablinks[x].className = tablinks[x].className.replace("active", "");
    }
    document.getElementById(tabname).style.display = "block";
    document.getElementById("mysidenav").style.width = "0";
    evt.currentTarget.className += " active";
}



//retrieving data from database to display

function read() {

    var obj, dbParam, xmlhttp, myObj, x, text = "";

    obj = { "table": "products" };

    document.getElementById("root").innerHTML = "Loading data... please wait";

    dbParam = JSON.stringify(obj);

    if (window.XMLHttpRequest) {
        // code for modern browsers
        xmlhttp = new XMLHttpRequest();

    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            myObj = JSON.parse(this.responseText);



            for (x in myObj) {
                text += "<div class='card' style='width:160px; height:200px;'>";
                text += "<img onclick='showDetail(event,"+myObj[x].id+")' src=uploads/" + myObj[x].pImage + "width:150px; height:60px; style='max-width:100%;'>";
                text += "<div  class='container' style='text-align:center'>";
                text += "<ul>";
                text += "<li>" + myObj[x].pName + "</li>";
                text += "<li>" + myObj[x].pPrice + "</li>";
                text += "<li style='font-size:12px;'>NGN</li>";
                text += "</ul>";
                text += "<button onclick='buyWithPaystack(event)'>Buy</button><button onclick='addToCart(event,"+myObj[x].id+")'>Add to Cart</button><br>";
                text += "</div>";
                text += "</div>";
            }

            document.getElementById("rootFp").innerHTML = text;
            document.getElementById("rootFs").innerHTML = text;
            document.getElementById("rootFt").innerHTML = text;
            document.getElementById("rootFe").innerHTML = text;
            document.getElementById("rootFf").innerHTML = text;
            document.getElementById("rootFm").innerHTML = text;
            document.getElementById("rootFa").innerHTML = text;

        }
    };

    xmlhttp.open("POST", "read.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);

}

//retrieving data from database to display

function readFp() {

    var obj, dbParam, xmlhttp, myObj, x, text = "";

    obj = { "table": "products","limit":3};

    document.getElementById("rootFp").innerHTML = "Loading...";

    dbParam = JSON.stringify(obj);

    if (window.XMLHttpRequest) {
        // code for modern browsers
        xmlhttp = new XMLHttpRequest();

    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            myObj = JSON.parse(this.responseText);



            for (x in myObj) {
                text += "<div class='card' style='width:160px; height:200px;'>";
                text += "<img onclick='showDetail(event,"+myObj[x].id+")' src=uploads/" + myObj[x].pImage + " style='width:150px; height:60px; max-width:100%;'>";
                text += "<div  class='container' style='text-align:center'>";
                text += "<ul>";
                text += "<li>" + myObj[x].pName + "</li>";
                text += "<li>" + myObj[x].pPrice + "</li>";
                text += "<li style='font-size:12px;'>NGN</li>";
                text += "</ul>";
                text += "<button onclick='buyWithPaystack(event)'>Buy</button><button onclick='addToCart(event,"+myObj[x].id+")'>Add to Cart</button><br>";
                text += "</div>";
                text += "</div>";

            }

                // text +="<div class='card' style='width:160px; height:220px; border-radius:48px; text-align:center;'>";
                // text +="<div class='container'>";
                // text += "<br>";
                // text += "<br>";
                // text += "<br>";
                // text += "<br>";
                // text += "<br>";
                // text +="<a href='#'>SEE ALL</a>";
                // text += "<br>";
                // text += "<br>";
                // text += "<br>";
                // text += "<br>";
                // // text += "<br>";
                // text +="</div>";
                // text +="</div>";
            
            document.getElementById("rootFp").innerHTML = text;//+document.getElementById("rootFp").innerHTML;


        }
    };

    xmlhttp.open("POST", "readFp.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);

}

//retrieving data from database to display

function readFs() {

    var obj, id, dbParam, xmlhttp, myObj, x, text = "";

    obj = { "table": "products","limit":3};

    document.getElementById("rootFs").innerHTML = "Loading...";

    dbParam = JSON.stringify(obj);

    if (window.XMLHttpRequest) {
        // code for modern browsers
        xmlhttp = new XMLHttpRequest();

    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            myObj = JSON.parse(this.responseText);



            for (x in myObj) {
                text += "<div class='card' style='width:160px; height:200px;'>";
                text += "<img onclick='showDetail(event,"+myObj[x].id+")' src=uploads/" + myObj[x].pImage + " style='width:150px; height:60px;max-width:100%;'>";
                text += "<div  class='container' style='text-align:center'>";
                text += "<ul>";
                text += "<li>" + myObj[x].pName + "</li>";
                text += "<li>" + myObj[x].pPrice + "</li>";
                text += "<li style='font-size:12px;'>NGN</li>";
                text += "</ul>";
                text += "<button onclick='buyWithPaystack(event)'>Buy</button><button onclick='addToCart(event,"+myObj[x].id+")'>Add to Cart</button><br>";
                text += "</div>";
                text += "</div>";
            }

            document.getElementById("rootFs").innerHTML =text;//+document.getElementById("rootFs").innerHTML;
            

        }
    };

    xmlhttp.open("POST", "readFs.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);

}

//retrieving data from database to display

function readFt() {

    var obj, dbParam, xmlhttp, myObj, x, text = "";

    obj = { "table": "products","limit":3 };

    document.getElementById("rootFt").innerHTML = "Loading...";

    dbParam = JSON.stringify(obj);

    if (window.XMLHttpRequest) {
        // code for modern browsers
        xmlhttp = new XMLHttpRequest();

    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            myObj = JSON.parse(this.responseText);



            for (x in myObj) {
                text += "<div class='card' style='width:160px; height:200px;'>";
                text += "<img onclick='showDetail(event,"+myObj[x].id+")' src=uploads/" + myObj[x].pImage + " style='width:150px; height:60px;max-width:100%;'>";
                text += "<div  class='container' style='text-align:center'>";
                text += "<ul>";
                text += "<li>" + myObj[x].pName + "</li>";
                text += "<li>" + myObj[x].pPrice + "</li>";
                text += "<li style='font-size:12px;'>NGN</li>";
                text += "</ul>";
                text += "<button onclick='buyWithPaystack(event)'>Buy</button><button onclick='addToCart(event,"+myObj[x].id+")'>Add to Cart</button><br>";
                text += "</div>";
                text += "</div>";
            }

           
            document.getElementById("rootFt").innerHTML = text;//+document.getElementById("rootFt").innerHTML;
           

        }
    };

    xmlhttp.open("POST", "readFt.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);

}

//retrieving data from database to display

function readFe() {

    var obj, dbParam, xmlhttp, myObj, x, text = "";

    obj = {"table": "products","limit":3};

    document.getElementById("rootFe").innerHTML = "Loading...";

    dbParam = JSON.stringify(obj);

    if (window.XMLHttpRequest) {
        // code for modern browsers
        xmlhttp = new XMLHttpRequest();

    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            myObj = JSON.parse(this.responseText);



            for (x in myObj) {
                text += "<div class='card' style='width:160px; height:200px;'>";
                text += "<img onclick='showDetail(event,"+myObj[x].id+")' src=uploads/" + myObj[x].pImage + " style='width:150px; height:60px;max-width:100%;'>";
                text += "<div  class='container' style='text-align:center'>";
                text += "<ul>";
                text += "<li>" + myObj[x].pName + "</li>";
                text += "<li>" + myObj[x].pPrice + "</li>";
                text += "<li style='font-size:12px;'>NGN</li>";
                text += "</ul>";
                text += "<button onclick='buyWithPaystack(event)'>Buy</button><button onclick='addToCart(event,"+myObj[x].id+")'>Add to Cart</button><br>";
                text += "</div>";
                text += "</div>";
            }

            
            document.getElementById("rootFe").innerHTML = text;//+document.getElementById("rootFe").innerHTML;
           

        }
    };

    xmlhttp.open("POST", "readFe.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);

}

//retrieving data from database to display

function readFm() {

    var obj, dbParam, xmlhttp, myObj, x, text = "";

    obj = { "table": "products","limit":3 };

    document.getElementById("rootFm").innerHTML = "Loading...";

    dbParam = JSON.stringify(obj);

    if (window.XMLHttpRequest) {
        // code for modern browsers
        xmlhttp = new XMLHttpRequest();

    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            myObj = JSON.parse(this.responseText);



            for (x in myObj) {
                text += "<div class='card' style='width:160px; height:200px;'>";
                text += "<img onclick='showDetail(event,"+myObj[x].id+")' src=uploads/" + myObj[x].pImage + " style='width:150px; height:60px;max-width:100%;'>";
                text += "<div  class='container' style='text-align:center'>";
                text += "<ul>";
                text += "<li>" + myObj[x].pName + "</li>";
                text += "<li>" + myObj[x].pPrice + "</li>";
                text += "<li style='font-size:12px;'>NGN</li>";
                text += "</ul>";
                text += "<button onclick='buyWithPaystack(event)'>Buy</button><button onclick='addToCart(event,"+myObj[x].id+")'>Add to Cart</button><br>";
                text += "</div>";
                text += "</div>";
            }


            document.getElementById("rootFm").innerHTML = text;//+document.getElementById("rootFm").innerHTML;
        

        }
    };

    xmlhttp.open("POST", "readFm.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);

}

//retrieving data from database to display

function readFf() {

    var obj, dbParam, xmlhttp, myObj, x, text = "";

    obj = { "table": "products","limit":3};

    document.getElementById("rootFf").innerHTML = "Loading...";

    dbParam = JSON.stringify(obj);

    if (window.XMLHttpRequest) {
        // code for modern browsers
        xmlhttp = new XMLHttpRequest();

    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            myObj = JSON.parse(this.responseText);



            for (x in myObj) {
                text += "<div class='card' style='width:160px; height:200px;'>";
                text += "<img onclick='showDetail(event,"+myObj[x].id+")' src=uploads/" + myObj[x].pImage + " style='width:150px; height:60px; max-width:100%;'>";
                text += "<div  class='container' style='text-align:center'>";
                text += "<ul>";
                text += "<li>" + myObj[x].pName + "</li>";
                text += "<li>" + myObj[x].pPrice + "</li>";
                text += "<li style='font-size:12px;'>NGN</li>";
                text += "</ul>";
                text += "<button onclick='buyWithPaystack(event)'>Buy</button><button onclick='addToCart(event,"+myObj[x].id+")'>Add to Cart</button><br>";
                text += "</div>";
                text += "</div>";
            }

            
            document.getElementById("rootFf").innerHTML = text;//+document.getElementById("rootFf").innerHTML;
            

        }
    };

    xmlhttp.open("POST", "readFf.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);

}

//retrieving data from database to display

function readFa() {

    var obj, dbParam, xmlhttp, myObj, x, text = "";

    obj = { "table": "products","limit":3 };

    document.getElementById("rootFa").innerHTML = "Loading...";

    dbParam = JSON.stringify(obj);

    if (window.XMLHttpRequest) {
        // code for modern browsers
        xmlhttp = new XMLHttpRequest();

    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            myObj = JSON.parse(this.responseText);



            for (x in myObj) {
                text += "<div class='card' style='width:160px; height:200px;'>";
                text += "<img onclick='showDetail(event,"+myObj[x].id+")' src=uploads/" + myObj[x].pImage + " style='width:150px; height:60px; max-width:100%;'>";
                text += "<div  class='container' style='text-align:center'>";
                text += "<ul>";
                text += "<li>" + myObj[x].pName + "</li>";
                text += "<li>" + myObj[x].pPrice + "</li>";
                text += "<li style='font-size:12px;'>NGN</li>";
                text += "</ul>";
                text += "<button onclick='buyWithPaystack(event)'>Buy</button><button onclick='addToCart(event,"+myObj[x].id+")'>Add to Cart</button><br>";
                text += "</div>";
                text += "</div>";
            }

            document.getElementById("rootFa").innerHTML = text; //+document.getElementById("rootFa").innerHTML;

        }
    };

    xmlhttp.open("POST", "readFa.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);

}
// read the detail of the item
function readDetail(id) {

    var obj, dbParam, xmlhttp, myObj, x, text = "";

    obj = { "table": "products","id":id };

    //document.getElementById("rootFp").innerHTML = "Loading...";

    dbParam = JSON.stringify(obj);

    if (window.XMLHttpRequest) {
        // code for modern browsers
        xmlhttp = new XMLHttpRequest();

    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            myObj = JSON.parse(this.responseText);

            for (x in myObj) {

                document.getElementById("namep").innerHTML = myObj[x].pName;
                document.getElementById("pricep").innerHTML = myObj[x].pPrice;
                document.getElementById("summaryp").innerHTML = myObj[x].pSummary;
                document.getElementById("detailp").innerHTML = myObj[x].pDetail;
                document.getElementById("imgp").setAttribute("src",'uploads/'+myObj[x].pImage); 
                
            }

        }
    };

    xmlhttp.open("POST", "detail.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);

}



// buy button of the product
function buyButton(evt) {
    // collect the item values
    // let itemImage = evt.target.parentElement.childNodes[0].src0
    let itemName = evt.target.parentElement.firstChild.childNodes[1].innerHTML;
    //let itemSummary = evt.target.parentElement.childNodes[2].innerHTML;
    let itemPrice = evt.target.parentElement.firstChild.childNodes[3].innerHTML;
    document.getElementById("itemP").innerHTML = itemPrice;
    document.getElementById("total").innerHTML = itemPrice;
    document.getElementById("spN").innerHTML = itemName;

    displayTab(evt, "checkout");

}

// buy button of the product
function addToCart(evt,id) {
    // collect the item values
    let itemImage = evt.target.parentElement.parentElement.firstChild.src;
    let itemName = evt.target.parentElement.firstChild.childNodes[0].innerHTML;
    // let itemSummary = evt.target.parentElement.firstChild.childNodes[2].innerHTML;
    let itemPrice = evt.target.parentElement.firstChild.childNodes[1].innerHTML;
    //document.getElementById("cartItem").innerHTML=itemImage+" ,"+itemName+", "+itemSummary+", "+itemPrice;
    newElement(itemImage, itemName, itemPrice, id);
    clickCounter();

}

// show sign up form
function showSignUpForm() {
    document.getElementById("log-in").style.display = "none";
    document.getElementById("sign-up").style.display = "block";
}
// show login up form
function showLoginForm() {
    document.getElementById("sign-up").style.display = "none";
    document.getElementById("log-in").style.display = "block";
}

// show login up form
function showLogOut() {
    document.getElementById("logOut").style.display = "block";
    document.getElementById("logIn").style.display = "none";
}

// show login up form
function showLogIn() {
    document.getElementById("logIn").style.display = "block";
    document.getElementById("logOut").style.display = "none";
}


function displayImage() {

    uploadFile();
}

//adding data to database

function sellerRecord() {

    var pName;
    var pPrice;
    var pImage;
    var pCategory;
    var pSubCategory;
    var pSummary;
    var pDetail;
    var pQuantity;
    var sName;
    var sPhone;
    var sAddress;
    var sEmail;
    var myObj = "";

    pName = document.forms["sellerForm"]["pName"].value;

    pPrice = document.forms["sellerForm"]["pPrice"].value;

    // pUnit = document.forms["sellerForm"]["pUnit"].value;

    pImage = document.forms["sellerForm"]["fileToUpload"].value;

    pCategory = document.forms["sellerForm"]["pCategory"].value;

    pSubCategory = document.forms["sellerForm"]["pSubCategory"].value;

    pSummary = document.forms["sellerForm"]["pSummary"].value;

    pDetail = document.forms["sellerForm"]["pDetail"].value;

    pQuantity = document.forms["sellerForm"]["pQuantity"].value;

    pSummary = document.forms["sellerForm"]["pSummary"].value;

    sName = document.forms["sellerForm"]["sName"].value;

    sPhone = document.forms["sellerForm"]["sPhone"].value;

    sAddress = document.forms["sellerForm"]["sAddress"].value;

    sEmail = document.forms["sellerForm"]["sEmail"].value;


    var obj = {
        "pName": pName,
        "pPrice": pPrice,
        // "pUnit": pUnit,    
        "pImage": pImage,
        "pCategory": pCategory,
        "pSubCategory": pSubCategory,
        "pSummary": pSummary,
        "pDetail": pDetail,
        "pQuantity": pQuantity,
        "sName": sName,
        "sPhone": sPhone,
        "sAddress": sAddress,
        "sEmail": sEmail
    };

    // document.getElementById("prn").innerHTML="sending data...";
    //alert("You are adding new record.");
    var dia = confirm("Do you want to submit the form now?");

    if (dia == true) {

        document.getElementById("sellerRoot").innerHTML = "Sending data...";

        var dbParam = JSON.stringify(obj);

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {

                myObj = JSON.parse(this.responseText);

                document.getElementById("sellerRoot").innerHTML = myObj.result;

                document.getElementById("sellerSend").value = myObj.result; // read();    
            }
        };

        xmlhttp.open("POST", "create.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("x=" + dbParam);
    }

}

function uploadFile() {

    var objUrl = URL.createObjectURL(document.querySelector('#fileInput').files[0]);
    document.querySelector("#yourImage").setAttribute("src", objUrl);
    document.querySelector("#yourImage").style.display = "inline-block";
    var formData = new FormData();
    //var formData = new FormData(document.getElementById("myForm"));
    formData.append('fileToUpload', document.querySelector('#fileInput').files[0]);
    document.getElementById("imageResult").innerHTML = "Checking data...";

    //var dbParam = JSON.stringify(obj);

    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            myObj = JSON.parse(this.responseText);

            document.getElementById("imageResult").innerHTML = myObj.result;

        }
    };

    xmlhttp.responseType = '';

    xmlhttp.open("POST", "upload.php", true);

    xmlhttp.send(formData);

}


// log in customers or users
function logInUser() {
    var cEmail;
    var cPassword;
    var myObj;
    var obj;

    cPassword = document.forms["logInUserForm"]["cPassword"].value;

    cEmail = document.forms["logInUserForm"]["cEmail"].value;


    obj = {
        "cPassword": cPassword,
        "cEmail": cEmail
    };

    // document.getElementById("prn").innerHTML="sending data...";
    //alert("You are adding new record.");
    var dia = confirm("Do you want to submit the form now?");

    if (dia == true) {

        document.getElementById("logInRoot").innerHTML = "Processing...";

        var dbParam = JSON.stringify(obj);

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {

                myObj = JSON.parse(this.responseText);

                if (new String(myObj.result) == "Login successful") {
                    //show result on the log in page before refresh
                    document.getElementById("logInRoot").innerHTML = myObj.result;
                    //check webstorage and get from the storage result
                    webStorage(cEmail);
                    document.getElementById("sRoot").append(", "+window.sessionStorage.getItem("email"));
                    //Redirect to home page with fresh page.
                    //use this for new document and the current url from browser history: window.location.replace("http://localhost/webapp");
                    //Use this if you want it behave like click... :  window.location.href="http://localhost/webapp";
                    setTimeout(function () { window.location.reload(); }, 1000);

                } else {
                    //show result on the log in page without refresh
                    document.getElementById("logInRoot").innerHTML = myObj.result;
                }

            }
        };

        xmlhttp.open("POST", "login.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("x=" + dbParam);
    }

}




// register in customers
function registerUser() {
    var cEmail;
    var cPassword;
    var confirm_cPassword;
    var obj;
    var myObj;

    cPassword = document.forms["registerUserForm"]["cPassword"].value;

    confirm_cPassword = document.forms["registerUserForm"]["confirm_cPassword"].value;

    cEmail = document.forms["registerUserForm"]["cEmail"].value;


    obj = {
        "cPassword": cPassword,
        "confirm_cPassword": confirm_cPassword,
        "cEmail": cEmail
    };

    // document.getElementById("prn").innerHTML="sending data...";
    //alert("You are adding new record.");
    var dia = confirm("Do you want to submit the form now?");

    if (dia == true) {

        document.getElementById("signUpRoot").innerHTML = "Processing...";

        var dbParam = JSON.stringify(obj);

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {

                myObj = JSON.parse(this.responseText);

                if (new String(myObj.result) == "Registration successful") {

                    showLoginForm();

                    document.getElementById("logInRoot").innerHTML = myObj.result;

                } else {

                    document.getElementById("signUpRoot").innerHTML = myObj.result;

                }

            }
        };

        xmlhttp.open("POST", "register.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("x=" + dbParam);
    }

}


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}


// Create a new list item when clicking on the "Add" button
function newElement(image, name, price,id) {
//   var div = document.createElement("div");
//   var img = document.createElement("img");
//   var ul = document.createElement("ul");
//   var btn = document.createElement("button");
//   var nameLi = document.createElement("li");
//   var priceLi = document.createElement("li");
//   var descriptionLi = document.createElement("li");
//   var nameText = document.createTextNode(name);
//   var priceText = document.createTextNode(price);
//   var descriptionText = document.createTextNode(summary);
//   var buttonText = document.createTextNode("Delete");

//   img.setAttribute("src",image);
//   img.style.maxWidth="100%";
//   btn.className="btn";

//   nameLi.appendChild(nameText);
//   descriptionLi.appendChild(descriptionText);
//   priceLi.appendChild(priceText);
//   btn.appendChild(buttonText);

//   ul.appendChild(nameLi);
//   ul.appendChild(descriptionLi);
//   ul.appendChild(priceLi);
  

//   div.appendChild(img);
//   div.appendChild(ul);
//   div.appendChild(btn);
//document.getElementById("new").appendChild(div);


    var div1 = document.createElement("div");
    var div = document.createElement("div");
    var img = document.createElement("img");
    var spanN = document.createElement("span");
    var spanId = document.createElement("span");
    // var spanD = document.createElement("span");
    var spanP = document.createElement("span");
    var hr = document.createElement("hr");
    var txtN = document.createTextNode(name);//
    // var txtD = document.createTextNode(summary);//
    var txtId = document.createTextNode(id);//
    var txtP = document.createTextNode(price);//
    var br = document.createElement("br");
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    img.src = image;
    img.width = 100;
    img.height = 100;
    img.alt = "pic";
    img.id = "itemImage";
    //img.onclick = "readDetail(id)";

    span.className = "close";
    spanN.className = "name";
   // spanD.className = "description";
    img.className = "imgCart";
    spanId.className = "itemId";

    spanN.id = "spanN"
    // spanD.id = "spanD"
    spanP.id = "spanP"

    span.style.float = "right";
    spanId.style.float = "right";
    spanId.style.color="white";
    span.style.marginRight = "15px";

    spanP.style.marginLeft = "100px";
    spanN.style.marginLeft = "10px";

    spanN.appendChild(txtN);
    // spanD.appendChild(txtD);
    spanP.appendChild(txtP);
    span.appendChild(txt);
    spanId.appendChild(txtId);

    div.appendChild(img);
    div.appendChild(br);
    div.appendChild(spanN);
    // div.appendChild(spanD);
    div.appendChild(spanP);

    div.appendChild(span);
    div.appendChild(spanId);

    div.append(hr);
    div1.appendChild(div);

    document.getElementById("cartTotal").prepend(div1);
    document.getElementById("checkoutButton").style.display = "block";
    document.getElementById("cartTotal").style.display = "block";
    var totalCart = Number(document.getElementById("totalCart").innerHTML);
    document.getElementById("totalCart").innerHTML = totalCart + Number(price);

    var imgCarts = document.getElementsByClassName("imgCart");

   

    for (i = 0; i < imgCarts.length; i++) {
        
        imgCarts[i].onclick = function () {
           
         showDetail(event,Number(this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML));
         //document.getElementById("namep").innerHTML=this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
        
        }
    }    
    // Click on a close button to hide the current cart item
    var close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var dive = this.parentElement;
            dive.remove();
            //dive.style.display = "none";
            // update the session clickcount by subtracting 1
            window.sessionStorage.clickcount = Number(window.sessionStorage.clickcount) - 1;
            // update the cart count by subtracting 1
            document.getElementById("cartCount").innerHTML = window.sessionStorage.clickcount;
            // reduce the total of the cart
            document.getElementById("totalCart").innerHTML = Number(document.getElementById("totalCart").innerHTML) - Number(this.previousSibling.innerHTML);


        }
    }

}

function checkout(evt) {

    window.sessionStorage.clickcount = 0;

    //ids of the items in the carts
    var itemId = document.getElementsByClassName("itemId");

    for (i = 0; i < itemId.length; i++) {
        // collect the id of the items to retreivee the items from database to send to customer and seller
        document.getElementById("bc").innerHTML += " "+itemId[i].innerHTML+","; 
    }

    var totalCart = Number(document.getElementById("totalCart").innerHTML);

    alert(totalCart);
    //displayTab(evt, "checkout");

}

// show detail of the item being clicked
function showDetail(evt,id) {
   readDetail(id);
   displayTab(evt,"detail");  
}

// buyWithPaystack method with parameter, event, to collect the item
function buyWithPaystack(evt){

     
    // check the email is present in web storage
    if (window.sessionStorage.getItem("email") === null||"") {
        // show login tab
        displayTab(event, 'login');

    } else {
    var em = window.sessionStorage.getItem("email");
    var amt = Number(evt.target.parentElement.firstChild.childNodes[1].innerHTML)*100;
    var handler = PaystackPop.setup({
      key: 'pk_test_72db34e08d9271f76c97ccd2d507a49047d4d9e6',
      email:em, //'customer@email.com',
      amount:amt, //10000,
      currency: "NGN",
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      metadata: {
         custom_fields: [
            {
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+2348012345678"
            }
         ]
      },
      callback: function(response){
          alert('success. transaction ref is ' + response.reference);
      },
      onClose: function(){
          alert('window closed');
      }
    });
    handler.openIframe();
  }

}

// buyWithPaystack() without parameter
function payWithPaystack(){
    
    window.sessionStorage.clickcount = 0;

    // //ids of the items in the carts
    // var itemId = document.getElementsByClassName("itemId");

    // for (i = 0; i < itemId.length; i++) {
    //     // collect the id of the items to retreivee the items from database to send to customer and seller
    //     document.getElementById("bc").innerHTML += " "+itemId[i].innerHTML+",";
    //     //read detail of the item bought and enter them into order table in database 
    //     //and email copy to seller, buyer and website admin
    //     readDetail(itemId[i].innerHTML); 
    // }

       // get the total cart value of the items
    var totalCart = Number(document.getElementById("totalCart").innerHTML)*100;
    
    // check the email is present in web storage
    if (window.sessionStorage.getItem("email") === null||"") {
        // show login tab
        displayTab(event, 'login');

    } else {
        // get email from the storage
    var em = window.sessionStorage.getItem("email");
         // get the detail of the customer
    var fname = prompt("Enter first name","eg Aliyu");
    var lname = prompt("Enter last name","eg Bello");
    // var em = prompt("Enter email","eg example@drum.com");
    var address = prompt("Enter address","eg 704 TSG-Makama, Naibawa, Kumbotso LG");
    var phone = prompt("Enter phone number","eg 08065899144");
    var lg = prompt("Enter Local Govt","eg Kumbotso LG");
    var state = prompt("Enter state","eg Kano State");

    //var amt = Number(evt.target.parentElement.firstChild.childNodes[3].innerHTML)*100;
    // check whether the detail are not empty
    if (fname!="" && lname!="" && phone!="" && lg!="" && state!="" && em!="" && address!="") {

        var handler = PaystackPop.setup({
            key: 'pk_test_72db34e08d9271f76c97ccd2d507a49047d4d9e6',
            email:em, //'customer@email.com',
            amount:totalCart, //10000,
            currency: "NGN",
            ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
            metadata: {
               custom_fields: [
                  {
                      display_name: "Mobile Number",
                      variable_name: "mobile_number",
                      value: "+2348065899144"
                  }
               ]
            },
            callback: function(response){

                alert('success. transaction ref is ' + response.reference);

                //get ids of the items in the carts
                var itemId = document.getElementsByClassName("itemId");
                var em = window.sessionStorage.getItem("email");

                for (i = 0; i < itemId.length; i++) {
                    // collect the id of the items to retreivee the items from database to send to customer and seller
                   // document.getElementById("bc").innerHTML += " "+itemId[i].innerHTML+",";
                    //read detail of each item bought and enter them into order table in database 
                    //and email copy to seller, buyer and website admin
                   // readDetail(itemId[i].innerHTML);
                    sendIdMail(em,itemId[i].innerHTML);
                   //display order item detail tab to show what is/are bought 
                   // displayTab(event,"order-item-detail"); 
                }
                
                
            },

            onClose: function(){
                alert('window closed');
            }
          });
          handler.openIframe();
        
    } else {
         //alert("One of your entry is null or empty.Try again.");
         alert("Try again. Make sure you enter your details");
        return;

    }

 }
    
}

function sendIdMail(email, id) {
    var obj,s;
        obj = { cEmail:email, pid:id } ;
        s =document.createElement("script");
        s.src ="order.php?x=" + JSON.stringify(obj);
        document.body.appendChild(s);  
}

function thankYou(myObj) {
     var x; 
     var txt = "";
     for ( x in myObj ) {
       txt += myObj[x].result;
     }
     if (txt==='Saved successfully') {
        alert("Thank you for shopping with us");
     } else {
       alert("Transaction failed, Try again later");  
     }   
}

// function clickButton() {
//     var obj, s;
//     obj = { table:"products", limit: 10 } ;
//     s =document.createElement("script");
//     s.src ="jsonp_demo_db.php?x=" + JSON.stringify(obj);
//     document.body.appendChild(s);
//   }
  
//   function myFunc(myObj) {
//   var x, txt = "";
//   for ( x in myObj ) {
//   txt += myObj[x].name + '<br>';
//   }
     
//     document.getElementById("demo").innerHTML= txt;
//   }

//   function clickBtn() {
//     var s = document.createElement("script");
//     s.src = "demo_jsonp2.php?callback=myDisplayFunction";
//     document.body.appendChild(s);
//   }
  
//   function myDisplayFunction(myObj) {
//     document.getElementById("demo").innerHTML = myObj.name;
//   }

// redundant function to list of item in the cart
//   function nameUknown() {
//                 let para = document.createElement("P");
//                 let a = document.createElement("a");
//                 let linkText = document.createTextNode(productName);
//                 let span = document.createElement("span");
//                 let spanText = document.createTextNode(productPrice);
//                 a.appendChild(linkText);
//                 span.appendChild(spanText);
//                 para.appendChild(a);
//                 para.appendChild(span);
//                 document.getElementById("itemContainer").appendChild(para);
// }  

