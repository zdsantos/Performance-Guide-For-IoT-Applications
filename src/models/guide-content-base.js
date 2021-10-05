const guideContent = [
    {
        id: "time_behavior",
        name: "Time Behavior",
        description: "According to ISO 25010, temporal behavior is the level at which the response and processing time and throughput rates of a product or system, in performing its functions, meet requirements.",
        type: "subcharacteristics",
        selected: false,
        impacted: false,
        properties: [
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P1",
                title: "Dispatch Time",
                characteristics: "time_behavior",
                description: "Time until the task is ready for execution.",
                dependents: ['M01'],
                impacts: ['P9','P10','P13']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P2",
                title: "Execution Time",
                characteristics: "time_behavior",
                description: "The time required until a task is completed.",
                dependents: ['M02'],
                impacts: ['P1','P3','P9','P10','P13','P17','P18','P20']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P3",
                title: "Message Transmission Time",
                characteristics: "time_behavior",
                description: "The time from sending a message until it is received.",
                dependents: ['M03'],
                impacts: ['P17','P18','P20']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P4",
                title: "Minimum Waiting Time",
                characteristics: "time_behavior",
                description: "The shortest time until a message is received.",
                dependents: ['M04'],
                impacts: ['P3','P18','P20']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P5",
                title: "Reconnection Time",
                characteristics: "time_behavior",
                description: "The time in which the network establishes a new connection.",
                dependents: ['M05'],
                impacts: ['P3','P18','P20']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P6",
                title: "Response Time",
                characteristics: "time_behavior",
                description: "The time when the request is sent and the response is received, and may vary when the application reaches its peak.",
                dependents: ['M06'],
                impacts: ['P1','P2','P3','P9','P10','P13','P17','P18','P20']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P7",
                title: "Loading Time",
                characteristics: "time_behavior",
                description: "The time it takes for the application to load the information it needs for its operation from the environment.",
                dependents: ['M07'],
                impacts: ['P2','P9','P10','P13','P17','P18','P20']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P8",
                title: "Adaptation Time",
                characteristics: "time_behavior",
                description: "The time in which the application adapts to the changing state of the environment.",
                dependents: ['M08'],
                impacts: ['P1','P2','P3','P6','P7','P9','P10','P13','P17','P18','P20']
            }
        ],
        testCases: [
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC01",
                idLong: "Test Case 01",
                title: "Send command to actuator",
                characteristics: "time_behavior",
                testEnvironment: "N actuators and 1 application",
                preConditions: "The actuators must be able to receive the command",
                steps: [
                    "In the application, send the desired command",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators executed the command sent"
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC02",
                idLong: "Test Case 02",
                title: "Send command to actuator via external network",
                characteristics: "time_behavior",
                testEnvironment: "N actuators and 1 application",
                preConditions: "The actuator must be able to receive the command, the application must be on a network, outside the local network",
                steps: [
                    "In the application, send the desired command",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators executed the command sent"
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 3.0,
                id: "TC03",
                idLong: "Test Case 03",
                title: "Send commands simultaneously",
                characteristics: "time_behavior",
                testEnvironment: "N actuators and 2 applications",
                preConditions: "The actuators must be able to receive the command",
                steps: [
                    "Send a command simultaneously from devices 1 and 2",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators executed the sent commands"
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 3.0,
                id: "TC04",
                idLong: "Test Case 04",
                title: "Send several of the same commands",
                characteristics: "time_behavior",
                testEnvironment: "1 actuator and N applications",
                preConditions: "The actuators must be able to receive the command",
                steps: [
                    "Send a command simultaneously from each application",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators must have received all commands, responded to each of them and for each command, if in a fit state, execute it"
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC05",
                idLong: "Test Case 05",
                title: "Send command to the actuator at peak time",
                characteristics: "time_behavior",
                testEnvironment: "N actuators and 1 application",
                preConditions: "The actuators must be able to receive the command, the application must be at its peak time, knowing that peak is the time when there are the highest number of accesses to the application",
                steps: [
                    "In the application, send the desired command",
                    "Check actuator behavior"
                ],
                postConditions: "The actuators executed the command sent"
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 1.0,
                id: "TC06",
                idLong: "Test Case 06",
                title: "Receive sensor reading",
                characteristics: "time_behavior",
                testEnvironment: "N sensors and N applications",
                preConditions: "The sensors must be in perfect working order",
                steps: [
                    "The sensors monitor the environment",
                    "The application reads sensor data"
                ],
                postConditions: "The application updated in relation to the state of the environment"
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 1.0,
                id: "TC07",
                idLong: "Test Case 07",
                title: "Receive sensor reading from an external network",
                characteristics: "time_behavior",
                testEnvironment: "N sensors and 1 application",
                preConditions: "The sensors must be in perfect operation, the application must be in a network, outside the local network",
                steps: [
                    "The sensors monitor the environment",
                    "The application reads sensor data"
                ],
                postConditions: "The application updated in relation to the state of the environment"
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC08",
                idLong: "Test Case 08",
                title: "Change environment configuration",
                characteristics: "time_behavior",
                testEnvironment: "N sensors and 1 application ",
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
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC09",
                idLong: "Test Case 09",
                title: "Status after reconnection",
                characteristics: "time_behavior",
                testEnvironment: "N sensors and 1 application",
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
                impacted: false,
                type: "testCases",
                timeSpentDefault: 1.0,
                id: "TC10",
                idLong: "Test Case 10",
                title: "Receive sensor reading at peak time",
                characteristics: "time_behavior",
                testEnvironment: "N sensors and N applications",
                preConditions: "The sensors must be in perfect operation",
                steps: [
                    "Sensors monitor the environment",
                    "The application reads the sensor data"
                ],
                postConditions: "The application updated in relation to the new state of the environment"
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC11",
                idLong: "Test Case 11",
                title: "Adapt to the new state of the environment",
                characteristics: "time_behavior",
                testEnvironment: "N sensors and 1 application",
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
                impacted: false,
                type: "metrics",
                timeSpentDefault: 3.0,
                id: "M01",
                title: "Dispatch Time",
                characteristics: "time_behavior",
                purpose: "Evaluate the preparation time of the task until it is ready for submission",
                method: "Consider the start of the task preparation and compare it to the time when it is ready for submission",
                measure: [
                    "$X = t2- t1$",
                    "$X$ = dispatch time",
                    "$t1$ = task preparation start time",
                    "$t2$ = the time the task is ready to send"
                ],
                dependents: ['TC01', 'TC02', 'TC03', 'TC04', 'TC05', 'TC06', 'TC07', 'TC08', 'TC09', 'TC10', 'TC11', 'wireshark', 'tcpdump']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 5.0,
                id: "M02",
                title: "Execution Time",
                characteristics: "time_behavior",
                purpose: "Evaluate the execution time of a task",
                method: "Consider the start of the task execution and compare it to the time it was completed",
                measure: [
                    "$X = t2- t1$",
                    "$X$ = execution time",
                    "$t1$ = execution start time",
                    "$t2$ = the time the task was completed"
                ],
                dependents: ['TC01', 'TC02', 'TC03', 'TC04', 'TC05', 'TC06', 'TC07', 'TC08', 'TC09', 'TC10', 'TC11', 'wireshark', 'tcpdump']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 2.0,
                id: "M03",
                title: "Message Transmission Time",
                characteristics: "time_behavior",
                purpose: "Evaluate the transfer time of a message",
                method: "Consider the time when the message was sent and compare it to the time when the message was received",
                measure: [
                    "$X = t2- t1$",
                    "$X$ = message transmission time",
                    "$t1$ = time the message was sent",
                    "$t2$ = the time the message was received"
                ],
                dependents: ['TC01', 'TC02', 'TC03', 'TC04', 'TC05', 'TC06', 'TC07', 'TC08', 'TC09', 'TC10', 'TC11', 'wireshark', 'tcpdump', 'neotys', 'iotify']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 3.0,
                id: "M04",
                title: "Minimum Waiting Time",
                characteristics: "time_behavior",
                purpose: "Evaluate the minimum wait time until a message reaches the recipient",
                method: "Conduct n experiments and compare the transmission time of the message in each one",
                measure: [
                    "$X = min(E)$",
                    "$X$ = minimum waiting time",
                    "$E$ = $\\{experiment_1, experiment_2, ... experiment_n\\}$"
                ],
                dependents: ['TC01', 'TC02', 'TC03', 'TC04', 'TC05', 'TC06', 'TC07', 'TC08', 'TC09', 'TC10', 'TC11', 'wireshark', 'tcpdump', 'iotify']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 3.0,
                id: "M05",
                title: "Reconnection Time",
                characteristics: "time_behavior",
                purpose: "Evaluate how long the application can re-establish a new connection, when available",
                method: "Consider the time the network was available and compare it to when a new connection is re-established in the application",
                measure: [
                    "$X = t2- t1$",
                    "$X$ = reconnection time",
                    "$t1$ = time that a network was available",
                    "$t2$ = time in which a new connection is re-established in the application"
                ],
                dependents: ['TC09']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 2.0,
                id: "M06",
                title: "Response Time",
                characteristics: "time_behavior",
                purpose: "Evaluate the time it takes for the application to send the message and receive the response",
                method: "Count the time when the message is sent to the destination and compare it to the time when the response originates. Perform the measurement up to peak and non-peak, knowing that peak is the time when there is the most access to the application",
                measure: [
                    "$X = t2- t1$",
                    "$X$ = response time",
                    "$t1$ = time the message was sent to the destination",
                    "$t2$ = time the response arrived at the origin"
                ],
                dependents: ['TC01', 'TC02', 'TC03', 'TC04', 'TC05', 'TC06', 'TC07', 'TC08', 'TC09', 'TC10', 'TC11', 'neotys', 'wireshark', 'loadUI', 'tcpdump', 'iotify']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 3.0,
                id: "M07",
                title: "Loading Time",
                characteristics: "time_behavior",
                purpose: "Evaluate the time it takes for the application to load the state of the environment",
                method: "Consider the time just after the connection is resumed and compares it to the time after the state of the environment is loaded into the application",
                measure: [
                    "$X = t2- t1$",
                    "$X$ = loading time",
                    "$t1$ = time just after connection is resumed",
                    "$t2$ = time after loading the state of the environment into the application"
                ],
                dependents: ['TC01', 'TC02', 'TC03', 'TC04', 'TC05', 'TC06', 'TC07', 'TC08', 'TC09', 'TC10', 'TC11']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 3.0,
                id: "M08",
                title: "Adaptation Time",
                characteristics: "time_behavior",
                purpose: "Evaluate the time in which the application adapts to a new state of the environment",
                method: "Consider the time when there was a change in the state of the environment and compares it to the time after the application was adapted",
                measure: [
                    "$X = t2- t1$",
                    "$X$ = adaptation time",
                    "$t1$ = time of the change in the state of the environment",
                    "$t2$ = time after application adaptation"
                ],
                dependents: ['TC01', 'TC02', 'TC03', 'TC04', 'TC05', 'TC06', 'TC07', 'TC08', 'TC09', 'TC10', 'TC11']
            }
        ]
    },
    {
        id: "resource_utilization",
        name: "Resource Utilization",
        description: "According to ISO 25010, it is the degree to which the quantities and types of resources used by a product or system, when performing its functions, meet requirements.",
        type: "subcharacteristics",
        selected: false,
        impacted: false,
        properties: [
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P9",
                title: "CPU Availability",
                characteristics: "resource_utilization",
                description: "Percentage of time the CPU is available for use",
                dependents: ['M09', 'M10', 'M11'],
                impacts: ['P10','P15', 'P16']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P10",
                title: "CPU Consumption",
                characteristics: "resource_utilization",
                description: "Average amount of CPU resource usage in the application",
                dependents: ['M09', 'M10', 'M11'],
                impacts: ['P9','P15', 'P16']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P11",
                title: "Energy Consumption",
                characteristics: "resource_utilization",
                description: "Average amount of energy used to run an application",
                dependents: ['M15', 'M16', 'M17'],
                impacts: ['P1','P2','P3','P4','P8','P10','P13','P15','P16','P20']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P12",
                title: "Energy Efficiency",
                characteristics: "resource_utilization",
                description: "The amount of energy consumed by an application compared to the amount of energy actually used to perform the proposed function",
                dependents: ['M15', 'M17'],
                impacts: ['P1','P2','P3','P4','P8','P10','P11','P13','P15']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P13",
                title: "Memory Consumption",
                characteristics: "resource_utilization",
                description: "Average amount of memory used to run an application",
                dependents: ['M12', 'M13', 'M14'],
                impacts: ['P15','P16']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P14",
                title: "Energy Saving",
                characteristics: "resource_utilization",
                description: "A lower power consumption of the application when compared to the expected value",
                dependents: ['M15', 'M17'],
                impacts: ['P11','P15']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P15",
                title: "Time of use",
                characteristics: "resource_utilization",
                description: "The amount of time the application remained executing instructions",
                dependents: ['M09', 'M10', 'M11'],
                impacts: ['P1','P2','P3','P4','P5','P6','P7','P8','P17','P18']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P16",
                title: "Data consumption",
                characteristics: "resource_utilization",
                description: "Average amount of data used to run the application",
                dependents: ['M18', 'M19', 'M20'],
                impacts: ['P15','P18']
            }
        ],
        testCases: [
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 4.0,
                id: "TC12",
                idLong: "Test Case 12",
                title: "Check how much the IoT system consumes energy when acting in the environment",
                characteristics: "resource_utilization",
                testEnvironment: "1 energy meter, 1 actuator connected to the energy consumption meter",
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
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC13",
                idLong: "Test Case 13",
                title: "Check how much the IoT system consumes memory when acting in the environment",
                characteristics: "resource_utilization",
                testEnvironment: "1 actuator",
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
                impacted: false,
                type: "testCases",
                timeSpentDefault: 3.0,
                id: "TC14",
                idLong: "Test Case 14",
                title: "Check how much the IoT system consumes CPU when acting in the environment",
                characteristics: "resource_utilization",
                testEnvironment: "1 actuator",
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
                impacted: false,
                type: "testCases",
                timeSpentDefault: 3.0,
                id: "TC15",
                idLong: "Test Case 15",
                title: "Check how much data the system consumes when operating in the environment",
                characteristics: "resource_utilization",
                testEnvironment: "1 actuator",
                preConditions: "The actuator must be in perfect working order",
                steps: [
                    "Execute a standard number of requests to the actuator",
                    "Check the volume of data exchanged over the network",
                    "Run a series of requests from a peak moment in the system to the actuator",
                    "Check the volume of data exchanged over the network"
                ],
                postConditions: "The second reading was superior to the first"
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 4.0,
                id: "TC16",
                idLong: "Test Case 16",
                title: "Check how much the IoT system consumes energy when sensing the environment",
                characteristics: "resource_utilization",
                testEnvironment: "1 power consumption meter, 1 sensor connected to power consumption meter",
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
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC17",
                idLong: "Test Case 17",
                title: "Check how much the IoT system consumes memory when sensing the environment",
                characteristics: "resource_utilization",
                testEnvironment: "1 sensor",
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
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC18",
                idLong: "Test Case 18",
                title: "Check how much the IoT system consumes CPU when sensing the environment",
                characteristics: "resource_utilization",
                testEnvironment: "1 sensor",
                preConditions: "The sensor must be in perfect working order",
                steps: [
                    "Perform a standard number of requests to the sensor",
                    "Check the CPU consumption of the application",
                    "Perform a number of requests from a peak moment in the system to the sensor",
                    "Recheck application CPU consumption"
                ],
                postConditions: "The second reading was higher than the first"
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 3.0,
                id: "TC19",
                idLong: "Test Case 19",
                title: "Check how much data the system consumes when sensoring in the environment",
                characteristics: "resource_utilization",
                testEnvironment: "1 sensor",
                preConditions: "The sensor must be in perfect working order",
                steps: [
                    "Execute a standard number of requests to the sensor",
                    "Check the volume of data exchanged over the network",
                    "Run a series of requests from a peak moment in the system to the sensor",
                    "Check the volume of data exchanged over the network "
                ],
                postConditions: "The second reading was superior to the first"
            }
        ],
        metrics: [
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 5.0,
                id: "M09",
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
                dependents: ['TC12', 'TC13', 'TC14', 'TC16', 'TC17']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 5.0,
                id: "M10",
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
                dependents: ['TC12', 'TC13', 'TC14', 'TC16', 'TC17', 'TC19' ]
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 6.0,
                id: "M11",
                title: "Average CPU consumption",
                purpose: "Count how much the application consumes from the CPU during a standard usage period, including peak and non-peak moments, sum all and values and calculate the average",
                characteristics: "resource_utilization",
                method: "Count how much the application consumes from the CPU during a peak period",
                measure: [
                    "$X = (\\sum\\limits_{i=1}^{n}{C_{n}}) / n$",
                    "$X$ = average consumption",
                    "$n$ = number of consumption readings",
                    "$C_n$ = nth consumption value"
                ],
                dependents: ['TC12', 'TC13', 'TC14', 'TC16', 'TC17', 'TC19']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 5.0,
                id: "M12",
                title: "Memory consumption in stand by",
                purpose: "Evaluate memory consumption in stand by",
                characteristics: "resource_utilization",
                method: "Count how much memory the system consumes just by being turned on, without performing any action",
                measure: [
                    "$X = (\\sum\\limits_{i=1}^{n}{C_{n}}) / n$",
                    "$X$ = standby consumption",
                    "$n$ = number of consumption readings in the stand-by period",
                    "$C_n$ = nth consumption value during the stand by period"
                ],
                dependents: ['TC12', 'TC13', 'TC14', 'TC16', 'TC17', 'TC19']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 5.0,
                id: "M13",
                title: "Peak memory consumption",
                purpose: "Evaluate how much memory the system consumes when it peaks",
                characteristics: "resource_utilization",
                method: "Count how much memory the application consumes during a peak period",
                measure: [
                    "$X = (\\sum\\limits_{i=1}^{n}{C_{n}}) / n$",
                    "$X$ = peak consumption",
                    "$n$ = number of consumption readings in the peak usage period",
                    "$C_n$ = nth consumption value during peak usage period"
                ],
                dependents: ['TC12', 'TC13', 'TC14', 'TC16', 'TC17', 'TC19']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 6.0,
                id: "M14",
                title: "Average Memory Consumption",
                purpose: "Evaluate average memory consumption per application",
                characteristics: "resource_utilization",
                method: "Count how much memory each application consumes during a standard usage period and a peak usage period, add up all the values and calculate the average",
                measure: [
                    "$X = (\\sum\\limits_{i=1}^{n}{C_{n}}) / n$",
                    "$X$ = average consumption",
                    "$M1$ = consumption values during the standard usage period",
                    "$M2$ = consumption values during peak usage period ",
                    "$n$ = number of consumption readings in the standard usage period",
                    "$m$ = number of consumption readings in the peak usage period"
                ],
                dependents: ['TC12', 'TC13', 'TC14', 'TC16', 'TC17', 'TC19']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 5.0,
                id: "M15",
                title: "Power consumption in stand by",
                purpose: "Evaluate how much energy the system consumes in stand-by",
                characteristics: "resource_utilization",
                method: "Count, by means of a meter, how much energy each component of the system (sensors, actuators, applications) consumes just by being turned on, without performing any action",
                measure: [
                    "$X = (\\sum\\limits_{i=1}^{n}(\\sum\\limits_{j=1}^{m}{E_{m}^{n}})) / (n * m)$",
                    "$X$ = energy consumption in stand by",
                    "$n$ = number of components",
                    "$m$ = number of consumption readings in the stand by period",
                    "$E_{m}^{n}$ = mth reading of the n-th component"
                ],
                dependents: ['TC12', 'TC16', 'TC17']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 5.0,
                id: "M16",
                title: "Peak Power Consumption",
                purpose: "Evaluate how much energy the system consumes in the peak period",
                characteristics: "resource_utilization",
                method: "Count, by means of a meter, how much each system component (sensors, actuators, applications) consumes energy during a peak period",
                measure: [
                    "$X = (\\sum\\limits_{i=1}^{n}(\\sum\\limits_{j=1}^{m}{E_{m}^{n}})) / (n * m)$",
                    "$X$ = peak consumption",
                    "$n$ = number of components",
                    "$m$ = number of consumption readings in the peak usage period",
                    "$E_{m}^{n}$ = mth reading of the n-th component"
                ],
                dependents: ['TC12', 'TC16', 'TC17']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 6.0,
                id: "M17",
                title: "Average Energy Consumption",
                purpose: "Evaluate the system's average energy consumption",
                characteristics: "resource_utilization",
                method: "Count, using a meter, how much energy each component of the system (sensors, actuators, applications) consumes during a standard usage period and a peak usage period, add up all the values, and calculate the average",
                measure: [
                    "$X = (\\sum\\limits_{i=1}^{n}(\\sum\\limits_{j=1}^{m}{E_{m}^{n}})) / (n * m)$",
                    "$X$ = average consumption",
                    "$n$ = number of components",
                    "$m$ = number of consumption readings in the standard usage period",
                    "$E_{m}^{n}$ = mth reading of the n-th component"
                ],
                dependents: ['TC12', 'TC16', 'TC17']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 5.0,
                id: "M18",
                title: "Data consumption in standby",
                purpose: "Evaluates the data consumption of the system in standby",
                characteristics: "resource_utilization",
                method: "Count the amount of data exchanged by the system just by being turned on, without performing any action",
                measure: [
                    "$X = (\\sum\\limits_{i=1}^{n}{C_{n}}) / n$",
                    "$X$ = data consumption in stand by",
                    "$n$ = number of consumption readings in the stand by period",
                    "$C_n$ = nth consumption value"
                ],
                dependents: ['TC15', 'TC18', 'wireshark', 'tcpdump']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 5.0,
                id: "M19",
                title: "Peak data consumption",
                purpose: "Evaluate peak system data consumption",
                characteristics: "resource_utilization",
                method: "Count the volume of data exchanged by the system during a peak usage period, add up all the values, and calculate the average",
                measure: [
                    "$X = (\\sum\\limits_{i=1}^{n}{C_{n}}) / n$",
                    "$X$ = peak data consumption",
                    "$n$ = number of consumption readings in the peak usage period",
                    "$C_n$ = nth value of consumption in the peak usage period"
                ],
                dependents: ['TC15', 'TC18', 'wireshark', 'tcpdump']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 6.0,
                id: "M20",
                title: "Average Data Consumption",
                purpose: "Evaluate the average data consumption of the system",
                characteristics: "resource_utilization",
                method: "Count the volume of data exchanged by the system during a standard usage period, including peak and off-peak times, add up all the values, and calculate the average",
                measure: [
                    "$X = (\\sum\\limits_{i=1}^{n}{C_{n}}) / n$",
                    "$X$ = average data consumption",
                    "$n$ = number of consumption readings in the standard usage period",
                    "$C_n$ = nth consumption value in the standard usage period"
                ],
                dependents: ['TC15', 'TC18', 'wireshark', 'tcpdump']
            }
        ]
    },
    {
        id: "capacity",
        name: "Capacity",
        description: "According to ISO 25010, it is the degree to which the maximum limits of a product or system parameter meet requirements.",
        type: "subcharacteristics",
        selected: false,
        impacted: false,
        properties: [
          {
              selected: false,
              impacted: false,
              type: "properties",
              id: "P17",
              title: "Download/Upload rate",
              characteristics: "capacity",
              description: "Speed of receiving data from a remote system/speed of sending data to a remote system",
              dependents: ['M21'],
              impacts: ['P18','P19','P20','P21']
          },
          {
              selected: false,
              impacted: false,
              type: "properties",
              id: "P18",
              title: "Throughput",
              characteristics: "capacity",
              description: "The number of bits forwarded per unit time",
              dependents: ['M21'],
              impacts: ['P19','P20','P21']
          },
          {
              selected: false,
              impacted: false,
              type: "properties",
              id: "P19",
              title: "Size of the Message",
              characteristics: "capacity",
              description: "The set of bytes present in each packet for the complete sending of the message",
              dependents: ['M21']
          },
          {
              selected: false,
              impacted: false,
              type: "properties",
              id: "P20",
              title: "Network Usage",
              characteristics: "capacity",
              description: "Percentage of the network that is manipulating data",
              dependents: ['M22'],
              impacts: ['P3','P15','P16','P17','P18']
          },
          {
              selected: false,
              impacted: false,
              type: "properties",
              id: "P21",
              title: "Bandwidth",
              characteristics: "capacity",
              description: "Transmission capacity of the network",
              dependents: ['M21']
          }
        ],
        testCases: [
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 3.0,
                id: "TC20",
                idLong: "Test Case 20",
                title: "Stressing an actuator",
                characteristics: "capacity",
                testEnvironment: "1 actuator and N applications",
                preConditions: "The actuator must be in perfect working order",
                steps: [
                    "A low number of applications make constant demands on the actuator over a continuous time interval",
                    "The number of applications is continuously increased until the actuator cannot respond"
                ],
                postConditions: "The actuator has reached its limit"
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 3.0,
                id: "TC21",
                idLong: "Test Case 21",
                title: "Stressing a sensor",
                characteristics: "capacity",
                testEnvironment: "1 sensor and N applications",
                preConditions: "The sensor must be in perfect working order",
                steps: [
                    "A low number of applications make constant demands on the sensor over a continuous time interval",
                    "The number of applications is continuously increased until the sensor cannot respond"
                ],
                postConditions: "The actuator has reached its limit"
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 3.0,
                id: "TC22",
                idLong: "Test Case 22",
                title: "Data Download",
                characteristics: "capacity",
                testEnvironment: "Data service on the network outside the system",
                preConditions: "The system requires a file on the external network to perform an action",
                steps: [
                    "The system requests a file from a service that is on the external network",
                    "A service provides the requested file",
                    "The system performs the action"
                ],
                postConditions: "The action was carried out"
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 3.0,
                id: "TC23",
                idLong: "Test Case 23",
                title: "Data Upload",
                characteristics: "capacity",
                testEnvironment: "Data service on the network outside the system",
                preConditions: "The system is capable of generating whatever information is required from you",
                steps: [
                    "A service that is in the external network requests information from the system",
                    "The system generates the necessary information",
                    "The system responds by sending you the requested data"
                ],
                postConditions: "The requested data has been sent"
            },
        ],
        metrics: [
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 3.0,
                id: "M21",
                title: "Throughput",
                purpose: "Evaluate how fast a packet travels over the network",
                characteristics: "capacity",
                method: "Count the size of the package and compare it to the time it takes to send the message",
                measure: [
                    "$X = s/t$",
                    "$X$ = throughput",
                    "$s$ = package size",
                    "$t$ = time to send the message"
                ],
                dependents: ['TC20', 'TC21', 'TC22', 'TC23', 'neotys', 'wireshark', 'tcpdump', 'iotify']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 3.0,
                id: "M22",
                title: "Maximum Number of Simultaneous users",
                characteristics: "capacity",
                purpose: "Evaluate the system's ability to respond to large numbers of simultaneous users.",
                method: "Make a low, constant number of requests to the system over a continuous time interval, and increase this number continuously until the system can no longer respond to the requests.",
                measure: [
                    "$X = max(U)$",
                    "$X$ = maximum number of simultaneous users",
                    "$U$ = quantities of simultaneous users$"
                ],
                dependents: ['TC20', 'neotys', 'wireshark', 'loadUI', 'tcpdump', 'iotify']
            }
        ]
    }
];

