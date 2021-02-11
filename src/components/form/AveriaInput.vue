<template lang="pug">
  .form-control
    label.form-control__label(:for="label") {{ label }}
    input.form-control__input(:id='label' :value="value" @input="handleInput" :placeholder="placeholder")
</template>

<script>
export default {
    name: 'AveriaInput',
    props: {
        value: {
            type: [String],
            required: true
        },
        label: {
            type: String,
            required: false,
            default: ''
        },
        placeholder: {
            type: String,
            required: false,
            default: ''
        }
    },
    data() {
        return {

        };
    },
    methods: {
        handleInput($event) {
            this.$emit('input', $event.target.value);
        }
    }
};
</script>

<style scoped>

</style>
