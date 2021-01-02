// import { push } from 'connected-react-router';
import { AppError } from '../../../common/utils/error.utils';
import { deleteUser } from '../../service/user.service';
import {
  API_DELETE_USER_FAILURE,
  API_DELETE_USER_START,
  API_DELETE_USER_SUCCESS
} from '../user.actionTypes';
// import { basePath } from '../../../../app/AppRoutes';

// ACTION-CREATORS:
export const apiDeleteUserStartAction = () => {
  return {
    type: API_DELETE_USER_START
  };
};

export const apiDeleteUserSuccessAction = user => {
  return {
    type: API_DELETE_USER_SUCCESS
  };
};

export const apiDeleteUserFailureAction = error => {
  return {
    type: API_DELETE_USER_FAILURE,
    payload: error
  };
};

// ASYCN-ACTION-CREATORS:
export const apiDeleteUserAction = user => async dispatch => {
  try {
    dispatch(apiDeleteUserStartAction());
    const data = await deleteUser(user);
    if (data) {
      // SUCCESS
      dispatch(apiDeleteUserSuccessAction(data));
      // dispatch(push('/user'));
    } else {
      // FAILURE
      throw new AppError('Failed to Delete');
    }
  } catch (e) {
    // FAILURE
    dispatch(apiDeleteUserFailureAction(e.message));
  }
};
