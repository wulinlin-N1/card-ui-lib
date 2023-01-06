import Demo from './demo'
import Card from './card'

const components = [
  Demo,
  Card
]

const install = function(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  install,
  Demo,
  Card
}

export {
  install,
  Demo,
  Card
}

export default API
