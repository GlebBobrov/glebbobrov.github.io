var app = new Vue({
    el: "article",
    data: {
        products:[
            {
                id:1,
                title:"Груша вкусная", 
                short_text:'вкусная', 
                image:'../images/img/pear1.png', 
                desc: "Груша - это вкусный и полезный фрукт, который содержит много витаминов и минералов. Она помогает улучшить пищеварение и укрепить иммунную систему."
            },
            {
                id:2,
                title:"Груша сладкая", 
                short_text:'сладкая', 
                image:'pear2.png', 
                desc: "Груша - это сладкий и сочный фрукт, который идеально подходит для десертов и салатов. Она содержит много клетчатки и антиоксидантов."
            },
            {
                id:3,
                title:"Груша сочная", 
                short_text:'сочная', 
                image:'pear3.png', 
                desc: "Груша - это сочный и ароматный фрукт, который отлично утоляет жажду. Она содержит много витаминов и минералов, которые полезны для здоровья."
            },
            {
                id:4,
                title:"Груша полезная", 
                short_text:'полезная', 
                image:'pear4.png', 
                desc: "Груша - это полезный фрукт, который помогает улучшить обмен веществ и снизить уровень холестерина в крови. Она содержит много клетчатки и витаминов."
            },
            {
                id:5,
                title:"Груша ароматная", 
                short_text:'ароматная', 
                image:'pear5.png', 
                desc: "Груша - это ароматный фрукт, который обладает приятным запахом и вкусом. Она содержит много антиоксидантов и витаминов, которые полезны для здоровья."
            }
        ],
        product: {},
        btnVisible: 0
    },
    mounted:function(){
        this.getProduct();
    },
    methods: {
        getProduct: function() {
            if (window.location.hash) {
                var id = window.location.hash.replace("#", "");
                if (this.products > 0) {
                    for (let i in this.products) {
                        if (this.products[i].id === id) {
                            this.product = this.products[i];
                        }
                    }
                }
            }
        }
    }
});