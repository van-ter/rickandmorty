<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        name: 'my-button'
    }
</script>
<style>
    .btn {
        background-color: #0f2b46;
        padding: 8px 15px;
        border-radius: 8px;
        color: #fff;
        transition: .3s;
        border: none;
        cursor: pointer;
    }
    .btn:hover {
        background-color: #294e71;
    }
</style>