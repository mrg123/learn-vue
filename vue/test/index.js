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

var app6 = new Vue({
    el:'#app6',
    data: {
        message:'hello vue!'
    }
});

// 定义组件 todo-item
Vue.component('todo-item', {
    template: '<li>这是个待办项</li>'
});

// 先创建组件,再实例化
Vue.component('todo',{
    props: ['k2'], 
    template: '<li>{{ k2.text }}</li>'
});
new Vue({
    el:'#app8',
    data:{
        groceryList: [
            { id:0, text:'123213'},
            { id:1, text:'23'},
            { id:2, text:'123'}
        ]
    }
});


