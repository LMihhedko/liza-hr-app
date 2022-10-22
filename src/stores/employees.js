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
    async updateEmployee(
      id,
      name,
      last_name,
      department,
      address,
      email,
      phone,
      works_remote
    ) {
      const { error } = await supabase
        .from("employees")
        .update({
          name: name,
          last_name: last_name,
          department: department,
          address: address,
          email: email,
          phone: phone,
          works_remote: works_remote,
        })
        .eq("id", id);
    },
    async addEmployee(
      user_id,
      name,
      last_name,
      department,
      address,
      email,
      phone,
      works_remote
    ) {
      const { error } = await supabase.from("employees").insert({
        user_id: user_id,
        name: name,
        last_name: last_name,
        department: department,
        address: address,
        email: email,
        phone: phone,
        works_remote: works_remote,
      });
      console.log(error);
    },
    async deleteEmployee(id) {
      const { error } = await supabase.from("employees").delete().eq("id", id);
      this.employees = this.employees.filter((employee) => employee.id !== id);
    },
  },
});
