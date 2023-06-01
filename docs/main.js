(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+2nE":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/footer/footer.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <img\n          src=\"assets/img/logo/Logo-blanc.png\"\n          class=\"logo\"\n          alt=\"\"\n          srcset=\"\"\n        />\n        \n      </div>\n      <div class=\"col-md-3\">\n        <ul class=\"nav\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\"> Profile </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-md-3\">\n        <ul class=\"nav\">\n          <li class=\"nav-item\">\n            <a\n              class=\"nav-link\"\n              href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\"\n            >\n              Contact Us\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a\n              class=\"nav-link\"\n              href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\"\n            >\n              About Us\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a\n              class=\"nav-link\"\n              href=\"https://creative-tim.com/blog?ref=blkdsa-footer\"\n            >\n              Blog\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n              License\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-md-3\">\n        <h3 class=\"title\">Follow us:</h3>\n        <div class=\"btn-wrapper profile\">\n          <a\n            class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n            href=\"https://twitter.com/creativetim\"\n            target=\"_blank\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n          </a>\n          <a\n            class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n            href=\"https://www.facebook.com/creativetim\"\n            target=\"_blank\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n          </a>\n          <a\n            class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n            href=\"https://dribbble.com/creativetim\"\n            target=\"_blank\"\n          >\n            <i class=\"fab fa-dribbble\"> </i>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "+Bks":
/*!**************************************************************************!*\
  !*** ./src/app/pages/challange-detiles/challange-detiles.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFsbGFuZ2UtZGV0aWxlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "/cup":
/*!******************************************************************!*\
  !*** ./src/app/component/for-you-list/for-you-list.component.ts ***!
  \******************************************************************/
/*! exports provided: ForYouListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForYouListComponent", function() { return ForYouListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_for_you_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./for-you-list.component.html */ "lRDX");
/* harmony import */ var _for_you_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./for-you-list.component.scss */ "O9Go");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_publication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/publication.service */ "wzbf");
/* harmony import */ var src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/logged-in-user.service */ "GHSY");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_singles_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/singles.service */ "w+HY");








var ForYouListComponent = /** @class */ (function () {
    function ForYouListComponent(publicationService, loggedUserServ, ref, modalService, singlesService) {
        this.publicationService = publicationService;
        this.loggedUserServ = loggedUserServ;
        this.ref = ref;
        this.modalService = modalService;
        this.singlesService = singlesService;
        this.isCollapsed = [];
        this.coutReationPublicationReply = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.idUser = this.loggedUserServ.getUserID();
    }
    ForYouListComponent.prototype.ngOnInit = function () { };
    ForYouListComponent.prototype.getImage = function (idimage, idpub) {
        for (var _i = 0, _a = this.Listimage; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.idpub === idpub) {
                for (var _b = 0, _c = item.listimage; _b < _c.length; _b++) {
                    var itam = _c[_b];
                    if (itam._id === idimage) {
                        return itam.safeUrl;
                    }
                }
            }
        }
    };
    ForYouListComponent.prototype.likePost = function (id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data, _i, _a, element, exist, _b, _c, item, index, value, value;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        data = { publicationId: id, UserId: this.idUser };
                        this.publicationService.Reaction(data).subscribe(function () {
                            _this.ref.detectChanges();
                        });
                        _i = 0, _a = this.ListCopy;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 10];
                        element = _a[_i];
                        if (!(element["_id"] === id)) return [3 /*break*/, 9];
                        if (!(element["reaction"].length === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, element["reaction"].push({ idUser: this.idUser })];
                    case 2:
                        _d.sent();
                        this.ref.detectChanges();
                        return [3 /*break*/, 9];
                    case 3:
                        exist = false;
                        for (_b = 0, _c = element["reaction"]; _b < _c.length; _b++) {
                            item = _c[_b];
                            if (item["idUser"] === this.idUser) {
                                exist = true;
                            }
                        }
                        if (!exist) return [3 /*break*/, 6];
                        return [4 /*yield*/, element["reaction"].findIndex(function (itam) { return itam["idUser"] === _this.idUser; })];
                    case 4:
                        index = _d.sent();
                        value = this.coutReationPublication;
                        value--;
                        this.coutReationPublicationReply.emit(value);
                        return [4 /*yield*/, element["reaction"].splice(index, 1)];
                    case 5:
                        _d.sent();
                        return [3 /*break*/, 8];
                    case 6:
                        value = this.coutReationPublication;
                        value++;
                        this.coutReationPublicationReply.emit(value);
                        return [4 /*yield*/, element["reaction"].push({ idUser: this.idUser })];
                    case 7:
                        _d.sent();
                        _d.label = 8;
                    case 8:
                        this.ref.detectChanges();
                        _d.label = 9;
                    case 9:
                        _i++;
                        return [3 /*break*/, 1];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    // Dislike a post
    ForYouListComponent.prototype.reaction = function (list) {
        var _this = this;
        var reactionIndex = list.findIndex(function (reaction) { return reaction.idUser === _this.idUser; });
        if (reactionIndex > -1) {
            return true;
        }
        else {
            return false;
        }
    };
    ForYouListComponent.prototype.reactioncount = function (list) {
        return list.length;
    };
    // to change the date  from 2023-04-18T00:29:38.643Z to 1h up to 23h and from 1week up to 10 week then in formt dd/mm/yyyy
    ForYouListComponent.prototype.format = function (date) {
        var now = new Date();
        var diff = Math.abs(now.getTime() - Date.parse(date));
        var diffHours = Math.floor(diff / (1000 * 60 * 60));
        var diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
        var diffWeeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
        if (diffHours <= 23) {
            return diffHours + "h";
        }
        else if (diffDays <= 6) {
            return diffDays + "d";
        }
        else if (diffWeeks <= 10) {
            return diffWeeks + "w";
        } /*  else {
          return this.datePipe.transform(Date.parse(date), 'dd/MM/yyyy');
        } */
    };
    ForYouListComponent.prototype.openModal = function (itemId) {
        this.itemId = itemId;
        var modalRef = this.modalService.open(this.modalContent);
    };
    ForYouListComponent.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.repostReason !== "Other") {
            console.log("Repost reason:", this.repostReason);
            this.text = this.repostReason;
        }
        else {
            console.log("Repost reason:", this.repostReason, "Repost comments:", this.repostComments);
            this.text = this.repostComments;
        }
        this.singlesService
            .send_single_pub({
            iduser: this.idUser,
            text: this.text,
            idpubliction: this.itemId,
        })
            .subscribe(function (response) {
            console.log("ok", response);
            _this.modalService.dismissAll(_this.modalContent);
            alert("your alert has been send ");
            return;
        }, function (error) {
            var modalRef = _this.modalService.dismissAll;
            alert("try agine ");
            return;
        });
    };
    ForYouListComponent.prototype.deletePost = function (id) {
        var _this = this;
        this.publicationService
            .deleteMyPubliction({ id: id })
            .subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var index;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ListCopy.findIndex(function (itam) { return itam["_id"] === id; })];
                    case 1:
                        index = _a.sent();
                        return [4 /*yield*/, this.ListCopy.splice(index, 1)];
                    case 2:
                        _a.sent();
                        this.ref.detectChanges();
                        alert("Post  has been deleted");
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ForYouListComponent.ctorParameters = function () { return [
        { type: _services_publication_service__WEBPACK_IMPORTED_MODULE_4__["PublicationService"] },
        { type: src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_5__["LoggedInUserService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
        { type: src_app_services_singles_service__WEBPACK_IMPORTED_MODULE_7__["SinglesService"] }
    ]; };
    ForYouListComponent.propDecorators = {
        ListCopy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        Listimage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        isCollapsed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        coutReationPublication: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        coutReationPublicationReply: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        modalContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["modalContent", { static: true },] }]
    };
    ForYouListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-for-you-list",
            template: _raw_loader_for_you_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
            styles: [_for_you_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_publication_service__WEBPACK_IMPORTED_MODULE_4__["PublicationService"],
            src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_5__["LoggedInUserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            src_app_services_singles_service__WEBPACK_IMPORTED_MODULE_7__["SinglesService"]])
    ], ForYouListComponent);
    return ForYouListComponent;
}());



/***/ }),

/***/ "/uvt":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/searsh/searsh.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"input-group\">\n     <div class=\"input-group-prepend\">\n       <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n     </div>\n     <input\n       type=\"text\"\n       class=\"form-control\"\n       placeholder=\"Recherche...\"\n     />\n \n    \n  </div> -->\n\n<div class=\"row\" style=\"padding: 15px\">\n    <select class=\"btn btn-primary dropdown-toggle dropdown-toggle btn-sm mr-1 form-select\" aria-label=\"Default select example\">\n    <option selected>Art Direction</option>\n    <option value=\"1\">One</option>\n    <option value=\"2\">Two</option>\n    <option value=\"3\">Three</option>\n  </select>\n    <input style=\"padding: 5px\" class=\"btn btn-primary btn-sm mr-1 form-select\" type=\"color\" ng-model=\"color\" />\n    <select class=\"btn btn-primary dropdown-toggle dropdown-toggle btn-sm mr-1 form-select\" aria-label=\"Default select example\">\n    <option selected>Tools</option>\n    <option value=\"1\">One</option>\n    <option value=\"2\">Two</option>\n    <option value=\"3\">Three</option>\n  </select>\n\n    <select class=\"btn btn-primary dropdown-toggle dropdown-toggle btn-sm mr-1 form-select\" aria-label=\"Default select example\">\n    <option selected>Schools</option>\n    <option value=\"1\">One</option>\n    <option value=\"2\">Two</option>\n    <option value=\"3\">Three</option>\n  </select>\n</div>");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\project angular\ARTVERSE-PROJECT\src\main.ts */"zUnb");


/***/ }),

/***/ "00il":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/profilepage/profilepage.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\">\n  <div class=\"container\">\n    <div class=\"navbar-translate\"></div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <img class=\"dots\" src=\"assets/img/dots.png\" />\n\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <div class=\"container align-items-center\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6\">\n          <h1 class=\"profile-title text-left\">Mike Scheinder</h1>\n          <h5 class=\"text-on-back\">01</h5>\n          <p class=\"profile-description\">\n            Offices parties lasting outward nothing age few resolve. Impression\n            to discretion understood to we interested he excellence. Him\n            remarkably use projection collecting. Going about eat forty world\n            has round miles.\n          </p>\n          <div class=\"btn-wrapper profile pt-3\">\n            <a\n              class=\"btn btn-icon btn-twitter btn-round mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\">\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-facebook btn-round mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\">\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-dribbble btn-round\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\">\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6 ml-auto mr-auto\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img\n                class=\"img-center img-fluid rounded-circle\"\n                src=\"assets/img/mike.jpg\" />\n\n              <h4 class=\"title\">Transactions</h4>\n            </div>\n            <div class=\"card-body\">\n              <tabset\n                class=\"nav-tabs-danger justify-content-center tab-subcategories\">\n                <tab heading=\"Wallet\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table tablesorter\" id=\"plain-table\">\n                      <thead class=\"text-danger\">\n                        <tr>\n                          <th class=\"header\">COIN</th>\n                          <th class=\"header\">AMOUNT</th>\n                          <th class=\"header\">VALUE</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>BTC</td>\n                          <td>7.342</td>\n                          <td>48,870.75 USD</td>\n                        </tr>\n                        <tr>\n                          <td>ETH</td>\n                          <td>30.737</td>\n                          <td>64,53.30 USD</td>\n                        </tr>\n                        <tr>\n                          <td>XRP</td>\n                          <td>19.242</td>\n                          <td>18,354.96 USD</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </tab>\n                <tab heading=\"Send\">\n                  <div class=\"row\">\n                    <label class=\"col-sm-3 col-form-label\"> Pay to </label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"form-group\">\n                        <input\n                          class=\"form-control\"\n                          placeholder=\"e.g. 1Nasd92348hU984353hfid\"\n                          type=\"text\" />\n\n                        <span class=\"form-text\">\n                          Please enter a valid address.\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <label class=\"col-sm-3 col-form-label\"> Amount </label>\n                    <div class=\"col-sm-9\">\n                      <div class=\"form-group\">\n                        <input\n                          class=\"form-control\"\n                          placeholder=\"1.587\"\n                          type=\"text\" />\n                      </div>\n                    </div>\n                  </div>\n                  <button\n                    class=\"btn btn-simple btn-danger btn-icon btn-round float-right\"\n                    type=\"submit\">\n                    <i class=\"tim-icons icon-send\"> </i>\n                  </button>\n                </tab>\n                <tab heading=\"News\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table tablesorter\" id=\"plain-table\">\n                      <thead class=\"text-danger\">\n                        <tr>\n                          <th class=\"header\">Latest Crypto News</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>The Daily: Nexo to Pay on Stable...</td>\n                        </tr>\n                        <tr>\n                          <td>Venezuela Begins Public of Nation...</td>\n                        </tr>\n                        <tr>\n                          <td>PR: BitCanna â Dutch Blockchain...</td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </tab>\n              </tabset>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "0Z7I":
/*!********************************************************************!*\
  !*** ./src/app/component/repoted-post/repoted-post.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".prg {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZXBvdGVkLXBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0FBQ0QiLCJmaWxlIjoicmVwb3RlZC1wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByZ3tcbiBjb2xvcjogYmxhY2s7XG59Il19 */");

/***/ }),

/***/ "1hZR":
/*!********************************************************!*\
  !*** ./src/app/component/footer/footer.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  height: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICAgIGhlaWdodDogMTIwcHg7XG59Il19 */");

/***/ }),

/***/ "2jGa":
/*!***************************************************!*\
  !*** ./src/app/autoresize-directive.directive.ts ***!
  \***************************************************/
/*! exports provided: AutoresizeDirectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoresizeDirectiveDirective", function() { return AutoresizeDirectiveDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var AutoresizeDirectiveDirective = /** @class */ (function () {
    function AutoresizeDirectiveDirective(el) {
        this.el = el;
        // Set the initial number of rows to 1
        // this.el.nativeElement.rows = 1;
    }
    AutoresizeDirectiveDirective.prototype.onInput = function () {
        // const { scrollHeight, lineHeight } = this.el.nativeElement;
        this.el.nativeElement.style.backgroundColor = "red";
        // const rows = Math.ceil(scrollHeight / lineHeight);
        // // Increase the number of rows by 1 whenever a newline character is typed at the end of the current line
        // if (this.el.nativeElement.value.endsWith("\n")) {
        //   this.el.nativeElement.rows = rows + 1;
        // } else {
        //   this.el.nativeElement.rows = rows;
        // }
    };
    AutoresizeDirectiveDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    AutoresizeDirectiveDirective.propDecorators = {
        onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["mouseenter",] }]
    };
    AutoresizeDirectiveDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "AutoresizeDirective",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AutoresizeDirectiveDirective);
    return AutoresizeDirectiveDirective;
}());



/***/ }),

/***/ "47RM":
/*!**************************************************************!*\
  !*** ./src/app/component/suggestion/suggestion.component.ts ***!
  \**************************************************************/
/*! exports provided: SuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionComponent", function() { return SuggestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_suggestion_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./suggestion.component.html */ "kehh");
/* harmony import */ var _suggestion_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suggestion.component.scss */ "jsby");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");





var SuggestionComponent = /** @class */ (function () {
    function SuggestionComponent(userServ) {
        this.userServ = userServ;
        this.test = {
            0: {
                _id: "64260ca14d6a3f8054474d44",
                firstname: "yosra",
                lastname: "yosra",
                username: "yos",
                email: "yos@gmail.co",
                bio: "this is a bio for yosra",
                followers: [],
                galerie: [],
                liens: [
                    "https://www.facebook.com/yosra.wanene/",
                    "https://www.linkedin.com/in/yosra-wanene-3ba8a2214/",
                    "https://twitter.com/yosra_wanene",
                ],
                __v: 0,
            },
            1: {
                _id: "fjhfhgdtydry",
                firstname: "test",
                lastname: "test",
                username: "yos",
                email: "yos@gmail.co",
                bio: "this is a bio for yosra",
                followers: [],
                galerie: [],
                liens: [
                    "https://www.facebook.com/yosra.wanene/",
                    "https://www.linkedin.com/in/yosra-wanene-3ba8a2214/",
                    "https://twitter.com/yosra_wanene",
                ],
                __v: 0,
            },
        };
    }
    SuggestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("hjgjhfgtest", this.test);
        this.userServ.getAllUsers().subscribe(function (res) {
            var users = Object.values(res); // cast the object to an array
            _this.suggested = users.slice(0, 3); // get the first three elements
            console.log("suggest", _this.suggested);
            console.log("suggest", _this.suggested[0]["firstname"]);
        });
        this.userServ.findUserByUsername("yosrawanene28").subscribe(function (res) {
            _this.user = res;
            console.log("username load", _this.user);
        });
        console.log("suggest2", this.suggested);
        console.log("username load2", this.user);
    };
    SuggestionComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    SuggestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-suggestion",
            template: _raw_loader_suggestion_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_suggestion_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], SuggestionComponent);
    return SuggestionComponent;
}());



/***/ }),

/***/ "639g":
/*!**************************************************************!*\
  !*** ./src/app/component/all-users/all-users.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "69r7":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registerpage/registerpage.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header\">\n        <div class=\"page-header-image\"></div>\n        <div class=\"content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"card card-register\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 d-none d-md-block\">\n                                <img alt=\"First slide\" class=\"img-fluid h-100\" src=\"assets/img/sign.jpeg\" />\n                            </div>\n\n                            <div class=\"col-md-8 col-sm-12\">\n                                <div class=\"card-body\">\n                                    <div class=\"ml-auto mr-auto\">\n                                        <h3 class=\"mb-3 display-4 mt-4\">Sign Up to Artverse•</h3>\n                                    </div>\n                                    <!-- <div class=\"btn-wrapper text-center\">\n                    <a\n                      class=\"btn btn-neutral btn-icon mr-1\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img src=\"assets/img/github.svg\" />\n                    </a>\n                    <a\n                      class=\"btn btn-neutral btn-icon\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img src=\"assets/img/google.svg\" />\n                    </a>\n                  </div> -->\n                                    <div class=\"mb-4 mt-3\">\n                                        <p>Join the world of digital art on Artverse!</p>\n                                    </div>\n\n                                    <form class=\"form\" [formGroup]=\"inscriptionForm\" (ngSubmit)=\"inscri()\">\n                                        <div class=\"input-group\" [ngClass]=\"{\n                        'input-group-focus': focus === true,\n                        'has-danger':\n                          isSubmitted == true &&\n                          inscriptionForm.controls.firstname.invalid,\n                        'has-success':\n                          isSubmitted == true &&\n                          inscriptionForm.controls.firstname.valid\n                      }\">\n                                            <div class=\"input-group-prepend\">\n                                                <div class=\"input-group-text\">\n                                                    <i class=\"tim-icons icon-single-02\"> </i>\n                                                </div>\n                                            </div>\n                                            <input class=\"form-control\" placeholder=\"Firstname\" [(ngModel)]=\"firstname\" formControlName=\"firstname\" type=\"text\" (focus)=\"focus = true\" (blur)=\"focus = false\" />\n                                        </div>\n                                        <div class=\"input-group\" [ngClass]=\"{\n                        'input-group-focus': focus1 === true,\n                        'has-danger':\n                          isSubmitted == true &&\n                          inscriptionForm.controls.lastname.invalid,\n                        'has-success':\n                          isSubmitted == true &&\n                          inscriptionForm.controls.lastname.valid\n                      }\">\n                                            <div class=\"input-group-prepend\">\n                                                <div class=\"input-group-text\">\n                                                    <i class=\"tim-icons icon-single-02\"> </i>\n                                                </div>\n                                            </div>\n                                            <input class=\"form-control\" placeholder=\"Lastname\" [(ngModel)]=\"lastname\" formControlName=\"lastname\" type=\"text\" (focus)=\"focus1 = true\" (blur)=\"focus1 = false\" />\n                                        </div>\n\n                                        <div class=\"input-group\" [ngClass]=\"{\n                        'input-group-focus': focus2 === true,\n                        'has-danger':\n                          isSubmitted == true &&\n                          inscriptionForm.controls.email.invalid,\n                        'has-success':\n                          isSubmitted == true &&\n                          inscriptionForm.controls.email.valid\n                      }\">\n                                            <div class=\"input-group-prepend\">\n                                                <div class=\"input-group-text\">\n                                                    <i class=\"tim-icons icon-email-85\"> </i>\n                                                </div>\n                                            </div>\n                                            <input class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"email\" formControlName=\"email\" type=\"text\" (focus)=\"focus2 = true\" (blur)=\"focus2 = false\" />\n                                        </div>\n                                        <div class=\"input-group\" [ngClass]=\"{\n                        'input-group-focus': focus3 === true,\n                        'has-danger':\n                          isSubmitted == true &&\n                          inscriptionForm.controls.password.invalid,\n                        'has-success':\n                          isSubmitted == true &&\n                          inscriptionForm.controls.password.valid\n                      }\">\n                                            <div class=\"input-group-prepend\">\n                                                <div class=\"input-group-text\">\n                                                    <i class=\"tim-icons icon-lock-circle\"> </i>\n                                                </div>\n                                            </div>\n                                            <input class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\" formControlName=\"password\" type=\"password\" (focus)=\"focus3 = true\" (blur)=\"focus3 = false\" />\n                                        </div>\n                                        <div class=\"input-group\" [ngClass]=\"{\n                        'input-group-focus': focus4 === true,\n                        'has-danger':\n                          isSubmitted == true &&\n                          inscriptionForm.controls.bio.invalid,\n                        'has-success':\n                          isSubmitted == true &&\n                          inscriptionForm.controls.bio.valid\n                      }\">\n                                            <div class=\"input-group-prepend\">\n                                                <div class=\"input-group-text\">\n                                                    <i class=\"tim-icons icon-email-85\"> </i>\n                                                </div>\n                                            </div>\n                                            <input class=\"form-control\" placeholder=\"bio\" [(ngModel)]=\"bio\" formControlName=\"bio\" type=\"text\" (focus)=\"focus4 = true\" (blur)=\"focus4 = false\" />\n                                        </div>\n\n                                        <div class=\"card-footer\">\n                                            <button class=\"btn btn-primary\" href=\"javascript:void(0)\">\n                        Register Now!\n                      </button>\n                                        </div>\n                                    </form>\n                                    <div class=\"mt-3\">\n                                        <p>\n                                            Don't you have an account ?\n                                            <a href=\"\" [routerLink]=\"['/login']\">create new one</a>\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "6V8c":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login-page.component.html */ "dgLM");
/* harmony import */ var _login_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-page.component.scss */ "y5h7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/authentification.service */ "izgN");
/* harmony import */ var src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/logged-in-user.service */ "GHSY");









var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(authServ, route, loggedUserServ, modalService) {
        this.authServ = authServ;
        this.route = route;
        this.loggedUserServ = loggedUserServ;
        this.modalService = modalService;
        this.isSubmitted = false;
        this.initializeForm();
    }
    LoginPageComponent.prototype.showForgotPasswordModal = function () {
        this.modalService.open(this.forgotPasswordModal, { centered: true });
    };
    LoginPageComponent.prototype.ngOnInit = function () {
        this.resetByEmail = this.email;
    };
    LoginPageComponent.prototype.initializeForm = function () {
        this.cnxForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.pswd, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.email, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email,
            ]),
        });
    };
    LoginPageComponent.prototype.resetPasswd = function () {
        var _this = this;
        console.log(this.resetByEmail);
        this.authServ.sendMailResetPassword(this.resetByEmail).subscribe(function (response) {
            console.log("Success", response);
            alert("an email was sent for you !");
            _this.route.navigate(["/home"]);
            // Handle success case here
        }, function (error) {
            console.log("this.resetByEmail", _this.resetByEmail);
            console.log("Error", error);
            // Handle error case here
        });
    };
    LoginPageComponent.prototype.cnx = function () {
        var _this = this;
        this.userData = {
            password: this.pswd,
            email: this.email,
        };
        this.isSubmitted = true;
        if (this.cnxForm.invalid) {
            return false;
        }
        else {
            this.authServ.login(this.userData).subscribe(function (res) {
                // console.log("res result", res);
                localStorage.setItem("token", res);
                console.log("res login", res);
                _this.idUser = _this.loggedUserServ.getUserID();
                console.log("idddd", _this.idUser);
                _this.loggedUserServ.findUserById(_this.idUser).subscribe(function (res) {
                    _this.loggedInUser = res;
                    console.log(_this.loggedInUser);
                });
                // this.route.navigate(["/profile"]);
                _this.route.navigate(["/home"]);
            }, function (err) {
                console.log("the err", err);
            });
        }
    };
    LoginPageComponent.ctorParameters = function () { return [
        { type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_7__["AuthentificationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_8__["LoggedInUserService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
    ]; };
    LoginPageComponent.propDecorators = {
        forgotPasswordModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["forgotPasswordModal",] }]
    };
    LoginPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-login-page",
            template: _raw_loader_login_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_login_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_7__["AuthentificationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_8__["LoggedInUserService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "8EQV":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/show-challenge/show-challenge.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-hover col-lg-9 mr-4\">\n     <thead>\n       <tr>\n        <th>challenge title </th>\n         <th>Category</th>\n         <th>deadline </th>\n         <th>partenaire</th>\n         <th>winner</th>\n         <th>number of participants</th>\n         <th></th>\n         <th></th>\n         <th></th>\n       </tr>\n     </thead>\n     <tbody>\n       <tr  *ngFor=\"let sng of challengesCopy\"  >\n     \n          <th>{{sng['title']}}</th>\n          <th>{{sng['Category']}}</th>\n          <th>{{sng['deadline']}}</th>\n          <th>{{sng['partenaire']}}</th>\n          <th>{{sng['winner'] ? sng['winnersData']['firstname']+' ' +sng['winnersData']['lastname'] : 'waiting'}}</th>\n\n          <th>{{count(sng['participants'])}}</th>\n          <th><button class=\"btn btn-default btn-sm\" >Edit</button></th>\n          <th ><button class=\"btn btn-default btn-sm \" (click)=\"deteleChallenges(sng['_id'] , sng['title'])\" > Delete</button></th>\n          <th><button class=\"btn btn-default btn-sm\" [routerLink]=\"['/Challange', sng['_id']]\">Show</button>\n\n          </th>\n          \n \n         \n       </tr>\n     </tbody>\n   </table>\n   ");

/***/ }),

