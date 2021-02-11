<template lang="pug">
  form.form(@submit.prevent="handleSubmit")
    slot
</template>

<script>
export default {
    name: 'AveriaForm',
    methods: {
        handleSubmit(val) {
            console.log(val);
            this.$emit('submit');
        }
    }
};
</script>

<style scoped>

</style>
