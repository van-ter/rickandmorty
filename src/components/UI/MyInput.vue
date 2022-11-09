<template>
    <input 
        :value="modelValue"
        @input="updateInput"
        class="input"
        type="text"
    >
</template>
<script>
    export default {
        name: 'my-input',
        props: {
            modelValue: [String, Number]
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>
<style scoped>
    .input[data-v-2f46d669] {
        border: none;
        height: 31px;
        border-radius: 6px;
        padding: 0 10px;
        background: #fff;
    }
</style>