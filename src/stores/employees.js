// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useEmployeesStore = defineStore("employees", {
  state: () => ({
    employees: [],
  }),
  actions: {
    async fetchEmployees() {
      const { data: employees } = await supabase
        .from("employees")
        .select("*")
        .order("id", { ascending: true });
      this.employees = employees;
    },
  },
});
