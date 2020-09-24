<template>
<div>
    <EmitChild @getData='getData' />
</div>
</template>

<script>
import EmitChild from '../../components/EmitChild/EmitChild.vue'
export default {
    components: {
        EmitChild
    },
    setup() {
        const getData = (e) => {
            console.log(e)
        }
        return {
            getData
        }
    }
}
</script>