/***/ "8jZd":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/landingpage/landingpage.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        [routerLink]=\"['/home']\"\n        placement=\"bottom\"\n        tooltip=\"Designed and Coded by Creative Tim\"\n      >\n        <span> BLK• </span> Design System Angular\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\"><a> BLK• </a></div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://twitter.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Twitter</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.facebook.com/CreativeTim\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Facebook</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            href=\"https://www.instagram.com/CreativeTimOfficial\"\n            placement=\"bottom\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"> </i>\n            <p class=\"d-lg-none d-xl-none\">Instagram</p>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\"> Back to Kit </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            href=\"https://github.com/creativetimofficial/blk-design-system-angular/issues\"\n          >\n            Have an issue?\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <img class=\"path\" src=\"assets/img/blob.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path2.png\" />\n\n    <img class=\"shapes triangle\" src=\"assets/img/triunghiuri.png\" />\n\n    <img class=\"shapes wave\" src=\"assets/img/waves.png\" />\n\n    <img class=\"shapes squares\" src=\"assets/img/patrat.png\" />\n\n    <img class=\"shapes circle\" src=\"assets/img/cercuri.png\" />\n\n    <div class=\"content-center\">\n      <div\n        class=\"row row-grid justify-content-between align-items-center text-left\"\n      >\n        <div class=\"col-lg-6 col-md-6\">\n          <h1 class=\"text-white\">\n            We keep your coin <br />\n\n            <span class=\"text-white\"> secured </span>\n          </h1>\n          <p class=\"text-white mb-3\">\n            A wonderful serenity has taken possession of my entire soul, like\n            these sweet mornings of spring which I enjoy with my whole heart. I\n            am alone, and feel...\n          </p>\n          <div class=\"btn-wrapper mb-3\">\n            <p class=\"category text-success d-inline mr-1\">From 9.99%/mo</p>\n            <a\n              class=\"btn btn-success btn-link btn-sm\"\n              href=\"javascript:void(0)\"\n            >\n              <i class=\"tim-icons icon-minimal-right\"> </i>\n            </a>\n          </div>\n          <div class=\"btn-wrapper\">\n            <div class=\"button-container\">\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-twitter\"> </i>\n              </button>\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-dribbble\"> </i>\n              </button>\n              <button\n                class=\"btn btn-icon btn-simple btn-round btn-neutral\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\"fab fa-facebook\"> </i>\n              </button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-5\">\n          <img\n            alt=\"Circle image\"\n            class=\"img-fluid\"\n            src=\"assets/img/etherum.png\"\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n  <section class=\"section section-lg\">\n    <section class=\"section\">\n      <img class=\"path\" src=\"assets/img/path4.png\" />\n\n      <div class=\"container\">\n        <div class=\"row row-grid justify-content-between\">\n          <div class=\"col-md-5 mt-lg-5\">\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-trophy text-warning\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">3,237</p>\n                          <p></p>\n                          <p class=\"card-category\">Awards</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats upper bg-default\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-coins text-white\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">3,653</p>\n                          <p></p>\n                          <p class=\"card-category\">Commits</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-gift-2 text-info\"> </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">593</p>\n                          <p></p>\n                          <p class=\"card-category\">Presents</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-sm-12 px-2 py-2\">\n                <div class=\"card card-stats\">\n                  <div class=\"card-body\">\n                    <div class=\"row\">\n                      <div class=\"col-5 col-md-4\">\n                        <div class=\"icon-big text-center icon-warning\">\n                          <i class=\"tim-icons icon-credit-card text-success\">\n                          </i>\n                        </div>\n                      </div>\n                      <div class=\"col-7 col-md-8\">\n                        <div class=\"numbers\">\n                          <p class=\"card-title\">10,783</p>\n                          <p></p>\n                          <p class=\"card-category\">Forks</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"pl-md-5\">\n              <h1>\n                Large <br />\n                Achivements\n              </h1>\n              <p>\n                I should be capable of drawing a single stroke at the present\n                moment; and yet I feel that I never was a greater artist than\n                now.\n              </p>\n              <br />\n\n              <p>\n                When, while the lovely valley teems with vapour around me, and\n                the meridian sun strikes the upper surface of the impenetrable\n                foliage of my trees, and but a few stray.\n              </p>\n              <br />\n\n              <a\n                class=\"font-weight-bold text-info mt-5\"\n                href=\"javascript:void(0)\"\n              >\n                Show all <i class=\"tim-icons icon-minimal-right text-info\"> </i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </section>\n  <section class=\"section section-lg\">\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path5.png\" />\n\n    <img class=\"path3\" src=\"assets/img/path2.png\" />\n\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <h1 class=\"text-center\">Your best benefit</h1>\n          <div class=\"row row-grid justify-content-center\">\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-primary\">\n                  <i class=\"tim-icons icon-money-coins\"> </i>\n                </div>\n                <h4 class=\"info-title\">Low Commission</h4>\n                <hr class=\"line-primary\" />\n\n                <p>\n                  Divide details about your work into parts. Write a few lines\n                  about each one. A paragraph describing a feature will.\n                </p>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-warning\">\n                  <i class=\"tim-icons icon-chart-pie-36\"> </i>\n                </div>\n                <h4 class=\"info-title\">High Incomes</h4>\n                <hr class=\"line-warning\" />\n\n                <p>\n                  Divide details about your product or agency work into parts.\n                  Write a few lines about each one. A paragraph describing\n                  feature will be a feature.\n                </p>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <div class=\"info\">\n                <div class=\"icon icon-success\">\n                  <i class=\"tim-icons icon-single-02\"> </i>\n                </div>\n                <h4 class=\"info-title\">Verified People</h4>\n                <hr class=\"line-success\" />\n\n                <p>\n                  Divide details about your product or agency work into parts.\n                  Write a few lines about each one. A paragraph describing be\n                  enough.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg section-safe\">\n    <img class=\"path\" src=\"assets/img/path5.png\" />\n\n    <div class=\"container\">\n      <div class=\"row row-grid justify-content-between\">\n        <div class=\"col-md-5\">\n          <img class=\"img-fluid floating\" src=\"assets/img/chester-wade.jpg\" />\n\n          <div class=\"card card-stats bg-danger\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">100%</p>\n                  <p class=\"card-category text-white\">Safe</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-stats bg-info\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">573 K</p>\n                  <p class=\"card-category text-white\">Satisfied customers</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"card card-stats bg-default\">\n            <div class=\"card-body\">\n              <div class=\"justify-content-center\">\n                <div class=\"numbers\">\n                  <p class=\"card-title\">10 425</p>\n                  <p class=\"card-category text-white\">Business</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"px-md-5\">\n            <hr class=\"line-success\" />\n\n            <h3>Awesome features</h3>\n            <p>\n              The design system comes with three pre-built pages to help you get\n              started faster. You can change the text and images and you're good\n              to go.\n            </p>\n            <ul class=\"list-unstyled mt-5\">\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-vector\"> </i>\n                  </div>\n                  <div class=\"ml-3\">\n                    <h6>Carefully crafted components</h6>\n                  </div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-tap-02\"> </i>\n                  </div>\n                  <div class=\"ml-3\">\n                    <h6>Amazing page examples</h6>\n                  </div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"icon icon-success mb-2\">\n                    <i class=\"tim-icons icon-single-02\"> </i>\n                  </div>\n                  <div class=\"ml-3\">\n                    <h6>Super friendly support team</h6>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg\">\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n\n    <img class=\"path2\" src=\"assets/img/path2.png\" />\n\n    <div class=\"col-md-12\">\n      <div class=\"card card-chart card-plain\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-sm-6 text-left\">\n              <hr class=\"line-primary\" />\n\n              <h5 class=\"card-category\">Total Investments</h5>\n              <h2 class=\"card-title\">Performance</h2>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"chart-area\"><canvas id=\"chartBig\"> </canvas></div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg section-coins\">\n    <img class=\"path\" src=\"assets/img/path3.png\" />\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <hr class=\"line-info\" />\n\n          <h1>\n            Choose the coin\n            <span class=\"text-info\"> that fits your needs </span>\n          </h1>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/bitcoin.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Light Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-primary\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">50 messages</li>\n                  <li class=\"list-group-item\">100 emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-primary btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/etherum.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Dark Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-success\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">150 messages</li>\n                  <li class=\"list-group-item\">1000 emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-success btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-coin card-plain\">\n            <div class=\"card-header\">\n              <img class=\"img-center img-fluid\" src=\"assets/img/ripp.png\" />\n            </div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-12 text-center\">\n                  <h4 class=\"text-uppercase\">Bright Coin</h4>\n                  <span> Plan </span>\n                  <hr class=\"line-info\" />\n                </div>\n              </div>\n              <div class=\"row\">\n                <ul class=\"list-group\">\n                  <li class=\"list-group-item\">350 messages</li>\n                  <li class=\"list-group-item\">10K emails</li>\n                  <li class=\"list-group-item\">24/7 Support</li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"card-footer text-center\">\n              <button class=\"btn btn-info btn-simple\">Get plan</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <h1 class=\"title\">BLK•</h1>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-4\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a\n                class=\"nav-link\"\n                href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\"\n              >\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a\n                class=\"nav-link\"\n                href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\"\n              >\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a\n                class=\"nav-link\"\n                href=\"https://creative-tim.com/blog?ref=blkdsa-footer\"\n              >\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "8ou0":
/*!******************************************************************************!*\
  !*** ./src/app/pages/reset-password-page/reset-password-page.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "9eMp":
/*!********************************************************************!*\
  !*** ./src/app/pages/error-not-found/error-not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: ErrorNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorNotFoundComponent", function() { return ErrorNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_error_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./error-not-found.component.html */ "jO8A");
/* harmony import */ var _error_not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-not-found.component.scss */ "KBZa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var ErrorNotFoundComponent = /** @class */ (function () {
    function ErrorNotFoundComponent() {
    }
    ErrorNotFoundComponent.prototype.ngOnInit = function () {
    };
    ErrorNotFoundComponent.ctorParameters = function () { return []; };
    ErrorNotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-error-not-found',
            template: _raw_loader_error_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_error_not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ErrorNotFoundComponent);
    return ErrorNotFoundComponent;
}());



/***/ }),

/***/ "9rL2":
/*!**********************************************************************!*\
  !*** ./src/app/component/add-challenge/add-challenge.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY2hhbGxlbmdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "C0TV":
/*!****************************************************************!*\
  !*** ./src/app/component/challenges/challenges.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-header {\n  /* min-height: 100vh; */\n  max-height: none;\n  padding: 0;\n  color: #ffffff;\n  position: relative;\n  overflow: visible;\n  /* overflow-x: hidden; */\n  /* overflow-y: hidden; */\n}\n\n.form-label-image {\n  color: rgba(255, 255, 255, 0.6);\n  background: cadetblue;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGFsbGVuZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQyxpQkFBQTtFQUNELHdCQUFBO0VBQ0Esd0JBQUE7QUFDTDs7QUFJRztFQUNFLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFETCIsImZpbGUiOiJjaGFsbGVuZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaGVhZGVyIHtcbiAgICAgLyogbWluLWhlaWdodDogMTAwdmg7ICovXG4gICAgIG1heC1oZWlnaHQ6IG5vbmU7IFxuICAgICBwYWRkaW5nOiAwO1xuICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgb3ZlcmZsb3cgOnZpc2libGUgO1xuICAgICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXG4gICAgIC8qIG92ZXJmbG93LXk6IGhpZGRlbjsgKi9cbiAgIH1cblxuICAgXG5cbiAgIC5mb3JtLWxhYmVsLWltYWdlIHtcbiAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgICAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xuICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgfSJdfQ== */");

/***/ }),

/***/ "CKhZ":
/*!************************************************************!*\
  !*** ./src/app/component/all-users/all-users.component.ts ***!
  \************************************************************/
/*! exports provided: AllUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllUsersComponent", function() { return AllUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_all_users_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./all-users.component.html */ "xujK");
/* harmony import */ var _all_users_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-users.component.scss */ "639g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/publication.service */ "wzbf");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/project.service */ "c3AT");








var AllUsersComponent = /** @class */ (function () {
    function AllUsersComponent(userServ, pubService, ref, projService) {
        this.userServ = userServ;
        this.pubService = pubService;
        this.ref = ref;
        this.projService = projService;
        this.users = [];
        this.hoveredUser = "";
        this.Allpub = [];
        this.Allproject = [];
    }
    AllUsersComponent.prototype.onRowHover = function (user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a, nbpub, nbLike, nbComment, nbFollewers, _i, _b, item, nbProject, nbView, _c, _d, item;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, user];
                    case 1:
                        _a.hoveredUser = _e.sent();
                        nbpub = 0;
                        nbLike = 0;
                        nbComment = 0;
                        nbFollewers = this.hoveredUser["followers"].length;
                        for (_i = 0, _b = this.Allpub; _i < _b.length; _i++) {
                            item = _b[_i];
                            if (this.hoveredUser["_id"] === item["Id_user"]) {
                                nbpub++;
                                nbLike += item["reaction"].length;
                                nbComment += item["commentaires"].length;
                            }
                        }
                        nbProject = 0;
                        nbView = 0;
                        for (_c = 0, _d = this.Allproject; _c < _d.length; _c++) {
                            item = _d[_c];
                            if (this.hoveredUser["_id"] === item["Id_user"]) {
                                nbProject++;
                                nbView += item["vueNumber"];
                            }
                        }
                        this.chartStat(nbpub, nbProject, nbLike, nbComment, nbFollewers, nbView);
                        return [2 /*return*/];
                }
            });
        });
    };
    AllUsersComponent.prototype.getAllPosts = function () {
        var _this = this;
        this.pubService.getPost().subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, data];
                    case 1:
                        _a.Allpub = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AllUsersComponent.prototype.getAllProject = function () {
        var _this = this;
        this.projService.getAllProject().subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, data];
                    case 1:
                        _a.Allproject = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AllUsersComponent.prototype.displayUsers = function () {
        var _this = this;
        this.userServ.getAllUsers().subscribe(function (data) {
            _this.users = data;
        });
    };
    AllUsersComponent.prototype.chartStat = function (nbPub, nbProject, nbLike, nbComment, nbFollewers, nbView) {
        var canvas = document.getElementById("chartBig");
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
        gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
        gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
        var chartBig = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](ctx, {
            type: "line",
            responsive: true,
            data: {
                labels: ["pub", "project", "likes", "comments", "followers", "views"],
                datasets: [
                    {
                        label: "stat",
                        fill: true,
                        backgroundColor: gradientFill,
                        borderColor: "#e44cc4",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: "#e44cc4",
                        pointBorderColor: "rgba(255,255,255,0)",
                        pointHoverBackgroundColor: "#be55ed",
                        //pointHoverBorderColor:'rgba(35,46,55,1)',
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: [nbPub, nbProject, nbLike, nbComment, nbFollewers, nbView],
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                tooltips: {
                    backgroundColor: "#fff",
                    titleFontColor: "#ccc",
                    bodyFontColor: "#666",
                },
                // responsive: true,
                scales: {
                    yAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0.0)",
                                zeroLineColor: "transparent",
                            },
                            ticks: {
                                display: false,
                            },
                        },
                    ],
                    xAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0)",
                                zeroLineColor: "transparent",
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9a9a9a",
                            },
                        },
                    ],
                },
            },
        });
    };
    AllUsersComponent.prototype.ngOnInit = function () {
        this.displayUsers();
        this.getAllPosts();
        this.getAllProject();
    };
    AllUsersComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"] }
    ]; };
    AllUsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-all-users",
            template: _raw_loader_all_users_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
            styles: [_all_users_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
            src_app_services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"]])
    ], AllUsersComponent);
    return AllUsersComponent;
}());



/***/ }),

/***/ "Dgdm":
/*!****************************************************************!*\
  !*** ./src/app/component/add-comment/add-comment.component.ts ***!
  \****************************************************************/
/*! exports provided: AddCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentComponent", function() { return AddCommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_comment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-comment.component.html */ "x7Ro");
/* harmony import */ var _add_comment_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-comment.component.scss */ "XSaY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_publication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/publication.service */ "wzbf");
/* harmony import */ var src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/logged-in-user.service */ "GHSY");
/* harmony import */ var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/authentification.service */ "izgN");







var AddCommentComponent = /** @class */ (function () {
    function AddCommentComponent(loggedUserServ, publicationService, cdf, authserv) {
        this.loggedUserServ = loggedUserServ;
        this.publicationService = publicationService;
        this.cdf = cdf;
        this.authserv = authserv;
        this.listCommentaire = [];
        this.idUser = this.loggedUserServ.getUserID();
    }
    AddCommentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listComm.forEach(function (com) {
            _this.authserv.findUserById(com["idUser"]).subscribe(function (data) {
                _this.listCommentaire.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, com), { userData: data }));
            });
        });
        this.findUser(this.idUser);
    };
    AddCommentComponent.prototype.findUser = function (id) {
        var _this = this;
        this.authserv.findUserById(id).subscribe(function (data) {
            _this.user = data;
        });
    };
    AddCommentComponent.prototype.postComment = function (comment) {
        var _this = this;
        this.publicationService
            .addcomment({
            comm: comment,
            idPub: this.idPub,
            iduser: this.idUser,
        })
            .subscribe(function (response) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.listCommentaire.push({
                            comment: comment,
                            idPub: this.idPub,
                            iduser: this.idUser,
                            reaction: 0,
                            comments: [],
                            userData: this.user,
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.listComm.push({
                                comment: comment,
                                idPub: this.idPub,
                                iduser: this.idUser,
                                reaction: 0,
                                comments: [],
                            })];
                    case 2:
                        _a.sent();
                        this.input.nativeElement.value = "";
                        this.cdf.detectChanges();
                        return [2 /*return*/];
                }
            });
        }); }, function (error) {
            console.error("err", error);
            // handle error from the API
        });
    };
    AddCommentComponent.prototype.reactionComm = function (index) {
        this.publicationService
            .addcommentreaction({
            commindex: index,
            idPub: this.idPub,
            iduser: this.idUser,
        })
            .subscribe(function (response) {
            console.log("ok", response);
        }, function (error) {
            console.error("err", error);
            // handle error from the API
        });
    };
    AddCommentComponent.prototype.postCommentReply = function (comment, index) {
        this.publicationService
            .addcommentReply({
            commindex: index,
            idPub: this.idPub,
            iduser: this.idUser,
            reply: comment.value,
        })
            .subscribe(function (response) {
            console.log("ok", response);
        }, function (error) {
            console.error("err", error);
            // handle error from the API
        });
    };
    AddCommentComponent.ctorParameters = function () { return [
        { type: src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_5__["LoggedInUserService"] },
        { type: _services_publication_service__WEBPACK_IMPORTED_MODULE_4__["PublicationService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_6__["AuthentificationService"] }
    ]; };
    AddCommentComponent.propDecorators = {
        idPub: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        listComm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["commentInput",] }]
    };
    AddCommentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-add-comment",
            template: _raw_loader_add_comment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
            styles: [_add_comment_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_5__["LoggedInUserService"],
            _services_publication_service__WEBPACK_IMPORTED_MODULE_4__["PublicationService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
            src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_6__["AuthentificationService"]])
    ], AddCommentComponent);
    return AddCommentComponent;
}());



/***/ }),

/***/ "EK2Y":
/*!********************************************************************!*\
  !*** ./src/app/component/add-challenge/add-challenge.component.ts ***!
  \********************************************************************/
/*! exports provided: AddChallengeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChallengeComponent", function() { return AddChallengeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_challenge_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-challenge.component.html */ "HTs4");
/* harmony import */ var _add_challenge_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-challenge.component.scss */ "9rL2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var src_app_services_singles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/singles.service */ "w+HY");






var AddChallengeComponent = /** @class */ (function () {
    function AddChallengeComponent(sanitizer, singlesService) {
        this.sanitizer = sanitizer;
        this.singlesService = singlesService;
        this.images = [];
    }
    AddChallengeComponent.prototype.ngOnInit = function () {
    };
    AddChallengeComponent.prototype.onFileSelected = function (event) {
        event.preventDefault(); // empêche le rafraîchissement de la page
        var files = event.target.files;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            var url = URL.createObjectURL(file);
            var safeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
            var image = {
                name: file.name,
                file: file,
                url: safeUrl,
            };
            this.images.push(image);
        }
    };
    AddChallengeComponent.prototype.clearSelectedImage = function (index) {
        this.images.splice(index, 1);
    };
    AddChallengeComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.inputTitle || !this.inputCategory || !this.inputpartenaire || !this.inputdeadline || !this.inputdescription || !this.images) {
            alert("Please fill in all fields and select an image.");
            return;
        }
        // create a new object to store form data
        var formData = new FormData();
        formData.append("title", this.inputTitle);
        formData.append("Category", this.inputCategory);
        formData.append("partenaire", this.inputpartenaire);
        formData.append("deadline", this.inputdeadline.toISOString());
        formData.append("description", this.inputdescription);
        this.images.forEach(function (image) { return formData.append("images", image.file); });
        console.log(formData);
        this.singlesService.creat_challenges(formData).subscribe(function (response) {
            console.log("ok", response);
            alert("the challenges has been added ");
            _this.inputTitle = '';
            _this.inputCategory = '';
            _this.inputpartenaire = '';
            _this.inputdeadline = null;
            _this.inputdescription = '';
            _this.images.splice(0, _this.images.length);
            return;
        }, function (error) {
            alert("try agine ");
            return;
        });
    };
    AddChallengeComponent.prototype.deletePubliction = function (id) {
    };
    AddChallengeComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
        { type: src_app_services_singles_service__WEBPACK_IMPORTED_MODULE_5__["SinglesService"] }
    ]; };
    AddChallengeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-add-challenge',
            template: _raw_loader_add_challenge_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_add_challenge_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            src_app_services_singles_service__WEBPACK_IMPORTED_MODULE_5__["SinglesService"]])
    ], AddChallengeComponent);
    return AddChallengeComponent;
}());



/***/ }),

/***/ "Ee1h":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard-admin/dashboard-admin.component.ts ***!
  \********************************************************************/
/*! exports provided: DashboardAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardAdminComponent", function() { return DashboardAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_admin_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard-admin.component.html */ "og8K");
/* harmony import */ var _dashboard_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-admin.component.scss */ "izJy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var DashboardAdminComponent = /** @class */ (function () {
    function DashboardAdminComponent() {
        this.isCollapsed = [];
    }
    DashboardAdminComponent.prototype.ngOnInit = function () {
    };
    DashboardAdminComponent.ctorParameters = function () { return []; };
    DashboardAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dashboard-admin',
            template: _raw_loader_dashboard_admin_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_dashboard_admin_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DashboardAdminComponent);
    return DashboardAdminComponent;
}());



/***/ }),

/***/ "Ev0r":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/feed-identity/feed-identity.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loggedInUser\" class=\"\">\n  <div class=\"card card-profile profile-bg align-items-center\">\n    <div class=\"card-header\">\n      <div class=\"card-avatar\">\n        <a href=\"\"><img class=\"img img-raised\" src=\"assets/img/mike.jpg\" /></a>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <h3 class=\"card-title\">\n        {{ loggedInUser[\"firstname\"] }} {{ loggedInUser[\"lastname\"] }}\n      </h3>\n      <h6 class=\"text-primary\">Photographer</h6>\n      <h5 class=\"text-muted\">\n        {{ loggedInUser[\"bio\"] }}\n      </h5>\n    </div>\n    <div class=\"card-footer\">\n      <div class=\"float-left\">\n        <a\n          [routerLink]=\"['/profile', loggedInUser['username']]\"\n          class=\"btn btn-primary btn-sm btn-simple\"\n          ><i class=\"tim-icons icon-single-02\"></i> View Profile\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "F149":
/*!*********************************************************************!*\
  !*** ./src/app/pages/examples/profilepage/profilepage.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfilepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepageComponent", function() { return ProfilepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profilepage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profilepage.component.html */ "00il");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



var ProfilepageComponent = /** @class */ (function () {
    function ProfilepageComponent() {
        this.isCollapsed = true;
    }
    ProfilepageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("profile-page");
    };
    ProfilepageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("profile-page");
    };
    ProfilepageComponent.ctorParameters = function () { return []; };
    ProfilepageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-profilepage",
            template: _raw_loader_profilepage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProfilepageComponent);
    return ProfilepageComponent;
}());



/***/ }),

/***/ "GHSY":
/*!****************************************************!*\
  !*** ./src/app/services/logged-in-user.service.ts ***!
  \****************************************************/
/*! exports provided: LoggedInUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInUserService", function() { return LoggedInUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



var LoggedInUserService = /** @class */ (function () {
    function LoggedInUserService(http) {
        this.http = http;
        this.loggedInUser = "achraf";
    }
    LoggedInUserService.prototype.getUserID = function () {
        var token = localStorage.getItem("token");
        var payload;
        if (token) {
            payload = JSON.parse(atob(token.split(".")[1]));
            console.log("payload loggedin", payload);
        }
        else {
            return null;
        }
        return payload._id;
    };
    LoggedInUserService.prototype.findUserById = function (id) {
        return this.http.get("https://artverse-project-api-nodejs.onrender.com/user/getUserById/" + id);
    };
    LoggedInUserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    LoggedInUserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoggedInUserService);
    return LoggedInUserService;
}());



/***/ }),

/***/ "GOjr":
/*!******************************************************************!*\
  !*** ./src/app/component/competition/competition.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wZXRpdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "H9Js":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/project/project.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"grid-container\" *ngIf=\"projectsCopy\">\n  <div class=\"row\">\n    <div *ngFor=\"let project of projectsCopy\">\n      <div (click)=\"vueCompt(project)\">\n        <div class=\"grid-item mx-3\" data-project=\"Project 2\">\n          <carousel\n            class=\"card-image\"\n            *ngIf=\"project['img']\"\n            [showIndicators]=\"false\"\n            pause\n          >\n            <slide *ngFor=\"let img of project['img']\" class=\"text-center\">\n              <img [src]=\"getImage(img['idimg'], project['_id'])\" />\n            </slide>\n          </carousel>\n          <div class=\"overlaytools\">\n            <p class=\"mx-2\">\n              {{ project[\"tools\"] }}\n            </p>\n          </div>\n\n          <div class=\"overlay\">\n            <h3>\n              {{ project[\"title\"] }}\n            </h3>\n            <p class=\"mx-2\" *ngFor=\"let categorie of project['catg']\">\n              {{ categorie }}\n            </p>\n          </div>\n        </div>\n        <div class=\"description mt-2 d-flex justify-content-between\">\n          <a\n            class=\"mx-3 text-light\"\n            [routerLink]=\"['/profile', project['userData']['username']]\"\n          >\n            {{ project[\"userData\"][\"firstname\"] }}\n            {{ project[\"userData\"][\"lastname\"] }}\n          </a>\n          <p>\n            <i class=\"fas fa-eye\"></i> {{ project[\"vueNumber\"] }}\n            <span class=\"\"\n              ><i class=\"fas fa-comment\" style=\"margin-left: 5px\"></i>\n              {{ project[\"coutCommentaire\"] }}</span\n            >\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "HTs4":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-challenge/add-challenge.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (submit)=\"onSubmit()\">\n     <div class=\"form-row\">\n       <div class=\"form-group col-md-6\">\n         <label for=\"inputTitle\">Title</label>\n         <input type=\"text\" class=\"form-control\" id=\"inputTitle\" [(ngModel)]=\"inputTitle\" name=\"inputTitle\" placeholder=\"Title\">\n       </div>\n       <div class=\"form-group col-md-6\">\n         <label for=\"inputCategory\">Category</label>\n         <input type=\"text\" class=\"form-control\" id=\"inputCategory\" [(ngModel)]=\"inputCategory\" name=\"inputCategory\" placeholder=\"Category\">\n       </div>\n     </div>\n     <div class=\"form-row\">\n       <div class=\"form-group col-md-6\">\n         <label for=\"inputPartenaire\">Partenaire</label>\n         <input type=\"text\" class=\"form-control\" id=\"inputPartenaire\"  [(ngModel)]=\"inputpartenaire\" name=\"inputPartenaire\" placeholder=\"Apartment, studio, or floor\">\n       </div>\n       <div class=\"form-group col-md-6\">\n         <label for=\"inputDeadline\">Deadline</label>\n         <input type=\"text\" class=\"form-control\" id=\"inputDeadline\" [(ngModel)]=\"inputdeadline\" name=\"inputDeadline\" bsDatepicker [bsConfig]=\"{ isAnimated: true, containerClass: 'theme-red' }\" placeholder=\"Datepicker\">\n       </div>\n     </div>\n   \n     <div class=\"form-group  \">\n          <label for=\"inputDescription\">Description</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputDescription\"  [(ngModel)]=\"inputdescription\" name=\"inputDescription\" placeholder=\"Apartment, studio, or floor\">\n        </div>\n     <div class=\"form-group\">\n       <label for=\"inputImage\" class=\"form-label-image\">Choose an image</label>\n       <input type=\"file\" class=\"custom-file-input\" id=\"inputImage\" (change)=\"onFileSelected($event)\" multiple>\n     </div>\n     <carousel *ngIf=\"images.length != 0\" [showIndicators]=\"false\" pause>\n       <slide *ngFor=\"let image of images; let i = index\" class=\"text-center\">\n         <button class=\"btn btn-primary btn-fab btn-icon btn-round\" (click)=\"clearSelectedImage(i)\">\n           <i class=\"tim-icons icon-gift-2\"></i>\n         </button>\n         <img *ngIf=\"image\" class=\"d-block w-50\" [src]=\"image['url']\" [alt]=\"image['name']\">\n       </slide>\n     </carousel>\n     <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n   </form>\n   ");

/***/ }),

/***/ "IfWR":
/*!*********************************************************************!*\
  !*** ./src/app/pages/examples/landingpage/landingpage.component.ts ***!
  \*********************************************************************/
/*! exports provided: LandingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingpageComponent", function() { return LandingpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_landingpage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./landingpage.component.html */ "8jZd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);




var LandingpageComponent = /** @class */ (function () {
    function LandingpageComponent() {
        this.isCollapsed = true;
    }
    LandingpageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("landing-page");
        var canvas = document.getElementById("chartBig");
        var ctx = canvas.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 350, 0, 50);
        gradientFill.addColorStop(0, "rgba(228, 76, 196, 0.0)");
        gradientFill.addColorStop(1, "rgba(228, 76, 196, 0.14)");
        var chartBig = new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(ctx, {
            type: "line",
            responsive: true,
            data: {
                labels: [
                    "JUN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC",
                ],
                datasets: [
                    {
                        label: "Data",
                        fill: true,
                        backgroundColor: gradientFill,
                        borderColor: "#e44cc4",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: "#e44cc4",
                        pointBorderColor: "rgba(255,255,255,0)",
                        pointHoverBackgroundColor: "#be55ed",
                        //pointHoverBorderColor:'rgba(35,46,55,1)',
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: [80, 160, 200, 160, 250, 280, 220, 190, 200, 250, 290, 320],
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                tooltips: {
                    backgroundColor: "#fff",
                    titleFontColor: "#ccc",
                    bodyFontColor: "#666",
                    bodySpacing: 4,
                    xPadding: 12,
                    mode: "nearest",
                    intersect: 0,
                    position: "nearest",
                },
                responsive: true,
                scales: {
                    yAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0.0)",
                                zeroLineColor: "transparent",
                            },
                            ticks: {
                                display: false,
                                suggestedMin: 0,
                                suggestedMax: 350,
                                padding: 20,
                                fontColor: "#9a9a9a",
                            },
                        },
                    ],
                    xAxes: [
                        {
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: "rgba(0,0,0,0)",
                                zeroLineColor: "transparent",
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "#9a9a9a",
                            },
                        },
                    ],
                },
            },
        });
    };
    LandingpageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("landing-page");
    };
    LandingpageComponent.ctorParameters = function () { return []; };
    LandingpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-landingpage",
            template: _raw_loader_landingpage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LandingpageComponent);
    return LandingpageComponent;
}());



/***/ }),

/***/ "Irkh":
/*!******************************************************************!*\
  !*** ./src/app/component/repoted-post/repoted-post.component.ts ***!
  \******************************************************************/
/*! exports provided: RepotedPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepotedPostComponent", function() { return RepotedPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_repoted_post_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./repoted-post.component.html */ "Yt2E");
/* harmony import */ var _repoted_post_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./repoted-post.component.scss */ "0Z7I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_singles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/singles.service */ "w+HY");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/authentification.service */ "izgN");
/* harmony import */ var src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/publication.service */ "wzbf");









