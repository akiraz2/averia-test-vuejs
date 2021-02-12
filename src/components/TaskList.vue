<template lang="pug">
  div
    preloader(v-if="isLoading")
    ul.task-list(v-else)
      task-item(:task="task" v-for="task in list" :key="task.id")
</template>

<script>
import TaskItem from '@/components/TaskItem';
import Preloader from '@/components/Preloader';

export default {
    name: 'TaskList',
    components: { TaskItem, Preloader },
    data() {
        return {
            isLoading: true,
            list: [],
            totalCount: 0,
            limit: 200,
            page: 1
        };
    },
    watch: {
        '$route.query.page': 'getList'
    },
    async mounted() {
        await this.getList();
    },
    methods: {
        async getList() {
            this.isLoading = true;
            try {
                const params = {_limit: this.limit, _page: this.$route.query.page};
                const {data, status, headers} = await this.axios.get(`tasks`, {params});
                this.list = data;
                this.totalCount = +headers['x-total-count'];
            } catch (e) {
                console.error(e);
            } finally {
                setTimeout(() => {
                    this.isLoading = false;
                }, 2000);
            }
        }
    }
};
</script>

<style scoped lang="scss">

</style>
