/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_BEST_PROFESSORS,
  LOAD_BEST_PROFESSORS_SUCCESS,
  LOAD_BEST_PROFESSORS_ERROR,
} from './constants';

/**
 * Init loading of best professors list
 *
 * @return {object}    An action object with a type of LOAD_BEST_PROFESSORS
 */
export function loadBestProfessors() {
  return {
    type: LOAD_BEST_PROFESSORS,
  };
}

/**
 * Dispatched when the professors are loaded by the request saga
 *
 * @param  {array} professors The professors data
 *
 * @return {object}      An action object with a type of LOAD_BEST_PROFESSORS_SUCCESS passing the professors
 */
export function professorsLoaded(professors) {
  return {
    type: LOAD_BEST_PROFESSORS_SUCCESS,
    professors,
  };
}

/**
 * Dispatched when loading the professors fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_BEST_PROFESSORS_ERROR passing the error
 */
export function professorsLoadingError(error) {
  return {
    type: LOAD_BEST_PROFESSORS_ERROR,
    error,
  };
}