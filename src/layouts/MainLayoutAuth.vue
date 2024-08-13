<template>
  <q-layout view="lHh Lpr lFf">
    <div class="leading-normal tracking-normal">
      <div class="flex flex-wrap">
        <Sidebar />

        <div
          class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen"
          :class="manageLayout.getSideBar ? 'overlay' : ''"
        >
          <Navbar />
          <div class="p-6 bg-gray-100 mb-20">
            <q-page-container>
              <router-view />
            </q-page-container>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useManageLayout } from "./../stores/manageLayout";
// Definición de variables reactivas
import Sidebar from "./partials/SidebarComponent.vue";
import Navbar from "./partials/NavbarComponent.vue";
import Footer from "./partials/FooterComponent.vue";
const manageLayout = useManageLayout();
const message = ref("Hola, mundo!");

// Funciones
function sayHello() {
  console.log(message.value);
}
</script>
