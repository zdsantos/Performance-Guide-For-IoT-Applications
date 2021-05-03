const guideContent = [
    {
        id: "time_behavior",
        name: "Time Behavior",
        properties: [
            {
                selected: false,
                type: "properties",
                id: "P1",
                title: "Dispatch Time",
                characteristics: "time_behavior",
                description: "Time until the task is ready for execution."
            },
            {
                selected: false,
                type: "properties",
                id: "P2",
                title: "Execution Time",
                characteristics: "time_behavior",
                description: "The time required until a task is completed."
            },
            {
                selected: false,
                type: "properties",
                id: "P3",
                title: "Message Transmission Time",
                characteristics: "time_behavior",
                description: "The time from sending a message until it is received."
            },
            {
                selected: false,
                type: "properties",
                id: "P4",
                title: "Minimum Waiting Time",
                characteristics: "time_behavior",
                description: "The shortest time until a message is received."
            },
            {
                selected: false,
                type: "properties",
                id: "P5",
                title: "Reconnection Time",
                characteristics: "time_behavior",
                description: "The time in which the network establishes a new connection."
            },
            {
                selected: false,
                type: "properties",
                id: "P6",
                title: "Response Time",
                characteristics: "time_behavior",
                description: "The time when the request is sent and the response is received, and may vary when the application reaches its peak."
            },
            {
                selected: false,
                type: "properties",
                id: "P7",
                title: "Loading Time",
                characteristics: "time_behavior",
                description: "The time it takes for the application to load the information it needs for its operation from the environment."
            },
            {
                selected: false,
                type: "properties",
                id: "P8",
                title: "Adaptation Time",
                characteristics: "time_behavior",
                description: "The time in which the application adapts to the changing state of the environment."
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
                type: "testCases",
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
                type: "testCases",
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
                type: "testCases",
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
                type: "testCases",
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
                type: "testCases",
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
                type: "testCases",
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
                type: "testCases",
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
                type: "testCases",
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
                type: "testCases",
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
                type: "testCases",
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
                type: "metrics",
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
                ]
            },
            {
                selected: false,
                type: "metrics",
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
                ]
            },
            {
                selected: false,
                type: "metrics",
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
                ]
            },
            {
                selected: false,
                type: "metrics",
                characteristics: "performance-time_behavior",
                id: "M04",
                title: "Minimum Waiting Time",
                characteristics: "time_behavior",
                purpose: "Evaluate the minimum wait time until a message reaches the recipient",
                method: "Conduct n experiments and compare the transmission time of the message in each one",
                measure: [
                    "$X = min(E)$",
                    "$X$ = minimum waiting time",
                    "$E$ = $\\{experiment_1, experiment_2, ... experiment_n\\}$"
                ]
            },
            {
                selected: false,
                type: "metrics",
                characteristics: "performance-time_behavior",
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
                ]
            },
            {
                selected: false,
                type: "metrics",
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
                ]
            },
            {
                selected: false,
                type: "metrics",
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
                ]
            },
            {
                selected: false,
                type: "metrics",
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
                ]
            }
        ]
    },
    {
        id: "resource_utilization",
        name: "Resource Utilization",
        properties: [
            {
                selected: false,
                type: "properties",
                id: "P9",
                title: "CPU Availability",
                characteristics: "resource_utilization",
                description: "Percentage of time the CPU is available for use"
            },
            {
                selected: false,
                type: "properties",
                id: "P10",
                title: "CPU Consumption",
                characteristics: "resource_utilization",
                description: "Average amount of CPU resource usage in the application"
            },
            {
                selected: false,
                type: "properties",
                id: "P11",
                title: "Energy Consumption",
                characteristics: "resource_utilization",
                description: "Average amount of energy used to run an application"
            },
            {
                selected: false,
                type: "properties",
                id: "P12",
                title: "Energy Efficiency",
                characteristics: "resource_utilization",
                description: "The amount of energy consumed by an application compared to the amount of energy actually used to perform the proposed function"
            },
            {
                selected: false,
                type: "properties",
                id: "P13",
                title: "Memory Consumption",
                characteristics: "resource_utilization",
                description: "Average amount of memory used to run an application"
            },
            {
                selected: false,
                type: "properties",
                id: "P14",
                title: "Energy Saving",
                characteristics: "resource_utilization",
                description: "A lower power consumption of the application when compared to the expected value"
            },
            {
                selected: false,
                type: "properties",
                id: "P15",
                title: "Usage Time",
                characteristics: "resource_utilization",
                description: "The amount of time the application remained executing instructions"
            },
            {
                selected: false,
                type: "properties",
                id: "P16",
                title: "Data consumption",
                characteristics: "resource_utilization",
                description: "Average amount of data used to run the application"
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
                type: "testCases",
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
                type: "testCases",
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
                type: "testCases",
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
                type: "testCases",
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
                type: "testCases",
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
                type: "testCases",
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
                type: "testCases",
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
                type: "metrics",
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
                ]
            },
            {
                selected: false,
                type: "metrics",
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
                ]
            },
            {
                selected: false,
                type: "metrics",
                id: "M011",
                title: "Assess average CPU consumption",
                purpose: "Count how much the application consumes from the CPU during a standard usage period, including peak and non-peak moments, sum all and values and calculate the average",
                characteristics: "resource_utilization",
                method: "Count how much the application consumes from the CPU during a peak period",
                measure: [
                    "$X = (\\sum\\limits_{i=1}^{n}{C_{n}}) / n$",
                    "$X$ = average consumption",
                    "$n$ = number of consumption readings",
                    "$C_n$ = nth consumption value"
                ]
            },
            {
                selected: false,
                type: "metrics",
                id: "M012",
                title: "Memory consumption in stand by",
                purpose: "Evaluate memory consumption in stand by",
                characteristics: "resource_utilization",
                method: "Count how much memory the system consumes just by being turned on, without performing any action",
                measure: [
                    "$X = (\\sum\\limits_{i=1}^{n}{C_{n}}) / n$",
                    "$X$ = standby consumption",
                    "$n$ = number of consumption readings in the stand-by period",
                    "$C_n$ = nth consumption value during the stand by period"
                ]
            },
            {
                selected: false,
                type: "metrics",
                id: "M013",
                title: "Peak memory consumption",
                purpose: "Evaluate how much memory the system consumes when it peaks",
                characteristics: "resource_utilization",
                method: "Count how much memory the application consumes during a peak period",
                measure: [
                    "$X = (\\sum\\limits_{i=1}^{n}{C_{n}}) / n$",
                    "$X$ = peak consumption",
                    "$n$ = number of consumption readings in the peak usage period",
                    "$C_n$ = nth consumption value during peak usage period"
                ]
            },
            {
                selected: false,
                type: "metrics",
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
                ]
            },
            {
                selected: false,
                type: "metrics",
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
                ]
            },
            {
                selected: false,
                type: "metrics",
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
                ]
            },
            {
                selected: false,
                type: "metrics",
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
                ]
            },
            {
                selected: false,
                type: "metrics",
                id: "M018",
                title: "Data consumption in standby",
                purpose: "Evaluates the data consumption of the system in standby",
                characteristics: "resource_utilization",
                method: "Count the amount of data exchanged by the system just by being turned on, without performing any action",
                measure: [
                    "$X = (\\sum\\limits_{i=1}^{n}{C_{n}}) / n$",
                    "$X$ = data consumption in stand by",
                    "$n$ = number of consumption readings in the stand by period",
                    "$C_n$ = nth consumption value"
                ]
            },
            {
                selected: false,
                type: "metrics",
                id: "M019",
                title: "Peak data consumption",
                purpose: "Evaluate peak system data consumption",
                characteristics: "resource_utilization",
                method: "Count the volume of data exchanged by the system during a peak usage period, add up all the values, and calculate the average",
                measure: [
                    "$X = (\\sum\\limits_{i=1}^{n}{C_{n}}) / n$",
                    "$X$ = peak data consumption",
                    "$n$ = number of consumption readings in the peak usage period",
                    "$C_n$ = nth value of consumption in the peak usage period"
                ]
            },
            {
                selected: false,
                type: "metrics",
                id: "M020",
                title: "Average Data Consumption",
                purpose: "Evaluate the average data consumption of the system",
                characteristics: "resource_utilization",
                method: "Count the volume of data exchanged by the system during a standard usage period, including peak and off-peak times, add up all the values, and calculate the average",
                measure: [
                    "$X = (\\sum\\limits_{i=1}^{n}{C_{n}}) / n$",
                    "$X$ = average data consumption",
                    "$n$ = number of consumption readings in the standard usage period",
                    "$C_n$ = nth consumption value in the standard usage period"
                ]
            }
        ]
    },
    {
        id: "capacity",
        name: "Capacity",
        properties: [
          {
              selected: false,
              type: "properties",
              id: "P17",
              title: "Download/Upload rate",
              characteristics: "capacity",
              description: "Speed of receiving data from a remote system/speed of sending data to a remote system"
          },
          {
              selected: false,
              type: "properties",
              id: "P18",
              title: "Throughput",
              characteristics: "capacity",
              description: "The number of bits forwarded per unit time"
          },
          {
              selected: false,
              type: "properties",
              id: "P19",
              title: "Message Size",
              characteristics: "capacity",
              description: "The set of bytes present in each packet for the complete sending of the message"
          },
          {
              selected: false,
              type: "properties",
              id: "P20",
              title: "Network Usage",
              characteristics: "capacity",
              description: "Percentage of the network that is manipulating data"
          },
          {
              selected: false,
              type: "properties",
              id: "P21",
              title: "Bandwidth",
              characteristics: "capacity",
              description: "Transmission capacity of the network"
          }
        ],
        testCases: [
            {
                selected: false,
                type: "testCases",
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
                type: "testCases",
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
                type: "testCases",
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
                type: "testCases",
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
                type: "metrics",
                id: "M21",
                title: "Throughput",
                purpose: "Evaluate how fast a packet travels over the network",
                characteristics: "resource_utilization",
                method: "Count the size of the package and compare it to the time it takes to send the message",
                measure: [
                    "$X = s/t$",
                    "$X$ = throughput",
                    "$s$ = package size",
                    "$t$ = time to send the message"
                ]
            },
            {
                selected: false,
                type: "metrics",
                characteristics: "performance-time_behavior",
                id: "M22",
                title: "Maximum Number of Simultaneous users",
                characteristics: "time_behavior",
                purpose: "Evaluate the system's ability to respond to large numbers of simultaneous users.",
                method: "Make a low, constant number of requests to the system over a continuous time interval, and increase this number continuously until the system can no longer respond to the requests.",
                measure: [
                    "$X = max(U)$",
                    "$X$ = maximum number of simultaneous users",
                    "$U$ = quantities of simultaneous users$"
                ]
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
    },
    {
        id: "loadUI",
        title: "LoadUI Pro",
        type: "tools",
        description: "Test platform for cloud computing. Performs load tests, functional tests, among others. It provides test scenarios that the user can use directly or adapt to their application or even create their own test cases. In addition, the tool performs network traffic monitoring.",
        license: "Closed",
        link: "https://www.soapui.org/professional/loadui -pro/"
    },
    {
        id: "iotify",
        title: "IoTIFY ",
        type: "tools",
        description: "It offers a virtual lab, with virtual devices for performance, security and other testing.",
        license: "Closed",
        link: "https://iotify.io/"
    },
    {
        id: "tcpdump",
        title: "Tcpdump",
        type: "tools",
        description: "Similar to Wireshark, it monitors packet traffic on the network. You can identify traffic on specific ports, traffic from a specific sender, and recipients, and other functions.",
        license: "Open-Source",
        link: "http://www.tcpdump.org/"
    },
    {
        id: "soasta",
        title: "SOASTA CloudTes",
        type: "tools",
        description: "A tool used in performance testing and load testing in WEB Systems, it allows you to simulate an environment with several devices, with real-time analysis.",
        license: "Partially Open source",
        link: "https://community.akamai.com/customers/s/article/CloudTest-Methodology-and-Assets?language=en_US"
    }
];
export { guideContent, tools };