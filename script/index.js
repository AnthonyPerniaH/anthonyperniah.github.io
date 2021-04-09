//Script de carga de data
var elements_div_projects = document.getElementsByClassName("card_container");
var elements_div_blog = document.getElementsByClassName("card_blog");
var blog_data =
  "https://drive.google.com/file/d/1p0RHQiNlQgbNle2mtqKC_ibtQSQb-rlJ/view";
function get_data_projects(element) {
  var title = element.getElementsByTagName("h4").item(0);
  var description = element.getElementsByTagName("p").item(0);
  var link1 = element.getElementsByTagName("a").item(0);
  //var link2 = element.getElementsByTagName("a").item(1);
  var img = element.getElementsByTagName("img").item(0);
  var name = title.getAttribute("repo");
  var url = "https://api.github.com/repos/AnthonyPerniah/" + name;
  var Http = new XMLHttpRequest();
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = (e) => {
    var result = JSON.parse(Http.response);
    link1.href = result.html_url;
    //link2.href = result.html_url;
    title.innerHTML = result.name.replace(/([A-Z])/g, " $1").trim();
    img.src =
      "https://raw.githubusercontent.com/AnthonyPerniah/" +
      result.name +
      "/master/img_preview/preview.png";
    description.innerHTML = result.description;
  };
}

function get_data_blog(element) {
  var title = element.getElementsByTagName("h5").item(0);
  var body = element.getElementsByTagName("p").item(0);
  var img = element.getElementsByTagName("img").item(0);
  var Http = new XMLHttpRequest();
  Http.open("GET", blog_data);
  Http.send();
  Http.onreadystatechange = (e) => {
    var result = JSON.parse(Http.response);
    //link1.href = result.html_url;
    console.log(result);
    //link2.href = result.html_url;
    // title.innerHTML = result.name.replace(/([A-Z])/g, " $1").trim();
    //img.src ="https://raw.githubusercontent.com/AnthonyPerniah/" +result.name +"/master/img_preview/preview.png";
    // body.innerHTML = result.description;
  };
}

function set_data(elements_div_projects, elements_div_blog) {
  for (var e = 0; e < elements_div_projects.length; e++) {
    get_data_projects(elements_div_projects[e]);
  }
  for (var e = 0; e < elements_div_blog.length; e++) {
    get_data_blog(elements_div_blog[e]);
  }
}

document.addEventListener(
  "DOMContentLoaded",
  set_data(elements_div_projects, elements_div_blog)
);

//Script de scroll

function scrollFunction() {
  if (document.documentElement.scrollTop > 350) {
    document.getElementById("navbar_sign_id").style.visibility = "visible";
  } else {
    document.getElementById("navbar_sign_id").style.visibility = "hidden";
  }
}

window.onscroll = function () {
  scrollFunction();
};
