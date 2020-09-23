<template>
<div class="menu">
    <ul>
        <li>
            <router-link to='/home/mixins'>mixins</router-link>
        </li>
    </ul>
</div>
</template>

<style lang="scss" scoped>
.menu {
    margin-right: 20px;
    padding-right: 20px;
    width: 10%;
    text-align: right;
    border-right: 1px solid #f2f2f2;
    min-height: calc(100vh - 50px);
}

li {
    list-style: none;
}

a {
    text-decoration: none;
    color: #1989fa;
}
</style>
