<template lang="pug">
  ul.task-list
    task-item(:task="task" v-for="task in list" :key="task.id")
</template>

<script>
import TaskItem from '@/components/TaskItem';
export default {
    name: 'TaskList',
    components: { TaskItem },
    data() {
        return {
            isLoading: false,
            list: []
        };
    },
    created() {
        this.getList();
    },
    methods: {
        async getList() {
            this.isLoading = true;
            try {
                const {data, status} = await this.axios.get(`tasks`);
                this.list = data;
            } catch (e) {
                console.error(e);
            } finally {
                this.isLoading = false;
            }
        }
    }
};
</script>

<style scoped lang="scss">

</style>
