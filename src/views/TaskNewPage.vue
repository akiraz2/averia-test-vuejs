<template lang="pug">
  .container.task-new-page
    h1.header Создание новой задачи
    averia-form(@submit="handleSubmit")
      averia-input(v-model="model.title" label='Заголовок')
      averia-textarea(v-model="model.description" label='Описание')
      button.btn.btn--primary Создать
</template>

<script>
import AveriaForm from '@/components/form/AveriaForm';
import AveriaInput from '@/components/form/AveriaInput';
import AveriaTextarea from '@/components/form/AveriaTextarea';

export default {
    name: 'TaskNewPage',
    components: { AveriaTextarea, AveriaInput, AveriaForm },
    data() {
        return {
            isLoading: false,
            model: {
                title: '',
                description: ''
            }
        };
    },
    methods: {
        async sendRequest() {
            this.isLoading = true;
            try {
                const form = {...this.model, status: 1, created_date: (new Date()).toLocaleString()};
                const {data, status} = await this.axios.post(`tasks`, form);
                this.$router.replace(`/task/${data.id}`);
            } catch (e) {
              console.error(e);
            } finally {
                this.isLoading = false;
            }
        },
        handleSubmit() {
            this.sendRequest();
        }
    }
};
</script>

<style scoped>

</style>
