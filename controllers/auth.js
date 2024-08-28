const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');
const User = require("../models/user");

exports.getUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.findAll();
    } catch (err) {
        const error = new HttpError(
            'Fetching users failed, please try again later.',
            500
        );
        return next(error);
    }
    res.json({ users: users });
}

exports.getUser = async (req, res, next) => {
    const id = req.params.uid;
    let user;
    try {
        user = await User.findOne({ where: { id: id } });
    } catch (err) {
        const error = new HttpError(
            'Fetching users failed, please try again later.',
            500
        );
        return next(error);
    }
    res.json({ user: user });
}

exports.login = async (req, res, next) => {
    const { username, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ where: { username: username } })
    } catch (err) {
        return next(new HttpError('Logging in failed, please try again later.', 500));
    }

    if (!existingUser) {
        const error = new HttpError(
            'Invalid credentials, could not log you in.',
            401
        );
        return next(error);
    }

    if (!existingUser.enabled) {
        const error = new HttpError(
            'user disabled, could not log you in.',
            401
        );
        return next(error);
    }

    let isValidPw = false;
    try {
        isValidPw = password == existingUser.password;
        // isValidPw = await bcrypt.compare(password, existingUser.password);
    } catch (err) {
        return next(new HttpError('Logging in failed, please try again later.', 500));
    }

    if (!isValidPw) {
        const error = new HttpError(
            'Invalid credentials, could not log you in.',
            401
        );
        return next(error);
    }

    let token;
    try {
        //TODO replace secret and put in consts
        token = jwt.sign({ userId: existingUser.id, name: existingUser.name }, 'secret', { expiresIn: '1d' });
    } catch (err) {
        return next(new HttpError('Logging in failed, please try again later.', 500));
    }

    res.json({ userId: existingUser.id, name: existingUser.name, token: token, expiresIn: '86400', isChangePassword: existingUser.isChangePassword });
}

exports.register = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new HttpError('Invalid inputs passed, please check your data.', 422));
    }
    const { username, password, name, email } = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ where: { username: username } })
    } catch (err) {
        return next(new HttpError('Signup failed, please try again later1', 500));
    }

    if (existingUser) {
        return next(new HttpError('User already exists', 422));
    }

    let hashedPw;
    try {
        hashedPw = await bcrypt.hash(password, 12);
    } catch (err) {
        return next(new HttpError('Signup failed, please try again later2', 500));
    }

    const createdUser = new User({
        username,
        password: password,
        isChangePassword: true,
        enabled: true,
        name,
        email
    })

    try {
        await createdUser.save();
    } catch (err) {
        const error = new HttpError(
            'Signing up failed, please try again.',
            500
        );
        return next(error);
    }

    res.status(201).json({ user: createdUser });
}

exports.updatePassword = async (req, res, next) => {
    const { password, newPassword } = req.body;
    const id = req.params.uid;
    let existingUser;
    try {
        existingUser = await User.findOne({ where: { id: id } })
    } catch (err) {
        return next(new HttpError('password change failed, please try again later.', 500));
    }
    if (!existingUser) {
        const error = new HttpError(
            'Invalid credentials, could not change password.',
            401
        );
        return next(error);
    }

    let isValidPw = false;
    try {
        isValidPw = password == existingUser.password;
        // isValidPw = await bcrypt.compare(password, existingUser.password);
    } catch (err) {
        return next(new HttpError('password change failed, please try again later.', 500));
    }
    if (!isValidPw) {
        const error = new HttpError(
            'Invalid credentials, could not change password.',
            401
        );
        return next(error);
    }

    let hashedPw;
    try {
        hashedPw = newPassword, 12;
        // hashedPw = await bcrypt.hash(newPassword, 12);
    } catch (err) {
        return next(new HttpError('password change failed, please try again later2', 500));
    }
    existingUser.isChangePassword = false;
    existingUser.password = hashedPw;
    await existingUser.save();

    res.json({ userId: existingUser.id });
}

exports.update = async (req, res, next) => {
    const id = req.params.uid;
}

exports.remove = async (req, res, next) => {
    const id = req.params.uid;
    let existingUser;
    try {
        existingUser = await User.findOne({ where: { id: id } })
    } catch (err) {
        return next(new HttpError('delete user failed, please try again later.', 500));
    }
    if (!existingUser) {
        const error = new HttpError(
            'user could not be found.',
            401
        );
        return next(error);
    }

    await existingUser.destroy();
    res.json({ userId: existingUser.id });
}