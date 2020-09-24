<template>
<div>
    <EmitEventChild @large='text=1' />
    <div>{{text}}</div>
</div>
</template>

<script>
import {
    ref
} from 'vue'
import EmitEventChild from '../../components/EmitChild/EmitEventChild.vue'
export default {
    components: {
        EmitEventChild
    },
    emits: ['large'],
    setup() {
        const text = ref('');
        return {
            text
        }
    }
}
</script>
