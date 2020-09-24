<template>
<div>
    <input type="text" :value="initValue" @input='changeData'>
</div>
</template>

<script>
export default {
    props: {
        initValue: {
            type: String,
            default: ''
        }
    },
    setup(props, context) {
        const changeData = (e) => {
            context.emit('update:initValue', e.target.value)
        }
        return {
            changeData
        }
    }
}
</script>
