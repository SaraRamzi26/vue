import axios from 'axios';
const api = axios.create({
  baseURL: "http://localhost:8000",
});

export function getJobs(limit) {
  return api.get("/jobs", {
    params: limit ? { _limit: limit } : {},
  });
}

export function getJob(id) {
  return api.get(`/jobs/${id}`);
}
export function addJob(job) {
  return api.post('/jobs', job)
}
export function updateJob(id, job) {
  return api.put(`/jobs/${id}`, job)
}
export function deleteJob(id) {
  return api.delete(`/jobs/${id}`)
}