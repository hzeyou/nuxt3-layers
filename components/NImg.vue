<script setup lang="ts">

</script>

<template>
  <div>
    <p>使用相对路径</p>
    <img src="../assets/img.png" alt="Layers1" />
    <p>使用别名路径，会指向根项目</p>
    <img src="@/assets/img.png" alt="Layers1" />
  </div>
</template>

