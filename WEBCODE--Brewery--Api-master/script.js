//*To create all HTML elements:
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^

let form_tag = allHtmlElements("form");
form_tag.classList.add("row", "brewery-search");
//console.log(form_tag);

//----------------------------------------------------------------
let div_container = allHtmlElements("div");
div_container.setAttribute("class", "container");

//----------------------------------------------------------------
let div_row = allHtmlElements("div");
div_row.setAttribute("class", "row");

//----------------------------------------------------------------
let div_col_md_3 = allHtmlElements("div");
div_col_md_3.setAttribute("class", "col-md-3");

//----------------------------------------------------------------
let h2_tag = allHtmlElements("h2");
h2_tag.setAttribute("class", "form-title");
h2_tag.innerHTML = "Find Your Brewery Type";

//----------------------------------------------------------------
let list_p_tag = allHtmlElements("p");
list_p_tag.innerHTML = "Lists of Types ⏩⏩⏩";

//----------------------------------------------------------------
let div_col_md_9 = allHtmlElements("div");
div_col_md_9.setAttribute("class", "col-md-9");

//----------------------------------------------------------------
let div_input_group = allHtmlElements("div");
div_input_group.setAttribute("class", "input-group");

//----------------------------------------------------------------
let input_tag = allHtmlElements("input");
input_tag.setAttribute("type", "search");
input_tag.setAttribute("id", "search-bar");
input_tag.setAttribute("class", "form-control");
input_tag.setAttribute("placeholder", "Enter your favourite Brew type🍻");
//console.log(input_tag);

//----------------------------------------------------------------
let button_tag = allHtmlElements("button");
button_tag.setAttribute("type", "button");
button_tag.setAttribute("id", "search-btn");

button_tag.classList.add("btn", "btn-primary");
button_tag.innerHTML = "Search🔍";
//console.log(button_tag);

//----------------------------------------------------------------
let mark_p_tag = allHtmlElements("p");

let mark_1 = allHtmlElements("mark");
mark_1.setAttribute("id", "mark-1");
mark_1.innerHTML = "micro";

let mark_2 = allHtmlElements("mark");
mark_2.setAttribute("id", "mark-2");
mark_2.innerHTML = "nano";

let mark_3 = allHtmlElements("mark");
mark_3.setAttribute("id", "mark-3");
mark_3.innerHTML = "large";

let mark_4 = allHtmlElements("mark");
mark_4.setAttribute("id", "mark-4");
mark_4.innerHTML = "brewpub";

let mark_5 = allHtmlElements("mark");
mark_5.setAttribute("id", "mark-5");
mark_5.innerHTML = "planning";

let mark_6 = allHtmlElements("mark");
mark_6.setAttribute("id", "mark-6");
mark_6.innerHTML = "regional";

let mark_7 = allHtmlElements("mark");
mark_7.setAttribute("id", "mark-7");
mark_7.innerHTML = "bar";

let mark_8 = allHtmlElements("mark");
mark_8.setAttribute("id", "mark-8");
mark_8.innerHTML = "closed";
//----------------------------------------------------------------

let br_tag = allHtmlElements("br");

//----------------------------------------------------------------
let div_container_fluid = allHtmlElements("div");
div_container_fluid.setAttribute("class", "container-fluid");

//----------------------------------------------------------------
var card_row = allHtmlElements("div");
card_row.setAttribute("class", "row");
card_row.setAttribute("id", "card-3");

//----------------------------------------------------------------

//-------------------------------------------------------------------
//*Function to create all the HTML Elements:-
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
function allHtmlElements(tagname) {
  var createElemets = document.createElement(tagname);
  return createElemets;
}

//-----------------------------------------------------------------

//*appending into HTML Document...
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^

div_col_md_3.append(h2_tag, list_p_tag);

div_input_group.append(input_tag, button_tag);

div_col_md_9.append(div_input_group, mark_p_tag);

div_row.append(div_col_md_3, div_col_md_9);

div_container.append(div_row);

div_container_fluid.append(card_row);

form_tag.append(div_container);

mark_p_tag.append(
  mark_1,
  mark_2,
  mark_3,
  mark_4,
  mark_5,
  mark_6,
  mark_7,
  mark_8
);

document.body.append(form_tag, br_tag, div_container_fluid);

//-----------------------------------------------------------------

//*addEventLisitener:-
//^^^^^^^^^^^^^^^^^^
button_tag.addEventListener("click", breweryData);

//-------------------------------------------------------------------
//*This is function to fetch Brewery api-data by using (async and await):-
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

