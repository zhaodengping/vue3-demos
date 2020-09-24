<template>
<div>EmitChild</div>
<button @click="pushData">传递参数</button>
</template>

<script>
export default {
    setup(props, context) {
        const pushData = () => {
            context.emit('getData', 'childData')
        }
        return {
            pushData
        }
    }
}
</script>
