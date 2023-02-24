function myFunction(x) {
    x.classList.toggle("change");
    if(!navOpen){
      document.getElementsByClassName("drop_down")[0].style.display="block"
      navOpen=true
    }
    else{
      document.getElementsByClassName("drop_down")[0].style.display="none"
      navOpen=false
    }
 

  }
  var navOpen=false
  var circle = document.querySelectorAll(".circle");
  var select= document.querySelectorAll(".select");
  var img = document.getElementById('img');
  var w1=document.getElementById('w1')
  var w3=document.getElementById('w3')
var bimg=document.getElementById('bet_img')
var slides = ['1','2','3']
var w1t=["Talk to us","Cool Fashion","New Design"]
var w3t=["work with us","Explore Product","Learn more about us"]
  function slider(i){
    circle[i].id="Active"
    if(i==0){
      circle[1].id=""
      circle[2].id=""
    }
    else if(i==1){
      circle[0].id=""
      circle[2].id=""
    }
    else if(i==2){
      circle[1].id=""
      circle[0].id=""
    }
    img.innerHTML = '<img src="images/slide'+slides[i]+'.jpeg" alt='+slides[i]+'>';
    w1.innerText=w1t[i]
    w3.innerText=w3t[i]
   
}
selector(0)
function selector(i){
  select[i].id="activet"
  if(i==0){
    select[1].id=""
    select[2].id=""
  }
  else if(i==1){
    select[0].id=""
    select[2].id=""
  }
  else if(i==2){
    select[1].id=""
    select[0].id=""
  }

    bimg.innerHTML = (i!=1)? ('<img src="images/bet'+slides[i]+'.jpeg" alt='+slides[i]+'>'):(`<iframe width="560" height="315" src="https://www.youtube.com/embed/f_7JqPDWhfw?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)

}
var isopen=false
function dropdown(i) {
  if(!isopen){
    document.getElementsByClassName('q')[i-1].style.color="blue"
    document.getElementById('show'+i).style.display = "block";
    document.getElementById('ico'+i).style.transform="rotate(180deg)"
    isopen=true
  }
  else{
    document.getElementsByClassName('q')[i-1].style.color="black"
    document.getElementById('show'+i).style.display = "none";
    document.getElementById('ico'+i).style.transform="rotate(0deg)"
    isopen=false
  }
}
function navdrop(){
}

var i=0
slider(i)
setInterval(function () {
  if(i==2){
    i=0
  }
  else{
    i++
  }
  slider(i)
}, 5000);