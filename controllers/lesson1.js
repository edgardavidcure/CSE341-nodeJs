const world = (req, res) => {
    res.send('Hello world');
};

const earth = (req, res) => {
    res.send('Hello earth');
};

module.exports = {
    world,
    earth
};
