// import $ from 'jquery';

// import BpmnModeler from 'bpmn-js/lib/Modeler';

// // Import necessary modules
// import propertiesPanelModule from 'bpmn-js-properties-panel-activiti';
// import propertiesProviderModule from 'bpmn-js-properties-panel-activiti/lib/provider/activiti';
// import activitiModdleDescriptor from 'activiti-bpmn-moddle/resources/activiti.json';

// import { debounce } from 'min-dash';

// // Define the BPMN XML content as a string
// const diagramXML = `<?xml version="1.0" encoding="UTF-8"?>
// <bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_0v7t65f" targetNamespace="http://bpmn.io/schema/bpmn">
// <bpmn:process id="categorizeProcess" name="categorizeProcess" isExecutable="true">
// <bpmn:startEvent id="StartEvent_1">
// <bpmn:outgoing>SequenceFlow_09xowo4</bpmn:outgoing>
// </bpmn:startEvent>
// <bpmn:sequenceFlow id="SequenceFlow_09xowo4" sourceRef="StartEvent_1" targetRef="Task_1ylvdew" />
// <bpmn:exclusiveGateway id="ExclusiveGateway_0c36qc6" name="Text Accepted?">
// <bpmn:incoming>SequenceFlow_1jzbgkj</bpmn:incoming>
// <bpmn:outgoing>SequenceFlow_0tsc63v</bpmn:outgoing>
// <bpmn:outgoing>SequenceFlow_049fuit</bpmn:outgoing>
// </bpmn:exclusiveGateway>
// <bpmn:sequenceFlow id="SequenceFlow_1jzbgkj" sourceRef="Task_1ylvdew" targetRef="ExclusiveGateway_0c36qc6" />
// <bpmn:sequenceFlow id="SequenceFlow_0tsc63v" name="yes" sourceRef="ExclusiveGateway_0c36qc6" targetRef="Task_0snvh02" >
// <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression"><![CDATA[${approved == true}]]></bpmn:conditionExpression>
// </bpmn:sequenceFlow>
// <bpmn:sequenceFlow id="SequenceFlow_049fuit" name="no" sourceRef="ExclusiveGateway_0c36qc6" targetRef="Task_1asxw87" >
// <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression"><![CDATA[${approved == false}]]></bpmn:conditionExpression>
// </bpmn:sequenceFlow>
// <bpmn:endEvent id="EndEvent_13bsqqd">
// <bpmn:incoming>SequenceFlow_0upfncf</bpmn:incoming>
// </bpmn:endEvent>
// <bpmn:sequenceFlow id="SequenceFlow_0upfncf" sourceRef="Task_1asxw87" targetRef="EndEvent_13bsqqd" />
// <bpmn:endEvent id="EndEvent_1ogwwp9">
// <bpmn:incoming>SequenceFlow_1nn2llw</bpmn:incoming>
// </bpmn:endEvent>
// <bpmn:sequenceFlow id="SequenceFlow_1nn2llw" sourceRef="Task_0snvh02" targetRef="EndEvent_1ogwwp9" />
// <bpmn:serviceTask id="Task_1ylvdew" name="Process Text" implementation="processTextConnector">
// <bpmn:incoming>SequenceFlow_09xowo4</bpmn:incoming>
// <bpmn:outgoing>SequenceFlow_1jzbgkj</bpmn:outgoing>
// </bpmn:serviceTask>
// <bpmn:serviceTask id="Task_0snvh02" name="Tag categorized Text" implementation="tagTextConnector">
// <bpmn:incoming>SequenceFlow_0tsc63v</bpmn:incoming>
// <bpmn:outgoing>SequenceFlow_1nn2llw</bpmn:outgoing>
// </bpmn:serviceTask>
// <bpmn:serviceTask id="Task_1asxw87" name="Discard and Notify user" implementation="discardTextConnector">
// <bpmn:incoming>SequenceFlow_049fuit</bpmn:incoming>
// <bpmn:outgoing>SequenceFlow_0upfncf</bpmn:outgoing>
// </bpmn:serviceTask>
// </bpmn:process>
// <bpmndi:BPMNDiagram id="BPMNDiagram_1">
// <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="categorizeProcess">
// <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
// <dc:Bounds x="173" y="102" width="36" height="36" />
// </bpmndi:BPMNShape>
// <bpmndi:BPMNEdge id="SequenceFlow_09xowo4_di" bpmnElement="SequenceFlow_09xowo4">
// <di:waypoint x="209" y="120" />
// <di:waypoint x="259" y="120" />
// </bpmndi:BPMNEdge>
// <bpmndi:BPMNShape id="ExclusiveGateway_0c36qc6_di" bpmnElement="ExclusiveGateway_0c36qc6" isMarkerVisible="true">
// <dc:Bounds x="409" y="95" width="50" height="50" />
// <bpmndi:BPMNLabel>
// <dc:Bounds x="391" y="65" width="86" height="14" />
// </bpmndi:BPMNLabel>
// </bpmndi:BPMNShape>
// <bpmndi:BPMNEdge id="SequenceFlow_1jzbgkj_di" bpmnElement="SequenceFlow_1jzbgkj">
// <di:waypoint x="359" y="120" />
// <di:waypoint x="409" y="120" />
// </bpmndi:BPMNEdge>
// <bpmndi:BPMNEdge id="SequenceFlow_0tsc63v_di" bpmnElement="SequenceFlow_0tsc63v">
// <di:waypoint x="459" y="120" />
// <di:waypoint x="509" y="120" />
// <bpmndi:BPMNLabel>
// <dc:Bounds x="475" y="102" width="18" height="14" />
// </bpmndi:BPMNLabel>
// </bpmndi:BPMNEdge>
// <bpmndi:BPMNEdge id="SequenceFlow_049fuit_di" bpmnElement="SequenceFlow_049fuit">
// <di:waypoint x="434" y="145" />
// <di:waypoint x="434" y="230" />
// <di:waypoint x="509" y="230" />
// <bpmndi:BPMNLabel>
// <dc:Bounds x="443" y="185" width="13" height="14" />
// </bpmndi:BPMNLabel>
// </bpmndi:BPMNEdge>
// <bpmndi:BPMNShape id="EndEvent_13bsqqd_di" bpmnElement="EndEvent_13bsqqd">
// <dc:Bounds x="659" y="212" width="36" height="36" />
// </bpmndi:BPMNShape>
// <bpmndi:BPMNEdge id="SequenceFlow_0upfncf_di" bpmnElement="SequenceFlow_0upfncf">
// <di:waypoint x="609" y="230" />
// <di:waypoint x="659" y="230" />
// </bpmndi:BPMNEdge>
// <bpmndi:BPMNShape id="EndEvent_1ogwwp9_di" bpmnElement="EndEvent_1ogwwp9">
// <dc:Bounds x="659" y="102" width="36" height="36" />
// </bpmndi:BPMNShape>
// <bpmndi:BPMNEdge id="SequenceFlow_1nn2llw_di" bpmnElement="SequenceFlow_1nn2llw">
// <di:waypoint x="609" y="120" />
// <di:waypoint x="659" y="120" />
// </bpmndi:BPMNEdge>
// <bpmndi:BPMNShape id="ServiceTask_1vlvxl9_di" bpmnElement="Task_1ylvdew">
// <dc:Bounds x="259" y="80" width="100" height="80" />
// </bpmndi:BPMNShape>
// <bpmndi:BPMNShape id="ServiceTask_0z16f74_di" bpmnElement="Task_0snvh02">
// <dc:Bounds x="509" y="80" width="100" height="80" />
// </bpmndi:BPMNShape>
// <bpmndi:BPMNShape id="ServiceTask_14mct68_di" bpmnElement="Task_1asxw87">
// <dc:Bounds x="509" y="190" width="100" height="80" />
// </bpmndi:BPMNShape>
// </bpmndi:BPMNPlane>
// </bpmndi:BPMNDiagram>
// </bpmn:definitions>`;

