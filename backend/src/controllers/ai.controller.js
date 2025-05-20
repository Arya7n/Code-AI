const aiService = require("../services/ai.service.js")

module.exports.getReview = async (req, res) => {

    // console.log("Request body:", req.body);
    // console.log("Request query:", req.query);

    const code = (req.body && req.body.code) || req.query.prompt;

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    const response = await aiService(code);

    res.send(response);

}
