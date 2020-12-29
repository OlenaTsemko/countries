(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1DEj":function(n,e,t){},QfWi:function(n,e,t){"use strict";t.r(e);t("IlJM"),t("D/wG"),t("1DEj"),t("JBxO"),t("FdtR");var a=function(n){return fetch("https://restcountries.eu/rest/v2/name/"+n).then((function(n){return n.json()}))},l=t("aE9I"),r=t.n(l),o=t("vY5I"),i=t.n(o),u=t("jlgG"),c=t.n(u),s={input:document.querySelector(".js-input-search"),countryCard:document.querySelector(".js-country-card-container"),countryCardList:document.querySelector(".js-country-card-list"),listItemLink:document.querySelector(".js-country-card-list"),loader:document.querySelector(".js-loader"),mapContainer:document.querySelector(".js-map-container"),warningText:document.querySelector(".js-warning-text")};var p={clearCountryMarkup:function(){s.countryCard.innerHTML="",s.countryCardList.innerHTML="",s.warningText.textContent=""},actionsOfError:function(n){console.log("%c Please, enter the country name!","color: SpringGreen; font-size: 16px; font-weight: 700;",n),s.loader.classList.add("is-hidden")}};var m={makeMarkupCountry:function(n){var e=r()(n);s.countryCard.insertAdjacentHTML("beforeend",e)},makeMarkupCountryList:function(n){var e=i()(n);s.countryCardList.insertAdjacentHTML("beforeend",e)},makeMarkupCountryItem:function(n){if(void 0!==n){var e=c()(n);s.countryCard.insertAdjacentHTML("beforeend",e)}else s.warningText.textContent="Sorry, we cannot find information about this country! Please try to enter the name of this country in the search field manually!!!"}};var f=function(n){var e;if(s.warningText.textContent="","path"===n.target.nodeName){var t=e=n.target.classList[1];p.clearCountryMarkup(),s.loader.classList.remove("is-hidden"),a(t).then((function(n){var t=s.mapContainer.children[1].children[0].children[0].innerText;s.input.value=t;var a=n.find((function(n){return e===n.alpha3Code}));p.clearCountryMarkup(),console.log(a),s.loader.classList.add("is-hidden"),m.makeMarkupCountryItem(a)})).catch((function(n){p.actionsOfError(n),p.clearCountryMarkup(),s.warningText.textContent="Sorry, we cannot find information about this country! Please try to enter the name of this country in the search field manually!!!"}))}},d=t("jffb"),h=t.n(d),y=t("dg0e"),g=t.n(y),v=t("VYoj"),k=t.n(v);k.a.options={closeButton:!0,debug:!1,newestOnTop:!1,progressBar:!0,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};new g.a({element:document.getElementById("container")});function C(n){if(s.loader.classList.add("is-hidden"),n.length>10)k.a.error("Too many matches found! Please enter a more specific query!");else{if(n.length<=10&&n.length>=2)return m.makeMarkupCountryList(n),k.a.info("Select the required country from the list"),void s.listItemLink.addEventListener("click",(function(e){e.preventDefault();var t=e.target.innerText,a=n.find((function(n){return n.name===t}));p.clearCountryMarkup(),m.makeMarkupCountryItem(a)}));if(1===n.length)return m.makeMarkupCountry(n),void k.a.success("Information about the requested country was found successfully");console.log("%c Please, enter the valid country name!","color: SpringGreen; font-size: 16px; font-weight: 700;"),k.a.error("Please, enter the valid country name!")}}s.input.addEventListener("input",h()((function(){var n=s.input.value;p.clearCountryMarkup(),s.loader.classList.remove("is-hidden"),a(n).then(C).catch((function(n){p.actionsOfError(n),k.a.warning("Please, enter the country name!")}))}),1e3)),s.mapContainer.addEventListener("mouseover",f)},aE9I:function(n,e,t){var a=t("mp5j");n.exports=(a.default||a).template({1:function(n,e,t,a,l){var r,o,i=null!=e?e:n.nullContext||{},u=n.hooks.helperMissing,c="function",s=n.escapeExpression,p=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"\r\n<article>\r\n  <h2>"+s(typeof(o=null!=(o=p(t,"name")||(null!=e?p(e,"name"):e))?o:u)===c?o.call(i,{name:"name",hash:{},data:l,loc:{start:{line:4,column:6},end:{line:4,column:14}}}):o)+'</h2>\r\n\r\n  <ul class="country-info-list">\r\n    <li class="country-info-item"><span class="country-info-name">Capital: </span> '+s(typeof(o=null!=(o=p(t,"capital")||(null!=e?p(e,"capital"):e))?o:u)===c?o.call(i,{name:"capital",hash:{},data:l,loc:{start:{line:7,column:83},end:{line:7,column:94}}}):o)+'</li>\r\n    <li class="country-info-item"><span class="country-info-name">Population: </span> '+s(typeof(o=null!=(o=p(t,"population")||(null!=e?p(e,"population"):e))?o:u)===c?o.call(i,{name:"population",hash:{},data:l,loc:{start:{line:8,column:86},end:{line:8,column:100}}}):o)+'</li>\r\n    <li class="country-info-item"><span class="country-info-name">Languages: </span>\r\n      <ul class="languages-list">\r\n'+(null!=(r=p(t,"each").call(i,null!=e?p(e,"languages"):e,{name:"each",hash:{},fn:n.program(2,l,0),inverse:n.noop,data:l,loc:{start:{line:11,column:8},end:{line:13,column:17}}}))?r:"")+'      </ul>\r\n    </li>\r\n  </ul>\r\n\r\n  <img src="'+s(typeof(o=null!=(o=p(t,"flag")||(null!=e?p(e,"flag"):e))?o:u)===c?o.call(i,{name:"flag",hash:{},data:l,loc:{start:{line:18,column:12},end:{line:18,column:20}}}):o)+'" alt="flag of '+s(typeof(o=null!=(o=p(t,"name")||(null!=e?p(e,"name"):e))?o:u)===c?o.call(i,{name:"name",hash:{},data:l,loc:{start:{line:18,column:35},end:{line:18,column:43}}}):o)+'" width="320">\r\n</article>\r\n\r\n'},2:function(n,e,t,a,l){var r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'        <li class="languages-item">'+n.escapeExpression(n.lambda(null!=e?r(e,"name"):e,e))+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,e,t,a,l){var r;return null!=(r=(n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]})(t,"each").call(null!=e?e:n.nullContext||{},e,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l,loc:{start:{line:1,column:0},end:{line:21,column:9}}}))?r:""},useData:!0})},jlgG:function(n,e,t){var a=t("mp5j");n.exports=(a.default||a).template({1:function(n,e,t,a,l){var r=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'        <li class="languages-item">'+n.escapeExpression(n.lambda(null!=e?r(e,"name"):e,e))+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,e,t,a,l){var r,o,i=null!=e?e:n.nullContext||{},u=n.hooks.helperMissing,c="function",s=n.escapeExpression,p=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return"<article>\r\n  <h2>"+s(typeof(o=null!=(o=p(t,"name")||(null!=e?p(e,"name"):e))?o:u)===c?o.call(i,{name:"name",hash:{},data:l,loc:{start:{line:2,column:6},end:{line:2,column:14}}}):o)+'</h2>\r\n\r\n  <ul class="country-info-list">\r\n    <li class="country-info-item"><span class="country-info-name">Capital: </span> '+s(typeof(o=null!=(o=p(t,"capital")||(null!=e?p(e,"capital"):e))?o:u)===c?o.call(i,{name:"capital",hash:{},data:l,loc:{start:{line:5,column:83},end:{line:5,column:94}}}):o)+'</li>\r\n    <li class="country-info-item"><span class="country-info-name">Population: </span> '+s(typeof(o=null!=(o=p(t,"population")||(null!=e?p(e,"population"):e))?o:u)===c?o.call(i,{name:"population",hash:{},data:l,loc:{start:{line:6,column:86},end:{line:6,column:100}}}):o)+'</li>\r\n    <li class="country-info-item"><span class="country-info-name">Languages: </span>\r\n      <ul class="languages-list">\r\n'+(null!=(r=p(t,"each").call(i,null!=e?p(e,"languages"):e,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l,loc:{start:{line:9,column:8},end:{line:11,column:17}}}))?r:"")+'      </ul>\r\n    </li>\r\n  </ul>\r\n\r\n  <img src="'+s(typeof(o=null!=(o=p(t,"flag")||(null!=e?p(e,"flag"):e))?o:u)===c?o.call(i,{name:"flag",hash:{},data:l,loc:{start:{line:16,column:12},end:{line:16,column:20}}}):o)+'" alt="flag of '+s(typeof(o=null!=(o=p(t,"name")||(null!=e?p(e,"name"):e))?o:u)===c?o.call(i,{name:"name",hash:{},data:l,loc:{start:{line:16,column:35},end:{line:16,column:43}}}):o)+'" width="320">\r\n</article>'},useData:!0})},vY5I:function(n,e,t){var a=t("mp5j");n.exports=(a.default||a).template({1:function(n,e,t,a,l){var r,o=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<li class="countries-list-item">\r\n    <a class="countries-list-item-link" href="">'+n.escapeExpression("function"==typeof(r=null!=(r=o(t,"name")||(null!=e?o(e,"name"):e))?r:n.hooks.helperMissing)?r.call(null!=e?e:n.nullContext||{},{name:"name",hash:{},data:l,loc:{start:{line:3,column:48},end:{line:3,column:56}}}):r)+"</a>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,e,t,a,l){var r;return null!=(r=(n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]})(t,"each").call(null!=e?e:n.nullContext||{},e,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l,loc:{start:{line:1,column:0},end:{line:5,column:9}}}))?r:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.6228d3b7a69eb2b0dde3.js.map