<script setup>
import NewEmployee from "../components/NewEmployee.vue";

import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useEmployeesStore } from "../stores/employees";
import { useNewEmployeeFormStore } from "../stores/newEmployeeForm";

const newEmployeeFormStore = useNewEmployeeFormStore();
const { newEmployeeForm } = storeToRefs(newEmployeeFormStore);

const employeesStore = useEmployeesStore();
const { employees } = storeToRefs(employeesStore);
employeesStore.fetchEmployees();

const deleteEmployee = (id) => {
  employeesStore.deleteEmployee(id);
};

let editingId = ref("");

const editEmployee = (id) => {
  editingId.value = id;
};

const updateEmployee = (
  id,
  name,
  last_name,
  department,
  address,
  email,
  phone,
  works_remote
) => {
  employeesStore.updateEmployee(
    id,
    name,
    last_name,
    department,
    address,
    email,
    phone,
    works_remote
  );
  editingId.value = "";
};

const addEmployee = () => {
  newEmployeeForm.value = true;
};
</script>

<template>
  <div class="flex flex-col w-full px-12">
    <div class="flex justify-end my-6 mr-6">
      <button
        @click="addEmployee"
        class="group relative flex justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-secondary"
      >
        Add new employee
      </button>
    </div>
    <div class="flex flex-col justify-center items-center">
      <NewEmployee v-if="newEmployeeForm" />
      <div class="flex flex-col bg-primary w-full rounded-md">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Last Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Department
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white px-6 py-4 text-left"
                    >
                      Remote?
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white text-left"
                    ></th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-white text-left"
                    ></th>
                  </tr>
                </thead>
                <tbody v-for="employee in employees">
                  <tr
                    v-if="employee.id !== editingId"
                    class="bg-white border-b"
                  >
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      {{ employee.id }}
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      {{ employee.name }}
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      {{ employee.last_name }}
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      {{ employee.department }}
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      {{ employee.address }}
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      {{ employee.email }}
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      {{ employee.phone }}
                    </td>
                    <td
                      class="text-sm font-light px-6 py-6 whitespace-nowrap flex justify-center items-center"
                    >
                      <img
                        v-if="employee.works_remote"
                        class="w-6"
                        src="../assets/simple_check.svg"
                      />
                      <img v-else class="w-4" src="../assets/cross.svg" />
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light whitespace-nowrap"
                    >
                      <button
                        @click="editEmployee(employee.id)"
                        class="group relative flex justify-center rounded-md border border-transparent bg-amber-300 py-2 px-4 text-sm font-medium text-white hover:bg-amber-200"
                      >
                        Edit
                      </button>
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light whitespace-nowrap"
                    >
                      <button
                        @click="deleteEmployee(employee.id)"
                        class="group relative flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-400"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr v-if="employee.id == editingId" class="bg-white border-b">
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                    >
                      {{ employee.id }}
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      <input
                        name="name"
                        type="text"
                        v-model="employee.name"
                        required
                        class="w-full mb-4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      <input
                        name="last_name"
                        type="text"
                        v-model="employee.last_name"
                        required
                        class="w-full mb-4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      <input
                        name="department"
                        type="text"
                        v-model="employee.department"
                        required
                        class="w-full mb-4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      <input
                        name="address"
                        type="text"
                        v-model="employee.address"
                        required
                        class="w-full mb-4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      <input
                        name="email"
                        type="email"
                        v-model="employee.email"
                        required
                        class="w-full mb-4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      <input
                        name="phone"
                        type="phone"
                        v-model="employee.phone"
                        required
                        class="w-full mb-4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                    >
                      <input
                        name="works_remote"
                        type="text"
                        v-model="employee.works_remote"
                        required
                        class="w-full mb-4 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light whitespace-nowrap"
                    >
                      <button
                        @click="
                          updateEmployee(
                            employee.id,
                            employee.name,
                            employee.last_name,
                            employee.department,
                            employee.address,
                            employee.email,
                            employee.phone,
                            employee.works_remote
                          )
                        "
                        class="group relative flex justify-center rounded-md border border-transparent mr-2 bg-orange-500 py-2 px-4 text-sm font-medium text-white hover:bg-orange-300"
                      >
                        Save
                      </button>
                    </td>
                    <td
                      class="text-sm text-gray-900 font-light whitespace-nowrap"
                    >
                      <button
                        @click="deleteEmployee(employee.id)"
                        class="group relative flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-400"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
