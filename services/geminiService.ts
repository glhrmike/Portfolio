
import { GoogleGenAI } from "@google/genai";
import { PROJECTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getAssistantResponse = async (userMessage: string) => {
  const model = "gemini-3-flash-preview";
  
  const systemInstruction = `
    You are the "Guilherme Ike Guide", an AI assistant for a world-class Internal Communications professional named Guilherme Ike.
    Your job is to help visitors navigate his portfolio.
    
    The portfolio includes:
    - Mailing Campaigns: High-engagement internal newsletters.
    - WhatsApp Communications: Bite-sized mobile-first updates.
    - Corporate TV: Motion graphics and office digital signage.
    - Press & Science Comms: Technical writing and press releases.
    - Cartazes: Visual print material for physical spaces (Posters).
    - Textos: Articles, analysis, and institutional writing.
    
    Portfolio Projects: ${JSON.stringify(PROJECTS.map(p => ({ title: p.title, category: p.category, desc: p.description })))}
    
    Guidelines:
    1. Be professional, creative, and enthusiastic.
    2. If someone asks about a specific skill (e.g., "how do you handle newsletters?"), reference specific projects from the list above.
    3. Keep responses concise (under 3 sentences).
    4. If someone asks about something not in the portfolio, politely steer them back to Guilherme's expertise.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 200,
      },
    });

    return response.text || "Olá! Estou aqui para te ajudar a explorar o portfólio de comunicação de Guilherme Ike. O que gostaria de ver?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Estou com um pequeno problema de conexão agora, mas sinta-se à vontade para navegar pelos trabalhos abaixo!";
  }
};