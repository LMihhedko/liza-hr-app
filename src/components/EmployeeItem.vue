<script setup>
import { storeToRefs } from "pinia";
import { useEmployeesStore } from "../stores/employees";

const employeesStore = useEmployeesStore();
const { employees } = storeToRefs(employeesStore);

const fetchEmployees = async () => {
  await employeesStore.fetchEmployees();
  console.log(employees.value);
};

fetchEmployees();

console.log(employees.value);
</script>

<template>
  <div class="flex justify-center items-center bg-slate-200 w-full py-12">
    <div class="flex flex-col bg-primary w-11/12">
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
                    class="text-sm font-medium text-white px-6 py-4 text-left"
                  ></th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4 text-left"
                  ></th>
                </tr>
              </thead>
              <tbody v-for="employee in employees">
                <tr class="bg-white border-b">
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
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    {{ employee.works_remote }}
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    <button
                      class="group relative flex justify-center rounded-md border border-transparent bg-amber-300 py-2 px-4 text-sm font-medium text-white hover:bg-amber-200"
                    >
                      Edit
                    </button>
                  </td>
                  <td
                    class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                  >
                    <button
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
</template>