var RepotedPostComponent = /** @class */ (function () {
    function RepotedPostComponent(singlesService, sanitizer, modalService, authserv, publicationService) {
        this.singlesService = singlesService;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.authserv = authserv;
        this.publicationService = publicationService;
        this.Listimage = [];
        this.ListCopy = [];
        this.List = [];
    }
    RepotedPostComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    RepotedPostComponent.prototype.getData = function () {
        var _this = this;
        this.ListCopy.splice(0, this.ListCopy.length);
        this.singlesService.get_Single().subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _loop_1, this_1, _i, data_1, element;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                console.log("data project ", data);
                _loop_1 = function (element) {
                    this_1.authserv.findUserById(element["Id_user"]).subscribe(function (userData) {
                        _this.ListCopy.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, element), { userData: userData }));
                    });
                };
                this_1 = this;
                for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                    element = data_1[_i];
                    _loop_1(element);
                }
                return [2 /*return*/];
            });
        }); });
    };
    RepotedPostComponent.prototype.handleClick = function (id) {
        var _this = this;
        this.singlesService.update_Single({ id: id }).subscribe(function (data) {
            _this.getData();
        }, function (err) {
            alert("try agin");
            console.error('An error occurred while updating single', err);
        });
    };
    RepotedPostComponent.prototype.showPub = function (idpub, idSng) {
        var _this = this;
        console.log("id publiction  show ", idpub);
        this.id_Sng = idSng;
        var modalRef = this.modalService.open(this.modalContent);
        this.publicationService.getPostByID(idpub).subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.authserv.findUserById(data['Id_user']).subscribe(function (userData) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var _a;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = this;
                                return [4 /*yield*/, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data), { userData: userData })];
                            case 1:
                                _a.publictionDetails = _b.sent();
                                console.log(this.publictionDetails);
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
    };
    RepotedPostComponent.prototype.getImage = function (idimage, idpub) {
        for (var _i = 0, _a = this.Listimage; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.idpub === idpub) {
                for (var _b = 0, _c = item.listimage; _b < _c.length; _b++) {
                    var itam = _c[_b];
                    if (itam._id === idimage) {
                        return itam.safeUrl;
                    }
                }
            }
        }
    };
    RepotedPostComponent.prototype.deletePubliction = function (id) {
        var _this = this;
        this.publicationService.deletePubliction({ id: id, idSng: this.id_Sng }).subscribe(function (data) {
            _this.modalService.dismissAll(_this.modalContent);
            _this.getData();
        }, function (err) {
            alert("try agin");
            console.error('An error occurred while updating single', err);
        });
    };
    RepotedPostComponent.ctorParameters = function () { return [
        { type: src_app_services_singles_service__WEBPACK_IMPORTED_MODULE_4__["SinglesService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
        { type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_7__["AuthentificationService"] },
        { type: src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_8__["PublicationService"] }
    ]; };
    RepotedPostComponent.propDecorators = {
        modalContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['modalContent', { static: true },] }]
    };
    RepotedPostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-repoted-post',
            template: _raw_loader_repoted_post_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_repoted_post_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_singles_service__WEBPACK_IMPORTED_MODULE_4__["SinglesService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"],
            src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_7__["AuthentificationService"],
            src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_8__["PublicationService"]])
    ], RepotedPostComponent);
    return RepotedPostComponent;
}());



/***/ }),

/***/ "KBZa":
/*!**********************************************************************!*\
  !*** ./src/app/pages/error-not-found/error-not-found.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Kw4l":
/*!*******************************************************!*\
  !*** ./src/app/pages/HomePage/home/home.component.ts ***!
  \*******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "yZ98");
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss */ "kW0K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentification.service */ "izgN");
/* harmony import */ var src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/publication.service */ "wzbf");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! buffer */ "tjlA");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_7__);








var HomeComponent = /** @class */ (function () {
    function HomeComponent(ref, publicationService, sanitizer, authserv) {
        this.ref = ref;
        this.publicationService = publicationService;
        this.sanitizer = sanitizer;
        this.authserv = authserv;
        this.source = "home";
        this.List = [];
        this.ListCopy = [];
        this.Listimage = [];
        this.isCollapsed = [];
        this.hashtags = ["digitalart", "digitaldrawing", "artists", "portrait"];
    }
    HomeComponent.prototype.connectedUser = function () {
        if (localStorage.getItem("token")) {
            return true;
        }
        return false;
    };
    HomeComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("index-page");
        this.getPubliction();
        this.ref.detectChanges();
    };
    HomeComponent.prototype.getPubliction = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.publicationService.getPost().subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var _a, _loop_1, this_1, _i, _b, item;
                    var _this = this;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _a = this;
                                return [4 /*yield*/, data];
                            case 1:
                                _a.List = _c.sent();
                                _loop_1 = function (item) {
                                    this_1.isCollapsed[item._id] = true;
                                    this_1.authserv.findUserById(item.Id_user).subscribe(function (userData) {
                                        var itemCopy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { userData: userData });
                                        _this.ListCopy.push(itemCopy);
                                        var imageforpub = [];
                                        for (var _i = 0, _a = itemCopy.img; _i < _a.length; _i++) {
                                            var itam = _a[_i];
                                            _this.publicationService
                                                .getImage(itam.idimg)
                                                .subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                                var imageDataUrl, safeUrl;
                                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                                    imageDataUrl = buffer__WEBPACK_IMPORTED_MODULE_7__["Buffer"].from(data["img"]["data"]["data"]).toString("base64");
                                                    safeUrl = this.sanitizer.bypassSecurityTrustUrl("data:data:image/png;base64," + imageDataUrl);
                                                    imageforpub.push({ _id: data["_id"], safeUrl: safeUrl });
                                                    return [2 /*return*/];
                                                });
                                            }); });
                                        }
                                        _this.Listimage.push({
                                            idpub: itemCopy._id,
                                            listimage: imageforpub,
                                        });
                                    });
                                };
                                this_1 = this;
                                for (_i = 0, _b = this.List; _i < _b.length; _i++) {
                                    item = _b[_i];
                                    _loop_1(item);
                                }
                                this.ref.detectChanges();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    HomeComponent.prototype.addItem = function (newItem) {
        if (newItem) {
            this.ListCopy = [];
            this.getPubliction();
        }
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
        { type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_5__["AuthentificationService"] }
    ]; };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-home",
            template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
            styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
            src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_5__["AuthentificationService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "L/+i":
/*!********************************************************!*\
  !*** ./src/app/component/project/project.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_project_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./project.component.html */ "H9Js");
/* harmony import */ var _project_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.component.scss */ "Q/jI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentification.service */ "izgN");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/project.service */ "c3AT");
/* harmony import */ var src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/publication.service */ "wzbf");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! buffer */ "tjlA");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/logged-in-user.service */ "GHSY");










var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(projectService, authserv, sanitizer, ref, publicationService, loggedUserServ) {
        this.projectService = projectService;
        this.authserv = authserv;
        this.sanitizer = sanitizer;
        this.ref = ref;
        this.publicationService = publicationService;
        this.loggedUserServ = loggedUserServ;
        this.projects = [];
        this.projectsCopy = [];
        this.Listimage = [];
        this.ListCopy = [];
        this.nombreVueProject = 0;
        this.coutVueProjectReply = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.idUser = this.loggedUserServ.getUserID();
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getAllProject().subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _a, _loop_1, this_1, _i, data_1, item;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, data];
                    case 1:
                        _a.projects = _b.sent();
                        _loop_1 = function (item) {
                            var shouldAddItem, _a;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        shouldAddItem = true;
                                        if (this_1.source === "profile" && item["Id_user"] !== this_1.idprofile) {
                                            shouldAddItem = false;
                                        }
                                        if (!shouldAddItem) return [3 /*break*/, 2];
                                        _a = this_1.nombreVueProject;
                                        return [4 /*yield*/, item["vueNumber"]];
                                    case 1:
                                        this_1.nombreVueProject = _a + _b.sent();
                                        this_1.authserv.findUserById(item.Id_user).subscribe(function (userData) {
                                            var countReaction = item["reaction"].length;
                                            var coutCommentaire = item["commentaires"].length;
                                            var itemCopy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { userData: userData,
                                                countReaction: countReaction,
                                                coutCommentaire: coutCommentaire });
                                            _this.projectsCopy.push(itemCopy);
                                            var imageforpub = [];
                                            for (var _i = 0, _a = itemCopy.img; _i < _a.length; _i++) {
                                                var itam = _a[_i];
                                                _this.publicationService
                                                    .getImage(itam.idimg)
                                                    .subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                                    var imageDataUrl, safeUrl;
                                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                                        imageDataUrl = buffer__WEBPACK_IMPORTED_MODULE_8__["Buffer"].from(data["img"]["data"]["data"]).toString("base64");
                                                        safeUrl = this.sanitizer.bypassSecurityTrustUrl("data:data:image/png;base64," + imageDataUrl);
                                                        imageforpub.push({ _id: data["_id"], safeUrl: safeUrl });
                                                        return [2 /*return*/];
                                                    });
                                                }); });
                                            }
                                            _this.Listimage.push({
                                                idpub: itemCopy._id,
                                                listimage: imageforpub,
                                            });
                                        });
                                        _b.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, data_1 = data;
                        _b.label = 2;
                    case 2:
                        if (!(_i < data_1.length)) return [3 /*break*/, 5];
                        item = data_1[_i];
                        return [5 /*yield**/, _loop_1(item)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        this.coutVueProjectReply.emit(this.nombreVueProject);
                        this.ref.detectChanges();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ProjectComponent.prototype.vueCompt = function (project) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _i, _a, item, verif, _b, _c, itam;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _i = 0, _a = this.projectsCopy;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        item = _a[_i];
                        if (!(item["_id"] === project["_id"])) return [3 /*break*/, 3];
                        verif = true;
                        for (_b = 0, _c = item["vueUsers"]; _b < _c.length; _b++) {
                            itam = _c[_b];
                            if (itam["id"] === this.idUser) {
                                verif = false;
                            }
                        }
                        if (!verif) return [3 /*break*/, 3];
                        item["vueNumber"]++;
                        this.nombreVueProject++;
                        this.coutVueProjectReply.emit(this.nombreVueProject);
                        return [4 /*yield*/, item["vueUsers"].push({ id: this.idUser })];
                    case 2:
                        _d.sent();
                        this.projectService
                            .updateVueProject(item["_id"], item["vueNumber"], item["vueUsers"])
                            .subscribe(function (res) {
                            console.log(res);
                        });
                        this.ref.detectChanges();
                        _d.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProjectComponent.prototype.getImage = function (idimage, idpub) {
        for (var _i = 0, _a = this.Listimage; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.idpub === idpub) {
                for (var _b = 0, _c = item.listimage; _b < _c.length; _b++) {
                    var itam = _c[_b];
                    if (itam._id === idimage) {
                        return itam.safeUrl;
                    }
                }
            }
        }
    };
    ProjectComponent.ctorParameters = function () { return [
        { type: src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"] },
        { type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_4__["AuthentificationService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"] },
        { type: src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_9__["LoggedInUserService"] }
    ]; };
    ProjectComponent.propDecorators = {
        source: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        idprofile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        coutVueProjectReply: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    ProjectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-project",
            template: _raw_loader_project_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
            styles: [_project_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"],
            src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_4__["AuthentificationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
            src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"],
            src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_9__["LoggedInUserService"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "LE88":
/*!**********************************************************************!*\
  !*** ./src/app/component/edit-challenge/edit-challenge.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditChallengeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditChallengeComponent", function() { return EditChallengeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_challenge_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-challenge.component.html */ "YX+B");
/* harmony import */ var _edit_challenge_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-challenge.component.scss */ "uiVG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var EditChallengeComponent = /** @class */ (function () {
    function EditChallengeComponent() {
    }
    EditChallengeComponent.prototype.ngOnInit = function () {
    };
    EditChallengeComponent.ctorParameters = function () { return []; };
    EditChallengeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-edit-challenge',
            template: _raw_loader_edit_challenge_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_edit_challenge_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], EditChallengeComponent);
    return EditChallengeComponent;
}());



/***/ }),

/***/ "LNiX":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-project-modal/add-project-modal.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-block\" (click)=\"myModal.show()\">\n  <i class=\"tim-icons icon-spaceship\"> </i> Ajouter Projet\n</button>\n\n<div\n  aria-hidden=\"true\"\n  aria-labelledby=\"myModalLabel\"\n  bsModal\n  class=\"modal fade modal-black\"\n  #myModal=\"bs-modal\"\n  id=\"myModal\"\n  role=\"dialog\"\n  tabindex=\"-1\"\n>\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header justify-content-center\">\n        <button\n          aria-hidden=\"true\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          type=\"button\"\n          (click)=\"myModal.hide()\"\n        >\n          <i class=\"tim-icons icon-simple-remove\"> </i>\n        </button>\n\n        <div style=\"display: flex; align-items: center\">\n          <div class=\"form-group\">\n            <form [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\">\n              <h4 class=\"title title-up\">Add Project</h4>\n              <div\n                class=\"alert alert-danger\"\n                role=\"alert\"\n                *ngIf=\"Message.length > 1\"\n              >\n                {{ Message }}\n              </div>\n              <label class=\"mt-4\" for=\"\">Title</label>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                [(ngModel)]=\"inputValueHashtag\"\n                #titre\n                (ngModelChange)=\"onInputChange()\"\n                placeholder=\"Enter Title...\"\n              />\n\n              <label class=\"mt-2\" for=\"\">Category</label>\n              <select\n                (ngModelChange)=\"onInputChange()\"\n                class=\"form-control\"\n                (change)=\"changecategory($event)\"\n                formControlName=\"categoryName\"\n              >\n                <option value=\"\" class=\"text-dark\">Choose category</option>\n                <option\n                  *ngFor=\"let category of category\"\n                  class=\"text-dark\"\n                  [ngValue]=\"category\"\n                >\n                  {{ category }}\n                </option>\n              </select>\n\n              <label class=\"mt-2\" for=\"\">Hashtag</label>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                [(ngModel)]=\"inputValueHashtag\"\n                #inputHashtags\n                (ngModelChange)=\"onInputChange()\"\n                (keydown.space)=\"addHashtagg(inputHashtags.value)\"\n                placeholder=\"Enter Hashtags...\"\n              />\n              <div class=\"hashtag-list\">\n                <div class=\"hashtag\" *ngFor=\"let hash of tabbleauHashtag\">\n                  <span class=\"hashtag-text badge badge-pill badge-info\"\n                    >{{ hash }}\n                    <span class=\"remove-icon\" (click)=\"removeHashtag(hash)\"\n                      >x</span\n                    ></span\n                  >\n                </div>\n              </div>\n\n              <label class=\"mt-2\" for=\"\">Tools</label>\n              <input\n                class=\"form-control\"\n                type=\"text\"\n                [(ngModel)]=\"inputValueTools\"\n                #inpTools\n                (ngModelChange)=\"onInputChange()\"\n                (keydown.space)=\"addTools(inpTools.value)\"\n                placeholder=\"Enter tools...\"\n              />\n\n              <div class=\"hashtag-list\">\n                <div class=\"hashtag\" *ngFor=\"let tool of tabbleauTools\">\n                  <span class=\"hashtag-text badge badge-pill badge-warning\"\n                    >{{ tool }}\n                    <span class=\"remove-icon\" (click)=\"removeTools(tool)\"\n                      >x</span\n                    ></span\n                  >\n                </div>\n              </div>\n\n              <div class=\"mt-2\" class=\"custom-file\">\n                <label for=\"customFile\" class=\"form-label\"\n                  >Choose one or more images</label\n                >\n                <input\n                  type=\"file\"\n                  multiple\n                  class=\"custom-file-input\"\n                  id=\"customFile\"\n                  (change)=\"onFileSelected($event)\"\n                />\n              </div>\n              <br /><br />\n\n              <carousel\n                *ngIf=\"images.length != 0\"\n                [showIndicators]=\"false\"\n                pause\n              >\n                <slide\n                  *ngFor=\"let image of images; let i = index\"\n                  class=\"text-center\"\n                >\n                  <img\n                    *ngIf=\"image\"\n                    class=\"d-block w-100\"\n                    [src]=\"image.url\"\n                    [alt]=\"image.name\"\n                  />\n                  <button\n                    class=\"btn btn-primary btn-fab btn-icon btn-round\"\n                    (click)=\"clearSelectedImage(index)\"\n                  >\n                    <i class=\"tim-icons icon-simple-remove\"></i>\n                  </button>\n                </slide>\n              </carousel>\n\n              <button\n                class=\"btn btn-success sbmuit\"\n                style=\"\n                  width: 100%;\n                  margin-top: 3000px;\n                  position: unset;\n                  margin: auto;\n                  margin-bottom: 15px;\n                \"\n              >\n                Publier\n              </button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div\n  aria-hidden=\"true\"\n  aria-labelledby=\"myModalLabel\"\n  bsModal\n  class=\"modal fade modal-black\"\n  #myModal2=\"bs-modal\"\n  id=\"myModal2\"\n  role=\"dialog\"\n  tabindex=\"-1\"\n>\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header justify-content-center\">\n        <button\n          aria-hidden=\"true\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          type=\"button\"\n          (click)=\"myModal2.hide()\"\n        >\n          <i class=\"tim-icons icon-simple-remove\"> </i>\n        </button>\n      </div>\n      <hr style=\"border-color: rgb(44, 44, 44); width: 100%; opacity: 0.2\" />\n      <div style=\"display: flex; align-items: center\">\n        <p>\n          Merci de partager votre travail avec nous, il faudra quelques instants\n          pour le publier.\n        </p>\n        <br />\n        <button\n          class=\"btn btn-success\"\n          style=\"width: 100%; margin-top: 30px\"\n          (click)=\"myModal2.hide()\"\n        >\n          ok\n        </button>\n      </div>\n    </div>\n    <!-- your modal content here -->\n  </div>\n</div>\n\n<!-- alert worng -->\n\n<div\n  aria-hidden=\"true\"\n  aria-labelledby=\"myModalLabel\"\n  bsModal\n  class=\"modal fade modal-black\"\n  #myModal3=\"bs-modal\"\n  id=\"myModal3\"\n  role=\"dialog\"\n  tabindex=\"-1\"\n>\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header justify-content-center\">\n        <button\n          aria-hidden=\"true\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          type=\"button\"\n          (click)=\"myModal3.hide()\"\n        >\n          <i class=\"tim-icons icon-simple-remove\"> </i>\n        </button>\n      </div>\n      <hr style=\"border-color: rgb(44, 44, 44); width: 100%; opacity: 0.2\" />\n      <div>\n        <img src=\"../../../assets/img/no.png\" />\n        <br />\n\n        <p>Il y a quelque chose qui ne va pas.</p>\n\n        <button\n          class=\"btn btn-debug\"\n          style=\"width: 30%; margin: 20px\"\n          (click)=\"openSinaler()\"\n        >\n          Signaler\n        </button>\n\n        <button\n          class=\"btn btn-success\"\n          style=\"width: 30%; margin: 20px\"\n          (click)=\"myModal3.hide()\"\n        >\n          ok\n        </button>\n      </div>\n    </div>\n    <!-- your modal content here -->\n  </div>\n</div>\n\n<div\n  aria-hidden=\"true\"\n  aria-labelledby=\"myModalLabel\"\n  bsModal\n  class=\"modal fade modal-black\"\n  #myModal4=\"bs-modal\"\n  id=\"myModal4\"\n  role=\"dialog\"\n  tabindex=\"-1\"\n>\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header justify-content\">\n        <button\n          aria-hidden=\"true\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          type=\"button\"\n          (click)=\"myModal4.hide()\"\n        >\n          <i class=\"tim-icons icon-simple-remove\"> </i>\n        </button>\n      </div>\n      \n      <hr style=\"border-color: rgb(44, 44, 44); width: 100%; opacity: 0.2\" />\n      <div>\n        <p  style=\"margin : 15px ; text-align: justify;\"  >Voici une version encore plus courte:\n\n          Pour obtenir de l'aide, remplissez le formulaire ci-dessous ou contactez-nous par e-mail / téléphone :  contact@ARTVERSE.tn / +216 22 333 000 . Merci !</p>\n     <!--    <p>Si vous rencontrez un problème, veuillez remplir le formulaire ci-dessous. Nous examinerons attentivement votre rapport et vous contacterons pour vous aider. <br />\n           Vous pouvez également nous contacter directement par e-mail ou par téléphone aux coordonnées suivantes : \n          [contact@ARTVERSE.tn] / [+216 22 333 000]. Merci !</p> -->\n\n          <textarea   \n          class=\"form-control\"\n          type=\"text\"\n          [(ngModel)]=\"inputValueSingle\"\n          #single \n          style=\"margin : 15px\"\n          placeholder=\"Enter your problème ...\"></textarea>\n        <button\n          class=\"btn btn-success\"\n          style=\"width: 30%; margin: 20px\"\n          (click)=\"onSubmit_Single()\"\n        >\n          submit\n        </button>\n        <button\n        class=\"btn btn-debug\"\n        style=\"width: 30%; margin: 20px\"\n        (click)=\"myModal4.hide()\"\n      >\n        cancel\n      </button>\n      </div>\n    </div>\n    <!-- your modal content here -->\n  </div>\n</div>\n");

/***/ }),

/***/ "MFyW":
/*!*************************************************!*\
  !*** ./src/app/pipe/hashtag-color-pipe.pipe.ts ***!
  \*************************************************/
/*! exports provided: HashtagColorPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashtagColorPipePipe", function() { return HashtagColorPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


var HashtagColorPipePipe = /** @class */ (function () {
    function HashtagColorPipePipe() {
    }
    HashtagColorPipePipe.prototype.transform = function (value) {
        return value.replace(/#\w+/g, '<span style="color:red;">$&</span>');
    };
    HashtagColorPipePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'hashtagColorPipe'
        })
    ], HashtagColorPipePipe);
    return HashtagColorPipePipe;
}());



/***/ }),

/***/ "O9Go":
/*!********************************************************************!*\
  !*** ./src/app/component/for-you-list/for-you-list.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-image img {\n  height: 150;\n  /* set a fixed height */\n  width: 150;\n  /* set a percentage width */\n  -o-object-fit: cover;\n     object-fit: cover;\n  /* scale the image to cover the container, preserving aspect ratio */\n}\n\n.card-profile,\n.card-testimonial {\n  margin-top: 30px;\n  text-align: center;\n}\n\n.card {\n  background: #1f2251;\n  border: 0;\n  position: relative;\n  width: 100%;\n  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 7px;\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n}\n\n.card-profile .card-image {\n  position: relative;\n}\n\n*,\n::after,\n::before {\n  box-sizing: border-box;\n}\n\ndiv {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb3IteW91LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esb0VBQUE7QUFDRjs7QUFFQTs7RUFFRSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7OztFQUdFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiZm9yLXlvdS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OiAxNTA7XG4gIC8qIHNldCBhIGZpeGVkIGhlaWdodCAqL1xuICB3aWR0aDogMTUwO1xuICAvKiBzZXQgYSBwZXJjZW50YWdlIHdpZHRoICovXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICAvKiBzY2FsZSB0aGUgaW1hZ2UgdG8gY292ZXIgdGhlIGNvbnRhaW5lciwgcHJlc2VydmluZyBhc3BlY3QgcmF0aW8gKi9cbn1cblxuLmNhcmQtcHJvZmlsZSxcbi5jYXJkLXRlc3RpbW9uaWFsIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6ICMxZjIyNTE7XG4gIGJvcmRlcjogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCAxcHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDA7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLmNhcmQtcHJvZmlsZSAuY2FyZC1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuKixcbjo6YWZ0ZXIsXG46OmJlZm9yZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */");

/***/ }),

/***/ "ObfR":
/*!******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "iK8a");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.scss */ "YoYF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentification.service */ "izgN");
/* harmony import */ var src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/logged-in-user.service */ "GHSY");







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authServ, loggedUserServ, route) {
        this.authServ = authServ;
        this.loggedUserServ = loggedUserServ;
        this.route = route;
        this.isCollapsed = true;
        this.idUser = this.loggedUserServ.getUserID();
    }
    NavbarComponent.prototype.scrollToDownload = function (element) {
        element.scrollIntoView({ behavior: "smooth" });
    };
    NavbarComponent.prototype.Deconnexion = function () {
        this.authServ.logout();
        this.loggedInUser = null;
        this.route.navigate(["/home"]);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedUserServ.findUserById(this.idUser).subscribe(function (res) {
            _this.loggedInUser = res;
            console.log("logged navbar", _this.loggedInUser);
        });
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_5__["AuthentificationService"] },
        { type: src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_6__["LoggedInUserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-navbar",
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_5__["AuthentificationService"],
            src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_6__["LoggedInUserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "Pfev":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/signaler/signaler.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"../../../assets/img/3dchallenge.jpg\" >\n");

/***/ }),

/***/ "Q/jI":
/*!**********************************************************!*\
  !*** ./src/app/component/project/project.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".grid-container {\n  margin-left: 60px;\n  display: grid;\n  grid-gap: 10px;\n}\n\n.grid-item {\n  position: relative;\n  width: 300px;\n  height: 250px;\n  overflow: hidden;\n  margin-top: 15px;\n}\n\n.description {\n  position: relative;\n  width: 310px;\n}\n\n.grid-item img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.overlaytools {\n  transition: opacity 0.3s ease-in-out;\n}\n\n.grid-item:hover .overlaytools {\n  position: absolute;\n  bottom: 200px;\n  top: 5;\n  left: 5;\n  right: 0;\n  background-color: rgba(235, 62, 251, 0.908);\n  color: #fff;\n  padding: 10px;\n  opacity: 0.8;\n}\n\n.overlay {\n  transition: opacity 0.3s ease-in-out;\n}\n\n.grid-item:hover .overlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(1, 2, 9, 0.768);\n  color: #fff;\n  padding: 10px;\n  opacity: 0.8;\n}\n\n.overlay h3 {\n  margin: 0;\n}\n\n.overlay p {\n  margin: 5px 0;\n  font-size: 1rem;\n}\n\n.overlay i {\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBRUEsY0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxvQ0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsMkNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQTtFQUNFLG9DQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRiIsImZpbGUiOiJwcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDEwcHg7XG59XG5cbi5ncmlkLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzEwcHg7XG59XG5cbi5ncmlkLWl0ZW0gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLm92ZXJsYXl0b29scyB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmdyaWQtaXRlbTpob3ZlciAub3ZlcmxheXRvb2xzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwMHB4O1xuICB0b3A6IDU7XG4gIGxlZnQ6IDU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwgNjIsIDI1MSwgMC45MDgpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4ub3ZlcmxheSB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmdyaWQtaXRlbTpob3ZlciAub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxLCAyLCA5LCAwLjc2OCk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5vdmVybGF5IGgzIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ub3ZlcmxheSBwIHtcbiAgbWFyZ2luOiA1cHggMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4ub3ZlcmxheSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "RPTm":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <br /><br /><br /><br /><br /><br /><br />\n  <br /><br /><br /><br /><br /><br /><br />\n  <div class=\"container align-items-center text-center\">\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6 ml-auto mr-auto\">\n        <div *ngIf=\"user\" class=\"card card-coin card-plain\">\n          <div class=\"card-header\">\n            <img\n              class=\"img-center img-fluid rounded-circle\"\n              src=\"assets/img/mike.jpg\" />\n\n            <h3 class=\"card-title mt-3\">\n              {{ user[\"firstname\"] }} {{ user[\"lastname\"] }}\n            </h3>\n            <h6 class=\"text-primary\">Photographer</h6>\n            <h5 class=\"text-muted\">\n              {{ user[\"bio\"] }}\n            </h5>\n          </div>\n          <div class=\"card-body\">\n            <button\n              *ngIf=\"loggedInUser !== user['_id']\"\n              type=\"button\"\n              class=\"btn btn-primary btn-block\"\n              (click)=\"\n                showfollow ? followUser(user['_id']) : unfollowUser(user['_id'])\n              \">\n              <i class=\"tim-icons icon-simple-add mx-2\" *ngIf=\"showfollow\"></i>\n              {{ followBtn }}\n            </button>\n            <button\n              *ngIf=\"loggedInUser !== user['_id']\"\n              type=\"button\"\n              class=\"btn btn-block\">\n              <i class=\"tim-icons icon-email-85 mx-2\"></i>Message\n            </button>\n            <app-add-project-modal\n              *ngIf=\"loggedInUser === user['_id']\"></app-add-project-modal>\n            <tabset\n              class=\"nav-tabs-danger justify-content-center tab-subcategories\">\n              <tab heading=\"News\">\n                <ul class=\"list-group\">\n                  <li\n                    class=\"list-group-item d-flex justify-content-between align-items-center\">\n                    Nombre de vues des projets\n                    <span class=\"badge badge-info badge-pill\">{{\n                      countVueProject\n                    }}</span>\n                  </li>\n                  <li\n                    class=\"list-group-item d-flex justify-content-between align-items-center\">\n                    Appréciations\n                    <span class=\"badge badge-info badge-pill\">{{\n                      coutReationPublication\n                    }}</span>\n                  </li>\n                  <li\n                    class=\"list-group-item d-flex justify-content-between align-items-center\">\n                    followers\n                    <span class=\"badge badge-info badge-pill\">{{\n                      followers\n                    }}</span>\n                  </li>\n\n                  <li\n                    class=\"list-group-item d-flex justify-content-between align-items-center\">\n                    following\n                    <span class=\"badge badge-info badge-pill\">{{\n                      following\n                    }}</span>\n                  </li>\n                </ul>\n\n                <div class=\"btn-wrapper profile pt-3\">\n                  <h6 class=\"mt-4\">sur le web</h6>\n                  <a\n                    class=\"btn btn-icon btn-default btn-round mr-1\"\n                    href=\"https://twitter.com/creativetim\"\n                    target=\"_blank\">\n                    <i class=\"fab fa-twitter\"> </i>\n                  </a>\n                  <a\n                    class=\"btn btn-icon btn-default btn-round mr-1\"\n                    href=\"https://www.facebook.com/creativetim\"\n                    target=\"_blank\">\n                    <i class=\"fab fa-facebook-square\"> </i>\n                  </a>\n                  <a\n                    class=\"btn btn-icon btn-default btn-round\"\n                    href=\"https://dribbble.com/creativetim\"\n                    target=\"_blank\">\n                    <i class=\"fab fa-dribbble\"> </i>\n                  </a>\n                </div>\n              </tab>\n\n              <tab *ngIf=\"loggedInUser === user['_id']\" heading=\"Edit Profile\">\n                <div class=\"\">\n                  <div class=\"card card-plain\">\n                    <div class=\"card-body\">\n                      <form>\n                        <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                              <label> Your Name </label>\n                              <input\n                                class=\"form-control text-uppercase\"\n                                type=\"text\"\n                                [value]=\"user['firstname']\" />\n                            </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                              <label> Your Lastname </label>\n                              <input\n                                class=\"form-control text-uppercase\"\n                                type=\"text\"\n                                [value]=\"user['lastname']\" />\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"row\">\n                          <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                              <label> Email address </label>\n                              <input\n                                class=\"form-control\"\n                                placeholder=\"mike@email.com\"\n                                type=\"email\"\n                                [value]=\"user['email']\" />\n                            </div>\n                          </div>\n                          <div class=\"col-md-6\">\n                            <div class=\"form-group\">\n                              <label> Company </label>\n                              <input\n                                class=\"form-control\"\n                                type=\"text\"\n                                value=\"CreativeTim\" />\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"row\">\n                          <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                              <label> Bio </label>\n                              <input\n                                class=\"form-control\"\n                                placeholder=\"Hello there!\"\n                                type=\"text\"\n                                [value]=\"user['bio']\" />\n                            </div>\n                          </div>\n                        </div>\n                        <button\n                          class=\"btn btn-danger btn-round float-right\"\n                          placement=\"right\"\n                          type=\"submit\">\n                          Update\n                        </button>\n                      </form>\n                    </div>\n                  </div>\n                </div>\n              </tab>\n            </tabset>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-8 col-md-6 gallery mt-1\">\n        <div class=\"row\">\n          <tabset class=\"nav-tabs-primary\">\n            <tab>\n              <ng-template tabHeading>\n                <i class=\"tim-icons icon-spaceship\"> </i> Projects\n              </ng-template>\n              <app-project\n                [source]=\"source\"\n                [idprofile]=\"this.user['_id']\"\n                (coutVueProjectReply)=\"\n                  getcoutVueProjectReply($event)\n                \"></app-project>\n            </tab>\n            <tab>\n              <ng-template tabHeading>\n                <i class=\"tim-icons icon-settings-gear-63\"> </i>\n                Publications\n              </ng-template>\n              <app-for-you-list\n                [Listimage]=\"Listimage\"\n                [ListCopy]=\"ListCopy\"\n                [isCollapsed]=\"isCollapsedProfile\"\n                [coutReationPublication]=\"coutReationPublication\"\n                (coutReationPublicationReply)=\"\n                  getcoutReationPublicationReply($event)\n                \"></app-for-you-list>\n            </tab>\n          </tabset>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "S8dx":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/challenges/challenges.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n   \n          <tabset  class=\"nav-tabs-primary\">\n            <tab  >\n              <ng-template tabHeading>\n                <i class=\"tim-icons icon-align-center-2\"> </i> Challenge list\n              </ng-template>\n              <app-show-challenge></app-show-challenge>\n            </tab>\n            \n            <tab >\n              <ng-template tabHeading>\n                <i class=\"tim-icons icon-plus\"> </i> Add challenges\n              </ng-template>\n             <app-add-challenge></app-add-challenge>\n            </tab>\n          </tabset>\n       \n\n \n");

/***/ }),

