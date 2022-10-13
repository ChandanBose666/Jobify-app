import { useEffect } from "react";
import { useAppContext } from "../context/appContext";
import { Loading, Job } from "./index";
import Wrapper from "../assets/wrappers/JobsContainer";

const JobsContainer = () => {
  const { getJobs, jobs, totalJobs, isLoading, page } = useAppContext();

  useEffect(() => {
    getJobs();
  }, [totalJobs]);

  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No Jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
