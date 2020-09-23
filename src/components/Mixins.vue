<template>
<div>mixins</div>
</template>

<script>
import {
    mixins
} from '../mixins/mixins'
export default {
    mixins: [mixins],

    created() {
        console.log('正常的created')
    },

    mounted() {
        console.log('正常的mounted')
    },
}
</script>