/***/ "SKMC":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset-password-page/reset-password-page.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header\">\n        <div class=\"page-header-image\"></div>\n        <div class=\"content\">\n            <div class=\"container\">\n                <div class=\"card card-register text-center\">\n                    <div class=\"card-body\">\n                        <div class=\"ml-auto mr-auto\">\n                            <h3 class=\"mb-3 text-center display-4\">Reset Password</h3>\n                            <div class=\"form-group\">\n                                <p>Enter the new password for your account below.</p>\n                                <input class=\"form-control\" id=\"resetPassword\" placeholder=\"Enter Password\" [(ngModel)]=\"newPasswd\" type=\"password\" />\n                            </div>\n                            <br />\n                            <button class=\"btn btn-primary mx-2\" (click)=\"resetPasswd()\">\n                Confirm\n              </button>\n                            <button class=\"btn btn-default\">Annuler</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");







var AppComponent = /** @class */ (function () {
    function AppComponent(http, renderer, location, document) {
        this.http = http;
        this.renderer = renderer;
        this.location = location;
    }
    AppComponent.prototype.onWindowScroll = function (e) {
        if (window.pageYOffset > 100) {
            var element = document.getElementById("navbar-top");
            if (element) {
                element.classList.remove("navbar-transparent");
                element.classList.add("bg-default");
            }
        }
        else {
            var element = document.getElementById("navbar-top");
            if (element) {
                element.classList.add("navbar-transparent");
                element.classList.remove("bg-default");
            }
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.onWindowScroll(event);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    AppComponent.propDecorators = {
        onWindowScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ["window:scroll", ["$event"],] }]
    };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-root",
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], Object])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "T7i2":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/competition/competition.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3><i class=\"fas fa-trophy\"></i> Current Challenges</h3>\n<div class=\"row\">\n  <div *ngFor=\"let challenge of challengeWithOutWinner\" class=\"col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"row justify-content-between align-items-center\">\n          <div class=\"col-lg-6 mb-6 mb-lg-0\">\n            <h1 style=\"padding-left: 20px\" class=\"mt-2\">\n              {{ challenge[\"title\"] }}\n            </h1>\n            <p class=\"text-white\" style=\"padding-left: 20px\">\n              Category : {{ challenge[\"Category\"] }}\n            </p>\n\n            <p class=\"text-white\" style=\"padding-left: 20px\">\n              Partenaire : {{ challenge[\"partenaire\"] }}\n            </p>\n\n            <p class=\"text-muted mt-4\" style=\"padding-left: 20px\">\n              {{ challenge[\"description\"] }}\n            </p>\n\n            <p class=\"text-white mt-4\" style=\"padding-left: 20px\">\n              <i class=\"fas fa-users mr-2\"></i>\n              {{ reactioncount(challenge[\"participants\"]) }}\n              <i class=\"fas fa-calendar-alt mr-2 ml-4\"></i>\n              {{ format(challenge[\"deadline\"]) }}\n            </p>\n\n            <button\n              class=\"btn btn-warning mt-4\"\n              (click)=\"openModale(challenge['_id'])\">\n              Appliquer maintenant\n            </button>\n          </div>\n\n          <div class=\"col-lg-6\">\n            <carousel\n              class=\"w-50\"\n              *ngIf=\"challenge['image']\"\n              [showIndicators]=\"false\"\n              pause>\n              <slide *ngFor=\"let img of challenge['image']\" class=\"text-center\">\n                <img [src]=\"getImage(img['idimg'], challenge['_id'])\" />\n              </slide>\n            </carousel>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<h3><i class=\"fas fa-medal\"></i> Finished Challenges</h3>\n<div class=\"row\">\n  <div *ngFor=\"let challenge of challenges\" class=\"col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"row justify-content-between align-items-center\">\n          <div class=\"col-lg-6 mb-6 mb-lg-0\">\n            <h1 style=\"padding-left: 20px\" class=\"mt-2\">\n              {{ challenge[\"title\"] }}\n            </h1>\n            <p class=\"text-white\" style=\"padding-left: 20px\">\n              Category : {{ challenge[\"Category\"] }}\n            </p>\n\n            <p class=\"text-white\" style=\"padding-left: 20px\">\n              Partenaire : {{ challenge[\"partenaire\"] }}\n            </p>\n\n            <p class=\"text-muted mt-4\" style=\"padding-left: 20px\">\n              {{ challenge[\"description\"] }}\n            </p>\n\n            <p\n              class=\"text-white p-3 d-flex align-items-center\"\n              style=\"padding-left: 20px\">\n              <span class=\"\"><i class=\"fas fa-trophy mr-1\"></i>Winner :</span>\n              <a\n                class=\"text-danger font-weight-bold\"\n                [routerLink]=\"[\n                  '/profile',\n                  challenge['winnersData']['username']\n                ]\">\n                <img\n                  alt=\"... \"\n                  class=\"avatar img-raised ml-4 mr-2 mt-2\"\n                  src=\"assets/img/james.jpg \" />\n                {{ challenge[\"winnersData\"][\"firstname\"] }}\n                {{ challenge[\"winnersData\"][\"lastname\"] }}\n              </a>\n            </p>\n\n            <a class=\"btn btn-warning mt-4\"> Appliquer maintenant </a>\n          </div>\n\n          <div class=\"col-lg-6\">\n            <carousel class=\"w-50\" [showIndicators]=\"false\">\n              <slide *ngFor=\"let img of challenge['image']\" class=\"text-center\">\n                <img [src]=\"getImage(img['idimg'], challenge['_id'])\" />\n              </slide>\n            </carousel>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div\n  aria-hidden=\"true\"\n  aria-labelledby=\"myModalLabel\"\n  bsModal\n  class=\"modal fade modal-black\"\n  #myModal=\"bs-modal\"\n  id=\"myModal\"\n  role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header justify-content-center\">\n        <button\n          aria-hidden=\"true\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          type=\"button\"\n          (click)=\"myModal.hide()\">\n          <i class=\"tim-icons icon-simple-remove\"> </i>\n        </button>\n      </div>\n      <hr style=\"border-color: rgb(44, 44, 44); width: 100%; opacity: 0.2\" />\n      <div>\n        <form (submit)=\"onSubmit()\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"form-group\">\n                <label\n                  for=\"inputImage\"\n                  class=\"form-label-image\"\n                  style=\"\n                    color: rgba(255, 255, 255, 0.6);\n                    background: cadetblue;\n                    border-radius: 5px;\n                    padding: 5px 10px;\n                    margin-top: 10px;\n                  \"\n                  >Choose an image</label\n                >\n                <input\n                  type=\"file\"\n                  multiple\n                  class=\"custom-file-input\"\n                  id=\"customFile\"\n                  (change)=\"onFileSelected($event)\" />\n              </div>\n              <carousel *ngIf=\"images\" [showIndicators]=\"false\" pause>\n                <slide\n                  *ngFor=\"let image of images; let i = index\"\n                  class=\"text-center\">\n                  <button\n                    class=\"btn btn-primary btn-fab btn-icon btn-round\"\n                    (click)=\"clearSelectedImage(i)\">\n                    <i class=\"tim-icons icon-gift-2\"></i>\n                  </button>\n                  <img\n                    *ngIf=\"image\"\n                    class=\"d-block w-100\"\n                    [src]=\"image['url']\"\n                    [alt]=\"image['name']\" />\n                </slide>\n              </carousel>\n            </div>\n            <div class=\"row\">\n              <div class=\"col\">\n                <button type=\"submit\" class=\"btn btn-primary mt-4\">\n                  Submit\n                </button>\n              </div>\n              <div class=\"col\">\n                <button class=\"btn btn-success mt-4\" (click)=\"myModal.hide()\">\n                  ok\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <!-- your modal content here -->\n</div>\n");

/***/ }),

/***/ "U2/p":
/*!**********************************************************!*\
  !*** ./src/app/component/signaler/signaler.component.ts ***!
  \**********************************************************/
/*! exports provided: SignalerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalerComponent", function() { return SignalerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signaler_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signaler.component.html */ "Pfev");
/* harmony import */ var _signaler_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signaler.component.scss */ "WYVw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var SignalerComponent = /** @class */ (function () {
    function SignalerComponent() {
    }
    SignalerComponent.prototype.ngOnInit = function () {
    };
    SignalerComponent.ctorParameters = function () { return []; };
    SignalerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-signaler',
            template: _raw_loader_signaler_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_signaler_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SignalerComponent);
    return SignalerComponent;
}());



/***/ }),

