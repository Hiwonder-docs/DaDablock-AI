# 3. Creative Builds

## 3.1 Color Scanner

### 3.1.1 Introduction

This Color Scanner features both color sensing and visual display capabilities. Upon identifying the color of an object, the onboard RGB LED synchronously illuminates in the corresponding red, green, or blue color to provide a direct visual demonstration of the detection results, serving as a precise color judge.

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.1.2 Learning Objectives

1. Master the color recognition function of the WonderLLM vision module and become familiar with the calling method for coordinating with the ESP32 controller.
2. Learn to trigger corresponding lighting feedback based on visual recognition results to complete the smart color recognition project.

### 3.1.3 Assembly Guide

 <iframe
    src="../_static/pdf/01_Color_Scanner.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.1.4 Mode Switching

This build requires the **offline vision function**. Skip this step and proceed directly to the wiring guide if the offline vision mode is already active. Otherwise, refer to the [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) section in Chapter 4 to re-flash the corresponding firmware.

### 3.1.5 Wiring Guide

Plug the WonderLLM module cable into port 1 of the ESP32 controller, as shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image1.png"  class="common_img" style="width:500px;" ></div>

### 3.1.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image2.png"  class="common_img" style="width:350px;" ></div>

#### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM-offline**.

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image3.png"  class="common_img" style="width:1000px;" ></div>

#### (3) Core Blocks Analysis

|                        Command Block                         |                           Category                           |                     Function Description                     |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image1.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Switch the working recognition mode of the WonderLLM module, with options for voice interaction, color recognition, and face recognition. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image6.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the id of the color occupying the largest area on the screen in color recognition mode. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image6.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control specific or all RGB lights to light up in the selected color. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image10.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Turn off specific or all RGB lights to cut off light output. |

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image4.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.1.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.1.8 Project Extensions

After successfully identifying the same color three consecutive times, the controller RGB lights will automatically set to the breathing light mode of that color. The lights will remain in the current mode for five seconds before turning off after the identified object is removed.

### 3.1.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com



## 3.2 Smart Desk Lamp

### 3.2.1 Introduction

This smart desk lamp features voice-controlled dimming capabilities. Vocal commands enable turning the light on and off, and the system also switches between four distinct lighting colors including red, green, and blue. A single spoken phrase effortlessly alters the lighting ambiance of the room.

<div align="center"><img src="../_static/media/chapter_3/section_2/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.2.2 Learning Objectives

1. Develop proficiency in using WonderLLM voice interaction features and master the basic logic of controlling lights via voice commands.
2. Learn to receive voice commands via the ESP32 to implement desk lamp switching and lighting mode adjustments.

### 3.2.3 Assembly Guide

 <iframe
    src="../_static/pdf/02_Smart_Desk_Lamp.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.2.4 Mode Switching

This build requires the **offline voice interaction function**. Skip this step and proceed directly to the wiring guide if the offline voice interaction mode is already active. Otherwise, refer to the [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) section in Chapter 4 to re-flash the corresponding firmware.

### 3.2.5 Wiring Guide

Plug the WonderLLM module cable into port 1 of the ESP32 controller, as shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_2/media/image1.png"  class="common_img" style="width:500px;" ></div>

### 3.2.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_2/media/image2.png"  class="common_img" style="width:350px;" ></div>

#### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM-offline**.

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image3.png"  class="common_img" style="width:1000px;" ></div>

#### (3) Core Blocks Analysis

|                        Command Block                         |                           Category                           |                     Function Description                     |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image1.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Switch the working recognition mode of the WonderLLM module, with options for voice interaction, color recognition, and face recognition. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image7.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the voice text content recognized by the module in voice interaction mode for subsequent decision-making and interaction logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image6.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control specific or all RGB lights to light up in the selected color. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image10.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Turn off specific or all RGB lights to cut off light output. |

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_2/media/image4.png"  class="common_img" style="width:500px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.2.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.2.8 Project Extensions

Issue a voice command to turn on the light, and the RGB lights will turn on a soft white light by default while the buzzer emits a low-pitched tone. When switching to a red light, the red light turns on and triggers a short, high-pitched buzzer beep. When switching to a green light, the green light turns on with a medium-pitched, long beep. When switching to a blue light, the blue light turns on with a short, crisp beep. Issue a command to turn off the light, and the lights turn off while the buzzer plays a low, ending sound effect. Each lighting state corresponds to a dedicated tone, distinguishing lighting modes through combinations of sound and light.

### 3.2.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com



## 3.3 Smart Desk Clock

### 3.3.1 Introduction

This smart clock features countdown alert capabilities. After configuring the duration, the dot matrix display dynamically updates the remaining time in real-time, and the buzzer automatically sounds upon countdown completion, serving as an ideal alarm clock for learning timekeeping.

<div align="center"><img src="../_static/media/chapter_3/section_3/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.3.2 Learning Objectives

1. Understand the operational logic of a countdown timer and master programming methods involving data reception, variable control, and conditional statements.
2. Learn to utilize a dot matrix display to display numbers and a buzzer to play alert tones, achieving a complete timing feedback effect.

### 3.3.3 Assembly Guide

 <iframe
    src="../_static/pdf/03_Smart_Desk_Clock.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.3.4 Mode Switching

This build requires the online large model. Skip this step and proceed directly to the wiring guide if the **online large model mode** is already active. Otherwise, refer to the [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) section in Chapter 4 to re-flash the corresponding firmware.

### 3.3.5 Wiring Guide

1. Insert the dot matrix module cable into port 7 of the ESP32 controller.

2. Plug the WonderLLM module cable into port 3 of the ESP32 controller.

The connections are shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_3/media/image1.png"  class="common_img" style="width:500px;" ></div>

### 3.3.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_3/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

- Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM**.

<div align="center"><img src="../_static/media/chapter_3/section_3/media/image3.png"  class="common_img" style="width:1000px;" ></div>

- Select **Output module** in the **Choose an Extension** interface to add **Dot matrix module**.

<div align="center"><img src="../_static/media/chapter_2/section_5/media/image2.png"  class="common_img" style="width:1000px;" ></div>

#### (3) Core Blocks Analysis

|                        Command Block                         |                           Category                           |                     Function Description                     |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image2.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> |   Send custom text messages to the WonderLLM large model.    |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image6.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Configure mcp tool invocation parameters, customize the tool name, description, execution commands, and return parameters, and set invocation blocking and data return rules. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image1.png" style="width:180px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Turn the mcp switch on or off to control whether WonderLLM enables custom tool invocation capabilities. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image5.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the result data returned after the execution of the mcp tool is completed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Control the dialogue message output mode, with capabilities to send an action end flag and enable or disable dialogue content print output. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image3.png" style="width:230px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Control the dot matrix screen to output and display the specified number, enabling real-time refreshing of the displayed value. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image6.png" style="width:230px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Control the dot matrix screen to load and display preset patterns, enabling custom switching of various graphics and symbol screens. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image3.png" style="width:600px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Drive the buzzer to play music of the specified pitch and tempo, running in the background without blocking subsequent program execution. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image5.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Stop the buzzer from emitting sound immediately, terminating the currently playing tone or music. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image9.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Perform boolean logic judgment, determining whether the input condition is true or false, or performing negation operations. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image10.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Manually enter or invoke text content to generate string data that can participate in splicing, judgment, and display. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image12.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Judge whether a specified element exists within an array, tuple, or dictionary, returning a boolean result. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image13.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Extract the corresponding stored value or text content from a dictionary according to the specified key name. |

#### MCP Parameter Configuration

**Tool Name: self.robot.setTime**

1. Tool Description: You are an intelligent alarm clock with a countdown function that can be set. Parameter: 1 Countdown time: in seconds.

2. Command Name: `setTime`

3. Return Parameters: `[["time","int","0","0","10"]]` **Note that the first 0 is the default value, the second 0 is the minimum value, and 10 is the maximum value**.

4. Block until call complete: Yes

5. Return data: No

6. Function: This MCP configuration defines a countdown tool for the WonderLLM module, allowing WonderLLM to issue commands with a duration of 0 to 10 seconds to control the robot starting or stopping the countdown. During the call, the program blocks and waits for the countdown execution to complete fully, without needing to return running data back to WonderLLM.

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_3/media/image4.png"  class="common_img" style="width:1000px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_3/media/image5.png"  class="common_img" style="width:600px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_3/media/image6.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.3.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.3.8 Project Extensions

Voice commands enable the configuration of two separate countdown groups for short and long durations. Upon countdown completion, the dot matrix display shows **END,** and the buzzer emits distinct patterns of long and short tones to differentiate between the different countdown tasks.

### 3.3.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com



## 3.4 Adjustable Mixer

### 3.4.1 Introduction

This adjustable mixer features voice-controlled speed regulation. Vocal commands activate the stirring mechanism, which offers three distinct speed levels to easily simulate mixing materials at different intensities, serving as an engaging mechanical device.

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.4.2 Learning Objectives

1. Master the voice command recognition function of WonderLLM, and implement start-stop and multi-gear speed adjustment control for the 270° block servo.
2. Learn to output PWM signals with different duty cycles from the ESP32 to control the speed variation of the 270° block servo, simulating the different working modes of the blender.

### 3.4.3 Assembly Guide

 <iframe
    src="../_static/pdf/04_Adjustable_Mixer.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.4.4 Mode Switching

This build requires the **online large model**. Skip this step and proceed directly to the wiring guide if the online large model mode is already active. Otherwise, refer to the [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) section in Chapter 4 to re-flash the corresponding firmware.

### 3.4.5 Wiring Guide

Plug the WonderLLM module cable into port 4 of the ESP32 controller.

Insert the 270° block servo cable into port S1 of the ESP32 controller, and insert the orange wire of the servo into the white pin of S1.

The connections are shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image1.png"  class="common_img" style="width:500px;" ></div>

> [!NOTE]
>
> **For the initial setup of the 270° block servo, first remove the gear on the servo along with the attached building blocks, and upload the following 270° servo reset program to the ESP32. Next, reattach the removed building blocks, upload the program for this section to the ESP32, and wait for the 270° block servo to rotate to the initial position of 135°. This step can be skipped if the servo reset program has been executed previously.**

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image0.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image.png"  class="common_img" style="width:300px;" ></div>

### 3.4.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM**.

<div align="center"><img src="../_static/media/chapter_3/section_3/media/image3.png"  class="common_img" style="width:1000px;" ></div>

#### (3) Core Blocks Analysis

|                        Command Block                         |                           Category                           |                     Function Description                     |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image2.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> |   Send custom text messages to the WonderLLM large model.    |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image6.png" style="width:400px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Configure mcp tool invocation parameters, customize the tool name, description, execution commands, and return parameters, and set invocation blocking and data return rules. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image1.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Turn the mcp switch on or off to control whether WonderLLM enables custom tool invocation capabilities. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image5.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the result data returned after the execution of the mcp tool is completed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Control the dialogue message output mode, with capabilities to send an action end flag and enable or disable dialogue content print output. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° servo on the specified port to rotate smoothly to the target angle within a set duration, automatically delaying to wait for the servo to complete the action. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image9.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Perform boolean logic judgment, determining whether the input condition is true or false, or performing negation operations. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image10.png" style="width:180px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Manually enter or invoke text content to generate string data that can participate in splicing, judgment, and display. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image12.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Judge whether a specified element exists within an array, tuple, or dictionary, returning a boolean result. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image13.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Extract the corresponding stored value or text content from a dictionary according to the specified key name. |

#### MCP Parameter Configuration

**Tool Name: `self.robot.setMode`**

1. Tool Description: You are a blender with three modes to choose from. Parameter description: Gear range: 0 to 3, returns 0 when stopping, returns 1 for first gear, returns 2 for second gear, and returns 3 for third gear.

2. Command Name: `setMode`

3. Return Parameters: `[["mode","int","0","0","3"]]` **Note that the first 0 is the default value, the second 0 is the minimum value, and 3 is the maximum value**.

4. Block until call complete: Yes

5. Return data: No

6. Function: This MCP configuration defines a gear switching tool for the WonderLLM module, allowing WonderLLM to issue gear commands from 0 to 3 to control the blender to switch running modes. During the call, the program blocks and waits for the mode switch execution to complete, and there is no need to return running data back to WonderLLM.

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image4.png"  class="common_img" style="width:1000px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image5.png"  class="common_img" style="width:600px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image6.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.4.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.4.8 Project Extensions

Issuing the voice command "Auto Mode" causes the mixer to automatically cycle through low, medium, and high speed levels. A stop command delivered at any time immediately interrupts this cycle, and a single voice command can lock the system into a specific speed level for continuous mixing.

### 3.4.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com



## 3.5 Smart Windmill

### 3.5.1 Introduction

This interactive smart windmill responds directly to vocal cues. Simple voice commands engage the motor to spin the blades, meaning a single spoken phrase can instantly set a miniature windmill scene into gentle motion.

<div align="center"><img src="../_static/media/chapter_3/section_5/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.5.2 Learning Objectives

1. Learn to control the 360° block motor via the ESP32, and master the basic programming methods for start-stop and speed adjustment of the 360° block motor.
2. Enhance hands-on skills in integrating mechanical and electronic systems by implementing smart windmill control through voice commands.

### 3.5.3 Assembly Guide

 <iframe
    src="../_static/pdf/05_Smart_Windmill.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.5.4 Mode Switching

This build requires the **offline voice interaction function**. Skip this step and proceed directly to the wiring guide if the offline voice interaction mode is already active. Otherwise, refer to the [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) section in Chapter 4 to re-flash the corresponding firmware.

### 3.5.5 Wiring Guide

Plug the WonderLLM module cable into port 1 of the ESP32 controller.

Insert the 360° block motor cable into port S1 of the ESP32 controller, and insert the orange wire of the motor into the white pin of S1.

The connections are shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_5/media/image1.png"  class="common_img" style="width:500px;" ></div>

### 3.5.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_5/media/image2.png"  class="common_img" style="width:350px;" ></div>

#### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM-offline**.

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image3.png"  class="common_img" style="width:1000px;" ></div>

#### (3) Core Blocks Analysis

|                        Command Block                         |                           Category                           |                     Function Description                     |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image1.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Switch the working recognition mode of the WonderLLM module, with options for voice interaction, color recognition, and face recognition. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image7.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the voice text content recognized by the module in voice interaction mode for subsequent decision-making and interaction logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° block motor on the specified port to continue rotating at the set custom speed. |

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_5/media/image4.png"  class="common_img" style="width:500px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.5.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.5.8 Project Extensions

Issuing the voice command "Rotate Servo" initiates medium-speed rotation. The commands "Speed Up" and "Slow Down" trigger high-speed and low-speed rotation, respectively, enabling complete three-level speed regulation entirely through voice interaction.

### 3.5.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com



## 3.6 Greeter Bot

### 3.6.1 Introduction

This interactive greeting robot features face recognition capabilities designed to welcome guests. Upon detecting an approaching individual, the system automatically broadcasts a welcoming voice message while the dot matrix display simultaneously shows **Hi**, ensuring a warm and engaging reception for every visitor.

<div align="center"><img src="../_static/media/chapter_3/section_6/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.6.2 Learning Objectives

1. Understand the WonderLLM facial recognition feature and master the control methods for triggering mechanical actions via facial detection.
2. Learn to integrate the ESP32 controller with the 270° block servo to construct an interactive, humanoid greeting project.

### 3.6.3 Assembly Guide

 <iframe
    src="../_static/pdf/06_Greeter_Bot.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.6.4 Mode Switching

This build requires the **offline vision function**. Skip this step and proceed directly to the wiring guide if the offline vision mode is already active. Otherwise, refer to the [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) section in Chapter 4 to re-flash the corresponding firmware.

### 3.6.5 Wiring Guide

Insert the dot matrix module cable into port 6 of the ESP32 controller.

Plug the WonderLLM module cable into port 1 of the ESP32 controller.

Insert the 270° block servo cable into port S1 of the ESP32 controller, and insert the orange wire of the servo into the white pin of S1.

The connections are shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_6/media/image1.png"  class="common_img" style="width:500px;" ></div>

