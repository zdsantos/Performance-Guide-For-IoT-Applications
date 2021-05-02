const guideContent = [
    {
        id: "time_behavior",
        name: "Performance - Time Behavior",
        properties: [
            {
                selected: false,
                type: "properties",
                id: "PT01",
                title: "Property 1",
                characteristics: "time_behavior",
                description: "Description of property 01"
            },
            {
                selected: false,
                type: "properties",
                id: "PT02",
                title: "Property 2",
                characteristics: "time_behavior",
                description: "Description of property 02"
            }
        ],
        testCases: [
            {
                selected: false,
                type: "testCases",
                id: "TC01",
                idLong: "Test Case 01",
                title: "Send command to actuator",
                characteristics: "time_behavior",
                testEnvironment: "N actuators and 1 application with access to the actuators",
                preConditions: "The actuators must be able to receive the command",
                steps: [
                    "In the application, send the desired command",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators executed the command sent"
            },
            {
                selected: false,
                type: "testCases",
                id: "TC02",
                idLong: "Test Case 02",
                title: "Send command to actuator via external network",
                characteristics: "time_behavior",
                testEnvironment: "N actuators and 1 application with access to the actuators",
                preConditions: "The actuator must be able to receive the command, the application must be on a network, outside the local network",
                steps: [
                    "In the application, send the desired command",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators executed the command sent"
            },
            {
                selected: false,
                type: "testCases",
                id: "TC03",
                idLong: "Test Case 03",
                title: "Send commands simultaneously",
                characteristics: "time_behavior",
                testEnvironment: "N actuators and 2 applications with access to actuators",
                preConditions: "The actuators must be able to receive the command",
                steps: [
                    "Send a command simultaneously from devices 1 and 2",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators executed the sent commands"
            },
            {
                selected: false,
                type: "testCases",
                id: "TC04",
                idLong: "Test Case 04",
                title: "Send multiple requests",
                characteristics: "time_behavior",
                testEnvironment: "N actuators and N devices with access to actuators",
                preConditions: "The actuators must be able to receive the command",
                steps: [
                    "Send a command simultaneously from each device",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators must have received all commands, responded to each of them and for each command, if in a fit state, execute it"
            },
            {
                selected: false,
                type: "testCases",
                id: "TC05",
                idLong: "Test Case 05",
                title: "Send command to the actuator at peak time",
                characteristics: "time_behavior",
                testEnvironment: "N actuators and 1 device with access to actuators",
                preConditions: "The actuators must be able to receive the command, the application must be at its peak time, knowing that peak is the time when there are the highest number of accesses to the application [Kumar 2000]",
                steps: [
                    "In the application, send the desired command",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators executed the command sent"
            },
            {
                selected: false,
                type: "testCases",
                id: "TC06",
                idLong: "Test Case 06",
                title: "Receive sensor reading",
                characteristics: "time_behavior",
                testEnvironment: "N sensors and N applications with sensor access",
                preConditions: "The sensors must be in perfect working order",
                steps: [
                    "The sensors monitor the environment",
                    "The application reads sensor data"
                ],
                postConditions: "The application updated in relation to the state of the environment"
            },
            {
                selected: false,
                type: "testCases",
                id: "TC07",
                idLong: "Test Case 07",
                title: "Receive sensor reading from an external network",
                characteristics: "time_behavior",
                testEnvironment: "N sensors and 1 application with sensor access",
                preConditions: "The sensors must be in perfect operation, the application must be in a network, outside the local network",
                steps: [
                    "The sensors monitor the environment",
                    "The application reads sensor data"
                ],
                postConditions: "The application updated in relation to the state of the environment"
            },
            {
                selected: false,
                type: "testCases",
                id: "TC08",
                idLong: "Test Case 08",
                title: "Change environment configuration",
                characteristics: "time_behavior",
                testEnvironment: "N sensor and 1 device with sensor access",
                preConditions: "The sensor must be monitoring the environment",
                steps: [
                    "The application reads the sensor data",
                    "The configuration of the environment that the sensor monitors is changed",
                    "The application takes a new reading of the sensor data"
                ],
                postConditions: "The application updated in relation to the new state of the environment"
            },
            {
                selected: false,
                type: "testCases",
                id: "TC09",
                idLong: "Test Case 09",
                title: "Status after reconnection",
                characteristics: "time_behavior",
                testEnvironment: "N sensors and 1 device with sensor access The sensors must be monitoring the environment",
                preConditions: "Sensors must be monitoring the environment",
                steps: [
                    "The application reads data from the sensors",
                    "The connection between sensors and application is interrupted",
                    "The configuration of the environment that the sensors monitor is changed",
                    "Connection between sensors and application is restored",
                    "The application takes a new reading of the sensor data"
                ],
                postConditions: "The application updated in relation to the new state of the environment"
            },
            {
                selected: false,
                type: "testCases",
                id: "TC10",
                idLong: "Test Case 10",
                title: "Receive sensor reading at peak time",
                characteristics: "time_behavior",
                testEnvironment: "N sensors and N applications with sensor access",
                preConditions: "The sensors must be in perfect operation at peak time",
                steps: [
                    "Sensors monitor the environment",
                    "The application reads the sensor data"
                ],
                postConditions: "The application updated in relation to the new state of the environment"
            },
            {
                selected: false,
                type: "testCases",
                id: "TC11",
                idLong: "Test Case 11",
                title: "Adapt to the new state of the environment",
                characteristics: "time_behavior",
                testEnvironment: "N sensors and 1 application with access to sensors",
                preConditions: "The sensors must be in perfect working order",
                steps: [
                    "Sensors monitor the environment",
                    "The application reads the sensor data",
                    "The application reacts to the reading of the data"
                ],
                postConditions: "The application updated in relation to the new state of the environment"
            }
        ],
        metrics: [
            {
                selected: false,
                type: "metrics",
                id: "M01",
                title: "Dispatch Time",
                characteristics: "time_behavior",
                purpose: "Evaluate the preparation time of the task until it is ready for submission.",
                method: "Account for the start of task preparation and compare with the time it is ready for submission",
                measure: [
                    "$X = t2- t1$",
                    "$X$ = dispatch time",
                    "$t1$ = task preparation start time",
                    "$t2$ = the time the task is ready to send",
                ],
                reference: "Sellers (2018) e Nair (2015)"
            },
            {
                selected: false,
                type: "metrics",
                id: "M02",
                title: "Execution Time",
                characteristics: "time_behavior",
                purpose: "Evaluate the execution time of a task.",
                method: "Account for the start of the task execution and compare it to the time it was finished.",
                measure: [
                    "$X = t2- t1$",
                    "$X$ = execution time",
                    "$t1$ = execution start time",
                    "$t2$ = the time the task was completed"
                ],
                reference: "Nair (2015)"
            },
            {
                selected: false,
                type: "metrics",
                id: "M03",
                title: "Message Transmission Time",
                characteristics: "time_behavior",
                purpose: "Evaluate the transfer time of a message.",
                method: "Count the time the message was sent and compare it to the time the message was received.",
                measure: [
                    "$X = t2- t1$",
                    "$X$ = message transmission time",
                    "$t1$ = time the message was sent.",
                    "$t2$ = the time the message was received."
                ],
                reference: "Coulouris et al., (2013) e Zhang et al., (2018)"
            },
            {
                selected: false,
                type: "metrics",
                characteristics: "performance-time_behavior",
                id: "M04",
                title: "Minimum Waiting Time",
                characteristics: "time_behavior",
                purpose: "Evaluate the minimum wait time until a message reaches the recipient.",
                method: "Perform N experiments and compare the transmission time of the message in each of them.",
                measure: [
                    "$X = min(E)$",
                    "$X$ = minimum waiting time",
                    "$E$ = $\\{experiment_1, experiment_2, ... experiment_n\\}$"
                ],
                reference: "K. Govidan, D. Chander e B. Jagyasi (2010)"
            }
        ]
    },
    {
        id: "resource_utilization",
        name: "Performance - Resource Utilization",
        properties: [
            {
                selected: false,
                type: "properties",
                id: "PT03",
                title: "Property 3",
                characteristics: "resource_utilization",
                description: "Description of property 03"
            },
            {
                selected: false,
                type: "properties",
                id: "PT04",
                title: "Property 4",
                characteristics: "resource_utilization",
                description: "Description of property 04"
            }
        ],
        testCases: [
            {
                selected: false,
                type: "testCases",
                id: "TC12",
                idLong: "Test Case 12",
                title: "Check how much the IoT system consumes energy when acting in the environment",
                characteristics: "resource_utilization",
                testEnvironment: "1 energy meter, 1 actuator connected to power consumption meter and N applications",
                preConditions: "The actuator must be in perfect working order and connected to the power consumption meter",
                steps: [
                    "Make a standard number of requests to the actuator",
                    "Check the power consumption on the meter",
                    "Make a number of requests to the actuator at peak time in the system",
                    "Check the power consumption on the meter again"
                ],
                postConditions: "The second reading of the meter was greater than the first"
            },
            {
                selected: false,
                type: "testCases",
                id: "TC13",
                idLong: "Test Case 13",
                title: "Check how much the IoT system consumes memory when acting in the environment",
                characteristics: "resource_utilization",
                testEnvironment: "1 actuator and N applications",
                preConditions: "The actuator must be in perfect working order",
                steps: [
                    "Perform a standard number of requests to the actuator",
                    "Check the application's memory consumption",
                    "Perform a number of requests from a peak moment in the system to the actuator",
                    "Recheck application memory consumption"
                ],
                postConditions: "The second reading was higher than the first"
            },
            {
                selected: false,
                type: "testCases",
                id: "TC14",
                idLong: "Test Case 14",
                title: "Check how much the IoT system consumes CPU when acting in the environment",
                characteristics: "resource_utilization",
                testEnvironment: "1 actuator and N applications",
                preConditions: "The actuator must be in perfect working order",
                steps: [
                    "Perform a standard number of requests to the actuator",
                    "Check the CPU consumption of the application",
                    "Perform a number of requests from a peak moment in the system to the actuator",
                    "Recheck application CPU consumption"
                ],
                postConditions: "The second reading was higher than the first"
            },
            {
                selected: false,
                type: "testCases",
                id: "TC15",
                idLong: "Test Case 15",
                title: "Check how much the IoT system consumes energy when sensing the environment",
                characteristics: "resource_utilization",
                testEnvironment: "1 power consumption meter, 1 sensor connected to power consumption meter and N applications",
                preConditions: "The sensor must be in perfect working order and connected to the power consumption meter",
                steps: [
                    "Perform a standard number of requests to the sensor",
                    "Check the power consumption on the meter",
                    "Perform a number of requests from a peak moment in the system to the sensor",
                    "Check the power consumption on the meter again"
                ],
                postConditions: "The second reading of the meter was greater than the first"
            },
            {
                selected: false,
                type: "testCases",
                id: "TC16",
                idLong: "Test Case 16",
                title: "Check how much the IoT system consumes memory when sensing the environment",
                characteristics: "resource_utilization",
                testEnvironment: "1 sensor and N applications",
                preConditions: "The sensor must be in perfect working order",
                steps: [
                    "Perform a standard number of requests to the sensor",
                    "Check the application's memory consumption",
                    "Perform a number of requests from a peak moment in the system to the sensor",
                    "Recheck application memory consumption"
                ],
                postConditions: "The second reading was higher than the first"
            },
            {
                selected: false,
                type: "testCases",
                id: "TC17",
                idLong: "Test Case 17",
                title: "Check how much the IoT system consumes CPU when sensing the environment",
                characteristics: "resource_utilization",
                testEnvironment: "1 sensor and N applications",
                preConditions: "The sensor must be in perfect working order",
                steps: [
                    "Perform a standard number of requests to the sensor",
                    "Check the CPU consumption of the application",
                    "Perform a number of requests from a peak moment in the system to the sensor",
                    "Recheck application CPU consumption"
                ],
                postConditions: "The second reading was higher than the first"
            }
        ],
        metrics: [
            {
                selected: false,
                type: "metrics",
                id: "M05",
                title: "CPU consumption in Stand by",
                purpose: "Assess how much the application consumes from the CPU when on standby",
                characteristics: "resource_utilization",
                method: "Count how much the application consumes from the CPU just by being on, without performing any action",
                measure: [
                    "$X = (\\sum\\limits_{i=1}^{n}{C_{n}}) / n$",
                    "$X$ = consumption in stand by",
                    "$n$ = amount of consumption readings in the standard usage period",
                    "$C_n$ = nth consumption value during standard usage period"
                ],
                reference: "Thimmannagari (2004) and L. Bonfim (2015)"
            },
            {
                selected: false,
                type: "metrics",
                id: "M06",
                title: "CPU consumption on Peak",
                purpose: "Assess how much the application consumes from the CPU when on standby",
                characteristics: "resource_utilization",
                method: "Count how much the application consumes from the CPU during a peak period",
                measure: [
                    "$X = (\\sum\\limits_{i=1}^{n}{C_{n}}) / n$",
                    "$X$ = peak consumption",
                    "$n$ = number of consumption readings in the standard usage period",
                    "$C_n$ = nth consumption value during standard usage period"
                ],
                reference: "B. Maytal (2002)"
            },
            {
                selected: false,
                type: "metrics",
                id: "M07",
                title: "Assess average CPU consumption",
                purpose: "Count how much the application consumes from the CPU during a standard usage period, including peak and non-peak moments, sum all and values and calculate the average.",
                characteristics: "resource_utilization",
                method: "Count how much the application consumes from the CPU during a peak period",
                measure: [
                    "$X = (\\sum\\limits_{i=1}^{n}{C_{n}}) / n$",
                    "$X$ = average consumption",
                    "$n$ = number of consumption readings",
                    "$C_n$ = nth consumption value"
                ],
                reference: "L. Bonfim (2015)"
            }
        ]
    }  
];

const tools = [
    {
        id: "ifogsim",
        title: "iFogSim",
        type: "tools",
        description: "Simulator for Cloud Computing. Simulates devices and performs measurements, for example latency and network congestion.",
        license: "Open-Source",
        link: "https://github.com/Cloudslab/iFogSim"
    },
    {
        id: "neotys",
        title: "Neotys",
        type: "tools",
        description: "Test platform for cloud computing. Performs performance analysis, running load tests. Allows you to evaluate the response time, providing application performance data.",
        license: "Closed",
        link: "https://www.neotys.com/"
    },
    {
        id: "wireshark",
        title: "Wireshark",
        type: "tools",
        description: "A system that analyzes traffic on the network, being able to monitor the entry and exit of data in different protocols.",
        license: "Open-Source",
        link: "https://www.wireshark.org/"
    }
];
export { guideContent, tools };