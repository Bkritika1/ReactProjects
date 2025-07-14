import { createServer } from "miragejs";

export function makeServer() {
    return createServer({
        routes() {
            this.namespace = "api";
           this.get("/stats", () => {
  return {
    stats: [
      {
        id: 1,
        title: "Weekly Sales",
        value: "$ 15,0000",
        change: "Increased by 60%",
        icon: "📈",
        bgColor: "#ff758c" // pink gradient start
      },
      {
        id: 2,
        title: "Weekly Orders",
        value: "45,6334",
        change: "Decreased by 10%",
        icon: "🔖",
        bgColor: "#4facfe" // blue
      },
      {
        id: 3,
        title: "Visitors Online",
        value: "95,5741",
        change: "Increased by 5%",
        icon: "💎",
        bgColor: "#43e97b" // green
      }
    ]
  };
});


            this.get("/visit-stats", () => {
                return [
                    { month: "JAN", CHN: 40, USA: 80, UK: 60 },
                    { month: "FEB", CHN: 70, USA: 20, UK: 50 },
                    { month: "MAR", CHN: 30, USA: 50, UK: 40 },
                    { month: "APR", CHN: 60, USA: 60, UK: 10 },
                    { month: "MAY", CHN: 40, USA: 40, UK: 70 },
                    { month: "JUN", CHN: 70, USA: 70, UK: 20 },
                    { month: "JUL", CHN: 50, USA: 20, UK: 60 },
                    { month: "AUG", CHN: 30, USA: 50, UK: 70 }
                ];
            });

            this.get("/traffic-sources", () => {
                return [
                    { source: "Search Engines", value: 30, color: "#00cfff" },
                    { source: "Direct Click", value: 30, color: "#27c8c2" },
                    { source: "Bookmarks Click", value: 40, color: "#ff6f91" }
                ];
            });


            this.get("/todos", () => {
                return [
                    {
                        "id": 1,
                        "task": "Pick up kids from school",
                        "completed": false
                    },
                    {
                        "id": 2,
                        "task": "Prepare for presentation",
                        "completed": true
                    },
                    {
                        "id": 3,
                        "task": "Print Statements",
                        "completed": false
                    },
                    {
                        "id": 4,
                        "task": "Create invoice",
                        "completed": false
                    },
                    {
                        "id": 5,
                        "task": "Call John",
                        "completed": true
                    },
                    {
                        "id": 6,
                        "task": "Meeting with Alisa",
                        "completed": false
                    }
                ];

            });

            this.get("/tickets", () => {
                return {
                    tickets: [
                        {
                            id: 1,
                            assignee: "David Grey",
                            avatar: "https://randomuser.me/api/portraits/men/45.jpg",
                            subject: "Fund is not received",
                            status: "DONE",
                            date: "Dec 5, 2017",
                            trackingId: "WD-12345",
                              bgColor: "#ff758c" 
                        
                        },
                        {
                            id: 2,
                            assignee: "Stella Johnson",
                            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                            subject: "High loading time",
                            status: "PROGRESS",
                            date: "Dec 12, 2017",
                            trackingId: "WD-12346"
                        },
                        {
                            id: 3,
                            assignee: "Marina Michel",
                            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
                            subject: "Website down for one week",
                            status: "ON HOLD",
                            date: "Dec 16, 2017",
                            trackingId: "WD-12347"
                        },
                        {
                            id: 4,
                            assignee: "John Doe",
                            avatar: "https://randomuser.me/api/portraits/men/46.jpg",
                            subject: "Losing control on server",
                            status: "REJECTED",
                            date: "Dec 3, 2017",
                            trackingId: "WD-12348"
                        }
                    ]
                };
            });

            this.get("/updates", () => {
                return {
                    updates: [
                        {
                            id: 1,
                            author: "Jack Menqu",
                            date: "October 3rd, 2018",
                            title: "Update 1",
                            description: "This is update 1",
                            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                            images: [
                                "https://demo.bootstrapdash.com/purple-admin-free/dist/themes/assets/images/dashboard/img_1.jpg",
                                "https://demo.bootstrapdash.com/purple-admin-free/dist/themes/assets/images/dashboard/img_2.jpg",
                                "https://demo.bootstrapdash.com/purple-admin-free/dist/themes/assets/images/dashboard/img_4.jpg",
                                "https://demo.bootstrapdash.com/purple-admin-free/dist/themes/assets/images/dashboard/img_3.jpg"
                            ]
                        }
                    ]
                };
            });



            this.get("/projects", () => {
                return [
                    {
                        "id": 1,
                        "name": "Herman Beck",
                        "dueDate": "2015-05-15",
                        "progress": 30
                    },
                    {
                        "id": 2,
                        "name": "Messsy Adam",
                        "dueDate": "2015-07-01",
                        "progress": 70
                    },
                    {
                        "id": 3,
                        "name": "John Richards",
                        "dueDate": "2015-04-12",
                        "progress": 85
                    },
                    {
                        "id": 4,
                        "name": "Peter Meggik",
                        "dueDate": "2015-05-15",
                        "progress": 60
                    },
                    {
                        "id": 5,
                        "name": "Edward",
                        "dueDate": "2015-05-03",
                        "progress": 40
                    },
                    {
                        "id": 6,
                        "name": "Ronald",
                        "dueDate": "2015-06-05",
                        "progress": 90
                    }
                ];

            });
        }
    });
}