const characteristics = [
    {
        id: "performance",
        name: "Performance",
        type: "characteristics",
        definitions: [
            {
                id: "iso25010",
                name: "ISO 25010 (2011)",
                description: "Performance represents the amount of resources used under set conditions.",
                type: "definitions",
                selected: false,
                impacted: false,
            },
            {
                id: "rjain",
                name: "R. Jain (1991)",
                description: "Performance is the time taken to execute a service, the rate at which the service is executed, and the resources consumed during the execution of the service.",
                type: "definitions",
                selected: false,
                impacted: false,
            },
            {
                id: "bass",
                name: "Bass, Clements and Kazman (2003)",
                description: "Performance is concerned with how quickly the software \"responds when an event occurs\".",
                type: "definitions",
                selected: false,
                impacted: false,
            },
            {
                id: "chung",
                name: "Chung, de Prado Leite and JCS (2009)",
                description: "Performance involves time/space limits, such as workloads, response time, throughput, and available storage space. For example, \"the system must handle 100 transactions / second\".",
                type: "definitions",
                selected: false,
                impacted: false,
            },
            {
                id: "langsari",
                name: "Langsari, Rochimah, and Akbar (2018)",
                description: "Performance is concerned with the quality of the software's response when an event occurs. To evaluate whether a system performs well, the time between the event and the response can be measured first and then compared with a previously determined time constraint.",
                type: "definitions",
                selected: false,
                impacted: false,
            }
        ]
    }
]

