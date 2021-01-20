import axios from "axios";

export default {
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?inc=gender,name,email,cell,picture,dob&results=30");
    }
};