/***/ "V/Tm":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/index.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"page-header header-filter\">\n    <div class=\"squares square1\"></div>\n    <div class=\"squares square2\"></div>\n    <div class=\"squares square3\"></div>\n    <div class=\"squares square4\"></div>\n    <div class=\"squares square5\"></div>\n    <div class=\"squares square6\"></div>\n    <div class=\"squares square7\"></div>\n    <div class=\"container\">\n      <div class=\"content-center brand\">\n        <h1 class=\"h1-seo\">BLK•</h1>\n        <h3>\n          A beautiful Design System for Bootstrap 4 and Angular. It's Free and\n          Open Source.\n        </h3>\n      </div>\n    </div>\n  </div>\n  <div class=\"main\">\n    <div class=\"section section-basic\" id=\"basic-elements\">\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <div class=\"container\">\n        <h2 class=\"title\">Basic Elements</h2>\n        <h3>Buttons</h3>\n        <p class=\"category\">Pick your style</p>\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n            <button class=\"btn btn-primary mr-1\" type=\"button\">Default</button>\n            <button class=\"btn btn-primary btn-round mr-1\" type=\"button\">\n              Round\n            </button>\n            <button class=\"btn btn-primary btn-round mr-1\" type=\"button\">\n              <i class=\"tim-icons icon-heart-2\"> </i> With Icon\n            </button>\n            <button\n              class=\"btn btn-primary btn-icon btn-round mr-1\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-heart-2\"> </i>\n            </button>\n            <button class=\"btn btn-primary btn-simple btn-round\" type=\"button\">\n              Simple\n            </button>\n          </div>\n        </div>\n        <p class=\"category\">Pick your size</p>\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n            <button class=\"btn btn-primary btn-sm mr-1\">Small</button>\n            <button class=\"btn btn-primary mr-1\">Regular</button>\n            <button class=\"btn btn-primary btn-lg\">Large</button>\n          </div>\n        </div>\n        <p class=\"category\">Pick your color</p>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <button class=\"btn mr-1\">Default</button>\n            <button class=\"btn btn-primary mr-1\">Primary</button>\n            <button class=\"btn btn-info mr-1\">Info</button>\n            <button class=\"btn btn-success mr-1\">Success</button>\n            <button class=\"btn btn-warning mr-1\">Warning</button>\n            <button class=\"btn btn-danger mr-1\">Danger</button>\n            <button class=\"btn btn-neutral\">Neutral</button>\n          </div>\n        </div>\n        <br />\n\n        <h3>Links</h3>\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <button class=\"btn btn-link mr-1\">Default</button>\n            <button class=\"btn btn-link btn-primary mr-1\">Primary</button>\n            <button class=\"btn btn-link btn-info mr-1\">Info</button>\n            <button class=\"btn btn-link btn-success mr-1\">Success</button>\n            <button class=\"btn btn-link btn-warning mr-1\">Warning</button>\n            <button class=\"btn btn-link btn-danger\">Danger</button>\n          </div>\n        </div>\n        <div class=\"space-70\"></div>\n        <div id=\"inputs\">\n          <h3>Inputs</h3>\n          <p class=\"category\">Form Controls</p>\n          <div class=\"row\">\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"form-group\">\n                <input\n                  class=\"form-control\"\n                  placeholder=\"Regular\"\n                  type=\"text\"\n                  value=\"\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"form-group has-success\">\n                <input\n                  class=\"form-control form-control-success\"\n                  type=\"text\"\n                  value=\"Success\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"form-group has-danger\">\n                <input\n                  class=\"form-control form-control-danger\"\n                  type=\"email\"\n                  value=\"Error Input\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div\n                class=\"input-group\"\n                [ngClass]=\"{ 'input-group-focus': focus === true }\"\n              >\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\">\n                    <i class=\"fa fa-user\"> </i>\n                  </span>\n                </div>\n                <input\n                  class=\"form-control\"\n                  placeholder=\"Left Font Awesome Icon\"\n                  type=\"text\"\n                  (focus)=\"focus = true\"\n                  (blur)=\"focus = false\"\n                />\n              </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n              <div class=\"input-group\">\n                <input\n                  class=\"form-control\"\n                  placeholder=\"Right Nucleo Icon\"\n                  type=\"text\"\n                />\n\n                <div class=\"input-group-append\">\n                  <span class=\"input-group-text\">\n                    <i class=\"tim-icons icon-lock-circle\"> </i>\n                  </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"space-70\"></div>\n        <div class=\"row\" id=\"checkRadios\">\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Checkboxes</p>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\" />\n\n                <span class=\"form-check-sign\"> </span> Unchecked\n              </label>\n            </div>\n            <div class=\"form-check\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  type=\"checkbox\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Checked\n              </label>\n            </div>\n            <div class=\"form-check disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  type=\"checkbox\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled Unchecked\n              </label>\n            </div>\n            <div class=\"form-check disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  type=\"checkbox\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled Checked\n              </label>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Radios</p>\n            <div class=\"form-check form-check-radio\">\n              <label class=\"form-check-label\">\n                <input\n                  class=\"form-check-input\"\n                  id=\"exampleRadios1\"\n                  name=\"exampleRadios\"\n                  type=\"radio\"\n                  value=\"option1\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Radio is off\n              </label>\n            </div>\n            <div class=\"form-check form-check-radio\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  id=\"exampleRadios1\"\n                  name=\"exampleRadios\"\n                  type=\"radio\"\n                  value=\"option2\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Radio is on\n              </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  id=\"exampleRadios2\"\n                  name=\"exampleRadios1\"\n                  type=\"radio\"\n                  value=\"option3\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled radio is off\n              </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n              <label class=\"form-check-label\">\n                <input\n                  checked=\"checked\"\n                  class=\"form-check-input\"\n                  disabled=\"disabled\"\n                  id=\"exampleRadios2\"\n                  name=\"exampleRadios1\"\n                  type=\"radio\"\n                  value=\"option4\"\n                />\n\n                <span class=\"form-check-sign\"> </span> Disabled radio is on\n              </label>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Toggle Buttons</p>\n            <bSwitch\n              [switch-on-color]=\"'danger'\"\n              [switch-off-color]=\"'danger'\"\n              [switch-off-text]=\"' '\"\n              [switch-on-text]=\"' '\"\n            >\n            </bSwitch>\n            <br />\n            <bSwitch [switch-on-color]=\"'danger'\" [switch-off-color]=\"'danger'\">\n            </bSwitch>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Sliders</p>\n            <div class=\"slider\" id=\"sliderRegular\"></div>\n            <br />\n\n            <div class=\"slider slider-danger\" id=\"sliderDouble\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-navbars\">\n      <img class=\"path\" src=\"assets/img/path3.png\" />\n\n      <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h4>Menu</h4>\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n              <div class=\"container\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\"> Menu </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n                <div\n                  class=\"navbar-collapse\"\n                  [isAnimated]=\"true\"\n                  [collapse]=\"isCollapsed\"\n                  id=\"example-navbar\"\n                >\n                  <ul class=\"navbar-nav\">\n                    <li class=\"nav-item active\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <p>Link</p>\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <p>Link</p>\n                      </a>\n                    </li>\n                    <li class=\"nav-item dropdown\" dropdown>\n                      <a\n                        aria-expanded=\"false\"\n                        aria-haspopup=\"true\"\n                        class=\"nav-link dropdown-toggle dropdown-toggle\"\n                        data-toggle=\"dropdown\"\n                        dropdownToggle\n                        href=\"javascript:void(0)\"\n                        id=\"navbarDropdownMenuLink\"\n                      >\n                        <p>Dropdown</p>\n                      </a>\n                      <div\n                        aria-labelledby=\"navbarDropdownMenuLink\"\n                        class=\"dropdown-menu\"\n                        *dropdownMenu\n                      >\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Another action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Something else here\n                        </a>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </nav>\n          </div>\n          <div class=\"col-md-6\">\n            <h4>Menu with Icons</h4>\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n              <div class=\"container\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\"> Icons </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-icons\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n                <div\n                  class=\"navbar-collapse\"\n                  [isAnimated]=\"true\"\n                  [collapse]=\"isCollapsed\"\n                  id=\"example-navbar-icons\"\n                >\n                  <ul class=\"navbar-nav ml-auto\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <i aria-hidden=\"true\" class=\"tim-icons icon-send\"> </i>\n                      </a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <i aria-hidden=\"true\" class=\"tim-icons icon-single-02\">\n                        </i>\n                      </a>\n                    </li>\n                    <li class=\"nav-item dropdown\" dropdown>\n                      <a\n                        class=\"nav-link dropdown-toggle dropdown-toggle\"\n                        data-toggle=\"dropdown\"\n                        dropdownToggle\n                        href=\"javascript:void(0)\"\n                        id=\"navbarDropdownMenuLink\"\n                      >\n                        <i\n                          aria-hidden=\"true\"\n                          class=\"tim-icons icon-settings-gear-63\"\n                        >\n                        </i>\n                      </a>\n                      <div\n                        aria-labelledby=\"navbarDropdownMenuLink\"\n                        class=\"dropdown-menu dropdown-menu-right\"\n                        *dropdownMenu\n                      >\n                        <a class=\"dropdown-header\"> Dropdown header </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Another action\n                        </a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Something else here\n                        </a>\n                        <div class=\"divider\"></div>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          Separated link\n                        </a>\n                        <div class=\"divider\"></div>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">\n                          One more separated link\n                        </a>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </nav>\n          </div>\n        </div>\n        <h3 class=\"title mb-3\">Navigation</h3>\n      </div>\n      <div id=\"navbar\">\n        <div class=\"navigation-example\">\n          <nav class=\"navbar navbar-expand-lg bg-primary\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Primary color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-primary\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-primary\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-world\"> </i> Discover\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-single-02\"> </i> Profile\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-info\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Info Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-info\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-info\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\"> Discover </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\"> Profile </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\"> Settings </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-success\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Success Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-success\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-success\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item active\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-world\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-single-02\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"tim-icons icon-settings-gear-63\"> </i>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-warning\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Warning Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-warning\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-warning\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-facebook-square\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-twitter\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-google-plus\"> </i>\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-instagram\"> </i>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg bg-danger\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Danger Color\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-danger\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-danger\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-facebook-square\"> </i> Share\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-twitter\"> </i> Tweet\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-pinterest\"> </i> Pin\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n          <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n            <div class=\"container\">\n              <div class=\"navbar-translate\">\n                <a class=\"navbar-brand\" href=\"javascript:void(0)\">\n                  Transparent\n                </a>\n                <button\n                  aria-controls=\"navbarSupportedContent\"\n                  aria-label=\"Toggle navigation\"\n                  class=\"navbar-toggler\"\n                  [attr.aria-expanded]=\"!isCollapsed\"\n                  (click)=\"isCollapsed = !isCollapsed\"\n                  id=\"example-navbar-transparent\"\n                  type=\"button\"\n                >\n                  <span class=\"navbar-toggler-bar bar1\"> </span>\n                  <span class=\"navbar-toggler-bar bar2\"> </span>\n                  <span class=\"navbar-toggler-bar bar3\"> </span>\n                </button>\n              </div>\n              <div\n                class=\"navbar-collapse\"\n                [isAnimated]=\"true\"\n                [collapse]=\"isCollapsed\"\n                id=\"example-navbar-transparent\"\n              >\n                <ul class=\"navbar-nav ml-auto\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-facebook-square\"> </i> Facebook\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-twitter\"> </i> Twitter\n                    </a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                      <i class=\"fab fa-instagram\"> </i> Instagram\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-tabs\">\n      <div class=\"container\">\n        <div class=\"title\">\n          <h3 class=\"mb-3\">Navigation Tabs</h3>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n            <div class=\"mb-3\">\n              <small class=\"text-uppercase font-weight-bold\">\n                With icons\n              </small>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <tabset class=\"nav-tabs-danger\">\n                  <tab>\n                    <ng-template tabHeading>\n                      <i class=\"tim-icons icon-spaceship\"> </i> Profile\n                    </ng-template>\n                    <p>\n                      Collaboratively administrate empowered markets via\n                      plug-and-play networks. Dynamically procrastinate B2C\n                      users after installed base benefits. <br />\n\n                      <br />\n                      Dramatically visualize customer directed convergence\n                      without revolutionary ROI.\n                    </p>\n                  </tab>\n                  <tab>\n                    <ng-template tabHeading>\n                      <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\n                    </ng-template>\n                    <p>\n                      Completely synergize resource taxing relationships via\n                      premier niche markets. Professionally cultivate one-to-one\n                      customer service with robust ideas. <br />\n\n                      <br />\n                      Dynamically innovate resource-leveling customer service\n                      for state of the art customer service.\n                    </p>\n                  </tab>\n                  <tab>\n                    <ng-template tabHeading>\n                      <i class=\"tim-icons icon-bag-16\"> </i> Options\n                    </ng-template>\n                    <p>\n                      Efficiently unleash cross-media information without\n                      cross-media value. Quickly maximize timely deliverables\n                      for real-time schemas. <br />\n\n                      <br />\n                      Dramatically maintain clicks-and-mortar solutions without\n                      functional solutions.\n                    </p>\n                  </tab>\n                </tabset>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n            <div class=\"mb-3\">\n              <small class=\"text-uppercase font-weight-bold\"> With text </small>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <tabset class=\"nav-tabs-danger\">\n                  <tab heading=\"Profile\">\n                    <p>\n                      These cases are perfectly simple and easy to distinguish.\n                      In a free hour, when our power of choice is untrammelled\n                      and when nothing prevents our being able to do what we\n                      like best, every pleasure is to be welcomed and every pain\n                      avoided. <br />\n                      But in certain circumstances and owing to the claims of\n                      duty or the obligations of business it will frequently\n                      occur that pleasures\n                    </p>\n                  </tab>\n                  <tab heading=\"Settings\">\n                    <p>\n                      I will be the leader of a company that ends up being worth\n                      billions of dollars, because I got the answers. I\n                      understand culture. I am the nucleus. I think thatâs a\n                      responsibility that I have, to push possibilities, to show\n                      people, this is the level that things could be at. I think\n                      thatâs a responsibility that I have, to push\n                      possibilities, to show people, this is the level that\n                      things could be at.\n                    </p>\n                  </tab>\n                  <tab heading=\"Options\">\n                    <p>\n                      I think thatâs a responsibility that I have, to push\n                      possibilities, to show people, this is the level that\n                      things could be at. So when you get something that has the\n                      name Kanye West on it, itâs supposed to be pushing the\n                      furthest possibilities. I will be the leader of a company\n                      that ends up being worth billions of dollars, because I\n                      got the answers. I understand culture. I am the nucleus.\n                    </p>\n                  </tab>\n                </tabset>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-pagination\">\n      <img class=\"path\" src=\"assets/img/path4.png\" />\n\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\n\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h3 class=\"mb-4\">Progress Bars</h3>\n            <div class=\"progress-container\">\n              <span class=\"progress-badge\"> Default </span>\n              <progressbar [value]=\"25\">\n                <span class=\"progress-value\"> 25% </span>\n              </progressbar>\n            </div>\n            <div class=\"progress-container progress-danger\">\n              <span class=\"progress-badge\"> Danger </span>\n              <progressbar class=\"progress-bar-danger\" [value]=\"60\">\n                <span class=\"progress-value\"> 60% </span>\n              </progressbar>\n            </div>\n            <br />\n\n            <h3 class=\"mb-5\">Navigation Pills</h3>\n            <tabset type=\"pills\" class=\"nav-pills-danger nav-pills-icons\">\n              <tab>\n                <ng-template tabHeading>\n                  <i class=\"tim-icons icon-atom\"> </i> Home\n                </ng-template>\n              </tab>\n              <tab>\n                <ng-template tabHeading>\n                  <i class=\"tim-icons icon-chat-33\"> </i> Messages\n                </ng-template>\n              </tab>\n              <tab>\n                <ng-template tabHeading>\n                  <i class=\"tim-icons icon-settings-gear-63\"> </i> Settings\n                </ng-template>\n              </tab>\n            </tabset>\n          </div>\n          <div class=\"col-md-6\">\n            <h3 class=\"mb-5\">Pagination</h3>\n            <pagination\n              class=\"pagination-danger\"\n              [(ngModel)]=\"pagination1\"\n              [totalItems]=\"30\"\n            >\n            </pagination>\n            <pagination\n              class=\"pagination-danger\"\n              [boundaryLinks]=\"true\"\n              [totalItems]=\"45\"\n              [ngModel]=\"pagination\"\n              previousText=\"&lsaquo;\"\n              nextText=\"&rsaquo;\"\n              firstText=\"&laquo;\"\n              lastText=\"&raquo;\"\n            >\n            </pagination>\n            <br />\n\n            <h3 class=\"mb-5\">Labels</h3>\n            <span class=\"badge badge-default mr-1\"> Default </span>\n            <span class=\"badge badge-primary mr-1\"> Primary </span>\n            <span class=\"badge badge-success mr-1\"> Success </span>\n            <span class=\"badge badge-info mr-1\"> Info </span>\n            <span class=\"badge badge-warning mr-1\"> Warning </span>\n            <span class=\"badge badge-danger mr-1\"> Danger </span>\n            <span class=\"badge badge-neutral\"> Neutral </span>\n          </div>\n        </div>\n        <br />\n      </div>\n    </div>\n    <div class=\"section section-notifications\" id=\"notifications\">\n      <div class=\"container\">\n        <div class=\"space\"></div>\n        <h3>Notifications</h3>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'primary alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-coins\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Congrats! - </b> This is a regular notification made with\n            \".alert-primary\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'info alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-trophy\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Heads up! - </b> This is a regular notification made with\n            \".alert-info\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'success alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-bell-55\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Well done! - </b> This is a regular notification made with\n            \".alert-success\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'warning alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-bulb-63\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Warning! - </b> This is a regular notification made with\n            \".alert-warning\"\n          </span>\n        </alert>\n        <alert\n          class=\"alert-with-icon\"\n          [type]=\"'danger alert-with-icon'\"\n          [dismissible]=\"true\"\n        >\n          <span class=\"tim-icons icon-support-17\" data-notify=\"icon\"> </span>\n          <span>\n            <b> Oh snap! - </b> This is a regular notification made with\n            \".alert-danger\"\n          </span>\n        </alert>\n      </div>\n    </div>\n    <div class=\"section section-typo\">\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <img class=\"path path1\" src=\"assets/img/path3.png\" />\n\n      <div class=\"container\">\n        <h3 class=\"title\">Typography</h3>\n        <div id=\"typography\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"typography-line\">\n                <h1><span> Header 1 </span> The Life of BLK• Design System</h1>\n              </div>\n              <div class=\"typography-line\">\n                <h2><span> Header 2 </span> The Life of BLK• Design System</h2>\n              </div>\n              <div class=\"typography-line\">\n                <h3><span> Header 3 </span> The Life of BLK• Design System</h3>\n              </div>\n              <div class=\"typography-line\">\n                <h4><span> Header 4 </span> The Life of BLK• Design System</h4>\n              </div>\n              <div class=\"typography-line\">\n                <h5><span> Header 5 </span> The Life of BLK• Design System</h5>\n              </div>\n              <div class=\"typography-line\">\n                <h6><span> Header 6 </span> The Life of BLK• Design System</h6>\n              </div>\n              <div class=\"typography-line\">\n                <p>\n                  <span> Paragraph </span> I will be the leader of a company\n                  that ends up being worth billions of dollars, because I got\n                  the answers. I understand culture. I am the nucleus. I think\n                  thatâs a responsibility that I have, to push possibilities, to\n                  show people, this is the level that things could be at.\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Quote </span>\n                <blockquote>\n                  <p class=\"blockquote blockquote-danger\">\n                    \"I will be the leader of a company that ends up being worth\n                    billions of dollars, because I got the answers. I understand\n                    culture. I am the nucleus. I think thatâs a responsibility\n                    that I have, to push possibilities, to show people, this is\n                    the level that things could be at.\" <br />\n\n                    <br />\n\n                    <small> - Noaa </small>\n                  </p>\n                </blockquote>\n              </div>\n              <div class=\"typography-line\">\n                <span> Muted Text </span>\n                <p class=\"text-muted\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Primary Text </span>\n                <p class=\"text-primary\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Info Text </span>\n                <p class=\"text-info\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Success Text </span>\n                <p class=\"text-success\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Warning Text </span>\n                <p class=\"text-warning\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <span> Danger Text </span>\n                <p class=\"text-danger\">\n                  I will be the leader of a company that ends up being worth\n                  billions of dollars, because I got the answers...\n                </p>\n              </div>\n              <div class=\"typography-line\">\n                <h2>\n                  <span> Small Tag </span> Header with small subtitle <br />\n\n                  <small> Use \"small\" tag for the headers </small>\n                </h2>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"space-50\"></div>\n        <div id=\"images\">\n          <h3 class=\"mb-5\">Images</h3>\n          <div class=\"row\">\n            <div class=\"col-sm-3 col-6\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Image\n              </small>\n              <img\n                alt=\"Rounded image\"\n                class=\"img-fluid rounded shadow\"\n                src=\"assets/img/ryan.jpg\"\n                style=\"width: 150px\"\n              />\n            </div>\n            <div class=\"col-sm-3 col-6\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Circle Image\n              </small>\n              <img\n                alt=\"Circle image\"\n                class=\"img-fluid rounded-circle shadow\"\n                src=\"assets/img/james.jpg\"\n                style=\"width: 150px\"\n              />\n            </div>\n            <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Raised\n              </small>\n              <img\n                alt=\"Raised image\"\n                class=\"img-fluid rounded shadow-lg\"\n                src=\"assets/img/lora.jpg\"\n                style=\"width: 150px\"\n              />\n            </div>\n            <div class=\"col-sm-3 col-6 mt-5 mt-sm-0\">\n              <small class=\"d-block text-uppercase font-weight-bold mb-4\">\n                Circle Raised\n              </small>\n              <img\n                alt=\"Raised circle image\"\n                class=\"img-fluid rounded-circle shadow-lg\"\n                src=\"assets/img/mike.jpg\"\n                style=\"width: 150px\"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-javascript\" id=\"javascriptComponents\">\n      <img class=\"path\" src=\"assets/img/path5.png\" />\n\n      <img class=\"path path1\" src=\"assets/img/path5.png\" />\n\n      <div class=\"container\">\n        <h3 class=\"title mb-5\">Javascript components</h3>\n        <h4 class=\"mb-5\">Modal</h4>\n        <div class=\"row\" id=\"modals\">\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-danger\"\n              data-target=\"#myModal\"\n              (click)=\"myModal.show()\"\n            >\n              Launch Modal\n            </button>\n          </div>\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-warning\"\n              data-target=\"#myModal1\"\n              (click)=\"myModal1.show()\"\n            >\n              Launch Modal Mini\n            </button>\n          </div>\n          <div class=\"col-md-4\">\n            <button\n              class=\"btn btn-success\"\n              data-target=\"#myModal2\"\n              (click)=\"myModal2.show()\"\n            >\n              Launch Modal Form\n            </button>\n          </div>\n        </div>\n        <br />\n\n        <br />\n\n        <h4 class=\"mb-5 mt-3\">Datepicker</h4>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <div class=\"datepicker-container\">\n              <div class=\"form-group\">\n                <input\n                  bsDatepicker\n                  class=\"form-control\"\n                  data-datepicker-color=\"danger\"\n                  [bsConfig]=\"{ isAnimated: true, containerClass: 'theme-red' }\"\n                  [bsValue]=\"date\"\n                  id=\"datepicker\"\n                  type=\"text\"\n                />\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <h4 class=\"mb-5 mt-3\">Popovers</h4>\n            <button\n              class=\"btn btn-default btn-sm mr-1\"\n              container=\"body\"\n              placement=\"top\"\n              popoverTitle=\"Popover on top\"\n              popover=\"Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On top\n            </button>\n            <button\n              class=\"btn btn-default btn-sm mr-1\"\n              container=\"body\"\n              placement=\"right\"\n              popoverTitle=\"Popover on right\"\n              popover=\"Here will be some very useful information about his popover.<br>\n              Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On right\n            </button>\n            <button\n              class=\"btn btn-default btn-sm mr-1\"\n              container=\"body\"\n              placement=\"bottom\"\n              popoverTitle=\"Popover on bottom\"\n              popover=\"Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On bottom\n            </button>\n            <button\n              class=\"btn btn-default btn-sm\"\n              container=\"body\"\n              placement=\"left\"\n              popoverTitle=\"Popover on left\"\n              popover=\"Here will be some very useful information about his popover.\"\n              type=\"button\"\n            >\n              On left\n            </button>\n          </div>\n          <div class=\"col-md-6\">\n            <h4 class=\"mb-5 mt-3\">Tooltips</h4>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              data-delay=\"100\"\n              placement=\"left\"\n              tooltip=\"Tooltip on left\"\n              type=\"button\"\n            >\n              On left\n            </button>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              placement=\"top\"\n              tooltip=\"Tooltip on top\"\n              type=\"button\"\n            >\n              On top\n            </button>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm mr-1\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              placement=\"bottom\"\n              tooltip=\"Tooltip on bottom\"\n              type=\"button\"\n            >\n              On bottom\n            </button>\n            <button\n              class=\"btn btn-default btn-tooltip btn-sm\"\n              data-animation=\"true\"\n              data-container=\"body\"\n              placement=\"right\"\n              tooltip=\"Tooltip on right\"\n              type=\"button\"\n            >\n              On right\n            </button>\n            <div class=\"clearfix\"></div>\n            <br />\n\n            <br />\n          </div>\n        </div>\n      </div>\n      <div class=\"section\">\n        <div class=\"container\">\n          <div class=\"title\">\n            <h3>Carousel</h3>\n          </div>\n          <div class=\"row justify-content-between align-items-center\">\n            <div class=\"col-lg-5 mb-5 mb-lg-0\">\n              <h1 class=\"text-white font-weight-light\">Bootstrap carousel</h1>\n              <p class=\"text-white mt-4\">\n                Black Design comes with three pre-built pages to help you get\n                started faster. You can change the text and images and you're\n                good to go.\n              </p>\n              <a\n                class=\"btn btn-warning mt-4\"\n                href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/alerts\"\n              >\n                See all components\n              </a>\n            </div>\n            <div class=\"col-lg-6\">\n              <carousel [showIndicators]=\"false\">\n                <slide>\n                  <img\n                    alt=\"First slide\"\n                    class=\"d-block w-100\"\n                    src=\"assets/img/denys.jpg\"\n                  />\n                </slide>\n                <slide>\n                  <img\n                    alt=\"Second slide\"\n                    class=\"d-block w-100\"\n                    src=\"assets/img/fabien-bazanegue.jpg\"\n                  />\n                </slide>\n                <slide>\n                  <img\n                    alt=\"Third slide\"\n                    class=\"d-block w-100\"\n                    src=\"assets/img/mark-finn.jpg\"\n                  />\n                </slide>\n              </carousel>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-nucleo-icons\">\n      <img class=\"path\" src=\"assets/img/path3.png\" />\n\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-8 col-md-12\">\n            <h2 class=\"title\">Nucleo Icons</h2>\n            <h4 class=\"description\">\n              BLK• Design System PRO comes with 100 custom icons made by our\n              friends from NucleoApp. The official package contains over 2.100\n              thin icons which are looking great in combination with BLK• Design\n              System PRO Make sure you check all of them and use those that you\n              like the most.\n            </h4>\n            <div class=\"btn-wrapper\">\n              <a\n                class=\"btn btn-danger btn-round mr-1\"\n                href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/icons\"\n                target=\"_blank\"\n              >\n                View Demo Icons\n              </a>\n              <a\n                class=\"btn btn-danger btn-simple btn-round btn-lg\"\n                href=\"https://nucleoapp.com/?ref=1712\"\n                target=\"_blank\"\n              >\n                View All Icons\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"blur-hover\">\n          <a\n            href=\"https://demos.creative-tim.com/blk-design-system-angular/#/documentation/icons\"\n            class=\"text-danger\"\n          >\n            <div class=\"icons-container blur-item on-screen mt-5\">\n              <i class=\"icon tim-icons icon-coins\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-spaceship\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-money-coins\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-link-72\"> </i>\n              <i class=\"icon tim-icons icon-send\"> </i>\n              <i class=\"icon tim-icons icon-mobile\"> </i>\n              <i class=\"icon tim-icons icon-wifi\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-key-25\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-atom\"> </i>\n              <i class=\"icon icon-sm tim-icons icon-satisfied\"> </i>\n              <i class=\"icon tim-icons icon-gift-2\"> </i>\n              <i class=\"icon tim-icons icon-tap-02\"> </i>\n              <i class=\"icon tim-icons icon-wallet-43\"> </i>\n            </div>\n            <span class=\"blur-hidden h5 text-danger\">\n              Eplore all the 21.000+ Nucleo Icons\n            </span>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-signup\">\n      <div class=\"container\">\n        <div class=\"squares square-1\"></div>\n        <div class=\"squares square-2\"></div>\n        <div class=\"squares square-3\"></div>\n        <div class=\"squares square-4\"></div>\n        <div class=\"row row-grid justify-content-between align-items-center\">\n          <div class=\"col-lg-6\">\n            <h3 class=\"display-3 text-white\">\n              A beautiful Black Design\n              <span class=\"text-white\"> completed with examples </span>\n            </h3>\n            <p class=\"text-white mb-3\">\n              The Design System comes with four pre-built pages to help you get\n              started faster. You can change the text and images and you're good\n              to go. More importantly, looking at them will give you a picture\n              of what you can built with this powerful Bootstrap 4 Design\n              System.\n            </p>\n            <div class=\"btn-wrapper\">\n              <a class=\"btn btn-danger\" [routerLink]=\"['/register']\">\n                Register Page\n              </a>\n            </div>\n          </div>\n          <div class=\"col-lg-6 mb-lg-auto\">\n            <div class=\"card card-register\">\n              <div class=\"card-header\">\n                <img\n                  alt=\"Card image\"\n                  class=\"card-img\"\n                  src=\"assets/img/square1-red.png\"\n                />\n\n                <h4 class=\"card-title\">Register</h4>\n              </div>\n              <div class=\"card-body\">\n                <form class=\"form\">\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-single-02\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Full Name\"\n                      type=\"text\"\n                    />\n                  </div>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-email-85\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Email\"\n                      type=\"text\"\n                    />\n                  </div>\n                  <div class=\"input-group\">\n                    <div class=\"input-group-prepend\">\n                      <div class=\"input-group-text\">\n                        <i class=\"tim-icons icon-lock-circle\"> </i>\n                      </div>\n                    </div>\n                    <input\n                      class=\"form-control\"\n                      placeholder=\"Password\"\n                      type=\"text\"\n                    />\n                  </div>\n                  <div class=\"form-check text-left\">\n                    <label class=\"form-check-label\">\n                      <input class=\"form-check-input\" type=\"checkbox\" />\n\n                      <span class=\"form-check-sign\"> </span> I agree to the\n                      <a href=\"javascript:void(0)\"> terms and conditions </a> .\n                    </label>\n                  </div>\n                </form>\n              </div>\n              <div class=\"card-footer\">\n                <a\n                  class=\"btn btn-danger btn-round btn-lg\"\n                  href=\"javascript:void(0)\"\n                >\n                  Get Started\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-examples\" data-background-color=\"black\">\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <div class=\"space-50\"></div>\n      <div class=\"container text-center\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <a [routerLink]=\"['/landing']\">\n              <img\n                alt=\"Image\"\n                class=\"img-raised\"\n                src=\"assets/img/landing-page.png\"\n              />\n            </a>\n            <a\n              class=\"btn btn-simple btn-danger btn-round\"\n              [routerLink]=\"['/landing']\"\n            >\n              View Landing Page\n            </a>\n          </div>\n          <div class=\"col-sm-6\">\n            <a [routerLink]=\"['/profile']\">\n              <img\n                alt=\"Image\"\n                class=\"img-raised\"\n                src=\"assets/img/profile-page.png\"\n              />\n            </a>\n            <a\n              class=\"btn btn-simple btn-danger btn-round\"\n              [routerLink]=\"['/profile']\"\n            >\n              View Profile Page\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"section section-download\" data-background-color=\"black\" #target>\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <div class=\"container\">\n        <div class=\"row justify-content-md-center\">\n          <div class=\"text-center col-md-12 col-lg-8\">\n            <h2 class=\"title\">\n              Do you love this Bootstrap 4 Angular Design System?\n            </h2>\n            <h4 class=\"description\">\n              Cause if you do, it can be yours for FREE. Hit the button below to\n              navigate to Creative Tim where you can find the design system in\n              HTML format. Start a new project or give an old Bootstrap project\n              a new look!\n            </h4>\n          </div>\n          <div class=\"text-center col-md-12 col-lg-8\">\n            <a\n              class=\"btn btn-danger btn-round btn-lg\"\n              href=\"https://www.creative-tim.com/product/blk-design-system-angular\"\n              role=\"button\"\n            >\n              Download Angular\n            </a>\n          </div>\n        </div>\n        <br />\n\n        <br />\n\n        <br />\n\n        <br />\n\n        <br />\n\n        <div class=\"row row-grid align-items-center my-md\">\n          <div class=\"col-lg-6\">\n            <h3 class=\"text-danger font-weight-light mb-2\">\n              Thank you for supporting us!\n            </h3>\n            <h4 class=\"mb-0 font-weight-light\">\n              Let's get in touch on any of these platforms.\n            </h4>\n          </div>\n          <div class=\"col-lg-6 text-lg-center btn-wrapper\">\n            <a\n              class=\"btn btn-icon btn-twitter btn-round btn-lg mr-1\"\n              id=\"twitter\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-facebook btn-round btn-lg mr-1\"\n              id=\"facebook\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-github btn-round btn-lg\"\n              href=\"https://github.com/creativetimofficial\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-github\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      aria-hidden=\"true\"\n      aria-labelledby=\"myModalLabel\"\n      bsModal\n      class=\"modal fade\"\n      #myModal=\"bs-modal\"\n      id=\"myModal\"\n      role=\"dialog\"\n      tabindex=\"-1\"\n    >\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header justify-content-center\">\n            <button\n              aria-hidden=\"true\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              type=\"button\"\n              (click)=\"myModal.hide()\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n            <h4 class=\"title title-up\">Modal title</h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>\n              Far far away, behind the word mountains, far from the countries\n              Vokalia and Consonantia, there live the blind texts. Separated\n              they live in Bookmarksgrove right at the coast of the Semantics, a\n              large language ocean. A small river named Duden flows by their\n              place and supplies it with the necessary regelialia. It is a\n              paradisematic country, in which roasted parts of sentences fly\n              into your mouth.\n            </p>\n          </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-default\" type=\"button\">Nice Button</button>\n            <button\n              class=\"btn btn-danger\"\n              data-dismiss=\"modal\"\n              type=\"button\"\n              (click)=\"myModal.hide()\"\n            >\n              Close\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      aria-hidden=\"true\"\n      aria-labelledby=\"myModalLabel\"\n      bsModal\n      class=\"modal fade modal-mini modal-danger modal-mini\"\n      #myModal1=\"bs-modal\"\n      id=\"myModal1\"\n      role=\"dialog\"\n      tabindex=\"-1\"\n    >\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header justify-content-center\">\n            <button\n              aria-hidden=\"true\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              (click)=\"myModal1.hide()\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove text-white\"> </i>\n            </button>\n            <div class=\"modal-profile\">\n              <i class=\"tim-icons icon-single-02\"> </i>\n            </div>\n          </div>\n          <div class=\"modal-body\">\n            <p>Always have an access to your profile</p>\n          </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-link btn-neutral\" type=\"button\">Back</button>\n            <button\n              class=\"btn btn-link btn-neutral\"\n              data-dismiss=\"modal\"\n              type=\"button\"\n              (click)=\"myModal1.hide()\"\n            >\n              Close\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div\n      aria-hidden=\"true\"\n      aria-labelledby=\"myModalLabel\"\n      bsModal\n      class=\"modal fade modal-black\"\n      #myModal2=\"bs-modal\"\n      id=\"myModal2\"\n      role=\"dialog\"\n      tabindex=\"-1\"\n    >\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header justify-content-center\">\n            <button\n              aria-hidden=\"true\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              (click)=\"myModal2.hide()\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove text-white\"> </i>\n            </button>\n            <div class=\"text-muted text-center ml-auto mr-auto\">\n              <h3 class=\"mb-0\">Sign in with</h3>\n            </div>\n          </div>\n          <div class=\"modal-body\">\n            <div class=\"btn-wrapper text-center\">\n              <a\n                class=\"btn btn-neutral btn-icon mr-1\"\n                href=\"javascript:void(0)\"\n              >\n                <img src=\"assets/img/github.svg\" />\n              </a>\n              <a class=\"btn btn-neutral btn-icon\" href=\"javascript:void(0)\">\n                <img src=\"assets/img/google.svg\" />\n              </a>\n            </div>\n            <div class=\"text-center text-muted mb-4 mt-3\">\n              <small> Or sign in with credentials </small>\n            </div>\n            <form role=\"form\">\n              <div class=\"form-group mb-3\">\n                <div\n                  class=\"input-group input-group-alternative\"\n                  [ngClass]=\"{ 'input-group-focus': focus1 === true }\"\n                >\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"tim-icons icon-email-85\"> </i>\n                    </span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Email\"\n                    type=\"email\"\n                    (focus)=\"focus1 = true\"\n                    (blur)=\"focus1 = false\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div\n                  class=\"input-group input-group-alternative\"\n                  [ngClass]=\"{ 'input-group-focus': focus2 === true }\"\n                >\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">\n                      <i class=\"tim-icons icon-key-25\"> </i>\n                    </span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Password\"\n                    type=\"password\"\n                    (focus)=\"focus2 = true\"\n                    (blur)=\"focus2 = false\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-check mt-3\">\n                <label class=\"form-check-label\">\n                  <input\n                    checked=\"checked\"\n                    class=\"form-check-input\"\n                    type=\"checkbox\"\n                  />\n\n                  <span class=\"form-check-sign\"> </span> Remember me!\n                </label>\n              </div>\n              <div class=\"text-center\">\n                <button class=\"btn btn-primary my-4\" type=\"button\">\n                  Sign in\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <footer class=\"footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <h1 class=\"title\">BLK•</h1>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/home']\"> Home </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/landing']\"> Landing </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a\n                class=\"nav-link\"\n                href=\"https://creative-tim.com/contact-us?ref=blkdsa-footer\"\n              >\n                Contact Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a\n                class=\"nav-link\"\n                href=\"https://creative-tim.com/about-us?ref=blkdsa-footer\"\n              >\n                About Us\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a\n                class=\"nav-link\"\n                href=\"https://creative-tim.com/blog?ref=blkdsa-footer\"\n              >\n                Blog\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"https://opensource.org/licenses/MIT\">\n                License\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h3 class=\"title\">Follow us:</h3>\n          <div class=\"btn-wrapper profile\">\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://twitter.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-twitter\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple mr-1\"\n              href=\"https://www.facebook.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-facebook-square\"> </i>\n            </a>\n            <a\n              class=\"btn btn-icon btn-neutral btn-round btn-simple\"\n              href=\"https://dribbble.com/creativetim\"\n              target=\"_blank\"\n            >\n              <i class=\"fab fa-dribbble\"> </i>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "VMY1":
/*!******************************************************!*\
  !*** ./src/app/pages/profile/profile.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gallery {\n  display: flex;\n  flex-wrap: wrap;\n  margin: -1rem -1rem;\n  padding-bottom: 3rem;\n}\n.gallery img {\n  height: 350px;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.gallery-item {\n  position: relative;\n  flex: 1 0 22rem;\n  margin-top: 18px;\n  color: #fff;\n  cursor: pointer;\n}\n.gallery-item:hover .gallery-item-info,\n.gallery-item:focus .gallery-item-info {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(42, 42, 42, 0.185);\n}\n.gallery-item-info {\n  display: none;\n}\n.gallery-item-info li {\n  display: inline-block;\n}\n.gallery-item-likes {\n  margin-right: 2.2rem;\n}\n.gallery-item-type {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  text-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);\n}\n.fa-clone,\n.fa-comment {\n  transform: rotateY(180deg);\n}\n.gallery-image {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.page-header {\n  /* min-height: 100vh; */\n  max-height: none;\n  padding: 0;\n  color: #ffffff;\n  position: relative;\n  overflow: visible;\n  /* overflow-x: hidden; */\n  /* overflow-y: hidden; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7QUFBRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0FBRUo7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7QUFBRjtBQUdBOztFQUdFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7QUFERjtBQUlBO0VBQ0UsYUFBQTtBQURGO0FBSUE7RUFDRSxxQkFBQTtBQURGO0FBTUE7RUFDRSxvQkFBQTtBQUhGO0FBTUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBRUEsb0RBQUE7QUFKRjtBQU9BOztFQUVFLDBCQUFBO0FBSkY7QUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUpGO0FBUUE7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNDLGlCQUFBO0VBQ0Qsd0JBQUE7RUFDQSx3QkFBQTtBQUxGIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsbGVyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiAtMXJlbSAtMXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gIGltZyB7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIH1cbn1cblxuLmdhbGxlcnktaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMSAwIDIycmVtO1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICAvLyBtYXJnaW46IDFyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5nYWxsZXJ5LWl0ZW06aG92ZXIgLmdhbGxlcnktaXRlbS1pbmZvLFxuLmdhbGxlcnktaXRlbTpmb2N1cyAuZ2FsbGVyeS1pdGVtLWluZm8ge1xuIFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MiwgNDIsIDQyLCAwLjE4NSk7XG59XG5cbi5nYWxsZXJ5LWl0ZW0taW5mbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5nYWxsZXJ5LWl0ZW0taW5mbyBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLy8gZm9udC1zaXplOiAxLjdyZW07XG4gIC8vIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5nYWxsZXJ5LWl0ZW0tbGlrZXMge1xuICBtYXJnaW4tcmlnaHQ6IDIuMnJlbTtcbn1cblxuLmdhbGxlcnktaXRlbS10eXBlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFyZW07XG4gIHJpZ2h0OiAxcmVtO1xuICAvLyBmb250LXNpemU6IDIuNXJlbTtcbiAgdGV4dC1zaGFkb3c6IDAuMnJlbSAwLjJyZW0gMC4ycmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmZhLWNsb25lLFxuLmZhLWNvbW1lbnQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmdhbGxlcnktaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuXG4ucGFnZS1oZWFkZXIge1xuICAvKiBtaW4taGVpZ2h0OiAxMDB2aDsgKi9cbiAgbWF4LWhlaWdodDogbm9uZTsgXG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICBvdmVyZmxvdyA6dmlzaWJsZSA7XG4gIC8qIG92ZXJmbG93LXg6IGhpZGRlbjsgKi9cbiAgLyogb3ZlcmZsb3cteTogaGlkZGVuOyAqL1xufSJdfQ== */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "WYVw":
/*!************************************************************!*\
  !*** ./src/app/component/signaler/signaler.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduYWxlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Wi89":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/challange-detiles/challange-detiles.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/> \n<br/>\n<div class=\"container\">\n  <h3 *ngIf=\"challange\">\n    Challange title : {{challange['title']}}\n  </h3>\n      <div *ngFor=\"let item of challangeCopy\" style=\"width : 50%\" class=\"p-3 d-flex align-items-center\" >\n          <div class=\"card card-blog\">\n            <div class=\"p-3 d-flex align-items-center\">\n              <img alt=\"... \" class=\"avatar img-raised\" src=\"assets/img/james.jpg \" />\n              <div class=\"pl-3\">\n               <span\n                 class=\"text-white\">\n                 {{ item[\"userData\"][\"firstname\"] }} {{ item[\"userData\"][\"lastname\"] }}\n               </span>\n              \n                <button class=\"btn btn-success\" style=\"margin-left: 150px;\" (click)=\"winner(item['id_user'])\" >winner ?</button>\n              \n             </div>\n            \n            \n            </div>\n        \n            <carousel\n              class=\"card-image\"\n              *ngIf=\"item['img']\"\n              [showIndicators]=\"false\"\n              pause>\n              <slide *ngFor=\"let img of item['img']\" class=\"text-center\">\n                <!-- <img [src]=\"getImage(img['idimg'], item['_id'])\" /> -->\n                <img   src=\"../../../assets/img/images1680823107821.png\" />\n              </slide>\n            </carousel>\n          \n          </div>\n        </div>  \n</div>\n \n   \n  \n   ");

/***/ }),

/***/ "XSaY":
/*!******************************************************************!*\
  !*** ./src/app/component/add-comment/add-comment.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtY29tbWVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "Y5Lh":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "RPTm");
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.scss */ "VMY1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentification.service */ "izgN");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/publication.service */ "wzbf");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! buffer */ "tjlA");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_9__);










var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authServ, userServ, ref, route, publicationService, sanitizer) {
        this.authServ = authServ;
        this.userServ = userServ;
        this.ref = ref;
        this.route = route;
        this.publicationService = publicationService;
        this.sanitizer = sanitizer;
        this.isCollapsed = true;
        this.source = "profile";
        this.showfollow = true;
        this.followBtn = "Follow";
        this.List = [];
        this.ListCopy = [];
        this.Listimage = [];
        this.isCollapsedProfile = [];
        this.coutReationPublication = 0;
        this.countVueProject = 0;
        this.loggedInUser = this.authServ.getUserID();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.username = params.get("username");
        });
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("profile-page");
        this.userServ.findUserByUsername(this.username).subscribe(function (res) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _a, _b, _i, _c, element;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.user = res;
                        _a = this;
                        return [4 /*yield*/, res["following"].length];
                    case 1:
                        _a.following = _d.sent();
                        _b = this;
                        return [4 /*yield*/, res["followers"].length];
                    case 2:
                        _b.followers = _d.sent();
                        for (_i = 0, _c = this.user["followers"]; _i < _c.length; _i++) {
                            element = _c[_i];
                            if (element["id"] === this.loggedInUser) {
                                this.showfollow = false;
                                this.followBtn = "Following";
                            }
                        }
                        return [4 /*yield*/, this.getPubliction()];
                    case 3:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        this.ref.detectChanges();
    };
    ProfileComponent.prototype.getcoutReationPublicationReply = function (message) {
        this.coutReationPublication = message;
        this.ref.detectChanges();
    };
    ProfileComponent.prototype.getcoutVueProjectReply = function (message) {
        this.countVueProject = message;
        this.ref.detectChanges();
    };
    ProfileComponent.prototype.getPubliction = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.publicationService.getPost().subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var _a, _loop_1, this_1, _i, data_1, item;
                    var _this = this;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = this;
                                return [4 /*yield*/, data];
                            case 1:
                                _a.List = _b.sent();
                                _loop_1 = function (item) {
                                    var shouldAddItem, _a;
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                                        switch (_b.label) {
                                            case 0:
                                                shouldAddItem = true;
                                                if (item["Id_user"] !== this_1.user["_id"]) {
                                                    shouldAddItem = false;
                                                }
                                                if (!shouldAddItem) return [3 /*break*/, 2];
                                                _a = this_1.coutReationPublication;
                                                return [4 /*yield*/, item["reaction"].length];
                                            case 1:
                                                this_1.coutReationPublication = _a + _b.sent();
                                                this_1.isCollapsedProfile[item._id] = true;
                                                this_1.authServ.findUserById(item.Id_user).subscribe(function (userData) {
                                                    var itemCopy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { userData: userData });
                                                    _this.ListCopy.push(itemCopy);
                                                    var imageforpub = [];
                                                    for (var _i = 0, _a = itemCopy.img; _i < _a.length; _i++) {
                                                        var itam = _a[_i];
                                                        _this.publicationService
                                                            .getImage(itam.idimg)
                                                            .subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                                            var imageDataUrl, safeUrl;
                                                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                                                imageDataUrl = buffer__WEBPACK_IMPORTED_MODULE_9__["Buffer"].from(data["img"]["data"]["data"]).toString("base64");
                                                                safeUrl = this.sanitizer.bypassSecurityTrustUrl("data:data:image/png;base64," + imageDataUrl);
                                                                imageforpub.push({ _id: data["_id"], safeUrl: safeUrl });
                                                                return [2 /*return*/];
                                                            });
                                                        }); });
                                                    }
                                                    _this.Listimage.push({
                                                        idpub: itemCopy._id,
                                                        listimage: imageforpub,
                                                    });
                                                });
                                                _b.label = 2;
                                            case 2: return [2 /*return*/];
                                        }
                                    });
                                };
                                this_1 = this;
                                _i = 0, data_1 = data;
                                _b.label = 2;
                            case 2:
                                if (!(_i < data_1.length)) return [3 /*break*/, 5];
                                item = data_1[_i];
                                return [5 /*yield**/, _loop_1(item)];
                            case 3:
                                _b.sent();
                                _b.label = 4;
                            case 4:
                                _i++;
                                return [3 /*break*/, 2];
                            case 5:
                                this.ref.detectChanges();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ProfileComponent.prototype.followUser = function (id) {
        var _this = this;
        this.userServ
            .updatefollow({ id: this.loggedInUser, idprofile: id })
            .subscribe(function () {
            _this.showfollow = !_this.showfollow;
            _this.followBtn = "Following";
            _this.followers++;
            _this.ref.detectChanges();
        });
    };
    ProfileComponent.prototype.unfollowUser = function (id) {
        var _this = this;
        this.userServ
            .removefollow({ id: this.loggedInUser, idprofile: id })
            .subscribe(function () {
            _this.showfollow = !_this.showfollow;
            _this.followBtn = "Follow";
            _this.followers--;
            _this.ref.detectChanges();
        });
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_4__["AuthentificationService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
        { type: src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_7__["PublicationService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"] }
    ]; };
    ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-profile",
            template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
            styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_4__["AuthentificationService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_7__["PublicationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "YX+B":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/edit-challenge/edit-challenge.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>edit-challenge works!</p>\n");

/***/ }),

