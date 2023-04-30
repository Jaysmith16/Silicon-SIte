import React, { useEffect, useState } from "react";
import "./allocation.css";
import { sidebardata } from "../../pages/utils";
import {
  useAddFacultyDataMutation,
  useDeleteFacultyDataMutation,
  useGetFacultyBySemQuery,
  useGetSubjectBySemQuery,
  useUpdateFacultyDataMutation,
} from "../../services/subjectfacultyapi";
import { getToken } from "../../services/LocalStorage";
import { useNavigate } from "react-router-dom";
function Allocation() {
  const [sem, setSem] = useState(1);
  const token = getToken();
  const [ids, setids] = useState();
  const [showmodal, setShowModal] = useState(false);
  const {
    data = [],
    error,
    isSuccess,
    isLoading,
    refetch,
  } = useGetFacultyBySemQuery(
    {
      access_token: token.access_token,
      sem: sem,
    },
    { refetchOnMountOrArgChange: true }
  );
  const [faculty_data, setFacultyData] = useState({
    semester: sem,
    name: "",
    department: "CSE",
    subject_1: "",
    subject_2: "",
    subject_3: "",
  });
  useEffect(() => {
    if (showmodal === false) refetch();
  }, [showmodal]);
  const [disabled, setDisabled] = useState({});
  const {
    data: subjectdata,
    error: subjecterror,
    isSuccess: isSucessSubject,
    isLoading: issubjectloading,
    refetch: subjectrefetch,
  } = useGetSubjectBySemQuery(
    {
      access_token: token.access_token,
      sem: sem,
    },
    { refetchOnMountOrArgChange: true }
  );
  const [servermsg, setServermsg] = useState();

  const [addfaculty] = useAddFacultyDataMutation();
  const [editfaculty] = useUpdateFacultyDataMutation();
  const [deletefaculty] = useDeleteFacultyDataMutation();
  const handleDeleteFaculty = async (id) => {
    const { data, error, isLoading, isSuccess } = await deletefaculty({
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
  const handleAddSubmit = async () => {
    const { data, error, isLoading, isSuccess } = await addfaculty({
      access_token: token.access_token,
      faculty_data,
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
  const [editdata, setEditData] = useState({
    subject_1: "",
    subject_2: "",
    subject_3: "",
  });
  const handleEditFaculty = async (id) => {
    const { data, error, isLoading, isSuccess } = await editfaculty({
      access_token: token.access_token,
      faculty_data: editdata,
      id: id,
    });
    if (error) {
      console.log(error);
      setServermsg(error.msg);
    }

    if (data) {
      console.log(data);
      disabled[id] = !disabled[id];
      setDisabled({ ...disabled });
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
          {isSuccess && data ? (
            <div className="col-md-9">
              <div className="container">
                <div className="row">
                  {data.data.map((item) => {
                    return (
                      <div className="col-md-6">
                        <div className="card sub-body">
                          <div className="card-body">
                            <h5 className="card-titile-forsub">
                              {item.name}
                              <p>
                                <span className="sub-heading-fac">
                                  {item.department}
                                </span>
                              </p>
                              <p>
                                <span className="sub-heading-fac">
                                  Subject preference 1
                                </span>
                              </p>
                              <select
                                class="form-select form-selct-sub mt-3 mb-2"
                                aria-label="Default select example"
                                disabled={!disabled[item.id]}
                                onChange={(e) =>
                                  setEditData({
                                    ...editdata,
                                    subject_1: e.target.value,
                                  })
                                }
                              >
                                <option selected className="option-sub">
                                  {!disabled[item.id]
                                    ? item.subject_1
                                    : "Select Subject Preference 1"}
                                </option>
                                {subjectdata?.data.map((item) => {
                                  return (
                                    <option value={item.name}>
                                      {item.name}
                                    </option>
                                  );
                                })}
                              </select>
                              <p>
                                <span className="sub-heading-fac">
                                  Subject preference 2
                                </span>
                              </p>
                              <select
                                class="form-select form-selct-sub mt-3 mb-2"
                                aria-label="Default select example"
                                disabled={!disabled[item.id]}
                                onChange={(e) =>
                                  setEditData({
                                    ...editdata,
                                    subject_2: e.target.value,
                                  })
                                }
                              >
                                <option selected className="option-sub">
                                  {!disabled[item.id]
                                    ? item.subject_2
                                    : "Select Subject Preference 2"}
                                </option>
                                {subjectdata?.data.map((item) => {
                                  return (
                                    <option value={item.name}>
                                      {item.name}
                                    </option>
                                  );
                                })}
                              </select>
                              <p>
                                <span className="sub-heading-fac">
                                  Subject preference 3
                                </span>
                              </p>
                              <select
                                class="form-select form-selct-sub mt-3 mb-2"
                                aria-label="Default select example"
                                disabled={!disabled[item.id]}
                                onChange={(e) =>
                                  setEditData({
                                    ...editdata,
                                    subject_3: e.target.value,
                                  })
                                }
                              >
                                <option selected className="option-sub">
                                  {!disabled[item.id]
                                    ? item.subject_3
                                    : "Select Subject Preference 3"}
                                </option>
                                {subjectdata?.data.map((item) => {
                                  return (
                                    <option value={item.name}>
                                      {item.name}
                                    </option>
                                  );
                                })}
                              </select>
                            </h5>
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
                                onClick={() => {
                                  disabled[item.id] = !disabled[item.id];
                                  setShowModal(!showmodal);

                                  setDisabled({ ...disabled });
                                }}
                              >
                                <i class="fas fa-edit"></i>
                              </button>
                              {disabled[item.id] ? (
                                <button
                                  type="button"
                                  className="buttn buttn-check"
                                  onClick={() => {
                                    handleEditFaculty(item.id);
                                  }}
                                >
                                  <i class="fas fa-check"></i>
                                </button>
                              ) : (
                                ""
                              )}
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
                              setFacultyData({
                                semester: sem,
                                name: "",
                                department: "CSE",
                                subject_1: "",
                                subject_2: "",
                                subject_3: "",
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
                  onClick={() => handleDeleteFaculty(ids)}
                >
                  Delete
                </button>
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
                  ADD MORE FACULTY
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
                      for="exampleFormControlInput1"
                      class="form-label lable-modal"
                    >
                      Faculty Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value={faculty_data.name}
                      onChange={(e) =>
                        setFacultyData({
                          ...faculty_data,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div class="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label lable-modal"
                    >
                      Faculty Department
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      defaultValue={"COMPUTER SCIENCE AND ENGINEERING"}
                      disabled
                    />
                  </div>
                  <p>
                    <span className="sub-heading-fac">
                      Subject preference 1
                    </span>
                  </p>
                  <select
                    class="form-select form-selct-sub mt-3 mb-2"
                    aria-label="Default select example"
                    onChange={(e) =>
                      setFacultyData({
                        ...faculty_data,
                        subject_1: e.target.value,
                      })
                    }
                    value={faculty_data.subject_1}
                  >
                    <option selected className="option-sub">
                      Select Preference 1
                    </option>
                    {subjectdata?.data.map((item) => {
                      return <option value={item.name}>{item.name}</option>;
                    })}
                  </select>
                  <p>
                    <span className="sub-heading-fac">
                      Subject preference 2
                    </span>
                  </p>
                  <select
                    class="form-select form-selct-sub mt-3 mb-2"
                    aria-label="Default select example"
                    onChange={(e) =>
                      setFacultyData({
                        ...faculty_data,
                        subject_2: e.target.value,
                      })
                    }
                    value={faculty_data.subject_2}
                  >
                    <option selected className="option-sub">
                      Select Preference 2
                    </option>
                    {subjectdata?.data.map((item) => {
                      return <option value={item.name}>{item.name}</option>;
                    })}
                  </select>
                  <p>
                    <span className="sub-heading-fac">
                      Subject preference 3
                    </span>
                  </p>
                  <select
                    class="form-select form-selct-sub mt-3 mb-2"
                    aria-label="Default select example"
                    onChange={(e) =>
                      setFacultyData({
                        ...faculty_data,
                        subject_3: e.target.value,
                      })
                    }
                    value={faculty_data.subject_3}
                  >
                    <option selected className="option-sub">
                      Select Preference 3
                    </option>
                    {subjectdata?.data.map((item) => {
                      return <option value={item.name}>{item.name}</option>;
                    })}
                  </select>

                  <button
                    data-bs-dismiss="modal"
                    type="button"
                    class="btn btn-primary-modal btn-lg"
                    onClick={handleAddSubmit}
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

export default Allocation;