**For the initial setup of the 270° block servo, first remove the gear on the servo along with the attached building blocks, and upload the following servo reset program to the ESP32 controller. Next, reattach the removed components, upload the program for this section to the ESP32 controller, and wait for the 270° block servo to rotate to the initial position of 135°. At this point, the robot figure faces directly forward in an upright, unbowed posture. This step can be skipped if the servo reset program has been executed previously.**

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image0.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_6/media/image.png"  class="common_img" style="width:300px;" ></div>

### 3.6.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_6/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

- Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM-offline**.

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image3.png"  class="common_img" style="width:1000px;" ></div>

- Select **Output module** in the **Choose an Extension** interface to add **Dot matrix module**.

<div align="center"><img src="../_static/media/chapter_2/section_5/media/image2.png"  class="common_img" style="width:1000px;" ></div>

#### (3) Core Blocks Analysis

|                        Command Block                         |                           Category                           |                     Function Description                     |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image1.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Switch the working recognition mode of the WonderLLM module, with options for voice interaction, color recognition, and face recognition. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image3.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Detect whether a face exists in the screen in face recognition mode, returning a boolean value for face detection logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image10.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Select the desired broadcast voice entry and control the module to play the content of the entry. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image4.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Output and display custom text content at the specified x and y coordinates on the dot matrix screen. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image6.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Control the dot matrix screen to load and display preset patterns, enabling custom switching of various graphics and symbol screens. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° servo on the specified port to rotate smoothly to the target angle within a set duration, automatically delaying to wait for the servo to complete the action. |

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_6/media/image4.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.6.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.6.8 Project Extensions

Upon facial detection, the robot figure executes two consecutive bows, and the dot matrix display switches to a cheering expression. Once the face exits the detection range, the display clears automatically.

### 3.6.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com



## 3.7 Welcome Barrier Gate

### 3.7.1 Introduction

This automated barrier gate features facial recognition capabilities for smart access control. Upon detecting a face, the system raises the barrier arm to grant entry while simultaneously broadcasting a welcoming audio message, effectively simulating a real-world automated store entrance and reception scenario.

<div align="center"><img src="../_static/media/chapter_3/section_7/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.7.2 Learning Objectives

1. Apply the WonderLLM facial recognition feature to automate the opening and closing operations of the smart barrier gate.
2. Master precise angle control of the 270° block servo and understand the operational logic of the automated access control simulation project.

### 3.7.3 Assembly Guide

 <iframe
    src="../_static/pdf/07_Welcome_Barrier_Gate.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.7.4 Mode Switching

This build requires the **offline vision function**. Skip this step and proceed directly to the wiring guide if the offline vision mode is already active. Otherwise, refer to the [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) section in Chapter 4 to re-flash the corresponding firmware.

### 3.7.5 Wiring Guide

Plug the WonderLLM module cable into port 1 of the ESP32 controller.

Insert the 270° block servo cable into port S1 of the ESP32 controller, and insert the orange wire of the servo into the white pin of S1.

The connections are shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_7/media/image1.png"  class="common_img" style="width:500px;" ></div>

> [!NOTE]
>
> **For the initial setup of the 270° block servo, first remove the gear along with the attached building blocks, and upload the following servo reset program to the ESP32 controller. Next, reattach the removed components, upload the program for this lesson to the ESP32 controller, and wait for the 270° block servo to rotate to the initial position of 50°. At this point, the barrier arm is in the lowered position. This step can be skipped if the servo reset program has been executed previously.**

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image0.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_7/media/image.png"  class="common_img" style="width:300px;" ></div>

### 3.7.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_7/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM-offline**.

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image3.png"  class="common_img" style="width:1000px;" ></div>

#### (3) Core Blocks Analysis

|                        Command Block                         |                           Category                           |                     Function Description                     |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image1.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Switch the working recognition mode of the WonderLLM module, with options for voice interaction, color recognition, and face recognition. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image3.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Detect whether a face exists in the screen in face recognition mode, returning a boolean value for face detection logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image11.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Select the custom broadcast voice entry number and control the module to play the voice content corresponding to that entry number. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° servo on the specified port to rotate smoothly to the target angle within a set duration, automatically delaying to wait for the servo to complete the action. |

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_7/media/image4.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.7.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.7.8 Project Extensions

Upon facial detection, the barrier arm fully raises and the RGB LED is set to green to indicate access granted. The arm remains elevated for 4 seconds to allow passage, after which the servo automatically lowers the barrier arm and the RGB LED switches to red to indicate access denied.

### 3.7.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com



## 3.8 Smart Beckoning Cat

### 3.8.1 Introduction

This smart Beckoning cat is designed to wave and welcome guests. Upon facial detection, the figure swings its arm to wave while simultaneously broadcasting a welcoming greeting, seamlessly combining traditional auspicious symbolism with smart reception capabilities.

<div align="center"><img src="../_static/media/chapter_3/section_8/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.8.2 Learning Objectives

1. Utilize the WonderLLM facial recognition feature to implement a smart waving and greeting effect.
2. Master programming the ESP32 controller to drive the 270° block servo in a continuous back-and-forth motion, creating an engaging smart reception device.

### 3.8.3 Assembly Guide

 <iframe
    src="../_static/pdf/08_Smart_Beckoning_Cat.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.8.4 Mode Switching

This build requires the **offline vision function**. Skip this step and proceed directly to the wiring guide if the offline vision mode is already active. Otherwise, refer to the [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) section in Chapter 4 to re-flash the corresponding firmware.

### 3.8.5 Wiring Guide

Plug the WonderLLM module cable into port 1 of the ESP32 controller.

Insert the 270° block servo cable into port S1 of the ESP32 controller, and insert the orange wire of the servo into the white pin of S1.

The connections are shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_8/media/image1.png"  class="common_img" style="width:500px;" ></div>

> [!NOTE]
>
> **For the initial setup of the 270° block servo, first remove the gear along with the attached building blocks, and upload the following servo reset program to the ESP32 controller. Next, reattach the removed components, upload the program for this lesson to the ESP32 controller, and wait for the 270° block servo to rotate to the initial position of 135°. This step can be skipped if the servo reset program has been executed previously.**

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image0.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_8/media/image.png"  class="common_img" style="width:300px;" ></div>

### 3.8.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_8/media/image2.png"  class="common_img" style="width:350px;" ></div>

#### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM-offline**.

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image3.png"  class="common_img" style="width:1000px;" ></div>

#### (3) Core Blocks Analysis

|                        Command Block                         |                           Category                           |                     Function Description                     |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image1.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Switch the working recognition mode of the WonderLLM module, with options for voice interaction, color recognition, and face recognition. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image3.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Detect whether a face exists in the screen in face recognition mode, returning a boolean value for face detection logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image10.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Select the desired broadcast voice entry and control the module to play the content of the entry. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° servo on the specified port to rotate smoothly to the target angle within a set duration, automatically delaying to wait for the servo to complete the action. |

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_8/media/image4.png"  class="common_img" style="width:600px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_8/media/image5.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.8.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.8.8 Project Extensions

Upon facial detection, the cat repeatedly waves its arm. Once the face exits the detection range, the waving motion stops.

### 3.8.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com



## 3.9 Pumpjack Bot

### 3.9.1 Introduction

This simulated pumpjack features voice-controlled start and stop capabilities. Issuing voice commands controls the motor to drive a continuous reciprocating motion, effectively simulating the up-and-down pumping action of a real-world oil field pumpjack.

<div align="center"><img src="../_static/media/chapter_3/section_9/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.9.2 Learning Objectives

1. Learn to program the ESP32 controller to drive the 360° block servo in a reciprocating motion, mastering fundamental techniques for forward and reverse rotation, starting, stopping, and speed regulation.
2. Integrate the WonderLLM module and utilize voice commands to implement smart start, stop, and speed control for the pumpjack, enhancing hands-on skills in combining mechanical transmission structures with voice-activated electronic control systems.

### 3.9.3 Assembly Guide

 <iframe
    src="../_static/pdf/09_Pumpjack_Bot.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.9.4 Mode Switching

This build requires the **offline voice interaction function**. Skip this step and proceed directly to the wiring guide if the offline voice interaction mode is already active. Otherwise, refer to the [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) section in Chapter 4 to re-flash the corresponding firmware.

### 3.9.5 Wiring Guide

Plug the WonderLLM module cable into port 1 of the ESP32 controller.

Insert the 360° block motor cable into port S1 of the ESP32 controller, and insert the orange wire of the motor into the white pin of  S1.

The connections are shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_5/media/image1.png"  class="common_img" style="width:500px;" ></div>

### 3.9.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_9/media/image2.png"  class="common_img" style="width:400px;" ></div>

#### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM-offline**.

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image3.png"  class="common_img" style="width:1000px;" ></div>

#### (3) Core Blocks Analysis

|                        Command Block                         |                           Category                           |                     Function Description                     |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image1.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Switch the working recognition mode of the WonderLLM module, with options for voice interaction, color recognition, and face recognition. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image7.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the voice text content recognized by the module in voice interaction mode for subsequent decision-making and interaction logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° block motor on the specified port to continue rotating at the set custom speed. |

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_9/media/image4.png"  class="common_img" style="width:400px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.9.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.9.8 Project Extensions

Issuing the voice command "Rotate Servo" initiates medium-speed pumping. The commands "Speed Up" and "Slow Down" trigger high-speed and low-speed pumping respectively. Simultaneously, the buzzer adjusts its pitch based on the rotation speed to simulate the mechanical noise generated during the pumping process.

### 3.9.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com



## 3.10 Smart Cradle

### 3.10.1 Introduction

This smart cradle features voice-controlled rocking capabilities. Issuing voice commands controls the motor to drive a slow swinging motion, effectively simulating a gentle, sleep-inducing rocking rhythm and creating a deeply soothing miniature relaxation device.

<div align="center"><img src="../_static/media/chapter_3/section_10/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.10.2 Learning Objectives

1. Proficiently utilize WonderLLM voice commands to implement voice control for the smart cradle.
2. Learn to adjust the swing amplitude and speed of the 360° block servo, creating a simulated everyday smart device.

### 3.10.3 Assembly Guide

 <iframe
    src="../_static/pdf/10_Smart_Cradle.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.10.4 Mode Switching

This build requires the **offline voice interaction function**. Skip this step and proceed directly to the wiring guide if the offline voice interaction mode is already active. Otherwise, refer to the [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) section in Chapter 4 to re-flash the corresponding firmware.

### 3.10.5 Wiring Guide

Plug the WonderLLM module cable into port 1 of the ESP32 controller.

Insert the 360° block motor cable into port S1 of the ESP32 controller, and insert the orange wire of the motor into the white pin of  S1.

The connections are shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_5/media/image1.png"  class="common_img" style="width:500px;" ></div>

### 3.10.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_10/media/image2.png"  class="common_img" style="width:350px;" ></div>

#### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM-offline**.

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image3.png"  class="common_img" style="width:1000px;" ></div>

#### (3) Core Blocks Analysis

|                        Command Block                         |                           Category                           |                     Function Description                     |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image1.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Switch the working recognition mode of the WonderLLM module, with options for voice interaction, color recognition, and face recognition. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image7.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the voice text content recognized by the module in voice interaction mode for subsequent decision-making and interaction logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° block motor on the specified port to continue rotating at the set custom speed. |

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_10/media/image4.png"  class="common_img" style="width:400px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.10.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.10.8 Project Extensions

Issuing the voice command "Rotate Servo" initiates a slow rocking motion of the cradle. The RGB LED transitions into a breathing mode at the same time, activating the baby-soothing mode.

### 3.10.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com



## 3.11 Smart Catapult

### 3.11.1 Introduction

This catapult features voice-controlled launch capabilities. Issuing voice commands controls the servo to trigger the release mechanism, instantly launching the projectile and effectively simulating an ancient siege engine.

<div align="center"><img src="../_static/media/chapter_3/section_11/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.11.2 Learning Objectives

1. Master the WonderLLM voice trigger feature to implement single-command voice-activated mechanical actions.
2. Understand the control principles of instantaneous torque output for the 270° block servo, completing an engaging voice-controlled launch project.

### 3.11.3 Assembly Guide

 <iframe
    src="../_static/pdf/11_Smart_Catapult.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.11.4 Mode Switching

This build requires the online large model. Skip this step and proceed directly to the wiring guide if the online large model mode is already active. Otherwise, refer to the [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) section in Chapter 4 to re-flash the corresponding firmware.

### 3.11.5 Wiring Guide

Plug the WonderLLM module cable into port 1 of the ESP32 controller.

Insert the 270° block servo cable into port S1 of the ESP32 controller, and insert the orange wire of the servo into the white pin of  S1.

The connections are shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_7/media/image1.png"  class="common_img" style="width:500px;" ></div>

> [!NOTE]
>
> **For the initial setup of the 270° block servo, first remove the gear along with the attached building blocks, and upload the following servo reset program to the ESP32 controller. Next, reattach the removed components, upload the program for this lesson to the ESP32 controller, and wait for the 270° block servo to rotate to the initial position of 135°. At this point, the launch arm is in a horizontal, pre-launch position. This step can be skipped if the servo reset program has been executed previously.**

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image0.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_11/media/image.png"  class="common_img" style="width:300px;" ></div>

### 3.11.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_11/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM**.

<div align="center"><img src="../_static/media/chapter_3/section_3/media/image3.png"  class="common_img" style="width:1000px;" ></div>

#### (3) Core Blocks Analysis

|                        Command Block                         |                           Category                           |                     Function Description                     |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image2.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> |   Send custom text messages to the WonderLLM large model.    |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image6.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Configure mcp tool invocation parameters, customize the tool name, description, execution commands, and return parameters, and set invocation blocking and data return rules. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image1.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Turn the mcp switch on or off to control whether WonderLLM enables custom tool invocation capabilities. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image5.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the result data returned after the execution of the mcp tool is completed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Control the dialogue message output mode, with capabilities to send an action end flag and enable or disable dialogue content print output. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° servo on the specified port to rotate smoothly to the target angle within a set duration, automatically delaying to wait for the servo to complete the action. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image9.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Perform boolean logic judgment, determining whether the input condition is true or false, or performing negation operations. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image10.png" style="width:180px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Manually enter or invoke text content to generate string data that can participate in splicing, judgment, and display. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image12.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Judge whether a specified element exists within an array, tuple, or dictionary, returning a boolean result. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image13.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Extract the corresponding stored value or text content from a dictionary according to the specified key name. |

#### MCP Parameter Configuration

**Tool Name: `self.robot.setThrow`**

1. Tool Description: Control the ejection of the Smart Catapult. Main parameters: projectile switch: 1 for projectile, 0 for non projectile.

2. Command Name: `setThrow`

3. Return Parameters: `[["switch","int","0","0","1"]]` **Note that the first 0 is the default value, the second 0 is the minimum value, and 1 is the maximum value**.

4. Block until call complete: Yes

5. Return data: No

6. Function: This MCP configuration defines an ejection control tool for the WonderLLM module, allowing WonderLLM to issue 0 or 1 switch commands to control the Smart Catapult to launch or not launch. During the call, the program blocks and waits for the launching action to complete fully, without needing to return running data back to WonderLLM.

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_11/media/image4.png"  class="common_img" style="width:1000px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_11/media/image5.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.11.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.11.8 Project Extensions

The buzzer plays a celebration sound effect after five successful launches.

### 3.11.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com



## 3.12 Smart Swing

### 3.12.1 Introduction

This miniature swing features voice-controlled swinging capabilities. Issuing voice commands controls the servo to drive the suspended seat in a back-and-forth swinging motion, creating a playful miniature playground experience right indoors.

<div align="center"><img src="../_static/media/chapter_3/section_12/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.12.2 Learning Objectives

1. Use WonderLLM voice interaction function to implement smart swing start-stop control.
2. Learn to program the ESP32 controller to regulate the swing rhythm of the 270° block servo, reproducing the outdoor swing movement.

### 3.12.3 Assembly Guide

 <iframe
    src="../_static/pdf/12_Smart_Swing.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.12.4 Mode Switching

