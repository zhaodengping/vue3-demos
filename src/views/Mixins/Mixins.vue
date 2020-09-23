<template>
<div>
    <h3>mixins</h3>
    <div>mixins的生命周期是在正常引入的生命周期之前，可以打开控制台查看</div>
    <div>结果是</div>
    <pre><code>mixins created 
正常的created 
mixins mounted
正常的mounted
</code>
    </pre>
</div>
</template>

<script>
import {
    mixins
} from '../../assets/js/mixins'
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
