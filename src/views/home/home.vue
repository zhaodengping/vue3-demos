<template>
<div>
    <TopNav></TopNav>
    <div class="content">
        <Menu></Menu>
        <main>
            <router-view></router-view>
        </main>
    </div>
</div>
</template>

<script>
import TopNav from '../../components/TopNav.vue'
import Menu from '../../components/Menu.vue'
export default {
    components: {
        TopNav,
        Menu
    }
}
</script>

<style lang="scss" scoped>
.content {
    display: flex;
}
</style>
