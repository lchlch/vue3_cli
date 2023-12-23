<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-input></el-input>
    </el-row>
    <el-icon><i-ep-plus style="color: red" /></el-icon>
    <el-icon>
      <i-ep-aim />
    </el-icon>
    <i-ep-aim />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
