// let token = `` // Placeholder token

export const server_calls = {
    get: async () => {
        const response = await fetch(`car_site/api/drones`, { // placecholder code
            method : 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        }); // Terrell's site
        if(!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`car_site/api/drones`, { // placeholder code
            method : 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to Create a new Car on Server')
        }
        return await response.json()
    },
    update: async (id:string, data: any = {}) => {
        const response = await fetch(`car_site/api/drones/${id}`, {
            method : 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to Update Car on Server')
        }
        return await response.json()
    },
    delete: async (id:string) => {
        const response = await fetch(`car_site/api/drones/${id}`, {
            method : 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });
        if(!response.ok){
            throw new Error('Failed to Delete Car from Server')
        }
        return await response.json()
    },
}