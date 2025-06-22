//const BASE_URL = "https://aiagent-env.eba-vvwqbxfg.us-east-1.elasticbeanstalk.com";
const BASE_URL = " https://aiagent-phase1-backend.onrender.com ";

export const sendPrompt = async (prompt) => {
  try {
    const res = await fetch(`${BASE_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    return data.reply;
  } catch (e) {
    console.error("Error fetching AI response", e);
    return "Sorry, something went wrong.";
  }
};
