import { createApp } from 'vue'
import App from './App.vue'

// импорт компонентов
import components from '@/components'
// console.log(components[0].name)

// создаем приложениe
const app = createApp(App)

// глобальная регистрация компонентов
components.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')

// createApp(App).mount('#app')
