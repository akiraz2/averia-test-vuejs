<template lang="pug">
  .container.home
    h1.header Список задач
    router-link(to="/task/new").btn.btn--primary Добавить
    task-list
</template>

<script>
import TaskList from '@/components/TaskList';

export default {
    name: 'HomePage',
    components: { TaskList }
};
</script>
