import axios from 'axios';

interface VannaResponse {
    sql_query: string;
}

async function getSQLFromVannaAI(prompt: string): Promise<string> {
    try {
        const response = await axios.post<VannaResponse>('http://localhost:5000/generate-sql', { prompt });
        return response.data.sql_query;
    } catch (error) {
        console.error("Error generating SQL:", error);
        throw error;
    }
}

async function handleNaturalLanguageQuery(prompt: string): Promise<string> {
    const sqlQuery = await getSQLFromVannaAI(prompt);
    console.log("Generated SQL:", sqlQuery);
    // Further processing can be added here
    return sqlQuery;
}

export { handleNaturalLanguageQuery };