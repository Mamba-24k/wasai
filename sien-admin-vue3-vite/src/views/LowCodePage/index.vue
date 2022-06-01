<template>
  <div>
    <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="页面唯一标识" prop="pageCode" />
      <el-table-column label="页面名称" prop="pageName" />
      <el-table-column align="right">
        <!-- <template #header>
          <el-input
            v-model="search"
            size="small"
            placeholder="Type to search"
          />
        </template> -->
        <template #default="scope">
          <el-link
            type="primary"
            :href="`http://localhost:3000/lowCode/index.html?pageCode=${scope.row._id}`"
            target="_blank"
            >Edit</el-link
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="dialogFormVisible" title="新建页面">
      <el-form ref="ruleFormRef" :model="form" :rules="rules">
        <el-form-item
          label="页面唯一标识"
          prop="pageCode"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.pageCode" autocomplete="off" />
        </el-form-item>
        <el-form-item
          label="页面名称"
          prop="pageName"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.pageName" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="resetForm(ruleFormRef)">Cancel</el-button>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >Confirm</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, reactive, onMounted } from "vue";
import type { FormInstance, FormRules } from "element-plus";
interface User {
  date: string;
  name: string;
  address: string;
}
let dialogFormVisible = ref(false);
const formLabelWidth = "140px";
const search = ref("");
const ruleFormRef = ref<FormInstance>();
const form = reactive({
  pageCode: "",
  pageName: "",
  pageSchema: "",
});
let tableData = ref([]);
onMounted(async () => {
  tableData.value = await fetch("http://localhost:3000/admin/rest/pages", {
    method: "GET",
  }).then((res) => res.json());
  console.log(tableData, "onMounted");
});

const rules = reactive<FormRules>({
  pageCode: [
    { required: true, message: "请输入页面唯一标识", trigger: "blur" },
    { min: 3, max: 20, message: "Length should be 3 to 20", trigger: "blur" },
  ],
  pageName: [
    { required: true, message: "请输入页面名称", trigger: "blur" },
    { min: 3, max: 10, message: "Length should be 3 to 10", trigger: "blur" },
  ],
});
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      await fetch("http://localhost:3000/admin/rest/pages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      dialogFormVisible.value = false;
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
  dialogFormVisible.value = false;
};
const handleEdit = (index: number, row: User) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: User) => {
  console.log(index, row);
};
</script>
<style lang="scss" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>