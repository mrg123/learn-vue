var app = new Vue({
    el:'#app',
    data:{
        message:'Hello Vue!'
    }
});

app.message = ' i have sdfsdf ';


var app2 = new Vue({
    el:'#app2',
    data:{
        sean:true
    }
});

app2.sean = false;

var app3 = new Vue({
    el: '#app3',
    data : {
        todos:[
            { text: 'abc'},
            { text: 'vue'},
            { text: 'ebsd'},
            { text: 'bul'}
        ]
    }
});

app3.todos.push({
    text2: 'new'
});

app4 = new Vue({
    el:'#app4',
    data:{
        message:'hello world'
    },
    methods:{
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('');
        }
    }
});