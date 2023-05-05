let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}

var div1 = document.getElementById('cinfo1');
var div2 = document.getElementById('cinfo2');
var div3 = document.getElementById('cinfo3');
var div4 = document.getElementById('cinfo4');
var div5 = document.getElementById('cinfo5');
var div6 = document.getElementById('cinfo6');

var display = 0;

function hideShow1()
{
  if (display == 1)
  {
    div1.style.display = 'block';
    display = 0;
  }
  else
  {
    div1.style.display = 'none';
    display = 1;
  }
}

function hideShow2()
{
  if (display == 1)
  {
    div2.style.display = 'block';
    display = 0;
  }
  else
  {
    div2.style.display = 'none';
    display = 1;
  }
}

function hideShow3()
{
  if (display == 1)
  {
    div3.style.display = 'block';
    display = 0;
  }
  else
  {
    div3.style.display = 'none';
    display = 1;
  }
}

function hideShow4()
{
  if (display == 1)
  {
    div4.style.display = 'block';
    display = 0;
  }
  else
  {
    div4.style.display = 'none';
    display = 1;
  }
}

function hideShow5()
{
  if (display == 1)
  {
    div5.style.display = 'block';
    display = 0;
  }
  else
  {
    div5.style.display = 'none';
    display = 1;
  }
}

function hideShow6()
{
  if (display == 1)
  {
    div6.style.display = 'block';
    display = 0;
  }
  else
  {
    div6.style.display = 'none';
    display = 1;
  }
}

