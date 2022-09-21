const createJob = async (req, res) => {
  await res.send("createJob");
};

const deleteJob = async (req, res) => {
  await res.send("Delete Job");
};
const getAllJobs = async (req, res) => {
  await res.send("Get All Jobs");
};
const updateJob = async (req, res) => {
  await res.send("Update Job");
};
const showStats = async (req, res) => {
  await res.send("showStats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
