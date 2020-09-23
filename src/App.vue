<template>
<img alt="Vue logo" src="./assets/logo.png" />
<HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    provide: {
        text: "vue2222"
    },
    name: 'App',
    components: {
        HelloWorld
    }
}
</script>
