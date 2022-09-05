//Punkt 1
document.querySelector('#ex1').addEventListener('click', function () {
document.querySelectorAll('h1')[0].innerText = "Heiiiii det mig"    
})

//Punkt 2
document.querySelector('#ex2').addEventListener('click', function () {
    document.querySelectorAll('p').forEach(element => {
        element.style.color = "red"
    });
    
})

//Punkt 3
document.querySelector('#ex3').addEventListener('click', function () {
    document.querySelectorAll('li').forEach(element => {
        element.style.rotate = "25deg"
    });
       
})

//Punkt 4
document.querySelector('#ex4').addEventListener('click', function () {
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(element => {
    element.style.display = "none"
   });
})

//Punkt 5
document.querySelector('#ex5').addEventListener('click', function () {
   document.querySelectorAll('a')[0].style.fontFamily = "Arial" 
   document.querySelectorAll('a')[0].style.color = "red" 
})

//Punkt 6
document.querySelector('#ex6').addEventListener('click', function () {
   document.querySelectorAll('ol')[0].innerHTML = document.querySelectorAll('ol')[0].innerHTML + '<li>Aliquam tincidunt mauris eu risus.</li>'
})

//Punkt 7
document.querySelector('#ex7').addEventListener('click', function () {
 for (let index = 0; index < document.querySelectorAll('li').length; index += 2) {
    document.querySelectorAll('li')[index].style.color = "red"
 }   
})

//Punkt 8
document.querySelector('#ex8').addEventListener('click', function () {
    document.querySelectorAll('h3')[0].outerHTML = '<ul></ul>'
    document.querySelectorAll('h4')[0].outerHTML = '<ol></ol>'
    document.querySelectorAll('ul')[0].innerHTML = document.querySelectorAll('ol')[0].innerHTML
    document.querySelectorAll('ol')[0].innerHTML = ""
    document.querySelectorAll('ol')[1].innerHTML = document.querySelectorAll('ul')[1].innerHTML
    document.querySelectorAll('ul')[1].innerHTML = ""
})

//Punkt 9 - Ikke færdig
document.querySelector('#ex9').addEventListener('click', function () {

    document.querySelectorAll('ol')[0].style.position = "absolute" 
    
    //document.querySelectorAll('ol')[0].style.marginLeft = "100vh" 

})

//Punkt 10
document.querySelector('#ex10').addEventListener('click', function () {
    if (document.querySelectorAll('button')[0].style.display == "none") {
        document.querySelectorAll('button').forEach(element => {
            element.style.display = "block"
        });
    }else{
        document.querySelectorAll('button').forEach(element => {
        element.style.display = "none"
    });
    document.querySelectorAll('button')[9].style.display = "block"
    }
    
})

//Punkt 11
document.querySelector('#ex11').addEventListener('click', function () {
 document.body.style.rotate = "15deg"   
})

//Punkt 12
document.querySelector('#ex12').addEventListener('click', function () {
    document.body.classList.add("bigStyle");
    console.log(document.querySelectorAll('.bigStyle'));
    document.querySelectorAll('.bigStyle')[0].style.fontSize = "25px"
})

//Punkt 13
document.querySelector('#ex13').addEventListener('click', function () {

    //I added this class this class CSS
    document.body.classList.toggle("bigStyle2");

})