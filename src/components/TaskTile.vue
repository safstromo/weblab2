<script setup lang="ts">
import { tasks } from './Task';

</script>
<template>
  <ul class="box">
    <li class="task grid" v-for="(task, index) in tasks" :key="index">
      <div class="textbox">
        <h2>{{ task.title }}</h2>
        <p>{{ task.todo }}</p>
      </div>
      <input class="checkbox" type="checkbox" v-model="task.isDone" />
      <button class="deleteBtn">Delete</button>
    </li>
  </ul>
</template>
<style scoped>
.box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  width: 90%;
}

.task {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.5em;
  color: black;
  width: 300px;
  margin: 10px;
}

.grid {
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr;
  grid-template-areas: 'checkbox text delete';
}

.checkbox {
  grid-area: checkbox;
  width: 30px;
}
.deleteBtn {
  grid-area: delete;
}

.textbox {
  display: flex;
  flex-direction: column;
  grid-area: text;
  align-items: center;
  margin: 2px;
}
p{
  text-align: center;
}

h2 {
  height: 10px;
}

li {
  list-style-type: none;
}
</style>
