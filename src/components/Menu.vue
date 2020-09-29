<template>
<div class="menu">
    <ul>
        <li>
            <router-link to='/home/router'>路由router</router-link>
        </li>
        <li>
            <router-link to='/home/mixins'>mixins</router-link>
        </li>
        <li>
            <router-link to='/home/emit'>emit</router-link>
        </li>
        <li>
            <router-link to='/home/modal'>v-model</router-link>
        </li>
        <li>
            <router-link to='/home/emitEvent'>emit event</router-link>
        </li>
        <li>
            <router-link to='/home/watch'>watch</router-link>
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

    ul {
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 0;
        margin: 20px 0;

        li {
            list-style: none;
            width: 100%;

            a {
                text-decoration: none;
                color: #1989fa;
            }
        }
    }
}
</style>