This build requires the **offline voice interaction function**. Skip this step and proceed directly to the wiring guide if the offline voice interaction mode is already active. Otherwise, refer to the [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) section in Chapter 4 to re-flash the corresponding firmware.

### 3.12.5 Wiring Guide

Plug the WonderLLM module cable into port 1 of the ESP32 controller.

Insert the 270° block servo cable into port S1 of the ESP32 controller, and insert the orange wire of the servo into the white pin of  S1.

The connections are shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_7/media/image1.png"  class="common_img" style="width:500px;" ></div>

> [!NOTE]
>
> **For the initial setup of the 270° block servo, first remove the gear along with the attached building blocks, and upload the following servo reset program to the ESP32 controller. Next, reattach the removed components, upload the program for this lesson to the ESP32 controller, and wait for the 270° block servo to rotate to the initial position of 135°. At this point, the swing is in a centered position. This step can be skipped if the servo reset program has been executed previously.**

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image0.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_12/media/image.png"  class="common_img" style="width:300px;" ></div>

### 3.12.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_12/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM-offline**.

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image3.png"  class="common_img" style="width:1000px;" ></div>

#### (3) Core Blocks Analysis

|                        Command Block                         |                           Category                           |                     Function Description                     |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image1.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Switch the working recognition mode of the WonderLLM module, with options for voice interaction, color recognition, and face recognition. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image7.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the voice text content recognized by the module in voice interaction mode for subsequent decision-making and interaction logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° servo on the specified port to rotate smoothly to the target angle within a set duration, automatically delaying to wait for the servo to complete the action. |

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_12/media/image4.png"  class="common_img" style="width:600px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_12/media/image5.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.12.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.12.8 Project Extensions

Initiate the swinging motion while simultaneously transitioning the RGB LED into a breathing mode.

### 3.12.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com



## 3.13 Rhythm Drummer

### 3.13.1 Introduction

This robotic drummer features voice-controlled rhythm capabilities. Issuing voice commands controls the starting and stopping of the drumming action, automatically striking the drum pad alongside random background music and allowing users to effortlessly switch the playing tempo.

<div align="center"><img src="../_static/media/chapter_3/section_13/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.13.2 Learning Objectives

1. Master the control method of coordinating WonderLLM voice commands with the 360° block motor actions, understanding the corresponding logic between tempo control and mechanical movements.
2. Learn to output precise 360° block motor control signals via the ESP32 controller to simulate drumming actions and control music playback synchronously.

### 3.13.3 Assembly Guide

 <iframe
    src="../_static/pdf/13_Rhythm_Drummer.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.13.4 Mode Switching

This build requires the **online large model**. Skip this step and proceed directly to the wiring guide if the online large model mode is already active. Otherwise, refer to the [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) section in Chapter 4 to re-flash the corresponding firmware.

### 3.13.5 Wiring Guide

Plug the WonderLLM module cable into port 1 of the ESP32 controller.

Insert the 360° block motor cable into port S1 of the ESP32 controller, and insert the orange wire of the motor into the white pin of  S1.

The connections are shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_5/media/image1.png"  class="common_img" style="width:500px;" ></div>

### 3.13.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_13/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM**.

<div align="center"><img src="../_static/media/chapter_3/section_3/media/image3.png"  class="common_img" style="width:1000px;" ></div>

#### (3) Core Blocks Analysis

|                        Command Block                         |                           Category                           |                     Function Description                     |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image2.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> |   Send custom text messages to the WonderLLM large model.    |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image6.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Configure mcp tool invocation parameters, customize the tool name, description, execution commands, and return parameters, and set invocation blocking and data return rules. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image1.png" style="width:180px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Turn the mcp switch on or off to control whether WonderLLM enables custom tool invocation capabilities. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image5.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the result data returned after the execution of the mcp tool is completed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Control the dialogue message output mode, with capabilities to send an action end flag and enable or disable dialogue content print output. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° block motor on the specified port to continue rotating at the set custom speed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image9.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Perform boolean logic judgment, determining whether the input condition is true or false, or performing negation operations. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image10.png" style="width:180px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Manually enter or invoke text content to generate string data that can participate in splicing, judgment, and display. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image12.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Judge whether a specified element exists within an array, tuple, or dictionary, returning a boolean result. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image13.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Extract the corresponding stored value or text content from a dictionary according to the specified key name. |

#### MCP Parameter Configuration

**Tool Name: `self.robot.setMusic`**

1. Tool Description: You can control the start and stop of the drumming. The parameters are as follows: 1 is returned when starting the drumming, and 0 is returned when stopping.

2. Command Name: `setMusic`

3. Return Parameters: `[["music","int","0","0","1"]]` **Note that the first 0 is the default value, the second 0 is the minimum value, and 1 is the maximum value**.

4. Block until call complete: Yes

5. Return data: No

6. Function: This MCP configuration defines a drumming control tool for the WonderLLM module, allowing WonderLLM to issue 0 or 1 switch commands to control starting or stopping the drumming. During the call, the program blocks and waits for the drumming action to complete fully, without needing to return running data back to WonderLLM.

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_13/media/image4.png"  class="common_img" style="width:1000px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_13/media/image5.png"  class="common_img" style="width:500px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.13.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.13.8 Project Extensions

Configure the robotic drummer with three tempo settings: low-speed, medium-speed, and high-speed. Issuing the corresponding voice command at any time initiates the drumming action at the specified tempo.

### 3.13.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com



## 3.14 Sawing Bot

### 3.14.1 Introduction

This sawing bot features voice-controlled interactive capabilities. Issuing voice commands controls the servo to pull the cord, driving the figure in an up-and-down motion and effortlessly initiating an engaging interactive experience with just a simple command.

<div align="center"><img src="../_static/media/chapter_3/section_14/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.14.2 Learning Objectives

1. Use WonderLLM voice functions to achieve voice control of labor models.
2. Master how to program the 270° block servo to execute back-and-forth pushing and pulling movements, simulating manual sawing labor.

### 3.14.3 Assembly Guide

 <iframe
    src="../_static/pdf/14_Sawing_Bot.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.14.4 Mode Switching

This build requires the **offline voice interaction function**. Skip this step and proceed directly to the wiring guide if the offline voice interaction mode is already active. Otherwise, refer to the [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) section in Chapter 4 to re-flash the corresponding firmware.

### 3.14.5 Wiring Guide

Plug the WonderLLM module cable into port 1 of the ESP32 controller.

Insert the 270° block servo cable into port S1 of the ESP32 controller, and insert the orange wire of the servo into the white pin of  S1.

The connections are shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_7/media/image1.png"  class="common_img" style="width:500px;" ></div>

**For the initial setup of the 270° block servo, first remove the gear along with the attached building blocks, and upload the following servo reset program to the ESP32 controller. Next, reattach the removed components, upload the program for this lesson to the ESP32 controller, and wait for the 270° block servo to rotate to the initial position of 135°. This step can be skipped if the servo reset program has been executed previously.**

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image0.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_14/media/image.png"  class="common_img" style="width:300px;" ></div>

### 3.14.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_14/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM-offline**.

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image3.png"  class="common_img" style="width:1000px;" ></div>

#### (3) Core Blocks Analysis

|                        Command Block                         |                           Category                           |                     Function Description                     |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image1.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Switch the working recognition mode of the WonderLLM module, with options for voice interaction, color recognition, and face recognition. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image7.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the voice text content recognized by the module in voice interaction mode for subsequent decision-making and interaction logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° servo on the specified port to rotate smoothly to the target angle within a set duration, automatically delaying to wait for the servo to complete the action. |

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_14/media/image4.png"  class="common_img" style="width:600px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_14/media/image5.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.14.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.14.8 Project Extensions

Issuing the voice command "Rotate Servo" initiates the bot's sawing motion. Simultaneously, the buzzer plays a specific pitch to simulate the sound of sawing wood.

### 3.14.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com



## 3.15 Smart Exercise Bike

### 3.15.1 Introduction

This exercise bike features voice-controlled start capabilities. Issuing voice commands controls the servo to drive the wheels in a continuous rotational motion, effectively simulating a dynamic workout experience.

<div align="center"><img src="../_static/media/chapter_3/section_15/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.15.2 Learning Objectives

1. Implement multi-gear speed adjustment control of the 360° block motor with WonderLLM multi-semantic voice recognition.
2. Learn to regulate the speed of the 360° block motor via the ESP32 controller, achieving free switching between running mode and stationary mode.

### 3.15.3 Assembly Guide

 <iframe
    src="../_static/pdf/15_Smart_Exercise_Bike.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.15.4 Mode Switching

This build requires the online large model. Skip this step and proceed directly to the wiring guide if the online large model mode is already active. Otherwise, refer to the [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) section in Chapter 4 to re-flash the corresponding firmware.

### 3.15.5 Wiring Guide

Plug the WonderLLM module cable into port 1 of the ESP32 controller.

Insert the 360° block motor cable into port S1 of the ESP32 controller, and insert the orange wire of the motor into the white pin of  S1.

The connections are shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_5/media/image1.png"  class="common_img" style="width:500px;" ></div>

### 3.15.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_15/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM**.

<div align="center"><img src="../_static/media/chapter_3/section_3/media/image3.png"  class="common_img" style="width:1000px;" ></div>

#### (3) Core Blocks Analysis

|                        Command Block                         |                           Category                           |                     Function Description                     |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image2.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> |   Send custom text messages to the WonderLLM large model.    |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image6.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Configure mcp tool invocation parameters, customize the tool name, description, execution commands, and return parameters, and set invocation blocking and data return rules. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image1.png" style="width:180px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Turn the mcp switch on or off to control whether WonderLLM enables custom tool invocation capabilities. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image5.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the result data returned after the execution of the mcp tool is completed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Control the dialogue message output mode, with capabilities to send an action end flag and enable or disable dialogue content print output. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° block motor on the specified port to continue rotating at the set custom speed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image9.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Perform boolean logic judgment, determining whether the input condition is true or false, or performing negation operations. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image10.png" style="width:180px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Manually enter or invoke text content to generate string data that can participate in splicing, judgment, and display. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image12.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Judge whether a specified element exists within an array, tuple, or dictionary, returning a boolean result. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image13.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Extract the corresponding stored value or text content from a dictionary according to the specified key name. |

#### MCP Parameter Configuration

**Tool Name: `self.robot.setRun`**

1. Tool Description: You are a smart Exercise Bike that can start the fitness mode through voice control. Parameter description: Gear range: 0 to 1, returns 0 when stopped, returns 1 when running.

2. Command Name: `setRun`

3. Return Parameters: `[["run","int","0","0","1"]]` **Note that the first 0 is the default value, the second 0 is the minimum value, and 1 is the maximum value**.

4. Block until call complete: Yes

5. Return data: No

6. Function: This MCP configuration defines a running control tool for the WonderLLM module, allowing WonderLLM to issue 0 or 1 gear commands to control the starting or stopping of the Smart Exercise Bike fitness mode. During the call, the program blocks and waits for the bike running action to complete, without needing to return running data back to WonderLLM.

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_15/media/image4.png"  class="common_img" style="width:1000px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_15/media/image5.png"  class="common_img" style="width:500px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.15.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.15.8 Project Extensions

Customize the riding duration using voice commands. Once the specified time elapses, the riding motion automatically stops.

### 3.15.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com



## 3.16 Face-Changing Bot

### 3.16.1 Introduction

This expression-changing device features voice-controlled expression-switching capabilities. Issuing voice commands controls the dot matrix display to switch between four distinct facial expressions—speechless, happy, sad, and eager—effectively conveying a diverse range of emotions.

<div align="center"><img src="../_static/media/chapter_3/section_16/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.16.2 Learning Objectives

1. Master the voice screen control function of WonderLLM to implement voice commands to switch dot matrix expression patterns.
2. Learn to retrieve built-in pattern resources via the ESP32 to complete the fun human-robot interaction project.

### 3.16.3 Assembly Guide

 <iframe
    src="../_static/pdf/16_Face-Changing_Bot.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>

### 3.16.4 Mode Switching

This build requires the **offline voice interaction function**. Skip this step and proceed directly to the wiring guide if the offline voice interaction mode is already active. Otherwise, refer to the [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) section in Chapter 4 to re-flash the corresponding firmware.

### 3.16.5 Wiring Guide

Insert the dot matrix module cable into port 5 of the ESP32 controller.

Plug the WonderLLM module cable into port 1 of the ESP32 controller.

Insert the 270° block servo cable into port S1 of the ESP32 controller, and insert the orange wire of the servo into the white pin of  S1.

The connections are shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_16/media/image1.png"  class="common_img" style="width:500px;" ></div>

> [!NOTE]
>
> **For the initial setup of the 270° block servo, first remove the gear along with the attached building blocks, and upload the following servo reset program to the ESP32 controller. Next, reattach the removed components, upload the program for this lesson to the ESP32 controller, and wait for the 270° block servo to rotate to the initial position of 135°. At this point, the mask is in a lowered position. This step can be skipped if the servo reset program has been executed previously.**

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image0.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_16/media/image.png"  class="common_img" style="width:300px;" ></div>

### 3.16.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_16/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

- Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM-offline**.

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image3.png"  class="common_img" style="width:1000px;" ></div>

- Select **Output module** in the **Choose an Extension** interface to add **Dot matrix module**.

<div align="center"><img src="../_static/media/chapter_2/section_5/media/image2.png"  class="common_img" style="width:1000px;" ></div>

#### (3) Core Blocks Analysis

|                        Command Block                         |                           Category                           |                     Function Description                     |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image1.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Switch the working recognition mode of the WonderLLM module, with options for voice interaction, color recognition, and face recognition. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image7.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the voice text content recognized by the module in voice interaction mode for subsequent decision-making and interaction logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image6.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Control the dot matrix screen to load and display preset patterns, enabling custom switching of various graphics and symbol screens. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° servo on the specified port to rotate smoothly to the target angle within a set duration, automatically delaying to wait for the servo to complete the action. |

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_16/media/image4.png"  class="common_img" style="width:600px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_16/media/image5.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.16.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.16.8 Project Extensions

Speaking keywords such as "happy" or "sad" triggers the dot matrix display to switch to the corresponding expression in real-time. Simultaneously, the buzzer plays distinct pitches corresponding to the emotion conveyed by the expression.

### 3.16.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com

## 3.17 Tracking Fan

### 3.17.1 Introduction

This tracking fan features human-following capabilities to deliver a cooling breeze. Upon detecting a face, the fan automatically sweeps back and forth. The sweeping action stops immediately when the individual departs, ensuring the airflow dynamically tracks the individual.

<div align="center"><img src="../_static/media/chapter_3/section_17/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.17.2 Learning Objectives

1. Develop proficiency in using WonderLLM facial detection and tracking features to implement coordinated start, stop, and sweeping control.
2. Learn to integrate the ESP32 controller with a 270° block servo and a fan module to design a face-tracking smart cooling system.

### 3.17.3 Assembly Guide

 <iframe
    src="../_static/pdf/17_Tracking_Fan.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.17.4 Mode Switching

This build requires the **offline vision function**. If the offline vision function mode has already been entered, skip this step and proceed directly to the wiring guide. Otherwise, refer to [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) to flash the corresponding firmware.

### 3.17.5 Wiring Guide

Connect the fan module cable to port 5 of the ESP32 controller.

Connect the WonderLLM module cable to port 1 of the ESP32 controller.

Connect the 270° block servo cable to port S1 of the ESP32 controller and ensure the orange wire of the servo aligns with the white pin of S1.

The wiring configuration is shown below:

<div align="center"><img src="../_static/media/chapter_3/section_17/media/image1.png"  class="common_img" style="width:500px;" ></div>

> [!NOTE]
>
> **When using the 270° block servo for the first time, remove the gear and its attached building blocks from the 270° block servo first. Upload the following 270° block servo reset program to the ESP32 controller. Reassemble the building blocks afterwards and upload the program of this lesson to the ESP32 controller. Wait for the 270° block servo to rotate to the initial position of 135°. At this point, the fan and the WonderLLM module should face straight ahead. This step can be skipped if the servo reset program has been executed previously.**

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image0.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_17/media/image.png"  class="common_img" style="width:300px;" ></div>