const iotCharacteristics = [
    {
        selected: false,
        impacted: false,
        id: "understandability",
        name: "Understandability",
        type: "characteristics",
        definition: "The degree to which data has attributes that enable it to be read and interpreted by users, and is expressed in appropriate languages, symbols, and units in a specific context of use."
    },
    {
        selected: false,
        impacted: false,
        id: "recoverability",
        name: "Recoverability",
        type: "characteristics",
        definition: "The degree to which, in the event of interruption or failure, a product or system can recover the directly affected data and restore the desired state of the system."
    },
    {
        selected: false,
        impacted: false,
        id: "maintainability",
        name: "Maintainability",
        type: "characteristics",
        definition: "The degree of effectiveness and efficiency with which a product or system can be modified to improve it, correct it, or adapt it to changes in the environment and requirements."
    },
    {
        selected: false,
        impacted: false,
        id: "functionality",
        name: "Functionality",
        type: "characteristics",
        definition: "A set of functions that satisfies the explicit and implicit needs for the purpose for which the product is intended."
    },
    {
        selected: false,
        impacted: false,
        id: "dependability",
        name: "Dependability",
        type: "characteristics",
        definition: "Quality of service provided by a given system and the trust placed in the service provided."
    },
    {
        selected: false,
        impacted: false,
        id: "confidentiality",
        name: "Confidentiality",
        type: "characteristics",
        definition: "The degree to which data has attributes that ensure it is accessible and interpretable only by authorized users in a specific use context."
    },
    {
        selected: false,
        impacted: false,
        id: "accuracy",
        name: "Accuracy",
        type: "characteristics",
        definition: "The degree to which data has attributes that correctly represent the true value of the intended attribute of a concept or event in a specific usage context."
    },
    {
        selected: false,
        impacted: false,
        id: "usability",
        name: "Usability",
        type: "characteristics",
        definition: "The degree to which a product or system can be used by specific users to achieve specific goals effectively, efficiently, and to their satisfaction in a specified context of use."
    },
    {
        selected: false,
        impacted: false,
        id: "security",
        name: "Security",
        type: "characteristics",
        definition: "The degree to which a product or system protects information and data so that people or other products or systems have the degree of access to the data that is appropriate for their authorization types and levels."
    },
    {
        selected: false,
        impacted: false,
        id: "availability",
        name: "Availability",
        type: "characteristics",
        definition: "The degree to which data has attributes that allow it to be retrieved by authorized users and/or applications in a specific usage context."
    },
    {
        selected: false,
        impacted: false,
        id: "efficiency",
        name: "Efficiency",
        type: "characteristics",
        definition: "The degree to which data have attributes that can be processed and provide the expected levels of performance using the appropriate amounts and types of resources in a specific use context."
    },
    {
        selected: false,
        impacted: false,
        id: "interoperability",
        name: "Interoperability",
        type: "characteristics",
        definition: "The degree to which two or more systems, products, or components can exchange information and use the information that has been exchanged."
    },
    {
        selected: false,
        impacted: false,
        id: "portability",
        name: "Portability",
        type: "characteristics",
        definition: "The degree to which data has attributes that allow it to be installed, replaced, or moved from one system to another while preserving existing quality in a specific usage context."
    },
    {
        selected: false,
        impacted: false,
        id: "reliability",
        name: "Reliability",
        type: "characteristics",
        definition: "The degree to which a system, product, or component performs specified functions under specified conditions for a specified period of time."
    },
    {
        selected: false,
        impacted: false,
        id: "reusability",
        name: "Reusability",
        type: "characteristics",
        definition: "The degree to which a resource can be used in more than one system, or in building other resources."
    },
    {
        selected: false,
        impacted: false,
        id: "robustness",
        name: "Robustness",
        type: "characteristics",
        definition: "The ability of a system, product, or component to function even under abnormal conditions."
    },
    {
        selected: false,
        impacted: false,
        id: "scalability",
        name: "Scalability",
        type: "characteristics",
        definition: "The ease with which an application or component can be modified to expand its existing capabilities, including the ability to accommodate large volumes of data"
    },
]

