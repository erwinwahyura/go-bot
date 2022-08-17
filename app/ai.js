const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.AI,
});
const openai = new OpenAIApi(configuration);
const askAI = async msg => {
    try {
        const res = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: msg,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
    
        return res.data.choices[0].text
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
    return
}

module.exports = {
    askAI
};