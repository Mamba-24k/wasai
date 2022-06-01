<template>
  <el-container class="layout-container-demo">
    <el-aside width="200px" class="aside-container">
      <div className="logo">logo</div>
      <el-scrollbar class="scrollbar-container">
        <el-menu :default-openeds="['1', '3']" :collapse="isCollapse" router>
          <el-sub-menu index="1">
            <template #title>
              <el-icon><message /></el-icon><span>低代码</span>
            </template>
            <el-menu-item index="/lowCodePage">页面</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><icon-menu /></el-icon><span>CURD</span>
            </template>
            <el-menu-item index="/product">商品</el-menu-item>
            <el-menu-item index="/about">关于</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><setting /></el-icon><span>Navigator Three</span>
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="3-1">Option 1</el-menu-item>
              <el-menu-item index="3-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="3-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="3-4">
              <template #title>Option 4</template>
              <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
      <el-button class="collapse-btn" @click="setCollapse">{{
        isCollapse ? "展开" : "收起"
      }}</el-button>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px"
              ><setting
            /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </el-header>

      <el-main class="main-container">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { reactive, toRefs } from "vue";
import { Menu as IconMenu, Message, Setting } from "@element-plus/icons-vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    IconMenu,
    Message,
    Setting,
  },
  setup() {
    const state = reactive({
      isCollapse: false,
    });
    const setCollapse = () => {
      state.isCollapse = !state.isCollapse;
    };
    return {
      ...toRefs(state),
      setCollapse,
    };
  },
});
</script>

<style lang="scss">
#app {
  height: 100%;
}
.layout-container-demo {
  height: 100%;
}
.aside-container {
  position: relative;
}
.scrollbar-container {
  padding: 60px 0 40px;
}
.logo {
  position: absolute;
  height: 60px;
  width: 100%;
  z-index: 1;
  background-color: rgb(255, 0, 0);
}

.collapse-btn {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 1;
}
.layout-container-demo .el-header {
  // height: 100%;
  // position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
.main-container {
  height: 100%;
}
</style>
