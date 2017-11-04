<template>
    <div class="app">
    	<fd-navbar></fd-navbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import fdNavbar from './fd-navbar.vue';

    export default {
        name: 'app',
        components: {
            fdNavbar
        }
    }
</script>

<style>

</style>
