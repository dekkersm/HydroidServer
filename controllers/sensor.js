const phdata = [
    {
        "id": 6,
        "ph": "7",
        "date": "1723901464564"
    }, {
        "id": 5,
        "ph": "7.2",
        "date": "1723901364564"
    }, {
        "id": 4,
        "ph": "7.1",
        "date": "1723901264564"
    }, {
        "id": 3,
        "ph": "7.6",
        "date": "1723901164564"
    }, {
        "id": 2,
        "ph": "7.8",
        "date": "1723901064564"
    }, {
        "id": 1,
        "ph": "6.5",
        "date": "1723900964564"
    }
]

const tdsData = [
    {
        "id": 6,
        "ph": "1252",
        "date": "1723901464564"
    }, {
        "id": 5,
        "ph": "1325",
        "date": "1723901364564"
    }, {
        "id": 4,
        "ph": "1245",
        "date": "1723901264564"
    }, {
        "id": 3,
        "ph": "1365",
        "date": "1723901164564"
    }, {
        "id": 2,
        "ph": "998",
        "date": "1723901064564"
    }, {
        "id": 1,
        "ph": "1023",
        "date": "1723900964564"
    }
]


exports.getPhCurrent = (req, res, next) => {
    res.json(
        phdata.reduce((a,b)=>a.id>b.id?a:b)
    )
};

exports.getPhHistory = (req, res, next) => {
    res.json({
        "phData": phdata
    })
}

exports.getTdsCurrent = (req, res, next) => {
    res.json(
        tdsData.reduce((a,b)=>a.id>b.id?a:b)
    )
};

exports.getTdsHistory = (req, res, next) => {
    res.json({
        "tdsData": tdsData
    })
}