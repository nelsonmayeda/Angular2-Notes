import {Component} from '@angular/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";

@Component({
  directives: [UIROUTER_DIRECTIVES],
    selector: 'sidebar',
    template: `
            <ul class="nav nav-sidebar">
                <li >
                    <a uiSref="app.GettingStartedwithAngular2">
                        <div>Section 1</div>
                        <div>Getting Started with Angular 2</div>
                    </a>
                </li>
                <li >
                    <a uiSref="app.Angular2Jumpstart">
                        <div>Section 2</div>
                        <div>Angular 2 Jumpstart</div>
                    </a>
                </li>
                <li >
                    <a uiSref="app.DisplayingDataandHandlingFunctions">
                        <div>Section 3</div>
                        <div>Displaying Data and Handling Events</div>
                    </a>
                </li>
                <li >
                    <a uiSref="app.BuildingReusableComponents">
                        <div>Section 4</div>
                        <div>Building Re-usable Components</div>
                    </a>
                </li>
                <li >
                    <a uiSref="app.ControllingRenderingofHTML">
                        <div>Section 5</div>
                        <div>Controlling Rendering of HTML</div>
                    </a>
                </li>
                <li >
                    <a uiSref="app.BuildingFormswithBasicValidation">
                        <div>Section 6</div>
                        <div>Building Forms with Basic Validation</div>
                    </a>
                </li>
                <li >
                    <a uiSref="app.BuildingFormswithComplexValidation">
                        <div>Section 7</div>
                        <div>Building Forms with Complex Validation</div>
                    </a>
                </li>
                <li >
                    <a uiSref="app.IntroductiontoReactiveExtensions">
                        <div>Section 8</div>
                        <div>Introduction to Reactive Extensions</div>
                    </a>
                </li>
                <li >
                    <a uiSref="app.ConnectingtotheServer">
                        <div>Section 9</div>
                        <div>Connecting to the Server</div>
                    </a>
                </li>
                <li >
                    <a uiSref="app.BuildingSinglePageApps">
                        <div>Section 10</div>
                        <div>Building Single Page Apps</div>
                    </a>
                </li>
            </ul>`,
    styles:[
        `/*
 * Sidebar
 */
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  margin:0;padding:0;
  z-index: 1000;
  display: block;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  background-color: #f5f5f5;
  border-right: 1px solid #eee;
}
.nav-sidebar li{
  padding:10px;
}
.nav-sidebar div{
   font-weight:bold;
}
.nav-sidebar div + div{
   font-weight:normal;
}
/* Sidebar navigation */
.nav-sidebar > li.active,
.nav-sidebar > li:hover,
.nav-sidebar > li:focus {
  background-color: #428bca;
}
.nav-sidebar > li.active > a,
.nav-sidebar > li:hover > a,
.nav-sidebar > li:focus > a{
  color: #fff;
  text-decoration:none;
}`
    ]
})
export class AppComponent {
}