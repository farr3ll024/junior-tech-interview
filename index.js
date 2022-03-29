const fetchPatients = async () => {
    const response = await axios.get('https://ti-patient-service.azurewebsites.net/patients');
    return response?.data;
};

const fetchPatient = async (patientId) => {
    const response = await axios.get(`https://ti-patient-service.azurewebsites.net/patient/${patientId}`);
    return response?.data;
};
