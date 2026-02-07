
export interface Agent {
    $id: string;
    name: string;
    email: string;
    avatar: string;
}

export interface Review {
    $id: string;
    name: string;
    avatar: string;
    review: string;
    rating: number;
    $createdAt: string;
}

export interface Gallery {
    $id: string;
    image: string;
}

export interface Property {
    $id: string;
    name: string;
    type: string;
    description: string;
    address: string;
    geolocation: string;
    price: number;
    area: number;
    bedrooms: number;
    bathrooms: number;
    rating: number;
    facilities: string[];
    image: string;
    agent: Agent;
    reviews: Review[];
    gallery: Gallery[];
}

export const propertyTypes = [
    "House",
    "Townhomes",
    "Condos",
    "Duplexes",
    "Studios",
    "Villa",
    "Apartments",
    "Others",
];

export const facilities = [
    "Laundry",
    "Car Parking",
    "Sports Center",
    "Cutlery",
    "Gym",
    "Swimming pool",
    "Wifi",
    "Pet Center",
];

export const users = [
    {
        $id: "user1",
        name: "John Doe",
        email: "john@doe.com",
        avatar: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=60&w=640&auto=format&fit=crop",
    }
];

export const agents = [
    {
        $id: "agent1",
        name: "Agent Smith",
        email: "smith@example.com",
        avatar: "https://images.unsplash.com/photo-1544723495-432537d12f6c?q=60&w=640&auto=format&fit=crop",
    },
    {
        $id: "agent2",
        name: "Jane Doe",
        email: "jane@example.com",
        avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=60&w=640&auto=format&fit=crop",
    }
];

export const reviews = [
    {
        $id: "review1",
        name: "Alice Johnson",
        avatar: "https://images.unsplash.com/photo-1517331671191-ddc2c6d3ebd1?q=60&w=640&auto=format&fit=crop",
        review: "Amazing property! The view is stunning and the amenities are top-notch.",
        rating: 5,
        $createdAt: new Date().toISOString(),
    },
    {
        $id: "review2",
        name: "Bob Wilson",
        avatar: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=60&w=640&auto=format&fit=crop",
        review: "Great location, but the parking was a bit tight.",
        rating: 4,
        $createdAt: new Date().toISOString(),
    }
];

export const gallery = [
    { $id: "gal1", image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=60&w=640&auto=format&fit=crop" },
    { $id: "gal2", image: "https://images.unsplash.com/photo-1638799869566-b17fa794c4de?q=60&w=640&auto=format&fit=crop" },
    { $id: "gal3", image: "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?q=60&w=640&auto=format&fit=crop" },
];

export const properties = [
    {
        $id: "prop1",
        name: "Modern Villa",
        type: "Villa",
        description: "A beautiful modern villa with a private pool and garden.",
        address: "123 Palm Street, Miami Beach",
        geolocation: "25.7617, -80.1918",
        price: 2500,
        area: 3200,
        bedrooms: 4,
        bathrooms: 3,
        rating: 4.8,
        facilities: ["Swimming pool", "Car Parking", "Wifi", "Gym"],
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=60&w=640&auto=format&fit=crop",
        agent: agents[0],
        reviews: reviews,
        gallery: gallery,
    },
    {
        $id: "prop2",
        name: "Luxury Apartment",
        type: "Apartments",
        description: "High-end apartment in the city center with amazing skyline views.",
        address: "456 Skyline Drive, New York",
        geolocation: "40.7128, -74.0060",
        price: 3500,
        area: 1800,
        bedrooms: 2,
        bathrooms: 2,
        rating: 4.6,
        facilities: ["Laundry", "Gym", "Wifi", "Car Parking"],
        image: "https://images.unsplash.com/photo-1605146768851-eda79da39897?q=60&w=640&auto=format&fit=crop",
        agent: agents[1],
        reviews: [reviews[0]],
        gallery: [gallery[1], gallery[2]],
    },
    {
        $id: "prop3",
        name: "Cozy Studio",
        type: "Studios",
        description: "A small but very cozy studio perfect for students or young professionals.",
        address: "789 University Ave, Boston",
        geolocation: "42.3601, -71.0589",
        price: 1200,
        area: 600,
        bedrooms: 1,
        bathrooms: 1,
        rating: 4.2,
        facilities: ["Laundry", "Wifi"],
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=60&w=640&auto=format&fit=crop",
        agent: agents[0],
        reviews: [reviews[1]],
        gallery: [gallery[0]],
    },
    {
        $id: "prop4",
        name: "Spacious House",
        type: "House",
        description: "Large family house with a big backyard and close to schools.",
        address: "101 Family Rd, Austin",
        geolocation: "30.2672, -97.7431",
        price: 1800,
        area: 2500,
        bedrooms: 3,
        bathrooms: 2,
        rating: 4.5,
        facilities: ["Car Parking", "Laundry", "Pet Center"],
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=60&w=640&auto=format&fit=crop",
        agent: agents[1],
        reviews: reviews,
        gallery: gallery,
    },
    {
        $id: "prop5",
        name: "Beachfront Condo",
        type: "Condos",
        description: "Wake up to the sound of waves in this luxury beachfront condo.",
        address: "202 Ocean Blvd, Los Angeles",
        geolocation: "34.0522, -118.2437",
        price: 2800,
        area: 1500,
        bedrooms: 2,
        bathrooms: 2,
        rating: 4.9,
        facilities: ["Swimming pool", "Car Parking", "Wifi"],
        image: "https://images.unsplash.com/photo-1561753757-d8880c5a3551?q=60&w=640&auto=format&fit=crop",
        agent: agents[0],
        reviews: reviews,
        gallery: gallery,
    },
    {
        $id: "prop6",
        name: "Mountain Villa",
        type: "Villa",
        description: "Secluded villa in the mountains, perfect for a peaceful getaway.",
        address: "303 Peak Rd, Aspen",
        geolocation: "39.1911, -106.8175",
        price: 4500,
        area: 4000,
        bedrooms: 5,
        bathrooms: 4,
        rating: 5.0,
        facilities: ["Sports Center", "Car Parking", "Wifi", "Gym"],
        image: "https://images.unsplash.com/photo-1551241090-67de81d3541c?q=60&w=640&auto=format&fit=crop",
        agent: agents[1],
        reviews: reviews,
        gallery: gallery,
    }
];
