const phdata = [
    {
        "id": 6,
        "value": "7",
        "date": "1723901464564",
        "phUpOn": true,
        "phDownOn": true
    }, {
        "id": 5,
        "value": "7.2",
        "date": "1723901364564",
        "phUpOn": false,
        "phDownOn": true
    }, {
        "id": 4,
        "value": "7.1",
        "date": "1723901264564",
        "phUpOn": false,
        "phDownOn": false
    }, {
        "id": 3,
        "value": "7.6",
        "date": "1723901164564",
        "phUpOn": false,
        "phDownOn": false
    }, {
        "id": 2,
        "value": "7.8",
        "date": "1723901064564",
        "phUpOn": true,
        "phDownOn": false
    }, {
        "id": 1,
        "value": "6.5",
        "date": "1723900964564",
        "phUpOn": true,
        "phDownOn": false
    }
]

const tdsData = [
    {
        "id": 6,
        "value": "1252",
        "date": "1723901464564",
        "pumpOn": false
    }, {
        "id": 5,
        "value": "1325",
        "date": "1723901364564",
        "pumpOn": true
    }, {
        "id": 4,
        "value": "1245",
        "date": "1723901264564",
        "pumpOn": true
    }, {
        "id": 3,
        "value": "1365",
        "date": "1723901164564",
        "pumpOn": false
    }, {
        "id": 2,
        "value": "998",
        "date": "1723901064564",
        "pumpOn": false
    }, {
        "id": 1,
        "value": "1023",
        "date": "1723900964564",
        "pumpOn": false
    }
]

const waterData = [
    {
        "id": 6,
        "tempValue": "22.3",
        "date": "1723901464564",
        "fillOn": false,
        "pumpOn": false
    }, {
        "id": 5,
        "tempValue": "22.4",
        "date": "1723901364564",
        "fillOn": true,
        "pumpOn": true
    }, {
        "id": 4,
        "tempValue": "22.5",
        "date": "1723901264564",
        "fillOn": true,
        "pumpOn": true
    }, {
        "id": 3,
        "tempValue": "22.4",
        "date": "1723901164564",
        "fillOn": false,
        "pumpOn": true
    }, {
        "id": 2,
        "tempValue": "22.3",
        "date": "1723901064564",
        "fillOn": false,
        "pumpOn": true
    }, {
        "id": 1,
        "tempValue": "22.2",
        "date": "1723900964564",
        "fillOn": false,
        "pumpOn": true
    }
]

const envData = [
    {
        "id": 6,
        "tempValue": "22.3",
        "lightValue": "80",
        "humidityValue": "60",
        "co2Value": "4",
        "baroValue": "1023.2",
        "date": "1723901464564",
        "lightOn": false,
        "coolingOn": false,
        "heatOn": false,
        "co2On": false
    }, {
        "id": 5,
        "tempValue": "22.4",
        "lightValue": "80",
        "humidityValue": "60",
        "co2Value": "4",
        "baroValue": "1023.2",
        "date": "1723901364564",
        "lightOn": false,
        "coolingOn": false,
        "heatOn": false,
        "co2On": false
    }, {
        "id": 4,
        "tempValue": "22.5",
        "lightValue": "80",
        "humidityValue": "60",
        "co2Value": "4",
        "baroValue": "1023.2",
        "date": "1723901264564",
        "lightOn": false,
        "coolingOn": false,
        "heatOn": false,
        "co2On": false
    }, {
        "id": 3,
        "tempValue": "22.4",
        "lightValue": "80",
        "humidityValue": "60",
        "co2Value": "4",
        "baroValue": "1023.2",
        "date": "1723901164564",
        "lightOn": false,
        "coolingOn": false,
        "heatOn": false,
        "co2On": false
    }, {
        "id": 2,
        "tempValue": "22.3",
        "lightValue": "80",
        "humidityValue": "60",
        "co2Value": "4",
        "baroValue": "1023.2",
        "date": "1723901064564",
        "lightOn": false,
        "coolingOn": false,
        "heatOn": false,
        "co2On": false
    }, {
        "id": 1,
        "tempValue": "22.2",
        "lightValue": "80",
        "humidityValue": "60",
        "co2Value": "4",
        "baroValue": "1023.2",
        "date": "1723900964564",
        "lightOn": false,
        "coolingOn": false,
        "heatOn": false,
        "co2On": false
    }
]


exports.getPhCurrent = (req, res, next) => {
    res.json(
        phdata.reduce((a, b) => a.id > b.id ? a : b)
    )
};

exports.getPhHistory = (req, res, next) => {
    let filteredData = phdata;
    if (req.from) {
        let to = req.to ? req.to : new Date().toUTCString();
        filteredData.filter(d => d.date > req.from && d.date < to);
    }
    res.json({
        "phData": filteredData
    })
}

exports.getTdsCurrent = (req, res, next) => {
    res.json(
        tdsData.reduce((a, b) => a.id > b.id ? a : b)
    )
};

exports.getTdsHistory = (req, res, next) => {
    let filteredData = tdsData;
    if (req.from) {
        let to = req.to ? req.to : new Date().toUTCString();
        filteredData.filter(d => d.date > req.from && d.date < to);
    }
    res.json({
        "tdsData": filteredData
    })
}

exports.getWaterCurrent = (req, res, next) => {
    res.json(
        waterData.reduce((a, b) => a.id > b.id ? a : b)
    )
};

exports.getWaterHistory = (req, res, next) => {
    let filteredData = waterData;
    if (req.from) {
        let to = req.to ? req.to : new Date().toUTCString();
        filteredData.filter(d => d.date > req.from && d.date < to);
    }
    res.json({
        "waterData": filteredData
    })
}

exports.getEnvCurrent = (req, res, next) => {
    res.json(
        envData.reduce((a, b) => a.id > b.id ? a : b)
    )
};

exports.getEnvHistory = (req, res, next) => {
    let filteredData = envData;
    if (req.from) {
        let to = req.to ? req.to : new Date().toUTCString();
        filteredData.filter(d => d.date > req.from && d.date < to);
    }
    res.json({
        "envData": filteredData
    })
}