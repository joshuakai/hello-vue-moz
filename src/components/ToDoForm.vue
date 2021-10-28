<template>
  <form @submit.prevent="onSubmit">
    <label for="new-todo-input">
      What needs to be done?
    </label>
    <input
        type="text"
        id="new-todo-input"
        name="new-todo"
        autocomplete="off"
        v-model.lazy.trim="label"
    />
    <button type="submit">
      Add
    </button>
  </form>
</template>

<script>
export default {
  name: "ToDoForm.vue",
  methods: {
    onSubmit() {
      console.log('Label value: ', this.label);
    }
  },
  data() {
    return {
      label: ""
    };
  }
}

</script>

<style scoped>

</style>