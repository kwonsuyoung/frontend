<template>
    <div>
        <div>
            <h3>Option test</h3>
            <div>message : {{ msg }}</div>
            <span v-once>only one : {{ msg }}</span>
            <input type="text" v-model="msg"/>
            <br>
            <br>
            <button v-bind:disabled="isButtonDisabled">Button</button>
            <br>
            <p>computed message: "{{ computedMethod }}"</p>
            <p>method message: "{{ methodMethod }}"</p>
            <p>computed message: "{{ computedMethod }}"</p>
            <p>method message: "{{ methodMethod }}"</p>
            <!-- 반복 콜되냐 캐싱으로 한번만 콜되냐 확인용으로 두번씩 -->
             <br>
             <br>
            <div>firstName : {{ firstName }}</div>
            <div>fullName : {{ fullName }}</div>
            <input type="text" v-model="firstName"/>
            <input type="text" v-model="lastName"/>
            <br>
            <span v-html="htmlData"></span>
        </div>
    </div>
</template>
<script>
    export default{
    data() {
            return {
                msg: 'hello',
                isButtonDisabled: true,
                firstName: 'foo',
                lastName: 'bar',
                fullName: 'Foo Bar',
                htmlData: '<a href="#">hello</a>'
            }
        },
    computed: {
        computedMethod: function () {
            console.log('computed function call......')
            return this.mag.split("").reverse().join("")
            }
    },
    methods: {
        methodMethod: function () {
            console.lof('method function call.....')
            return this.msg.split("").reverse().join("")
        }
    },
    watch: {
        firstName: function (val) {
            this.fullName = val + " "+ this.lastName
        },
        lastName: function (val) {
            this.fullName = this.firstName + ""+ val
        }
    }      
}
</script>