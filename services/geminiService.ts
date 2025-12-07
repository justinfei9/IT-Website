import { GoogleGenAI } from "@google/genai";
import { RESUME_SUMMARY, EXPERIENCE_DATA, SKILLS_DATA } from '../constants';

// Initialize Gemini Client
// Note: process.env.API_KEY is injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for an IT Professional's portfolio website. 
Your persona is professional, technical, yet approachable.
You have the following context about the candidate:

Summary: ${RESUME_SUMMARY}

Experience:
${JSON.stringify(EXPERIENCE_DATA)}

Skills:
${JSON.stringify(SKILLS_DATA)}

Your goal is to answer visitor questions about the candidate's background, skills, and experience.
Keep answers concise (under 3 sentences where possible) and highlight relevant technologies.
If asked about something not in the context, politely state that you don't have that information but the candidate is a fast learner.
Do not make up facts.
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I'm currently having trouble connecting to the neural network. Please try again later.";
  }
};
