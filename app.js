// onloading


const  unreadNotifications = document.querySelectorAll('.notification--active')

function setNotAmount() {
    const  unreadNotifications = document.querySelectorAll('.notification--active')
    const notificationAmount = document.querySelector('.header__amount')
    notificationAmount.innerText = unreadNotifications.length
}

setNotAmount()

unreadNotifications.forEach(n => {
    n.querySelector('.notification__status').addEventListener('click', handleClick)
})

function handleClick(e) {
    e.target.removeEventListener('click', handleClick)
    e.target.closest('.notification--active').classList.remove('notification--active')
    e.target.remove()
    setNotAmount()
}

const markAll = document.querySelector('.header__btn')

markAll.addEventListener('click', () => {
    const  unreadNotifications = document.querySelectorAll('.notification--active')
    unreadNotifications.forEach(n => {
        n.classList.remove('notification--active')
        const circle = n.querySelector('.notification__status')
        circle.removeEventListener('click', handleClick)
        circle.remove()
        setNotAmount()
    })
})