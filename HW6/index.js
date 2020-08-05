/*
TASK1
document.getElementById("test").innerHTML = "Last";
document.body.firstElementChild.innerHTML = "Last";
*/


/*
TASK2
let cat = document.getElementsByClassName("image")[0].src = "cat.jpg";
let n = document.body.children[0];
alert(n.outerHTML);
*/

/*
TASK3
let n = document.querySelectorAll('div>p');
for (let i=0; i < n.length; i++){
    console.log(`Selector text ${i}: ${n[i].innerHTML}`);
}
*/


/*TASK4
let list = document.querySelectorAll('li');
alert(list[0].innerHTML + ',' + list[list.length-1].innerHTML + ','+ list[1].innerHTML + ','+ list[3].innerHTML + ',' + list[2].innerHTML);

let list2 = document.getElementById('list');
alert(list2.firstElementChild.innerHTML + ',' + list2.lastElementChild.innerHTML + ','+ list2.firstElementChild.nextElementSibling.innerHTML + ',' + list2.lastElementChild.previousElementSibling.innerHTML + ',' + list2.lastElementChild.previousElementSibling.previousElementSibling.innerHTML);
*/


/*TASK5
document.body.firstElementChild.style.backgroundColor = 'lightgreen';
let parag = document.getElementById('myDiv');
parag.firstElementChild.style.fontWeight = 'bold';
parag.children[1].style.color = 'red';
parag.children[2].style.textDecoration = 'underline';
parag.children[3].style.fontStyle = 'italic';

let list = document.getElementById('myList');
list.style.listStyleType = 'none';
list.style.display = 'flex';

document.getElementsByTagName('span')[0].style.visibility ='hidden';
*/


/*TASK6
let firstMes = prompt('Please, enter the message:');
let secondMes = prompt('Please, enter the second message:');

document.getElementById('input1').value = firstMes;
document.getElementById('input2').value = secondMes;

document.getElementById('input1').value = secondMes;
document.getElementById('input2').value = firstMes;
*/