/***/ "YoYF":
/*!********************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICAgIGhlaWdodDogNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "Yt2E":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/repoted-post/repoted-post.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row justify-content-center\">\n     <table class=\"table table-hover col-lg-9 mr-4\">\n       <thead>\n         <tr>\n           <th></th>\n           <th>username</th>\n           <th>email</th>\n           <th>text</th>\n           <th></th>\n           <th></th>\n         </tr>\n       </thead>\n       <tbody>\n         <tr *ngFor=\"let sng of ListCopy\">\n           <td>\n             <img\n               alt=\"... \"\n               class=\"avatar img-raised\"\n               src=\"assets/img/james.jpg \"\n             />\n           </td>\n           <td>{{ sng[\"userData\"][\"username\"] }}</td>\n           <td>{{ sng[\"userData\"][\"email\"] }}</td>\n           <td>{{ sng[\"text\"] }}</td>\n           <td *ngIf=\"sng['state']\">\n             <button\n               type=\"button\"\n               class=\"btn btn-success btn-sm ml-3\"\n               (click)=\"handleClick(sng['_id'])\"\n             >\n               Donne\n             </button>\n           </td>\n           <td *ngIf=\"!sng['state']\">Donne</td>\n           <td  *ngIf=\"sng['state']\">\n             <button\n               type=\"button\"\n               class=\"btn btn-success btn-sm ml-3\"\n              \n               (click)=\"showPub(sng['publiction_id'] , sng['_id'])\"\n             >\n               Show\n             </button>\n           </td>\n           <td  *ngIf=\"!sng['state']\" >\n            DELETED\n           </td>\n         </tr>\n       </tbody>\n     </table>\n   </div>\n\n\n\n   \n<ng-template #modalContent let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">\n    See the ditels of the reposted post \n    </h4>\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"modal.dismiss()\"\n    >\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div  style=\"padding: 15px ; margin: 10px;\">\n\n     <p class=\"prg\" id=\"modal-basic-title\">\n      user Id :  {{publictionDetails['_id']}}\n      </p>\n  \n      <p class=\"prg\" id=\"modal-basic-title\">\n         User Name : {{publictionDetails['userData']['username'] }}\n       </p>\n        \n       <p class=\"prg\">\n        text :  {{ publictionDetails[\"text\"]}}\n       </p>\n\n       \n     <img src=\"../../../assets/img/fabien-bazanegue.jpg\" />  \n     \n     <button  class=\"btn btn-danger\"    (click)=\"deletePubliction(publictionDetails['_id'])\" > Delete</button>\n     <button  class=\"btn btn-default\"   (click)=\"modal.dismiss()\" > Ingore</button>\n  \n  </div>\n      \n     \n      \n    \n    \n    </ng-template>\n\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "St1U");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var _services_AuthInterceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/AuthInterceptor */ "ek6Y");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "ObfR");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/footer/footer.component */ "xb3B");
/* harmony import */ var _pages_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/error-not-found/error-not-found.component */ "9eMp");
/* harmony import */ var _autoresize_directive_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./autoresize-directive.directive */ "2jGa");
/* harmony import */ var _pipe_hashtag_color_pipe_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipe/hashtag-color-pipe.pipe */ "MFyW");
/* harmony import */ var _component_signaler_signaler_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/signaler/signaler.component */ "U2/p");














// import { FeedIdentityComponent } from "./component/feed-identity/feed-identity.component";


//import { SignalerComponent } from './component/signaler/signaler.component';

//import { AddProjectModalComponent } from './component/add-project-modal/add-project-modal.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _autoresize_directive_directive__WEBPACK_IMPORTED_MODULE_14__["AutoresizeDirectiveDirective"],
                _pages_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_13__["ErrorNotFoundComponent"],
                // FeedIdentityComponent,
                _pipe_hashtag_color_pipe_pipe__WEBPACK_IMPORTED_MODULE_15__["HashtagColorPipePipe"],
                _component_signaler_signaler_component__WEBPACK_IMPORTED_MODULE_16__["SignalerComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                // BsDropdownModule.forRoot(),
                // ProgressbarModule.forRoot(),
                // TooltipModule.forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"].forRoot(),
                // TabsModule.forRoot(),
                _pages_pages_module__WEBPACK_IMPORTED_MODULE_9__["PagesModule"],
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _services_AuthInterceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"],
                    multi: true,
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "bFxs":
/*!**********************************************************!*\
  !*** ./src/app/component/add-post/add-post.component.ts ***!
  \**********************************************************/
/*! exports provided: AddPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostComponent", function() { return AddPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_post_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-post.component.html */ "wjHE");
/* harmony import */ var _add_post_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-post.component.scss */ "e1uJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _services_publication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/publication.service */ "wzbf");
/* harmony import */ var src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/logged-in-user.service */ "GHSY");








var AddPostComponent = /** @class */ (function () {
    function AddPostComponent(sanitizer, loggedUserServ, publicationService) {
        this.sanitizer = sanitizer;
        this.loggedUserServ = loggedUserServ;
        this.publicationService = publicationService;
        this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.images = [];
        this.hashtags = [];
        this.filteredHashtags = [];
        this.isModalVisible = true;
        this.invalide = false;
        this.isCopyrightChecked = false;
        this.idUser = this.loggedUserServ.getUserID();
    }
    AddPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedUserServ.findUserById(this.idUser).subscribe(function (res) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, res];
                    case 1:
                        _a.loggedInUser = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        this.getHashtag();
        this.postTextElement = document.querySelector(".form-control.inputtag");
    };
    AddPostComponent.prototype.addNewItem = function (value) {
        this.newItemEvent.emit(value);
    };
    AddPostComponent.prototype.getHashtag = function () {
        var _this = this;
        this.publicationService.getMyHashtag().subscribe(function (data) {
            _this.hashtags = data;
        });
    };
    AddPostComponent.prototype.insertHashtag = function (hashtag) {
        var postTextElement = document.querySelector(".post-text .inputtag");
        var postText = postTextElement.textContent || "";
        postTextElement.textContent = postText + "#" + hashtag + " ";
    };
    AddPostComponent.prototype.onFileSelected = function (event) {
        event.preventDefault(); // empêche le rafraîchissement de la page
        var files = event.target.files;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            var url = URL.createObjectURL(file);
            var safeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
            var image = {
                name: file.name,
                file: file,
                url: safeUrl,
            };
            this.images.push(image);
        }
    };
    AddPostComponent.prototype.clearSelectedImage = function (index) {
        this.images.splice(index, 1);
    };
    AddPostComponent.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        var postText = this.postTextElement.textContent || "";
        if (postText.trim() === "") {
            this.invalide = true;
            return;
        }
        var hashtags = postText.match(/#(\w+)/g) || [];
        var uniqueHashtags = Array.from(new Set(hashtags.map(function (tag) { return tag.slice(1); })));
        var formData = new FormData();
        formData.append("text", postText);
        formData.append("Id_user", this.idUser);
        formData.append("copyrightChecked", this.isCopyrightChecked.toString());
        if (uniqueHashtags.length === 1) {
            formData.append("hashtags", uniqueHashtags[0]);
        }
        else {
            uniqueHashtags.forEach(function (tag) {
                formData.append("hashtags", tag);
            });
        }
        this.images.forEach(function (image) { return formData.append("images", image.file); });
        // send API request to create the new post
        this.publicationService.createPost(formData).subscribe(function (response) {
            // handle response from the API
            _this.postTextElement.innerHTML = "";
            _this.images = [];
            _this.addNewItem(true);
            _this.myModal.hide();
            _this.myModal2.show();
        }, function (error) {
            _this.invalide = true;
            console.error("err", error);
            // handle error from the API
            alert("you trying to use image ");
            return;
        });
    };
    AddPostComponent.prototype.onInputChange = function (value) {
        var regex = /(^|\s)(#[a-zA-Z\d]+)/g;
        var replacedValue = value.replace(regex, "$1<span style=\"color:red;\">$2</span>");
        this.postText = replacedValue;
        this.invalide = false;
        if (value.indexOf("#") !== -1) {
            var inputHashtag_1 = value.substring(value.lastIndexOf("#") + 1);
            this.filteredHashtags = this.hashtags
                .filter(function (hashtag) {
                return hashtag.tag_name.toLowerCase().startsWith(inputHashtag_1.toLowerCase());
            })
                .map(function (hashtag) { return ({ tag_name: hashtag.tag_name }); });
        }
        else {
            this.filteredHashtags = [];
        }
    };
    AddPostComponent.prototype.addHashtag = function (hashtag) {
        var lastIndex = this.postText.lastIndexOf("#");
        this.postText = this.postText.substring(0, lastIndex) + "#" + hashtag + " ";
    };
    AddPostComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
        { type: src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_7__["LoggedInUserService"] },
        { type: _services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"] }
    ]; };
    AddPostComponent.propDecorators = {
        myModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["myModal",] }],
        myModal2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["myModal2",] }],
        newItemEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
    };
    AddPostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-add-post",
            template: _raw_loader_add_post_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_add_post_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_7__["LoggedInUserService"],
            _services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"]])
    ], AddPostComponent);
    return AddPostComponent;
}());



/***/ }),

/***/ "c3AT":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.API_Creat_project = "https://artverse-project-api-nodejs.onrender.com/Project/PostPrpject";
        this.API_Get_project = "https://artverse-project-api-nodejs.onrender.com/Project/GetProjects";
        this.apiUrlGetOneImg = "https://artverse-project-api-nodejs.onrender.com/Posts/getImage";
        this.apiUrlUpdateProject = "https://artverse-project-api-nodejs.onrender.com/Project/updateProject";
    }
    ProjectService.prototype.createProject = function (ProjectData) {
        return this.http.post(this.API_Creat_project, ProjectData);
    };
    ProjectService.prototype.getProjectsByUserId = function (id) {
        return this.http.get("https://artverse-project-api-nodejs.onrender.com/Project/getProjects/" + id);
    };
    ProjectService.prototype.getAllProject = function () {
        return this.http.get(this.API_Get_project);
    };
    ProjectService.prototype.getImage = function (id) {
        return this.http.get(this.apiUrlGetOneImg + "?id=" + id);
    };
    ProjectService.prototype.updateVueProject = function (id, vueNumber, vueUsers) {
        return this.http.patch("" + this.apiUrlUpdateProject, {
            id: id,
            vueNumber: vueNumber,
            vueUsers: vueUsers,
        });
    };
    ProjectService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProjectService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "dgLM":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-page/login-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header\">\n        <div class=\"page-header-image\"></div>\n        <div class=\"content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"card card-register\">\n                        <div class=\"row\">\n                            <div class=\"col-md-5 d-none d-md-block\">\n                                <img alt=\"First slide\" class=\"img-fluid h-100 w-100\" src=\"assets/img/sign.jpeg\" />\n                            </div>\n\n                            <div class=\"col-md-7 col-sm-12\">\n                                <div class=\"card-body\">\n                                    <div class=\"ml-auto mr-auto\">\n                                        <h3 class=\"mb-5 text-center display-4 mt-4\">\n                                            Sign In to Artverse•\n                                        </h3>\n                                    </div>\n\n                                    <!-- <div class=\"mb-4\">\n                                        <p>Welcome back Artist!</p>\n                                    </div> -->\n\n                                    <form class=\"form\" [formGroup]=\"cnxForm\" (ngSubmit)=\"cnx()\" novalidate>\n                                        <div class=\"input-group\" [ngClass]=\"{\n                        'input-group-focus': focus2 === true,\n                        'has-danger':\n                          isSubmitted == true && cnxForm.controls.email.invalid,\n                        'has-success':\n                          isSubmitted == true && cnxForm.controls.email.valid\n                      }\">\n                                            <div class=\"input-group-prepend\">\n                                                <div class=\"input-group-text\">\n                                                    <i class=\"tim-icons icon-email-85\"> </i>\n                                                </div>\n                                            </div>\n                                            <input class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" [(ngModel)]=\"email\" type=\"text\" (focus)=\"focus2 = true\" (blur)=\"focus2 = false\" />\n                                        </div>\n                                        <div class=\"input-group\" [ngClass]=\"{\n                        'input-group-focus': focus3 === true,\n                        'has-danger':\n                          isSubmitted == true &&\n                          cnxForm.controls.password.invalid,\n                        'has-success':\n                          isSubmitted == true && cnxForm.controls.password.valid\n                      }\">\n                                            <div class=\"input-group-prepend\">\n                                                <div class=\"input-group-text\">\n                                                    <i class=\"tim-icons icon-lock-circle\"> </i>\n                                                </div>\n                                            </div>\n                                            <input class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"pswd\" formControlName=\"password\" type=\"password\" (focus)=\"focus3 = true\" (blur)=\"focus3 = false\" />\n                                        </div>\n\n                                        <small class=\"form-text text-info\" data-target=\"#myModal\" (click)=\"myModal.show()\">Forgot password?</small\n                    >\n\n                    <div class=\"card-footer\">\n                      <button class=\"btn btn-primary\" href=\"javascript:void(0)\">\n                        Connexion\n                      </button>\n                    </div>\n\n                    <div class=\"mt-3\">\n                      <p>\n                        Don't you have an account ?\n                        <a href=\"\" [routerLink]=\"['/register']\"\n                          >create new one</a\n                        >\n                      </p>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <!-- Modal -->\n\n        <div\n          aria-hidden=\"true\"\n          aria-labelledby=\"myModalLabel\"\n          bsModal\n          class=\"modal fade modal-black\"\n          #myModal=\"bs-modal\"\n          id=\"myModal\"\n          role=\"dialog\"\n          tabindex=\"-1\"\n        >\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"forgotPasswordModalLabel\">\n                  Forgot password\n                </h5>\n                <button\n                  type=\"button\"\n                  class=\"close\"\n                  data-dismiss=\"modal\"\n                  aria-label=\"Close\"\n                >\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <p>\n                  Veuillez entrer votre adresse e-mail pour rechercher votre\n                  compte :\n                </p>\n\n                <div class=\"form-group\">\n                  <input\n                    type=\"email\"\n                    class=\"form-control\"\n                    id=\"resetPasswordEmail\"\n                    placeholder=\"Enter email\"\n                    [(ngModel)]=\"resetByEmail\"\n                  />\n                </div>\n              </div>\n              <div class=\"modal-footer\">\n                <button\n                  data-dismiss=\"modal\"\n                  type=\"button\"\n                  (click)=\"myModal.hide()\"\n                  class=\"btn btn-secondary\"\n                >\n                  Cancel\n                </button>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-primary\"\n                  (click)=\"resetPasswd()\"\n                >\n                  Reset password\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "38Bd");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "978R");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "St1U");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/alert */ "CNMR");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "Osdn");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "qTkF");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/popover */ "KOzp");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./index/index.component */ "sqmE");
/* harmony import */ var _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./examples/profilepage/profilepage.component */ "F149");
/* harmony import */ var _registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./registerpage/registerpage.component */ "vqka");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login-page/login-page.component */ "6V8c");
/* harmony import */ var _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./examples/landingpage/landingpage.component */ "IfWR");
/* harmony import */ var _component_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../component/add-post/add-post.component */ "bFxs");
/* harmony import */ var _HomePage_home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./HomePage/home/home.component */ "Kw4l");
/* harmony import */ var _component_for_you_list_for_you_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../component/for-you-list/for-you-list.component */ "/cup");
/* harmony import */ var _component_searsh_searsh_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../component/searsh/searsh.component */ "qn7w");
/* harmony import */ var _component_competition_competition_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../component/competition/competition.component */ "io2J");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./profile/profile.component */ "Y5Lh");
/* harmony import */ var _reset_password_page_reset_password_page_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./reset-password-page/reset-password-page.component */ "sAQ7");
/* harmony import */ var _component_project_project_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../component/project/project.component */ "L/+i");
/* harmony import */ var _component_feed_identity_feed_identity_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../component/feed-identity/feed-identity.component */ "yvul");
/* harmony import */ var _component_suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../component/suggestion/suggestion.component */ "47RM");
/* harmony import */ var _dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dashboard-admin/dashboard-admin.component */ "Ee1h");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _component_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../component/add-comment/add-comment.component */ "Dgdm");
/* harmony import */ var _component_add_project_modal_add_project_modal_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../component/add-project-modal/add-project-modal.component */ "fwmD");
/* harmony import */ var _component_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../component/all-users/all-users.component */ "CKhZ");
/* harmony import */ var _component_challenges_challenges_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../component/challenges/challenges.component */ "nRwJ");
/* harmony import */ var _component_add_challenge_add_challenge_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../component/add-challenge/add-challenge.component */ "EK2Y");
/* harmony import */ var _component_edit_challenge_edit_challenge_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../component/edit-challenge/edit-challenge.component */ "LE88");
/* harmony import */ var _component_show_challenge_show_challenge_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../component/show-challenge/show-challenge.component */ "ht3W");
/* harmony import */ var _challange_detiles_challange_detiles_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./challange-detiles/challange-detiles.component */ "tVTz");
/* harmony import */ var _component_repoted_post_repoted_post_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../component/repoted-post/repoted-post.component */ "Irkh");












































var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__["PopoverModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(),
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_16__["JwBootstrapSwitchNg2Module"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__["TabsModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__["AlertModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__["CarouselModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_34__["NgbCollapseModule"],
            ],
            declarations: [
                _index_index_component__WEBPACK_IMPORTED_MODULE_18__["IndexComponent"],
                _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_19__["ProfilepageComponent"],
                _registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_20__["RegisterpageComponent"],
                _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_21__["LoginPageComponent"],
                _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_22__["LandingpageComponent"],
                _HomePage_home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"],
                _component_for_you_list_for_you_list_component__WEBPACK_IMPORTED_MODULE_25__["ForYouListComponent"],
                _component_add_post_add_post_component__WEBPACK_IMPORTED_MODULE_23__["AddPostComponent"],
                _component_searsh_searsh_component__WEBPACK_IMPORTED_MODULE_26__["SearshComponent"],
                _component_competition_competition_component__WEBPACK_IMPORTED_MODULE_27__["CompetitionComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_28__["ProfileComponent"],
                _reset_password_page_reset_password_page_component__WEBPACK_IMPORTED_MODULE_29__["ResetPasswordPageComponent"],
                _component_feed_identity_feed_identity_component__WEBPACK_IMPORTED_MODULE_31__["FeedIdentityComponent"],
                _component_project_project_component__WEBPACK_IMPORTED_MODULE_30__["ProjectComponent"],
                _component_suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_32__["SuggestionComponent"],
                _dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_33__["DashboardAdminComponent"],
                _component_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_35__["AddCommentComponent"],
                _component_add_project_modal_add_project_modal_component__WEBPACK_IMPORTED_MODULE_36__["AddProjectModalComponent"],
                _component_all_users_all_users_component__WEBPACK_IMPORTED_MODULE_37__["AllUsersComponent"],
                _component_challenges_challenges_component__WEBPACK_IMPORTED_MODULE_38__["ChallengesComponent"],
                _component_add_challenge_add_challenge_component__WEBPACK_IMPORTED_MODULE_39__["AddChallengeComponent"],
                _component_edit_challenge_edit_challenge_component__WEBPACK_IMPORTED_MODULE_40__["EditChallengeComponent"],
                _component_show_challenge_show_challenge_component__WEBPACK_IMPORTED_MODULE_41__["ShowChallengeComponent"],
                _component_repoted_post_repoted_post_component__WEBPACK_IMPORTED_MODULE_43__["RepotedPostComponent"],
                _challange_detiles_challange_detiles_component__WEBPACK_IMPORTED_MODULE_42__["ChallangeDetilesComponent"],
            ],
            exports: [
                _index_index_component__WEBPACK_IMPORTED_MODULE_18__["IndexComponent"],
                _examples_profilepage_profilepage_component__WEBPACK_IMPORTED_MODULE_19__["ProfilepageComponent"],
                _registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_20__["RegisterpageComponent"],
                _examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_22__["LandingpageComponent"],
            ],
            providers: [],
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "e1uJ":
/*!************************************************************!*\
  !*** ./src/app/component/add-post/add-post.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".custom-textarea {\n  padding: 10px;\n  font-size: 16px;\n  line-height: 1.5;\n  border-radius: 5px;\n  border: none;\n  box-shadow: none;\n  resize: vertical;\n  height: auto;\n}\n\ntextarea::-webkit-scrollbar-thumb {\n  cursor: default;\n  background-color: #fff;\n  border-radius: 6px;\n}\n\ntextarea::-webkit-scrollbar-thumb:hover {\n  background-color: #aba7a7;\n}\n\nul li,\nol li {\n  color: #1f2251;\n}\n\n.list-group-item {\n  padding: 5px;\n  margin-bottom: -0.0625rem;\n  background-color: #ffffff;\n  border: 0.0625rem solid #e9ecef;\n}\n\n.inputtag {\n  margin-top: 5px;\n  min-height: 100px;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\nul.list-group {\n  width: 160px;\n  z-index: 2000000;\n  max-height: 100px;\n  /* adjust the height as needed */\n  overflow-y: scroll;\n}\n\n.modal-content {\n  padding: 10px;\n}\n\n.modal-header {\n  padding: 0px;\n}\n\n.custom-textarea {\n  padding: 10px;\n  font-size: 16px;\n  line-height: 1.5;\n  border-radius: 5px;\n  border: none;\n  box-shadow: none;\n  resize: vertical;\n  height: auto;\n  position: relative;\n}\n\n.custom-textarea ul {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  z-index: 10;\n}\n\n.custom-textarea ul li {\n  padding: 5px;\n  cursor: pointer;\n}\n\n.custom-textarea ul li:hover {\n  background-color: #f5f5f5;\n}\n\n.inputtag {\n  z-index: 1;\n}\n\n.hashtag {\n  color: red;\n}\n\nul.list-group::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\nul.list-group::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\nul.list-group::-webkit-scrollbar-thumb {\n  background: #55054e;\n  border-radius: 5px;\n}\n\nul.list-group::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n.form-label {\n  color: rgba(255, 255, 255, 0.6);\n  background: cadetblue;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGQtcG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsY0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFBbUIsZ0NBQUE7RUFDbkIsa0JBQUE7QUFFRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFESTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBR047O0FBRk07RUFDRSx5QkFBQTtBQUlSOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUFGIiwiZmlsZSI6ImFkZC1wb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS10ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIGhlaWdodDogYXV0bztcbn1cblxudGV4dGFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbnRleHRhcmVhOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmE3YTc7XG59XG5cbnVsIGxpLFxub2wgbGkge1xuICBjb2xvcjogIzFmMjI1MTtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogLTAuMDYyNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgI2U5ZWNlZjtcbn1cblxuLmlucHV0dGFnIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbn1cblxudWwubGlzdC1ncm91cCB7XG4gIHdpZHRoOiAxNjBweDtcbiAgei1pbmRleDogMjAwMDAwMDtcbiAgbWF4LWhlaWdodDogMTAwcHg7IC8qIGFkanVzdCB0aGUgaGVpZ2h0IGFzIG5lZWRlZCAqL1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cblxuLm1vZGFsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uY3VzdG9tLXRleHRhcmVhIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICB6LWluZGV4OiAxMDtcbiAgICBsaSB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmlucHV0dGFnIHtcbiAgei1pbmRleDogMTtcbn1cblxuLmhhc2h0YWcge1xuICBjb2xvcjogcmVkO1xufVxuXG5cbnVsLmxpc3QtZ3JvdXA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG59XG5cbnVsLmxpc3QtZ3JvdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbn1cblxudWwubGlzdC1ncm91cDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjNTUwNTRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbnVsLmxpc3QtZ3JvdXA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU1NTtcbn1cblxuLmZvcm0tbGFiZWwge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBiYWNrZ3JvdW5kOiBjYWRldGJsdWU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "ek6Y":
/*!*********************************************!*\
  !*** ./src/app/services/AuthInterceptor.ts ***!
  \*********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _authentification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentification.service */ "izgN");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.authService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken,
            },
        });
        return next.handle(req);
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: _authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthentificationService"] }
    ]; };
    AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthentificationService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "fwmD":
/*!****************************************************************************!*\
  !*** ./src/app/component/add-project-modal/add-project-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddProjectModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectModalComponent", function() { return AddProjectModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_add_project_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./add-project-modal.component.html */ "LNiX");
/* harmony import */ var _add_project_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-project-modal.component.scss */ "nbP9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _services_publication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/publication.service */ "wzbf");
/* harmony import */ var src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/logged-in-user.service */ "GHSY");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/project.service */ "c3AT");
/* harmony import */ var _services_singles_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/singles.service */ "w+HY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");












var AddProjectModalComponent = /** @class */ (function () {
    function AddProjectModalComponent(fb, sanitizer, elementRef, loggedUserServ, publicationService, projectService, singlesService) {
        this.fb = fb;
        this.sanitizer = sanitizer;
        this.elementRef = elementRef;
        this.loggedUserServ = loggedUserServ;
        this.publicationService = publicationService;
        this.projectService = projectService;
        this.singlesService = singlesService;
        this.images = [];
        this.hashtags = [];
        this.isModalVisible = true;
        this.invalide = false;
        this.isCopyrightChecked = false;
        this.Message = "";
        this.tabbleauHashtag = [];
        this.tabbleauTools = [];
        this.category = ["VFX", "3D", "Illustration", "Photography"];
        this.isSubmitted = false;
        this.registrationForm = this.fb.group({
            categoryName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required]],
        });
        this.idUser = this.loggedUserServ.getUserID();
    }
    AddProjectModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedUserServ.findUserById(this.idUser).subscribe(function (res) {
            _this.loggedInUser = res;
            console.log("test methode init", _this.inputValueHashtag);
        });
        console.log("test maha 2", this.idUser);
        this.getHashtag();
        this.postTextElement = document.querySelector(".form-control.inputtag");
    };
    AddProjectModalComponent.prototype.getHashtag = function () {
        var _this = this;
        this.publicationService.getMyHashtag().subscribe(function (data) {
            _this.hashtags = data;
        });
    };
    AddProjectModalComponent.prototype.test = function (data) {
        console.log("test methode", data);
    };
    AddProjectModalComponent.prototype.onFileSelected = function (event) {
        event.preventDefault(); // empêche le rafraîchissement de la page
        var files = event.target.files;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            var url = URL.createObjectURL(file);
            var safeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
            var image = {
                name: file.name,
                file: file,
                url: safeUrl,
            };
            this.images.push(image);
        }
        console.log(this.images);
    };
    AddProjectModalComponent.prototype.clearSelectedImage = function (index) {
        this.images.splice(index, 1);
    };
    // hashtag manuplation
    AddProjectModalComponent.prototype.addHashtagg = function (inpu) {
        var _this = this;
        var hashtags = inpu.split(" ");
        hashtags.forEach(function (hashtag) {
            if (hashtag.trim() !== "" &&
                _this.tabbleauHashtag.indexOf(hashtag.trim()) === -1) {
                _this.tabbleauHashtag.push(hashtag.trim());
            }
        });
        this.inputValueHashtag = "";
    };
    AddProjectModalComponent.prototype.removeHashtag = function (hash) {
        var index = this.tabbleauHashtag.indexOf(hash);
        console.log("innnddd", index);
        if (index !== -1) {
            this.tabbleauHashtag.splice(index, 1);
        }
    };
    AddProjectModalComponent.prototype.addTools = function (inpu) {
        console.log("value", inpu);
        console.log("index", this.tabbleauTools.indexOf(inpu));
        if (this.tabbleauTools.indexOf(inpu) == -1) {
            this.tabbleauTools.push(inpu);
        }
        console.log(this.tabbleauTools);
    };
    AddProjectModalComponent.prototype.removeTools = function (hash) {
        var index = this.tabbleauTools.indexOf(hash);
        if (index !== -1) {
            this.tabbleauTools.splice(index, 1);
        }
    };
    AddProjectModalComponent.prototype.displayValue = function (value) {
        console.log("value 2", value);
    };
    AddProjectModalComponent.prototype.changecategory = function (e) {
        var _a;
        (_a = this.categoryName) === null || _a === void 0 ? void 0 : _a.setValue(e.target.value, {
            onlySelf: true,
        });
    };
    Object.defineProperty(AddProjectModalComponent.prototype, "categoryName", {
        // Access formcontrols getter
        get: function () {
            return this.registrationForm.get("categoryName");
        },
        enumerable: false,
        configurable: true
    });
    AddProjectModalComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.titre.nativeElement.value == "") {
            this.Message = "choisissez un titre";
        }
        else if (this.registrationForm.value.categoryName === "") {
            this.Message = "choisissez un category";
        }
        else if (this.tabbleauHashtag.length < 1) {
            this.Message = "choisissez au moins un hashtag";
        }
        else if (this.tabbleauTools.length < 1) {
            this.Message = "choisissez au moins un Tools";
        }
        else if (this.images.length < 1) {
            this.Message = "choisissez au moins une image";
        }
        else {
            var formData_1 = new FormData();
            formData_1.append("Id_user", this.idUser);
            formData_1.append("titre", this.titre.nativeElement.value);
            formData_1.append("catg", this.registrationForm.value.categoryName);
            if (this.tabbleauHashtag.length === 1) {
                formData_1.append("hashtags", this.tabbleauHashtag[0]);
            }
            else {
                this.tabbleauHashtag.forEach(function (tag) {
                    formData_1.append("hashtags", tag);
                });
            }
            if (this.tabbleauTools.length === 1) {
                formData_1.append("tools", this.tabbleauTools[0]);
            }
            else {
                this.tabbleauTools.forEach(function (tag) {
                    formData_1.append("tools", tag);
                });
            }
            this.images.forEach(function (image) { return formData_1.append("images", image.file); });
            this.projectService.createProject(formData_1).subscribe(function (response) {
                console.log("ok", response);
                _this.myModal.hide();
                _this.myModal2.show();
            }, function (error) {
                _this.invalide = true;
                console.error("err", error);
                // handle error from the API
                _this.myModal.hide();
                _this.myModal3.show();
                alert("you trying to use image ");
                return;
            });
        }
    };
    AddProjectModalComponent.prototype.onInputChange = function () {
        this.Message = "hi";
    };
    AddProjectModalComponent.prototype.openSinaler = function () {
        this.myModal3.hide();
        this.myModal4.show();
    };
    AddProjectModalComponent.prototype.onSubmit_Single = function () {
        var _this = this;
        console.log(this.inputValueSingle);
        this.singlesService
            .send_single({ Id_user: this.idUser, text: this.inputValueSingle })
            .subscribe(function (response) {
            console.log("ok", response);
            _this.myModal4.hide();
        }, function (error) {
            alert("try agine ");
            return;
        });
    };
    AddProjectModalComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_7__["LoggedInUserService"] },
        { type: _services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"] },
        { type: _services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"] },
        { type: _services_singles_service__WEBPACK_IMPORTED_MODULE_9__["SinglesService"] }
    ]; };
    AddProjectModalComponent.propDecorators = {
        myModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["myModal",] }],
        myModal2: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["myModal2",] }],
        myModal3: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["myModal3",] }],
        myModal4: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["myModal4",] }],
        titre: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["titre",] }]
    };
    AddProjectModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-add-project-modal",
            template: _raw_loader_add_project_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_add_project_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
            src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_7__["LoggedInUserService"],
            _services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"],
            _services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"],
            _services_singles_service__WEBPACK_IMPORTED_MODULE_9__["SinglesService"]])
    ], AddProjectModalComponent);
    return AddProjectModalComponent;
}());



