<script setup lang="ts">
//@ts-ignore
import { tasks } from './Task.ts';
let testTask = { title: 'Test Title', todo: 'this is what to do', isDone: false };
let testTask2 = { title: 'Test Title2', todo: 'this is what to do', isDone: false };
let testTask3 = {
  title: 'Test Title3',
  todo: 'this is what to do and some more stuff bla bla bla bla bla bla bla bla bla',
  isDone: false
};
tasks.value.push(testTask, testTask2, testTask3);
</script>
<template>
  <ul class="box">
    <li class="task grid" v-for="(task, index) in tasks" :key="index">
      <div class="textbox">
        <h2>{{ task.title }}</h2>
        <p>{{ task.todo }}</p>
      </div>
      <input class="checkbox" type="checkbox" v-model="task.isDone" />
    </li>
  </ul>
</template>
<style scoped>
.box {
  display: flex;
  flex-direction: row;
  align-items: center;
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
  grid-template-columns: 0.5fr 2fr;
  grid-template-areas: 'checkbox text';
}

.checkbox {
  grid-area: checkbox;
  width: 30px;
}

.textbox {
  display: flex;
  flex-direction: column;
  grid-area: text;
}
h2{
  height: 10px;
}

li {
  list-style-type: none;
}
</style>
