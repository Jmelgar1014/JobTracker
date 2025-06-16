import { useContext } from "react";
import { JobContext } from "../Context/JobContext";

export const useJob = () => useContext(JobContext);
