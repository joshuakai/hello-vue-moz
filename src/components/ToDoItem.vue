<template>
  <div>
    <input type="checkbox" :id="id" :checked="isDone" />
    <label :for="id">{{label}}</label>
  </div>
</template>

<script>

import uniqueId from 'lodash.uniqueid';
export default {
  name: "ToDoItem",
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean }
  },
  // eslint-disable-next-line @typescript-eslint/ban-types
  data():{} {
    return {
      isDone: this.done,
      id: uniqueId('todo-')
    };
  }
}
</script>

<style scoped>

</style>