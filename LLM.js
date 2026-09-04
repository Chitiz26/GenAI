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
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

async function main() {
  const interaction = await ai.interactions.create({
    model: "gemini-3.8-flash",

    input: [
      {
        type: "user_input",
        content: [
          {
            type: "text",
            text: "My name is chitiz."
          }
        ]
      },
      {
        type: "model_output",
        content: [
          {
            type: "text",
            text: "Hello Chitiz! Nice to meet you. How can I help you today?"
          }
        ]
      },
      {
        type: "user_input",
        content: [
          {
            type: "text",
            text: "What is my name?"
          }
        ]
      }
    ]
  });

  console.log(interaction.output_text);
}

main();