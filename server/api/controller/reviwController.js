module.exports.revieById = function (req, res) {
    const id = req.params.id;

    const obj = {
        name: "get review by id",
        id: id
    };
    res.send(JSON.stringify(obj))
};
module.exports.updateOne = function (req, res) {
    const location_id = req.params.id;
    const review_id = req.params.review_id;

    const obj = {
        name: "update review",
        location_id: location_id,
        review_id: review_id
    };
    res.send(obj)
};
module.exports.deleteOne = function (req, res) {
    const id = req.params.id;
    const revieww_id = req.params.review_id;

    const obj = {
        name: "delete review",
        id: id,
        review_id: revieww_id
    };
    res.send(obj)
};