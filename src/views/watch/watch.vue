<template>
<h3>watch</h3>
<div>{{count}}</div>
<button @click="count++">增加count</button>
</template>

<script>
import {
    ref,
    watch
} from 'vue'
export default {
    setup() {
        let count = ref(0);
        watch('count', (newVal, oldVal) => {
            console.log(newVal)
        })
        count.value++
        return {
            count
        }
    }
}
</script>
