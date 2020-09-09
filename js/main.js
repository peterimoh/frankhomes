const store = Vue.observable({
    isNavOpen: false
});

const mutations = {
    setIsNavOpen(yesno) {
        store.isNavOpen = yesno;
    },
    toggleNav() {
        store.isNavOpen = !store.isNavOpen;
    }
};


Vue.component('sidebar', {
    template: '#sidebar',
    methods: {
        closeSidebarPanel: mutations.toggleNav
    },
    computed: {
        isPanelOpen() {
            return store.isNavOpen
        }
    }
});

Vue.component('burger', {
    template: '#burger',
    computed: {
        isBurgerActive() {
            return store.isNavOpen
        }
    },
    methods: {
        toggle() {
            mutations.toggleNav()
        }
    }
});

new Vue({
    el: '#app'
})