import Router from './router.js'
import Events from './events.js'
import { buttonHome, buttonAbout, buttonExplorer, page } from './elements.js'

const router = new Router()
const events = Events({ buttonAbout, buttonHome, buttonExplorer, page })

router.add('#home', 'pages/home.html')
router.add('#about', 'pages/about.html')
router.add('#explorer', 'pages/explorer.html')
router.add(404, 'pages/error.html')

router.handle()
window.route = () => router.route()
window.onpopstate = () => router.handle()
events.ButtonEvents()

window.onhashchange = () => {
  events.ButtonEvents()
}
page.addEventListener('click', () => {
  events.ButtonEvents()
})

