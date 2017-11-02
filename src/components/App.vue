<template>
    <div class="app">
    	<fd-navbar></fd-navbar>
        <router-view :situations="situations"></router-view> 
    </div>
</template>

<script>
    import fdNavbar from './fd-navbar.vue';

    export default {
        name: 'app',
        components: {
            fdNavbar
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
