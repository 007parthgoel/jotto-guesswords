import axios from "axios";

export const getSecretWord=()=>{
    //TODO: write actual action in redux/
    return axios.get('http://localhost:3030').then(response=>{
      return response.data;
    })
};