### 3.17.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_17/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

- Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM-offline**.

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image3.png"  class="common_img" style="width:800px;" ></div>

- Select **Output module** in the **Choose an Extension** interface to add **Fan module (black)**.

<div align="center"><img src="../_static/media/chapter_2/section_6/media/image2.png"  class="common_img" style="width:800px;" ></div>

#### (3) Core Blocks Analysis

|                            Block                             |                           Category                           | Function Description                                         |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image1.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Switch the working identification mode of the WonderLLM module. Three working modes are available: voice interaction, color recognition, and face recognition. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image3.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Under face recognition mode, detect if there is a face on the screen. A boolean value is returned for face presence judgment logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image1.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Control the specified fan port. Set the speed value within the range of 0 to 100 to adjust the fan speed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° block servo on the specified port to rotate smoothly to the target angle within a set duration. The program automatically delays and waits for the servo to complete the action. |

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_17/media/image4.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.17.7 Downloading the Program

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:600px;" ></div>

### 3.17.8 Project Extensions

In the absence of a detected face, the fan sweeps back and forth at low speed. Once a face enters the near-distance detection zone, the sweeping motion stops and the fan switches to high-speed direct airflow.

### 3.17.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com

## 3.18 Bubble Maker

### 3.18.1 Introduction

This bubble maker features voice-controlled bubble-blowing capabilities. Spoken commands activate the servo and fan to automatically disperse bubbles, instantly creating a playful atmosphere with a single phrase.

<div align="center"><img src="../_static/media/chapter_3/section_18/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.18.2 Learning Objectives

1. Master utilizing WonderLLM voice control features to regulate the start, stop, and operational modes of the bubble maker.
2. Learn to program the ESP32 controller to drive a 270° block servo and a fan module, completing an engaging voice-controlled bubble-blowing project.

### 3.18.3 Assembly Guide

 <iframe
    src="../_static/pdf/18_Bubble_Maker.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.18.4 Mode Switching

