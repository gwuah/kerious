vm = new Vue({
    el: "#_main",
    data: {

    },
    methods: {
        btnToA(arg) {
            window.url = `/${arg}`
        }
    }
}) 