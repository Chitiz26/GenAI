// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY
// });

// async function main() {
//   const interaction = await ai.interactions.create({
//     model: "gemini-3.8-flash",

//     input: [
//       {
//         type: "user_input",
//         content: "My name is chitiz."
//       },
//       {
//        type: "model_output",
//        content: "Hello Chitiz! Nice to meet you. How can I help you today?"
//       },
//       {
//         type: "user_input",
//         content: "What is my name?"
//       }
//     ]
//   });

//   console.log(interaction.output_text);
// }

// main();
// 
import { GoogleGenAI } from "@google/genai";
import readLineSync from "readline-sync";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const History = [];

async function Chatting(userProblem) 
{
   const interaction = await ai.interactions.create({
        model: "gemini-3.6-flash",
        input: userProblem
    });

    console.log(interaction.output_text);   
}

async function main() {
    const userProblem = readLineSync.question("Ask Below ");

    await Chatting(userProblem);
}

main();

