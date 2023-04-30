import React, { useEffect, useState } from "react";
import "./semm.css";
import { sidebardata } from "../../pages/utils";
import {
  useAddSubjectDataMutation,
  useDeleteSubjectDataMutation,
  useGetSubjectBySemQuery,
  useLazyGetSingleSubjectByIdQuery,
  useUpdateSubjectDataMutation,
} from "../../services/subjectfacultyapi";
import { getToken } from "../../services/LocalStorage";
import { useNavigate } from "react-router-dom";
function SemM() {
  const [sem, setSem] = useState(1);
  const [showmodal, setShowModal] = useState(false);
  const token = getToken();
  const {
    data = [],
    error,
    isSuccess,
    isLoading,
    refetch,
  } = useGetSubjectBySemQuery({
    access_token: token.access_token,
    sem: sem,
  });
  useEffect(() => {
    if (showmodal === false) refetch();
  }, [showmodal]);
  const [subject_data, setSubjectData] = useState({
    semester: sem,
    description: "",
    name: "",
  });
  const [ids, setids] = useState(-1);
  const [servermsg, setServermsg] = useState();
  const [addsubject] = useAddSubjectDataMutation();
  const [editsubject] = useUpdateSubjectDataMutation();
  const [deletesubject] = useDeleteSubjectDataMutation();
  const addSubjectdata = async () => {
    const { data, error, isLoading, isSuccess } = await addsubject({
      access_token: token.access_token,
      subject_data,
    });
    if (error) {
      console.log(error);
      setServermsg(error.data.msg);
    }

    if (data) {
      console.log(data);
      setServermsg(data.msg);
      setShowModal(false);
    }
  };
  const handledeleteSubject = async (id) => {
    const { data, error, isLoading, isSuccess } = await deletesubject({
      access_token: token.access_token,
      id: id,
    });
    if (error) {
      console.log(error);
      setServermsg(error.msg);
    }

    if (data) {
      console.log(data);
      setServermsg(data.msg);
      setShowModal(false);
    }
  };

  const [trigger, { data: singleData, isSuccess: singleDataSuccess }] =
    useLazyGetSingleSubjectByIdQuery({
      access_token: token.access_token,
      id: ids,
    });
  const handleEdit = (id) => {
    trigger({
      access_token: token.access_token,
      id: id,
    });
    setShowModal(true);
  };
  useEffect(() => {
    if (singleDataSuccess) {
      setSubjectData({
        semester: sem,
        name: singleData.data.name,
        description: singleData.data.description,
      });
    }
  }, [singleDataSuccess, singleData]);

  const editSubjectdata = async () => {
    const { data, error, isLoading, isSuccess } = await editsubject({
      access_token: token.access_token,
      subject_data,
      id: ids,
    });
    if (error) {
      console.log(error);
      setServermsg(error.msg);
    }

    if (data) {
      console.log(data);
      setServermsg(data.msg);
      setShowModal(false);
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div class="list-group list-group-flush">
              {sidebardata.map((item) => {
                return (
                  <button
                    type="button"
                    onClick={() => setSem(item.id)}
                    class="list-group-item list-group-item-action"
                    aria-current="true"
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
          {data.data ? (
            <div className="col-md-9">
              <div className="container">
                <div className="row">
                  {data.data.map((item) => {
                    return (
                      <div className="col-md-6">
                        <div className="card sub-body">
                          <div className="card-body">
                            <h5 className="card-titile-forsub">
                              {item.name.toUpperCase()}
                            </h5>
                            <p className="card-text-sub">{item.description}</p>

                            <div className="text-center">
                              <button
                                type="button"
                                className="buttn buttn-trash"
                                data-bs-toggle="modal"
                                data-bs-target="#deleteModal"
                                onClick={() => {
                                  setids(item.id);
                                  setShowModal(true);
                                }}
                              >
                                <i class="fas fa-trash-alt"></i>
                              </button>
                              <button
                                type="button"
                                className="buttn buttn-edit"
                                data-bs-toggle="modal"
                                data-bs-target="#editModal"
                                onClick={() => {
                                  setids(item.id);
                                  handleEdit(item.id);
                                }}
                              >
                                <i class="fas fa-edit"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="col-md-6">
                    <div className="card sub-body-addmore">
                      <div className="card-body">
                        <div className="text-center">
                          <button
                            type="button"
                            class="btn btn-primary-addmore btn-lg"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => {
                              setSubjectData({
                                semester: sem,
                                description: "",
                                name: "",
                              });
                              setShowModal(true);
                            }}
                          >
                            Add More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-md-9">
              <div className="container">
                Please Login or Register to access data
                <br />
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
        <div
          class="modal fade"
          id="deleteModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Confirm Delete Subject
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div class="modal-body">
                <button
                  data-bs-dismiss="modal"
                  type="button"
                  class="btn btn-primary-modal btn-lg"
                  onClick={() => handledeleteSubject(ids)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="editModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Edit Subject
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      class="form-label lable-modal"
                    >
                      Subject Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={subject_data.name}
                      onChange={(e) => {
                        setSubjectData({
                          ...subject_data,
                          name: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      class="form-label lable-modal"
                    >
                      Subject Description
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value={subject_data.description}
                      onChange={(e) => {
                        setSubjectData({
                          ...subject_data,
                          description: e.target.value,
                        });
                      }}
                    ></textarea>
                  </div>
                  <button
                    data-bs-dismiss="modal"
                    type="button"
                    class="btn btn-primary-modal btn-lg"
                    onClick={editSubjectdata}
                  >
                    Edit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  ADD MORE SUBJECT
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      class="form-label lable-modal"
                    >
                      Subject Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={subject_data.name}
                      onChange={(e) => {
                        setSubjectData({
                          ...subject_data,
                          name: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      class="form-label lable-modal"
                    >
                      Subject Description
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value={subject_data.description}
                      onChange={(e) => {
                        setSubjectData({
                          ...subject_data,
                          description: e.target.value,
                        });
                      }}
                    ></textarea>
                  </div>
                  <button
                    data-bs-dismiss="modal"
                    type="button"
                    class="btn btn-primary-modal btn-lg"
                    onClick={addSubjectdata}
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SemM;
