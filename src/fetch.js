import axios from 'axios'

export const getInsect = async ({search=''}) => {
    try {
        const res = await axios.get(
            `https://62a1ac35cd2e8da9b0f71c67.mockapi.io/api/animals?page=1&limit=20&search=${search}&sortBy=name&order=asc`
        );
        return res.data

    } catch (e) {
        console.log(e)
    }
}

export const addAnimal = async (name, desc) => {
    console.log(name,desc)
    try {
        const res = await axios(
            {
                url: 'https://62a1ac35cd2e8da9b0f71c67.mockapi.io/api/animals',
                method: 'post',
                data: {
                    name: name,
                    description: desc
                },
            }
        );
        console.log(res.data)
    } catch (e) {
        console.log(e)
    }
}

export const deleteAnimal = async (id) => {
    try {
        await axios.delete(
            `https://62a1ac35cd2e8da9b0f71c67.mockapi.io/api/animals/${id}`
        );

    } catch (e) {
        console.log(e)
    }
}

