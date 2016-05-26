import {Component} from '@angular/core';
import {UIROUTER_DIRECTIVES} from "ui-router-ng2";


@Component({
  directives: [UIROUTER_DIRECTIVES],
    selector: 'my-app',
    template: `
<div class="container-fluid">
    <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
            <ui-view name="sidebar"></ui-view>    
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <ui-view></ui-view>
        </div>
    </div>
</div>
`,
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
}
/*
 * Main content
 */

.main {
  padding: 20px;
}
@media (min-width: 768px) {
  .main {
    padding-right: 40px;
    padding-left: 40px;
  }
}
.main .page-header {
  margin-top: 0;
}`
    ]
})
export class AppComponent {
}