const faqDetailUrl = "https://jsonplaceholder.typicode.com/posts/";
const geminiApiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={YOUR_API_KEY}";

/**
 * Fetches the FaqDetail data for the given faqId.
 * @param faqId - The id of the FaqDetail to fetch.
 * @returns The fetched FaqDetail data or an error message if the request fails.
 */
export async function getFaqById(faqId: string) {
  try {
    const res = await fetch(faqDetailUrl + faqId);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return "Failed to get Faq Detail";
  }
}

/**
 * Sends a POST request to the Gemini API to generate a response based on the provided prompt.
 *
 * @param prompt - The input text prompt for which a response is requested.
 * @returns The response data from the Gemini API or an error message if the request fails.
 */

export const getAiResponse = async (prompt: string) => {

 const geminiApiUrlWithKey = geminiApiUrl.replace("{YOUR_API_KEY}", process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');
 
  try {
    const res = await fetch(geminiApiUrlWithKey, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "contents": [{
          "parts": [{ "text": prompt}]
        }]
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return "Failed to get gemini ai response.";
  }
}

