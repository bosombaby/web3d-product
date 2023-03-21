import { defineStore } from 'pinia'

const useSettingStore = defineStore('setting', {
    state: () => {
        return {
            params: {
                orbit: {
                    autoRotate: true,
                    autoRotateSpeed: 0.001,
                },
                obj: {
                    roughness: 0.5,
                    metalness: 0,
                    wireframe: false,
                    type: 'default',
                    choice: ['default', 'solid', 'wireframe']
                },

            }
        }
    }
})

export default useSettingStore