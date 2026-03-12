import { useQuery } from "@tanstack/react-query";

const getApiBaseUrl = () => {
    const envUrl = process.env.NEXT_PUBLIC_API_URL;
    // If running in browser and URL contains localhost but site is not on localhost, fallback to /api
    if (typeof window !== "undefined" && envUrl?.includes("localhost") && !window.location.hostname.includes("localhost")) {
        return "/api";
    }
    return envUrl || "/api";
};

const BASE_URL = getApiBaseUrl();

const fetchData = async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
        throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
    }
    return response.json();
};

export const useHomeData = () => {
    return useQuery({
        queryKey: ["homeData"],
        queryFn: () => fetchData("/home"),
    });
};

export const useAboutData = () => {
    return useQuery({
        queryKey: ["aboutData"],
        queryFn: () => fetchData("/about"),
    });
};

export const useMissionsData = () => {
    return useQuery({
        queryKey: ["missionsData"],
        queryFn: () => fetchData("/missions"),
    });
};

export const useTechnologyData = () => {
    return useQuery({
        queryKey: ["technologyData"],
        queryFn: () => fetchData("/technology"),
    });
};

export const useContactData = () => {
    return useQuery({
        queryKey: ["contactData"],
        queryFn: () => fetchData("/contact"),
    });
};