async function breweryData() {
  //try-block:-

  try {
    //Getting User input value...
    var search_input = document.getElementById("search-bar").value;

    //fetching api data...
    var micro_DB = await fetch(
      `https://api.openbrewerydb.org/breweries?by_type=${search_input}&per_page=13`
    );
    let JsonFormat = await micro_DB.json();

    //----------------------------------------------
    //To empty data when Button is Clicked..
    var div_row = document.getElementById("card-3");
    div_row.innerHTML = "";
    //----------------------------------------------

    //for loop is used to get Brewery data dynamically...

    for (var i = 1; i < JsonFormat.length; i++) {
      let brew_Type = JsonFormat[i].brewery_type;
      //console.log(brew_Type);

      let brew_Name = JsonFormat[i].name;
      //console.log(brew_Name);

      let brew_Street = JsonFormat[i].street;
      //console.log(brew_Street);

      let brew_Ph_No = JsonFormat[i].phone;
      //console.log(brew_Ph_No);

      let brew_Url = JsonFormat[i].website_url;
      //console.log(brew_Url);

      //----------------------------------------------------------------

      //*Dynamically Card is created and Brewery data are assigned...

      //TYPE :- MICRO-Most craft breweries. For example, Samual Adams is still considered a micro brewery.

      if (search_input === "micro") {
        div_row.innerHTML += ` 
    <div class="card col-md-3" style="width: 18rem">
          <h5 class="card-title  badge-secondary card-head">NAME:</h5>
          <p class=" badge-light card-head">${brew_Name}</p>

          <ul class="list-group list-group-flush">
           <li class="badge badge-info">TYPE :<span class="badge badge-light">${brew_Type}</span></li>
           <li class="badge badge-info">ADDRESS :<span class="badge badge-light">${brew_Street}</span></li>
           <li class="badge badge-info">PH.NO :<span class="badge badge-light">${brew_Ph_No}</span></li>
          </ul>

          <div class="card-body">
           <img src="micro-brewery.jpg" class="card-img-top" id="type" alt="Micro_type"></img>
           <a href="${brew_Url}" class="badge badge-success link">WEBSITE-URL</a>
          </div>

    </div>`;
      }

      //--------------------------------------------------------------------------------------------------------------

      //*In Brewery Database for the differnt types of brewery image-url property is not available .
      //*To Highlight the different types of brewery and cards look preety Static image are used.
      //*For this purpose again innerHTML elements are reused.

      //TYPE :- NANO-An extremely small brewery which typically only distributes locally.

      if (search_input === "nano") {
        div_row.innerHTML += ` 
    <div class="card col-md-3" style="width: 18rem">
           <h5 class="card-title  badge-secondary card-head">NAME:</h5>
           <p class=" badge-light card-head">${brew_Name}</p>

          <ul class="list-group list-group-flush">
           <li class="badge badge-info">TYPE :<span class="badge badge-light">${brew_Type}</span></li>
           <li class="badge badge-info">ADDRESS :<span class="badge badge-light">${brew_Street}</span></li>
           <li class="badge badge-info">PH.NO :<span class="badge badge-light">${brew_Ph_No}</span></li>
          </ul>

          <div class="card-body">
          <img src="nano-brewery.jpg" class="card-img-top" id="type" alt="Micro_type"></img>
           <a href="${brew_Url}" class="badge badge-success link">WEBSITE-URL</a>
          </div>

    </div>`;
      }

      //------------------------------------------------------------------------------------------------------------

      //TYPE :- BREWPUB-A beer-focused restaurant or restaurant/bar with a brewery on-premise.

      if (search_input === "brewpub") {
        div_row.innerHTML += ` 
    <div class="card col-md-3" style="width: 18rem">
           <h5 class="card-title  badge-secondary card-head">NAME:</h5>
           <p class=" badge-light card-head">${brew_Name}</p>

          <ul class="list-group list-group-flush">
           <li class="badge badge-info">TYPE :<span class="badge badge-light">${brew_Type}</span></li>
           <li class="badge badge-info">ADDRESS :<span class="badge badge-light">${brew_Street}</span></li>
           <li class="badge badge-info">PH.NO :<span class="badge badge-light">${brew_Ph_No}</span></li>
          </ul>

          <div class="card-body">
          <img src="brew-pub.jfif" class="card-img-top" id="type" alt="Micro_type"></img>
           <a href="${brew_Url}" class="badge badge-success link">WEBSITE-URL</a>
          </div>

    </div>`;
      }

      //------------------------------------------------------------------------------------------------------------

      //TYPE :- REGIONAL-A regional location of an expanded brewery. Ex. Sierra Nevada’s Asheville, NC location.

      if (search_input === "regional") {
        div_row.innerHTML += ` 
    <div class="card col-md-3" style="width: 18rem">
           <h5 class="card-title  badge-secondary card-head">NAME:</h5>
           <p class=" badge-light card-head">${brew_Name}</p>

          <ul class="list-group list-group-flush">
           <li class="badge badge-info">TYPE :<span class="badge badge-light">${brew_Type}</span></li>
           <li class="badge badge-info">ADDRESS :<span class="badge badge-light">${brew_Street}</span></li>
           <li class="badge badge-info">PH.NO :<span class="badge badge-light">${brew_Ph_No}</span></li>
          </ul>

          <div class="card-body">
          <img src="regional-brew.jpg" class="card-img-top" id="type" alt="Micro_type"></img>
           <a href="${brew_Url}" class="badge badge-success link">WEBSITE-URL</a>
          </div>

    </div>`;
      }

      //------------------------------------------------------------------------------------------------------------

      //TYPE :- LARGE-A very large brewery. Likely not for visitors. Ex. Miller-Coors.

      if (search_input === "large") {
        div_row.innerHTML += ` 
    <div class="card col-md-3" style="width: 18rem">
           <h5 class="card-title  badge-secondary card-head">NAME:</h5>
           <p class=" badge-light card-head">${brew_Name}</p>

          <ul class="list-group list-group-flush">
           <li class="badge badge-info">TYPE :<span class="badge badge-light">${brew_Type}</span></li>
           <li class="badge badge-info">ADDRESS :<span class="badge badge-light ">${brew_Street}</span></li>
           <li class="badge badge-info">PH.NO :<span class="badge badge-light">${brew_Ph_No}</span></li>
          </ul>

          <div class="card-body">
          <img src="large-brew.jpg" class="card-img-top" id="type" alt="Micro_type"></img>
           <a href="${brew_Url}" class="badge badge-success link">WEBSITE-URL</a>
          </div>

    </div>`;
      }

      //------------------------------------------------------------------------------------------------------------

      //TYPE :- PLANNING-A brewery in planning or not yet opened to the public.

      if (search_input === "planning") {
        div_row.innerHTML += ` 
    <div class="card col-md-3" style="width: 18rem">
           <h5 class="card-title  badge-secondary card-head">NAME:</h5>
           <p class=" badge-light card-head">${brew_Name}</p>

          <ul class="list-group list-group-flush">
           <li class="badge badge-info">TYPE :<span class="badge badge-light">${brew_Type}</span></li>
           <li class="badge badge-info">ADDRESS :<span class="badge badge-light">${brew_Street}</span></li>
           <li class="badge badge-info">PH.NO :<span class="badge badge-light">${brew_Ph_No}</span></li>
          </ul>

          <div class="card-body">
          <img src="planning-brew.jpg" class="card-img-top" id="type" alt="Micro_type"></img>
           <a href="${brew_Url}" class="badge badge-success link">WEBSITE-URL</a>
          </div>

    </div>`;
      }
      //------------------------------------------------------------------------------------------------------------

      //TYPE :- BAR-A bar. No brewery equipment on premise.

      if (search_input === "bar") {
        div_row.innerHTML += ` 
    <div class="card col-md-3" style="width: 18rem">
           <h5 class="card-title  badge-secondary card-head">NAME:</h5>
           <p class=" badge-light card-head">${brew_Name}</p>

          <ul class="list-group list-group-flush">
           <li class="badge badge-info">TYPE :<span class="badge badge-light">${brew_Type}</span></li>
           <li class="badge badge-info">ADDRESS :<span class="badge badge-light">${brew_Street}</span></li>
           <li class="badge badge-info">PH.NO :<span class="badge badge-light">${brew_Ph_No}</span></li>
          </ul>

          <div class="card-body">
          <img src="bar-brew.jpg" class="card-img-top" id="type" alt="Micro_type"></img>
           <a href="${brew_Url}" class="badge badge-success link">WEBSITE-URL</a>
          </div>

    </div>`;
      }

      //------------------------------------------------------------------------------------------------------------

      //TYPE :- CONTRACT-A brewery that uses another brewery’s equipment.

      if (search_input === "contract") {
        div_row.innerHTML += ` 
    <div class="card col-md-3" style="width: 18rem">
           <h5 class="card-title  badge-secondary card-head">NAME:</h5>
           <p class=" badge-light card-head">${brew_Name}</p>

          <ul class="list-group list-group-flush">
           <li class="badge badge-info">TYPE :<span class="badge badge-light">${brew_Type}</span></li>
           <li class="badge badge-info">ADDRESS :<span class="badge badge-light">${brew_Street}</span></li>
           <li class="badge badge-info">PH.NO :<span class="badge badge-light">${brew_Ph_No}</span></li>
          </ul>

          <div class="card-body">
          <img src="contract-brew.jpg" class="card-img-top" id="type" alt="Micro_type"></img>
           <a href="${brew_Url}" class="badge badge-success link">WEBSITE-URL</a>
          </div>

    </div>`;
      }
      //------------------------------------------------------------------------------------------------------------

      //TYPE :- CLOSED-A location which has been closed.

      if (search_input === "closed") {
        div_row.innerHTML += ` 
    <div class="card col-md-3" style="width: 18rem">
           <h5 class="card-title  badge-secondary card-head">NAME:</h5>
           <p class=" badge-light card-head">${brew_Name}</p>

          <ul class="list-group list-group-flush">
           <li class="badge badge-info">TYPE :<span class="badge badge-light">${brew_Type}</span></li>
           <li class="badge badge-info">ADDRESS :<span class="badge badge-light">${brew_Street}</span></li>
           <li class="badge badge-info">PH.NO :<span class="badge badge-light">${brew_Ph_No}</span></li>
          </ul>

          <div class="card-body">
          <img src="closed-brew.jfif" class="card-img-top" id="type" alt="Micro_type"></img>
           <a href="${brew_Url}" class="badge badge-success link">WEBSITE-URL</a>
          </div>

    </div>`;
      }
      //------------------------------------------------------------------------------------------------------------
    }
    //catch-block:-
  } catch (error) {
    console.log(error);
  }
}

//----------------------------------------------------------------
