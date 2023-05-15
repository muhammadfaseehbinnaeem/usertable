import React from "react";
import { useDispatch } from "react-redux";
import { clearAllUsers } from "../store/slice/UserSlice";
import styled from "styled-components";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deleteAllUsers = () => {
    dispatch(clearAllUsers());
  }

  return (
    <Wrapper>
      <button className="btn clear-btn"
        onClick={() => deleteAllUsers()}>
          Delete All Users
      </button>
    </Wrapper>
  )

};

const Wrapper = styled.section`
.clear-btn{
  text-transform: capitalize;
  background-color: #db338a;
  margin-top: 2rem;
}
`;

export default DeleteAllUser;