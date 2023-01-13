displayData = (req, res) => {
    const data =
    'Matthew Santos';
    res.status(200).send(data);
};


module.exports = {
    displayData,
};