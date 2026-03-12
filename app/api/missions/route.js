export async function GET() {
    return Response.json({
        hero: {
            title: "Operational Missions<br />Across Earth Orbit and Beyond",
            description: "NovaSpace missions deploy advanced satellite networks, autonomous orbital systems, and deep-space technologies to support global infrastructure and exploration.",
            ctaButton: "Explore Technology",
            ctaLink: "/technology"
        },
        missions: {
            sectionTitle: "Real Orbital Impact",
            description: "Our satellite deployments, autonomous orbital programs, and deep-space initiatives power next-generation space infrastructure across the globe and beyond.",
            items: [
                {
                    id: "ORION-1",
                    type: "Earth Observation",
                    year: "2020",
                    status: "Completed",
                    description: "First AI-assisted orbital satellite providing climate monitoring and terrain analysis.",
                    image: "https://img.freepik.com/premium-photo/satellite-wallpaper_665280-55784.jpg?uid=R39373662&ga=GA1.1.1161016753.1764785010&semt=ais_related_payload_trends&w=740&q=80"
                },
                {
                    id: "POLARIS NET",
                    type: "Satellite Network",
                    year: "2021",
                    status: "Active",
                    description: "Satellite communication network delivering autonomous positioning and telemetry optimization.",
                    image: "https://img.freepik.com/premium-photo/satellite-with-black-background-word-satellite-left_981168-7900.jpg?uid=R39373662&ga=GA1.1.1161016753.1764785010&semt=ais_related_payload_trends&w=740&q=80"
                },
                {
                    id: "HELIOS PROP-X",
                    type: "Propulsion Test",
                    year: "2022",
                    status: "Completed",
                    description: "Experimental propulsion validation mission for long-duration deep-orbit satellites.",
                    image: "https://img.freepik.com/premium-photo/satellite-white-black_1028093-6582.jpg?uid=R39373662&ga=GA1.1.1161016753.1764785010&semt=ais_related_payload_trends&w=740&q=80"
                },
                {
                    id: "AURORA SCAN",
                    type: "Environmental Intelligence",
                    year: "2023",
                    status: "Active",
                    description: "Real-time Earth observation system supporting climate monitoring and disaster detection.",
                    image: "https://img.freepik.com/free-photo/3d-render-global-technology-network-communications-background_1048-13255.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&w=740&q=80"
                },
                {
                    id: "ORBITAL SERVE-1",
                    type: "Robotic Operations",
                    year: "2024",
                    status: "Active",
                    description: "Autonomous robotic platform enabling satellite servicing and orbital maintenance.",
                    image: "https://img.freepik.com/premium-photo/space-ship-is-shown-this-image_266644-3200.jpg?uid=R105757506&ga=GA1.1.424530527.1762595245&w=740&q=80"
                },
                {
                    id: "LUNA-GRID",
                    type: "Lunar Infrastructure",
                    year: "2025",
                    status: "In Progress",
                    description: "Modular lunar communication and mapping satellite supporting surface exploration.",
                    image: "https://img.freepik.com/premium-photo/robotic-lander-deploying-scientific-instruments-moons-surface_1327465-64082.jpg?uid=R39373662&ga=GA1.1.1161016753.1764785010&semt=ais_related_payload_trends&w=740&q=80"
                }
            ]
        },
        cta: {
            title: "Partner With Us on Future Missions",
            description: "NovaSpace collaborates with research institutions, aerospace organizations, and technology partners to develop next-generation orbital missions.",
            button: "Contact Mission Team"
        }
    },);
}