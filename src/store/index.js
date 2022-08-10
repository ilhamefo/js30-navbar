import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
    state: () => {
        return {
            openMenu: false
        }
    },
    actions: {
        handleModal(param) {
            console.log(param);
            this.openMenu = param
        }
    }
})