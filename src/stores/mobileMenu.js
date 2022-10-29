import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useMobileMenuStore = defineStore("mobileMenu", {
  state: () => ({
    mobileMenu: false,
  }),
});
