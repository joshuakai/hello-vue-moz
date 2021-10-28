<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div id="app">
    <h1>To-Do List</h1>
    <ul>
      <li v-for="item in ToDoItems" :key="item.id">
        <to-do-item :label="item.label" :done="item.done"></to-do-item>
      </li>
    </ul>
  </div>
</template>
<script>
import ToDoItem from '../components/ToDoItem.vue';

export default {
  name: 'app',
  components: {
    ToDoItem
  },
  data() {
    return {
      ToDoItems: [
        {label: 'Learn Vue', done: false},
        {label: 'Create a Vue project with the CLI', done: true},
        {label: 'Have fun', done: true},
        {label: 'Create a to-do list', done: false}
      ]
    };
  }
};
</script>
