import React, { useEffect, useState } from "react";
import "./facultym.css";
import { useNavigate } from "react-router-dom";
import { sidebardata } from "../../pages/utils";
import {
  useDeleteSubjectDataMutation,
  useGetFacultyForSubjectAllocationMutation,
  useGetSubjectBySemQuery,
  useUpdateFacultyAllocationMutation,
} from "../../services/subjectfacultyapi";
import { getToken } from "../../services/LocalStorage";
function FacultyM() {
  const [sem, setSem] = useState(1);
  const [ids, setids] = useState(-1);
  const [servermsg, setServermsg] = useState();
  const [faculty, setFaculty] = useState("");
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
  const [deletesubject] = useDeleteSubjectDataMutation();
  const [editsubject] = useUpdateFacultyAllocationMutation();
  const [facultyallocate] = useGetFacultyForSubjectAllocationMutation();

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
  const [faculty_allocation, setFacultyAllocation] = useState({
    sub_name: "",
    faculty_data: [],
  });
  const handleEdit = async (sub_name) => {
    const { data, error, isLoading, isSuccess } = await facultyallocate({
      access_token: token.access_token,
      subject_data: {
        semester: sem,
        sub_name: sub_name,
      },
    });
    if (error) {
      console.log(error);
      setServermsg(error.msg);
    }

    if (data) {
      console.log(data);
      setServermsg(data.msg);
      setFacultyAllocation({
        ...faculty_allocation,
        sub_name: sub_name,
        faculty_data: data.data,
      });
      setFaculty("");
    }
  };
  console.log(faculty);

  const editSubjectdata = async () => {
    const { data, error, isLoading, isSuccess } = await editsubject({
      access_token: token.access_token,
      subject_data: {
        id: ids,
        faculty_allocated: faculty,
      },
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
                              <select
                                class="form-select form-selct-sub mt-3 mb-2"
                                aria-label="Default select example"
                                disabled
                              >
                                <option selected className="option-sub">
                                  {item.faculty_allocated
                                    ? item.faculty_allocated
                                    : "No Faculty Allocated"}
                                </option>
                              </select>
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
                                data-bs-target="#exampleModal"
                                onClick={() => {
                                  setids(item.id);
                                  setShowModal(true);
                                  handleEdit(item.name);
                                }}
                              >
                                <i class="fas fa-edit"></i>
                              </button>
                              {/* <button
                                type="button"
                                className="buttn buttn-check"
                              >
                                <i class="fas fa-check"></i>
                              </button> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Allocate Faculty
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                {/* form with name and descrption  */}

                <form>
                  <div class="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label lable-modal"
                    >
                      Subject Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      disabled
                      value={faculty_allocation.sub_name}
                    />
                    <select
                      class="form-select form-selct-sub mt-3 mb-2"
                      aria-label="Default select example"
                      onChange={(e) => setFaculty(e.target.value)}
                      value={faculty}
                    >
                      <option selected className="option-sub">
                        Select Facutly
                      </option>
                      {faculty_allocation.faculty_data.map((item) => {
                        return <option value={item.name}>{item.name}</option>;
                      })}
                    </select>
                  </div>

                  <button
                    data-bs-dismiss="modal"
                    type="button"
                    class="btn btn-primary-modal btn-lg"
                    onClick={editSubjectdata}
                  >
                    Allocate
                  </button>
                </form>
              </div>
            </div>
          </div>
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
      </div>
    </>
  );
}

export default FacultyM;
