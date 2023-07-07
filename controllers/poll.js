const Question = require("../models/questionModel");

const createQuestion = async (req, res) => {
  const { id, title, options} = req.body;

  try {
    const question = await Question.create({ id, title, options: [] });

    // Generate link_to_vote dynamically for each option
    const updatedOptions = options.map((option) => {
      const optionId = option.id;
      const linkToVote = `http://localhost:3000/questions/${question.id}/options/${optionId}/add_vote`;
      return { ...option, link_to_vote: linkToVote };
    });

    question.options = updatedOptions;
    await question.save();

    return res.status(200).json({ message: "Question is added..." });
  } catch (err) {
    return res.status(500).json({ error: "Failed to create question" });
  }
};


// Add options to a specific question
const addOptionsToQuestion = async (req, res) => {
  const questionId = parseInt(req.params.id);
  const { id, text, votes } = req.body;

  try {
    const question = await Question.findOne({ id: questionId });
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    const option = {
      id,
      text,
      votes,
      link_to_vote: `http://localhost:3000/questions/${questionId}/options/${id}/add_vote`,
    };

    question.options.push(option);
    await question.save();

   return res.status(200).json("Option added...");
  } catch (err) {
    res.status(500).json({ error: "Failed to add option", err });
  }
};

// Delete a question
const deleteQuestion = async (req, res) => {
  const questionId = parseInt(req.params.id);

  try {
    const deletedQuestion = await Question.findOneAndDelete({id : questionId});
    if (!deletedQuestion) {
      return res.status(404).json({ error: "Question not found" });
    }

    res.json({ message: "Question deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete question" });
  }
};

// Delete an option
const deleteOption = async (req, res) => {
  
  const questionId = parseInt(req.params.questionId);
  const optionId = parseInt(req.params.optionId);

  try {
    const question = await Question.findOne({id : questionId});
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    const optionIndex = question.options.findIndex(
      (option) => option.id === optionId
    );

    console.log(optionIndex);
    if (optionIndex === -1) {
      return res.status(404).json({ error: "Option not found" });
    }

    question.options.splice(optionIndex, 1);
    await question.save();

    res.json({ message: "Option deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete option" });
  }
};


// Add a vote to an option
const addVoteToOption = async (req, res) => {
  const questionId = parseInt(req.params.questionId);
  const optionId = parseInt(req.params.optionId);

  try {
    const question = await Question.findOne({ id: questionId });
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    const option = question.options.find((option) => option.id === optionId);
    if (!option) {
      return res.status(404).json({ error: "Option not found" });
    }

    option.votes += 1;
    await question.save();

    res.json({ message: "Vote added successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add vote" });
  }
};


// View a question with its options
const viewQuestion = async (req, res) => {
  const questionId = parseInt(req.params.id);

  try {
    const question = await Question.findOne({ id : questionId});
    if (!question) {
      return res.status(404).json({ error: "Question not found" });
    }

    res.json(question);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch question" });
  }
};

module.exports = {
  createQuestion,
  addOptionsToQuestion,
  deleteQuestion,
  deleteOption,
  addVoteToOption,
  viewQuestion,
};
