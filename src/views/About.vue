<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div id="app">
    <h1>To-Do List</h1>
    <ul>
      <li>
        <to-do-item label="My ToDo Item"></to-do-item>
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
  }
};
</script>
