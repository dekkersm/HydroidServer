const confData = [
    {
        id: 1,
        type: "phMaxLimit",
        value: 6.3,
        recheckTimeout: 30,
        pumpTime: 120
    },
    {
        id: 1,
        type: "phMinLimit",
        value: 5.4,
        recheckTimeout: 30,
        pumpTime: 120
    },
    {
        id: 1,
        type: "tdsMinLimit",
        value: 780,
        recheckTimeout: 30,
        pumpTime: 120
    }
];

exports.getConfig = (req, res, next) => {
    res.json({
        "confData": confData
    })
};