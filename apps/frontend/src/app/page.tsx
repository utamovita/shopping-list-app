"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchHelloWorld = async () => {
    const { data } = await axios.get("http://localhost:3000");
    return data;
};

export default function Home() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["helloWorld"],
        queryFn: fetchHelloWorld,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occurred: {error.message}</div>;
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold">Msg from backend:</h1>
            <p className="mt-4 rounded-md bg-gray-100 p-4 text-2xl text-blue-700">{JSON.stringify(data)}</p>
        </main>
    );
}
