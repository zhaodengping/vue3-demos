<template>
<div>
    <h3>v-model用法</h3>
    <ModelChild v-model:initValue='initValue' />
    <div>{{initValue}}</div>
</div>
</template>

<script>
import {
    ref
} from 'vue'
import ModelChild from '../../components/ModelChild/ModelChild.vue'
export default {
    components: {
        ModelChild
    },
    setup() {
        const initValue = ref('fff')
        return {
            initValue
        }
    }
}
</script>
