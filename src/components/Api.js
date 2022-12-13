import axios from 'axios';

const ApiFetch = async (name, page) => {
  const apiSearch = `https://pixabay.com/api/?q=${name}&page=${page}&key=32054752-6682caedad00f1be23d6274c4&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(apiSearch);
  return response.data;
};

export default ApiFetch;
