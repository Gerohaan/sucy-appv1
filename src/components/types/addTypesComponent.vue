<template>
  <div class="leading-normal tracking-normal" id="main-body">
    <div class="p-6 bg-gray-100 mb-20">
      <nav class="text-sm font-semibold mb-6" aria-label="Breadcrumb">
        <ol class="list-none p-0 inline-flex">
          <li class="flex items-center text-blue-500">
            <a href="#" class="text-gray-700">Administración</a>
            <svg
              class="fill-current w-3 h-3 mx-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
              />
            </svg>
          </li>
          <li class="flex items-center">
            <a href="#" class="text-gray-600">Agregar tipo</a>
          </li>
        </ol>
      </nav>
      <!-- breadcrumb end -->

      <div class="">
        <div class="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-6">
          <div class="mt-5">
            <q-form @submit="onRegister" @reset="onReset">
              <div class="relative mt-6">
                <q-input
                  dense
                  v-model="names"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Campo Nombres es requerido',
                  ]"
                />
                <label
                  for="email"
                  class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >Nombres</label
                >
              </div>
              <div class="relative mt-6">
                <q-input
                  dense
                  v-model="LastNames"
                  :rules="[
                    (val) =>
                      (val && val.length > 0) || 'Campo Apellidos es requerido',
                  ]"
                />
                <label
                  for="password"
                  class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >Apellidos</label
                >
              </div>
              <div class="relative mt-6">
                <q-input
                  dense
                  v-model="email"
                  lazy-rules
                  :rules="[(val) => emailVal(val)]"
                />
                <label
                  for="email"
                  class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >Correo</label
                >
              </div>
              <div class="relative mt-6">
                <q-input
                  dense
                  v-model="password"
                  type="password"
                  :rules="[
                    (val) =>
                      (val && val.length >= 6) ||
                      'La contraseña debe tener al menos 6 caracteres',
                  ]"
                />
                <label
                  for="password"
                  class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                  >Contraseña</label
                >
              </div>
              <!--  <div class="relative mt-6">
              <q-select
                dense
                :options="nacList"
                v-model="naci"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) ||
                    'Campo Nacionalidad es requerido',
                ]"
              />
              <label
                for="email"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >Nacionalidad</label
              >
            </div>
            <div class="relative mt-6">
              <q-input
                dense
                v-model="cedula"
                :rules="[(val) => cedulaVal(val)]"
              />
              <label
                for="password"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >Cédula</label
              >
            </div>
            <div class="relative mt-6">
              <q-input
                dense
                v-model.number="birthdate"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) ||
                    'Campo Fecha de nacimiento es requerido',
                ]"
              >
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="birthdate">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <label
                for="email"
                class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >Fecha de nacimiento</label
              >
            </div>
            <div class="relative mt-6">
              <label
                for="password"
                class="pb-4 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >Número de teléfono</label
              >
            </div>
            <div class="relative mt-6">
              <div class="flex flex-wrap">
                <div class="w-full px-1 sm:w-1/2">
                  <div class="mb-5">
                    <q-select
                      label="Código"
                      dense
                      :options="codeOpeList"
                      v-model="codeOpe"
                      lazy-rules
                      :rules="[
                        (val) =>
                          (val && val.length > 0) ||
                          'Campo Código es requerido',
                      ]"
                    />
                  </div>
                </div>
                <div class="w-full px-1 sm:w-1/2">
                  <div class="mb-5">
                    <q-input
                      label="Número"
                      dense
                      mask="#######"
                      v-model="numeroPhone"
                      :rules="[
                        (val) =>
                          (val && val.length == 7) ||
                          'El campo Número debe tener 7 dígitos',
                      ]"
                    />
                  </div>
                </div>
              </div>
            </div> -->
              <div class="my-6">
                <button
                  type="submit"
                  class="animate__animated animate__bounce bg-primary w-full rounded-md px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                >
                  Registro
                </button>
              </div>
              <p class="text-center text-sm text-gray-500">
                ¿Ya tienes una cuenta?
                <a
                  @click="showLogin = !showLogin"
                  class="font-semibold cursor-pointer text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                  >Iniciar sesión.</a
                >.
              </p>
            </q-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import "animate.css";
import { date } from "quasar";
import { computed, onMounted, ref, watchEffect, watch, inject } from "vue";
import { useRouter } from "vue-router";
import { useTypesStore } from "../../stores/types";
const typesStore = useTypesStore();
const router = useRouter();
import { useManageLayout } from "../../stores/manageLayout";
const manageLayout = useManageLayout();
const loading = ref(false);
const columns = [
  {
    name: "id",
    required: true,
    label: "Id",
    align: "left",
    field: (row) => row.id,
    sortable: true,
  },
  {
    name: "name",
    required: true,
    label: "Nombre",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "status",
    required: true,
    label: "Status",
    align: "left",
    field: (row) => row.status,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "actions",
    required: true,
    label: "Acciones",
    align: "center",
    sortable: false,
  },
];
const rows = ref([]);
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
defineOptions({
  name: "addTypesComponent",
});
onMounted(async () => {
  await typesStore.typesAll();
  rows.value = await typesStore.getTypes?.value;
});
watchEffect(async () => {
  loading.value = typesStore.loading;
});
const handleRouter = (name, params = {}, query = {}) => {
  router
    .push({
      name: name,
    })
    .catch(() => {});
};
</script>
