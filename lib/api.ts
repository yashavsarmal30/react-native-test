import { properties, users } from "../constants/staticData";

export async function login() {
    try {
        console.log("Mock login called");
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function logout() {
    try {
        console.log("Mock logout called");
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function getCurrentUser() {
    try {
        return users[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getLatestProperties() {
    try {
        return properties.slice(0, 5);
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getProperties({
    filter,
    query,
    limit,
}: {
    filter: string;
    query: string;
    limit?: number;
}) {
    try {
        let filteredProperties = [...properties];

        if (filter && filter !== "All") {
            filteredProperties = filteredProperties.filter(
                (p) => p.type.toLowerCase() === filter.toLowerCase()
            );
        }

        if (query) {
            const lowerQuery = query.toLowerCase();
            filteredProperties = filteredProperties.filter(
                (p) =>
                    p.name.toLowerCase().includes(lowerQuery) ||
                    p.address.toLowerCase().includes(lowerQuery) ||
                    p.type.toLowerCase().includes(lowerQuery)
            );
        }

        if (limit) {
            filteredProperties = filteredProperties.slice(0, limit);
        }

        return filteredProperties;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getPropertyById({ id }: { id: string }) {
    try {
        const property = properties.find((p) => p.$id === id);
        return property || null;
    } catch (error) {
        console.error(error);
        return null;
    }
}
