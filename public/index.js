vm = new Vue({
    el: "#_main",

    data: {
        searchBox: "",
        passedSearch: [],
        users: [],
    },

    methods: {
        btnToA(arg) {
            window.location.href = `/${arg}`
        },
        reaggregate() {
            this.passedSearch = [];
            const regex = new RegExp(this.searchBox);
            this.passedSearch = this.users.filter(user => {
                console.log(regex, user, regex.test(user.username))
                console.log(regex.test(user.username))
                // regex.test(user.username) == true
            });
        }
    },

    created: async function() {
        const _users = await fetch("/users");
        const users = await _users.json();
        this.users = users;
    }
}) 