This build requires the **online large model**. If the online large model mode has already been entered, skip this step and proceed directly to the wiring guide. Otherwise, refer to [4.4.10 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#firmware-update) to flash the corresponding firmware.

### 3.18.5 Wiring Guide

Connect the fan module cable to port 5 of the ESP32 controller.

Connect the WonderLLM module cable to port 1 of the ESP32 controller.

Connect the 270° block servo cable to port S1 of the ESP32 controller and ensure the orange wire of the servo aligns with the white pin of S1.

The wiring configuration is shown below:

<div align="center"><img src="../_static/media/chapter_3/section_17/media/image1.png"  class="common_img" style="width:500px;" ></div>

> [!NOTE]
>
> **When using the 270° block servo for the first time, remove the gear and its attached building blocks from the 270° block servo first. Upload the following 270° block servo reset program to the ESP32 controller. Reassemble the building blocks afterwards and upload the program of this lesson to the ESP32 controller. Wait for the 270° block servo to rotate to the initial position of 135°. This step can be skipped if the servo reset program has been executed previously.**

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image0.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_18/media/image.png"  class="common_img" style="width:300px;" ></div>

### 3.18.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_18/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

- Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM**.

<div align="center"><img src="../_static/media/chapter_3/section_3/media/image3.png"  class="common_img" style="width:800px;" ></div>

- Select **Output module** in the **Choose an Extension** interface to add **Fan module (black)**.

<div align="center"><img src="../_static/media/chapter_2/section_6/media/image2.png"  class="common_img" style="width:800px;" ></div>

#### (3) Core Blocks Analysis

|                            Block                             |                           Category                           | Function Description                                         |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image2.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Send customized text information to the WonderLLM large model. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image6.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Configure MCP tool call parameters, customize the tool name, description, execution instruction, and return parameters, and set tool call blocking and data return rules. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image1.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Turn the MCP switch on or off to control whether WonderLLM enables the custom tool calling capability. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image5.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the returned result data after the MCP tool execution is completed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Control the dialogue message output mode. This block can send action end identifiers, and turn on or off the dialogue content print output. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image1.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Control the specified fan port. Set the speed value within the range of 0 to 100 to adjust the fan speed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° block servo on the specified port to rotate smoothly to the target angle within a set duration. The program automatically delays and waits for the servo to complete the action. |

#### (4) MCP Parameter Configuration

**Tool Name:** `self.robot.setAction`

1. **Tool Description:** You are a machine that makes foam. It blows out bubbles through the fan module. The parameters are as follows: switch: 0 or 1. Return 1 when opening and 0 when closing.
2. **Instruction Name:** `setAction`
3. **Return Parameters:** `[["action","int","0","0","1"]]` **Note that the first 0 is the default value, the second 0 is the minimum value, and 1 is the maximum value.**
4. **Block until call completed:** Yes
5. **Return data:** No
6. **Function:** This MCP configuration defines the bubble machine control tool for the WonderLLM module. It allows WonderLLM to issue 0 to 1 switch commands to control the start and stop of the bubble machine. During the call, the program blocks to wait for the bubble blowing action to complete, and there is no need to send running data back to WonderLLM.

#### (5) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_18/media/image4.png"  class="common_img" style="width:1000px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_18/media/image5.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.18.7 Downloading the Program

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:600px;" ></div>

### 3.18.8 Project Extensions

Activating the bubble-blowing sequence via voice command triggers the controller's onboard RGB LEDs to enter a running water light pattern. Upon receiving a stop command, the fan and servo cease operation, and the RGB LEDs turn off synchronously.

### 3.18.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com

## 3.19 Smart Cooler

### 3.19.1 Introduction

This smart cooling device features voice-controlled temperature regulation. Spoken commands like "Turn on the fan" lower the fan assembly to start blowing air, while "Turn off the fan" automatically stops and retracts the mechanism, serving as an intuitive cooling assistant.

<div align="center"><img src="../_static/media/chapter_3/section_19/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.19.2 Learning Objectives

1. Develop proficiency in using WonderLLM voice interaction features to control the fan's start, stop, and positional angles.
2. Learn to program the ESP32 controller to drive a 270° block servo and a fan module, completing a voice-controlled smart cooling project.

### 3.19.3 Assembly Guide

 <iframe
    src="../_static/pdf/19_Smart_Cooler.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.19.4 Mode Switching

This build requires the **offline voice interaction**. If the offline voice interaction mode has already been entered, skip this step and proceed directly to the wiring guide. Otherwise, refer to [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) to flash the corresponding firmware.

### 3.19.5 Wiring Guide

Connect the fan module cable to port 5 of the ESP32 controller.

Connect the WonderLLM module cable to port 1 of the ESP32 controller.

Connect the 270° block servo cable to port S1 of the ESP32 controller and ensure the orange wire of the servo aligns with the white pin of S1.

The wiring configuration is shown below:

<div align="center"><img src="../_static/media/chapter_3/section_17/media/image1.png"  class="common_img" style="width:500px;" ></div>

> [!NOTE]
>
> **When using the 270° block servo for the first time, remove the gear and its attached building blocks from the 270° block servo first. Upload the following 270° block servo reset program to the ESP32 controller. Reassemble the building blocks afterwards and upload the program of this lesson to the ESP32 controller. Wait for the 270° block servo to rotate to the initial position of 130 degrees. This step can be skipped if the servo reset program has been executed previously.**

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image0.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_19/media/image.png"  class="common_img" style="width:300px;" ></div>

### 3.19.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_19/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

- Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM-offline**.

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image3.png"  class="common_img" style="width:800px;" ></div>

- Select **Output module** in the **Choose an Extension** interface to add **Fan module (black)**.

<div align="center"><img src="../_static/media/chapter_2/section_6/media/image2.png"  class="common_img" style="width:800px;" ></div>

#### (3) Core Blocks Analysis

|                            Block                             |                           Category                           | Function Description                                         |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image1.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Switch the working identification mode of the WonderLLM module. Three working modes are available: voice interaction, color recognition, and face recognition. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image7.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Under voice interaction mode, read the recognized voice text content from the module for subsequent judgment and interaction logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image1.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Control the specified fan port. Set the speed value within the range of 0 to 100 to adjust the fan speed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° block servo on the specified port to rotate smoothly to the target angle within a set duration. The program automatically delays and waits for the servo to complete the action. |

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_19/media/image4.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.19.7 Downloading the Program

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:600px;" ></div>

### 3.19.8 Project Extensions

Issuing the voice command "Turn on the fan" lowers the fan and initiates medium-speed airflow by default. The commands "Speed Up" and "Slow Down" adjust the fan to high-speed and low-speed blowing, respectively. Issuing the command "Turn off the fan" automatically stops the fan, raising and retracting the mechanism.

### 3.19.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com

## 3.20 Ski Star

### 3.20.1 Introduction

This skiing figure features voice-controlled motion capabilities. Spoken commands activate the motor to drive the figure in a sliding motion or stop it in place, fully simulating a real skiing experience.

<div align="center"><img src="../_static/media/chapter_3/section_20/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.20.2 Learning Objectives

1. Develop proficiency in using WonderLLM voice interaction features to control the starting and stopping of the 360° block motor, simulating skiing movements.
2. Learn to program the ESP32 controller to drive the 360° block motor, constructing an engaging voice-controlled motion simulation model.

### 3.20.3 Assembly Guide

 <iframe
    src="../_static/pdf/20_Ski_Star.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.20.4 Mode Switching

This build requires the **offline voice interaction**. If the offline voice interaction mode has already been entered, skip this step and proceed directly to the wiring guide. Otherwise, refer to [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) to flash the corresponding firmware.

### 3.20.5 Wiring Guide

Connect the WonderLLM module cable to port 1 of the ESP32 controller.

Connect the 360° block servo cable to port S1 of the ESP32 controller and ensure the orange wire of the servo aligns with the white pin of S1.

The wiring configuration is shown below:

<div align="center"><img src="../_static/media/chapter_3/section_5/media/image1.png"  class="common_img" style="width:500px;" ></div>

### 3.20.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_20/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM-offline**.

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image3.png"  class="common_img" style="width:800px;" ></div>

#### (3) Core Blocks Analysis

|                            Block                             |                           Category                           | Function Description                                         |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image1.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Switch the working identification mode of the WonderLLM module. Three working modes are available: voice interaction, color recognition, and face recognition. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image7.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Under voice interaction mode, read the recognized voice text content from the module for subsequent judgment and interaction logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° block servo on the specified port to rotate continuously at the customized speed. |

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_20/media/image4.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.20.7 Downloading the Program

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:600px;" ></div>

### 3.20.8 Project Extensions

Issuing the voice command "Go forward" drives the figure forward at medium speed by default. Spoken commands like "Speed Up" and "Slow Down" adjust the speed to high and low levels, respectively. Issuing a stop command immediately halts all forward movement.

### 3.20.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com

## 3.21 Vision Tracking Car

### 3.21.1 Introduction

This smart robotic car features color-based vision tracking capabilities. Once the vision recognition system locks onto a colored ball, the car automatically navigates left and right to follow it, precisely maintaining target lock to track and move forward.

<div align="center"><img src="../_static/media/chapter_3/section_21/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.21.2 Learning Objectives

1. Master utilizing the WonderLLM color tracking feature to implement automated tracking and navigation control for the car.
2. Learn to program the ESP32 controller to coordinate dual block servos with dot matrix display feedback, completing an interactive vision-tracking car project.

### 3.21.3 Assembly Guide

 <iframe
    src="../_static/pdf/21_Vision_Tracking_Car.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.21.4 Mode Switching

This build requires the **offline vision function**. If the offline vision function mode has already been entered, skip this step and proceed directly to the wiring guide. Otherwise, refer to [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) to flash the corresponding firmware.

### 3.21.5 Wiring Guide

Connect the WonderLLM module cable to port 1 of the ESP32 controller.

Connect the left 360° block servo cable to port S1 of the ESP32 controller and ensure the orange wire of the servo aligns with the white pin of S1.

Connect the right 360° block servo cable to port S2 of the ESP32 controller and ensure the orange wire of the servo aligns with the white pin of S2.

The wiring configuration is shown below:

<div align="center"><img src="../_static/media/chapter_3/section_21/media/image1.png"  class="common_img" style="width:500px;" ></div>

### 3.21.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_21/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM-offline**.

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image3.png"  class="common_img" style="width:800px;" ></div>

#### (3) Core Blocks Analysis

|                            Block                             |                           Category                           | Function Description                                         |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image1.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Switch the working identification mode of the WonderLLM module. Three working modes are available: voice interaction, color recognition, and face recognition. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image6.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Under color recognition mode, read the ID corresponding to the color with the largest area in the screen. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image12.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Under color recognition mode, read screen pixel parameters such as the coordinates and size of the specified color block for color block positioning calculation. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° block servo on the specified port to rotate continuously at the customized speed. |

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_21/media/image4.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.21.7 Downloading the Program

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:600px;" ></div>

### 3.21.8 Project Extensions

When the target color is far away, the car accelerates to close the distance, and then transitions to a steady low-speed cruise once the target is at a moderate distance. As the target moves very close, the car fine-tunes its heading in place without moving forward. If the target leaves the field of view entirely, the car automatically turns right to search, resuming tracking immediately once the target is re-acquired.

### 3.21.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com

## 3.22 Color Sorter

### 3.22.1 Introduction

This color sorting system features automated color categorization capabilities. The vision recognition system distinguishes the colors of approaching objects, and the servo automatically moves the sorting mechanism to separate orange and black items to the left and right sides, respectively.

<div align="center"><img src="../_static/media/chapter_3/section_22/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.22.2 Learning Objectives

1. Master utilizing the WonderLLM color recognition feature to implement dual-channel control of 270° block servos, completing automated object sorting.
2. Learn to program the ESP32 controller to drive dual block servos, achieving automated left-and-right sorting based on vision detection results.

### 3.22.3 Assembly Guide

 <iframe
    src="../_static/pdf/22_Color_Sorter.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.22.4 Mode Switching

This build requires the **offline vision function**. If the offline vision function mode has already been entered, skip this step and proceed directly to the wiring guide. Otherwise, refer to [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) to flash the corresponding firmware.

### 3.22.5 Wiring Guide

Connect the WonderLLM module cable to port 1 of the ESP32 controller.

Connect the 270° block servo cable that controls the guard plate to port S1 of the ESP32 controller and ensure the orange wire of the servo aligns with the white pin of S1.

Connect the 270° block servo cable that controls the sorting to port S2 of the ESP32 controller and ensure the orange wire of the servo aligns with the white pin of S2.

The wiring configuration is shown below:

<div align="center"><img src="../_static/media/chapter_3/section_22/media/image1.png"  class="common_img" style="width:500px;" ></div>

> [!NOTE]
>
> **When using the 270° block servo for the first time, remove the gear and its attached building blocks from the 270° block servo first. Upload the following 270° block servo reset program to the ESP32 controller. Reassemble the building blocks afterwards and upload the program of this lesson to the ESP32 controller. Wait for the 270° block servo to rotate to the initial position of 135°. At this point, the guard plate should block and the sorter should be in the middle position. This step can be skipped if the servo reset program has been executed previously.**

<div align="center"><img src="../_static/media/chapter_3/section_22/media/image0.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_22/media/image01.png"  class="common_img" style="width:300px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_22/media/image02.png"  class="common_img" style="width:300px;" ></div>

### 3.22.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_22/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM-offline**.

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image3.png"  class="common_img" style="width:800px;" ></div>

#### (3) Core Blocks Analysis

|                            Block                             |                           Category                           | Function Description                                         |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image1.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Switch the working identification mode of the WonderLLM module. Three working modes are available: voice interaction, color recognition, and face recognition. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image6.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Under color recognition mode, read the id corresponding to the color with the largest area in the screen. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° block servo on the specified port to rotate smoothly to the target angle within a set duration. The program automatically delays and waits for the servo to complete the action. |

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_22/media/image4.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.22.7 Downloading the Program

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:600px;" ></div>

### 3.22.8 Project Extensions

Orange items are sorted to the left and black items to the right. After each sorting cycle, the mechanism automatically resets to wait for the next object. Upon continuously sorting 5 items, the system automatically pauses and waits for the voice command "Turn on color recognition" to resume the process.

### 3.22.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com

## 3.23 Smart Helper Bot

### 3.23.1 Introduction

This smart helper robot features voice-controlled mobility and visual interaction. Vocal commands control the car's movements in all directions, while the dot matrix display provides real-time text feedback, creating an intuitive smart interactive assistant.

<div align="center"><img src="../_static/media/chapter_3/section_23/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.23.2 Learning Objectives

1. Master utilizing the WonderLLM voice control features to control all-directional movement of the robot car alongside dot matrix display feedback.
2. Learn to program the ESP32 controller to coordinate dual block servos with a dot matrix display, constructing a voice-controlled helper robot car project.

### 3.23.3 Assembly Guide

 <iframe
    src="../_static/pdf/23_Smart_Helper_Bot.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.23.4 Mode Switching

This build requires the **offline voice interaction**. If the offline voice interaction mode has already been entered, skip this step and proceed directly to the wiring guide. Otherwise, refer to [4.5.1 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#id37) to flash the corresponding firmware.

### 3.23.5 Wiring Guide

Connect the dot matrix module cable to port 5 of the ESP32 controller.

Connect the WonderLLM module cable to port 4 of the ESP32 controller.

Connect the left 360° block servo cable to port S1 of the ESP32 controller and ensure the orange wire of the servo aligns with the white pin of S1.

Connect the right 360° block servo cable to port S2 of the ESP32 controller and ensure the orange wire of the servo aligns with the white pin of S2.

The wiring configuration is shown below:

<div align="center"><img src="../_static/media/chapter_3/section_23/media/image1.png"  class="common_img" style="width:500px;" ></div>

### 3.23.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_23/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

- Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM-offline**.

<div align="center"><img src="../_static/media/chapter_3/section_1/media/image3.png"  class="common_img" style="width:800px;" ></div>

- Select **Output module** in the **Choose an Extension** interface to add **Dot matrix module**.

<div align="center"><img src="../_static/media/chapter_2/section_5/media/image2.png"  class="common_img" style="width:800px;" ></div>

#### (3) Core Blocks Analysis

|                            Block                             |                           Category                           | Function Description                                         |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image1.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Switch the working identification mode of the WonderLLM module. Three working modes are available: voice interaction, color recognition, and face recognition. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_8/image7.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Under voice interaction mode, read the recognized voice text content from the module for subsequent judgment and interaction logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image4.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Output and display custom text content at the specified x and y coordinates on the dot matrix screen. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image6.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Control the dot matrix screen to load and display preset patterns with customizable switching of various graphics and symbol screens. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° block servo on the specified port to rotate continuously at the customized speed. |

#### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_23/media/image4.png"  class="common_img" style="width:400px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.23.7 Downloading the Program

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:600px;" ></div>

### 3.23.8 Project Extensions

Saying "Hello" keeps the car stationary while the dot matrix display shows **Hi.** When movement commands like forward, backward, left, or right are issued, the car moves accordingly and the display dynamically switches to show the corresponding direction word.

### 3.23.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com

## 3.24 Kinetic Wings

### 3.24.1 Introduction

This set of Kinetic Wings features voice-controlled wing-flapping capabilities. Vocal commands engage the motor to drive the wings through three distinct speed levels, vividly simulating the graceful motion of a bird spreading its wings to fly.

<div align="center"><img src="../_static/media/chapter_3/section_24/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.24.2 Learning Objectives

1. Master utilizing WonderLLM voice control features to implement three-level speed regulation for a 360° block motor.
2. Learn to program the ESP32 controller to drive the 360° block motor, building a voice-controlled kinetic wings model with three adjustable speed levels.

### 3.24.3 Assembly Guide

 <iframe
    src="../_static/pdf/24_Kinetic_Wings.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.24.4 Mode Switching

This build requires the **online large model**. If the online large model mode has already been entered, skip this step and proceed directly to the wiring guide. Otherwise, refer to [4.4.10 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#firmware-update) to flash the corresponding firmware.

### 3.24.5 Wiring Guide

Connect the WonderLLM module cable to port 1 of the ESP32 controller.

Connect the 360° block servo cable to port S1 of the ESP32 controller and ensure the orange wire of the servo aligns with the white pin of S1.

The wiring configuration is shown below:

<div align="center"><img src="../_static/media/chapter_3/section_5/media/image1.png"  class="common_img" style="width:500px;" ></div>

### 3.24.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_24/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM**.

<div align="center"><img src="../_static/media/chapter_3/section_3/media/image3.png"  class="common_img" style="width:800px;" ></div>

#### (3) Core Blocks Analysis

|                            Block                             |                           Category                           | Function Description                                         |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image2.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Send customized text information to the WonderLLM large model. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image6.png" > | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Configure mcp tool call parameters, customize the tool name, description, execution instruction, and return parameters, and set tool call blocking and data return rules. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image1.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Turn the mcp switch on or off to control whether WonderLLM enables the custom tool calling capability. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image5.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the returned result data after the mcp tool execution is completed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Control the dialogue message output mode. This block can send action end identifiers, and turn on or off the dialogue content print output. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° block servo on the specified port to rotate continuously at the customized speed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image9.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Boolean logical judgment. It performs true or false determination or negation operations on input conditions. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image10.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Custom entry or calling of text content to generate string data that can participate in splicing, judgment, or display. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image12.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Determine whether a specified element exists in an array, tuple, or dictionary, and return a boolean result. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image13.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Extract the corresponding stored numeric value or text content from a dictionary based on the specified key name. |

#### (4) MCP Parameter Configuration

**Tool Name:** `self.robot.setSpeed`

1. **Tool Description:** Set the speed of wing flapping. Main parameters: Speed: Range 0 to 3, also known as gear.
2. **Instruction Name:** `setSpeed`
3. **Return Parameters:** `[["speed","int","0","0","3"]]` **Note that the first 0 is the default value, the second 0 is the minimum value, and 3 is the maximum value.**
4. **Block until call completed:** Yes
5. **Return data:** No
6. **Function:** This MCP configuration defines the wing flapping speed adjustment tool for the WonderLLM module. It allows WonderLLM to issue commands from gear 0 to 3 to adjust the wing flapping speed. During the call, the program blocks to wait for the speed switching to complete, and there is no need to send running data back to WonderLLM.

#### (5) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_24/media/image4.png"  class="common_img" style="width:1000px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_24/media/image5.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).

### 3.24.7 Downloading the Program

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:600px;" ></div>

### 3.24.8 Project Extensions

Voice commands can activate an automatic loop mode where the wings flap through low, medium, and high speeds sequentially. A single voice command can lock the system into a specific speed level for continuous flapping, and a stop command resets the wings to a stationary, folded position.

### 3.24.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com

## 3.25 Smart Weather Bot

### 3.25.1 Introduction

This smart weather robot features environmental sensing capabilities. The large AI model coordinates with sensors to collect environmental data, while the dot matrix display dynamically shows real-time temperature and humidity, making it easy to monitor indoor environmental conditions.

<div align="center"><img src="../_static/media/chapter_3/section_25/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.25.2 Learning Objectives

1. Understand the components of the smart weather robot and master the integration of temperature/humidity sensors, dot matrix displays, and large AI model commands.
2. Learn to switch display modes via large AI model commands, achieving real-time visual feedback of environmental data.

### 3.25.3 Assembly Guide

 <iframe
    src="../_static/pdf/25_Smart_Weather_Bot.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.25.4 Mode Switching

This model requires the **online large model**. If the online large model mode has already been entered, this step can be skipped to proceed directly to the wiring guide. Otherwise, refer to [4.4.10 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#firmware-update) to re-flash the corresponding firmware.

### 3.25.5 Wiring Guide

Connect the dot matrix module cable to port 6 of the ESP32 controller.

Connect the temperature and humidity sensor cable to port 1 of the ESP32 controller.

Connect the WonderLLM module cable to port 2 of the ESP32 controller.

Connect the 270° block servo cable to port S1 of the ESP32 controller, and insert the orange servo wire into the white pin of S1.

As shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_25/media/image1.png"  class="common_img" style="width:500px;" ></div>

> [!NOTE]
>
> **When conducting a lesson related to the 270° block servo for the first time, remove the gear and its attached building blocks from the 270° servo first, and then upload the following 270° servo reset program to the ESP32 controller. Next, remount the building blocks that were removed, upload the program for this lesson to the ESP32, and wait for the 270° block servo to rotate to its initial position at 135°. This step can be skipped if the servo reset program has been executed previously.**

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image0.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_25/media/image.png"  class="common_img" style="width:300px;" ></div>

### 3.25.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_25/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

- Select **Sensor** in the **Choose an Extension** interface to add **Temperature and humidity sensor** and **WonderLLM**.

<div align="center"><img src="../_static/media/chapter_3/section_25/media/image3.png"  class="common_img" style="width:800px;" ></div>

- Select **Output module** in the **Choose an Extension** interface to add **Dot matrix module**.

<div align="center"><img src="../_static/media/chapter_2/section_5/media/image2.png"  class="common_img" style="width:800px;" ></div>

#### (3) Core Blocks Analysis

| Block | Category | Function Description |
| :---: | :---: | :--- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image2.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Send custom text messages to the WonderLLM large model. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image6.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Configure MCP tool calling parameters, customize the tool name, description, execution command, and return parameters, and set calling blocking and data return rules. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image1.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Turn on or off the mcp switch to control whether WonderLLM enables the custom tool calling capability. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image5.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the result data returned after the execution of the mcp tool is completed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Control the conversation message output mode, which can send the action end identifier, and turn on or off the printing output of conversation content. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_6/image9.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the ambient temperature or humidity value collected by the temperature and humidity sensor at the corresponding port. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image3.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Control the dot matrix screen to output and display a specified number, with real-time screen value refreshing. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image6.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Control the dot matrix screen to load and display preset patterns, allowing custom switching of various graphics and symbol screens. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image2.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Adjust the backlight brightness of the dot matrix screen, with a brightness range of 1 to 8, where a larger value indicates a brighter screen. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° servo of a specified port to rotate smoothly to the target angle within a set duration, with an automatic delay to wait for the servo to complete the action. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image9.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Perform boolean logical judgments, evaluating input conditions for true/false states or applying negation operations. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image10.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Customize the entry or invocation of text content to generate string data for concatenation, judgment, and display. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image12.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Determine whether a specified element exists in an array, tuple, or dictionary, returning a boolean result. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image13.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Extract the corresponding stored value or text content from a dictionary based on a specified key name. |

#### (4) MCP Parameter Configuration

​	**Tool Name: `self.robot.getTemAndHum`**

​	1. Tool Description: You are a temperature and humidity measuring instrument, equipped with a temperature and humidity sensor and a dot matrix module. You can switch between temperature display and humidity display in the dot matrix module. Main parameters: Display temperature and humidity: Display temperature returns 1, display humidity returns 2.


​	2. Command Name: `getTemAndHum`

​	3. **Return Parameters:** `[["display","int","0","0","2"]]` **Note that the first 0 is the default value, the second 0 is the minimum value, and 2 is the maximum value.**

​	4. Block until completion: Yes

​	5. Return data: No

​	6. Function: This MCP configuration defines a temperature and humidity display control tool for the WonderLLM module. It allows WonderLLM to issue 0 to 2 display level commands to switch the temperature and humidity display status of the dot matrix module. The program blocks during the call to wait for the display switch to finish, and no operational data needs to be returned to WonderLLM.

#### (5) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_25/media/image4.png"  class="common_img" style="width:1000px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_25/media/image5.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).


### 3.25.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.25.8 Project Extensions

After voice-retrieving the temperature and humidity data, the dot matrix display switches expressions based on the environment values: showing a smiley face when conditions are comfortable, and displaying a sad face if the temperature or humidity becomes too high.

### 3.25.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com

## 3.26 Smart Avoidance Car

### 3.26.1 Introduction

This multifunctional robot car features three distinct features integrated into a single vehicle. It can track lines along a black path, automatically navigate around obstacles, and turn freely in response to voice commands, offering a rich and diverse learning experience.

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.26.2 Learning Objectives

1. Understand the 4-channel line follower sensor, glowy ultrasonic sensor, 360° block motor, 270° block servo, and WonderLLM module, mastering coordinated control of multiple sensors and actuators.
2. Comprehend the control logic behind line tracking, ultrasonic obstacle avoidance, and voice control, programming conditional statements to switch between different features.

### 3.26.3 Assembly Guide

 <iframe
    src="../_static/pdf/26_Smart_Avoidance_Car.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.26.4 Mode Switching

This model requires the **online large model**. If the online large model mode has already been entered, this step can be skipped to proceed directly to the wiring guide. Otherwise, refer to [4.4.10 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#firmware-update) to re-flash the corresponding firmware.

### 3.26.5 Wiring Guide

Connect the glow ultrasonic sensor cable to port 2 of the controller.

Connect the 4-channel line follower sensor cable to port 3 of the ESP32 controller.

Connect the WonderLLM module cable to port 1 of the ESP32 controller.

Connect the left 360° block servo cable to port S1 of the controller, and insert the orange servo wire into the white pin of S1.

Connect the right 360° block servo cable to port S2 of the controller, and insert the orange servo wire into the white pin of S2.

Connect the 270° block servo cable to port S3 of the ESP32 controller, and insert the orange servo wire into the white pin of S3.

As shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image1.png"  class="common_img" style="width:600px;" ></div>

> [!NOTE]
>
> **When conducting a lesson related to the 270° block servo for the first time, remove the gear and its attached building blocks from the 270° servo first, and then upload the following 270° servo reset program to the ESP32 controller. Next, remount the building blocks that were removed, upload the program for this lesson to the ESP32, and wait for the 270° block servo to rotate to its initial position at 135°, making the glow ultrasonic sensor face directly forward. This step can be skipped if the servo reset program has been executed previously.**

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image0.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image.png"  class="common_img" style="width:300px;" ></div>

### 3.26.6 Programming

#### 1. Mode 1 Line Following Cruise

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image100.gif"  class="common_img" style="width:600px;" ></div>

##### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image4_0.png"  class="common_img" style="width:300px;" ></div>

##### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **4-channel line follower sensor**.

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image4.png"  class="common_img" style="width:800px;" ></div>

##### (3) Core Blocks Analysis

| Block | Category | Function Description |
| :---: | :---: | :--- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° servo of a specified port to rotate continuously at a set custom speed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image13.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Immediately terminate the rotation of the 360° servo at the specified port, bringing the servo to a stop. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_6/image12.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the black and white ground detection status of the corresponding channel of the 4-channel line follower sensor, returning a boolean value to judge whether the current channel has detected the black line. |

##### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image4_1.png"  class="common_img" style="width:700px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).


#### 2. Mode 2 Scanning Obstacle Avoidance

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image101.gif"  class="common_img" style="width:600px;" ></div>

##### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image5_0.png"  class="common_img" style="width:300px;" ></div>

##### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **Glowy ultrasonic sensor** and **4-channel line follower sensor**.

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image5.png"  class="common_img" style="width:800px;" ></div>

##### (3) Core Blocks Analysis

| Block | Category | Function Description |
| :---: | :---: | :--- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° servo of a specified port to rotate continuously at a set custom speed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_6/image12.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the black and white ground detection status of the corresponding channel of the 4-channel line follower sensor, returning a boolean value to judge whether the current channel has detected the black line. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_6/image11.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the black and white ground detection status of a single channel of the 4-channel line follower sensor, returning a boolean value to judge whether the corresponding channel has detected the black line. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_6/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Get the obstacle distance data measured by the ultrasonic sensor in centimeters. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_4/image2.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_4/image.png"> | Create a custom function block to encapsulate a segment of reusable program logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_4/image3.png" style="width:100px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_4/image.png"> | Call the defined custom function to execute all program logic encapsulated inside it. |

##### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image5_1.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image5_2.png"  class="common_img" style="width:700px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).


#### 3. Mode 3 Voice Controlled Movement

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image102.gif"  class="common_img" style="width:600px;" ></div>

##### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image6_0.png"  class="common_img" style="width:300px;" ></div>

##### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM**.

<div align="center"><img src="../_static/media/chapter_3/section_3/media/image3.png"  class="common_img" style="width:800px;" ></div>

##### (3) Core Blocks Analysis

| Block | Category | Function Description |
| :---: | :---: | :--- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png" style="width:500px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° servo of a specified port to rotate smoothly to the target angle within a set duration, with an automatic delay to wait for the servo to complete the action. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° servo of a specified port to rotate continuously at a set custom speed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image2.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Send custom text messages to the WonderLLM large model. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image6.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Configure mcp tool calling parameters, customize the tool name, description, execution command, and return parameters, and set calling blocking and data return rules. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image1.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Turn on or off the mcp switch to control whether WonderLLM enables the custom tool calling capability. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image5.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the result data returned after the execution of the mcp tool is completed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Control the conversation message output mode, which can send the action end identifier, and turn on or off the printing output of conversation content. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image9.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Perform boolean logical judgments, evaluating input conditions for true/false states or applying negation operations. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image10.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Customize the entry or invocation of text content to generate string data for concatenation, judgment, and display. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image12.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Determine whether a specified element exists in an array, tuple, or dictionary, returning a boolean result. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image13.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Extract the corresponding stored value or text content from a dictionary based on a specified key name. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_4/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_4/image.png"> | Create a custom function block and set the function name and incoming parameters of number or text type to encapsulate and reuse a segment of program logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_4/image5.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_4/image.png"> | Provide number or text parameter inputs for the custom function to be called by the program inside the function. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_4/image6.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_4/image.png"> | Call the defined custom function block to execute all program code encapsulated inside that function. |

##### (4) MCP Parameter Configuration

​	**Tool Name: `self.robot.setMove`**

​		1. Tool Description: You are a moving vehicle that can move forward, backward, turn left and turn right. Parameter description: 1. Movement mode: forward is 1, backward is 2, left turn is 3, right turn is 4; 2. Movement time: in milliseconds, the default value is 2 seconds.


​		2. Command Name: `setMove`

​		3. **Return Parameters:** `[["move","string"],["time","int","2000","0","10000"],["direction","int","0","0","4"]]` **Note that the field name move is a string type. The field name time is an integer type, with a default value of 2000, a minimum value of 0, and a maximum value of 10000. The field name direction is an integer type, where the first 0 is the default value, the second 0 is the minimum value, and 4 is the maximum value.**

​		4. Block until completion: Yes

​		5. Return data: No

​		6. Function: This MCP configuration defines a vehicle movement control tool for the WonderLLM module. It allows WonderLLM to issue 0 to 4 direction level commands and 0 to 10000 millisecond duration commands to control the vehicle to move forward, backward, turn left, and turn right. The program blocks during the call to wait for the complete movement action to finish, and no operational data needs to be returned to WonderLLM.

##### (5) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image6_1.png"  class="common_img" style="width:1000px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image6_2.png"  class="common_img" style="width:600px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image6_3.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).


### 3.26.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.26.8 Project Extensions

Upon receiving the voice command "Line following mode," the car tracks the black line. When switched to "Obstacle avoidance mode," it navigates freely without a path while the 270° servo continuously sweeps the ultrasonic sensor to scan for obstacles. In "Voice control mode," the car responds to directional steering commands, allowing switching between all three modes entirely via voice.

### 3.26.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com

## 3.27 Iron Clawbot

### 3.27.1 Introduction

This dual-mode robotic vehicle features voice-controlled mobility and smart obstacle avoidance. It supports spoken commands for forward, backward, and steering movements, and utilizes an ultrasonic sensor for navigation. The sensor's LEDs shine green when the path is clear, and switch to a red warning flash as the vehicle maneuvers around detected obstacles.

<div align="center"><img src="../_static/media/chapter_3/section_27/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.27.2 Learning Objectives

1. Understand the 4-channel line follower sensor, ultrasonic sensor, 360° block motor, 270° block servo, and WonderLLM module, mastering the integration of multiple sensors and actuators.
2. Comprehend the operational logic of line tracking and automated obstacle-avoidance grabbing, learning to control the robot car through different programming methods.

### 3.27.3 Assembly Guide

 <iframe
    src="../_static/pdf/27_Iron_Clawbot.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.27.4 Mode Switching

This model requires the **online large model**. If the online large model mode has already been entered, this step can be skipped to proceed directly to the wiring guide. Otherwise, refer to [4.4.10 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#firmware-update) to re-flash the corresponding firmware.

### 3.27.5 Wiring Guide

Connect the dot matrix module cable to port 5 of the ESP32 controller.

Connect the 4-channel line follower sensor cable to port 2 of the ESP32 controller.

Connect the glow ultrasonic sensor cable to port 3 of the ESP32 controller.

Connect the WonderLLM module cable to port 1 of the ESP32 controller.

Connect the left 360° block servo cable to port S1 of the controller, and insert the orange servo wire into the white pin of S1.

Connect the right 360° block servo cable to port S2 of the controller, and insert the orange servo wire into the white pin of S2.

Connect the 270° block servo cable to port S3 of the ESP32 controller, and insert the orange servo wire into the white pin of S3.

As shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_27/media/image1.png"  class="common_img" style="width:500px;" ></div>

> [!NOTE]
>
> **When conducting a lesson related to the 270° block servo for the first time, remove the gear and its attached building blocks from the 270° servo first, and then upload the following 270° servo reset program to the ESP32 controller. Next, remount the building blocks that were removed, upload the program for this lesson to the ESP32, and wait for the 270° block servo to rotate to its initial position at 135°, making the mechanical claw open. This step can be skipped if the servo reset program has been executed previously.**

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image0.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_27/media/image.png"  class="common_img" style="width:300px;" ></div>

### 3.27.6 Programming

#### 1. Mode 1 Voice Controlled Movement

<div align="center"><img src="../_static/media/chapter_3/section_27/media/image100.gif"  class="common_img" style="width:600px;" ></div>

##### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image6_0.png"  class="common_img" style="width:300px;" ></div>

##### (2) Add Extension Libraries

- Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM**.

<div align="center"><img src="../_static/media/chapter_3/section_3/media/image3.png"  class="common_img" style="width:800px;" ></div>

- Select **Output module** in the **Choose an Extension** interface to add **Dot matrix module**.

<div align="center"><img src="../_static/media/chapter_2/section_5/media/image2.png"  class="common_img" style="width:800px;" ></div>

##### (3) Core Blocks Analysis

| Block | Category | Function Description |
| :---: | :---: | :--- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image2.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Send custom text messages to the WonderLLM large model. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image6.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Configure mcp tool calling parameters, customize the tool name, description, execution command, and return parameters, and set calling blocking and data return rules. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image1.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Turn on or off the mcp switch to control whether WonderLLM enables the custom tool calling capability. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image5.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the result data returned after the execution of the mcp tool is completed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Control the conversation message output mode, which can send the action end identifier, and turn on or off the printing output of conversation content. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image6.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Control the dot matrix screen to load and display preset patterns, allowing custom switching of various graphics and symbol screens. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° servo of a specified port to rotate smoothly to the target angle within a set duration, with an automatic delay to wait for the servo to complete the action. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° servo of a specified port to rotate continuously at a set custom speed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image9.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Perform boolean logical judgments, evaluating input conditions for true/false states or applying negation operations. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image10.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Customize the entry or invocation of text content to generate string data for concatenation, judgment, and display. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image12.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Determine whether a specified element exists in an array, tuple, or dictionary, returning a boolean result. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image13.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Extract the corresponding stored value or text content from a dictionary based on a specified key name. |

##### (4) MCP Parameter Configuration

​	**Tool Name: `self.robot.setMove`**

​		1. Tool Description: You are a moving vehicle that can move forward, backward, turn left and turn right. Parameter description: 1. Movement mode: forward is 1, backward is 2, left turn is 3, right turn is 4; 2. Movement time: in milliseconds, the default value is 2 seconds.


​		2. Command Name: `setMove`

​		3. **Return Parameters:** `[["move","string"],["time","int","2000","0","10000"],["direction","int","0","0","4"]]` **Note that the field name move is a string type. The field name time is an integer type, with a default value of 2000, a minimum value of 0, and a maximum value of 10000. The field name direction is an integer type, where the first 0 is the default value, the second 0 is the minimum value, and 4 is the maximum value.**

​		4. Block until completion: Yes

​		5. Return data: No

​		6. Function: This MCP configuration defines a vehicle movement control tool for the WonderLLM module. It allows WonderLLM to issue 0 to 4 direction level commands and 0 to 10000 millisecond duration commands to control the vehicle to move forward, backward, turn left, and turn right. The program blocks during the call to wait for the complete movement action to finish, and no operational data needs to be returned to WonderLLM.

##### (5) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_27/media/image4_1.png"  class="common_img" style="width:1000px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_27/media/image4_2.png"  class="common_img" style="width:500px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).


#### 2. Mode 2 Line Following and Object Grabbing

<div align="center"><img src="../_static/media/chapter_3/section_27/media/image101.gif"  class="common_img" style="width:600px;" ></div>

##### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_27/media/image5_0.png"  class="common_img" style="width:300px;" ></div>

##### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **Glowy ultrasonic sensor** and **4-channel line follower sensor**.

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image5.png"  class="common_img" style="width:800px;" ></div>

##### (3) Core Blocks Analysis

| Block | Category | Function Description |
| :---: | :---: | :--- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° servo of a specified port to rotate continuously at a set custom speed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° servo of a specified port to rotate smoothly to the target angle within a set duration, with an automatic delay to wait for the servo to complete the action. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_6/image12.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the black and white ground detection status of the corresponding channel of the 4-channel line follower sensor, returning a boolean value to judge whether the current channel has detected the black line. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_6/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Get the obstacle distance data measured by the ultrasonic sensor in centimeters. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_4/image2.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_4/image.png"> | Create a custom function block to encapsulate a segment of reusable program logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_4/image3.png" style="width:100px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_4/image.png"> | Call the defined custom function to execute all program logic encapsulated inside it. |

##### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_27/media/image5_1.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_27/media/image5_2.png"  class="common_img" style="width:700px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).


### 3.27.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.27.8 Project Extensions

During line following, the ultrasonic sensor automatically triggers the claw's grabbing sequence. The dot matrix display increments its count by 1 after each successful pickup and placement, showing **GOOD** once the target count of 5 is achieved.

### 3.27.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com

## 3.28 Tumble Dumper

### 3.28.1 Introduction

This dual-mode dumper vehicle features smart obstacle detection and voice-assisted transport. The vehicle halts automatically when the ultrasonic sensor detects an obstacle, allowing voice commands to steer the chassis. Once the path is clear, it automatically resumes line-tracking cruise along the black line.

<div align="center"><img src="../_static/media/chapter_3/section_28/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.28.2 Learning Objectives

1. Understand the 4-channel line follower sensor, glowy ultrasonic sensor, 360° block motor, 270° block servo, and WonderLLM module, mastering coordinated control of multiple sensors and actuators.
2. Comprehend the control principles behind ultrasonic obstacle avoidance alerts and voice-command transport, programming conditional statements to switch between different operational modes.

### 3.28.3 Assembly Guide

 <iframe
    src="../_static/pdf/28_Tumble_Dumper.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.28.4 Mode Switching

This model requires the **online large model**. If the online large model mode has already been entered, this step can be skipped to proceed directly to the wiring guide. Otherwise, refer to [4.4.10 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#firmware-update) to re-flash the corresponding firmware.

### 3.28.5 Wiring Guide

Connect the glow ultrasonic sensor cable to port 3 of the ESP32 controller.

Connect the 4-channel line follower sensor cable to port 4 of the ESP32 controller.

Connect the WonderLLM module cable to port 2 of the ESP32 controller.

Connect the 270° block servo cable to port S1 of the ESP32 controller, and insert the orange servo wire into the white pin of S1.

Connect the left 360° block servo cable to port S2 of the controller, and insert the orange servo wire into the white pin of S2.

Connect the right 360° block servo cable to port S3 of the controller, and insert the orange servo wire into the white pin of S3.

As shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_28/media/image1.png"  class="common_img" style="width:500px;" ></div>

> [!NOTE]
>
> **When conducting a lesson related to the 270° block servo for the first time, remove the gear and its attached building blocks from the 270° servo first, and then upload the following 270° servo reset program to the ESP32 controller. Next, remount the building blocks that were removed, upload the program for this lesson to the ESP32, and wait for the 270° block servo to rotate to its initial position at 135°, leaving the dumper device horizontal and not tilted. This step can be skipped if the servo reset program has been executed previously.**

<div align="center"><img src="../_static/media/chapter_3/section_4/media/image0.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_28/media/image.png"  class="common_img" style="width:300px;" ></div>

### 3.28.6 Programming

#### 1. Mode 1 Line Following Obstacle Avoidance Alert

<div align="center"><img src="../_static/media/chapter_3/section_28/media/image100.gif"  class="common_img" style="width:600px;" ></div>

##### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image5_0.png"  class="common_img" style="width:300px;" ></div>

##### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **Glowy ultrasonic sensor** and **4-channel line follower sensor**.

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image5.png"  class="common_img" style="width:800px;" ></div>

##### (3) Core Blocks Analysis

| Block | Category | Function Description |
| :---: | :---: | :--- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° servo of a specified port to rotate continuously at a set custom speed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image13.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Immediately terminate the rotation of the 360° servo at the specified port, bringing the servo to a stop. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image3.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Drive the buzzer to play music of the specified pitch and beat, without blocking subsequent program execution when running in background mode. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_6/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Get the obstacle distance data measured by the ultrasonic sensor in centimeters. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_6/image5.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Control the RGB lights on the glow ultrasonic module of a specified number, such as 1, 2, or all, to light up in the selected color. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_4/image2.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_4/image.png"> | Create a custom function block to encapsulate a segment of reusable program logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_4/image3.png" style="width:100px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_4/image.png"> | Call the defined custom function to execute all program logic encapsulated inside it. |

##### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_28/media/image4_1.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_28/media/image4_2.png"  class="common_img" style="width:700px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).


#### 2. Mode 2 Voice Controlled Transport

<div align="center"><img src="../_static/media/chapter_3/section_28/media/image101.gif"  class="common_img" style="width:600px;" ></div>

##### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_28/media/image5_0.png"  class="common_img" style="width:300px;" ></div>

##### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **Glowy ultrasonic sensor**, **4-channel line follower sensor**, and **WonderLLM**.

<div align="center"><img src="../_static/media/chapter_3/section_28/media/image5.png"  class="common_img" style="width:800px;" ></div>

##### (3) Core Blocks Analysis

| Block | Category | Function Description |
| :---: | :---: | :--- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° servo of a specified port to rotate smoothly to the target angle within a set duration, with an automatic delay to wait for the servo to complete the action. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° servo of a specified port to rotate continuously at a set custom speed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image13.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Immediately terminate the rotation of the 360° servo at the specified port, bringing the servo to a stop. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image2.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Send custom text messages to the WonderLLM large model. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image6.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Configure mcp tool calling parameters, customize the tool name, description, execution command, and return parameters, and set calling blocking and data return rules. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image1.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Turn on or off the mcp switch to control whether WonderLLM enables the custom tool calling capability. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image5.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the result data returned after the execution of the mcp tool is completed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Control the conversation message output mode, which can send the action end identifier, and turn on or off the printing output of conversation content. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_6/image12.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the black and white ground detection status of the corresponding channel of the 4-channel line follower sensor, returning a boolean value to judge whether the current channel has detected the black line. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_6/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Get the obstacle distance data measured by the ultrasonic sensor in centimeters. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image9.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Perform boolean logical judgments, evaluating input conditions for true/false states or applying negation operations. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image10.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Customize the entry or invocation of text content to generate string data for concatenation, judgment, and display. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image12.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Determine whether a specified element exists in an array, tuple, or dictionary, returning a boolean result. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image13.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Extract the corresponding stored value or text content from a dictionary based on a specified key name. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_4/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_4/image.png"> | Create a custom function block and set the function name and incoming parameters of number or text type to encapsulate and reuse a segment of program logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_4/image5.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_4/image.png"> | Provide number or text parameter inputs for the custom function to be called by the program inside the function. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_4/image6.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_4/image.png"> | Call the defined custom function block to execute all program code encapsulated inside that function. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_4/image2.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_4/image.png"> | Create a custom function block to encapsulate a segment of reusable program logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_4/image3.png" style="width:100px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_4/image.png"> | Call the defined custom function to execute all program logic encapsulated inside it. |

##### (4) MCP Parameter Configuration

​	**Tool Name: `self.robot.setRobot`**

​		1. Tool Description: You are a tricycle capable of transporting items. Parameter description: 1. Direction: return 1 if transporting to the left; return 2 if transporting to the right.


​		2. Command Name: `setRobot`

​		3. **Return Parameters:** `[["direction","int","0","0","2"]]` **Note that the field name direction is an integer type, where the first 0 is the default value, the second 0 is the minimum value, and 2 is the maximum value.**

​		4. Block until completion: Yes

​		5. Return data: No

​		6. Function: This MCP configuration defines a dump truck transport control tool for the WonderLLM module. It allows WonderLLM to issue 0 to 2 direction level commands to control the dump truck to transport items to the left or right. The program blocks during the call to wait for the transportation action to finish, and no operational data needs to be returned to WonderLLM.

##### (5) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_28/media/image5_1.png"  class="common_img" style="width:1000px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_28/media/image5_2.png"  class="common_img" style="width:500px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_28/media/image5_3.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_28/media/image5_4.png"  class="common_img" style="width:500px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).


### 3.28.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.28.8 Project Extensions

Spoken commands select left or right unloading modes as the vehicle travels along the line. Upon detecting a terminal obstacle, it halts and tilts the dumper bed to unload, resetting the bed automatically before continuing. Issuing the voice command "Circular Transport" enables continuous reciprocating transport and unloading, while the glowy ultrasonic sensor's LEDs shine solid green when clear and flash red to alert when blocked.

### 3.28.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com

## 3.29 Biped Bot

### 3.29.1 Introduction

This walking biped robot features environment-sensing capabilities. It supports voice commands for forward and backward movement with customizable durations, while the dot matrix display dynamically shows real-time temperature and humidity, combining walking mobility with environmental monitoring.

<div align="center"><img src="../_static/media/chapter_3/section_29/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.29.2 Learning Objectives

1. Understand the 360° block motor, 270° block servo, fan module, temperature/humidity sensor, dot matrix display, and WonderLLM module, mastering coordinated control of multiple components.
2. Comprehend the implementation logic of voice-controlled walking, fan activation, and data display switching, learning to coordinate multiple devices through large AI model instructions.

### 3.29.3 Assembly Guide

 <iframe
    src="../_static/pdf/29_Biped_Bot.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.29.4 Mode Switching

This model requires the **online large model**. If the online large model mode has already been entered, this step can be skipped to proceed directly to the wiring guide. Otherwise, refer to [4.4.10 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#firmware-update) to re-flash the corresponding firmware.

### 3.29.5 Wiring Guide

Connect the dot matrix module cable to port 5 of the ESP32 controller.

Connect the fan module cable to port 8 of the ESP32 controller.

Connect the temperature and humidity sensor cable to port 3 of the ESP32 controller.

Connect the WonderLLM module cable to port 2 of the ESP32 controller.

Connect the 360° block servo cable to port S1 of the ESP32 controller, and insert the orange servo wire into the white pin of S1.

Connect the 270° block servo cable to port S2 of the ESP32 controller, and insert the orange servo wire into the white pin of S2.

As shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_29/media/image1.png"  class="common_img" style="width:500px;" ></div>

> [!NOTE]
>
> **When conducting a lesson related to the 270° block servo for the first time, remove the gear and its attached building blocks from the 270° servo first, and then upload the following 270° servo reset program to the ESP32 controller. Next, remount the building blocks that were removed, upload the program for this lesson to the ESP32, and wait for the 270° block servo to rotate to its initial position at 135°, leaving the arm in a lowered state. This step can be skipped if the servo reset program has been executed previously.**

<div align="center"><img src="../_static/media/chapter_3/section_29/media/image0.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_29/media/image.png"  class="common_img" style="width:300px;" ></div>

### 3.29.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_29/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

- Select **Sensor** in the **Choose an Extension** interface to add **Temperature and humidity sensor** and **WonderLLM**.

<div align="center"><img src="../_static/media/chapter_3/section_25/media/image3.png"  class="common_img" style="width:800px;" ></div>

- Select **Output module** in the **Choose an Extension** interface to add **Fan module (Black)** and **Dot matrix module**.

<div align="center"><img src="../_static/media/chapter_3/section_29/media/image3.png"  class="common_img" style="width:800px;" ></div>

#### (3) Core Blocks Analysis

| Block | Category | Function Description |
| :---: | :---: | :--- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image2.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Send custom text messages to the WonderLLM large model. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image6.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Configure mcp tool calling parameters, customize the tool name, description, execution command, and return parameters, and set calling blocking and data return rules. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image1.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Turn on or off the mcp switch to control whether WonderLLM enables the custom tool calling capability. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image5.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the result data returned after the execution of the mcp tool is completed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Control the conversation message output mode, which can send the action end identifier, and turn on or off the printing output of conversation content. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_6/image9.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the ambient temperature or humidity value collected by the temperature and humidity sensor at the corresponding port. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image3.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Control the dot matrix screen to output and display a specified number, with real-time screen value refreshing. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image6.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Control the dot matrix screen to load and display preset patterns, allowing custom switching of various graphics and symbol screens. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image1.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Control the specified fan interface, setting a speed value within the range of 0 to 100 to adjust the fan power. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° servo of a specified port to rotate smoothly to the target angle within a set duration, with an automatic delay to wait for the servo to complete the action. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° servo of a specified port to rotate continuously at a set custom speed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image9.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Perform boolean logical judgments, evaluating input conditions for true/false states or applying negation operations. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image10.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Customize the entry or invocation of text content to generate string data for concatenation, judgment, and display. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image12.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Determine whether a specified element exists in an array, tuple, or dictionary, returning a boolean result. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image13.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Extract the corresponding stored value or text content from a dictionary based on a specified key name. |

#### (4) MCP Parameter Configuration

​	**Tool Name: `self.robot.controlMove`**

​		1. Tool Description: You are a Biped Bot that can move forward and backward. Parameters: 1. Movement direction: forward is 1, backward is 2; 2. Duration: measured in milliseconds, with the default duration being 5 seconds.


​		2. Command Name: `controlMove`

​		3. **Return Parameters:** `[["move","int","0","0","4"],["time","int","5000","0","10000"]]` **Note that the field name move is an integer type, where the first 0 is the default value, the second 0 is the minimum value, and 4 is the maximum value. The field name time is an integer type, with a default value of 5000, a minimum value of 0, and a maximum value of 10000.**

​		4. Block until completion: Yes

​		5. Return data: No

​		6. Function: This MCP configuration defines a Biped Bot movement control tool for the WonderLLM module. It allows WonderLLM to issue 0 to 4 movement level commands and 0 to 10000 millisecond duration commands to control the robot to move forward and backward. The program blocks during the call to wait for the complete movement action to finish, and no operational data needs to be returned to WonderLLM.

​	**Tool Name: `self.robot.controlFan`**

​		1. Tool Description: You can control the start and stop of the fan. Parameters: 1. Status: Turning on the fan is 1, and turning off the fan is 0.


​		2. Command Name: `controlFan`

​		3. **Return Parameters:** `[["fan","int","0","0","1"]]` **Note that the field name fan is an integer type, where the first 0 is the default value, the second 0 is the minimum value, and 1 is the maximum value.**

​		4. Block until completion: Yes

​		5. Return data: No

​		6. Function: This MCP configuration defines a fan control tool for the WonderLLM module. It allows WonderLLM to issue 0 to 1 switch commands to control the fan start and stop. The program blocks during the call to wait for the fan state switch to finish, and no operational data needs to be returned to WonderLLM.

​	**Tool Name: `self.robot.controlDisplay`**

​		1. Tool Description: You can control the display of temperature and humidity. Parameters: 1. Status: Use 1 to display temperature, use 2 to display humidity, use 0 to turn off the display.


​		2. Command Name: `setRobot`

​		3. **Return Parameters:** `[["display","int","0","0","2"]]` **Note that the field name display is an integer type, where the first 0 is the default value, the second 0 is the minimum value, and 2 is the maximum value.**

​		4. Block until completion: Yes

​		5. Return data: No

​		6. Function: This MCP configuration defines a temperature and humidity screen control tool for the WonderLLM module. It allows WonderLLM to issue 0 to 2 level commands to switch the display screen to show temperature, humidity, or turn off the screen. The program blocks during the call to wait for the display switch to finish, and no operational data needs to be returned to WonderLLM.

#### (5) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_29/media/image4.png"  class="common_img" style="width:1000px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_29/media/image5.png"  class="common_img" style="width:600px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_29/media/image6.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).


### 3.29.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.29.8 Project Extensions

After voice-retrieving the temperature and humidity data, the dot matrix display switches expressions and adjusts walking speed based on the environmental values. It shows a smiley face and walking quickly in comfortable conditions, and displays a sad face and walking slowly if the temperature or humidity is too high.

### 3.29.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com

## 3.30 Charging Knight

### 3.30.1 Introduction

This charging knight robot car features voice-controlled charging sequences. It supports spoken commands for forward and backward movement, while the dot matrix display shows directional indicators and plays a charging animation during forward sprints.

<div align="center"><img src="../_static/media/chapter_3/section_30/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.30.2 Learning Objectives

1. Understand the 360° block motor, 270° block servo, dot matrix display, ultrasonic sensor, and WonderLLM module, mastering voice-controlled coordination of multiple components.
2. Comprehend the control logic of voice-activated forward and backward movement, learning to regulate motor actions by parsing large AI model instructions.

### 3.30.3 Assembly Guide

 <iframe
    src="../_static/pdf/30_Charging_Knight.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.30.4 Mode Switching

This model requires the **online large model**. If the online large model mode has already been entered, this step can be skipped to proceed directly to the wiring guide. Otherwise, refer to [4.4.10 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#firmware-update) to re-flash the corresponding firmware.

### 3.30.5 Wiring Guide

Connect the dot matrix module cable to port 7 of the ESP32 controller.

Connect the glow ultrasonic sensor cable to port 3 of the ESP32 controller.

Connect the WonderLLM module cable to port 4 of the ESP32 controller.

Connect the 360° block servo cable to port S1 of the ESP32 controller, and insert the orange servo wire into the white pin of S1.

Connect the 270° block servo cable to port S2 of the ESP32 controller, and insert the orange servo wire into the white pin of S2.

As shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_30/media/image1.png"  class="common_img" style="width:500px;" ></div>

> [!NOTE]
>
> **When conducting a lesson related to the 270° block servo for the first time, remove the gear and its attached building blocks from the 270° servo first, and then upload the following 270° servo reset program to the ESP32 controller. Next, remount the building blocks that were removed, upload the program for this lesson to the ESP32, and wait for the 270° block servo to rotate to its initial position at 135°, leaving the arm in a lowered state. This step can be skipped if the servo reset program has been executed previously.**

<div align="center"><img src="../_static/media/chapter_3/section_29/media/image0.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_30/media/image.png"  class="common_img" style="width:300px;" ></div>

### 3.30.6 Programming

#### 1. Mode 1 Voice Controlled Movement

<div align="center"><img src="../_static/media/chapter_3/section_30/media/image100.gif"  class="common_img" style="width:600px;" ></div>

##### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_30/media/image4_0.png"  class="common_img" style="width:300px;" ></div>

##### (2) Add Extension Libraries

- Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM**.

<div align="center"><img src="../_static/media/chapter_3/section_3/media/image3.png"  class="common_img" style="width:800px;" ></div>

- Select **Output module** in the **Choose an Extension** interface to add **Dot matrix module**.

<div align="center"><img src="../_static/media/chapter_2/section_5/media/image2.png"  class="common_img" style="width:800px;" ></div>

##### (3) Core Blocks Analysis

| Block | Category | Function Description |
| :---: | :---: | :--- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image2.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Send custom text messages to the WonderLLM large model. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image6.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Configure mcp tool calling parameters, customize the tool name, description, execution command, and return parameters, and set calling blocking and data return rules. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image1.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Turn on or off the mcp switch to control whether WonderLLM enables the custom tool calling capability. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image5.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the result data returned after the execution of the mcp tool is completed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Control the conversation message output mode, which can send the action end identifier, and turn on or off the printing output of conversation content. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image6.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Control the dot matrix screen to load and display preset patterns, allowing custom switching of various graphics and symbol screens. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° servo of a specified port to rotate smoothly to the target angle within a set duration, with an automatic delay to wait for the servo to complete the action. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° servo of a specified port to rotate continuously at a set custom speed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image9.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Perform boolean logical judgments, evaluating input conditions for true/false states or applying negation operations. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image10.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Customize the entry or invocation of text content to generate string data for concatenation, judgment, and display. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image12.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Determine whether a specified element exists in an array, tuple, or dictionary, returning a boolean result. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image13.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Extract the corresponding stored value or text content from a dictionary based on a specified key name. |

##### (4) MCP Parameter Configuration

​	**Tool Name: `self.robot.setMove`**

​		1. Tool Description: You are a knight and can move forward and backward. Main parameters: 1. Movement direction: return 1 for forward, return 2 for backward. 2. Duration: in seconds, if no duration is specified, the default is 2 seconds.


​		2. Command Name: `setMove`

​		3. **Return Parameters:** `[["direction","int","0","0","2"],["time","int","2","0","10"]]` **Note that the field name direction is an integer type, where the first 0 is the default value, the second 0 is the minimum value, and 2 is the maximum value. The field name time is an integer type, with a default value of 2, a minimum value of 0, and a maximum value of 10.**

​		4. Block until completion: Yes

​		5. Return data: No

​		6. Function: This MCP configuration defines a knight robot movement control tool for the WonderLLM module. It allows WonderLLM to issue 0 to 2 direction level commands and 0 to 10 second duration commands to control the robot to move forward and backward. The program blocks during the call to wait for the complete movement action to finish, and no operational data needs to be returned to WonderLLM.

##### (5) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_30/media/image4_1.png"  class="common_img" style="width:1000px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_30/media/image4_2.png"  class="common_img" style="width:500px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).


#### 2. Mode 2 Charging Forward

<div align="center"><img src="../_static/media/chapter_3/section_30/media/image101.gif"  class="common_img" style="width:600px;" ></div>

##### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_30/media/image5_0.png"  class="common_img" style="width:300px;" ></div>

##### (2) Add Extension Libraries

- Select **Sensor** in the **Choose an Extension** interface to add **Glowy ultrasonic sensor**.

<div align="center"><img src="../_static/media/chapter_3/section_30/media/image5.png"  class="common_img" style="width:800px;" ></div>

- Select **Output module** in the **Choose an Extension** interface to add **Dot matrix module**.

<div align="center"><img src="../_static/media/chapter_2/section_5/media/image2.png"  class="common_img" style="width:800px;" ></div>

##### (3) Core Blocks Analysis

| Block | Category | Function Description |
| :---: | :---: | :--- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° servo of a specified port to rotate continuously at a set custom speed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° servo of a specified port to rotate smoothly to the target angle within a set duration, with an automatic delay to wait for the servo to complete the action. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_6/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Get the obstacle distance data measured by the ultrasonic sensor in centimeters. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image6.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Control the dot matrix screen to load and display preset patterns, allowing custom switching of various graphics and symbol screens. |

##### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_30/media/image5_1.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).


### 3.30.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.30.8 Project Extensions

For distant obstacles, the car approaches at a low speed while the dot matrix displays **go.** As an obstacle becomes close, the servo arm lifts rapidly, the car sprints forward as the display shows **dash**, and the buzzer sounds a high-pitched alert. Upon receiving a retreat command, the car reverses, and the display switches to **back.**

### 3.30.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com

## 3.31 Bionic Spider

### 3.31.1 Introduction

This bionic spider robot features dual-mode walking capabilities. It can track lines and steer automatically along a black path, or receive voice commands to walk left and right with customizable durations.

<div align="center"><img src="../_static/media/chapter_3/section_31/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.31.2 Learning Objectives

1. Understand the 360° block motor, 4-channel line follower sensor, dot matrix display, and WonderLLM module, mastering coordinated control of multiple devices.
2. Comprehend the control logic of automated line-tracking steering and voice-controlled walking, learning to program diverse robot behaviors.

### 3.31.3 Assembly Guide

 <iframe
    src="../_static/pdf/31_Bionic_Spider.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.31.4 Mode Switching

This model requires the **online large model**. If the online large model mode has already been entered, this step can be skipped to proceed directly to the wiring guide. Otherwise, refer to [4.4.10 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#firmware-update) to re-flash the corresponding firmware.

### 3.31.5 Wiring Guide

Connect the dot matrix module cable to port 5 of the ESP32 controller.

Connect the 4-channel line follower sensor cable to port 1 of the ESP32 controller.

Connect the WonderLLM module cable to port 4 of the ESP32 controller.

Connect the left 360° block servo cable to port S1 of the controller, and insert the orange servo wire into the white pin of S1.

Connect the right 360° block servo cable to port S2 of the controller, and insert the orange servo wire into the white pin of S2.

As shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_31/media/image1.png"  class="common_img" style="width:500px;" ></div>

### 3.31.6 Programming

#### 1. Mode 1 Cliff Avoidance

<div align="center"><img src="../_static/media/chapter_3/section_31/media/image100.gif"  class="common_img" style="width:600px;" ></div>

##### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_31/media/image4_0.png"  class="common_img" style="width:300px;" ></div>

##### (2) Add Extension Libraries

- Select **Sensor** in the **Choose an Extension** interface to add **4-channel line follower sensor**.

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image4.png"  class="common_img" style="width:800px;" ></div>

- Select **Output module** in the **Choose an Extension** interface to add **Dot matrix module**.

<div align="center"><img src="../_static/media/chapter_2/section_5/media/image2.png"  class="common_img" style="width:800px;" ></div>

##### (3) Core Blocks Analysis

| Block | Category | Function Description |
| :---: | :---: | :--- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° servo of a specified port to rotate continuously at a set custom speed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_6/image12.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the black and white ground detection status of the corresponding channel of the 4-channel line follower sensor, returning a boolean value to judge whether the current channel has detected the black line. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image6.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Control the dot matrix screen to load and display preset patterns, allowing custom switching of various graphics and symbol screens. |

##### (4) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_31/media/image4_1.png"  class="common_img" style="width:500px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).


#### 2. Mode 2 Voice Controlled

<div align="center"><img src="../_static/media/chapter_3/section_31/media/image101.gif"  class="common_img" style="width:600px;" ></div>

##### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_26/media/image6_0.png"  class="common_img" style="width:300px;" ></div>

##### (2) Add Extension Libraries

Select **Sensor** in the **Choose an Extension** interface to add **WonderLLM**.

<div align="center"><img src="../_static/media/chapter_3/section_3/media/image3.png"  class="common_img" style="width:800px;" ></div>

##### (3) Core Blocks Analysis

| Block | Category | Function Description |
| :---: | :---: | :--- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image2.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Send custom text messages to the WonderLLM large model. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image6.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Configure mcp tool calling parameters, customize the tool name, description, execution command, and return parameters, and set calling blocking and data return rules. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image1.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Turn on or off the mcp switch to control whether WonderLLM enables the custom tool calling capability. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image5.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the result data returned after the execution of the mcp tool is completed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Control the conversation message output mode, which can send the action end identifier, and turn on or off the printing output of conversation content. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image14.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 360° servo of a specified port to rotate continuously at a set custom speed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image9.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Perform boolean logical judgments, evaluating input conditions for true/false states or applying negation operations. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image10.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Customize the entry or invocation of text content to generate string data for concatenation, judgment, and display. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image12.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Determine whether a specified element exists in an array, tuple, or dictionary, returning a boolean result. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image13.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Extract the corresponding stored value or text content from a dictionary based on a specified key name. |

##### (4) MCP Parameter Configuration

​	**Tool Name: `self.robot.setMove`**

​		1. Tool Description: You are a robot that can move forward, backward, turn left, and turn right. Parameter description: 1 Movement direction: return 1 when moving forward, return 2 when moving backward, return 3 when turning left, and return 4 when turning right; 2. Movement time: measured in milliseconds, default value is 2 seconds.


​		2. Command Name: `setMove`

​		3. **Return Parameters:** `[["direction","int","0","0","4"],["time","int","2000","0","10000"]]` **Note that the field name direction is an integer type, where the first 0 is the default value, the second 0 is the minimum value, and 4 is the maximum value. The field name time is an integer type, with a default value of 2000, a minimum value of 0, and a maximum value of 10000.**

​		4. Block until completion: Yes

​		5. Return data: No

​		6. Function: This MCP configuration defines a robot movement control tool for the WonderLLM module. It allows WonderLLM to issue 0 to 4 direction level commands and 0 to 10000 millisecond duration commands to control the robot to move forward, backward, turn left, and turn right. The program blocks during the call to wait for the complete movement action to finish, and no operational data needs to be returned to WonderLLM.

##### (5) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_31/media/image5_1.png"  class="common_img" style="width:1000px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_31/media/image5_2.png"  class="common_img" style="width:500px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).


### 3.31.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.31.8 Project Extensions

When all line-following sensors detect the path, the dot matrix displays a heart shape. If a single sensor leaves the line, the spider robot performs minor in-place adjustments to correct its heading while the dot matrix displays an asterisk (**\***).

### 3.31.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com

## 3.32 Smart House

### 3.32.1 Introduction

This smart house features integrated home automation. It automatically monitors ambient light, temperature, and humidity. The fan, main door, and clothes rack can all be controlled via simple voice commands, effectively simulating a comprehensive smart home environment.

<div align="center"><img src="../_static/media/chapter_3/section_32/media/image100.gif"  class="common_img" style="width:500px;" ></div>

### 3.32.2 Learning Objectives

1. Understand the 270° block servo, fan module, light sensor, temperature/humidity sensor, and WonderLLM module, mastering coordinated control of multiple sensors and actuators.
2. Comprehend the logic of environmental data collection and voice-controlled device switching, learning to program a comprehensive smart home scenario.

### 3.32.3 Assembly Guide

 <iframe
    src="../_static/pdf/32_Smart_House.pdf#view=FitH"
    title="Assembly Guide PDF"
    width="100%"
    height="850"
    style="border: 1px solid #ddd;"
    loading="lazy">
 </iframe>


### 3.32.4 Mode Switching

This model requires the **online large model**. If the online large model mode has already been entered, this step can be skipped to proceed directly to the wiring guide. Otherwise, refer to [4.4.10 Firmware Update](https://wiki.hiwonder.com/projects/DaDablock-AI/en/ultimate-kit/docs/4_Software_and_Hardware_Guide.html#firmware-update) to re-flash the corresponding firmware.

### 3.32.5 Wiring Guide

Connect the light sensor cable to port 5 of the ESP32 controller.

Connect the fan module cable to port 8 of the ESP32 controller.

Connect the temperature and humidity sensor cable to port 3 of the ESP32 controller.

Connect the WonderLLM module cable to port 2 of the ESP32 controller.

Connect the 270° block servo cable for controlling the door to port S1 of the ESP32 controller, and insert the orange servo wire into the white pin of S1.

Connect the 270° block servo cable for controlling the clothes rack to port S2 of the ESP32 controller, and insert the orange servo wire into the white pin of S2.

As shown in the diagram:

<div align="center"><img src="../_static/media/chapter_3/section_32/media/image1.png"  class="common_img" style="width:500px;" ></div>

> [!NOTE]
>
> **When conducting a lesson related to the 270° block servo for the first time, remove the gear and its attached building blocks from the 270° servo first, and then upload the following 270° servo reset program to the ESP32 controller. Next, remount the building blocks that were removed, upload the program for this lesson to the ESP32, and wait for the 270° block servo to rotate to its initial position at 135°, leaving the door closed and the clothes rack retracted. This step can be skipped if the servo reset program has been executed previously.**

<div align="center"><img src="../_static/media/chapter_3/section_32/media/image0.png"  class="common_img" style="width:700px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_32/media/image02.png"  class="common_img" style="width:300px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_32/media/image01.png"  class="common_img" style="width:300px;" ></div>

### 3.32.6 Programming

#### (1) Program Concept Diagram

<div align="center"><img src="../_static/media/chapter_3/section_32/media/image2.png"  class="common_img" style="width:300px;" ></div>

#### (2) Add Extension Libraries

- Select **Sensor** in the **Choose an Extension** interface to add **Light sensor**, **Temperature and humidity sensor**, and **4-channel line follower sensor**.

<div align="center"><img src="../_static/media/chapter_3/section_32/media/image3.png"  class="common_img" style="width:800px;" ></div>

- Select **Output module** in the **Choose an Extension** interface to add **Fan module (Black)**.

<div align="center"><img src="../_static/media/chapter_2/section_6/media/image2.png"  class="common_img" style="width:800px;" ></div>

#### (3) Core Blocks Analysis

| Block | Category | Function Description |
| :---: | :---: | :--- |
| <img src="../_static/media/chapter_3/section_0/media/subsection_5/image15.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_5/image.png"> | Control the 270° servo of a specified port to rotate smoothly to the target angle within a set duration, with an automatic delay to wait for the servo to complete the action. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image2.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Send custom text messages to the WonderLLM large model. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image3.png" style="width:250px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Send custom control instructions to the WonderLLM large model. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image6.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Configure mcp tool calling parameters, customize the tool name, description, execution command, and return parameters, and set calling blocking and data return rules. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image1.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Turn on or off the mcp switch to control whether WonderLLM enables the custom tool calling capability. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image5.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the result data returned after the execution of the mcp tool is completed. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_9/image4.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Control the conversation message output mode, which can send the action end identifier, and turn on or off the printing output of conversation content. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_6/image7.png"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Get the ambient brightness value collected by the light sensor at the corresponding port to determine the brightness level of the environment. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_6/image9.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_6/image.png"> | Read the ambient temperature or humidity value collected by the temperature and humidity sensor at the corresponding port. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image9.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Perform boolean logical judgments, evaluating input conditions for true/false states or applying negation operations. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image10.png" style="width:150px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Customize the entry or invocation of text content to generate string data for concatenation, judgment, and display. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image12.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Determine whether a specified element exists in an array, tuple, or dictionary, returning a boolean result. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_2/image13.png" style="width:300px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_2/image.png"> | Extract the corresponding stored value or text content from a dictionary based on a specified key name. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_4/image4.png" style="width:250px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_4/image.png"> | Create a custom function block and set the function name and incoming parameters of number or text type to encapsulate and reuse a segment of program logic. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_4/image5.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_4/image.png"> | Provide number or text parameter inputs for the custom function to be called by the program inside the function. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_4/image6.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_4/image.png"> | Call the defined custom function block to execute all program code encapsulated inside that function. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_7/image1.png" style="width:250px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_7/image.png"> | Control the specified fan interface, setting a speed value within the range of 0 to 100 to adjust the fan power. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_3/image12.png" style="width:250px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_3/image.png"> | Insert custom content before the element at the specified index in the list to complete the list element insertion operation. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_3/image8.png" style="width:100px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_3/image.png"> | Generate an empty list container that can hold various types of data, such as numbers and text, for subsequent list operations. |
| <img src="../_static/media/chapter_3/section_0/media/subsection_3/image11.png" style="width:200px;"> | <img src="../_static/media/chapter_3/section_0/media/subsection_3/image.png"> | Clear all stored elements in the target list, resetting the list to an empty list. |

#### (4) MCP Parameter Configuration

​	**Tool Name: `self.robot.setHouse`**

​		1. Tool Description: You are the central control of an intelligent house, which can control the opening and closing of doors, the start and stop of fans, and the extension and retraction of automatic clotheslines. Parameters: 1. Door switch, open to 1, close to 0; 2. Fan switch, set to 1 when turned on and 0 when turned off; 3. Automatic clothesline extension and retraction: extend to 1 and retract to 0.


​		2. Command Name: `setHouse`

​		3. **Return Parameters:** `[["setFan","int","0","0","1"],["setDoor","int","0","0","1"],["setHanger","int","0","0","1"]]` **Note that the field name setFan is an integer type, where the first 0 is the default value, the second 0 is the minimum value, and 1 is the maximum value. The field name setDoor is an integer type, where the first 0 is the default value, the second 0 is the minimum value, and 1 is the maximum value. The field name setHanger is an integer type, where the first 0 is the default value, the second 0 is the minimum value, and 1 is the maximum value.**

​		4. Block until completion: Yes

​		5. Return data: No

​		6. Function: This MCP configuration defines a smart house central control tool for the WonderLLM module. It allows WonderLLM to issue 0 to 1 switch commands to control the status of the door, fan, and automatic clothesline respectively. The program blocks during the call to wait for all devices to complete their actions, and no operational data needs to be returned to WonderLLM.

​	**Tool Name: `self.robot.Tem_Hum`**

​		1. Tool Description: Obtain data from temperature and humidity sensors without parameters. After issuing the command, a list will be returned to you, with the first item being temperature and the second item being humidity. The temperature unit is Celsius, and the humidity unit is percentage.


​		2. Command Name: `getTemAndHum`

​		3. Return Parameters: `[[]]`

​		4. Block until completion: Yes

​		5. Return data: Yes

​		6. Function: This MCP configuration defines a temperature and humidity data reading tool for the WonderLLM module. It allows WonderLLM to issue a parameter-free collection command to read the raw data of the temperature and humidity sensor. The program blocks during the call to wait for the sensor data reading to complete, and returns the collection result data containing temperature and humidity to WonderLLM.

​	**Tool Name: `self.robot.Light`**

​		1. Tool Description: You can obtain the value of the light sensor, and after issuing the command, I will return an int type variable to you, which is the light intensity in percentage units. When the light intensity is greater than 70%, it is considered as dawn.


​		2. Command Name: `getLight`

​		3. Return Parameters: `[[]]`

​		4. Block until completion: Yes

​		5. Return data: Yes

​		6. Function: This MCP configuration defines a light intensity reading tool for the WonderLLM module. It allows WonderLLM to issue a parameter-free collection command to read the percentage light intensity value of the light sensor. The program blocks during the call to wait for the light intensity data reading to complete, and returns the light intensity collection result data to WonderLLM.

#### (5) Complete Program

<div align="center"><img src="../_static/media/chapter_3/section_32/media/image4.png"  class="common_img" style="width:1000px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_32/media/image5.png"  class="common_img" style="width:500px;" ></div>

<div align="center"><img src="../_static/media/chapter_3/section_32/media/image6.png"  class="common_img" style="width:600px;" ></div>

The source files are available for download as a zip archive under [1. Source Code / 02 Program Files for Builds](https://drive.google.com/drive/folders/1guTJsuFCa0f3ZVMcZNNWJ6NruvY7gsUd?usp=sharing).


### 3.32.7 Downloading Programs

<div align="center"><img src="../_static/media/chapter_2/section_4/media/image6.gif"  class="common_img" style="width:800px;" ></div>

### 3.32.8 Project Extensions

When the light sensor detects bright light or the temperature and humidity rise, the fan starts, and the clothes rack extends automatically without requiring voice commands. In low-light or low-temperature environments, the rack retracts, and the fan stops. Spoken commands can also lock the door, windows, or fan state individually, while the dot matrix display scrolls real-time environmental data.

### 3.32.9 Technical Support and Discussion

Join the forum for sharing questions, ideas, or suggestions, and answers will be provided promptly. Click the hyperlink [Hiwonder Forum](http://forum.hiwonder.com) or enter the URL in a browser: http://forum.hiwonder.com
