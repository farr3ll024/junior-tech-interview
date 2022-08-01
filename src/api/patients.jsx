import axios from "axios";

export const fetchPatients = async () => {
  const response = await axios.get(
    "https://see-patient-data.herokuapp.com/https://ti-patient-service.azurewebsites.net/patients"
  );
  return response?.data;
};

export const fetchPatient = async (patientId) => {
  const response = await axios.get(
    `https://see-patient-data.herokuapp.com/https://ti-patient-service.azurewebsites.net/patient/${patientId}`
  );
  return response?.data;
};
