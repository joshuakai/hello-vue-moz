<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div id="app">
    <h1>To-Do List</h1>
    <to-do-form></to-do-form>
    <ul>
      <li v-for="item in ToDoItems" :key="item.id">
        <to-do-item :id="item.id" :label="item.label" :done="item.done"></to-do-item>
      </li>
    </ul>
  </div>
</template>
<script>
import uniqueId from 'lodash.uniqueid'
import ToDoItem from '../components/ToDoItem.vue';
import ToDoForm from '../components/ToDoForm.vue';

export default {
  name: 'app',
  components: {
    ToDoItem,
    ToDoForm
  },
  data() {
    return {
      ToDoItems: [
        { id: uniqueId('todo-'), label: 'Learn Vue', done: false },
        { id: uniqueId('todo-'), label: 'Create a Vue project with the CLI', done: true },
        { id: uniqueId('todo-'), label: 'Have fun', done: true },
        { id: uniqueId('todo-'), label: 'Create a to-do list', done: false }
      ]
    };
  }
};
</script>
