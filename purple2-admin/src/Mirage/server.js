import { createServer } from "miragejs";

export function makeServer() {
    return createServer({
        routes() {
            this.namespace = "api";

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