// var container = $('#js-drop-zone');
// var canvas = $('#js-canvas');

// var bpmnModeler = new BpmnModeler({
//   container: canvas,
//   propertiesPanel: {
//     parent: '#js-properties-panel'
//   },
//   additionalModules: [
//     propertiesPanelModule,
//     propertiesProviderModule
//   ],
//   moddleExtensions: {
//     activiti: activitiModdleDescriptor
//   }
// });

// container.removeClass('with-diagram');

// async function openDiagram(xml) {
//   try {
//     await bpmnModeler.importXML(xml);
//     container
//       .removeClass('with-error')
//       .addClass('with-diagram');
//   } catch (err) {
//     container
//       .removeClass('with-diagram')
//       .addClass('with-error');
//     container.find('.error pre').text(err.message);
//     console.error(err);
//   }
// }

// // Function to create a new diagram
// function createNewDiagram() {
//   openDiagram(this.diagramXML);
// }

// // Call createNewDiagram function when the page loads
// createNewDiagram();

// // Add event listeners for buttons (if needed)
// $(function() {
//   $('#js-create-diagram').click(function(e) {
//     e.stopPropagation();
//     e.preventDefault();
//     createNewDiagram();
//   });
// });
import $ from 'jquery';
import BpmnModeler from 'bpmn-js/lib/Modeler';

// Import necessary modules
import propertiesPanelModule from 'bpmn-js-properties-panel-activiti';
import propertiesProviderModule from 'bpmn-js-properties-panel-activiti/lib/provider/activiti';
import activitiModdleDescriptor from 'activiti-bpmn-moddle/resources/activiti.json';

import { debounce } from 'min-dash';

// Define the BPMN XML content as a string
const diagramXML = `<?xml version="1.0" encoding="UTF-8"?>
  <bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
                    xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
                    xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
                    xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
                    id="Definitions_1"
                    targetNamespace="http://bpmn.io/schema/bpmn"
                    exporter="Camunda Modeler"
                    exporterVersion="4.4.0">
    <!-- BPMN content goes here -->
  </bpmn:definitions>`;

var container = $('#js-drop-zone');
var canvas = $('#js-canvas');

var bpmnModeler = new BpmnModeler({
  container: canvas,
  propertiesPanel: {
    parent: '#js-properties-panel'
  },
  additionalModules: [
    propertiesPanelModule,
    propertiesProviderModule
  ],
  moddleExtensions: {
    activiti: activitiModdleDescriptor
  }
});

container.removeClass('with-diagram');

async function openDiagram(xml) {
  try {
    await bpmnModeler.importXML(xml);
    container.removeClass('with-error').addClass('with-diagram');
  } catch (error) {
    // Handle error during BPMN diagram import
    console.error('Error importing BPMN diagram:', error);
    displayErrorMessage('Error importing BPMN diagram: ' + error.message);
    container.removeClass('with-diagram').addClass('with-error');
  }
}

// Function to create a new diagram
function createNewDiagram() {
  openDiagram(diagramXML);
}

// Call createNewDiagram function when the page loads
createNewDiagram();

// Function to display error message
function displayErrorMessage(message) {
  const errorDetails = $('#error-details');
  errorDetails.text(message);
}

// Add event listener for create diagram link
$('#js-create-diagram').click(function(event) {
  event.preventDefault();
  createNewDiagram();
});
