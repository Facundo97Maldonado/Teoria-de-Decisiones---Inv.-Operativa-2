<template>
    <div class="app">
    	<fd-navbar></fd-navbar>
        <router-view></router-view>
        <fd-footer></fd-footer>
    </div>
</template>

<script>
    import fdNavbar from './fd-navbar.vue';
    import fdFooter from './fd-footer.vue';

    export default {
        name: 'app',
        components: {
            fdNavbar,
            fdFooter
        },
        data() {
            return {
                situations: []
            }
        }
    }
</script>

<style>

</style>
