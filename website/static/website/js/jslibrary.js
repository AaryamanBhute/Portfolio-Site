//onloads
function onload(){
  loadCookie();
}

$("#projwrapper").ready(function(){      
  $("#projwrapper > :first-child").addClass("activeproject")
})
function setToActiveProj(x){
  if(updatingProj){
    return;
  }
  $(".projectimgwrapper").each(function(){
    this.classList.remove("activeproject")
  });
  x.classList.add("activeproject")
  updateProjectDisplay();
}
function updateProjectDisplay(){
  updatingProj = true;
  var target = $(".activeproject").attr('id');
  $("#projdescription").animate(
      {opacity: '0'}, 250
  )
  //$("#desktopexpwrapper").animate(
  //    {opacity: '0'}, 250
  //)
  setTimeout(function(){
    for(var e in projjson){
      if(projjson[e]['fields']['name'] == target){
        $(".projtitle").text(projjson[e]['fields']['name']);
        $(".projtimespan").text(projjson[e]['fields']['timespan']);
        $(".projdesc").text(projjson[e]['fields']['description']);
        if(projjson[e]['fields']['imageurl'].startsWith("http")){
          $("#projimg").attr("src", projjson[e]['fields']['imageurl'])
        }
        else{
          $("#projimg").attr("src", DJANGO_STATIC_URL+projjson[e]['fields']['imageurl'])
        }
        $("#projimg").attr("onclick","location.href = '"+projjson[e]['fields']['link']+"';");
        var l = stringToList(projjson[e]['fields']['skills']);
        $(".projskilllist").html('');
        for(s in l){
          $(".projskilllist").append('<li>'+l[s]+'</span></li>')
        }
      }
    }
  }, 250);
  setTimeout(function(){
    $("#projdescription").animate(
      {opacity: '1'}, 250
    )
    //$("#desktopexpwrapper").animate(
    //  {opacity: '1'}, 250
    //)
  }, 300)
  setTimeout(function(){
    updatingProj = false;
  }, 400)
}
$("#projectsmobile").ready(function(){
  updateProjectDisplay();
})
//experience nav
$("#mobilenav").ready(function(){      
  $("#mobilenav > :first-child").addClass("activemarker")
})
function setToActiveMarker(x){
  if(updatingExperience){
    return;
  }
  $(".experiencemarker").each(function(){
    this.classList.remove("activemarker");
  });
  x.classList.add("activemarker");
  updateExperienceDisplay();
}
function updateExperienceDisplay(){
  updatingExperience = true;
  var target = $(".activemarker").first().text();
  $("#expdescription").animate(
      {opacity: '0'}, 250
  )
  $("#desktopexpwrapper").animate(
      {opacity: '0'}, 250
  )
  setTimeout(function(){
    for(var e in expjson){
      if(expjson[e]['fields']['shortname'] == target){
        $(".expname").text(expjson[e]['fields']['name']);
        $(".exptitle").text(expjson[e]['fields']['title']);
        $(".exptimespan").text(expjson[e]['fields']['timespan']);
        $(".explocation").text(expjson[e]['fields']['location']);
        console.log(expjson[e]['fields']['imageurl'])
        if(expjson[e]['fields']['imageurl'].startsWith("http")){
          
          $("#expimg").attr("src", expjson[e]['fields']['imageurl'])
          $("#expimgdesktop").attr("src", expjson[e]['fields']['imageurl'])
        }
        else{
          $("#expimg").attr("src", DJANGO_STATIC_URL+expjson[e]['fields']['imageurl'])
          $("#expimgdesktop").attr("src", DJANGO_STATIC_URL+expjson[e]['fields']['imageurl'])
        }
        $("#expimg").attr("onclick","location.href = '"+expjson[e]['fields']['link']+"';");
        $("#expimgdesktop").attr("onclick","location.href = '"+expjson[e]['fields']['link']+"';");
        var l = stringToList(expjson[e]['fields']['description']);
        $(".expdesclist").html('');
        for(s in l){
          $(".expdesclist").append('<li>'+l[s]+'</span></li>')
        }
      }
    }
  }, 250);
  setTimeout(function(){
    $("#expdescription").animate(
      {opacity: '1'}, 250
    )
    $("#desktopexpwrapper").animate(
      {opacity: '1'}, 250
  )
  }, 300)
  setTimeout(function(){
    updatingExperience = false;
  }, 400)
}

$("#experiencesmobile").ready(function(){
  updateExperienceDisplay();
})

function stringToList(s){
  var list = [];
  var c = "";
  for (var i = 0; i < s.length; i++) {
    if(s.charAt(i) == '\n'){
      list.push(c);
      c = "";
    }
    else if(s.charAt(i) == '\r'){
      continue;
    }
    else{
      c += s.charAt(i);
    }
  }
  if(c != '\n'){
    list.push(c);
  }
  return(list);
}
function getAllSiblings(elem, filter) {
  var sibs = [];
  elem = elem.parentNode.firstChild;
  do {
    sibs.push(elem);
  } while (elem = elem.nextSibling)
  return sibs;
}
function toggleMenuIcon(x) {
x.classList.toggle("change");
let sibs = getAllSiblings(x);
}
//cookies
function loadCookie(){
  let cookie = getCookie('scheme');
  if(cookie == 'light' && currentTheme == "dark"){
    toggleSwitch.click();
  }
  else if(cookie == "dark" && currentTheme == "light"){
    toggleSwitch.click();
  }
  if(cookie == 'light'){
    document.documentElement.setAttribute('data-theme', 'light');
  }
  else{
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}
function updateCookie(){
  if(currentTheme == 'dark'){
    setCookie('scheme', 'dark');
  }
  else{
    setCookie('scheme', 'light');
  }
  
}
function setCookie(cName, cValue) {
  document.cookie = cName + "=" + cValue + "; path=/";
}
//theme switching
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
      let currentTheme = "dark";

      function switchTheme(e) {
          if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
            currentTheme = "light";
          }
          else {
            document.documentElement.setAttribute('data-theme', 'dark');
            currentTheme = "dark";
          }
          updateCookie();
      }

      toggleSwitch.addEventListener('change', switchTheme, false);
//sidebar
var sidebarOpen = false;
      function sidebartoggle(){
        var logo = document.getElementById("navlogo");
        var sidebar = document.getElementById("sidebar");
        if(sidebarOpen == false){
          //sidebar.style.left = "0";
          $("#sidebar").animate(
            {left: '0'}, 200
          )
          $("#navlogo").animate(
            {left: '60vw'}, 250
          )
          sidebarOpen = true;
        }
        else{
          //sidebar.style.left = "-75vw";
          $("#sidebar").animate(
            {left: '-75vw'}, 200
          )
          $("#navlogo").animate(
            {left: '0'}, 250
          )
          sidebarOpen = false;
        }
        toggleMenuIcon(logo);
      }