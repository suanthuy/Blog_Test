const questionModel = require('../models/question');
const brcypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.getQuestion = (req, res, next) => {
    questionModel.findAll()
        .then(listQuestion => {
            res.status(200).json(
                {
                    message: 'get all Questions',
                    listUser: listQuestion
                })
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};



exports.updateQuestion = (req, res, next) => {
    const _questionID = req.body.id;
    const _questions = req.body.questions;
    const _answer1 = req.body.answer1;
    const _answer2 = req.body.answer2;
    const _answer3 = req.body.answer3;
    const _answer4 = req.body.answer4;
    const _correct = req.body.correct;
    questionModel
        .findOne({ where: { id: _questionID } })
        .then(quesID => {
            if (!quesID) {
                res.status(400).json(
                    {
                        status: false,
                        message: "Question is not existing in system"
                    });
            }
            else {
                const _quest = new Object({
                    id: _questionID,
                    questions: _questions,
                    answer1: _answer1,
                    answer2: _answer2,
                    answer3: _answer3,
                    answer4: _answer4,
                    correct: _correct,
                });
                questionModel.update(_quest, { where: { id: _quest.id } })
                    .then(result => {
                        if (result) {
                            res.status(200).json(
                                {
                                    status: true,
                                    message: "Question is updated Successfully",
                                    question: _quest

                                });
                        }
                        else {
                            res.status(400).json(
                                {
                                    status: true,
                                    message: "Question is updated Failed!!!"
                                });
                        }
                    })
            }

        })
        .catch(err => res.status(404).json(err));
};




