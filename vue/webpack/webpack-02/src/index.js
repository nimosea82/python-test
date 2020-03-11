//入口js

function add(a, b) {
    return a + b;
}

console.log(add(1,2))

import './css/index.css'

import Vue from 'vue'

var vm = new Vue({
    el:'#app',
    data:{
        msg:'hello'
    }

})