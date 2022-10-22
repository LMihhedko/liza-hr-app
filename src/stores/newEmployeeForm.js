import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useNewEmployeeFormStore = defineStore("newEmployeeForm ", {
  state: () => ({
    newEmployeeForm: false,
  }),
});
