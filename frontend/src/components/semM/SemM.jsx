import React, { useState } from 'react'
import './semm.css'
function SemM() {
    const [data, setData] = useState([
        {
            id: 1,
            heading:'Mathematics-1',
            details:'Mathematics-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of mathematics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
        },
        {
            id: 2,
            heading:'Physics-1',
            details:'Physics-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of physics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

        },
        {
            id: 3,
            heading:'Chemistry-1',
            details:'Chemistry-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of chemistry. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

        },
        {
            id: 4,
            heading:'Engineering Graphics',
            details:'Engineering Graphics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering graphics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

        },{
            id: 5,
            heading:'Engineering Mechanics',
            details:'Engineering Mechanics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mechanics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

        },{
            id: 6,
            heading:'Engineering Chemistry',
            details:'Engineering Chemistry is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering chemistry. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
        },{
            id: 7,
            heading:'Engineering Physics',
            details:'Engineering Physics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering physics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

        },
        {
            id: 8,
            heading:'Engineering Mathematics',
            details:'Engineering Mathematics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mathematics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
        },{
            id: 9,
            heading:'Engineering Mechanics',
            details:'Engineering Mechanics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mechanics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
        }
    ])


    const sidebarData = [
        {
            id: 1,
            name: '1st Semeseter',
            branchData: [
                {
                    id: 1,
                    heading:'Mathematics-1',
                    details:'Mathematics-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of mathematics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },
                {
                    id: 2,
                    heading:'Physics-1',
                    details:'Physics-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of physics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 3,
                    heading:'Chemistry-1',
                    details:'Chemistry-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of chemistry. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 4,
                    heading:'Engineering Graphics',
                    details:'Engineering Graphics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering graphics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },{
                    id: 5,
                    heading:'Engineering Mechanics',
                    details:'Engineering Mechanics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mechanics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },{
                    id: 6,
                    heading:'Engineering Chemistry',
                    details:'Engineering Chemistry is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering chemistry. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },{
                    id: 7,
                    heading:'Engineering Physics',
                    details:'Engineering Physics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering physics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 8,
                    heading:'Engineering Mathematics',
                    details:'Engineering Mathematics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mathematics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },{
                    id: 9,
                    heading:'Engineering Mechanics',
                    details:'Engineering Mechanics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mechanics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                }
            ]
            
        },{
            id: 2,
            name: '2nd Semeseter',
            branchData: [
                {
                    id: 1,
                    heading:'Mathematics-2',
                    details:'Mathematics-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of mathematics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },
                {
                    id: 2,
                    heading:'Physics-1',
                    details:'Physics-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of physics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 3,
                    heading:'Chemistry-1',
                    details:'Chemistry-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of chemistry. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 4,
                    heading:'Engineering Graphics',
                    details:'Engineering Graphics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering graphics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },{
                    id: 5,
                    heading:'Engineering Mechanics',
                    details:'Engineering Mechanics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mechanics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },{
                    id: 6,
                    heading:'Engineering Chemistry',
                    details:'Engineering Chemistry is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering chemistry. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },{
                    id: 7,
                    heading:'Engineering Physics',
                    details:'Engineering Physics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering physics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 8,
                    heading:'Engineering Mathematics',
                    details:'Engineering Mathematics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mathematics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },{
                    id: 9,
                    heading:'Engineering Mechanics',
                    details:'Engineering Mechanics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mechanics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                }
            ]
            
        },{
            id: 3,
            name: '3rd Semeseter',
            branchData: [
                {
                    id: 1,
                    heading:'Mathematics-1',
                    details:'Mathematics-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of mathematics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },
                {
                    id: 2,
                    heading:'Physics-1',
                    details:'Physics-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of physics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 3,
                    heading:'Chemistry-1',
                    details:'Chemistry-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of chemistry. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 4,
                    heading:'Engineering Graphics',
                    details:'Engineering Graphics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering graphics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },{
                    id: 5,
                    heading:'Engineering Mechanics',
                    details:'Engineering Mechanics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mechanics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },{
                    id: 6,
                    heading:'Engineering Chemistry',
                    details:'Engineering Chemistry is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering chemistry. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },{
                    id: 7,
                    heading:'Engineering Physics',
                    details:'Engineering Physics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering physics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 8,
                    heading:'Engineering Mathematics',
                    details:'Engineering Mathematics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mathematics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },{
                    id: 9,
                    heading:'Engineering Mechanics',
                    details:'Engineering Mechanics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mechanics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                }
            ]
            
        },{
            id: 1,
            name: '4th Semeseter',
            branchData: [
                {
                    id: 1,
                    heading:'Mathematics-1',
                    details:'Mathematics-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of mathematics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },
                {
                    id: 2,
                    heading:'Physics-1',
                    details:'Physics-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of physics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 3,
                    heading:'Chemistry-1',
                    details:'Chemistry-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of chemistry. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 4,
                    heading:'Engineering Graphics',
                    details:'Engineering Graphics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering graphics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },{
                    id: 5,
                    heading:'Engineering Mechanics',
                    details:'Engineering Mechanics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mechanics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },{
                    id: 6,
                    heading:'Engineering Chemistry',
                    details:'Engineering Chemistry is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering chemistry. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },{
                    id: 7,
                    heading:'Engineering Physics',
                    details:'Engineering Physics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering physics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 8,
                    heading:'Engineering Mathematics',
                    details:'Engineering Mathematics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mathematics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },{
                    id: 9,
                    heading:'Engineering Mechanics',
                    details:'Engineering Mechanics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mechanics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                }
            ]
            
        },{
            id: 5,
            name: '5th Semeseter',
            branchData: [
                {
                    id: 1,
                    heading:'Mathematics-1',
                    details:'Mathematics-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of mathematics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },
                {
                    id: 2,
                    heading:'Physics-1',
                    details:'Physics-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of physics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 3,
                    heading:'Chemistry-1',
                    details:'Chemistry-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of chemistry. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 4,
                    heading:'Engineering Graphics',
                    details:'Engineering Graphics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering graphics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },{
                    id: 5,
                    heading:'Engineering Mechanics',
                    details:'Engineering Mechanics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mechanics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },{
                    id: 6,
                    heading:'Engineering Chemistry',
                    details:'Engineering Chemistry is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering chemistry. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },{
                    id: 7,
                    heading:'Engineering Physics',
                    details:'Engineering Physics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering physics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 8,
                    heading:'Engineering Mathematics',
                    details:'Engineering Mathematics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mathematics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },{
                    id: 9,
                    heading:'Engineering Mechanics',
                    details:'Engineering Mechanics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mechanics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                }
            ]
            
        },{
            id: 6,
            name: '6th Semeseter',
            branchData: [
                {
                    id: 1,
                    heading:'Mathematics-1',
                    details:'Mathematics-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of mathematics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },
                {
                    id: 2,
                    heading:'Physics-1',
                    details:'Physics-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of physics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 3,
                    heading:'Chemistry-1',
                    details:'Chemistry-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of chemistry. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 4,
                    heading:'Engineering Graphics',
                    details:'Engineering Graphics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering graphics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },{
                    id: 5,
                    heading:'Engineering Mechanics',
                    details:'Engineering Mechanics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mechanics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },{
                    id: 6,
                    heading:'Engineering Chemistry',
                    details:'Engineering Chemistry is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering chemistry. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },{
                    id: 7,
                    heading:'Engineering Physics',
                    details:'Engineering Physics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering physics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 8,
                    heading:'Engineering Mathematics',
                    details:'Engineering Mathematics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mathematics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },{
                    id: 9,
                    heading:'Engineering Mechanics',
                    details:'Engineering Mechanics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mechanics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                }
            ]
            
        },{
            id: 7,
            name: '7th Semeseter',
            branchData: [
                {
                    id: 1,
                    heading:'Mathematics-1',
                    details:'Mathematics-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of mathematics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },
                {
                    id: 2,
                    heading:'Physics-1',
                    details:'Physics-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of physics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 3,
                    heading:'Chemistry-1',
                    details:'Chemistry-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of chemistry. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 4,
                    heading:'Engineering Graphics',
                    details:'Engineering Graphics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering graphics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },{
                    id: 5,
                    heading:'Engineering Mechanics',
                    details:'Engineering Mechanics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mechanics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },{
                    id: 6,
                    heading:'Engineering Chemistry',
                    details:'Engineering Chemistry is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering chemistry. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },{
                    id: 7,
                    heading:'Engineering Physics',
                    details:'Engineering Physics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering physics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 8,
                    heading:'Engineering Mathematics',
                    details:'Engineering Mathematics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mathematics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },{
                    id: 9,
                    heading:'Engineering Mechanics',
                    details:'Engineering Mechanics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mechanics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                }
            ]
            
        },{
            id: 8,
            name: '8th Semeseter',
            branchData: [
                {
                    id: 1,
                    heading:'Mathematics-1',
                    details:'Mathematics-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of mathematics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },
                {
                    id: 2,
                    heading:'Physics-1',
                    details:'Physics-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of physics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 3,
                    heading:'Chemistry-1',
                    details:'Chemistry-1 is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of chemistry. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 4,
                    heading:'Engineering Graphics',
                    details:'Engineering Graphics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering graphics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },{
                    id: 5,
                    heading:'Engineering Mechanics',
                    details:'Engineering Mechanics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mechanics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },{
                    id: 6,
                    heading:'Engineering Chemistry',
                    details:'Engineering Chemistry is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering chemistry. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },{
                    id: 7,
                    heading:'Engineering Physics',
                    details:'Engineering Physics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering physics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'

                },
                {
                    id: 8,
                    heading:'Engineering Mathematics',
                    details:'Engineering Mathematics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mathematics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                },{
                    id: 9,
                    heading:'Engineering Mechanics',
                    details:'Engineering Mechanics is a 3-credit course offered to students at the undergraduate level. It aims to provide students with a comprehensive understanding of the fundamental concepts of engineering mechanics. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
                }
            ]
            
        }
    ]
    return (
        <>
            <div className="container">

                <div className="row">
                    <div className="col-md-3">
                        <div class="list-group list-group-flush">
                            {
                                sidebarData.map((item) => {
                                    return (
                                        <button type="button" onClick={()=>setData(item.branchData)} class="list-group-item list-group-item-action" aria-current="true">
                                            {item.name}
                                        </button>
                                    )
                                }
                                )
                            }


                        </div>
                    </div>
                    {data ? (
                        <div className="col-md-9">
                            <div className="container">
                                <div className="row">
                                    {
                                        data.map((item) => {
                                            return (
                                                <div className="col-md-6">
                                                    <div className="card sub-body" >
                                                        <div className="card-body">
                                                            <h5 className="card-titile-forsub">{item.heading}</h5>
                                                            <p className="card-text-sub">{item.details}</p>
                                                            
                                                            <div className="text-center">
                                                                <button type="button" className='buttn buttn-trash'>
                                                                    <i class="fas fa-trash-alt"></i>
                                                                </button>
                                                                <button type="button" className='buttn buttn-edit'>
                                                                    <i class="fas fa-edit"></i>
                                                                </button>
                                                                <button type="button" className='buttn buttn-check'>
                                                                    <i class="fas fa-check"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="col-md-6">
                                                    <div className="card sub-body-addmore" >
                                                        <div className="card-body">
                                                            <div className="text-center">
                                                               
                                                            <button type="button" class="btn btn-primary-addmore btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">Add More</button>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                </div>
                            </div>
                            
                        </div>
                    ) : "No Data"}

                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">ADD MORE SUBJECT</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                           

                                <form>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label lable-modal">Subject Name</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label lable-modal">Subject Description</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <button type="button" class="btn btn-primary-modal btn-lg" >Add</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SemM