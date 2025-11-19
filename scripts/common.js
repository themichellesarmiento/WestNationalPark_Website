const arrowButton = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar')

arrowButton.addEventListener('click' , ()=> {
  arrowButton.classList.add('animate');
  sidebar.classList.add('show')
})
