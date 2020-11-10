// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".

// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.

//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);


function firstList(){
  let spanSelected = document.querySelector('.selected');
  let parentUl = spanSelected.parentNode.parentNode;

  let listLi = parentUl.children;

  let firstChild = parentUl.firstElementChild;

  for(let i = 1; i <= listLi.length; i++){
    firstChild.firstElementChild.classList.add("element-" + i);
    console.log(firstChild.firstElementChild);
    firstChild=firstChild.nextElementSibling;
  }
 
  console.log(listLi);
};

function paresElement(){
  let selector = document.querySelectorAll("li");
  let pares = [];
  let count = 1;
  for(element of selector){
    if(count % 2 == 0){
      pares.push(element);
    }
    count ++;
  }

  let spanSelected = document.querySelector('.selected');
  let parentUl = spanSelected.parentNode.parentNode;

  pares.forEach(Element => parentUl.removeChild(Element));
  
};

function secondList(){
  let list2 = document.getElementById("list2");
  var li1 = document.createElement("li");
  var li2 = document.createElement("li");
  var li3 = document.createElement("li");

  var button1 = document.createElement("button");
  var button2 = document.createElement("button");
  var button3 = document.createElement("button");

  button1.innerHTML = "texto ejemplo 1";
  button2.innerHTML = "texto ejemplo 3";
  button3.innerHTML = "texto ejemplo 5";

  button3.setAttribute("disabled", "");

  li1.appendChild(button1);
  li2.appendChild(button2);
  li3.appendChild(button3);

  list2.appendChild(li1);
  list2.appendChild(li2);
  list2.appendChild(li3);
   
  console.log(list2);

}

function onLoad() {
  firstList();
  paresElement();
  secondList();
 
}
