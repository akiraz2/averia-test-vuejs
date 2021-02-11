<template lang="pug" functional>
    .container
      h1.header 404
      p Страница не найдена
      router-link(to="/") вернуться на главную
</template>

<script>

export default {
    name: 'Page404'
};
</script>
