<template lang="pug">
    li.task-item(:style="{backgroundColor: classFromStatus}" @dblclick="goToPage")
      h3.task-item__header {{ task.title }}
      .task-item__content {{ task.description }}
</template>

<script>
import {statusesColor} from '@/utils/statuses';

export default {
    name: 'TaskItem',
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    computed: {
        classFromStatus() {
            return statusesColor[this.task.status];
        }
    },
    methods: {
        goToPage() {
            this.$router.push(`/task/${this.task.id}`);
        }
    }
};
</script>

<style scoped>

</style>
