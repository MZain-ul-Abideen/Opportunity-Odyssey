<script setup>
import { reactive, onMounted } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';
import backBtn from '@/components/back-btn.vue';
import {useToast} from 'vue-toastification';


const route = useRoute()
const router = useRouter()
const toast = useToast();

const jobID = route.params.id;

const state = reactive({
  job: {},
  isLoading: true,
});

const dlt_job = async() => {
  try {
    const confirm = window.confirm('Are You Sure??')
    if (confirm) {
      await axios.delete(`/api/jobs/${jobID}`);
      toast.success('Job Deleted Successfully');
      router.push('/jobs');
    }
  } catch (error) {
    console.error('Error Deleting Job')
    toast.error('Error Deleting Job');
  }
};


onMounted (async () => {
  try {
    const response = await axios.get(`/api/jobs/${jobID}`)
    state.job = response.data;
  } catch (error) {
    console.error('Error Fetching Jobs', error)
  } finally {
    state.isLoading = false;
  }
});

</script>

<template>
  <backBtn />
    <section v-if="!state.isLoading">
      <div class="container m-auto py-10 px-6">
        <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div class="text-gray-500 mb-4">{{state.job.type	}}</div>
              <h1 class="text-3xl font-bold mb-4">{{ state.job.title }}</h1>
              <div
                class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
              <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.5 7C8.5 6.33696 8.76339 5.70107 9.23223 5.23223C9.70107 4.76339 10.337 4.5 11 4.5C12.1 4.5 13.03 5.21 13.37 6.19C13.45 6.45 13.5 6.72 13.5 7C13.5 7.3283 13.4353 7.65339 13.3097 7.95671C13.1841 8.26002 12.9999 8.53562 12.7678 8.76777C12.5356 8.99991 12.26 9.18406 11.9567 9.3097C11.6534 9.43534 11.3283 9.5 11 9.5C9.91 9.5 9 8.81 8.64 7.84C8.55 7.58 8.5 7.29 8.5 7ZM2 7C2 11.5 7.08 17.66 8 18.81L7 20C7 20 0 12.25 0 7C0 3.83 2.11 1.15 5 0.29C3.16 1.94 2 4.33 2 7ZM11 0C14.86 0 18 3.13 18 7C18 12.25 11 20 11 20C11 20 4 12.25 4 7C4 3.13 7.14 0 11 0ZM11 2C8.24 2 6 4.24 6 7C6 8 6 10 11 16.71C16 10 16 8 16 7C16 4.24 13.76 2 11 2Z"
                                fill="#D28D0D" />
                        </svg>
                <p class="text-orange-700 mx-2">{{ state.job.location	}}</p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-green-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p class="mb-4">
                {{ state.job.description	 }}
              </p>

              <h3 class="text-green-800 text-lg font-bold mb-2">Salary</h3>

              <p class="mb-4">{{ state.job.salary	 }}</p>
            </div>
          </main>

          <!-- Sidebar -->
          <aside>
            <!-- Company Info -->
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-6">Company Info</h3>

              <h2 class="text-2xl">{{state.job.company.name}}</h2>

              <p class="my-2">
                {{state.job.company.description	}}
              </p>

              <hr class="my-4" />

              <h3 class="text-xl">Contact Email:</h3>

              <p class="my-2 bg-green-100 p-2 font-bold">
                {{state.job.company.contactEmail}}
              </p>

              <h3 class="text-xl">Contact Phone:</h3>

              <p class="my-2 bg-green-100 p-2 font-bold">{{state.job.company.contactPhone}}	</p>
            </div>

            <!-- Manage -->
            <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 class="text-xl font-bold mb-6">Manage Job</h3>
              <RouterLink
                :to="`/jobs/edit/${state.job.id}`"
                class="postitive-btn text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job</RouterLink
              >
              <button @click="dlt_job"
                class="negitive-btn font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
    <div v-else class="text-center py-6">
        <PulseLoader color="#D28D0D" />
      </div>
</template>

<style scoped>
.postitive-btn {
background-color: var(--color-1);
color: var(--ui-2);
transition: 0.3s;
}
.postitive-btn:hover {
background-color: var(--color-2)
}
.negitive-btn {
background-color: var(--color-4);
color: var(--ui-1);
transition: 0.3s;
}
.negitive-btn:hover {
background-color: var(--color-5);
color: var(--ui-1);
}
</style>