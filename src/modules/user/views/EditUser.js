import PropTypes from "prop-types";
import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import StatusQueryError from "../../common/components/StatusQueryError";
import StatusQueryLoading from "../../common/components/StatusQueryLoading";
import UserForm from "../components/UserForm";
import UserLayout from "../layout/UserLayout";
import { getUserAction, updateUserAction } from "../state/user.action";

function EditUser({
  user,
  loading,
  error,
  mutationStatus,
  getUser,
  updateUser,
}) {
  console.log("### EditUser:");
  let { id } = useParams();
  useEffect(() => {
    // onInit:
    getUser({ id });
  }, [id, getUser]);

  const handleSave = useCallback(
    (updatedUser) => updateUser({ id, ...updatedUser }),
    [updateUser, id]
  );

  const handleRetry = useCallback(() => getUser({ id }), [getUser, id]);

  const { updateUserStatus } = mutationStatus;

  return (
    <UserLayout title="Edit User">
      <StatusQueryLoading loading={loading} text="Loading user details" />
      <StatusQueryError
        error={error}
        text="Error while getting user details"
        onRetry={handleRetry}
      />
      {user && Object.keys(user).length > 0 && (
        <>
          <UserForm user={user} status={updateUserStatus} onSave={handleSave} />
        </>
      )}
    </UserLayout>
  );
}

EditUser.propTypes = {
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  console.log("EditUser", state);
  const { loading, error, data } = state.userState.user;
  return {
    loading,
    error,
    user: data,
    mutationStatus: state.userState.mutationStatus,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (user) => dispatch(getUserAction(user)),
    updateUser: (user) => dispatch(updateUserAction(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(EditUser));
