import React, { useState } from 'react'
import './allocation.css'
function Allocation() {
    const [data, setData] = useState(

        [
            {
                id: 1,
                heading: 'Sagarika Swain',
                preference: [
                    {
                        id: 1,
                        name: 'Mathematics-1',
                    },
                    {
                        id: 2,
                        name: 'Physics-1',
                    },
                    {
                        id: 3,
                        name: 'Chemistry-1',
                    }
                ]

            },
            {
                id: 2,
                heading: 'Siba Prasada Tripathy',
                preference: [
                    {
                        id: 1,
                        name: 'Mathematics-1',
                    },
                    {
                        id: 2,
                        name: 'Physics-1',
                    },
                    {
                        id: 3,
                        name: 'Chemistry-1',
                    }
                ]
            },
            {
                id: 3,
                heading: 'TARINI CHARANA MISHRA',

                preference: [
                    {
                        id: 1,
                        name: 'Mathematics-1',
                    },
                    {
                        id: 2,
                        name: 'Physics-1',
                    },
                    {
                        id: 3,
                        name: 'Chemistry-1',
                    }
                ]
            },
            {
                id: 4,
                heading: 'Surajit Das',

                preference: [
                    {
                        id: 1,
                        name: 'Mathematics-1',
                    },
                    {
                        id: 2,
                        name: 'Physics-1',
                    },
                    {
                        id: 3,
                        name: 'Chemistry-1',
                    }
                ]
            }, {
                id: 5,
                heading: 'SUBASH CHANDRA TRIPATHY',
                preference: [
                    {
                        id: 1,
                        name: 'Mathematics-1',
                    },
                    {
                        id: 2,
                        name: 'Physics-1',
                    },
                    {
                        id: 3,
                        name: 'Chemistry-1',
                    }
                ]
            }, {
                id: 6,
                heading: 'Ranjit Kumar Behera',
                preference: [
                    {
                        id: 1,
                        name: 'Mathematics-1',
                    },
                    {
                        id: 2,
                        name: 'Physics-1',
                    },
                    {
                        id: 3,
                        name: 'Chemistry-1',
                    }
                ]
            }, {
                id: 7,
                heading: 'Rabinarayan Mohanty',
                preference: [
                    {
                        id: 1,
                        name: 'Mathematics-1',
                    },
                    {
                        id: 2,
                        name: 'Physics-1',
                    },
                    {
                        id: 3,
                        name: 'Chemistry-1',
                    }
                ]
            },
            {
                id: 8,
                heading: 'PRADIPTA KUMAR PATTANAYAK',
                preference: [
                    {
                        id: 1,
                        name: 'Mathematics-1',
                    },
                    {
                        id: 2,
                        name: 'Physics-1',
                    },
                    {
                        id: 3,
                        name: 'Chemistry-1',
                    }
                ]
            }, {
                id: 9,
                heading: 'Paramita Aryadhara Panda',
                preference: [
                    {
                        id: 1,
                        name: 'Mathematics-1',
                    },
                    {
                        id: 2,
                        name: 'Physics-1',
                    },
                    {
                        id: 3,
                        name: 'Chemistry-1',
                    }
                ]
            }
        ])


    const sidebarData = [
        {
            id: 1,
            name: '1st Semeseter',
            branchData:
                [
                    {
                        id: 1,
                        heading: 'Sagarika Swain',
                        preference: [
                            {
                                id: 1,
                                name: 'Mathematics-1',
                            },
                            {
                                id: 2,
                                name: 'Physics-1',
                            },
                            {
                                id: 3,
                                name: 'Chemistry-1',
                            }
                        ]

                    },
                    {
                        id: 2,
                        heading: 'Siba Prasada Tripathy',
                        preference: [
                            {
                                id: 1,
                                name: 'Mathematics-1',
                            },
                            {
                                id: 2,
                                name: 'Physics-1',
                            },
                            {
                                id: 3,
                                name: 'Chemistry-1',
                            }
                        ]
                    },
                    {
                        id: 3,
                        heading: 'TARINI CHARANA MISHRA',

                        preference: [
                            {
                                id: 1,
                                name: 'Mathematics-1',
                            },
                            {
                                id: 2,
                                name: 'Physics-1',
                            },
                            {
                                id: 3,
                                name: 'Chemistry-1',
                            }
                        ]
                    },
                    {
                        id: 4,
                        heading: 'Surajit Das',

                        preference: [
                            {
                                id: 1,
                                name: 'Mathematics-1',
                            },
                            {
                                id: 2,
                                name: 'Physics-1',
                            },
                            {
                                id: 3,
                                name: 'Chemistry-1',
                            }
                        ]
                    }, {
                        id: 5,
                        heading: 'SUBASH CHANDRA TRIPATHY',
                        preference: [
                            {
                                id: 1,
                                name: 'Mathematics-1',
                            },
                            {
                                id: 2,
                                name: 'Physics-1',
                            },
                            {
                                id: 3,
                                name: 'Chemistry-1',
                            }
                        ]
                    }, {
                        id: 6,
                        heading: 'Ranjit Kumar Behera',
                        preference: [
                            {
                                id: 1,
                                name: 'Mathematics-1',
                            },
                            {
                                id: 2,
                                name: 'Physics-1',
                            },
                            {
                                id: 3,
                                name: 'Chemistry-1',
                            }
                        ]
                    }, {
                        id: 7,
                        heading: 'Rabinarayan Mohanty',
                        preference: [
                            {
                                id: 1,
                                name: 'Mathematics-1',
                            },
                            {
                                id: 2,
                                name: 'Physics-1',
                            },
                            {
                                id: 3,
                                name: 'Chemistry-1',
                            }
                        ]
                    },
                    {
                        id: 8,
                        heading: 'PRADIPTA KUMAR PATTANAYAK',
                        preference: [
                            {
                                id: 1,
                                name: 'Mathematics-1',
                            },
                            {
                                id: 2,
                                name: 'Physics-1',
                            },
                            {
                                id: 3,
                                name: 'Chemistry-1',
                            }
                        ]
                    }, {
                        id: 9,
                        heading: 'Paramita Aryadhara Panda',
                        preference: [
                            {
                                id: 1,
                                name: 'Mathematics-1',
                            },
                            {
                                id: 2,
                                name: 'Physics-1',
                            },
                            {
                                id: 3,
                                name: 'Chemistry-1',
                            }
                        ]
                    }
                ]

        }, {
            id: 2,
            name: '2nd Semeseter',
            branchData: [
                {
                    id: 1,
                    heading: 'Sagarika Swain',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]

                },
                {
                    id: 2,
                    heading: 'Siba Prasada Tripathy',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 3,
                    heading: 'TARINI CHARANA MISHRA',

                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 4,
                    heading: 'Surajit Das',

                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 5,
                    heading: 'SUBASH CHANDRA TRIPATHY',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 6,
                    heading: 'Ranjit Kumar Behera',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 7,
                    heading: 'Rabinarayan Mohanty',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 8,
                    heading: 'PRADIPTA KUMAR PATTANAYAK',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 9,
                    heading: 'Paramita Aryadhara Panda',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }
            ]

        }, {
            id: 3,
            name: '3rd Semeseter',
            branchData: [
                {
                    id: 1,
                    heading: 'Sagarika Swain',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]

                },
                {
                    id: 2,
                    heading: 'Siba Prasada Tripathy',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 3,
                    heading: 'TARINI CHARANA MISHRA',

                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 4,
                    heading: 'Surajit Das',

                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 5,
                    heading: 'SUBASH CHANDRA TRIPATHY',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 6,
                    heading: 'Ranjit Kumar Behera',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 7,
                    heading: 'Rabinarayan Mohanty',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 8,
                    heading: 'PRADIPTA KUMAR PATTANAYAK',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 9,
                    heading: 'Paramita Aryadhara Panda',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }
            ]

        }, {
            id: 4,
            name: '4th Semeseter',
            branchData: [
                {
                    id: 1,
                    heading: 'Sagarika Swain',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]

                },
                {
                    id: 2,
                    heading: 'Siba Prasada Tripathy',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 3,
                    heading: 'TARINI CHARANA MISHRA',

                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 4,
                    heading: 'Surajit Das',

                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 5,
                    heading: 'SUBASH CHANDRA TRIPATHY',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 6,
                    heading: 'Ranjit Kumar Behera',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 7,
                    heading: 'Rabinarayan Mohanty',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 8,
                    heading: 'PRADIPTA KUMAR PATTANAYAK',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 9,
                    heading: 'Paramita Aryadhara Panda',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }
            ]

        }, {
            id: 5,
            name: '5th Semeseter',
            branchData: [
                {
                    id: 1,
                    heading: 'Sagarika Swain',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]

                },
                {
                    id: 2,
                    heading: 'Siba Prasada Tripathy',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 3,
                    heading: 'TARINI CHARANA MISHRA',

                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 4,
                    heading: 'Surajit Das',

                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 5,
                    heading: 'SUBASH CHANDRA TRIPATHY',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 6,
                    heading: 'Ranjit Kumar Behera',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 7,
                    heading: 'Rabinarayan Mohanty',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 8,
                    heading: 'PRADIPTA KUMAR PATTANAYAK',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 9,
                    heading: 'Paramita Aryadhara Panda',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }
            ]

        }, {
            id: 6,
            name: '6th Semeseter',
            branchData: [
                {
                    id: 1,
                    heading: 'Sagarika Swain',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]

                },
                {
                    id: 2,
                    heading: 'Siba Prasada Tripathy',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 3,
                    heading: 'TARINI CHARANA MISHRA',

                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 4,
                    heading: 'Surajit Das',

                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 5,
                    heading: 'SUBASH CHANDRA TRIPATHY',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 6,
                    heading: 'Ranjit Kumar Behera',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 7,
                    heading: 'Rabinarayan Mohanty',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 8,
                    heading: 'PRADIPTA KUMAR PATTANAYAK',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 9,
                    heading: 'Paramita Aryadhara Panda',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }
            ]

        }, {
            id: 7,
            name: '7th Semeseter',
            branchData: [
                {
                    id: 1,
                    heading: 'Sagarika Swain',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]

                },
                {
                    id: 2,
                    heading: 'Siba Prasada Tripathy',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 3,
                    heading: 'TARINI CHARANA MISHRA',

                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 4,
                    heading: 'Surajit Das',

                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 5,
                    heading: 'SUBASH CHANDRA TRIPATHY',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 6,
                    heading: 'Ranjit Kumar Behera',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 7,
                    heading: 'Rabinarayan Mohanty',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 8,
                    heading: 'PRADIPTA KUMAR PATTANAYAK',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 9,
                    heading: 'Paramita Aryadhara Panda',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }
            ]

        }, {
            id: 8,
            name: '8th Semeseter',
            branchData: [
                {
                    id: 1,
                    heading: 'Sagarika Swain',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]

                },
                {
                    id: 2,
                    heading: 'Siba Prasada Tripathy',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 3,
                    heading: 'TARINI CHARANA MISHRA',

                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 4,
                    heading: 'Surajit Das',

                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 5,
                    heading: 'SUBASH CHANDRA TRIPATHY',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 6,
                    heading: 'Ranjit Kumar Behera',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 7,
                    heading: 'Rabinarayan Mohanty',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                },
                {
                    id: 8,
                    heading: 'PRADIPTA KUMAR PATTANAYAK',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
                }, {
                    id: 9,
                    heading: 'Paramita Aryadhara Panda',
                    preference: [
                        {
                            id: 1,
                            name: 'Mathematics-1',
                        },
                        {
                            id: 2,
                            name: 'Physics-1',
                        },
                        {
                            id: 3,
                            name: 'Chemistry-1',
                        }
                    ]
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
                                        <button type="button" onClick={() => setData(item.branchData)} class="list-group-item list-group-item-action" aria-current="true">
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
                                        data?.map((item) => {
                                            return (
                                                <div className="col-md-6">
                                                    <div className="card sub-body" >
                                                        <div className="card-body">
                                                            <h5 className="card-titile-forsub">{item.heading}
                                                                <p>
                                                                    <span className='sub-heading-fac'>Computer Science and Engineering</span>
                                                                </p>
                                                                <select class="form-select form-selct-sub mt-3 mb-2" aria-label="Default select example">
                                                                    <option selected className='option-sub'>Select Subject Preference</option>
                                                                    {
                                                                        item?.preference.map((item) => {

                                                                            return (

                                                                                <option value={item.id}>{item.name}</option>
                                                                            )
                                                                        })

                                                                    }

                                                                </select>

                                                            </h5>


                                                            <div className="text-center">
                                                                {/* <button type="button" className='buttn buttn-trash'>
                                                                    <i class="fas fa-trash-alt"></i>
                                                                </button> */}
                                                                <button type="button" className='buttn buttn-edit'>
                                                                    <i class="fas fa-edit"></i>
                                                                </button>
                                                                {/* <button type="button" className='buttn buttn-check'>
                                                                    <i class="fas fa-check"></i>
                                                                </button> */}
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

export default Allocation