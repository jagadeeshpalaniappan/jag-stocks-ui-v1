import {
  API_CREATE_USER_FAILURE,
  API_CREATE_USER_START,
  API_CREATE_USER_SUCCESS,
  API_DELETE_USER_FAILURE,
  API_DELETE_USER_START,
  API_DELETE_USER_SUCCESS,
  API_GET_USERS_FAILURE,
  API_GET_USERS_START,
  API_GET_USERS_SUCCESS,
  API_GET_USER_FAILURE,
  API_GET_USER_START,
  API_GET_USER_SUCCESS,
  API_UPDATE_USER_FAILURE,
  API_UPDATE_USER_START,
  API_UPDATE_USER_SUCCESS,
  API_GET_USER_POSTS_START,
  API_GET_USER_POSTS_SUCCESS,
  API_GET_USER_POSTS_FAILURE,
  API_GET_USER_TODOS_START,
  API_GET_USER_TODOS_SUCCESS,
  API_GET_USER_TODOS_FAILURE,
  RESET_USER_MUTATION_STATUS,
  SET_USER_SEARCH_KEYWORD,
  SET_USER_FILTERS
} from './user.actionTypes';

// REDUCER:
const initialUserState = {
  mutationStatus: {
    createUserStatus: null,
    updateUserStatus: null,
    deleteUserStatus: null
  },
  users: {
    data: [],
    loading: false,
    error: null
  },
  user: {
    data: {},
    loading: false,
    error: null
  },
  userPosts: {
    data: [],
    loading: false,
    error: null
  },
  userTodos: {
    data: [],
    loading: false,
    error: null
  },
  searchKeyword: '',
  sortBy: 'default',
  filters: null
};

export const userReducer = (userState = initialUserState, action) => {
  switch (action.type) {
    case RESET_USER_MUTATION_STATUS:
      return {
        ...userState,
        mutationStatus: initialUserState.mutationStatus
      };
    case SET_USER_SEARCH_KEYWORD:
      return {
        ...userState,
        searchKeyword: action.payload
      };
    case SET_USER_FILTERS:
      return {
        ...userState,
        filters: action.payload
      };
    case API_GET_USERS_START:
      return {
        ...userState,
        users: {
          ...userState.users,
          data: [],
          loading: true,
          error: null
        }
      };
    case API_GET_USERS_SUCCESS:
      return {
        ...userState,
        users: {
          ...userState.users,
          data: action.payload.users,
          loading: false,
          error: null
        }
      };
    case API_GET_USERS_FAILURE:
      return {
        ...userState,
        users: {
          ...userState.users,
          loading: false,
          error: action.payload.error
        }
      };
    case API_GET_USER_START:
      return {
        ...userState,
        user: {
          ...userState.user,
          data: {},
          loading: true,
          error: null
        }
      };
    case API_GET_USER_SUCCESS:
      return {
        ...userState,
        user: {
          ...userState.user,
          data: action.payload.user,
          loading: false,
          error: null
        }
        // userPosts: {
        //   ...userState.userPosts,
        //   data: action.payload.posts,
        //   loading: false,
        //   error: null,
        // },
        // userTodos: {
        //   ...userState.userTodos,
        //   data: action.payload.todos,
        //   loading: false,
        //   error: null,
        // },
      };
    case API_GET_USER_FAILURE:
      return {
        ...userState,
        user: {
          ...userState.user,
          loading: false,
          error: action.payload
        }
      };
    case API_CREATE_USER_START:
      return {
        ...userState,
        mutationStatus: {
          ...initialUserState.mutationStatus,
          createUserStatus: {
            ...userState.createUserStatus,
            loading: true,
            error: null,
            success: false
          }
        }
      };
    case API_CREATE_USER_SUCCESS:
      return {
        ...userState,
        mutationStatus: {
          ...userState.mutationStatus,
          createUserStatus: {
            ...userState.createUserStatus,
            loading: false,
            error: null,
            success: true
          }
        }
      };
    case API_CREATE_USER_FAILURE:
      return {
        ...userState,
        mutationStatus: {
          ...userState.mutationStatus,
          createUserStatus: {
            ...userState.createUserStatus,
            loading: false,
            error: action.payload,
            success: false
          }
        }
      };
    case API_UPDATE_USER_START:
      return {
        ...userState,
        mutationStatus: {
          ...initialUserState.mutationStatus,
          updateUserStatus: {
            ...userState.updateUserStatus,
            loading: true,
            error: null,
            success: false
          }
        }
      };
    case API_UPDATE_USER_SUCCESS:
      return {
        ...userState,
        mutationStatus: {
          ...userState.mutationStatus,
          updateUserStatus: {
            ...userState.updateUserStatus,
            loading: false,
            error: null,
            success: true
          }
        }
      };
    case API_UPDATE_USER_FAILURE:
      return {
        ...userState,
        mutationStatus: {
          ...userState.mutationStatus,
          updateUserStatus: {
            ...userState.updateUserStatus,
            loading: false,
            error: action.payload,
            success: false
          }
        }
      };
    case API_DELETE_USER_START:
      return {
        ...userState,
        mutationStatus: {
          ...initialUserState.mutationStatus,
          deleteUserStatus: {
            ...userState.deleteUserStatus,
            loading: true,
            error: null,
            success: false
          }
        }
      };
    case API_DELETE_USER_SUCCESS:
      return {
        ...userState,
        mutationStatus: {
          ...userState.mutationStatus,
          deleteUserStatus: {
            ...userState.deleteUserStatus,
            loading: false,
            error: null,
            success: true
          }
        }
      };
    case API_DELETE_USER_FAILURE:
      return {
        ...userState,
        mutationStatus: {
          ...userState.mutationStatus,
          deleteUserStatus: {
            ...userState.deleteUserStatus,
            loading: false,
            error: action.payload,
            success: false
          }
        }
      };
    default:
      return userState;
  }
};
