import Demo from './demo'
import Card from './card'

const components = {
  Demo,
  Card
}

const install = function(Vue) {
    if (install.installed) return;
    Object.keys(components).forEach(key => {
      console.log(components[key].name, components[key])
        Vue.component(components[key].name, components[key]);
    })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  install
}

export default API