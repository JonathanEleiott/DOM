
const ul = document.querySelector('#least-favorite-numbers');
const h1 = document.querySelector('main > h1');

h1.addEventListener('mouseover', () => {
  h1.style.color = 'green';
});

h1.addEventListener('mouseleave', () => {
  h1.style.color = 'black';
});

const changeLiBackground = () => {
  const listItems = document.querySelectorAll('.least-favorite');
  const listItemsArray = [...listItems];

  listItemsArray.forEach((li) => {
    li.style.backgroundColor = `brown`;
  })

  const favoriteListItems = document.querySelectorAll('.favorite');
  const favoriteListItemsArray = [...favoriteListItems];
  
  favoriteListItemsArray.forEach((li) => {
    li.style.backgroundColor = 'aqua';
  })

}

const displayRandomNumberInList = () => {
  const newLi = document.createElement('li');
  newLi.innerText = getRandomNumberUpTo100();
  newLi.classList.add('least-favorite');
  
  ul.append(newLi);
}

const getRandomNumberUpTo100 = () => {
  return Math.floor(Math.random() * 101);
}



const intervalId = setInterval(() => {
  displayRandomNumberInList();
  
  const listItems = document.querySelectorAll('li');
  
  if(listItems.length >= 5) {
    clearInterval(intervalId);
  }
}, 1000);

const otherIntervalId = setInterval(() => {
  changeLiBackground();
}, 3000)


setInterval(() => {
  console.log(`hello`)
}, 500)



console.log(intervalId);
console.log(otherIntervalId);


// .5 * 101 => 50.5 -> 50
// .7 * 101 => 70.7 -> 70
// 0 * 101 => 0 -> 0
// .999999999 * 101 => 100.999999 -> 100






const namesUL = document.querySelector('#names');

namesUL.addEventListener('click', (event) => {
  if(event.target.tagName === 'LI') {
    event.target.style.backgroundColor = 'limegreen';
  }
})





// FORMS
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('form submitted');
})