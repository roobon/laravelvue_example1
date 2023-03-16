
<script setup>
    import Navbar from "./front_components/Navbar.vue";
</script>
<template>
    <div class="p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap 5 Page</h1>
    <p>Resize this responsive page to see the effect!</p> 
    </div>
    <Navbar></Navbar>
    <router-view></router-view>

<div class="mt-5 p-4 bg-dark text-white text-center">
  <p>Footer</p>
</div>

</template>
<script>

export default {

}
</script>