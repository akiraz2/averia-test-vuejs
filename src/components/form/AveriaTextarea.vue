<template lang="pug">
  .form-control
    label.form-control__label(:for="label") {{ label }}
    textarea.form-control__input(:id='label' :value="value" @input="handleInput" :placeholder="placeholder")
</template>

<script>
import AveriaInput from '@/components/form/AveriaInput';

export default {
    name: 'AveriaTextarea',
    extends: AveriaInput
};
</script>

<style scoped>

</style>
