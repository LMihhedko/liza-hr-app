<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useEmployeesStore } from "../stores/employees";
import { useUserStore } from "../stores/user";
import { useNewEmployeeFormStore } from "../stores/newEmployeeForm";

const newEmployeeFormStore = useNewEmployeeFormStore();
const { newEmployeeForm } = storeToRefs(newEmployeeFormStore);

const employeesStore = useEmployeesStore();

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

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
  newEmployeeForm.value = false;
  employeesStore.fetchEmployees();
};

const closeModal = () => {
  newEmployeeForm.value = false;
};
</script>

<template>
  <div
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8 sm:w-full w-7/12"
        >
          <div class="w-full flex justify-end p-3 bg-primary">
            <button
              @click="closeModal"
              class="group relative flex justify-center rounded-md border border-transparent bg-red-600 py-1 px-3 text-xs font-medium text-white hover:bg-red-300"
            >
              X
            </button>
          </div>
          <div class="mt-6 px-12 pb-12">
            <h1 class="text-2xl font-bold">Employee Details</h1>
            <hr class="my-6" />
            <div class="flex flex-wrap">
              <div class="w-1/2">
                <label
                  class="block tracking-wide text-gray-700 font-bold mb-0.5"
                  >Name</label
                >
                <input
                  name="name"
                  type="text"
                  required
                  class="block mb-4 w-11/12 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Name"
                  v-model="name"
                />
              </div>
              <div class="w-1/2">
                <label
                  class="block tracking-wide text-gray-700 font-bold mb-0.5"
                  >Last Name</label
                >
                <input
                  name="last_name"
                  type="text"
                  required
                  class="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Last Name"
                  v-model="last_name"
                />
              </div>
              <div class="w-full">
                <label
                  class="block tracking-wide text-gray-700 font-bold mb-0.5"
                  >Department</label
                >
                <input
                  name="department"
                  type="text"
                  required
                  class="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Department"
                  v-model="department"
                />
              </div>
              <div class="w-full">
                <label
                  class="block tracking-wide text-gray-700 font-bold mb-0.5"
                  >Address</label
                >
                <input
                  name="address"
                  type="text"
                  required
                  class="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Address"
                  v-model="address"
                />
              </div>
              <div class="w-full">
                <label
                  class="block tracking-wide text-gray-700 font-bold mb-0.5"
                  >Email</label
                >
                <input
                  name="email"
                  type="email"
                  required
                  class="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email"
                  v-model="email"
                />
              </div>
              <div class="w-1/2">
                <label
                  class="block tracking-wide text-gray-700 font-bold mb-0.5"
                  >Phone</label
                >
                <input
                  name="phone"
                  type="phone"
                  required
                  class="mb-4 w-11/12 rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Phone"
                  v-model="phone"
                />
              </div>
              <div class="w-1/2">
                <label
                  class="block tracking-wide text-gray-700 font-bold mb-0.5"
                  >Works Remote</label
                >
                <input
                  name="works_remote"
                  type="text"
                  required
                  class="mb-4 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Works Remote"
                  v-model="works_remote"
                />
              </div>
            </div>
            <div class="flex justify-center items-center mt-6">
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
                class="group mr-6 relative flex justify-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white hover:bg-orange-300"
              >
                Add employee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
