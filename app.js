/*
var btn = document.getElementsByClassName('btn');
var banner = document.getElementById('banner');

btn[0].onclick = function() {
  banner.src = "img/pic1.jpg";
  this.classList.add('active');
  banner.classList.add('fade-in');
  setTimeout(() => banner.classList.remove('fade-in'), 500);
  btn[1].classList.remove('active');
  btn[2].classList.remove('active');
}

btn[1].onclick = function() {
  banner.src = "img/pic2.jpg";
  this.classList.add('active');
  banner.classList.add('fade-in');
  setTimeout(() => banner.classList.remove('fade-in'), 500);
  btn[0].classList.remove('active');
  btn[2].classList.remove('active');
}

btn[2].onclick = function() {
  banner.src = "img/pic3.jpg";
  this.classList.add('active');
  banner.classList.add('fade-in');
  setTimeout(() => banner.classList.remove('fade-in'), 500);
  btn[0].classList.remove('active');
  btn[1].classList.remove('active');
}

*/
 
let workspaceIndex = 1;
showWorkspace(workspaceIndex);

function plusWorkspace(n) {
  showWorkspace(workspaceIndex += n);
}

function currentWorkspace(n){
  showWorkspace(workspaceIndex = n);
}

function showWorkspace(n){
  let i;
  const workspace = document.querySelectorAll('.myWorkspace');
  const circleBtn = document.querySelectorAll('.btn');
  if(n > workspace.length){
    workspaceIndex = 1;
  }
  if(n < 1){
    workspaceIndex = workspace.length;
  }

  for(i = 0; i < workspace.length; i++){
    workspace[i].style.display = "none";
  }
  for(i = 0; i < circleBtn.length; i++){
    circleBtn[i].className = circleBtn[i].className.replace(" active", "");
  }
  workspace[workspaceIndex-1].style.display = "block";
  circleBtn[workspaceIndex-1].className += " active";
}

 

 