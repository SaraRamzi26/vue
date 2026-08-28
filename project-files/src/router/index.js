import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobsView from "../views/JobsView.vue";
import AddJob from "../views/AddJob.vue";
import JobDetails from "../views/JobDetails.vue";
import EditJob from '../views/EditJob.vue'
import NotFound from '../views/NotFound.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: JobsView,
  },
  {
    path: "/add-job",
    name: "AddJob",
    component: AddJob,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true,
  },
  {
  path: '/edit-job/:id',
  name: 'EditJob',
  component: EditJob,
  props: true
},
{
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFound
}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;