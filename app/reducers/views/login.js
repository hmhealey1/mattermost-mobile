// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {combineReducers} from 'redux';
import {UsersTypes} from 'mattermost-redux/constants';
import {ViewTypes} from 'app/constants';

function loginId(state = '', action) {
    switch (action.type) {
    case ViewTypes.LOGIN_ID_CHANGED:
        return action.loginId.trim();
    case UsersTypes.LOGOUT_SUCCESS:
        return '';
    default:
        return state;
    }
}

function password(state = '', action) {
    switch (action.type) {
    case ViewTypes.PASSWORD_CHANGED:
        return action.password;
    case UsersTypes.LOGOUT_SUCCESS:
        return '';
    default:
        return state;
    }
}

export default combineReducers({
    loginId,
    password
});
