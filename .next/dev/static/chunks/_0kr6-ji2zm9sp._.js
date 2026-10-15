(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/calendar-actions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarActions",
    ()=>CalendarActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$plus$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarPlus2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-plus-2.js [app-client] (ecmascript) <export default as CalendarPlus2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$calendar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/calendar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$calendar$2d$core$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/calendar-core.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function CalendarActions({ kind }) {
    const event = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$calendar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeddingCalendarEvent"])(kind);
    const googleUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$calendar$2d$core$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["googleCalendarUrl"])(event);
    function downloadCalendarFile() {
        const icsFile = new Blob([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$calendar$2d$core$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weddingIcs"])([
                event
            ])
        ], {
            type: 'text/calendar;charset=utf-8'
        });
        const url = URL.createObjectURL(icsFile);
        const link = document.createElement('a');
        link.href = url;
        link.download = `wedding-${kind}-reminder.ics`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.setTimeout(()=>URL.revokeObjectURL(url), 1000);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "calendar-actions-container mt-auto border-t border-line pt-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-semibold uppercase tracking-[.13em] text-sage-dark",
                children: "Save this moment to your calendar"
            }, void 0, false, {
                fileName: "[project]/components/calendar-actions.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "calendar-actions-grid mt-4 grid grid-cols-1 items-stretch gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: googleUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-sage-dark px-3 py-3 text-center text-[11px] font-semibold tracking-wide text-white transition-colors hover:bg-sage-deep",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$plus$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarPlus2$3e$__["CalendarPlus2"], {
                                className: "h-4 w-4 shrink-0",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/calendar-actions.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Google Calendar"
                            }, void 0, false, {
                                fileName: "[project]/components/calendar-actions.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/calendar-actions.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: downloadCalendarFile,
                        className: "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-gold/30 bg-white px-3 py-3 text-center text-[11px] font-semibold tracking-wide text-sage-dark transition-colors hover:bg-sage-light",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                className: "h-4 w-4 shrink-0",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/calendar-actions.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Apple / Outlook"
                            }, void 0, false, {
                                fileName: "[project]/components/calendar-actions.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/calendar-actions.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/calendar-actions.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-[11px] leading-5 text-muted",
                children: "For Google Calendar, select a reminder when saving the event."
            }, void 0, false, {
                fileName: "[project]/components/calendar-actions.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/calendar-actions.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = CalendarActions;
var _c;
__turbopack_context__.k.register(_c, "CalendarActions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/countdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Countdown",
    ()=>Countdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/wedding.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function remaining(target, now) {
    const totalSeconds = Math.max(0, Math.floor((target - now) / 1000));
    return {
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor(totalSeconds % 86400 / 3600),
        minutes: Math.floor(totalSeconds % 3600 / 60),
        seconds: totalSeconds % 60
    };
}
function Countdown() {
    _s();
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const target = Date.parse(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].date.iso);
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Countdown.useEffect": ()=>{
            if (Number.isNaN(target)) return;
            const update = {
                "Countdown.useEffect.update": ()=>setTimeLeft(remaining(target, Date.now()))
            }["Countdown.useEffect.update"];
            update();
            const id = window.setInterval(update, 1000);
            return ({
                "Countdown.useEffect": ()=>window.clearInterval(id)
            })["Countdown.useEffect"];
        }
    }["Countdown.useEffect"], [
        target
    ]);
    const isPast = timeLeft && Object.values(timeLeft).every((value)=>value === 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "countdown",
        className: "countdown-wash relative overflow-hidden px-6 py-20 sm:py-26",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -left-28 top-4 h-72 w-72 rounded-full border border-gold/20"
            }, void 0, false, {
                fileName: "[project]/components/countdown.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -right-26 bottom-3 h-72 w-72 rounded-full border border-gold/20"
            }, void 0, false, {
                fileName: "[project]/components/countdown.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                className: "relative mx-auto max-w-4xl text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "kicker text-gold-deep",
                        children: "Until our Nuptial Mass"
                    }, void 0, false, {
                        fileName: "[project]/components/countdown.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "display-serif mt-5 text-5xl tracking-tight text-charcoal sm:text-6xl",
                        children: "The day we say “I do”"
                    }, void 0, false, {
                        fileName: "[project]/components/countdown.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    Number.isNaN(target) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-8 text-sm text-sage-dark",
                        children: "Our special day is on its way."
                    }, void 0, false, {
                        fileName: "[project]/components/countdown.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this) : isPast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "display-serif mt-9 text-4xl text-sage-dark",
                        children: "Our forever has begun ♡"
                    }, void 0, false, {
                        fileName: "[project]/components/countdown.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mt-11 grid max-w-[650px] grid-cols-4 gap-2 sm:gap-4",
                        role: "timer",
                        "aria-label": "Time until the wedding",
                        children: [
                            "days",
                            "hours",
                            "minutes",
                            "seconds"
                        ].map((unit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex min-w-0 flex-col items-center rounded-2xl border border-white/60 bg-white/45 px-1 py-5 shadow-[0_8px_24px_rgba(75,97,69,.05)] sm:px-4 sm:py-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                        initial: reducedMotion ? false : {
                                            opacity: 0.66,
                                            y: 5
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: reducedMotion ? 0 : 0.28
                                        },
                                        className: "display-serif text-[clamp(1.9rem,8vw,3.5rem)] leading-none tabular-nums text-sage-dark sm:text-7xl",
                                        children: String(timeLeft?.[unit] ?? 0).padStart(2, "0")
                                    }, timeLeft?.[unit] ?? "pending", false, {
                                        fileName: "[project]/components/countdown.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-3 text-[9px] font-semibold uppercase tracking-[.13em] text-muted sm:tracking-[.2em] sm:text-xs",
                                        children: unit
                                    }, void 0, false, {
                                        fileName: "[project]/components/countdown.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, unit, true, {
                                fileName: "[project]/components/countdown.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/countdown.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/countdown.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/countdown.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Countdown, "Qn1R6jDbzLX1n0YiQCg7lIz3pSY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Countdown;
var _c;
__turbopack_context__.k.register(_c, "Countdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/event-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventCard",
    ()=>EventCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-3.js [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/earth.js [app-client] (ecmascript) <export default as Globe2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/wedding.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$actions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/calendar-actions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ornaments.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$calendar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/calendar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$us$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/us-time.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
function EventCard({ number, icon, event, eventKind, usZone }) {
    const usTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$us$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUsWeddingTime"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$calendar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWeddingCalendarEvent"])(eventKind).startIso, usZone);
    const usZoneLabel = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$us$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["US_TIME_ZONES"].find((zone)=>zone.id === usZone)?.label;
    const directionsUrl = event.directionsUrl || (eventKind === "reception" ? __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].location.directionsUrl : "");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-gold/15 bg-white px-6 pb-9 pt-10 shadow-[0_11px_35px_rgba(57,81,61,.055)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(57,81,61,.13)] motion-reduce:transform-none sm:px-11 sm:pb-12 sm:pt-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-x-0 top-0 h-[5px] bg-gradient-to-r from-gold/60 via-gold/80 to-sage/65",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/event-card.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeddingFlorals"], {
                className: "pointer-events-none absolute -right-24 -top-24 h-60 w-60 opacity-[.1]"
            }, void 0, false, {
                fileName: "[project]/components/event-card.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            eventKind === "ceremony" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SacredSeal"], {
                className: "pointer-events-none absolute -right-13 top-34 h-50 w-50 opacity-[.09]"
            }, void 0, false, {
                fileName: "[project]/components/event-card.tsx",
                lineNumber: 40,
                columnNumber: 35
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-7 top-8 display-serif text-3xl text-gold/30 sm:right-10",
                children: number
            }, void 0, false, {
                fileName: "[project]/components/event-card.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-14 w-14 items-center justify-center rounded-full border border-gold/20 bg-gradient-to-br from-gold-mist to-sage-light text-sage-dark",
                children: icon
            }, void 0, false, {
                fileName: "[project]/components/event-card.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "kicker mt-9 text-gold-deep",
                children: event.label
            }, void 0, false, {
                fileName: "[project]/components/event-card.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "display-serif mt-3 text-[2.75rem] leading-[.98] text-charcoal sm:text-5xl",
                children: event.title
            }, void 0, false, {
                fileName: "[project]/components/event-card.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-8 h-px w-full bg-gradient-to-r from-gold/20 via-gold/35 to-transparent"
            }, void 0, false, {
                fileName: "[project]/components/event-card.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5 text-sm leading-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                className: "mt-0.5 h-[17px] w-[17px] shrink-0 text-sage-dark",
                                strokeWidth: 1.5,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/event-card.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-charcoal",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].date.display
                                    }, void 0, false, {
                                        fileName: "[project]/components/event-card.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 font-semibold text-sage-dark",
                                        children: [
                                            event.time,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-normal text-muted",
                                                children: "(Sri Lanka time)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/event-card.tsx",
                                                lineNumber: 53,
                                                columnNumber: 75
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/event-card.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex flex-wrap items-start gap-2 rounded-xl border border-sage/15 bg-sage-light/55 px-3.5 py-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
                                                className: "mt-0.5 h-4 w-4 shrink-0 text-sage-dark",
                                                strokeWidth: 1.5,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/event-card.tsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-semibold uppercase tracking-[.14em] text-sage-dark",
                                                        children: [
                                                            "USA · ",
                                                            usZoneLabel
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/event-card.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 font-semibold text-charcoal",
                                                        children: [
                                                            usTime.time,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-normal text-muted",
                                                                children: [
                                                                    "· ",
                                                                    usTime.date
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/event-card.tsx",
                                                                lineNumber: 58,
                                                                columnNumber: 79
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/event-card.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/event-card.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/event-card.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/event-card.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/event-card.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "mt-0.5 h-[17px] w-[17px] shrink-0 text-sage-dark",
                                strokeWidth: 1.5,
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/event-card.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-charcoal",
                                        children: event.venue
                                    }, void 0, false, {
                                        fileName: "[project]/components/event-card.tsx",
                                        lineNumber: 65,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-muted",
                                        children: event.address
                                    }, void 0, false, {
                                        fileName: "[project]/components/event-card.tsx",
                                        lineNumber: 65,
                                        columnNumber: 76
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/event-card.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/event-card.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/event-card.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-8 text-sm italic leading-7 text-muted",
                children: event.note
            }, void 0, false, {
                fileName: "[project]/components/event-card.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            directionsUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "mt-6 inline-flex min-h-10 items-center gap-2 self-start text-xs font-semibold uppercase tracking-wider text-sage-dark underline-offset-4 hover:underline",
                href: directionsUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                    "Directions ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                        className: "h-4 w-4",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/event-card.tsx",
                        lineNumber: 76,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/event-card.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$calendar$2d$actions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarActions"], {
                kind: eventKind
            }, void 0, false, {
                fileName: "[project]/components/event-card.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/event-card.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = EventCard;
var _c;
__turbopack_context__.k.register(_c, "EventCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ornaments.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BotanicalSprig",
    ()=>BotanicalSprig,
    "DividerOrnament",
    ()=>DividerOrnament,
    "SacredSeal",
    ()=>SacredSeal,
    "TinyCross",
    ()=>TinyCross,
    "TinyHeart",
    ()=>TinyHeart,
    "WeddingFlorals",
    ()=>WeddingFlorals
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function TinyCross({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2v20M5 9h14",
            stroke: "currentColor",
            strokeWidth: "1.2",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/components/ornaments.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ornaments.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = TinyCross;
function SacredSeal({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 152 152",
        fill: "none",
        "aria-hidden": "true",
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "76",
                cy: "76",
                r: "66",
                stroke: "#b69861",
                strokeWidth: "1",
                opacity: ".68"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "76",
                cy: "76",
                r: "60",
                stroke: "#b69861",
                strokeWidth: ".6",
                opacity: ".32",
                strokeDasharray: "1.5 5.5"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M76 31v47M60 47h32",
                stroke: "#896e40",
                strokeWidth: "2.7",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M76 24v3M76 82v3M53 47h3M96 47h3",
                stroke: "#b69861",
                strokeWidth: "1",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "67",
                cy: "100",
                r: "13",
                stroke: "#b69861",
                strokeWidth: "2.2"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "85",
                cy: "100",
                r: "13",
                stroke: "#896e40",
                strokeWidth: "2.2"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M45 111C31 98 27 77 39 57M107 111c14-13 18-34 6-54",
                stroke: "#829d87",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "#e9f0e6",
                stroke: "#829d87",
                strokeWidth: "1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M40 66c-12-1-15-9-14-15 9 0 14 6 14 15Z"
                    }, void 0, false, {
                        fileName: "[project]/components/ornaments.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M36 82c-12 0-15-7-15-14 9-1 14 5 15 14Z"
                    }, void 0, false, {
                        fileName: "[project]/components/ornaments.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M42 98c-11 2-16-4-18-11 9-3 16 2 18 11Z"
                    }, void 0, false, {
                        fileName: "[project]/components/ornaments.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M112 66c12-1 15-9 14-15-9 0-14 6-14 15Z"
                    }, void 0, false, {
                        fileName: "[project]/components/ornaments.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M116 82c12 0 15-7 15-14-9-1-14 5-15 14Z"
                    }, void 0, false, {
                        fileName: "[project]/components/ornaments.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M110 98c11 2 16-4 18-11-9-3-16 2-18 11Z"
                    }, void 0, false, {
                        fileName: "[project]/components/ornaments.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M51 119q25 15 50 0",
                stroke: "#b69861",
                strokeWidth: ".8",
                opacity: ".85"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "76",
                cy: "124",
                r: "2",
                fill: "#b69861"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ornaments.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c1 = SacredSeal;
function TinyHeart({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.7 8.1c0 4.3-6.1 8.9-8.7 11-2.6-2.1-8.7-6.7-8.7-11a4.7 4.7 0 0 1 8.7-2.4 4.7 4.7 0 0 1 8.7 2.4Z",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/components/ornaments.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ornaments.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c2 = TinyHeart;
function BotanicalSprig(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 176 270",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M86 259C66 218 61 185 87 152c18-23 27-49 12-89",
                stroke: "currentColor",
                strokeWidth: "1.2",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M82 233C56 212 40 213 22 219c8 20 31 22 59 13ZM76 201c-9-25-30-38-52-35 2 24 20 36 50 36ZM87 157c-27-10-48-5-63 12 17 12 37 9 63-10ZM94 129c1-29 13-47 31-54 8 21-2 39-31 54ZM99 86c-22-13-31-29-30-50 18 4 29 20 30 50Z",
                stroke: "currentColor",
                strokeWidth: "1.15",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M87 155c21-22 43-24 59-13-10 19-29 23-59 15ZM71 208c18-24 35-30 58-24-6 21-27 30-58 25ZM100 57C101 34 113 19 129 13c8 17-2 35-29 44Z",
                stroke: "currentColor",
                strokeWidth: "1.15",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13 221c-6-10-4-23 5-31m114-176c14-3 26 2 32 12",
                stroke: "currentColor",
                strokeWidth: "1.1",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "95",
                cy: "127",
                r: "2",
                fill: "currentColor",
                opacity: ".65"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "76",
                cy: "200",
                r: "2",
                fill: "currentColor",
                opacity: ".65"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ornaments.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c3 = BotanicalSprig;
function WeddingFlorals(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 320 310",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 277c90-12 143-65 193-158M68 295c33-77 104-127 197-168M39 230c41-36 77-40 121-39",
                    stroke: "#789178",
                    strokeWidth: "2.6"
                }, void 0, false, {
                    fileName: "[project]/components/ornaments.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M92 225c-27-30-50-30-67-19 5 25 32 29 67 19ZM111 210c4-37 19-58 46-68 9 30-12 54-46 68ZM160 177c-5-30 9-58 29-67 13 25 0 54-29 67ZM195 150c32-30 61-31 81-20-6 27-38 36-81 20ZM74 259c-34-9-53-3-68 17 24 12 48 8 68-17ZM146 238c24-33 50-38 69-27-6 26-32 38-69 27ZM119 266c-10-30-3-49 17-62 16 21 10 45-17 62Z",
                    fill: "#a1b6a0",
                    stroke: "#66866e",
                    strokeWidth: "1.7"
                }, void 0, false, {
                    fileName: "[project]/components/ornaments.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M51 202c-20-26-34-31-48-32M241 147c18-18 30-23 45-21",
                    stroke: "#789178",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/components/ornaments.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M54 195c-21 0-36-11-41-26 21-5 36 3 41 26ZM223 157c7-29 21-41 41-42 2 21-12 36-41 42Z",
                    fill: "#ccdac7",
                    stroke: "#7e9e81",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/components/ornaments.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "translate(190 108)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "-23",
                            cy: "-10",
                            rx: "31",
                            ry: "18",
                            fill: "#e8d7b3",
                            transform: "rotate(-38 -23 -10)"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "21",
                            cy: "-9",
                            rx: "31",
                            ry: "20",
                            fill: "#e2ca9a",
                            transform: "rotate(43 21 -9)"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "-12",
                            cy: "22",
                            rx: "31",
                            ry: "20",
                            fill: "#d9bc84",
                            transform: "rotate(32 -12 22)"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "18",
                            cy: "20",
                            rx: "27",
                            ry: "18",
                            fill: "#f4e7cc",
                            transform: "rotate(-37 18 20)"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "0",
                            cy: "0",
                            rx: "23",
                            ry: "23",
                            fill: "#fcf7e9"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M-11-2c5-14 22-14 24-1 1 9-13 16-18 6-5-9 7-15 12-7",
                            stroke: "#b69457",
                            strokeWidth: "3"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "3",
                            cy: "0",
                            r: "3",
                            fill: "#977440"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ornaments.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "translate(88 166) rotate(-17)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "0",
                            cy: "-23",
                            rx: "19",
                            ry: "27",
                            fill: "#e3d1a6"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "22",
                            cy: "-7",
                            rx: "20",
                            ry: "25",
                            fill: "#f2e5c8",
                            transform: "rotate(75 22 -7)"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "15",
                            cy: "20",
                            rx: "20",
                            ry: "25",
                            fill: "#d8c08e",
                            transform: "rotate(140 15 20)"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "-16",
                            cy: "18",
                            rx: "20",
                            ry: "25",
                            fill: "#f7eed9",
                            transform: "rotate(-140 -16 18)"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "-23",
                            cy: "-5",
                            rx: "19",
                            ry: "25",
                            fill: "#e8d5a7",
                            transform: "rotate(-70 -23 -5)"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            r: "13",
                            fill: "#fcf5e2"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            r: "5",
                            fill: "#a88647"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "-5",
                            cy: "-3",
                            r: "1.4",
                            fill: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "5",
                            cy: "2",
                            r: "1.4",
                            fill: "#fff"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 83,
                            columnNumber: 57
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ornaments.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    transform: "translate(254 56) rotate(18)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cy: "-14",
                            rx: "13",
                            ry: "19",
                            fill: "#e5d5ae"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "13",
                            cy: "7",
                            rx: "13",
                            ry: "19",
                            fill: "#f8eed9",
                            transform: "rotate(80 13 7)"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "-13",
                            cy: "7",
                            rx: "13",
                            ry: "19",
                            fill: "#d4b57c",
                            transform: "rotate(-80 -13 7)"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            r: "10",
                            fill: "#f4e5c4"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            r: "4",
                            fill: "#977643"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 89,
                            columnNumber: 43
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ornaments.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    fill: "#b99b5e",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "42",
                            cy: "155",
                            r: "4"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "37",
                            cy: "140",
                            r: "3"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 92,
                            columnNumber: 44
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "56",
                            cy: "143",
                            r: "3"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 92,
                            columnNumber: 77
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "33",
                            cy: "184",
                            r: "3"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 92,
                            columnNumber: 110
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "274",
                            cy: "172",
                            r: "3.5"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "290",
                            cy: "165",
                            r: "3"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 93,
                            columnNumber: 47
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "279",
                            cy: "190",
                            r: "3"
                        }, void 0, false, {
                            fileName: "[project]/components/ornaments.tsx",
                            lineNumber: 93,
                            columnNumber: 81
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ornaments.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ornaments.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ornaments.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_c4 = WeddingFlorals;
function DividerOrnament({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-center gap-3 text-gold ${className}`,
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-px w-15 bg-gradient-to-r from-transparent to-gold/55"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-1 w-1 rounded-full bg-sage/70"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TinyCross, {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-1 w-1 rounded-full bg-sage/70"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "h-px w-15 bg-gradient-to-l from-transparent to-gold/55"
            }, void 0, false, {
                fileName: "[project]/components/ornaments.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ornaments.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_c5 = DividerOrnament;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "TinyCross");
__turbopack_context__.k.register(_c1, "SacredSeal");
__turbopack_context__.k.register(_c2, "TinyHeart");
__turbopack_context__.k.register(_c3, "BotanicalSprig");
__turbopack_context__.k.register(_c4, "WeddingFlorals");
__turbopack_context__.k.register(_c5, "DividerOrnament");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Reveal({ children, className = "", delay = 0 }) {
    _s();
    const reduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: className,
        initial: reduceMotion ? false : {
            opacity: 0,
            y: 22
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: 0.12
        },
        transition: {
            duration: 0.75,
            delay,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/reveal.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Reveal, "yAKkJs7CtWSNDV8HpmqLOOhKJtw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/rsvp-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RsvpForm",
    ()=>RsvpForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$plus$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarPlus2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-plus-2.js [app-client] (ecmascript) <export default as CalendarPlus2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as LoaderCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rsvp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/rsvp.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/wedding.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function RsvpForm() {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [attending, setAttending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [guests, setGuests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [website, setWebsite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // honeypot
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [serverError, setServerError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [submittedAttendance, setSubmittedAttendance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Yes");
    function clearField(field) {
        setErrors((previous)=>({
                ...previous,
                [field]: undefined
            }));
        setServerError("");
    }
    async function handleSubmit(event) {
        event.preventDefault();
        if (status === "submitting") return;
        setServerError("");
        setErrors({});
        const payload = {
            name,
            phone,
            attending,
            guests: attending === "Yes" ? guests : 0,
            message,
            website
        };
        const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$rsvp$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateRsvp"])(payload);
        if (!validation.success) {
            setErrors(validation.errors);
            return;
        }
        setStatus("submitting");
        try {
            const response = await fetch("/api/rsvp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload),
                cache: "no-store"
            });
            const result = await response.json();
            if (!response.ok || !result.ok) {
                setServerError(result.error || "We couldn't send your response. Please try again.");
                if (result.fields) setErrors(result.fields);
                setStatus("idle");
                return;
            }
            setSubmittedAttendance(validation.data.attending);
            setStatus("success");
        } catch  {
            setServerError("We couldn't connect. Please check your internet and try again.");
            setStatus("idle");
        }
    }
    function reset() {
        setName("");
        setPhone("");
        setAttending("");
        setGuests(1);
        setMessage("");
        setWebsite("");
        setErrors({});
        setServerError("");
        setStatus("idle");
    }
    if (status === "success") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-[440px] flex-col items-center justify-center px-5 py-16 text-center",
            role: "status",
            "aria-live": "polite",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex h-18 w-18 items-center justify-center rounded-full bg-sage-light text-sage-dark",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        className: "h-9 w-9",
                        strokeWidth: 1.3,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/rsvp-form.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/rsvp-form.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "kicker mt-9 text-sage-dark",
                    children: "Response received"
                }, void 0, false, {
                    fileName: "[project]/components/rsvp-form.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "display-serif mt-4 max-w-lg text-5xl leading-none sm:text-6xl",
                    children: submittedAttendance === "Yes" ? "Thank you, from our hearts" : "Thank you for letting us know"
                }, void 0, false, {
                    fileName: "[project]/components/rsvp-form.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-6 max-w-sm text-sm leading-7 text-muted",
                    children: submittedAttendance === "Yes" ? "Thank you! We can't wait to celebrate with you. See you on our special day!" : "We'll miss celebrating with you, but we're grateful for your love and prayers."
                }, void 0, false, {
                    fileName: "[project]/components/rsvp-form.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                submittedAttendance === "Yes" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#events",
                    className: "mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sage-dark px-6 text-[11px] font-semibold uppercase tracking-[.1em] text-white hover:bg-sage-deep",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$plus$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarPlus2$3e$__["CalendarPlus2"], {
                            className: "h-4 w-4",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/rsvp-form.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this),
                        "Save the wedding date to your calendar"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/rsvp-form.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: reset,
                    className: "mt-8 text-xs font-semibold uppercase tracking-[.14em] text-sage-dark underline underline-offset-5",
                    children: "Send another response"
                }, void 0, false, {
                    fileName: "[project]/components/rsvp-form.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/rsvp-form.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this);
    }
    const loading = status === "submitting";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        noValidate: true,
        "aria-busy": loading,
        className: "grid gap-6 sm:gap-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 sm:grid-cols-2 sm:gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "rsvp-name",
                                className: "mb-2.5 block text-xs font-semibold tracking-wide text-charcoal",
                                children: [
                                    "Full name ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gold",
                                        "aria-label": "required",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/components/rsvp-form.tsx",
                                        lineNumber: 114,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/rsvp-form.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "rsvp-name",
                                className: "input-field",
                                type: "text",
                                name: "name",
                                autoComplete: "name",
                                required: true,
                                maxLength: 100,
                                placeholder: "Your full name",
                                value: name,
                                "aria-invalid": !!errors.name,
                                "aria-describedby": errors.name ? "name-error" : undefined,
                                onChange: (e)=>{
                                    setName(e.target.value);
                                    clearField("name");
                                },
                                disabled: loading
                            }, void 0, false, {
                                fileName: "[project]/components/rsvp-form.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            errors.name ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                id: "name-error",
                                className: "mt-2 text-xs text-gold-deep",
                                children: errors.name
                            }, void 0, false, {
                                fileName: "[project]/components/rsvp-form.tsx",
                                lineNumber: 131,
                                columnNumber: 26
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/rsvp-form.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "rsvp-phone",
                                className: "mb-2.5 block text-xs font-semibold tracking-wide text-charcoal",
                                children: [
                                    "Phone number ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-normal text-muted",
                                        children: "(optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/rsvp-form.tsx",
                                        lineNumber: 134,
                                        columnNumber: 127
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/rsvp-form.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "rsvp-phone",
                                className: "input-field",
                                type: "tel",
                                name: "phone",
                                inputMode: "tel",
                                autoComplete: "tel",
                                maxLength: 30,
                                placeholder: "+94 ...",
                                value: phone,
                                "aria-invalid": !!errors.phone,
                                "aria-describedby": errors.phone ? "phone-error" : undefined,
                                onChange: (e)=>{
                                    setPhone(e.target.value);
                                    clearField("phone");
                                },
                                disabled: loading
                            }, void 0, false, {
                                fileName: "[project]/components/rsvp-form.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            errors.phone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                id: "phone-error",
                                className: "mt-2 text-xs text-gold-deep",
                                children: errors.phone
                            }, void 0, false, {
                                fileName: "[project]/components/rsvp-form.tsx",
                                lineNumber: 150,
                                columnNumber: 27
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/rsvp-form.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/rsvp-form.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        className: "mb-3 text-xs font-semibold tracking-wide text-charcoal",
                        children: [
                            "Will you be joining us? ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gold",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/components/rsvp-form.tsx",
                                lineNumber: 155,
                                columnNumber: 108
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/rsvp-form.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: [
                            "Yes",
                            "No"
                        ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: `flex min-h-14 cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 text-sm font-medium transition-colors focus-within:ring-2 focus-within:ring-sage-dark focus-within:ring-offset-2 ${attending === option ? "border-gold bg-sage-dark text-white" : "border-line bg-ivory text-charcoal hover:border-gold/60 hover:bg-sage-light/40"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "sr-only",
                                        type: "radio",
                                        name: "attending",
                                        value: option,
                                        checked: attending === option,
                                        onChange: ()=>{
                                            setAttending(option);
                                            clearField("attending");
                                        },
                                        disabled: loading,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/rsvp-form.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    attending === option ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "h-4 w-4",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/rsvp-form.tsx",
                                        lineNumber: 172,
                                        columnNumber: 39
                                    }, this) : null,
                                    option === "Yes" ? "Joyfully accepts" : "Regretfully declines"
                                ]
                            }, option, true, {
                                fileName: "[project]/components/rsvp-form.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/rsvp-form.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    errors.attending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-xs text-gold-deep",
                        role: "alert",
                        children: errors.attending
                    }, void 0, false, {
                        fileName: "[project]/components/rsvp-form.tsx",
                        lineNumber: 177,
                        columnNumber: 29
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/rsvp-form.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            attending === "Yes" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "rsvp-guests",
                        className: "mb-2.5 block text-xs font-semibold tracking-wide text-charcoal",
                        children: [
                            "Number of guests ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gold",
                                children: "*"
                            }, void 0, false, {
                                fileName: "[project]/components/rsvp-form.tsx",
                                lineNumber: 182,
                                columnNumber: 132
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/rsvp-form.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "rsvp-guests",
                        className: "input-field cursor-pointer appearance-auto",
                        name: "guests",
                        value: guests,
                        onChange: (e)=>{
                            setGuests(Number(e.target.value));
                            clearField("guests");
                        },
                        "aria-invalid": !!errors.guests,
                        "aria-describedby": errors.guests ? "guests-error" : undefined,
                        disabled: loading,
                        children: [
                            1,
                            2,
                            3,
                            4,
                            5
                        ].map((count)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: count,
                                children: [
                                    count,
                                    " ",
                                    count === 1 ? "guest" : "guests"
                                ]
                            }, count, true, {
                                fileName: "[project]/components/rsvp-form.tsx",
                                lineNumber: 194,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/rsvp-form.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this),
                    errors.guests ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "guests-error",
                        className: "mt-2 text-xs text-gold-deep",
                        children: errors.guests
                    }, void 0, false, {
                        fileName: "[project]/components/rsvp-form.tsx",
                        lineNumber: 197,
                        columnNumber: 28
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/rsvp-form.tsx",
                lineNumber: 181,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "rsvp-message",
                        className: "mb-2.5 block text-xs font-semibold tracking-wide text-charcoal",
                        children: [
                            "A note to the couple ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-normal text-muted",
                                children: "(optional)"
                            }, void 0, false, {
                                fileName: "[project]/components/rsvp-form.tsx",
                                lineNumber: 202,
                                columnNumber: 135
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/rsvp-form.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "rsvp-message",
                        className: "input-field min-h-32 resize-y",
                        name: "message",
                        rows: 4,
                        maxLength: 500,
                        placeholder: "Your wishes, blessings or a little message...",
                        value: message,
                        "aria-invalid": !!errors.message,
                        "aria-describedby": errors.message ? "message-error" : undefined,
                        onChange: (e)=>{
                            setMessage(e.target.value);
                            clearField("message");
                        },
                        disabled: loading
                    }, void 0, false, {
                        fileName: "[project]/components/rsvp-form.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-right text-[11px] text-muted",
                        children: [
                            message.length,
                            "/500"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/rsvp-form.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    errors.message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "message-error",
                        className: "text-xs text-gold-deep",
                        children: errors.message
                    }, void 0, false, {
                        fileName: "[project]/components/rsvp-form.tsx",
                        lineNumber: 217,
                        columnNumber: 27
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/rsvp-form.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -left-[10000px] h-0 overflow-hidden",
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "rsvp-website",
                        children: "Website"
                    }, void 0, false, {
                        fileName: "[project]/components/rsvp-form.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "rsvp-website",
                        type: "text",
                        name: "website",
                        autoComplete: "off",
                        tabIndex: -1,
                        value: website,
                        onChange: (e)=>setWebsite(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/components/rsvp-form.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/rsvp-form.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            serverError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rounded-md border border-gold/40 bg-gold-mist px-4 py-3 text-sm leading-6 text-sage-deep",
                role: "alert",
                children: serverError
            }, void 0, false, {
                fileName: "[project]/components/rsvp-form.tsx",
                lineNumber: 227,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: loading,
                className: "flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-sage-dark px-8 text-xs font-semibold uppercase tracking-[.16em] text-white shadow-[0_11px_28px_rgba(65,98,75,.15)] transition-all hover:bg-sage-deep hover:shadow-[0_14px_30px_rgba(65,98,75,.2)] disabled:cursor-wait disabled:opacity-70",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                            className: "h-4 w-4 animate-spin",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/rsvp-form.tsx",
                            lineNumber: 235,
                            columnNumber: 22
                        }, this),
                        " Sending your RSVP..."
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/rsvp-form.tsx",
                    lineNumber: 235,
                    columnNumber: 20
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        "Send my RSVP ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "h-4 w-4",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/components/rsvp-form.tsx",
                            lineNumber: 235,
                            columnNumber: 132
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/rsvp-form.tsx",
                    lineNumber: 235,
                    columnNumber: 117
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/rsvp-form.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-xs leading-5 text-muted",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].rsvp.note
            }, void 0, false, {
                fileName: "[project]/components/rsvp-form.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/rsvp-form.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s(RsvpForm, "QdCcE/IREzmtn+pdcMqDlcCHgqE=");
_c = RsvpForm;
var _c;
__turbopack_context__.k.register(_c, "RsvpForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/section-title.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionTitle",
    ()=>SectionTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ornaments.tsx [app-client] (ecmascript)");
;
;
function SectionTitle({ eyebrow, title, description }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-2xl text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "kicker text-gold-deep",
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/components/section-title.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "display-serif mt-5 text-5xl leading-[.95] tracking-[-.025em] text-charcoal sm:text-6xl md:text-7xl",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/section-title.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DividerOrnament"], {
                className: "mt-7"
            }, void 0, false, {
                fileName: "[project]/components/section-title.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mx-auto mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base",
                children: description
            }, void 0, false, {
                fileName: "[project]/components/section-title.tsx",
                lineNumber: 19,
                columnNumber: 22
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/section-title.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = SectionTitle;
var _c;
__turbopack_context__.k.register(_c, "SectionTitle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/usa-time-selector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UsaTimeSelector",
    ()=>UsaTimeSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/earth.js [app-client] (ecmascript) <export default as Globe2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$us$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/us-time.ts [app-client] (ecmascript)");
;
;
;
function UsaTimeSelector({ value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative mt-12 overflow-hidden rounded-[24px] border border-gold/15 bg-white/95 p-5 shadow-[0_12px_32px_rgba(75,101,80,.06)] sm:p-7 lg:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold via-gold to-sage"
            }, void 0, false, {
                fileName: "[project]/components/usa-time-selector.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-9",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3.5 lg:max-w-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-sage-light text-sage-dark",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
                                    className: "h-5 w-5",
                                    strokeWidth: 1.6,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/usa-time-selector.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/usa-time-selector.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "kicker text-sage-dark",
                                        children: "For our guests in the USA"
                                    }, void 0, false, {
                                        fileName: "[project]/components/usa-time-selector.tsx",
                                        lineNumber: 21,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "display-serif mt-1.5 text-[1.8rem] leading-none text-charcoal sm:text-[2rem]",
                                        children: "Your local time"
                                    }, void 0, false, {
                                        fileName: "[project]/components/usa-time-selector.tsx",
                                        lineNumber: 22,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-xs leading-5 text-muted",
                                        children: "Select your time zone to see both wedding events in US time."
                                    }, void 0, false, {
                                        fileName: "[project]/components/usa-time-selector.tsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/usa-time-selector.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/usa-time-selector.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1 lg:max-w-[610px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "group",
                                "aria-label": "Choose a United States time zone",
                                className: "grid grid-cols-2 gap-2 rounded-xl bg-sage-light/65 p-1.5 sm:grid-cols-4",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$us$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["US_TIME_ZONES"].map((zone)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-pressed": value === zone.id,
                                        onClick: ()=>onChange(zone.id),
                                        className: `flex min-h-12 min-w-0 flex-col items-center justify-center rounded-lg border px-2 py-2 text-center transition-all duration-200 motion-reduce:transition-none ${value === zone.id ? "border-gold bg-sage-dark text-white shadow-[0_4px_15px_rgba(65,98,75,.15)]" : "border-transparent bg-transparent text-sage-dark hover:border-gold/20 hover:bg-white/80"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-semibold tracking-wide",
                                                children: zone.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/usa-time-selector.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `mt-0.5 text-[10px] ${value === zone.id ? "text-white/80" : "text-muted"}`,
                                                children: zone.example
                                            }, void 0, false, {
                                                fileName: "[project]/components/usa-time-selector.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, zone.id, true, {
                                        fileName: "[project]/components/usa-time-selector.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/usa-time-selector.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2.5 text-[11px] leading-5 text-muted",
                                children: "Times account for US daylight saving on 22 May 2027. Calendar events adjust to your device's local time."
                            }, void 0, false, {
                                fileName: "[project]/components/usa-time-selector.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/usa-time-selector.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/usa-time-selector.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/usa-time-selector.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = UsaTimeSelector;
var _c;
__turbopack_context__.k.register(_c, "UsaTimeSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/wedding-experience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WeddingExperience",
    ()=>WeddingExperience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$church$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Church$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/church.js [app-client] (ecmascript) <export default as Church>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/wedding.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$countdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/countdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$event$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/event-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ornaments.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rsvp$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/rsvp-form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/section-title.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$usa$2d$time$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/usa-time-selector.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const MUSIC_PREF = "wedding-music-preference";
const NAV = [
    [
        "#home",
        "Home"
    ],
    [
        "#details",
        "Details"
    ],
    [
        "#rsvp",
        "RSVP"
    ],
    [
        "#location",
        "Location"
    ]
];
function WeddingExperience() {
    _s();
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [opened, setOpened] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [guest, setGuest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [musicPreferred, setMusicPreferred] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioFailed, setAudioFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [usZone, setUsZone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("America/New_York");
    const [venue, setVenue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ceremony");
    const isMass = venue === "ceremony";
    const place = isMass ? __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].ceremony : __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].location;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WeddingExperience.useEffect": ()=>{
            // Personalised greeting: share the link as ?guest=Mr.%20and%20Mrs.%20Silva
            const q = new URLSearchParams(window.location.search);
            setGuest((q.get("guest") ?? q.get("to") ?? "").slice(0, 80));
            try {
                if (window.localStorage.getItem(MUSIC_PREF) === "paused") setMusicPreferred(false);
            } catch  {}
            if (audioRef.current) audioRef.current.volume = 0.4;
            // Loading screen with percentage
            const id = window.setInterval({
                "WeddingExperience.useEffect.id": ()=>setProgress({
                        "WeddingExperience.useEffect.id": (p)=>Math.min(100, p + (reduced ? 50 : 7))
                    }["WeddingExperience.useEffect.id"])
            }["WeddingExperience.useEffect.id"], 110);
            return ({
                "WeddingExperience.useEffect": ()=>window.clearInterval(id)
            })["WeddingExperience.useEffect"];
        }
    }["WeddingExperience.useEffect"], [
        reduced
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WeddingExperience.useEffect": ()=>{
            if (opened) return;
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return ({
                "WeddingExperience.useEffect": ()=>{
                    document.body.style.overflow = prev;
                }
            })["WeddingExperience.useEffect"];
        }
    }["WeddingExperience.useEffect"], [
        opened
    ]);
    function persistMusic(on) {
        setMusicPreferred(on);
        try {
            window.localStorage.setItem(MUSIC_PREF, on ? "playing" : "paused");
        } catch  {}
    }
    function playMusic(save = false) {
        const a = audioRef.current;
        if (!a) return;
        a.volume = 0.4;
        void a.play().then(()=>{
            setIsPlaying(true);
            setAudioFailed(false);
            if (save) persistMusic(true);
        }).catch(()=>{
            setIsPlaying(false);
            setAudioFailed(true);
        });
    }
    function openInvitation() {
        setOpened(true);
        if (musicPreferred) playMusic();
    }
    function toggleMusic() {
        const a = audioRef.current;
        if (!a) return;
        if (!a.paused) {
            a.pause();
            setIsPlaying(false);
            persistMusic(false);
        } else playMusic(true);
    }
    const btn = "gilded-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sage-dark px-7 text-[11px] font-semibold uppercase tracking-[.14em] text-white transition-colors hover:bg-sage-deep";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                src: "/music.mp3",
                preload: "metadata",
                loop: true,
                onPlay: ()=>setIsPlaying(true),
                onPause: ()=>setIsPlaying(false),
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/wedding-experience.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: !opened ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "Open your wedding invitation",
                    exit: {
                        opacity: 0,
                        scale: reduced ? 1 : 1.03
                    },
                    transition: {
                        duration: 0.8
                    },
                    className: "catholic-splash fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-y-auto px-6 py-10 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "paper-texture pointer-events-none absolute inset-0 opacity-25"
                        }, void 0, false, {
                            fileName: "[project]/components/wedding-experience.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-5 rounded-t-[999px] rounded-b-3xl border border-gold/40 sm:inset-10"
                        }, void 0, false, {
                            fileName: "[project]/components/wedding-experience.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-7 rounded-t-[999px] rounded-b-2xl border border-gold/20 sm:inset-13"
                        }, void 0, false, {
                            fileName: "[project]/components/wedding-experience.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "botanical-sway pointer-events-none absolute -bottom-10 -left-14 h-60 w-60 opacity-60 sm:h-80 sm:w-80",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeddingFlorals"], {
                                className: "flower-shadow h-full w-full"
                            }, void 0, false, {
                                fileName: "[project]/components/wedding-experience.tsx",
                                lineNumber: 82,
                                columnNumber: 131
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/wedding-experience.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "botanical-sway botanical-sway-late pointer-events-none absolute -bottom-10 -right-14 h-60 w-60 opacity-60 sm:h-80 sm:w-80",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WeddingFlorals"], {
                                className: "flower-shadow h-full w-full -scale-x-100"
                            }, void 0, false, {
                                fileName: "[project]/components/wedding-experience.tsx",
                                lineNumber: 83,
                                columnNumber: 152
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/wedding-experience.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 flex max-w-md flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sacred-glow",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SacredSeal"], {
                                        className: "h-24 w-24"
                                    }, void 0, false, {
                                        fileName: "[project]/components/wedding-experience.tsx",
                                        lineNumber: 85,
                                        columnNumber: 44
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/wedding-experience.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                guest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "display-serif mt-6 text-xl italic text-sage-dark",
                                    children: [
                                        "Dear ",
                                        guest,
                                        ","
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/wedding-experience.tsx",
                                    lineNumber: 86,
                                    columnNumber: 24
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "kicker mt-4 text-gold-deep",
                                    children: "You are invited"
                                }, void 0, false, {
                                    fileName: "[project]/components/wedding-experience.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "display-serif mt-4 text-[clamp(2.8rem,10vw,4.6rem)] leading-[.9] text-charcoal",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].bride,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mx-2 italic text-gold",
                                            children: "&"
                                        }, void 0, false, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 88,
                                            columnNumber: 125
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].groom
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/wedding-experience.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-[11px] font-semibold tracking-[.24em] text-sage-dark",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].date.short
                                }, void 0, false, {
                                    fileName: "[project]/components/wedding-experience.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-9 w-56",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-2 text-[10px] uppercase tracking-[.2em] text-muted",
                                            children: progress < 100 ? `Preparing your invitation ${progress}%` : "Your invitation is ready"
                                        }, void 0, false, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "loader-bar",
                                            role: "progressbar",
                                            "aria-valuenow": progress,
                                            "aria-valuemin": 0,
                                            "aria-valuemax": 100,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    width: `${progress}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/wedding-experience.tsx",
                                                lineNumber: 92,
                                                columnNumber: 127
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/wedding-experience.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: openInvitation,
                                    disabled: progress < 100,
                                    className: `${btn} mt-8 disabled:pointer-events-none disabled:opacity-0 transition-opacity`,
                                    children: [
                                        "Open invitation ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-4 w-4",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 95,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/wedding-experience.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/wedding-experience.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this)
                    ]
                }, "splash", true, {
                    fileName: "[project]/components/wedding-experience.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/components/wedding-experience.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            opened ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: toggleMusic,
                "aria-label": isPlaying ? "Pause background music" : "Play background music",
                "aria-pressed": isPlaying,
                title: audioFailed ? "Tap to try playing music again" : undefined,
                className: "music-toggle fixed bottom-5 right-5 z-50 flex h-11 items-center gap-2 rounded-full border border-gold/30 bg-white/95 px-4 text-sage-dark shadow-lg backdrop-blur-md hover:bg-sage-light",
                children: [
                    isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                        className: "h-4 w-4 fill-current",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/wedding-experience.tsx",
                        lineNumber: 106,
                        columnNumber: 24
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                        className: "h-4 w-4 fill-current",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/wedding-experience.tsx",
                        lineNumber: 106,
                        columnNumber: 88
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-semibold uppercase tracking-[.13em]",
                        children: isPlaying ? "Music on" : "Music off"
                    }, void 0, false, {
                        fileName: "[project]/components/wedding-experience.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/wedding-experience.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "top",
                inert: !opened,
                className: "overflow-x-clip",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "sticky top-0 z-30 border-b border-gold/20 bg-ivory/90 backdrop-blur-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#home",
                                    className: "flex items-center gap-2 display-serif text-2xl text-sage-dark",
                                    "aria-label": "Back to top",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].bride[0],
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "italic text-gold",
                                            children: "&"
                                        }, void 0, false, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 115,
                                            columnNumber: 33
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].groom[0],
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TinyCross"], {
                                            className: "h-4 w-4 text-gold"
                                        }, void 0, false, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 115,
                                            columnNumber: 94
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/wedding-experience.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    "aria-label": "Wedding sections",
                                    className: "flex items-center gap-4 sm:gap-8",
                                    children: NAV.map(([href, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: href,
                                            className: "text-[10px] font-semibold uppercase tracking-[.14em] text-muted hover:text-sage-dark sm:text-[11px]",
                                            children: label
                                        }, href, false, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 118,
                                            columnNumber: 43
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/wedding-experience.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/wedding-experience.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/wedding-experience.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "home",
                                className: "catholic-hero relative isolate overflow-hidden px-5 pb-20 pt-14 text-center sm:pt-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BotanicalSprig"], {
                                        className: "pointer-events-none absolute -left-16 top-10 h-56 w-40 -rotate-12 text-sage/25"
                                    }, void 0, false, {
                                        fileName: "[project]/components/wedding-experience.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BotanicalSprig"], {
                                        className: "pointer-events-none absolute -right-16 top-10 h-56 w-40 rotate-[192deg] text-sage/25"
                                    }, void 0, false, {
                                        fileName: "[project]/components/wedding-experience.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                        className: "relative mx-auto max-w-2xl",
                                        children: [
                                            guest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "display-serif mb-5 text-2xl italic text-sage-dark",
                                                children: [
                                                    "Dear ",
                                                    guest,
                                                    ","
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/wedding-experience.tsx",
                                                lineNumber: 128,
                                                columnNumber: 24
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TinyCross"], {
                                                className: "mx-auto h-7 w-7 text-gold"
                                            }, void 0, false, {
                                                fileName: "[project]/components/wedding-experience.tsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "kicker mt-4 text-gold-deep",
                                                children: "With the blessing of Almighty God"
                                            }, void 0, false, {
                                                fileName: "[project]/components/wedding-experience.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mx-auto mt-9 w-[min(78vw,340px)] rounded-t-[999px] rounded-b-2xl border border-gold/50 bg-white p-2.5 shadow-[0_26px_70px_rgba(28,44,80,.16)]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-lg bg-sage-light",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                        src: "/couple.jpg",
                                                        alt: `Portrait of ${__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coupleNames"]}`,
                                                        fill: true,
                                                        priority: true,
                                                        sizes: "340px",
                                                        className: "object-cover object-[center_40%]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/wedding-experience.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/wedding-experience.tsx",
                                                lineNumber: 131,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "display-serif mt-9 text-[clamp(3.4rem,13vw,6.4rem)] leading-[.86] tracking-[-.04em] text-charcoal",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].bride,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "my-1 block text-[.5em] italic text-gold",
                                                        children: "&"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/wedding-experience.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 32
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].groom
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/wedding-experience.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-6 text-[11px] font-semibold uppercase tracking-[.2em] text-sage-dark",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].date.display
                                            }, void 0, false, {
                                                fileName: "[project]/components/wedding-experience.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-7 display-serif text-3xl italic text-charcoal",
                                                children: [
                                                    "“",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].verse.text,
                                                    "”"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/wedding-experience.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-[10px] font-semibold uppercase tracking-[.18em] text-gold-deep",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].verse.reference
                                            }, void 0, false, {
                                                fileName: "[project]/components/wedding-experience.tsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#details",
                                                className: `${btn} mt-9`,
                                                children: [
                                                    "Explore ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "h-4 w-4 rotate-90",
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/wedding-experience.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 68
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/wedding-experience.tsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/wedding-experience.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/wedding-experience.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "story-bloom px-6 py-20 text-center sm:py-28",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                    className: "mx-auto max-w-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "kicker text-gold-deep",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].invitation.eyebrow
                                        }, void 0, false, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "display-serif mt-6 text-2xl italic leading-relaxed text-sage-dark",
                                            children: "With joy and the blessings of our families,"
                                        }, void 0, false, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 grid gap-5 sm:grid-cols-2",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].families.bride,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].families.groom
                                            ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "display-serif text-2xl text-charcoal",
                                                    children: f
                                                }, f, false, {
                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 78
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mx-auto mt-8 max-w-xl text-[15px] leading-[2] text-muted",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].invitation.body
                                        }, void 0, false, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "blessing-wash relative mt-12 rounded-[28px] border border-gold/30 px-7 py-9",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "gold-foil-line absolute inset-x-8 top-0 h-px",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TinyCross"], {
                                                    className: "mx-auto h-7 w-7 text-gold"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "display-serif mt-3 text-[clamp(1.5rem,4vw,2.1rem)] italic leading-snug text-sage-dark",
                                                    children: "“What God has joined together, let no one separate.”"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "kicker mt-4 text-gold-deep",
                                                    children: "Matthew 19:6"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/wedding-experience.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/wedding-experience.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "details",
                                className: "bg-paper px-6 py-20 sm:py-28",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto max-w-5xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionTitle"], {
                                                eyebrow: "Our celebration",
                                                title: "The Details",
                                                description: "The day's programme, from the Nuptial Mass to the evening reception."
                                            }, void 0, false, {
                                                fileName: "[project]/components/wedding-experience.tsx",
                                                lineNumber: 165,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-10 grid gap-4 sm:grid-cols-3",
                                            children: [
                                                [
                                                    "#programme",
                                                    "The Programme",
                                                    "Order of the day",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$church$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Church$3e$__["Church"]
                                                ],
                                                [
                                                    "#location",
                                                    "The Venues",
                                                    "Church & reception",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"]
                                                ],
                                                [
                                                    "#rsvp",
                                                    "Kindly RSVP",
                                                    "Let us know",
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"]
                                                ]
                                            ].map(([href, t, d, Icon])=>{
                                                const I = Icon;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: href,
                                                    className: "tab-card rounded-2xl border border-gold/25 bg-ivory p-6 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(I, {
                                                            className: "mx-auto h-6 w-6 text-gold",
                                                            strokeWidth: 1.4,
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/wedding-experience.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "display-serif mt-3 text-2xl text-charcoal",
                                                            children: t
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/wedding-experience.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 101
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-xs text-muted",
                                                            children: d
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/wedding-experience.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 175
                                                        }, this)
                                                    ]
                                                }, href, true, {
                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 26
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/wedding-experience.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/wedding-experience.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$countdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Countdown"], {}, void 0, false, {
                                fileName: "[project]/components/wedding-experience.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "programme",
                                className: "px-6 py-20 sm:py-28",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto max-w-5xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionTitle"], {
                                                eyebrow: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].date.display,
                                                title: "The Programme"
                                            }, void 0, false, {
                                                fileName: "[project]/components/wedding-experience.tsx",
                                                lineNumber: 181,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                            className: "relative mx-auto mt-12 max-w-xl border-l border-gold/40 pl-8",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].programme.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                                    className: "relative pb-9 last:pb-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "timeline-dot absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-gold",
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/wedding-experience.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] font-semibold uppercase tracking-[.16em] text-gold-deep",
                                                            children: p.time
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/wedding-experience.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "display-serif text-2xl text-charcoal",
                                                            children: p.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/wedding-experience.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-muted",
                                                            children: p.note
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/wedding-experience.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 86
                                                        }, this)
                                                    ]
                                                }, p.time, true, {
                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$usa$2d$time$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UsaTimeSelector"], {
                                            value: usZone,
                                            onChange: setUsZone
                                        }, void 0, false, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 grid gap-6 md:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                                    className: "h-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$event$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventCard"], {
                                                        number: "01",
                                                        eventKind: "ceremony",
                                                        usZone: usZone,
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$church$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Church$3e$__["Church"], {
                                                            className: "h-6 w-6",
                                                            strokeWidth: 1.35,
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/wedding-experience.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 110
                                                        }, this),
                                                        event: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].ceremony
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/wedding-experience.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 44
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                                    className: "h-full",
                                                    delay: 0.12,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$event$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventCard"], {
                                                        number: "02",
                                                        eventKind: "reception",
                                                        usZone: usZone,
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                            className: "h-6 w-6",
                                                            strokeWidth: 1.35,
                                                            "aria-hidden": "true"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/wedding-experience.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 124
                                                        }, this),
                                                        event: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].reception
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/wedding-experience.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 57
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].dressCode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-8 text-center text-xs text-muted",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold uppercase tracking-[.16em] text-sage-dark",
                                                    children: "Dress code"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 87
                                                }, this),
                                                " · ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].dressCode
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 196,
                                            columnNumber: 36
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/wedding-experience.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/wedding-experience.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "location",
                                className: "bg-paper px-6 py-20 sm:py-28",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto max-w-5xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionTitle"], {
                                                eyebrow: "Where to find us",
                                                title: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].location.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/wedding-experience.tsx",
                                                lineNumber: 202,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-10 overflow-hidden rounded-3xl border border-gold/25 bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    role: "group",
                                                    "aria-label": "Choose a venue",
                                                    className: "grid grid-cols-2 gap-2 p-2",
                                                    children: [
                                                        [
                                                            "ceremony",
                                                            "Nuptial Mass",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$church$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Church$3e$__["Church"]
                                                        ],
                                                        [
                                                            "reception",
                                                            "Reception",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"]
                                                        ]
                                                    ].map(([k, label, I])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            "aria-pressed": venue === k,
                                                            onClick: ()=>setVenue(k),
                                                            className: `flex min-h-12 items-center justify-center gap-2 rounded-xl border text-xs font-semibold transition-colors ${venue === k ? "border-gold bg-sage-dark text-white" : "border-line bg-ivory text-sage-dark hover:bg-sage-light"}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(I, {
                                                                    className: "h-4 w-4",
                                                                    "aria-hidden": "true"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                                    lineNumber: 208,
                                                                    columnNumber: 23
                                                                }, this),
                                                                label
                                                            ]
                                                        }, k, true, {
                                                            fileName: "[project]/components/wedding-experience.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid lg:grid-cols-[.85fr_1.15fr]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col justify-center px-7 py-10 sm:px-10",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "kicker text-gold-deep",
                                                                    children: isMass ? "The sacred ceremony" : "Our reception venue"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                                    lineNumber: 214,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "display-serif mt-3 text-4xl leading-tight",
                                                                    children: place.venue
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-4 text-sm text-muted",
                                                                    children: place.address
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                                    lineNumber: 216,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1 text-sm text-sage-dark",
                                                                    children: [
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].date.display,
                                                                        " · ",
                                                                        isMass ? __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].ceremony.time : __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].reception.time,
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-muted",
                                                                            children: "(Sri Lanka)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/wedding-experience.tsx",
                                                                            lineNumber: 217,
                                                                            columnNumber: 147
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                                    lineNumber: 217,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: place.directionsUrl,
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    className: `${btn} mt-7 self-start`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                                                            className: "h-4 w-4",
                                                                            "aria-hidden": "true"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/wedding-experience.tsx",
                                                                            lineNumber: 218,
                                                                            columnNumber: 130
                                                                        }, this),
                                                                        "Open Google Maps ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                                            className: "h-4 w-4",
                                                                            "aria-hidden": "true"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/wedding-experience.tsx",
                                                                            lineNumber: 218,
                                                                            columnNumber: 200
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                                    lineNumber: 218,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/wedding-experience.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative min-h-[300px] bg-sage-light/50",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                                title: `Google Maps: ${place.venue}`,
                                                                src: place.mapEmbedUrl,
                                                                className: "absolute inset-0 h-full w-full border-0",
                                                                loading: "lazy",
                                                                referrerPolicy: "no-referrer-when-downgrade",
                                                                allowFullScreen: true
                                                            }, venue, false, {
                                                                fileName: "[project]/components/wedding-experience.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/wedding-experience.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/wedding-experience.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/wedding-experience.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "rsvp",
                                className: "rsvp-wash relative overflow-hidden px-6 py-20 sm:py-28",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mx-auto max-w-[740px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionTitle"], {
                                                eyebrow: "The pleasure of your company",
                                                title: "Kindly RSVP",
                                                description: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].rsvp.deadline
                                            }, void 0, false, {
                                                fileName: "[project]/components/wedding-experience.tsx",
                                                lineNumber: 230,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                                            delay: 0.1,
                                            className: "mt-10 rounded-3xl border border-gold/25 bg-white p-5 shadow-[0_22px_75px_rgba(28,44,80,.09)] sm:p-11",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$rsvp$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RsvpForm"], {}, void 0, false, {
                                                fileName: "[project]/components/wedding-experience.tsx",
                                                lineNumber: 231,
                                                columnNumber: 148
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/wedding-experience.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/wedding-experience.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/wedding-experience.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "footer-wash px-6 pb-24 pt-20 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sacred-glow mx-auto w-fit",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SacredSeal"], {
                                    className: "h-20 w-20"
                                }, void 0, false, {
                                    fileName: "[project]/components/wedding-experience.tsx",
                                    lineNumber: 237,
                                    columnNumber: 54
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/wedding-experience.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "kicker mt-6 text-gold-deep",
                                children: "Save the date"
                            }, void 0, false, {
                                fileName: "[project]/components/wedding-experience.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "display-serif mt-3 text-5xl text-charcoal",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].date.short
                            }, void 0, false, {
                                fileName: "[project]/components/wedding-experience.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-4 max-w-sm text-sm text-muted",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].invitation.signoff
                            }, void 0, false, {
                                fileName: "[project]/components/wedding-experience.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ornaments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DividerOrnament"], {
                                className: "mt-6"
                            }, void 0, false, {
                                fileName: "[project]/components/wedding-experience.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex flex-wrap justify-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#programme",
                                        className: btn,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                                className: "h-4 w-4",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/components/wedding-experience.tsx",
                                                lineNumber: 243,
                                                columnNumber: 50
                                            }, this),
                                            "Add to calendar"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/wedding-experience.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].contacts.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `tel:${c.tel}`,
                                            className: "inline-flex min-h-12 items-center gap-2 rounded-full border border-gold/40 bg-white/80 px-6 text-[11px] font-semibold uppercase tracking-[.12em] text-sage-dark hover:bg-sage-light",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "h-4 w-4",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/wedding-experience.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 271
                                                }, this),
                                                c.label
                                            ]
                                        }, c.tel, true, {
                                            fileName: "[project]/components/wedding-experience.tsx",
                                            lineNumber: 244,
                                            columnNumber: 42
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/wedding-experience.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "display-serif mt-10 text-3xl text-charcoal",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coupleNames"]
                            }, void 0, false, {
                                fileName: "[project]/components/wedding-experience.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-[10px] uppercase tracking-[.16em] text-muted",
                                children: "With God's grace and all our love"
                            }, void 0, false, {
                                fileName: "[project]/components/wedding-experience.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/wedding-experience.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/wedding-experience.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/wedding-experience.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(WeddingExperience, "OSmI3x+ZFS4jrcwgMqswSmnK3x4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = WeddingExperience;
var _c;
__turbopack_context__.k.register(_c, "WeddingExperience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/config/wedding.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * EDIT THIS FILE to personalise the entire invitation.
 * Names, date, times, copy, venue details, maps and SEO URL live here.
 * Church, names, date and times are set for Anjani and Vihan. Confirm reception venue and site URL before sharing.
 */ __turbopack_context__.s([
    "coupleNames",
    ()=>coupleNames,
    "wedding",
    ()=>wedding
]);
const wedding = {
    bride: "Anjani",
    groom: "Vihan",
    hashtag: "#AnjaniAndVihan2027",
    // Set this to the actual HTTPS URL after deploying (also used for social previews).
    siteUrl: "https://your-wedding-site.vercel.app",
    date: {
        // IMPORTANT: ISO 8601 WITH Sri Lanka's UTC+05:30 offset.
        // Countdown targets this exact instant (normally the start of the Mass).
        iso: "2027-05-22T16:00:00+05:30",
        display: "Saturday, 22 May 2027",
        short: "22 . 05 . 2027"
    },
    // Families named in the parents' invitation block. EDIT to the real names.
    families: {
        bride: "Mr. & Mrs. (Bride's parents)",
        groom: "Mr. & Mrs. (Groom's parents)"
    },
    // Order of the day shown as the programme timeline.
    programme: [
        {
            time: "3:30 PM",
            title: "Arrival of guests",
            note: "Kindly be seated before the Mass begins"
        },
        {
            time: "4:00 PM",
            title: "The Nuptial Mass",
            note: "Exchange of vows and rings at St. Paul's"
        },
        {
            time: "6:30 PM",
            title: "Welcome & photographs",
            note: "Reception hall opens"
        },
        {
            time: "7:00 PM",
            title: "Wedding reception",
            note: "Blessing, toasts, dinner and dancing"
        }
    ],
    // Phone numbers for the call buttons (international format). EDIT.
    contacts: [
        {
            label: "Call the bride's family",
            tel: "+94000000000"
        },
        {
            label: "Call the groom's family",
            tel: "+94000000001"
        }
    ],
    verse: {
        text: "Love is patient, love is kind.",
        reference: "1 Corinthians 13:4"
    },
    invitation: {
        eyebrow: "Together with our families",
        heading: "Our sacred promise",
        body: "With grateful hearts and God's abundant blessings, we joyfully invite you to witness our marriage in the presence of the Lord and celebrate this new chapter with us. Your prayers and presence would make our day even more meaningful.",
        signoff: "We would be honoured to share this beautiful day with you."
    },
    ceremony: {
        title: "The Nuptial Mass",
        label: "Holy Matrimony",
        venue: "St. Paul's Church",
        address: "Waragoda, Kelaniya, Sri Lanka",
        time: "4:00 PM",
        note: "Please join us in prayer as we receive the Sacrament of Matrimony.",
        // Google Maps place ID points to the Waragoda church, not similarly named churches elsewhere.
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=St.%20Paul%27s%20Church%2C%20Waragoda%2C%20Kelaniya%2C%20Sri%20Lanka&destination_place_id=ChIJEUKF2T1Y4joROz17YzpIHjs",
        mapEmbedUrl: "https://www.google.com/maps?q=St.%20Paul%27s%20Church%2C%20Waragoda%2C%20Kelaniya%2C%20Sri%20Lanka&z=16&output=embed"
    },
    reception: {
        title: "The Wedding Reception",
        label: "Dinner & Celebration",
        venue: "Royal Ramsess Wedding Hall",
        address: "Negombo, Sri Lanka",
        time: "7:00 PM",
        note: "An evening of wonderful company, heartfelt toasts and celebration."
    },
    // Optional: set to an empty string to hide the dress-code line.
    dressCode: "Formal / Festive attire",
    location: {
        title: "Find your way to us",
        venue: "Royal Ramsess Wedding Hall",
        address: "Negombo, Sri Lanka",
        // Query-based URLs don't require a Google Maps API key.
        mapEmbedUrl: "https://www.google.com/maps?q=Royal%20Ramsess%20Wedding%20Hall%2C%20Negombo%2C%20Sri%20Lanka&output=embed",
        directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Royal%20Ramsess%20Wedding%20Hall%2C%20Negombo%2C%20Sri%20Lanka"
    },
    rsvp: {
        deadline: "Kindly respond at your earliest convenience.",
        note: "Please submit one response per invitation or household."
    }
};
const coupleNames = `${wedding.bride} & ${wedding.groom}`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/calendar-core.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Pure calendar helpers; no credentials or access to guest calendars are needed. */ __turbopack_context__.s([
    "addMinutesIso",
    ()=>addMinutesIso,
    "calendarUtcStamp",
    ()=>calendarUtcStamp,
    "googleCalendarUrl",
    ()=>googleCalendarUrl,
    "parseClockTime",
    ()=>parseClockTime,
    "sameDayStartIso",
    ()=>sameDayStartIso,
    "weddingIcs",
    ()=>weddingIcs
]);
function parseClockTime(value) {
    const match = /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i.exec(value.trim());
    if (!match) throw new Error(`Invalid time format: ${value}. Use e.g. 6:00 PM.`);
    const hour = Number(match[1]);
    const minute = Number(match[2]);
    if (hour < 1 || hour > 12 || minute > 59) {
        throw new Error(`Invalid time value: ${value}`);
    }
    return {
        hour: hour % 12 + (match[3].toUpperCase() === 'PM' ? 12 : 0),
        minute
    };
}
function sameDayStartIso(ceremonyStartIso, displayTime) {
    const offset = ceremonyStartIso.match(/(?:Z|[+-]\d{2}:\d{2})$/)?.[0];
    if (!offset || !/^\d{4}-\d{2}-\d{2}T/.test(ceremonyStartIso)) {
        throw new Error('Ceremony date must contain an ISO time and time zone');
    }
    const { hour, minute } = parseClockTime(displayTime);
    const hourPart = String(hour).padStart(2, '0');
    const minutePart = String(minute).padStart(2, '0');
    return `${ceremonyStartIso.slice(0, 10)}T${hourPart}:${minutePart}:00${offset}`;
}
function addMinutesIso(startIso, durationMinutes) {
    const start = new Date(startIso);
    if (!Number.isFinite(start.getTime()) || !Number.isFinite(durationMinutes) || durationMinutes <= 0) {
        throw new Error('Invalid calendar date or duration');
    }
    return new Date(start.getTime() + durationMinutes * 60000).toISOString();
}
function calendarUtcStamp(iso) {
    const date = new Date(iso);
    if (!Number.isFinite(date.getTime())) throw new Error('Invalid calendar event time');
    return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
}
function assertEvent(event) {
    const start = new Date(event.startIso).getTime();
    const end = new Date(event.endIso).getTime();
    if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) {
        throw new Error('The calendar event must have a valid start and later end time');
    }
}
function googleCalendarUrl(event) {
    assertEvent(event);
    const query = new URLSearchParams({
        action: 'TEMPLATE',
        text: event.title,
        dates: `${calendarUtcStamp(event.startIso)}/${calendarUtcStamp(event.endIso)}`,
        stz: event.timezone,
        etz: event.timezone,
        details: event.description,
        location: event.location
    });
    return `https://calendar.google.com/calendar/r/eventedit?${query.toString()}`;
}
function escapeIcs(value) {
    return value.replace(/\\/g, '\\\\').replace(/\r\n|\r|\n/g, '\\n').replace(/;/g, '\\;').replace(/,/g, '\\,');
}
// RFC 5545 lines need folding at a maximum of 75 UTF-8 octets.
function foldIcsLine(line) {
    const encoder = new TextEncoder();
    const lines = [];
    let segment = '';
    let length = 0;
    for (const char of line){
        const size = encoder.encode(char).length;
        if (length + size > 75) {
            lines.push(segment);
            segment = ' ' + char;
            length = 1 + size;
        } else {
            segment += char;
            length += size;
        }
    }
    lines.push(segment);
    return lines.join('\r\n');
}
function weddingIcs(events) {
    if (events.length === 0) throw new Error('At least one calendar event is required');
    const stamp = calendarUtcStamp(new Date().toISOString());
    const raw = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Wedding Invitation//Guest Calendar Reminder//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH'
    ];
    for (const event of events){
        assertEvent(event);
        const dateOnly = event.startIso.slice(0, 10).replace(/-/g, '');
        raw.push('BEGIN:VEVENT', `UID:wedding-${event.id}-${dateOnly}@guest-wedding-calendar.local`, `DTSTAMP:${stamp}`, `DTSTART:${calendarUtcStamp(event.startIso)}`, `DTEND:${calendarUtcStamp(event.endIso)}`, `SUMMARY:${escapeIcs(event.title)}`, `DESCRIPTION:${escapeIcs(event.description)}`, `LOCATION:${escapeIcs(event.location)}`, 'STATUS:CONFIRMED', 'BEGIN:VALARM', 'ACTION:DISPLAY', 'TRIGGER:-P1D', `DESCRIPTION:${escapeIcs('Wedding reminder: ' + event.title)}`, 'END:VALARM', 'END:VEVENT');
    }
    raw.push('END:VCALENDAR');
    return raw.map(foldIcsLine).join('\r\n') + '\r\n';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/calendar.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWeddingCalendarEvent",
    ()=>getWeddingCalendarEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/config/wedding.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$calendar$2d$core$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/calendar-core.ts [app-client] (ecmascript)");
;
;
// Change these EXAMPLE durations if your Mass or reception is a different length.
// No changes are needed in the wedding details configuration for this feature.
const CEREMONY_DURATION_MINUTES = 120;
const RECEPTION_DURATION_MINUTES = 240;
const CALENDAR_TIMEZONE = 'Asia/Colombo';
function getWeddingCalendarEvent(kind) {
    const isCeremony = kind === 'ceremony';
    const details = isCeremony ? __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].ceremony : __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].reception;
    const startIso = isCeremony ? __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].date.iso : (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$calendar$2d$core$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sameDayStartIso"])(__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].date.iso, __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].reception.time);
    const duration = isCeremony ? CEREMONY_DURATION_MINUTES : RECEPTION_DURATION_MINUTES;
    return {
        id: kind,
        title: `${isCeremony ? 'Holy Matrimony' : 'Wedding Reception'} - ${__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coupleNames"]}`,
        startIso,
        endIso: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$calendar$2d$core$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMinutesIso"])(startIso, duration),
        location: `${details.venue}, ${details.address}`,
        description: [
            details.note,
            `Celebrating ${__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coupleNames"]}.`,
            `Wedding invitation: ${__TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wedding$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wedding"].siteUrl}`,
            'Please check that the date, time and venue match your invitation.'
        ].join('\n'),
        timezone: CALENDAR_TIMEZONE
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/rsvp.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Shared browser/server validation; the server remains authoritative. */ __turbopack_context__.s([
    "asSpreadsheetText",
    ()=>asSpreadsheetText,
    "validateRsvp",
    ()=>validateRsvp
]);
function isRecord(value) {
    return value !== null && typeof value === "object" && !Array.isArray(value);
}
function validateRsvp(input) {
    if (!isRecord(input)) {
        return {
            success: false,
            errors: {
                name: "Please enter your details."
            }
        };
    }
    const name = typeof input.name === "string" ? input.name.trim() : "";
    const phone = typeof input.phone === "string" ? input.phone.trim() : "";
    const message = typeof input.message === "string" ? input.message.trim() : "";
    const attending = input.attending;
    const guests = input.guests;
    const errors = {};
    if (name.length < 2 || name.length > 100) {
        errors.name = "Please enter your full name (2–100 characters).";
    }
    if (phone.length > 30 || phone && (!/^\+?[\d\s()\-]+$/.test(phone) || phone.replace(/\D/g, "").length < 7 || phone.replace(/\D/g, "").length > 15)) {
        errors.phone = "Please enter a valid phone number (up to 30 characters).";
    }
    if (attending !== "Yes" && attending !== "No") {
        errors.attending = "Please choose whether you can attend.";
    }
    if (attending === "Yes" && (typeof guests !== "number" || !Number.isInteger(guests) || guests < 1 || guests > 5)) {
        errors.guests = "Please select between 1 and 5 guests.";
    }
    if (message.length > 500) {
        errors.message = "Please keep your message under 500 characters.";
    }
    if (Object.keys(errors).length > 0) return {
        success: false,
        errors
    };
    return {
        success: true,
        data: {
            name,
            phone,
            attending: attending,
            guests: attending === "Yes" ? guests : 0,
            message
        }
    };
}
function asSpreadsheetText(value) {
    const safe = value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "");
    return /^[\s]*[=+\-@]/.test(safe) ? `'${safe}` : safe;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/us-time.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Wedding-date-aware US time conversion; includes daylight saving automatically. */ __turbopack_context__.s([
    "US_TIME_ZONES",
    ()=>US_TIME_ZONES,
    "getUsWeddingTime",
    ()=>getUsWeddingTime
]);
const US_TIME_ZONES = [
    {
        id: "America/New_York",
        label: "Eastern",
        example: "New York"
    },
    {
        id: "America/Chicago",
        label: "Central",
        example: "Chicago"
    },
    {
        id: "America/Denver",
        label: "Mountain",
        example: "Denver"
    },
    {
        id: "America/Los_Angeles",
        label: "Pacific",
        example: "Los Angeles"
    }
];
function getUsWeddingTime(iso, zone) {
    const instant = new Date(iso);
    if (Number.isNaN(instant.getTime())) throw new Error("Invalid wedding event date");
    return {
        time: new Intl.DateTimeFormat("en-US", {
            timeZone: zone,
            hour: "numeric",
            minute: "2-digit",
            timeZoneName: "short"
        }).format(instant),
        date: new Intl.DateTimeFormat("en-US", {
            timeZone: zone,
            weekday: "short",
            month: "short",
            day: "numeric"
        }).format(instant)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_0kr6-ji2zm9sp._.js.map