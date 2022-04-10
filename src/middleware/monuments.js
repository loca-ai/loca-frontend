import {axiosRequest} from "../utils/apis";

import {devTrips, devMonument, devMonuments} from '../static/dev';

export const tryGetRecentTrips = (id) => {
    return async dispatch => {
        const trips = await axiosRequest('', "POST", {id: id}, devTrips);
        return trips;
    }
};

export const tryRecognizeMonument = (image, geolocation) => {
    return async dispatch => {
        const monument = await axiosRequest('', "POST", {image: image, geolocation: geolocation}, devMonument);
        return monument
    }
};

export const tryGetNearbyMonuments = (geolocation) => {
    return async dispatch => {
        const monuments = await axiosRequest('', "POST", {geolocation: geolocation}, devMonuments);
        return monuments
    }
};