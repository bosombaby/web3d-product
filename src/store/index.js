import { createPinia } from 'pinia'
import useProductStore from './modules/product'
import useSettingStore from './modules/viewSetting'


const store = createPinia()

export function registerStore (app) {
    app.use(store)
}

export {useProductStore,useSettingStore}
