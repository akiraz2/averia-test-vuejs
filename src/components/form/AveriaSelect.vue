<template lang="pug">
  .form-control
    label.form-control__label(:for="label") {{ label }}
    select.form-control__select(:id='label' :value="value" @input="handleInput")
</template>

<script>
/**
 * @todo
 */
export default {
    name: 'AveriaSelect',
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
        options: {
            type: Array,
            required: true
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