/***/ }),

/***/ "ht3W":
/*!**********************************************************************!*\
  !*** ./src/app/component/show-challenge/show-challenge.component.ts ***!
  \**********************************************************************/
/*! exports provided: ShowChallengeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowChallengeComponent", function() { return ShowChallengeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_show_challenge_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./show-challenge.component.html */ "8EQV");
/* harmony import */ var _show_challenge_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-challenge.component.scss */ "kdyC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_singles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/singles.service */ "w+HY");
/* harmony import */ var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentification.service */ "izgN");






var ShowChallengeComponent = /** @class */ (function () {
    function ShowChallengeComponent(singlesService, authserv) {
        this.singlesService = singlesService;
        this.authserv = authserv;
        this.challengesCopy = [];
    }
    ShowChallengeComponent.prototype.ngOnInit = function () {
        this.getchanlleng();
    };
    ShowChallengeComponent.prototype.getchanlleng = function () {
        var _this = this;
        this.singlesService.get_chanllenge().subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _a, _loop_1, this_1, _i, _b, item;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, data];
                    case 1:
                        _a.challengesData = _c.sent();
                        _loop_1 = function (item) {
                            if (item["winner"]) {
                                this_1.authserv.findUserById(item["winner"]).subscribe(function (data) {
                                    _this.challengesCopy.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { winnersData: data }));
                                });
                            }
                            else {
                                this_1.challengesCopy.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item));
                            }
                        };
                        this_1 = this;
                        for (_i = 0, _b = this.challengesData; _i < _b.length; _i++) {
                            item = _b[_i];
                            _loop_1(item);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    ShowChallengeComponent.prototype.count = function (list) {
        return list.length;
    };
    ShowChallengeComponent.prototype.deteleChallenges = function (id, title) {
        this.singlesService.deleteChallnge({ id: id }).subscribe(function (data) {
            alert(title + "  has been deleted");
        });
    };
    ShowChallengeComponent.ctorParameters = function () { return [
        { type: src_app_services_singles_service__WEBPACK_IMPORTED_MODULE_4__["SinglesService"] },
        { type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_5__["AuthentificationService"] }
    ]; };
    ShowChallengeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-show-challenge",
            template: _raw_loader_show_challenge_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_show_challenge_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_singles_service__WEBPACK_IMPORTED_MODULE_4__["SinglesService"],
            src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_5__["AuthentificationService"]])
    ], ShowChallengeComponent);
    return ShowChallengeComponent;
}());



/***/ }),

/***/ "iK8a":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/navbar/navbar.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-expand-lg fixed-top navbar-transparent\"\n  color-on-scroll=\"100\"\n  id=\"navbar-top\"\n>\n  <div class=\"container\">\n    <div class=\"navbar-translate\">\n      <a\n        class=\"navbar-brand\"\n        placement=\"bottom\"\n        [routerLink]=\"['/home']\"\n        tooltip=\"\"\n      >\n        <img\n          src=\"assets/img/logo/Logo-blanc.png\"\n          class=\"logo\"\n          alt=\"\"\n          srcset=\"\"\n        />\n        <!-- Artverse• -->\n        <!-- <li>Logged in user: {{ loggedInUser }}</li> -->\n      </a>\n      <button\n        aria-controls=\"navigation-index\"\n        aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler\"\n        [attr.aria-expanded]=\"!isCollapsed\"\n        (click)=\"isCollapsed = !isCollapsed\"\n        id=\"navigation\"\n        type=\"button\"\n      >\n        <span class=\"navbar-toggler-bar bar1\"> </span>\n        <span class=\"navbar-toggler-bar bar2\"> </span>\n        <span class=\"navbar-toggler-bar bar3\"> </span>\n      </button>\n    </div>\n    <div\n      class=\"navbar-collapse justify-content-end\"\n      [collapse]=\"isCollapsed\"\n      id=\"navigation\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a> Artverse• </a>\n          </div>\n          <div class=\"col-6 collapse-close text-right\">\n            <button\n              aria-controls=\"navigation-index\"\n              aria-label=\"Toggle navigation\"\n              class=\"navbar-toggler\"\n              [attr.aria-expanded]=\"!isCollapsed\"\n              (click)=\"isCollapsed = !isCollapsed\"\n              id=\"navigation\"\n              type=\"button\"\n            >\n              <i class=\"tim-icons icon-simple-remove\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            [routerLink]=\"['/home']\"\n            placement=\"bottom\"\n            tooltip=\"\"\n          >\n            <p class=\"\">Home</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            [routerLink]=\"['/explore']\"\n            placement=\"bottom\"\n            tooltip=\"\"\n          >\n            <p class=\"\">Explore</p>\n          </a>\n        </li>\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            [routerLink]=\"['/challenges']\"\n            placement=\"bottom\"\n            tooltip=\"\"\n          >\n            <p class=\"\">Challenges</p>\n          </a>\n        </li>\n\n        <li class=\"nav-item p-0\">\n          <a\n            class=\"nav-link\"\n            [routerLink]=\"['/']\"\n            placement=\"bottom\"\n            tooltip=\"\"\n          >\n            <span class=\"position-relative\">\n              <i class=\"far fa-bell\"></i>\n              <span class=\"badge bg-danger rounded-pill\">3</span>\n            </span>\n          </a>\n        </li>\n\n        <li class=\"nav-item\" *ngIf=\"!loggedInUser\">\n          <a\n            class=\"nav-link btn btn-primary\"\n            [routerLink]=\"['/register']\"\n            href=\"javascript:void(0)\"\n          >\n            Join the world\n          </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"loggedInUser\">\n          <a\n            class=\"nav-link btn btn-primary\"\n            [routerLink]=\"['/profile', loggedInUser['username']]\"\n            target=\"_blank\"\n            href=\"javascript:void(0)\"\n          >\n            Share Your Art\n          </a>\n        </li>\n        <li class=\"nav-item\" (click)=\"Deconnexion()\" *ngIf=\"loggedInUser\">\n          <a class=\"nav-link btn btn-default\" href=\"javascript:void(0)\">\n            Logout\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n");

/***/ }),

/***/ "io2J":
/*!****************************************************************!*\
  !*** ./src/app/component/competition/competition.component.ts ***!
  \****************************************************************/
/*! exports provided: CompetitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionComponent", function() { return CompetitionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_competition_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./competition.component.html */ "T7i2");
/* harmony import */ var _competition_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./competition.component.scss */ "GOjr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentification.service */ "izgN");
/* harmony import */ var src_app_services_singles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/singles.service */ "w+HY");
/* harmony import */ var src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/publication.service */ "wzbf");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/logged-in-user.service */ "GHSY");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! buffer */ "tjlA");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_10__);











var CompetitionComponent = /** @class */ (function () {
    function CompetitionComponent(authserv, singlesService, publicationService, sanitizer, loggedUserServ) {
        this.authserv = authserv;
        this.singlesService = singlesService;
        this.publicationService = publicationService;
        this.sanitizer = sanitizer;
        this.loggedUserServ = loggedUserServ;
        this.challenges = [];
        this.Listimage = [];
        this.images = [];
        this.challengesData = [];
        this.challengeWithWinner = [];
        this.challengeWithOutWinner = [];
        this.idUser = this.loggedUserServ.getUserID();
    }
    CompetitionComponent.prototype.ngOnInit = function () {
        this.getchanlleng();
    };
    CompetitionComponent.prototype.getImage = function (idimage, idpub) {
        for (var _i = 0, _a = this.Listimage; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.idChallenge === idpub) {
                for (var _b = 0, _c = item.listimage; _b < _c.length; _b++) {
                    var itam = _c[_b];
                    if (itam._id === idimage) {
                        return itam.safeUrl;
                    }
                }
            }
        }
    };
    CompetitionComponent.prototype.getchanlleng = function () {
        var _this = this;
        this.singlesService.get_chanllenge().subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var _a, _loop_1, this_1, _i, _b, item, _loop_2, this_2, _c, _d, item;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, data];
                    case 1:
                        _a.challengesData = _e.sent();
                        _loop_1 = function (item) {
                            if (item["winner"]) {
                                this_1.authserv.findUserById(item["winner"]).subscribe(function (data) {
                                    _this.challenges.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { winnersData: data }));
                                });
                            }
                            else {
                                this_1.challengeWithOutWinner.push(item);
                            }
                        };
                        this_1 = this;
                        for (_i = 0, _b = this.challengesData; _i < _b.length; _i++) {
                            item = _b[_i];
                            _loop_1(item);
                        }
                        _loop_2 = function (item) {
                            var imageforpub = [];
                            for (var _i = 0, _a = item["image"]; _i < _a.length; _i++) {
                                var itam = _a[_i];
                                this_2.publicationService
                                    .getImage(itam["idimg"])
                                    .subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                    var imageDataUrl, safeUrl;
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                        imageDataUrl = buffer__WEBPACK_IMPORTED_MODULE_10__["Buffer"].from(data["img"]["data"]["data"]).toString("base64");
                                        safeUrl = this.sanitizer.bypassSecurityTrustUrl("data:data:image/png;base64," + imageDataUrl);
                                        imageforpub.push({ _id: data["_id"], safeUrl: safeUrl });
                                        return [2 /*return*/];
                                    });
                                }); });
                            }
                            this_2.Listimage.push({
                                idChallenge: item["_id"],
                                listimage: imageforpub,
                            });
                        };
                        this_2 = this;
                        for (_c = 0, _d = this.challengesData; _c < _d.length; _c++) {
                            item = _d[_c];
                            _loop_2(item);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    CompetitionComponent.prototype.format = function (date) {
        var now = new Date();
        var diff = Math.abs(now.getTime() - Date.parse(date));
        var diffHours = Math.floor(diff / (1000 * 60 * 60));
        var diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
        var diffWeeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
        if (diffHours <= 23) {
            return diffHours + "h";
        }
        else if (diffDays <= 6) {
            return diffDays + "d";
        }
        else if (diffWeeks <= 10) {
            return diffWeeks + "w";
        } /*  else {
          return this.datePipe.transform(Date.parse(date), 'dd/MM/yyyy');
        } */
    };
    CompetitionComponent.prototype.reactioncount = function (list) {
        return list.length;
    };
    CompetitionComponent.prototype.onFileSelected = function (event) {
        event.preventDefault(); // empêche le rafraîchissement de la page
        var files = event.target.files;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            var url = URL.createObjectURL(file);
            var safeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
            var image = {
                name: file.name,
                file: file,
                url: safeUrl,
            };
            this.images.push(image);
        }
    };
    CompetitionComponent.prototype.clearSelectedImage = function (index) {
        this.images.splice(index, 1);
    };
    CompetitionComponent.prototype.onSubmit = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("Id_user", this.idUser);
        formData.append("Id_publiction", this.id);
        this.images.forEach(function (image) { return formData.append("images", image.file); });
        this.singlesService.send_chanllenge(formData).subscribe(function (response) {
            // handle response from the API
            _this.images = [];
            _this.myModal.hide();
        }, function (error) {
            console.error("err", error);
            // handle error from the API
            alert("you trying to use image ");
            return;
        });
    };
    CompetitionComponent.prototype.openModale = function (id) {
        this.id = id;
        this.myModal.show();
    };
    CompetitionComponent.ctorParameters = function () { return [
        { type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_4__["AuthentificationService"] },
        { type: src_app_services_singles_service__WEBPACK_IMPORTED_MODULE_5__["SinglesService"] },
        { type: src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"] },
        { type: src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_8__["LoggedInUserService"] }
    ]; };
    CompetitionComponent.propDecorators = {
        myModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["myModal",] }]
    };
    CompetitionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-competition",
            template: _raw_loader_competition_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_competition_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_4__["AuthentificationService"],
            src_app_services_singles_service__WEBPACK_IMPORTED_MODULE_5__["SinglesService"],
            src_app_services_publication_service__WEBPACK_IMPORTED_MODULE_6__["PublicationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"],
            src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_8__["LoggedInUserService"]])
    ], CompetitionComponent);
    return CompetitionComponent;
}());



/***/ }),

/***/ "izJy":
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard-admin/dashboard-admin.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex-column {\n  display: flex;\n  flex-direction: column !important;\n}\n\n.page-header {\n  /* min-height: 100vh; */\n  max-height: none;\n  padding: 0;\n  color: #ffffff;\n  position: relative;\n  overflow: visible;\n  /* overflow-x: hidden; */\n  /* overflow-y: hidden; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXNoYm9hcmQtYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUNBQUE7QUFDRjs7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0MsaUJBQUE7RUFDRCx3QkFBQTtFQUNBLHdCQUFBO0FBRUYiLCJmaWxlIjoiZGFzaGJvYXJkLWFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xufVxuLnBhZ2UtaGVhZGVyIHtcbiAgLyogbWluLWhlaWdodDogMTAwdmg7ICovXG4gIG1heC1oZWlnaHQ6IG5vbmU7IFxuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgb3ZlcmZsb3cgOnZpc2libGUgO1xuICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXG4gIC8qIG92ZXJmbG93LXk6IGhpZGRlbjsgKi9cbn0iXX0= */");

/***/ }),

/***/ "izgN":
/*!******************************************************!*\
  !*** ./src/app/services/authentification.service.ts ***!
  \******************************************************/
/*! exports provided: AuthentificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthentificationService", function() { return AuthentificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "9YHx");





var AuthentificationService = /** @class */ (function () {
    function AuthentificationService(http) {
        this.http = http;
        // public user: Observable<any>;
        // private userData = new BehaviorSubject(null);
        this.TOKEN_KEY = "token-key";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Content-Type", "application/json");
        this.currentUser = {};
        this.loggedInUser = "achraf";
    }
    AuthentificationService.prototype.inscriptionPost = function (user) {
        return this.http.post("https://artverse-project-api-nodejs.onrender.com/user/inscription", user);
    };
    AuthentificationService.prototype.getUserID = function () {
        var token = localStorage.getItem("token");
        var payload;
        if (token) {
            payload = JSON.parse(atob(token.split(".")[1]));
            console.log("payload", payload);
        }
        else {
            return null;
        }
        return payload._id;
    };
    AuthentificationService.prototype.getToken = function () {
        return localStorage.getItem("token");
    };
    // check if the token key exists in localStorage and returns a boolean indicating whether the user is authenticated.
    AuthentificationService.prototype.isLoggedIn = function () {
        return !!localStorage.getItem("token");
    };
    AuthentificationService.prototype.logout = function () {
        localStorage.removeItem("token");
    };
    AuthentificationService.prototype.sendMailResetPassword = function (email) {
        console.log("email service" + email);
        return this.http
            .post("https://artverse-project-api-nodejs.onrender.com/user/forgotPassword", { email: email })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
            console.log("sucess", response);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(function () { return new Error("test"); }).pipe();
        }));
    };
    AuthentificationService.prototype.login = function (credentials) {
        return this.http.post("https://artverse-project-api-nodejs.onrender.com/user/login", credentials);
    };
    AuthentificationService.prototype.resetPassword = function (token, password) {
        return this.http
            .patch("https://artverse-project-api-nodejs.onrender.com/user/resetPassword/" + token, {
            password: "" + password,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            // Extract token from response and save to localStorage
            var token = response["token"];
            console.log("toooken", token);
            localStorage.setItem("token", token);
            console.log("reeeesss", response["token"]);
            return response;
        }));
    };
    AuthentificationService.prototype.findUserById = function (id) {
        return this.http.get("https://artverse-project-api-nodejs.onrender.com/user/getUserById/" + id);
    };
    AuthentificationService.prototype.handleError = function (error) {
        var msg = "";
        if (error.error instanceof ErrorEvent) {
            // client-side error
            msg = error.error.message;
        }
        else {
            // server-side error
            msg = "Error Code : " + error.status + "\nMessage: " + error.message;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(msg);
    };
    AuthentificationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AuthentificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthentificationService);
    return AuthentificationService;
}());



/***/ }),

/***/ "jO8A":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error-not-found/error-not-found.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "jsby":
/*!****************************************************************!*\
  !*** ./src/app/component/suggestion/suggestion.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWdnZXN0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "kW0K":
/*!*********************************************************!*\
  !*** ./src/app/pages/HomePage/home/home.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".middle {\n  margin: 10px;\n}\n\n.card {\n  background-color: transparent;\n}\n\n.filter {\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n#myVideo {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  z-index: -1;\n  -o-object-position: center;\n     object-position: center;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkZGxlIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZmlsdGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbiNteVZpZGVvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "kdyC":
/*!************************************************************************!*\
  !*** ./src/app/component/show-challenge/show-challenge.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LWNoYWxsZW5nZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "kehh":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/suggestion/suggestion.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card card-profile profile-bg align-items-center\">\n  <div class=\"card-header\">Add Friends !</div>\n\n  <div *ngFor=\"let person of suggested\" class=\"card-body mt-2\">\n    <div class=\"media\">\n      <a class=\"pull-left\" href=\"javascript:void(0)\">\n        <div class=\"avatar\">\n          <img\n            alt=\"64x64\"\n            class=\"media-object img-raised\"\n            src=\"assets/img/logo.png\" />\n        </div>\n      </a>\n      <div class=\"\">\n        <h5 class=\"text-truncate mx-2\" style=\"width: 90px\">\n          {{ person[\"firstname\"] }} {{ person[\"lastname\"] }} <br />\n          <small class=\"text-muted\"> {{ person[\"username\"] }} </small>\n        </h5>\n\n        <button class=\"btn btn-info btn-sm mt-1 mx-2\">\n          <i class=\"tim-icons icon-simple-add mr-1\"></i>Follow\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "lRDX":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/for-you-list/for-you-list.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let item of ListCopy\">\n  <div class=\"card card-blog\">\n    <div class=\"p-3 d-flex align-items-center\">\n      <img alt=\"... \" class=\"avatar img-raised\" src=\"assets/img/james.jpg \" />\n      <div class=\"pl-3\">\n        <span\n          class=\"text-white\"\n          [routerLink]=\"['/profile', item['userData']['username']]\">\n          {{ item[\"userData\"][\"firstname\"] }} {{ item[\"userData\"][\"lastname\"] }}\n        </span>\n        <div class=\"text-muted\">\n          <small>\n            {{ format(item[\"date\"]) }}\n          </small>\n        </div>\n      </div>\n      <div class=\"d-flex align-items-center justify-content-between ml-auto\">\n        <div class=\"dropdown\" dropdown>\n          <i\n            aria-expanded=\"false \"\n            aria-haspopup=\"true \"\n            data-toggle=\"dropdown \"\n            dropdownToggle\n            id=\"dropdownMenuButton \"\n            class=\"fas fa-ellipsis-v\"></i>\n          <div\n            aria-labelledby=\"dropdownMenuButton \"\n            class=\"dropdown-menu\"\n            *dropdownMenu\n          \n            >\n             \n            <a class=\"dropdown-item\"   *ngIf=\"idUser !== item['Id_user']  \" (click)=\"openModal(item['_id'])\">Signaler</a>\n            <a class=\"dropdown-item\"   *ngIf=\"idUser === item['Id_user']  \" (click)=\"deletePost(item['_id'])\">Delete</a>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <carousel\n      class=\"card-image\"\n      *ngIf=\"item.img\"\n      [showIndicators]=\"false\"\n      pause>\n      <slide *ngFor=\"let img of item['img']\" class=\"text-center\">\n        <img [src]=\"getImage(img['idimg'], item['_id'])\" />\n      </slide>\n    </carousel>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">\n        {{ item[\"text\"] }}\n      </h5>\n      <div class=\"card-footer\">\n        <div class=\"stats stats-right\">\n          <div\n            class=\"btn-group btn-group-sm\"\n            role=\"group \"\n            aria-label=\"Basic example \">\n            <button\n              class=\"btn btn-sm\"\n              type=\"button \"\n              aria-controls=\"collapseThree \"\n              (click)=\"likePost(item['_id'])\">\n              <i\n                [class]=\"\n                  reaction(item['reaction']) ? 'fas fa-heart' : 'far fa-heart'\n                \"\n                [style.color]=\"\n                  reaction(item['reaction']) ? 'text-danger' : 'gray'\n                \"></i>\n\n              {{ reactioncount(item['reaction']) }}\n            </button>\n\n            <button\n              class=\"btn btn-sm\"\n              type=\"button \"\n              [id]=\"item['_id']\"\n              [attr.aria-expanded]=\"!isCollapsed[item['_id']]\"\n              (click)=\"isCollapsed[item['_id']] = !isCollapsed[item['_id']]\">\n              <i\n                class=\"tim-icons icon-single-copy-04\"\n                [class.icon-rotate]=\"!isCollapsed[item['_id']]\"></i>\n              {{ reactioncount(item['commentaires']) }}\n            </button>\n          </div>\n\n          <div [collapse]=\"isCollapsed[item['_id']]\" [id]=\"item['_id']\">\n            <div class=\"card\">\n              <div>\n                <div>\n                  <app-add-comment\n                    [idPub]=\"item['_id']\"\n                    [listComm]=\"item['commentaires']\"></app-add-comment>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<ng-template #modalContent let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Why are you reposting this post?</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n  \n    <form (submit)=\"onSubmit($event)\">\n      <div>\n        <label>\n          <input  type=\"radio\" name=\"repostReason\" value=\"Spam\" [(ngModel)]=\"repostReason\"> Spam\n        </label>\n      </div>\n      <div>\n        <label>\n          <input  type=\"radio\" name=\"repostReason\" value=\"Inappropriate content\" [(ngModel)]=\"repostReason\"> Inappropriate content\n        </label>\n      </div>\n      <div>\n        <label>\n          <input  type=\"radio\" name=\"repostReason\" value=\"Duplicate\" [(ngModel)]=\"repostReason\"> Duplicate\n        </label>\n      </div>\n      <div>\n        <label>\n          <input  type=\"radio\" name=\"repostReason\" value=\"Other\" [(ngModel)]=\"repostReason\"> Other\n        </label>\n        </div>\n        <div>\n        <textarea  class=\"form-control mx-2\" name=\"repostComments\" style=\"color: black;\" [(ngModel)]=\"repostComments\" *ngIf=\"repostReason === 'Other'\"></textarea>\n      </div>\n      <div>\n        <button type=\"submit\" class=\"btn btn-secondary\">Submit</button>\n      </div>\n    </form>\n    \n  </div>\n   \n</ng-template>\n");

/***/ }),

/***/ "nRwJ":
/*!**************************************************************!*\
  !*** ./src/app/component/challenges/challenges.component.ts ***!
  \**************************************************************/
/*! exports provided: ChallengesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesComponent", function() { return ChallengesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_challenges_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./challenges.component.html */ "S8dx");
/* harmony import */ var _challenges_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./challenges.component.scss */ "C0TV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var ChallengesComponent = /** @class */ (function () {
    function ChallengesComponent() {
    }
    ChallengesComponent.prototype.ngOnInit = function () {
    };
    ChallengesComponent.ctorParameters = function () { return []; };
    ChallengesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-challenges',
            template: _raw_loader_challenges_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_challenges_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ChallengesComponent);
    return ChallengesComponent;
}());



/***/ }),

/***/ "nbP9":
/*!******************************************************************************!*\
  !*** ./src/app/component/add-project-modal/add-project-modal.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-label {\n  color: rgba(255, 255, 255, 0.6);\n  background: cadetblue;\n  border-radius: 5px;\n  padding: 5px 10px;\n  margin-top: 10px;\n}\n\n.button {\n  width: 100%;\n  margin-top: 3000px;\n  position: unset;\n  margin: auto;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZGQtcHJvamVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDRiIsImZpbGUiOiJhZGQtcHJvamVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYnV0dG9ue1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMzAwMHB4O1xuICBwb3NpdGlvbjogdW5zZXQ7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiBcbn1cblxuIl19 */");

/***/ }),

/***/ "og8K":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard-admin/dashboard-admin.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <img class=\"dots\" src=\"assets/img/dots.png\" />\n\n    <img class=\"path\" src=\"assets/img/path4.png\" />\n    <br /><br /><br /><br /><br />\n\n    <div class=\"container\">\n      <br /><br /><br />\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <tabset class=\"d-flex flex-column nav-link\">\n            <tab heading=\"Users\">\n              <app-all-users></app-all-users>\n            </tab>\n            <tab heading=\"Reported Posts\">\n             <app-repoted-post></app-repoted-post>\n            </tab>\n            <tab heading=\"Challenges\">\n              <app-challenges></app-challenges>\n            </tab>\n          </tabset>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "qIlL":
/*!********************************************************!*\
  !*** ./src/app/component/searsh/searsh.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn.dropdown-toggle[data-toggle=dropdown] {\n  padding: 5px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWFyc2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNBIiwiZmlsZSI6InNlYXJzaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4uZHJvcGRvd24tdG9nZ2xlW2RhdGEtdG9nZ2xlPWRyb3Bkb3duXXtcbnBhZGRpbmc6IDVweDtcbm1hcmdpbjogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.findUserById = function (id) {
        return this.http.get("https://artverse-project-api-nodejs.onrender.com/user/getUserById/" + id);
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this.http.get("https://artverse-project-api-nodejs.onrender.com/user/getUserByUsername/" + username);
    };
    UserService.prototype.getAllUsers = function () {
        return this.http.get("https://artverse-project-api-nodejs.onrender.com/user/UserList");
    };
    UserService.prototype.updatefollow = function (body) {
        return this.http.post("https://artverse-project-api-nodejs.onrender.com/user/ajouterAbonnes", body);
    };
    UserService.prototype.removefollow = function (body) {
        return this.http.post("https://artverse-project-api-nodejs.onrender.com/user/supprimerAbonnes", body);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "qn7w":
/*!******************************************************!*\
  !*** ./src/app/component/searsh/searsh.component.ts ***!
  \******************************************************/
/*! exports provided: SearshComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearshComponent", function() { return SearshComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_searsh_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./searsh.component.html */ "/uvt");
/* harmony import */ var _searsh_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searsh.component.scss */ "qIlL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var SearshComponent = /** @class */ (function () {
    function SearshComponent() {
    }
    SearshComponent.prototype.ngOnInit = function () {
    };
    SearshComponent.ctorParameters = function () { return []; };
    SearshComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-searsh',
            template: _raw_loader_searsh_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_searsh_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SearshComponent);
    return SearshComponent;
}());



/***/ }),

/***/ "sAQ7":
/*!****************************************************************************!*\
  !*** ./src/app/pages/reset-password-page/reset-password-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: ResetPasswordPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageComponent", function() { return ResetPasswordPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reset_password_page_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reset-password-page.component.html */ "SKMC");
/* harmony import */ var _reset_password_page_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password-page.component.scss */ "8ou0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentification.service */ "izgN");






var ResetPasswordPageComponent = /** @class */ (function () {
    function ResetPasswordPageComponent(route, authService, routee) {
        this.route = route;
        this.authService = authService;
        this.routee = routee;
    }
    ResetPasswordPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.token = params.get("token");
        });
        // console.log("this.token", this.token);
    };
    ResetPasswordPageComponent.prototype.resetPasswd = function () {
        var _this = this;
        this.authService.resetPassword(this.token, this.newPasswd).subscribe({
            next: function (res) {
                console.log("res result", res);
                alert("Password reset successful!");
                _this.routee.navigate(["/home"]);
            },
            error: function (err) {
                console.log("the err", err);
            },
        });
    };
    ResetPasswordPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_5__["AuthentificationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ResetPasswordPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-reset-password-page",
            template: _raw_loader_reset_password_page_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_reset_password_page_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_5__["AuthentificationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ResetPasswordPageComponent);
    return ResetPasswordPageComponent;
}());



/***/ }),

/***/ "sqmE":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./index.component.html */ "V/Tm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nouislider */ "6foH");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_3__);




