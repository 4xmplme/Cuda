// 'scroll to top button'
/*const arrowTop = document.querySelector('#arrowTop')
if (arrowTop) {
	arrowTop.onclick = () => {
		window.scrollTo({
			top: pageXOffset,
			behavior: "smooth"
		})
	}
}
window.addEventListener('scroll', () => arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight))*/

// 'scroll to section'
const menuList = document.querySelectorAll('.header__menu-link[data-goto]')
if (menuList.length > 0) {
	menuList.forEach(menuLink => {
		menuLink.addEventListener('click', function (element) {
			const menuLinkElement = element.target
			if (menuLinkElement.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
				const gotoSection = document.querySelector(menuLink.dataset.goto)
				const gotoSectionValue = gotoSection.getBoundingClientRect().top + pageYOffset

				if (menuIcon.classList.contains('_active')) {
					document.body.classList.remove('_lock')
					menuIcon.classList.remove('_active')
					menuBody.classList.remove('_active')
				}

				window.scrollTo({
					top: gotoSectionValue,
					behavior: "smooth"
				})
			} element.preventDefault()
		})
	})
}

// 'menu burger button'
const menuIcon = document.querySelector('.header__menu-icon')
const menuBody = document.querySelector('.header__menu-body')
if (menuIcon) {
	menuIcon.addEventListener('click', element => {
		document.body.classList.toggle('_lock')
		menuIcon.classList.toggle('_active')
		menuBody.classList.toggle('_active')
	})
}

// 'circles widget'
for (let i = 1; i <= 4; i++) {
	const colorsArray = ['#dfe8ed', '#30bae7', '#d74680', '#15c7a8', '#eb7d4b']
	const valueArray = [0, 90, 75, 70, 85]
	const child = document.getElementById('circle-' + i)
	const circle = Circles.create({
		id: child.id,
		value: valueArray[i],
		radius: 75,
		width: 10,
		colors: [colorsArray[0], colorsArray[i]],
		text: value => value + '%'
	})
}