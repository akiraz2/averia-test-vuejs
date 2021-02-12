<template lang="pug">
  .container(v-loading="isLoading")
    preloader(v-if="isLoading")
    .task-view-page(v-else="isLoading")
      h1.header Задача \#{{ task.id }}
      span.header__sub
      .task-view-page__content
        small Заголовок:
        p {{ task.title }}
        small Описание:
        p {{ task.description }}
        small Дата создания:
        p {{ task.created_date }}
        small Статус:
        p
          select.form-control__select(v-model="task.status" @change="handleChangeStatus")
            option(v-for="option in statuses" :key="option.id" :value="option.id") {{ option.title }}
      button.btn.btn--danger(@click="deleteTask" style="margin-top: 20px") Удалить
</template>

<script>
import Preloader from '@/components/Preloader';
import statuses from '@/utils/statuses';

export default {
    name: 'TaskViewPage',
    components: { Preloader },
    data() {
        return {
            isLoading: false,
            task: {},
            statuses: Object.freeze(statuses)
        };
    },
    watch: {
        '$route.params.id': {
            handler: 'getItem',
            immediate: true
        }
    },
    methods: {
        async getItem(id) {
            this.isLoading = true;
            try {
                const {data, status} = await this.axios.get(`/tasks/${id}`);
                this.task = data;
            } catch (e) {
                console.error(e);
            } finally {
                setTimeout(() => {
                    this.isLoading = false;
                }, 1500);
            }
        },
        async deleteTask() {
            if (!confirm('Точно удалить?')) {
                return;
            }
            this.isLoading = true;
            try {
                const {status} = await this.axios.delete(`/tasks/${this.task.id}`);
                if (status === 200) {
                    this.$router.replace(`/`);
                }
            } catch (e) {
                console.error(e);
            } finally {
                this.isLoading = false;
            }
        },
        async handleChangeStatus() {
            this.isLoading = true;
            try {
                const form = {...this.task};
                const {data, status} = await this.axios.put(`/tasks/${this.task.id}`, form);
                if (status === 200) {
                    this.getItem(data.id);
                }
            } catch (e) {
                console.error(e);
            } finally {
                this.isLoading = false;
            }
        }
    }
};
</script>

<style scoped>

</style>