var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
        this.isCollapsed = true;
        this.date = new Date();
        this.pagination = 3;
        this.pagination1 = 1;
    }
    IndexComponent.prototype.scrollToDownload = function (element) {
        element.scrollIntoView({ behavior: "smooth" });
    };
    IndexComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("index-page");
        var slider = document.getElementById("sliderRegular");
        nouislider__WEBPACK_IMPORTED_MODULE_3___default.a.create(slider, {
            start: 40,
            connect: false,
            range: {
                min: 0,
                max: 100
            }
        });
        var slider2 = document.getElementById("sliderDouble");
        nouislider__WEBPACK_IMPORTED_MODULE_3___default.a.create(slider2, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
    };
    IndexComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("index-page");
    };
    IndexComponent.ctorParameters = function () { return []; };
    IndexComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-index",
            template: _raw_loader_index_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "tVTz":
/*!************************************************************************!*\
  !*** ./src/app/pages/challange-detiles/challange-detiles.component.ts ***!
  \************************************************************************/
/*! exports provided: ChallangeDetilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallangeDetilesComponent", function() { return ChallangeDetilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_challange_detiles_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./challange-detiles.component.html */ "Wi89");
/* harmony import */ var _challange_detiles_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./challange-detiles.component.scss */ "+Bks");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_publication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/publication.service */ "wzbf");
/* harmony import */ var src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/logged-in-user.service */ "GHSY");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/authentification.service */ "izgN");
/* harmony import */ var src_app_services_singles_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/singles.service */ "w+HY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "iInd");










var ChallangeDetilesComponent = /** @class */ (function () {
    function ChallangeDetilesComponent(publicationService, loggedUserServ, ref, singlesService, sanitizer, authserv, route) {
        this.publicationService = publicationService;
        this.loggedUserServ = loggedUserServ;
        this.ref = ref;
        this.singlesService = singlesService;
        this.sanitizer = sanitizer;
        this.authserv = authserv;
        this.route = route;
        this.challangeCopy = [];
        this.idUser = this.loggedUserServ.getUserID();
    }
    ChallangeDetilesComponent.prototype.ngOnInit = function () {
        this.ref.detectChanges();
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        this.getchallenge();
    };
    ChallangeDetilesComponent.prototype.winner = function (id) {
        alert(id);
        this.singlesService.winner({ id: this.id, id_user: id }).subscribe(function (next) { alert("ok"); });
    };
    /*
    data { id : gh , patic : [{}]}
    
    */
    ChallangeDetilesComponent.prototype.getchallenge = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.singlesService.get_chanllengeByID({ id: this.id }).subscribe(function (data) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var _a, _loop_1, this_1, _i, _b, item;
                    var _this = this;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _a = this;
                                return [4 /*yield*/, data];
                            case 1:
                                _a.challange = _c.sent();
                                _loop_1 = function (item) {
                                    this_1.authserv.findUserById(item['id_user']).subscribe(function (userData) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                            this.challangeCopy.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, item), { userData: userData }));
                                            return [2 /*return*/];
                                        });
                                    }); });
                                    console.log(this_1.challangeCopy);
                                };
                                this_1 = this;
                                for (_i = 0, _b = this.challange['participants']; _i < _b.length; _i++) {
                                    item = _b[_i];
                                    _loop_1(item);
                                }
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ChallangeDetilesComponent.ctorParameters = function () { return [
        { type: _services_publication_service__WEBPACK_IMPORTED_MODULE_4__["PublicationService"] },
        { type: src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_5__["LoggedInUserService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: src_app_services_singles_service__WEBPACK_IMPORTED_MODULE_8__["SinglesService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
        { type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_7__["AuthentificationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] }
    ]; };
    ChallangeDetilesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-challange-detiles',
            template: _raw_loader_challange_detiles_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_challange_detiles_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_publication_service__WEBPACK_IMPORTED_MODULE_4__["PublicationService"],
            src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_5__["LoggedInUserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
            src_app_services_singles_service__WEBPACK_IMPORTED_MODULE_8__["SinglesService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"],
            src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_7__["AuthentificationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]])
    ], ChallangeDetilesComponent);
    return ChallangeDetilesComponent;
}());



/***/ }),

/***/ "uiVG":
/*!************************************************************************!*\
  !*** ./src/app/component/edit-challenge/edit-challenge.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWNoYWxsZW5nZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _pages_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/registerpage/registerpage.component */ "vqka");
/* harmony import */ var _pages_HomePage_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/HomePage/home/home.component */ "Kw4l");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/profile/profile.component */ "Y5Lh");
/* harmony import */ var _pages_challange_detiles_challange_detiles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/challange-detiles/challange-detiles.component */ "tVTz");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "6V8c");
/* harmony import */ var _pages_reset_password_page_reset_password_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/reset-password-page/reset-password-page.component */ "sAQ7");
/* harmony import */ var _pages_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/error-not-found/error-not-found.component */ "9eMp");
/* harmony import */ var _pages_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/dashboard-admin/dashboard-admin.component */ "Ee1h");
/* harmony import */ var _pages_examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/examples/landingpage/landingpage.component */ "IfWR");
/* harmony import */ var _component_for_you_list_for_you_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/for-you-list/for-you-list.component */ "/cup");
/* harmony import */ var _component_competition_competition_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/competition/competition.component */ "io2J");
















var routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: _pages_HomePage_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: "landing", component: _pages_examples_landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_13__["LandingpageComponent"] },
    { path: "dashboard-admin", component: _pages_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_12__["DashboardAdminComponent"] },
    { path: "explore", component: _component_for_you_list_for_you_list_component__WEBPACK_IMPORTED_MODULE_14__["ForYouListComponent"] },
    { path: "challenges", component: _component_competition_competition_component__WEBPACK_IMPORTED_MODULE_15__["CompetitionComponent"] },
    { path: "profile/:username", component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] },
    { path: "Challange/:id", component: _pages_challange_detiles_challange_detiles_component__WEBPACK_IMPORTED_MODULE_8__["ChallangeDetilesComponent"] },
    { path: "login", component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"] },
    { path: "register", component: _pages_registerpage_registerpage_component__WEBPACK_IMPORTED_MODULE_5__["RegisterpageComponent"] },
    { path: "reset/:token", component: _pages_reset_password_page_reset_password_page_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordPageComponent"] },
    { path: "not-found", component: _pages_error_not_found_error_not_found_component__WEBPACK_IMPORTED_MODULE_11__["ErrorNotFoundComponent"] },
    { path: "**", redirectTo: "not-found" },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    useHash: true,
                }),
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "vqka":
/*!**************************************************************!*\
  !*** ./src/app/pages/registerpage/registerpage.component.ts ***!
  \**************************************************************/
/*! exports provided: RegisterpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterpageComponent", function() { return RegisterpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registerpage_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registerpage.component.html */ "69r7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authentification.service */ "izgN");






var RegisterpageComponent = /** @class */ (function () {
    function RegisterpageComponent(formBuilder, route, authServ) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.authServ = authServ;
        this.isSubmitted = false;
        this.initializeForm();
    }
    RegisterpageComponent.prototype.initializeForm = function () {
        this.inscriptionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.email, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
            ]),
            bio: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.bio, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.firstname, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.lastname, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
    };
    RegisterpageComponent.prototype.inscri = function () {
        var _this = this;
        var user = {
            password: this.password,
            email: this.email,
            bio: this.bio,
            firstname: this.firstname,
            lastname: this.lastname,
        };
        this.isSubmitted = true;
        if (this.inscriptionForm.invalid) {
            return false;
        }
        else {
            this.authServ.inscriptionPost(user).subscribe(function (res) {
                _this.route.navigate(["/home"]);
                localStorage.setItem("token", res);
            }, function (err) {
                console.log("the err", err);
            });
        }
    };
    RegisterpageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("register-page");
        // this.onMouseMove(event);
    };
    RegisterpageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("register-page");
    };
    RegisterpageComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_5__["AuthentificationService"] }
    ]; };
    RegisterpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-registerpage",
            template: _raw_loader_registerpage_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            providers: [src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_5__["AuthentificationService"]],
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_authentification_service__WEBPACK_IMPORTED_MODULE_5__["AuthentificationService"]])
    ], RegisterpageComponent);
    return RegisterpageComponent;
}());



/***/ }),

/***/ "w+HY":
/*!*********************************************!*\
  !*** ./src/app/services/singles.service.ts ***!
  \*********************************************/
/*! exports provided: SinglesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglesService", function() { return SinglesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



var SinglesService = /** @class */ (function () {
    function SinglesService(http) {
        this.http = http;
        this.API_AddSinle = "https://artverse-project-api-nodejs.onrender.com/Single/addSingle";
        this.API_GEtSinle = "https://artverse-project-api-nodejs.onrender.com/Single/GetSingle";
        this.API_updateSinle = "https://artverse-project-api-nodejs.onrender.com/Single/UpdateSingle";
        this.API_AddSinlepub = "https://artverse-project-api-nodejs.onrender.com/Single/SinglePublication";
        this.API_creat_challenge = "https://artverse-project-api-nodejs.onrender.com/Challenge/CreatChallenge";
        this.API_get_challenge = "https://artverse-project-api-nodejs.onrender.com/Challenge/getChallenge";
        this.API_send_challenge = "https://artverse-project-api-nodejs.onrender.com/Challenge/sendChallenge";
        this.API_get_challengeByID = "https://artverse-project-api-nodejs.onrender.com/Challenge/getChallengeById";
        this.apiwinner = "https://artverse-project-api-nodejs.onrender.com/Challenge/winner";
    }
    SinglesService.prototype.send_single = function (data) {
        return this.http.post(this.API_AddSinle, data);
    };
    SinglesService.prototype.get_Single = function () {
        return this.http.get(this.API_GEtSinle);
    };
    SinglesService.prototype.update_Single = function (data) {
        return this.http.put(this.API_updateSinle, data);
    };
    SinglesService.prototype.send_single_pub = function (data) {
        return this.http.post(this.API_AddSinlepub, data);
    };
    SinglesService.prototype.creat_challenges = function (data) {
        return this.http.post(this.API_creat_challenge, data);
    };
    SinglesService.prototype.get_chanllenge = function () {
        return this.http.get(this.API_get_challenge);
    };
    SinglesService.prototype.get_chanllengeByID = function (data) {
        return this.http.post(this.API_get_challengeByID, data);
    };
    SinglesService.prototype.winner = function (data) {
        return this.http.post(this.apiwinner, data);
    };
    SinglesService.prototype.send_chanllenge = function (data) {
        console.log("data data", data);
        return this.http.post(this.API_send_challenge, data);
    };
    SinglesService.prototype.deleteChallnge = function (id) {
        return this.http.post("https://artverse-project-api-nodejs.onrender.com/Challenge/deleteChallenge", id);
    };
    SinglesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SinglesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SinglesService);
    return SinglesService;
}());



/***/ }),

/***/ "wjHE":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-post/add-post.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"input-group\">\n          <div class=\"avatar mx-2\">\n            <img\n              alt=\"64x64\"\n              class=\"media-object img-raised\"\n              src=\"assets/img/james.jpg\" />\n          </div>\n\n          <input\n            placeholder=\"Add new post...\"\n            (click)=\"myModal.show()\"\n            class=\"form-control mx-2\" />\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <h3>Share Your Artworks With Us</h3> -->\n  <!-- <button\n    class=\"btn btn-danger\"\n    data-target=\"#myModal\"\n    (click)=\"myModal.show()\"\n  >\n    Share Artworks\n  </button> -->\n\n  <div\n    aria-hidden=\"true\"\n    aria-labelledby=\"myModalLabel\"\n    bsModal\n    class=\"modal fade modal-black\"\n    #myModal=\"bs-modal\"\n    id=\"myModal\"\n    role=\"dialog\"\n    tabindex=\"-1\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header justify-content-center\">\n          <button\n            aria-hidden=\"true\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            type=\"button\"\n            (click)=\"myModal.hide()\">\n            <i class=\"tim-icons icon-simple-remove\"> </i>\n          </button>\n          <h4 class=\"title title-up\">Créer une publication</h4>\n        </div>\n        <hr style=\"border-color: rgb(44, 44, 44); width: 100%; opacity: 0.2\" />\n        <div style=\"display: flex; align-items: center\">\n          <img\n            alt=\"Circle image\"\n            class=\"img-fluid rounded-circle\"\n            src=\"assets/img/james.jpg\"\n            style=\"width: 40px; height: 40px; margin: 5px\" />\n          <p *ngIf=\"loggedInUser\">\n            {{ loggedInUser[\"firstname\"] }} {{ loggedInUser[\"lastname\"] }}\n          </p>\n        </div>\n\n        <div class=\"form-group\">\n          <!--    <textarea\n          class=\"form-control overflow-auto\"\n          style=\"\n            resize: none;\n            border: none;\n            box-shadow: none;\n            max-height: none;\n            height: auto;\n          \"\n          rows=\"3\"\n          cols=\"50\"\n          placeholder=\"ecrire qlq chose\"\n        ></textarea> -->\n\n          <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"invalide\">\n            Please enter some text to post your publication!\n          </div>\n          <div style=\"position: relative\" class=\"post-text\">\n            <div\n              contenteditable=\"true\"\n              class=\"form-control inputtag\"\n              name=\"postText\"\n              placeholder=\"Écrivez quelque chose ici...\"\n              (input)=\"onInputChange($event.target.textContent)\">\n              <ul class=\"list-group\" *ngIf=\"filteredHashtags.length\">\n                <li\n                  class=\"list-group-item d-flex justify-content-between align-items-center\"\n                  *ngFor=\"let hashtag of filteredHashtags\"\n                  (click)=\"insertHashtag(hashtag.tag_name)\">\n                  #{{ hashtag.tag_name }}\n                  <span class=\"badge badge-primary badge-pill\">\n                    {{ hashtag.followers?.toString() || \"0\" }}</span\n                  >\n                </li>\n              </ul>\n            </div>\n          </div>\n\n          <div class=\"custom-file\">\n            <label for=\"customFile\" class=\"form-label\"\n              >Choose one or more images</label\n            >\n            <input\n              type=\"file\"\n              multiple\n              class=\"custom-file-input\"\n              id=\"customFile\"\n              (change)=\"onFileSelected($event)\" />\n          </div>\n          <!-- <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input\n                class=\"form-check-input\"\n                type=\"checkbox\"\n                value=\"\"\n                id=\"exampleCheck1\"\n                [(ngModel)]=\"isCopyrightChecked\" />\n              ajouter les droits d'auteur ?\n              <span class=\"form-check-sign\">\n                <span class=\"check\"></span>\n              </span>\n            </label>\n          </div> -->\n\n          <carousel *ngIf=\"images.length != 0\" [showIndicators]=\"false\" pause>\n            <slide\n              *ngFor=\"let image of images; let i = index\"\n              class=\"text-center\">\n              <img\n                *ngIf=\"image\"\n                class=\"d-block w-100\"\n                [src]=\"image.url\"\n                [alt]=\"image.name\" />\n              <button\n                class=\"btn btn-primary btn-fab btn-icon btn-round\"\n                (click)=\"clearSelectedImage(index)\">\n                <i class=\"tim-icons icon-trash-simple\"></i>\n              </button>\n            </slide>\n          </carousel>\n\n          <button\n            (click)=\"onSubmit($event)\"\n            class=\"btn btn-success\"\n            style=\"width: 100%; margin-top: 30px\">\n            Publier\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div\n    aria-hidden=\"true\"\n    aria-labelledby=\"myModalLabel\"\n    bsModal\n    class=\"modal fade modal-black\"\n    #myModal2=\"bs-modal\"\n    id=\"myModal2\"\n    role=\"dialog\"\n    tabindex=\"-1\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header justify-content-center\">\n          <button\n            aria-hidden=\"true\"\n            class=\"close\"\n            data-dismiss=\"modal\"\n            type=\"button\"\n            (click)=\"myModal2.hide()\">\n            <i class=\"tim-icons icon-simple-remove\"> </i>\n          </button>\n        </div>\n        <hr style=\"border-color: rgb(44, 44, 44); width: 100%; opacity: 0.2\" />\n        <div style=\"display: flex; align-items: center\">\n          <div class=\"row\">\n            <p>\n              Merci de partager votre travail avec nous, il faudra quelques\n              instants pour le publier.\n            </p>\n          </div>\n          <div class=\"row\">\n            <button\n              class=\"btn btn-success\"\n              style=\"width: 100%; margin-top: 30px\"\n              (click)=\"myModal2.hide()\">\n              ok\n            </button>\n          </div>\n        </div>\n      </div>\n      <!-- your modal content here -->\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "wzbf":
/*!*************************************************!*\
  !*** ./src/app/services/publication.service.ts ***!
  \*************************************************/
/*! exports provided: PublicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationService", function() { return PublicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");



var PublicationService = /** @class */ (function () {
    function PublicationService(http) {
        this.http = http;
        this.apiUrlGetHashtag = "https://artverse-project-api-nodejs.onrender.com/Posts/GetTag";
        this.apiUrlCreatPost = "https://artverse-project-api-nodejs.onrender.com/Posts/PostPublication";
        this.apiUrlGetPost = "https://artverse-project-api-nodejs.onrender.com/Posts/getPublications";
        this.apiUrlGetOneImg = "https://artverse-project-api-nodejs.onrender.com/Posts/getImage";
        this.apiUrReactionPost = "https://artverse-project-api-nodejs.onrender.com/Posts/reaction";
        this.apiUrcomm = "https://artverse-project-api-nodejs.onrender.com/Posts/addcomment";
        this.apiUrcommreaction = "https://artverse-project-api-nodejs.onrender.com/Posts/commreaction";
        this.apiaddcommentReply = "https://artverse-project-api-nodejs.onrender.com/Posts/addcommentReply";
    }
    PublicationService.prototype.getMyHashtag = function () {
        return this.http.get(this.apiUrlGetHashtag);
    };
    PublicationService.prototype.createPost = function (postData) {
        return this.http.post(this.apiUrlCreatPost, postData);
    };
    PublicationService.prototype.getPost = function () {
        return this.http.get(this.apiUrlGetPost);
    };
    PublicationService.prototype.getImage = function (id) {
        return this.http.get(this.apiUrlGetOneImg + "?id=" + id);
    };
    PublicationService.prototype.Reaction = function (data) {
        return this.http.put(this.apiUrReactionPost, data);
    };
    PublicationService.prototype.addcomment = function (data) {
        return this.http.put(this.apiUrcomm, data);
    };
    PublicationService.prototype.addcommentreaction = function (data) {
        return this.http.put(this.apiUrcommreaction, data);
    };
    PublicationService.prototype.addcommentReply = function (data) {
        return this.http.put(this.apiaddcommentReply, data);
    };
    PublicationService.prototype.getPostsByUserId = function (id) {
        return this.http.get("https://artverse-project-api-nodejs.onrender.com/Posts/getPublications/" + id);
    };
    PublicationService.prototype.getPostByID = function (id) {
        return this.http.get("https://artverse-project-api-nodejs.onrender.com/Posts/getPublicationsByID/" + id);
    };
    PublicationService.prototype.deletePubliction = function (id) {
        return this.http.post("https://artverse-project-api-nodejs.onrender.com/Posts/deletePost", id);
    };
    PublicationService.prototype.deleteMyPubliction = function (id) {
        return this.http.post("https://artverse-project-api-nodejs.onrender.com/Posts/deleteMyPost", id);
    };
    PublicationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PublicationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PublicationService);
    return PublicationService;
}());



/***/ }),

/***/ "x/O6":
/*!**********************************************************************!*\
  !*** ./src/app/component/feed-identity/feed-identity.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-profile {\n  text-align: center;\n}\n\n.card {\n  border: 0;\n  box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 7px;\n}\n\n.card-profile.profile-bg .card-header {\n  background-position: center;\n  background-size: cover;\n}\n\n.card .card-header {\n  border: 0;\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.card-profile.profile-bg .card-header .card-avatar .img {\n  border: 1px solid #fff;\n}\n\n.card-profile .card-avatar img,\n.card-avatar img {\n  border-radius: 50% !important;\n}\n\n.img-raised {\n  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.3);\n}\n\nimg {\n  max-width: 40%;\n  border-radius: 0.2857rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmZWVkLWlkZW50aXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLDRDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7QUFDRiIsImZpbGUiOiJmZWVkLWlkZW50aXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtcHJvZmlsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQge1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLmNhcmQtcHJvZmlsZS5wcm9maWxlLWJnIC5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNhcmQgLmNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xufVxuXG4uY2FyZC1wcm9maWxlLnByb2ZpbGUtYmcgLmNhcmQtaGVhZGVyIC5jYXJkLWF2YXRhciAuaW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLmNhcmQtcHJvZmlsZSAuY2FyZC1hdmF0YXIgaW1nLFxuLmNhcmQtYXZhdGFyIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4uaW1nLXJhaXNlZCB7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDQwJTtcbiAgYm9yZGVyLXJhZGl1czogMC4yODU3cmVtO1xufVxuIl19 */");

/***/ }),

/***/ "x7Ro":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-comment/add-comment.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"m-3\">\n  <h4 class=\"text-center mt-2\">Post your comment <br /></h4>\n  <div class=\"media media-post\">\n    <a class=\"pull-left author\" href=\"javascript:void(0)\">\n      <div class=\"avatar\">\n        <img\n          alt=\"64x64\"\n          class=\"media-object img-raised\"\n          src=\"assets/img/james.jpg\" />\n      </div>\n    </a>\n    <div class=\"media-body mb-2\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <textarea\n            class=\"form-control mx-1\"\n            placeholder=\"Write some nice stuff or nothing...\"\n            rows=\"2\"\n            #commentInput></textarea>\n        </div>\n        <div class=\"media-footer col-3\">\n          <button\n            class=\"btn btn-primary btn-sm btn-wd pull-right\"\n            href=\"javascript:void(0)\"\n            (click)=\"postComment(commentInput.value)\">\n            Post Comment\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"media-area ml-3\" *ngIf=\"listCommentaire\">\n    <div class=\"media\" *ngFor=\"let comm of listCommentaire; let i = index\">\n      <a class=\"pull-left\" href=\"javascript:void(0)\">\n        <div class=\"avatar\">\n          <img\n            alt=\"...\"\n            class=\"media-object img-raised\"\n            src=\"assets/img/julie.jpeg\" />\n        </div>\n      </a>\n      <div class=\"media-body\" *ngIf=\"comm\">\n        <h5 class=\"media-heading mx-2\">\n          {{ comm[\"userData\"][\"firstname\"] }} {{ comm[\"userData\"][\"lastname\"] }}\n          <small class=\"text-muted\"> · 7 minutes ago </small>\n        </h5>\n        <p class=\"mx-2\">{{ comm.comment }}</p>\n\n        <div class=\"media-footer\">\n          <a\n            class=\"btn btn-primary btn-link pull-right\"\n            href=\"javascript:void(0)\"\n            tooltip=\"Reply to Comment\"\n            aria-describedby=\"tooltip-19\"\n            (click)=\"postCommentReply(ReplyInput, i)\"\n            ><i class=\"tim-icons icon-send\"></i> Reply\n          </a>\n          <a\n            class=\"btn btn-default btn-link pull-right\"\n            href=\"javascript:void(0)\"\n            (click)=\"reactionComm(i)\"\n            ><i class=\"tim-icons icon-heart-2\"></i> {{ comm.reaction }}\n          </a>\n          <div class=\"row\">\n            <div class=\"col\">\n              <textarea\n                class=\"form-control\"\n                placeholder=\"Write some nice stuff or nothing...\"\n                rows=\"1\"\n                #ReplyInput></textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"media\">\n          <a class=\"pull-left\" href=\"javascript:void(0)\">\n            <div class=\"avatar\">\n              <img\n                alt=\"64x64\"\n                class=\"media-object img-raised\"\n                src=\"assets/img/julie.jpeg\" />\n            </div>\n          </a>\n          <div class=\"media-body\" *ngFor=\"let com of comm\">\n            <h5 class=\"media-heading\">\n              Tina Andrew <small class=\"text-muted\"> · 2 Days Ago </small>\n            </h5>\n            <p *ngIf=\"com\">{{ com.text }}</p>\n            <div class=\"media-footer\">\n              <a\n                class=\"btn btn-danger btn-link pull-right\"\n                href=\"javascript:void(0)\"\n                ><i class=\"tim-icons icon-heart-2\"></i> 243\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "xb3B":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "+2nE");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.scss */ "1hZR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-footer",
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "xujK":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/all-users/all-users.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row justify-content-center\">\n  <table class=\"table table-hover col-lg-6 mr-4\">\n    <thead>\n      <tr>\n        <th></th>\n        <th>username</th>\n        <th>email</th>\n        <th>Action</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let user of users\" (mouseenter)=\"onRowHover(user)\">\n        <td>\n          <img\n            alt=\"... \"\n            class=\"avatar img-raised ml-4 mr-2 mt-2\"\n            src=\"assets/img/james.jpg \"\n          />\n        </td>\n        <td>{{ user[\"username\"] }}</td>\n        <td>{{ user[\"email\"] }}</td>\n\n        <td class=\"td-actions text-right dropdown\" dropdown>\n          <i\n            aria-expanded=\"false \"\n            aria-haspopup=\"true \"\n            data-toggle=\"dropdown \"\n            dropdownToggle\n            id=\"dropdownButtonActions \"\n            class=\"fas fa-ellipsis-v\"\n          ></i>\n          <div\n            aria-labelledby=\"dropdownButtonActions \"\n            class=\"dropdown-menu\"\n            *dropdownMenu\n          >\n            <button type=\"button\" class=\"btn btn-info btn-sm ml-3\">\n              Contact\n            </button>\n            <button type=\"button\" class=\"btn btn-success btn-sm ml-3 mt-2\">\n              Update\n            </button>\n            <button type=\"button\" class=\"btn btn-danger btn-sm mt-2 ml-3\">\n              Delete\n            </button>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"col-lg-5 ml-5\">\n    <h2 class=\"text-center\">Users' Activities</h2>\n    <h4 class=\"text-center\">{{ hoveredUser[\"firstname\"] }}</h4>\n    <div class=\"chart-area\"><canvas id=\"chartBig\"> </canvas></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "y5h7":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "yZ98":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/HomePage/home/home.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"page-header header-filter\">\n    <video autoplay muted loop id=\"myVideo\">\n      <source src=\"assets/video/home4.mp4\" type=\"video/mp4\" />\n      Your browser does not support HTML5 video.\n    </video>\n    <div class=\"filter\">\n      <div class=\"container-fluid\">\n        <div class=\"content-center\">\n          <div class=\"brand\">\n            <h4 class=\"display-2 text-white\">\n              Experience the world of <br />\n              digital art like never before\n            </h4>\n            <h4 class=\"text-white\">\n              A world of endless possibilities for digital art awaits you on our\n              platform.\n            </h4>\n          </div>\n\n          <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n            </div>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"Recherche...\"\n            />\n          </div>\n          <div class=\"row\">\n            <div class=\"col align-self-center\">\n              <p class=\"middle\">Trending hashtags :</p>\n              <button\n                *ngFor=\"let hashtag of hashtags\"\n                class=\"btn btn-white btn-sm mr-1 px-4 btn-round\"\n                type=\"button\"\n              >\n                #{{ hashtag }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"connectedUser()\" class=\"main\">\n    <div class=\"section section-basic\" id=\"basic-elements\">\n      <img class=\"path\" src=\"assets/img/path1.png\" />\n\n      <div class=\"\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <tabset class=\"nav-tabs-danger\">\n              <tab>\n                <ng-template tabHeading>\n                  <i class=\"tim-icons icon-compass-05\"> </i> Feed\n                </ng-template>\n                <div class=\"container-fluide\">\n                  <div class=\"row justify-content-md-center\">\n                    <div class=\"col col-md-12 col-lg-3\">\n                      <app-feed-identity></app-feed-identity>\n                    </div>\n                    <div class=\"col-lg-5 col-md-12 mx-md-4 mx-sm-1\">\n                      <div>\n                        <app-add-post\n                          (newItemEvent)=\"addItem($event)\"\n                        ></app-add-post>\n                        <app-for-you-list\n                          [Listimage]=\"Listimage\"\n                          [ListCopy]=\"ListCopy\"\n                          [isCollapsed]=\"isCollapsed\"\n                        ></app-for-you-list>\n                      </div>\n                    </div>\n                    <div class=\"col col-lg-2\">\n                      <app-suggestion></app-suggestion>\n                    </div>\n                  </div>\n                </div>\n              </tab>\n              <tab>\n                <ng-template tabHeading>\n                  <i class=\"tim-icons icon-compass-05\"> </i> Projects\n                </ng-template>\n                <app-project [source]=\"source\"></app-project>\n              </tab>\n\n              <tab>\n                <ng-template tabHeading>\n                  <i class=\"tim-icons icon-shape-star\"></i>Compétition\n                </ng-template>\n                <app-competition></app-competition>\n              </tab>\n            </tabset>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "yvul":
/*!********************************************************************!*\
  !*** ./src/app/component/feed-identity/feed-identity.component.ts ***!
  \********************************************************************/
/*! exports provided: FeedIdentityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedIdentityComponent", function() { return FeedIdentityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feed_identity_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feed-identity.component.html */ "Ev0r");
/* harmony import */ var _feed_identity_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feed-identity.component.scss */ "x/O6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/logged-in-user.service */ "GHSY");





var FeedIdentityComponent = /** @class */ (function () {
    function FeedIdentityComponent(loggedUserServ) {
        this.loggedUserServ = loggedUserServ;
        this.idUser = this.loggedUserServ.getUserID();
    }
    FeedIdentityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedUserServ.findUserById(this.idUser).subscribe(function (res) {
            _this.loggedInUser = res;
            console.log(_this.loggedInUser);
        });
    };
    FeedIdentityComponent.ctorParameters = function () { return [
        { type: src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_4__["LoggedInUserService"] }
    ]; };
    FeedIdentityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-feed-identity",
            template: _raw_loader_feed_identity_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_feed_identity_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_logged_in_user_service__WEBPACK_IMPORTED_MODULE_4__["LoggedInUserService"]])
    ], FeedIdentityComponent);
    return FeedIdentityComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*
=========================================================
* BLK Design System Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-angular
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map