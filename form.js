const form = document.querySelector('[data-js="question-form"]');
const questionInput = form.elements['question'];
const answerInput = form.elements['answer'];
const tagInput = form.elements['tag'];

const createCharacterCounterListener = (input, counter) => {
  input.addEventListener('keyup', () => {
    counter.textContent = `${150 - input.value.length} characters left`;
  });
}

createCharacterCounterListener(questionInput, document.querySelector('[data-js="form-question-counter"]'));
createCharacterCounterListener(answerInput, document.querySelector('[data-js="form-answer-counter"]'));

form.addEventListener('submit', event => {
    event.preventDefault();
  
    const newCard = document.createElement('section');
    newCard.className = 'question-card';
  
    const elements = [
      {tag: 'p', text: questionInput.value},
      {tag: 'img', class: 'question-card__icon', id: 'card-bookmark'},
      {tag: 'button', class: 'question-card__button', text: 'Show Answer', listener: handleAnswerToggle},
      {tag: 'p', class: 'question-card__answer', text: answerInput.value, style: {display: 'none'}},
      {tag: 'ul', class: 'question-card__tags', child: {tag: 'li', class: 'question-card__tag-container-item', text: tagInput.value}},
      {tag: 'button', class: 'card-bookmark', text: 'Bookmark', listener: handleBookmarkToggle}  // Bookmark button added here
    ];
  
    elements.forEach(element => {
      const newElement = document.createElement(element.tag);
      newElement.textContent = element.text || '';
      newElement.className = element.class || '';
      newElement.id = element.id || '';
  
      if(element.style) {
        for(const style in element.style) {
          newElement.style[style] = element.style[style];
        }
      }
  
      if(element.listener) {
        newElement.addEventListener('click', element.listener);
      }
  
      if(element.child) {
        const child = document.createElement(element.child.tag);
        child.textContent = element.child.text;
        child.className = element.child.class;
        newElement.appendChild(child);
      }
  
      newCard.appendChild(newElement);
    });
  
    document.getElementById('question-cards-container').appendChild(newCard);
  
    form.reset();
  });
  
  function handleAnswerToggle(event) {
    const answerElement = event.target.nextSibling;
    if(answerElement.style.display === 'none') {
      answerElement.style.display = 'block';
      event.target.innerHTML = 'Hide Answer';
    } else {
      answerElement.style.display = 'none';
      event.target.innerHTML = 'Show Answer';
    }
  }
  
  function handleBookmarkToggle(event) {
    event.currentTarget.classList.toggle("hidden");
  }

  