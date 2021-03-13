const guideContent = [
    {
        name: "Performance - Time Behavior",
        testCases: [
            {
                type: "testCase",
                id: "TC01",
                idLong: "Test Case 01",
                title: "Send command to actuator",
                testEnvironment: "N actuators and 1 application with access to the actuators",
                preConditions: "The actuators must be able to receive the command",
                steps: [
                    "In the application, send the desired command",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators executed the command sent"
            },
            {
                type: "testCase",
                id: "TC02",
                idLong: "Test Case 02",
                title: "Send command to actuator via external network",
                testEnvironment: "N actuators and 1 application with access to the actuators",
                preConditions: "The actuator must be able to receive the command, the application must be on a network, outside the local network",
                steps: [
                    "In the application, send the desired command",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators executed the command sent"
            },
            {
                type: "testCase",
                id: "TC03",
                idLong: "Test Case 03",
                title: "Send commands simultaneously",
                testEnvironment: "N actuators and 2 applications with access to actuators",
                preConditions: "The actuators must be able to receive the command",
                steps: [
                    "Send a command simultaneously from devices 1 and 2",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators executed the sent commands"
            },
            {
                type: "testCase",
                id: "TC04",
                idLong: "Test Case 04",
                title: "Send multiple requests",
                testEnvironment: "N actuators and N devices with access to actuators",
                preConditions: "The actuators must be able to receive the command",
                steps: [
                    "Send a command simultaneously from each device",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators must have received all commands, responded to each of them and for each command, if in a fit state, execute it"
            },
            {
                type: "testCase",
                id: "TC05",
                idLong: "Test Case 05",
                title: "Send command to the actuator at peak time",
                testEnvironment: "N actuators and 1 device with access to actuators",
                preConditions: "The actuators must be able to receive the command, the application must be at its peak time, knowing that peak is the time when there are the highest number of accesses to the application [Kumar 2000]",
                steps: [
                    "In the application, send the desired command",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators executed the command sent"
            },
            {
                type: "testCase",
                id: "TC06",
                idLong: "Test Case 06",
                title: "Receive sensor reading",
                testEnvironment: "N sensors and N applications with sensor access",
                preConditions: "The sensors must be in perfect working order",
                steps: [
                    "The sensors monitor the environment",
                    "The application reads sensor data"
                ],
                postConditions: "The application updated in relation to the state of the environment"
            },
            {
                type: "testCase",
                id: "TC07",
                idLong: "Test Case 07",
                title: "Receive sensor reading from an external network",
                testEnvironment: "N sensors and 1 application with sensor access",
                preConditions: "The sensors must be in perfect operation, the application must be in a network, outside the local network",
                steps: [
                    "The sensors monitor the environment",
                    "The application reads sensor data"
                ],
                postConditions: "The application updated in relation to the state of the environment"
            },
            {
                type: "testCase",
                id: "TC08",
                idLong: "Test Case 08",
                title: "Change environment configuration",
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
                type: "testCase",
                id: "TC09",
                idLong: "Test Case 09",
                title: "Status after reconnection",
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
                type: "testCase",
                id: "TC10",
                idLong: "Test Case 10",
                title: "Receive sensor reading at peak time",
                testEnvironment: "N sensors and N applications with sensor access",
                preConditions: "The sensors must be in perfect operation at peak time",
                steps: [
                    "Sensors monitor the environment",
                    "The application reads the sensor data"
                ],
                postConditions: "The application updated in relation to the new state of the environment"
            },
            {
                type: "testCase",
                id: "TC11",
                idLong: "Test Case 11",
                title: "Adapt to the new state of the environment",
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
                type: "metric",
                id: "M01",
                title: "Dispatch Time",
                purpose: "Evaluate the preparation time of the task until it is ready for submission.",
                method: "Account for the start of task preparation and compare with the time it is ready for submission",
                measure: [
                    "X = t2- t1",
                    "X = dispatch time",
                    "t1 = task preparation start time",
                    "t2 = the time the task is ready to send",
                ],
                reference: "Sellers (2018) e Nair (2015)"
            },
            {
                type: "metric",
                id: "M02",
                title: "Execution Time",
                purpose: "Evaluate the execution time of a task.",
                method: "Account for the start of the task execution and compare it to the time it was finished.",
                measure: [
                    "X = t2- t1",
                    "X = execution time",
                    "t1 = execution start time",
                    "t2 = the time the task was completed"
                ],
                reference: "Nair (2015)"
            },
            {
                type: "metric",
                id: "M03",
                title: "Message Transmission Time",
                purpose: "Evaluate the transfer time of a message.",
                method: "Count the time the message was sent and compare it to the time the message was received.",
                measure: [
                    "X = t2- t1",
                    "X = message transmission time",
                    "t1 = time the message was sent.",
                    "t2 = the time the message was received."
                ],
                reference: "Coulouris et al., (2013) e Zhang et al., (2018)"
            },
            {
                type: "metric",
                id: "M04",
                title: "Minimum Waiting Time",
                purpose: "Evaluate the minimum wait time until a message reaches the recipient.",
                method: "Perform N experiments and compare the transmission time of the message in each of them.",
                measure: [
                    "X = min(E)",
                    "X = minimum waiting time",
                    "E = {experiment1, experiment2, ... experimentn}"
                ],
                reference: "K. Govidan, D. Chander e B. Jagyasi (2010)"
            }
        ]
    },
    {
        name: "Performance - Capacity",
        testCases: [
            {
                type: "testCase",
                id: "TC01",
                idLong: "Test Case 01",
                title: "Send command to actuator",
                testEnvironment: "N actuators and 1 application with access to the actuators",
                preConditions: "The actuators must be able to receive the command",
                steps: [
                    "In the application, send the desired command",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators executed the command sent"
            },
            {
                type: "testCase",
                id: "TC02",
                idLong: "Test Case 02",
                title: "Send command to actuator via external network",
                testEnvironment: "N actuators and 1 application with access to the actuators",
                preConditions: "The actuator must be able to receive the command, the application must be on a network, outside the local network",
                steps: [
                    "In the application, send the desired command",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators executed the command sent"
            },
            {
                type: "testCase",
                id: "TC03",
                idLong: "Test Case 03",
                title: "Send commands simultaneously",
                testEnvironment: "N actuators and 2 applications with access to actuators",
                preConditions: "The actuators must be able to receive the command",
                steps: [
                    "Send a command simultaneously from devices 1 and 2",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators executed the sent commands"
            },
            {
                type: "testCase",
                id: "TC04",
                idLong: "Test Case 04",
                title: "Send multiple requests",
                testEnvironment: "N actuators and N devices with access to actuators",
                preConditions: "The actuators must be able to receive the command",
                steps: [
                    "Send a command simultaneously from each device",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators must have received all commands, responded to each of them and for each command, if in a fit state, execute it"
            },
            {
                type: "testCase",
                id: "TC05",
                idLong: "Test Case 05",
                title: "Send command to the actuator at peak time",
                testEnvironment: "N actuators and 1 device with access to actuators",
                preConditions: "The actuators must be able to receive the command, the application must be at its peak time, knowing that peak is the time when there are the highest number of accesses to the application [Kumar 2000]",
                steps: [
                    "In the application, send the desired command",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators executed the command sent"
            },
            {
                type: "testCase",
                id: "TC06",
                idLong: "Test Case 06",
                title: "Receive sensor reading",
                testEnvironment: "N sensors and N applications with sensor access",
                preConditions: "The sensors must be in perfect working order",
                steps: [
                    "The sensors monitor the environment",
                    "The application reads sensor data"
                ],
                postConditions: "The application updated in relation to the state of the environment"
            },
            {
                type: "testCase",
                id: "TC07",
                idLong: "Test Case 07",
                title: "Receive sensor reading from an external network",
                testEnvironment: "N sensors and 1 application with sensor access",
                preConditions: "The sensors must be in perfect operation, the application must be in a network, outside the local network",
                steps: [
                    "The sensors monitor the environment",
                    "The application reads sensor data"
                ],
                postConditions: "The application updated in relation to the state of the environment"
            },
            {
                type: "testCase",
                id: "TC08",
                idLong: "Test Case 08",
                title: "Change environment configuration",
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
                type: "testCase",
                id: "TC09",
                idLong: "Test Case 09",
                title: "Status after reconnection",
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
                type: "testCase",
                id: "TC10",
                idLong: "Test Case 10",
                title: "Receive sensor reading at peak time",
                testEnvironment: "N sensors and N applications with sensor access",
                preConditions: "The sensors must be in perfect operation at peak time",
                steps: [
                    "Sensors monitor the environment",
                    "The application reads the sensor data"
                ],
                postConditions: "The application updated in relation to the new state of the environment"
            },
            {
                type: "testCase",
                id: "TC11",
                idLong: "Test Case 11",
                title: "Adapt to the new state of the environment",
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
                type: "metric",
                id: "M01",
                title: "Dispatch Time",
                purpose: "Evaluate the preparation time of the task until it is ready for submission.",
                method: "Account for the start of task preparation and compare with the time it is ready for submission",
                measure: [
                    "X = t2- t1",
                    "X = dispatch time",
                    "t1 = task preparation start time",
                    "t2 = the time the task is ready to send",
                ],
                reference: "Sellers (2018) e Nair (2015)"
            },
            {
                type: "metric",
                id: "M02",
                title: "Execution Time",
                purpose: "Evaluate the execution time of a task.",
                method: "Account for the start of the task execution and compare it to the time it was finished.",
                measure: [
                    "X = t2- t1",
                    "X = execution time",
                    "t1 = execution start time",
                    "t2 = the time the task was completed"
                ],
                reference: "Nair (2015)"
            },
            {
                type: "metric",
                id: "M03",
                title: "Message Transmission Time",
                purpose: "Evaluate the transfer time of a message.",
                method: "Count the time the message was sent and compare it to the time the message was received.",
                measure: [
                    "X = t2- t1",
                    "X = message transmission time",
                    "t1 = time the message was sent.",
                    "t2 = the time the message was received."
                ],
                reference: "Coulouris et al., (2013) e Zhang et al., (2018)"
            },
            {
                type: "metric",
                id: "M04",
                title: "Minimum Waiting Time",
                purpose: "Evaluate the minimum wait time until a message reaches the recipient.",
                method: "Perform N experiments and compare the transmission time of the message in each of them.",
                measure: [
                    "X = min(E)",
                    "X = minimum waiting time",
                    "E = {experiment1, experiment2, ... experimentn}"
                ],
                reference: "K. Govidan, D. Chander e B. Jagyasi (2010)"
            }
        ]
    }  
];

const tools = [
    {
        title: "iFogSim",
        description: "Simulator for Cloud Computing. Simulates devices and performs measurements, for example latency and network congestion.",
        license: "Open-Source",
        link: "https://github.com/Cloudslab/iFogSim"
    },
    {
        title: "Neotys",
        description: "Test platform for cloud computing. Performs performance analysis, running load tests. Allows you to evaluate the response time, providing application performance data.",
        license: "Closed",
        link: "https://www.neotys.com/"
    },
    {
        title: "Wireshark",
        description: "A system that analyzes traffic on the network, being able to monitor the entry and exit of data in different protocols.",
        license: "Open-Source",
        link: "https://www.wireshark.org/"
    }
];
export { guideContent, tools };