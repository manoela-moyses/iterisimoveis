import axios from 'axios';

const urlApi = "http://localhost:8080/imoveis";

export function getImoveis() {
  return axios.get(urlApi).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}

export function getImovelPorId(id) {
  const urlComId = urlApi + '/' + id;
  return axios.get(urlComId).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}
