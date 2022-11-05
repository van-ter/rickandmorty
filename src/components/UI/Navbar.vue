<template>
    <nav>
        <div class="container">
            <div class="row_navbar">
                <div class="col">
                    Characters <b>Favourites</b>
                </div>
                <div class="col">
                    <RouterLink to="/">Like</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        name: 'navbar', 
    }
</script>
<style>
    nav {
        background: #0f2b46;
    }
    .row_navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 50px;
        color: #fff;
        padding: 10px 0;
    }
    .col b {
        margin-left: 5px;
        color: #b3b3b3;
    }
</style>