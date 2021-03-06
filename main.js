window.addEventListener('scroll', onScroll)


onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopOnScroll()
  
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // Linha alvo
  const targetLine = scrollY + innerHeight / 2

  // Verifica se a seção passou da linha
  // Quais dados vou precisar?

  // o topo da seção
  const sectionTop = section.offsetTop

  // A altura da seção
  const sectionHeight = section.offsetHeight
  
  // O topo da seção chegou ou ultrapassou a linha alto
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

 // console.log('Passou da linha?', sectionTopReachOrPassedTargetLine)

  // Verificar se a base está abaixo da linha
  // Quais dados vou precisar?

  // Seção termina quando
  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine )

  // Limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId =section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  } 
}

function showNavOnScroll() {
const navigation = document.getElementById("navigation")
  if(scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopOnScroll() {
const backToTopButton = document.getElementById("backToTopButton")
  if(scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}


ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`#home,
   #home video,
   #services,
   #services .projects,
   #about,
   #about .header,
   #about .content`);