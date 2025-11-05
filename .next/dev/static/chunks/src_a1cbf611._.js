(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Nav/nav.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "burger__line": "nav-module__VFJyha__burger__line",
  "logo__image": "nav-module__VFJyha__logo__image",
  "main__nav": "nav-module__VFJyha__main__nav",
  "menu__item": "nav-module__VFJyha__menu__item",
  "menu__link": "nav-module__VFJyha__menu__link",
  "menu__list": "nav-module__VFJyha__menu__list",
  "nav__burger": "nav-module__VFJyha__nav__burger",
  "nav__logo": "nav-module__VFJyha__nav__logo",
  "nav__menu": "nav-module__VFJyha__nav__menu",
  "nav__menu_open": "nav-module__VFJyha__nav__menu_open",
});
}),
"[project]/src/components/Nav/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2f$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Nav/nav.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Nav() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2f$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main__nav,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2f$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav__logo,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    width: 250,
                    height: 170,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2f$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo__image,
                    src: "/img/logo.png",
                    alt: 'logo'
                }, void 0, false, {
                    fileName: "[project]/src/components/Nav/Nav.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Nav/Nav.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2f$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav__burger,
                onClick: toggleMenu,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2f$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].burger__line
                    }, void 0, false, {
                        fileName: "[project]/src/components/Nav/Nav.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2f$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].burger__line
                    }, void 0, false, {
                        fileName: "[project]/src/components/Nav/Nav.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2f$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].burger__line
                    }, void 0, false, {
                        fileName: "[project]/src/components/Nav/Nav.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Nav/Nav.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2f$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav__menu} ${isMenuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2f$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav__menu_open : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2f$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menu__list,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2f$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menu__item,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2f$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menu__link,
                                children: "Главное"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Nav/Nav.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Nav/Nav.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2f$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menu__item,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2f$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menu__link,
                                children: "Мой плейлист"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Nav/Nav.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Nav/Nav.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2f$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menu__item,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/signin",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Nav$2f$nav$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menu__link,
                                children: "Войти"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Nav/Nav.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Nav/Nav.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Nav/Nav.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Nav/Nav.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Nav/Nav.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Nav, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Search/search.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "centerblock__search": "search-module__5j-gYa__centerblock__search",
  "search__svg": "search-module__5j-gYa__search__svg",
  "search__text": "search-module__5j-gYa__search__text",
});
}),
"[project]/src/components/Search/Search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Search$2f$search$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Search/search.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Search() {
    _s();
    const [searchInput, setSearchInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const onSearchInput = (e)=>{
        setSearchInput(e.target.value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Search$2f$search$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centerblock__search,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Search$2f$search$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].search__svg,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("use", {
                    xlinkHref: "/img/icon/sprite.svg#icon-search"
                }, void 0, false, {
                    fileName: "[project]/src/components/Search/Search.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Search/Search.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Search$2f$search$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].search__text,
                type: "search",
                placeholder: "Поиск",
                name: "search",
                value: searchInput,
                onChange: onSearchInput
            }, void 0, false, {
                fileName: "[project]/src/components/Search/Search.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Search/Search.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(Search, "6Eq05WFCbfVtzQf4MCSNdgDQaWk=");
_c = Search;
var _c;
__turbopack_context__.k.register(_c, "Search");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Filter/filter.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "centerblock__filter": "filter-module__hDNwKW__centerblock__filter",
  "filter__title": "filter-module__hDNwKW__filter__title",
  "filter__wrapper": "filter-module__hDNwKW__filter__wrapper",
});
}),
"[project]/src/utils/helper.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatTime",
    ()=>formatTime,
    "getUniqueValuesByKey",
    ()=>getUniqueValuesByKey
]);
function getUniqueValuesByKey(arr, key) {
    // Используем Set для хранения уникальных значений
    const uniqueValues = new Set();
    // Проходим по каждому объекту в массиве
    arr.forEach((item)=>{
        const value = item[key];
        // Если значение - массив строк
        if (Array.isArray(value)) {
            value.forEach((v)=>{
                if (typeof v === 'string') {
                    uniqueValues.add(v);
                }
            });
        } else if (typeof value === 'string') {
            uniqueValues.add(value);
        }
    });
    // Преобразуем Set в массив и возвращаем
    return Array.from(uniqueValues);
}
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const inputSeconds = Math.floor(time % 60);
    const outputSeconds = inputSeconds < 10 ? `0${inputSeconds}` : inputSeconds;
    return `${minutes}:${outputSeconds}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FilterItem/filterItem.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "filterItem-module__psuDAW__active",
  "filter__badge": "filterItem-module__psuDAW__filter__badge",
  "filter__button": "filterItem-module__psuDAW__filter__button",
  "filter__buttonContainer": "filterItem-module__psuDAW__filter__buttonContainer",
  "filter__dropdown": "filterItem-module__psuDAW__filter__dropdown",
  "filter__item": "filterItem-module__psuDAW__filter__item",
  "filter__link": "filterItem-module__psuDAW__filter__link",
  "filter__list": "filterItem-module__psuDAW__filter__list",
});
}),
"[project]/src/components/FilterItem/FilterItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FilterItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterItem$2f$filterItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/FilterItem/filterItem.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
;
;
;
function FilterItem({ title, isOpen, items, onToggle, activeItems, filterType, onItemClick }) {
    const handleItemClick = (item)=>{
        onItemClick(filterType, item);
    };
    const activeCount = activeItems.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterItem$2f$filterItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filter__buttonContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterItem$2f$filterItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filter__button, {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterItem$2f$filterItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active]: activeCount > 0
                }),
                onClick: onToggle,
                children: [
                    title,
                    activeCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterItem$2f$filterItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filter__badge,
                        children: activeCount
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterItem/FilterItem.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterItem/FilterItem.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterItem$2f$filterItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filter__dropdown,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterItem$2f$filterItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filter__list,
                    children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterItem$2f$filterItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filter__item,
                            onClick: ()=>handleItemClick(item),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterItem$2f$filterItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filter__link, {
                                    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterItem$2f$filterItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active]: activeItems.includes(item)
                                }),
                                children: item
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterItem/FilterItem.tsx",
                                lineNumber: 51,
                                columnNumber: 17
                            }, this)
                        }, item, false, {
                            fileName: "[project]/src/components/FilterItem/FilterItem.tsx",
                            lineNumber: 46,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/FilterItem/FilterItem.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FilterItem/FilterItem.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FilterItem/FilterItem.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = FilterItem;
var _c;
__turbopack_context__.k.register(_c, "FilterItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Filter/Filter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Filter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Filter$2f$filter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Filter/filter.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/helper.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterItem$2f$FilterItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FilterItem/FilterItem.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Filter({ tracks }) {
    _s();
    const [openFilter, setOpenFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeItems, setActiveItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        author: [],
        year: [],
        genre: []
    });
    const uniqueAuthors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUniqueValuesByKey"])(tracks, 'author');
    const uniqueGenres = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$helper$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUniqueValuesByKey"])(tracks, 'genre');
    // Опции сортировки по году выпуска
    const yearSortOptions = [
        'Сначала новые',
        'Сначала старые',
        'По умолчанию'
    ];
    const handleFilterToggle = (filterType)=>{
        if (openFilter === filterType) {
            setOpenFilter(null);
        } else {
            setOpenFilter(filterType);
        }
    };
    const handleItemClick = (filterType, item)=>{
        setActiveItems((prev)=>{
            const currentItems = prev[filterType];
            const isActive = currentItems.includes(item);
            if (isActive) {
                return {
                    ...prev,
                    [filterType]: currentItems.filter((i)=>i !== item)
                };
            } else {
                return {
                    ...prev,
                    [filterType]: [
                        ...currentItems,
                        item
                    ]
                };
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Filter$2f$filter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].centerblock__filter,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Filter$2f$filter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filter__title,
                children: "Искать по:"
            }, void 0, false, {
                fileName: "[project]/src/components/Filter/Filter.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Filter$2f$filter$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filter__wrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterItem$2f$FilterItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "исполнителю",
                        isOpen: openFilter === 'author',
                        items: uniqueAuthors,
                        onToggle: ()=>handleFilterToggle('author'),
                        activeItems: activeItems.author,
                        filterType: "author",
                        onItemClick: handleItemClick
                    }, void 0, false, {
                        fileName: "[project]/src/components/Filter/Filter.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterItem$2f$FilterItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "году выпуска",
                        isOpen: openFilter === 'year',
                        items: yearSortOptions,
                        onToggle: ()=>handleFilterToggle('year'),
                        activeItems: activeItems.year,
                        filterType: "year",
                        onItemClick: handleItemClick
                    }, void 0, false, {
                        fileName: "[project]/src/components/Filter/Filter.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterItem$2f$FilterItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "жанру",
                        isOpen: openFilter === 'genre',
                        items: uniqueGenres,
                        onToggle: ()=>handleFilterToggle('genre'),
                        activeItems: activeItems.genre,
                        filterType: "genre",
                        onItemClick: handleItemClick
                    }, void 0, false, {
                        fileName: "[project]/src/components/Filter/Filter.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Filter/Filter.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Filter/Filter.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(Filter, "W4HgUqQJUZi5USqFlQMTU/NaF0k=");
_c = Filter;
var _c;
__turbopack_context__.k.register(_c, "Filter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a1cbf611._.js.map