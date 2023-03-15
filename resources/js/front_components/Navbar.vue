<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
        <ul class="navbar-nav">
        <li class="nav-item">
            <RouterLink class="nav-link active" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
        </li>
        </ul>
    </div>
    </nav>
</template>
<script>
    export default {

    }
</script>