const tools = [
    {
        selected: false,
        impacted: false,
        id: "neotys",
        title: "Neotys",
        type: "tools",
        description: "Test platform for cloud computing. Performs performance analysis, running load tests. Allows you to evaluate the response time, providing application performance data.",
        license: "Closed",
        link: "https://www.neotys.com/"
    },
    {
        selected: false,
        impacted: false,
        id: "wireshark",
        title: "Wireshark",
        type: "tools",
        description: "A system that analyzes traffic on the network, being able to monitor the entry and exit of data in different protocols.",
        license: "Open-Source",
        link: "https://www.wireshark.org/"
    },
    {
        selected: false,
        impacted: false,
        id: "loadUI",
        title: "LoadUI Pro",
        type: "tools",
        description: "Test platform for cloud computing. Performs load tests, functional tests, among others. It provides test scenarios that the user can use directly or adapt to their application or even create their own test cases. In addition, the tool performs network traffic monitoring.",
        license: "Closed",
        link: "https://www.soapui.org/professional/loadui-pro/"
    },
    {
        selected: false,
        impacted: false,
        id: "iotify",
        title: "IoTIFY",
        type: "tools",
        description: "It offers a virtual lab, with virtual devices for performance, security and other testing.",
        license: "Closed",
        link: "https://iotify.io/"
    },
    {
        selected: false,
        impacted: false,
        id: "tcpdump",
        title: "Tcpdump",
        type: "tools",
        description: "Similar to Wireshark, it monitors packet traffic on the network. You can identify traffic on specific ports, traffic from a specific sender, and recipients, and other functions.",
        license: "Open-Source",
        link: "http://www.tcpdump.org/"
    }
];

export { guideContent, tools, characteristics, iotCharacteristics };