import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    withCredentials: true
})


export const login = async (username, password) => {

    try {
        const res = await api.post("/auth/login", {
            username,
            password
        })

        return res.data
    } catch (err) {
        console.error(err);

        throw err;
    }

}

export const register = async (username, email, password) => {
    try {
        const res = await api.post("/auth/register", {
            username,
            email,
            password,
        });

        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const getMe = async () => {
    try {
        const res = await api.get("/auth/get-me");

        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const logout = async () => {
    try {
        const res = await api.get("/auth/logout");

        return res.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};