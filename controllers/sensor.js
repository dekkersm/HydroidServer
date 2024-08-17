const express = require('express');

exports.getPhCurrent = (req, res, next) => {
    res.json({
        "ph": "7",
        "date": "1723901464564"
    })
};

exports.getPhHistory = (req, res, next) => {
    res.json({
        "phData": [
            {
                "ph": "7",
                "date": "1723901464564"
            }, {
                "ph": "7.2",
                "date": "1723901364564"
            }, {
                "ph": "7.1",
                "date": "1723901264564"
            }, {
                "ph": "7.6",
                "date": "1723901164564"
            }, {
                "ph": "7.8",
                "date": "1723901064564"
            }, {
                "ph": "6.5",
                "date": "1723900964564"
            }
        ]
    })
}

exports.getTdsCurrent = (req, res, next) => {
    res.json({
        "ph": "1252",
        "date": "1723901464564"
    })
};

exports.getTdsHistory = (req, res, next) => {
    res.json({
        "phData": [
            {
                "ph": "1252",
                "date": "1723901464564"
            }, {
                "ph": "1325",
                "date": "1723901364564"
            }, {
                "ph": "1245",
                "date": "1723901264564"
            }, {
                "ph": "1365",
                "date": "1723901164564"
            }, {
                "ph": "998",
                "date": "1723901064564"
            }, {
                "ph": "1023",
                "date": "1723900964564"
            }
        ]
    })
}