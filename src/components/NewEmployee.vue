<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useEmployeesStore } from "../stores/employees";
import { useUserStore } from "../stores/user";
import { useNewEmployeeFormStore } from "../stores/newEmployeeForm";

const newEmployeeFormStore = useNewEmployeeFormStore();
const { newEmployeeForm } = storeToRefs(newEmployeeFormStore);

const employeesStore = useEmployeesStore();
const { employees } = storeToRefs(employeesStore);

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

console.log(user.value.id);
const user_id = ref(user.value.id);
const name = ref("");
const last_name = ref("");
const department = ref("");
const address = ref("");
const email = ref("");
const phone = ref("");
const works_remote = ref("false");

const addEmployee = (
  name,
  last_name,
  department,
  address,
  email,
  phone,
  works_remote
) => {
  employeesStore.addEmployee(
    user_id.value,
    name,
    last_name,
    department,
    address,
    email,
    phone,
    works_remote
  );
  console.log(works_remote);
  employeesStore.fetchEmployees();
  newEmployeeForm.value = false;
};
</script>

<template>
  <tr class="bg-white border-b">
    <td
      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
    ></td>

    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <input
        name="name"
        type="text"
        required
        class="mb-4 w-24 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Name"
        v-model="name"
      />
    </td>
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <input
        name="last_name"
        type="text"
        required
        class="mb-4 w-24 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Last Name"
        v-model="last_name"
      />
    </td>
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <input
        name="department"
        type="text"
        required
        class="mb-4 w-24 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Department"
        v-model="department"
      />
    </td>
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <input
        name="address"
        type="text"
        required
        class="mb-4 w-24 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Address"
        v-model="address"
      />
    </td>
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <input
        name="email"
        type="email"
        required
        class="mb-4 w-24 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Email"
        v-model="email"
      />
    </td>
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <input
        name="phone"
        type="phone"
        required
        class="mb-4 w-24 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Phone"
        v-model="phone"
      />
    </td>
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <input
        name="works_remote"
        type="text"
        required
        class="mb-4 w-24 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        placeholder="Works Remote"
        v-model="works_remote"
      />
    </td>
    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
      <button
        @click="
          addEmployee(
            name,
            last_name,
            department,
            address,
            email,
            phone,
            works_remote
          )
        "
        class="group w-24 relative flex justify-center rounded-md border border-transparent bg-cyan-400 py-2 px-4 text-sm font-medium text-white hover:bg-orange-300"
      >
        Add employee
      </button>
    </td>
    <td
      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
    ></td>
  </tr>
</template>
