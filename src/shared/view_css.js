/*
*
* 	His was tested in IE (7-9), Firefox, Opera and Chrome:
* 	Dynamic style
*
*/

let css = `.notie-transition {
	-moz-transition: all 0.3s ease;
	-webkit-transition: all 0.3s ease;
	transition: all 0.3s ease; }

	.notie-background-success {
	  background-color: #57BF57; }

	.notie-background-warning {
	  background-color: #D6A14D; }

	.notie-background-error {
	  background-color: #E1715B; }

	.notie-background-info {
	  background-color: #4D82D6; }

	#notie-alert-outer, #notie-confirm-outer, #notie-input-outer, #notie-select-outer {
	  position: fixed;
	  top: 0;
	  left: 0;
	  z-index: 1999999999;
	  height: auto;
	  width: 100%;
	  display: none;
	  text-align: center;
	  cursor: pointer;
	  font-size: 24px;
	  -o-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
	  -ms-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
	  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
	  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
	  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5); }
	  @media (max-width: 600px) {
	    #notie-alert-outer, #notie-confirm-outer, #notie-input-outer, #notie-select-outer {
	      font-size: 18px; } }

	#notie-alert-inner {
	  padding: 20px;
	  display: table-cell; }

	#notie-alert-content {
	  max-width: 900px;
	  margin: 0 auto; }

	#notie-alert-text {
	  color: #FFFFFF; }

	#notie-confirm-outer {
	  cursor: default; }

	#notie-confirm-inner, #notie-input-inner, #notie-select-inner {
	  box-sizing: border-box;
	  width: 100%;
	  padding: 20px;
	  display: block;
	  cursor: default;
	  background-color: #4D82D6; }

	#notie-confirm-text {
	  color: #FFFFFF; }

	#notie-confirm-text-yes {
	  color: #FFFFFF; }

	#notie-confirm-text-no {
	  color: #FFFFFF; }

	#notie-confirm-yes, #notie-confirm-no, #notie-input-no, #notie-input-yes {
	  float: left;
	  height: 50px;
	  line-height: 50px;
	  width: 50%;
	  cursor: pointer;
	  background-color: #57BF57; }

	#notie-confirm-no, #notie-input-no {
	  float: right;
	  background-color: #E1715B; }

	#notie-confirm-background, #notie-input-background, #notie-select-background {
	  position: fixed;
	  top: 0;
	  left: 0;
	  z-index: 999999980;
	  height: 100%;
	  width: 100%;
	  display: none;
	  background-color: #FFFFFF;
	  opacity: 0; }

	/* INPUT */
	#notie-input-outer {
	  cursor: default; }

	#notie-input-field {
	  display: block;
	  box-sizing: border-box;
	  height: 55px;
	  width: 100%;
	  text-align: center;
	  outline: 0;
	  border: 0;
	  margin: 0;
	  background-color: #FFFFFF;
	  font-family: inherit;
	  font-size: 24px; }
	  @media (max-width: 600px) {
	    #notie-input-field {
	      font-size: 18px; } }

	#notie-input-text {
	  color: #FFFFFF; }

	#notie-input-text-yes {
	  color: #FFFFFF; }

	#notie-input-text-no {
	  color: #FFFFFF; }

	#notie-select-outer {
	  top: auto;
	  bottom: 0;
	  cursor: default; }

	#notie-select-text {
	  color: #FFFFFF; }

	#notie-select-choices, .notie-select-choice {
	  background-color: #57BF57; }

	.notie-select-choice {
	  height: 50px;
	  line-height: 50px;
	  color: #FFFFFF;
	  cursor: pointer; }

	#notie-select-cancel {
	  height: 60px;
	  line-height: 60px;
	  color: #FFFFFF;
	  cursor: pointer;
	  background-color: #A0A0A0; }}`,
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if ( style.styleSheet ){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);
