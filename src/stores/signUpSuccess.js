import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useSignUpSuccessStore = defineStore("signUpSuccess", {
  state: () => ({
    signUpSuccess: false,
  }),
});
