(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8312: function (e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return s(7532)
            }])
        },
        7532: function (e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function () {
                    return ev
                }
            });
            var n, a, l, i, r, o, d = s(5893),
                c = s(7294),
                h = s(6010);
            let u = e => {
                let {
                    children: t
                } = e;
                return (0, d.jsx)("div", {
                    className: (0, h.Z)("mt-2 rounded-full bg-[#1E88E5] font-semibold text-gray-100 transition-all hover:scale-110", "px-1 py-1 text-xs", "sm:px-3 sm:py-1 sm:text-sm"),
                    children: t
                })
            };
            var m = s(9008),
                x = s.n(m);
            let g = e => {
                let {
                    children: t,
                    className: s
                } = e;
                return (0, d.jsxs)("div", {
                    className: "".concat(s ? s + " " : "", " background"),
                    children: [(0, d.jsx)("div", {
                        className: "lower-gradient"
                    }), t]
                })
            };
            var p = s(4298),
                f = s.n(p);
            let w = e => {
                let t = "Assemble, configure, and deploy autonomous AI Agents in your browser.";
                return (0, d.jsxs)("div", {
                    className: "flex min-h-screen min-h-screen flex-col bg-gradient-to-b from-[#2B2B2B] to-[#1F1F1F]",
                    children: [(0, d.jsxs)(x(), {
                        children: [(0, d.jsx)("title", {
                            children: "AGENT"
                        }), (0, d.jsx)("meta", {
                            name: "description",
                            content: t
                        }), (0, d.jsx)("meta", {
                            name: "twitter:site",
                            content: ""
                        }), (0, d.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        }), (0, d.jsx)("meta", {
                            name: "twitter:title",
                            content: "Agent \uD83E\uDD16"
                        }), (0, d.jsx)("meta", {
                            name: "twitter:description",
                            content: t
                        }), (0, d.jsx)("meta", {
                            name: "twitter:image",
                            content: ""
                        }), (0, d.jsx)("meta", {
                            name: "twitter:image:width",
                            content: "1280"
                        }), (0, d.jsx)("meta", {
                            name: "twitter:image:height",
                            content: "640"
                        }), (0, d.jsx)("meta", {
                            property: "og:title",
                            content: "AGENT: Autonomous AI in your browser \uD83E\uDD16"
                        }), (0, d.jsx)("meta", {
                            property: "og:description",
                            content: "Assemble, configure, and deploy autonomous AI Agents in your browser."
                        }), (0, d.jsx)("meta", {
                            property: "og:url",
                            content: "#"
                        }), (0, d.jsx)("meta", {
                            property: "og:image",
                            content: "#"
                        }), (0, d.jsx)("meta", {
                            property: "og:image:width",
                            content: "1280"
                        }), (0, d.jsx)("meta", {
                            property: "og:image:height",
                            content: "640"
                        }), (0, d.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, d.jsx)("meta", {
                            name: "google-site-verification",
                            content: "sG4QDkC8g2oxKSopgJdIe2hQ_SaJDaEaBjwCXZNkNWA"
                        }), (0, d.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        }), (0, d.jsx)(f(), {
                            src: "https://plausible.io/js/script.js",
                            strategy: "afterInteractive",
                            "data-domain": "#"
                        })]
                    }), (0, d.jsx)(g, {
                        children: e.children
                    })]
                })
            };
            var j = s(9583),
                b = s(4385),
                y = s(7064);
            let v = e => (0, d.jsx)(y.E.div, {
                initial: {
                    scale: 0
                },
                animate: {
                    scale: 1
                },
                transition: {
                    duration: .5,
                    type: "spring",
                    delay: null !== (n = e.delay) && void 0 !== n ? n : 0
                },
                ...e,
                children: e.children
            });
            v.displayName = "PopIn";
            let N = e => (0, d.jsx)(y.E.div, {
                initial: {
                    scaleX: .8,
                    scaleY: 0
                },
                animate: {
                    scaleX: 1,
                    scaleY: 1
                },
                transition: {
                    duration: .75,
                    type: null !== (a = e.type) && void 0 !== a ? a : "spring",
                    delay: null !== (l = e.delay) && void 0 !== l ? l : 0
                },
                ...e,
                children: e.children
            });
            N.displayName = "Expand";
            var k = s(6293),
                T = s(329),
                E = s(2490),
                A = s(1835);
            s(7811);
            var C = s(7392);
            let S = e => {
                    let {
                        className: t,
                        size: s = 16,
                        speed: n = 2,
                        lineWeight: a = 7
                    } = e;
                    return (0, d.jsx)("div", {
                        className: t,
                        children: (0, d.jsx)(C.Z, {
                            size: s,
                            speed: n,
                            color: "white",
                            lineWeight: a
                        })
                    })
                },
                _ = (0, c.forwardRef)((e, t) => {
                    let [s, n] = (0, c.useState)(!1), a = t => {
                        !0 == e.loader && n(!0);
                        try {
                            var s;
                            Promise.resolve(null === (s = e.onClick) || void 0 === s ? void 0 : s.call(e, t)).then()
                        } catch (e) {
                            n(!1)
                        }
                    };
                    return (0, d.jsx)("button", {
                        ref: t,
                        type: e.type,
                        disabled: s || e.disabled,
                        className: (0, h.Z)("text-gray/50 rounded-lg border-[2px] border-white/30 px-5 py-2 font-bold transition-all sm:px-10 sm:py-3", e.disabled ? " cursor-not-allowed border-white/10 bg-zinc-900 text-white/30" : " mou cursor-pointer bg-[#1E88E5]/70 text-white/80 hover:border-white/80 hover:bg-[#0084f7] hover:text-white hover:shadow-2xl ".concat(e.enabledClassName || ""), e.className),
                        onClick: a,
                        children: (0, d.jsx)("div", {
                            className: "flex items-center justify-center",
                            children: s ? (0, d.jsx)(S, {}) : (0, d.jsxs)(d.Fragment, {
                                children: [e.icon ? (0, d.jsx)("div", {
                                    className: "mr-2",
                                    children: e.icon
                                }) : null, e.children]
                            })
                        })
                    })
                });
            _.displayName = "Button";
            var D = s(1163),
                I = s(1604),
                P = s(3454);
            I.z.object({
                DATABASE_URL: I.z.string().url(),
                NODE_ENV: I.z.enum(["development", "test", "production"]),
                NEXTAUTH_SECRET: I.z.string().min(1).trim(),
                NEXTAUTH_URL: I.z.preprocess(e => null !== (i = P.env.VERCEL_URL) && void 0 !== i ? i : e, P.env.VERCEL ? I.z.string() : I.z.string().url()),
                OPENAI_API_KEY: I.z.string()
            }), P.env.DATABASE_URL, P.env.NEXTAUTH_SECRET, P.env.NEXTAUTH_URL, P.env.OPENAI_API_KEY, I.z.object({
                NEXT_PUBLIC_VERCEL_ENV: I.z.enum(["production", "preview", "development"]),
                NEXT_PUBLIC_STRIPE_DONATION_URL: I.z.string().url().optional()
            });
            let z = {
                    NEXT_PUBLIC_VERCEL_ENV: "production",
                    NEXT_PUBLIC_STRIPE_DONATION_URL: "https://donate.stripe.com/5kAcQi56e4N84aQcMM"
                },
                M = "chat-window-message-list",
                R = e => {
                    let {
                        messages: t,
                        children: s,
                        className: n
                    } = e, [a, l] = (0, c.useState)(!1), i = (0, c.useRef)(null), r = e => {
                        let {
                            scrollTop: t,
                            scrollHeight: s,
                            clientHeight: n
                        } = e.currentTarget;
                        t < s - n - 10 ? l(!0) : l(!1)
                    };
                    return (0, c.useEffect)(() => {
                        i && i.current && !a && (i.current.scrollTop = i.current.scrollHeight)
                    }), (0, c.useEffect)(() => {
                        i.current && (0, b.ZP)(i.current)
                    }, [t]), (0, d.jsxs)("div", {
                        className: "border-translucent flex w-full flex-col rounded-2xl border-2 border-white/20 bg-zinc-900 text-white shadow-2xl drop-shadow-lg " + (null != n ? n : ""),
                        children: [(0, d.jsx)(L, {}), (0, d.jsxs)("div", {
                            className: "mb-2 mr-2 h-[14em] overflow-y-auto overflow-x-hidden sm-h:h-[17em] md-h:h-[22em] lg-h:h-[30em] ",
                            ref: i,
                            onScroll: r,
                            id: M,
                            children: [t.map((e, t) => (0, d.jsx)(O, {
                                message: e
                            }, "".concat(t, "-").concat(e.type))), s, 0 === t.length && (0, d.jsxs)(d.Fragment, {
                                children: [!!z.NEXT_PUBLIC_STRIPE_DONATION_URL && (0, d.jsx)(N, {
                                    delay: .7,
                                    type: "spring",
                                    children: (0, d.jsx)(F, {
                                        url: z.NEXT_PUBLIC_STRIPE_DONATION_URL
                                    })
                                }), (0, d.jsx)(N, {
                                    delay: .8,
                                    type: "spring",
                                    children: (0, d.jsx)(O, {
                                        message: {
                                            type: "system",
                                            value: "> Create an agent by adding a name / goal, and hitting deploy!"
                                        }
                                    })
                                }), (0, d.jsx)(N, {
                                    delay: .9,
                                    type: "spring",
                                    children: (0, d.jsx)(O, {
                                        message: {
                                            type: "system",
                                            value: "\uD83D\uDCE2 Please first provide your own OpenAI API key via the settings tab!"
                                        }
                                    })
                                })]
                            })]
                        })]
                    })
                },
                L = () => {
                    let e = e => {
                            let t = document.getElementById(e);
                            t && k.hi(t, {
                                height: t.scrollHeight,
                                style: {
                                    overflowY: "visible",
                                    maxHeight: "none",
                                    border: "none"
                                }
                            }).then(e => {
                                let t = document.createElement("a");
                                t.href = e, t.download = "agent-gpt-output.png", t.click()
                            }).catch(console.error)
                        },
                        t = e => {
                            let t = document.getElementById(e);
                            if (!t) return;
                            let s = t.innerText;
                            navigator.clipboard.writeText(s)
                        };
                    return (0, d.jsxs)("div", {
                        className: "flex items-center gap-1 rounded-t-3xl p-3",
                        children: [(0, d.jsx)(v, {
                            delay: .4,
                            children: (0, d.jsx)("div", {
                                className: "h-3 w-3 rounded-full bg-red-500"
                            })
                        }), (0, d.jsx)(v, {
                            delay: .5,
                            children: (0, d.jsx)("div", {
                                className: "h-3 w-3 rounded-full bg-yellow-500"
                            })
                        }), (0, d.jsx)(v, {
                            delay: .6,
                            children: (0, d.jsx)("div", {
                                className: "h-3 w-3 rounded-full bg-green-500"
                            })
                        }), (0, d.jsx)("div", {
                            className: "flex flex-grow"
                        }), (0, d.jsx)(v, {
                            delay: .7,
                            children: (0, d.jsxs)("div", {
                                className: "mr-1 flex cursor-pointer items-center gap-2 rounded-full border-2 border-white/30 p-1 px-2 text-xs hover:bg-white/10",
                                onClick: () => e(M),
                                children: [(0, d.jsx)(j.TvB, {
                                    size: 12
                                }), (0, d.jsx)("p", {
                                    className: "font-mono",
                                    children: "Save"
                                })]
                            })
                        }), (0, d.jsx)(v, {
                            delay: .8,
                            children: (0, d.jsxs)("div", {
                                className: "mr-1 flex cursor-pointer items-center gap-2 rounded-full border-2 border-white/30 p-1 px-2 text-xs hover:bg-white/10",
                                onClick: () => t(M),
                                children: [(0, d.jsx)(j.GON, {
                                    size: 12
                                }), (0, d.jsx)("p", {
                                    className: "font-mono",
                                    children: "Copy"
                                })]
                            })
                        })]
                    })
                },
                O = e => {
                    let {
                        message: t
                    } = e, [s, n] = (0, c.useState)(!1), [a, l] = (0, c.useState)(!1), i = () => {
                        navigator.clipboard.writeText(t.value), l(!0)
                    };
                    return (0, c.useEffect)(() => {
                        let e;
                        return a && (e = setTimeout(() => {
                            l(!1)
                        }, 2e3)), () => {
                            clearTimeout(e)
                        }
                    }, [a]), (0, d.jsxs)("div", {
                        className: "mx-2 my-1 rounded-lg border-[2px] border-white/10 bg-white/20 p-1 font-mono text-sm hover:border-[#1E88E5]/40 sm:mx-4 sm:p-3 sm:text-base",
                        onMouseEnter: () => n(!0),
                        onMouseLeave: () => n(!1),
                        onClick: i,
                        children: ["system" != t.type && (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)("div", {
                                className: "mr-2 inline-block h-[0.9em]",
                                children: G(t)
                            }), (0, d.jsx)("span", {
                                className: "mr-2 font-bold",
                                children: B(t)
                            })]
                        }), "thinking" == t.type && (0, d.jsx)("span", {
                            className: "italic text-zinc-400",
                            children: "(Restart if this takes more than 30 seconds)"
                        }), "action" == t.type ? (0, d.jsx)("div", {
                            className: "prose ml-2 max-w-none",
                            children: (0, d.jsx)(T.D, {
                                remarkPlugins: [E.Z],
                                rehypePlugins: [A.Z],
                                children: t.value
                            })
                        }) : (0, d.jsx)("span", {
                            children: t.value
                        }), (0, d.jsx)("div", {
                            className: "relative",
                            children: a ? (0, d.jsx)("span", {
                                className: "absolute bottom-0 right-0 rounded-full border-2 border-white/30 bg-zinc-800 p-1 px-2 text-gray-300",
                                children: "Copied!"
                            }) : (0, d.jsx)("span", {
                                className: "absolute bottom-0 right-0 rounded-full border-2 border-white/30 bg-zinc-800 p-1 px-2 ".concat(s ? "visible" : "hidden"),
                                children: (0, d.jsx)(j.esY, {
                                    className: "text-white-300 cursor-pointer"
                                })
                            })
                        })]
                    })
                },
                F = e => {
                    let {
                        url: t
                    } = e, s = (0, D.useRouter)();
                    return (0, d.jsxs)("div", {
                        className: "mx-2 my-1 flex flex-col gap-2 rounded-lg border-[2px] border-white/10 bg-blue-500/20 p-1 font-mono hover:border-[#1E88E5]/40 sm:mx-4 sm:flex-row sm:p-3 sm:text-center sm:text-base",
                        children: [(0, d.jsxs)("div", {
                            className: "max-w-none flex-grow",
                            children: ["\uD83D\uDC9D️ Help support the advancement of AGENT. \uD83D\uDC9D", (0, d.jsx)("br", {}), "Please consider donating help fund our high infrastructure costs."]
                        }), (0, d.jsx)("div", {
                            className: "flex items-center justify-center",
                            children: (0, d.jsx)(_, {
                                className: "sm:text m-0 rounded-full text-sm ",
                                onClick: () => void s.push(t),
                                children: "Donate Now \uD83D\uDE80"
                            })
                        })]
                    })
                },
                G = e => {
                    switch (e.type) {
                        case "goal":
                            return (0, d.jsx)(j.QJe, {
                                className: "text-yellow-300"
                            });
                        case "task":
                            return (0, d.jsx)(j.V_i, {
                                className: "text-gray-300"
                            });
                        case "thinking":
                            return (0, d.jsx)(j.Qkp, {
                                className: "mt-[0.1em] text-pink-400"
                            });
                        case "action":
                            return (0, d.jsx)(j.Gzj, {
                                className: "text-green-500"
                            })
                    }
                },
                B = e => {
                    switch (e.type) {
                        case "goal":
                            return "Embarking on a new goal:";
                        case "task":
                            return "Added task:";
                        case "thinking":
                            return "Thinking...";
                        case "action":
                            return e.info ? e.info : "Executing:"
                    }
                };
            var U = s(7516);
            let Y = e => (0, d.jsx)(y.E.div, {
                exit: {
                    opacity: 0,
                    x: -100
                },
                animate: {
                    scale: 1
                },
                transition: {
                    duration: .5,
                    type: "spring",
                    delay: null !== (r = e.delay) && void 0 !== r ? r : 0
                },
                ...e,
                children: e.children
            });
            Y.displayName = "FadeOut";
            var X = s(1526);
            let K = e => {
                    let {
                        showHelp: t,
                        showSettings: s
                    } = e, [n, a] = (0, c.useState)(!1), [l, i] = c.useState([]), r = () => {
                        a(e => !e)
                    };
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)("button", {
                            hidden: n,
                            className: "fixed left-2 top-2 z-40 rounded-md border-2 border-white/20 bg-zinc-900 p-2 text-white hover:bg-zinc-700 md:hidden",
                            onClick: r,
                            children: (0, d.jsx)(j.Fm7, {})
                        }), (0, d.jsxs)("div", {
                            id: "drawer",
                            className: (0, h.Z)(n ? "translate-x-0" : "-translate-x-full", "z-30 m-0 h-screen w-72 flex-col justify-between bg-zinc-900 p-3 font-mono text-white shadow-3xl transition-all", "absolute", "flex md:static md:translate-x-0"),
                            children: [(0, d.jsxs)("div", {
                                className: "flex flex-col gap-1 overflow-hidden",
                                children: [(0, d.jsxs)("div", {
                                    className: "mb-2 flex justify-center gap-2",
                                    children: [(0, d.jsx)(Z, {
                                        className: "flex-grow",
                                        icon: (0, d.jsx)(U.poH, {}),
                                        border: !0,
                                        text: "New Agent",
                                        onClick: () => location.reload()
                                    }), (0, d.jsx)("button", {
                                        className: "z-40 rounded-md border-2 border-white/20 bg-zinc-900 p-2 text-white hover:bg-zinc-700 md:hidden",
                                        onClick: r,
                                        children: (0, d.jsx)(j.Fm7, {})
                                    })]
                                }), (0, d.jsxs)(X.M, {
                                    children: [l.map((e, t) => (0, d.jsx)(Y, {
                                        children: (0, d.jsx)(Z, {
                                            icon: (0, d.jsx)(j.iNY, {}),
                                            text: e
                                        })
                                    }, "".concat(t, "-").concat(e))), 0 === l.length && (0, d.jsx)("div", {
                                        children: "Click the above button to restart. In the future, this will be a list of your deployed agents!"
                                    })]
                                })]
                            }), (0, d.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [(0, d.jsx)("hr", {
                                    className: "my-5 border-white/20"
                                }), (0, d.jsx)(Z, {
                                    icon: (0, d.jsx)(j.MXt, {}),
                                    text: "Help",
                                    onClick: t
                                }), (0, d.jsx)(Z, {
                                    icon: (0, d.jsx)(j.p4t, {}),
                                    text: "Settings",
                                    onClick: s
                                }), (0, d.jsx)(Z, {
                                    icon: (0, d.jsx)(j.j2d, {}),
                                    text: "Discord",
                                    href: "#",
                                    target: "_blank"
                                }), (0, d.jsx)(Z, {
                                    icon: (0, d.jsx)(j.fWC, {}),
                                    text: "Twitter",
                                    href: "#",
                                    target: "_blank"
                                }), (0, d.jsx)(Z, {
                                    icon: (0, d.jsx)(j.hJX, {}),
                                    text: "GitHub",
                                    href: "#",
                                    target: "_blank"
                                })]
                            })]
                        })]
                    })
                },
                Z = e => {
                    let {
                        icon: t,
                        text: s,
                        border: n,
                        href: a,
                        target: l,
                        onClick: i,
                        className: r
                    } = e;
                    return a ? (0, d.jsxs)("a", {
                        className: (0, h.Z)("flex cursor-pointer flex-row items-center rounded-md rounded-md p-2 hover:bg-white/5", n && "border-[1px] border-white/20", "".concat(r || "")),
                        href: a,
                        target: null != l ? l : "_blank",
                        children: [t, (0, d.jsx)("span", {
                            className: "text-md ml-4",
                            children: s
                        })]
                    }) : (0, d.jsxs)("button", {
                        type: "button",
                        className: (0, h.Z)("flex cursor-pointer flex-row items-center rounded-md rounded-md p-2 hover:bg-white/5", n && "border-[1px] border-white/20", "".concat(r || "")),
                        onClick: i,
                        children: [t, (0, d.jsx)("span", {
                            className: "text-md ml-4",
                            children: s
                        })]
                    })
                },
                H = e => {
                    let {
                        placeholder: t,
                        left: s,
                        value: n,
                        onChange: a,
                        disabled: l
                    } = e;
                    return (0, d.jsxs)("div", {
                        className: "z-10 flex w-full items-center rounded-xl bg-[#3a3a3a] font-mono text-lg text-white/75 shadow-xl",
                        children: [s && (0, d.jsx)("div", {
                            className: "center flex w-1/4 items-center rounded-xl rounded-r-none border-[2px] border-r-0 border-white/10 px-5 py-2 text-lg font-semibold tracking-wider transition-all sm:py-3",
                            children: s
                        }), (0, d.jsx)("input", {
                            className: (0, h.Z)("border:black delay-50 w-full rounded-xl border-[2px] border-white/10 bg-transparent px-2 py-2 tracking-wider outline-0 transition-all placeholder:text-white/20 hover:border-[#1E88E5]/40 focus:border-[#1E88E5] sm:py-3", l && " cursor-not-allowed hover:border-white/10", s && "rounded-l-none"),
                            placeholder: t,
                            type: "text",
                            value: n,
                            onChange: a,
                            disabled: l
                        })]
                    })
                };
            var V = s(4578),
                W = s(6154),
                J = s(5900),
                Q = s(231),
                q = s(3226),
                $ = s(2475);
            $.K.fromZodSchema(I.z.object({
                action: I.z.string().describe("The action to take, either 'Question' or '".concat("Respond", "'")),
                arg: I.z.string().describe("The argument to the action")
            }));
            let ee = $.K.fromZodSchema(I.z.array(I.z.string()).describe("A list of tasks to complete"));
            var et = s(3454);
            let es = e => new J.Pp({
                    openAIApiKey: "" === e.customApiKey ? et.env.OPENAI_API_KEY : e.customApiKey,
                    temperature: .9,
                    modelName: "" === e.customModelName ? "gpt-3.5-turbo" : e.customModelName,
                    maxTokens: 300
                }),
                en = new Q.Pf({
                    template: "You are an autonomous task creation AI called AGENT. You have the following objective `{goal}`. Create a list of zero to three tasks to be completed by your AI system such that your goal is more closely reached or completely reached.\n{format_instructions}",
                    inputVariables: ["goal"],
                    partialVariables: {
                        format_instructions: ee.getFormatInstructions()
                    }
                }),
                ea = async (e, t) => await new q.Un({
                    llm: e,
                    prompt: en
                }).call({
                    goal: t
                }), el = new Q.Pf({
                    template: "You are an autonomous task execution AI called AGENT. You have the following objective `{goal}`. You have the following tasks `{task}`. Execute the task and return the response as a string.",
                    inputVariables: ["goal", "task"]
                }), ei = async (e, t, s) => await new q.Un({
                    llm: e,
                    prompt: el
                }).call({
                    goal: t,
                    task: s
                }), er = new Q.Pf({
                    template: "You are an AI task creation agent. You have the following objective `{goal}`. You have the following incomplete tasks `{tasks}` and have just executed the following task `{lastTask}` and received the following result `{result}`. Based on this, create a new task to be completed by your AI system ONLY IF NEEDED such that your goal is more closely reached or completely reached.\n{format_instructions}",
                    inputVariables: ["goal", "tasks", "lastTask", "result"],
                    partialVariables: {
                        format_instructions: ee.getFormatInstructions()
                    }
                }), eo = async (e, t, s, n, a) => await new q.Un({
                    llm: e,
                    prompt: er
                }).call({
                    goal: t,
                    tasks: s,
                    lastTask: n,
                    result: a
                }), ed = e => {
                    let t = e.match(/(\[(?:\s*"(?:[^"\\]|\\.)*"\s*,?)+\s*\])/);
                    if (t && t[0]) try {
                        return JSON.parse(t[0])
                    } catch (e) {
                        console.error("Error parsing the matched array:", e)
                    }
                    return console.warn("Error, could not extract array from inputString:", e), []
                }, ec = e => !/^No( (new|further|additional|extra|other))? tasks? (is )?(required|needed|added|created|inputted).*$/i.test(e) && !/^Task (complete|completed|finished|done|over|success).*/i.test(e) && !/^(\s*|Do nothing(\s.*)?)$/i.test(e);
            async function eh(e, t) {
                let s = await ea(es(e), t);
                return console.log(typeof s.text), console.log("Completion:" + s.text), ed(s.text).filter(ec)
            }
            async function eu(e, t, s, n, a, l) {
                let i = await eo(es(e), t, s, n, a);
                return ed(i.text).filter(ec).filter(e => !(l || []).includes(e))
            }
            async function em(e, t, s) {
                let n = await ei(es(e), t, s);
                return n.text
            }
            var ex = class {
                async run() {
                    this.sendGoalMessage(), this.sendThinkingMessage();
                    try {
                        for (let e of (this.tasks = await this.getInitialTasks(), this.tasks)) await new Promise(e => setTimeout(e, 800)), this.sendTaskMessage(e)
                    } catch (e) {
                        console.log(e), this.sendErrorMessage("" !== this.modelSettings.customApiKey ? "ERROR retrieving initial tasks array. Make sure your API key is not the free tier, make your goal more clear, or revise your goal such that it is within our model's policies to run. Shutting Down." : "ERROR retrieving initial tasks array. Retry, make your goal more clear, or revise your goal such that it is within our model's policies to run. Shutting Down."), this.shutdown();
                        return
                    }
                    await this.loop()
                }
                async loop() {
                    if (console.log("Loop ".concat(this.numLoops)), console.log(this.tasks), !this.isRunning) {
                        this.sendManualShutdownMessage(), this.shutdown();
                        return
                    }
                    if (0 === this.tasks.length) {
                        this.sendCompletedMessage(), this.shutdown();
                        return
                    }
                    this.numLoops += 1;
                    let e = "" === this.modelSettings.customApiKey ? 4 : 25;
                    if (this.numLoops > e) {
                        this.sendLoopMessage(), this.shutdown();
                        return
                    }
                    await new Promise(e => setTimeout(e, 1e3)), this.completedTasks.push(this.tasks[0] || "");
                    let t = this.tasks.shift();
                    this.sendThinkingMessage();
                    let s = await this.executeTask(t);
                    this.sendExecutionMessage(t, s), await new Promise(e => setTimeout(e, 1e3)), this.sendThinkingMessage();
                    try {
                        let e = await this.getAdditionalTasks(t, s);
                        for (let t of (this.tasks = this.tasks.concat(e), e)) await new Promise(e => setTimeout(e, 800)), this.sendTaskMessage(t);
                        0 == e.length && this.sendActionMessage("Task marked as complete!")
                    } catch (e) {
                        console.log(e), this.sendErrorMessage("ERROR adding additional task(s). It might have been against our model's policies to run them. Continuing."), this.sendActionMessage("Task marked as complete.")
                    }
                    await this.loop()
                }
                async getInitialTasks() {
                    if (this.shouldRunClientSide()) return await eh(this.modelSettings, this.goal);
                    let e = await W.Z.post("/api/chain", {
                        modelSettings: this.modelSettings,
                        goal: this.goal
                    });
                    return e.data.newTasks
                }
                async getAdditionalTasks(e, t) {
                    if (this.shouldRunClientSide()) return await eu(this.modelSettings, this.goal, this.tasks, e, t, this.completedTasks);
                    let s = await W.Z.post("/api/create", {
                        modelSettings: this.modelSettings,
                        goal: this.goal,
                        tasks: this.tasks,
                        lastTask: e,
                        result: t,
                        completedTasks: this.completedTasks
                    });
                    return s.data.newTasks
                }
                async executeTask(e) {
                    if (this.shouldRunClientSide()) return await em(this.modelSettings, this.goal, e);
                    let t = await W.Z.post("/api/execute", {
                        modelSettings: this.modelSettings,
                        goal: this.goal,
                        task: e
                    });
                    return t.data.response
                }
                shouldRunClientSide() {
                    return "" != this.modelSettings.customApiKey
                }
                stopAgent() {
                    this.isRunning = !1
                }
                sendGoalMessage() {
                    this.sendMessage({
                        type: "goal",
                        value: this.goal
                    })
                }
                sendLoopMessage() {
                    this.sendMessage({
                        type: "system",
                        value: "" !== this.modelSettings.customApiKey ? "This agent has been running for too long (25 Loops). To save your wallet, and our infrastructure costs, this agent is shutting down. In the future, the number of iterations will be configurable." : "We're sorry, because this is a demo, we cannot have our agents running for too long. Note, if you desire longer runs, please provide your own API key in Settings. Shutting down."
                    })
                }
                sendManualShutdownMessage() {
                    this.sendMessage({
                        type: "system",
                        value: "The agent has been manually shutdown."
                    })
                }
                sendCompletedMessage() {
                    this.sendMessage({
                        type: "system",
                        value: "All tasks completed. Shutting down."
                    })
                }
                sendThinkingMessage() {
                    this.sendMessage({
                        type: "thinking",
                        value: ""
                    })
                }
                sendTaskMessage(e) {
                    this.sendMessage({
                        type: "task",
                        value: e
                    })
                }
                sendErrorMessage(e) {
                    this.sendMessage({
                        type: "system",
                        value: e
                    })
                }
                sendExecutionMessage(e, t) {
                    this.sendMessage({
                        type: "action",
                        info: 'Executing "'.concat(e, '"'),
                        value: t
                    })
                }
                sendActionMessage(e) {
                    this.sendMessage({
                        type: "action",
                        info: e,
                        value: ""
                    })
                }
                constructor(e, t, s, n, a) {
                    this.tasks = [], this.completedTasks = [], this.isRunning = !0, this.numLoops = 0, this.name = e, this.goal = t, this.sendMessage = s, this.shutdown = n, this.modelSettings = a
                }
            };

            function eg(e) {
                let {
                    header: t,
                    children: s,
                    isShown: n,
                    close: a,
                    footerButton: l
                } = e;
                return (0, d.jsx)(d.Fragment, {
                    children: n ? (0, d.jsx)(d.Fragment, {
                        children: (0, d.jsx)("div", {
                            className: "fixed inset-0 z-40 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/70 p-3 font-mono text-white outline-none transition-all",
                            onClick: a,
                            children: (0, d.jsx)("div", {
                                className: "relative mx-auto my-6 w-auto max-w-3xl rounded-lg border-2 border-zinc-600",
                                children: (0, d.jsxs)("div", {
                                    className: "relative z-50 flex w-full flex-col rounded-lg border-0 bg-[#3a3a3a] shadow-lg outline-none focus:outline-none",
                                    onClick: e => e.stopPropagation(),
                                    children: [(0, d.jsxs)("div", {
                                        className: "flex items-start justify-between rounded-t border-b-2 border-solid border-white/20 p-5",
                                        children: [(0, d.jsx)("h3", {
                                            className: "font-mono text-3xl font-semibold",
                                            children: t
                                        }), (0, d.jsx)("button", {
                                            className: "float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none opacity-5 outline-none focus:outline-none",
                                            children: (0, d.jsx)("span", {
                                                className: "block h-6 w-6 bg-transparent text-2xl opacity-5 outline-none focus:outline-none",
                                                children: "\xd7"
                                            })
                                        })]
                                    }), (0, d.jsx)("div", {
                                        className: "text-md relative my-3 max-h-[50vh] flex-auto overflow-y-auto p-3 leading-relaxed",
                                        children: s
                                    }), (0, d.jsxs)("div", {
                                        className: "flex items-center justify-end gap-2 rounded-b border-t-2 border-solid border-white/20 p-2",
                                        children: [(0, d.jsx)(_, {
                                            enabledClassName: "bg-yellow-600 hover:bg-yellow-500",
                                            onClick: a,
                                            children: "Close"
                                        }), l]
                                    })]
                                })
                            })
                        })
                    }) : null
                })
            }

            function ep(e) {
                let {
                    show: t,
                    close: s
                } = e;
                return (0, d.jsx)(eg, {
                    header: "Welcome to AGENT \uD83E\uDD16",
                    isShown: t,
                    close: s,
                    children: (0, d.jsxs)("div", {
                        className: "text-md relative flex-auto p-2 leading-relaxed",
                        children: [(0, d.jsxs)("p", {
                            children: [(0, d.jsx)("strong", {
                                children: "AGENT"
                            }), " allows you to configure and deploy Autonomous AI agents. Name your custom AI and have it embark on any goal imaginable. It will attempt to reach the goal by thinking of tasks to do, executing them, and learning from the results \uD83D\uDE80"]
                        }), (0, d.jsxs)("div", {
                            children: [(0, d.jsx)("br", {}), "This platform is currently in beta, we are currently working on:", (0, d.jsxs)("ul", {
                                className: "ml-5 list-inside list-disc",
                                children: [(0, d.jsx)("li", {
                                    children: "Long term memory \uD83E\uDDE0"
                                }), (0, d.jsx)("li", {
                                    children: "Web browsing \uD83C\uDF10"
                                }), (0, d.jsx)("li", {
                                    children: "Interaction with websites and people \uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC66"
                                })]
                            }), (0, d.jsx)("br", {}), (0, d.jsx)("p", {
                                className: "mt-2",
                                children: "Follow the journey below:"
                            })]
                        }), (0, d.jsxs)("div", {
                            className: "mt-4 flex w-full items-center justify-center gap-5",
                            children: [(0, d.jsx)("div", {
                                className: "cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70",
                                onClick: () => window.open("https://discord.gg/jdSBAnmdnY", "_blank"),
                                children: (0, d.jsx)(j.j2d, {
                                    size: 30
                                })
                            }), (0, d.jsx)("div", {
                                className: "cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70",
                                onClick: () => window.open("https://twitter.com/asimdotshrestha/status/1644883727707959296", "_blank"),
                                children: (0, d.jsx)(j.fWC, {
                                    size: 30
                                })
                            }), (0, d.jsx)("div", {
                                className: "cursor-pointer rounded-full bg-black/30 p-3 hover:bg-black/70",
                                onClick: () => window.open("https://github.com/reworkd/AgentGPT", "_blank"),
                                children: (0, d.jsx)(j.hJX, {
                                    size: 30
                                })
                            })]
                        })]
                    })
                })
            }

            function ef(e) {
                let {
                    show: t,
                    close: s,
                    customApiKey: n,
                    setCustomApiKey: a,
                    customModelName: l,
                    setCustomModelName: i
                } = e, [r, o] = c.useState(n), h = () => {
                    o(n), s()
                }, u = () => {
                    a(r), s()
                };
                return (0, d.jsx)(eg, {
                    header: "Settings ⚙",
                    isShown: t,
                    close: h,
                    footerButton: (0, d.jsx)(_, {
                        onClick: u,
                        children: "Save"
                    }),
                    children: (0, d.jsxs)("div", {
                        className: "text-md relative flex-auto p-2 leading-relaxed",
                        children: [(0, d.jsx)("p", {
                            className: "mb-3",
                            children: "Welcome to AGENT! We're receiving traffic far higher than our small team is able to provide for at the moment."
                        }), (0, d.jsxs)("p", {
                            className: "mb-3",
                            children: ["Because of this, we momentarily ask that users utilize their own OpenAI API key for AGENT.", " ", (0, d.jsx)("em", {
                                children: "This will only be used in the current browser session and not stored anywhere."
                            }), " ", "If you elect not to, your agent will not be able to execute for very long. To do this, sign up for an OpenAI account and visit the following", " ", (0, d.jsx)("a", {
                                href: "https://platform.openai.com/account/api-keys",
                                className: "text-blue-500",
                                children: "link."
                            })]
                        }), (0, d.jsx)(H, {
                            left: (0, d.jsxs)(d.Fragment, {
                                children: [(0, d.jsx)(j.ijT, {}), (0, d.jsx)("span", {
                                    className: "ml-2",
                                    children: "Model:"
                                })]
                            }),
                            placeholder: "gpt-3.5-turbo",
                            value: l,
                            onChange: e => i(e.target.value)
                        }), (0, d.jsx)("br", {}), (0, d.jsx)(H, {
                            left: (0, d.jsxs)(d.Fragment, {
                                children: [(0, d.jsx)(j.q2z, {}), (0, d.jsx)("span", {
                                    className: "ml-2",
                                    children: "Key: "
                                })]
                            }),
                            placeholder: "sk-...",
                            value: r,
                            onChange: e => o(e.target.value)
                        }), (0, d.jsx)("strong", {
                            className: "mt-10",
                            children: "NOTE: This must be a PAID OpenAI API account, not the free tier. This is different from a ChatGPT Plus subscription."
                        })]
                    })
                })
            }
            let ew = e => (0, d.jsx)(y.E.div, {
                initial: {
                    opacity: 0,
                    y: -50
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5,
                    type: "spring",
                    delay: null !== (o = e.delay) && void 0 !== o ? o : 0
                },
                ...e,
                children: e.children
            });
            ew.displayName = "FadeOut";
            let ej = e => {
                    let {
                        tasks: t
                    } = e;
                    return (0, d.jsx)(N, {
                        className: "xl m-3 hidden h-[65%] w-[20rem] flex-col items-center overflow-auto rounded-2xl border-2 border-white/30 bg-zinc-900 font-mono shadow-2xl xl:flex",
                        children: (0, d.jsxs)("div", {
                            className: "w-full px-2",
                            children: [(0, d.jsxs)("div", {
                                className: "sticky top-0 my-2 flex items-center justify-center gap-2 bg-zinc-900 p-2 text-white",
                                children: [(0, d.jsx)(j.V_i, {}), " Current tasks"]
                            }), (0, d.jsx)("div", {
                                className: "flex flex-col gap-2",
                                children: t.map((e, t) => (0, d.jsx)(eb, {
                                    task: e
                                }, "".concat(e, "-").concat(t)))
                            })]
                        })
                    })
                },
                eb = e => {
                    let {
                        task: t
                    } = e;
                    return (0, d.jsx)(ew, {
                        delay: 1,
                        children: (0, d.jsx)("div", {
                            className: "w-full rounded-md border-2 border-white/20 p-2 text-sm text-white hover:border-white/40",
                            children: t
                        })
                    })
                },
                ey = () => {
                    let [e, t] = c.useState(""), [s, n] = c.useState(""), [a, l] = c.useState(null), [i, r] = c.useState(""), [o, h] = c.useState(""), [m, x] = c.useState(!1), [g, p] = c.useState([]), [f, b] = c.useState([]), [y, k] = c.useState(!1), [T, E] = c.useState(!1);
                    (0, c.useEffect)(() => {
                        let e = "agent-modal-opened-new",
                            t = localStorage.getItem(e);
                        setTimeout(() => {
                            null == t ? k(!0) : E(!0)
                        }, 3e3), localStorage.setItem(e, JSON.stringify(!0))
                    }, []), (0, c.useEffect)(() => {
                        null == a && x(!1)
                    }, [a]);
                    let A = e => {
                            "task" == e.type && p(t => [...t, e.value]), b(t => [...t, e])
                        },
                        C = () => {
                            p([]);
                            let t = new ex(e, s, A, () => l(null), {
                                customApiKey: i,
                                customModelName: o
                            });
                            l(t), t.run().then(console.log).catch(console.error)
                        },
                        S = () => {
                            x(!0), null == a || a.stopAgent()
                        };
                    return (0, d.jsxs)(w, {
                        children: [(0, d.jsx)(ep, {
                            show: y,
                            close: () => k(!1)
                        }), (0, d.jsx)(ef, {
                            customApiKey: i,
                            setCustomApiKey: r,
                            customModelName: o,
                            setCustomModelName: h,
                            show: T,
                            close: () => E(!1)
                        }), (0, d.jsxs)("main", {
                            className: "flex h-screen w-screen flex-row",
                            children: [(0, d.jsx)(K, {
                                showHelp: () => k(!0),
                                showSettings: () => E(!0)
                            }), (0, d.jsxs)("div", {
                                id: "content",
                                className: "z-10 flex h-screen w-full items-center justify-center p-2 px-2 sm:px-4 md:px-10",
                                children: [(0, d.jsxs)("div", {
                                    id: "layout",
                                    className: "flex h-full w-full max-w-screen-lg flex-col items-center justify-between gap-3 py-5 md:justify-center",
                                    children: [(0, d.jsxs)("div", {
                                        id: "title",
                                        className: "relative flex flex-col items-center font-mono",
                                        children: [(0, d.jsxs)("div", {
                                            className: "flex flex-row items-start shadow-2xl",
                                            children: [(0, d.jsx)("span", {
                                                className: "text-4xl font-bold text-[#C0C0C0] xs:text-5xl sm:text-6xl",
                                                children: "$AGENT"
                                            }), (0, d.jsx)("span", {
                                                className: "text-4xl font-bold text-white xs:text-5xl sm:text-6xl",
                                                children: ""
                                            }), (0, d.jsx)(v, {
                                                delay: .5,
                                                className: "sm:absolute sm:right-0 sm:top-2",
                                                children: (0, d.jsx)(u, {
                                                    children: "Beta \uD83D\uDE80"
                                                })
                                            })]
                                        }), (0, d.jsx)("div", {
                                            className: "mt-1 text-center font-mono text-[0.7em] font-bold text-white",
                                            children: (0, d.jsx)("p", {
                                                children: "Assemble, configure, and deploy autonomous AI Agents in your browser."
                                            })
                                        })]
                                    }), (0, d.jsx)(N, {
                                        className: "w-full",
                                        children: (0, d.jsx)(R, {
                                            className: "mt-4",
                                            messages: f
                                        })
                                    }), (0, d.jsxs)("div", {
                                        className: "mt-5 flex w-full flex-col gap-2 sm:mt-10",
                                        children: [(0, d.jsx)(N, {
                                            delay: 1.2,
                                            children: (0, d.jsx)(H, {
                                                left: (0, d.jsxs)(d.Fragment, {
                                                    children: [(0, d.jsx)(j.iNY, {}), (0, d.jsx)("span", {
                                                        className: "ml-2",
                                                        children: "Name:"
                                                    })]
                                                }),
                                                value: e,
                                                disabled: null != a,
                                                onChange: e => t(e.target.value),
                                                placeholder: "Agent"
                                            })
                                        }), (0, d.jsx)(N, {
                                            delay: 1.3,
                                            children: (0, d.jsx)(H, {
                                                left: (0, d.jsxs)(d.Fragment, {
                                                    children: [(0, d.jsx)(j.QJe, {}), (0, d.jsx)("span", {
                                                        className: "ml-2",
                                                        children: "Goal:"
                                                    })]
                                                }),
                                                disabled: null != a,
                                                value: s,
                                                onChange: e => n(e.target.value),
                                                placeholder: "Make the world a better place."
                                            })
                                        })]
                                    }), (0, d.jsxs)(N, {
                                        delay: 1.4,
                                        className: "flex gap-2",
                                        children: [(0, d.jsx)(_, {
                                            disabled: null != a || "" === e || "" === s,
                                            onClick: C,
                                            className: "sm:mt-10",
                                            children: null == a ? "Deploy Agent" : (0, d.jsxs)(d.Fragment, {
                                                children: [(0, d.jsx)(V.H_P, {
                                                    className: "animate-spin",
                                                    size: 20
                                                }), (0, d.jsx)("span", {
                                                    className: "ml-2",
                                                    children: "Running"
                                                })]
                                            })
                                        }), (0, d.jsx)(_, {
                                            disabled: null == a,
                                            onClick: S,
                                            className: "sm:mt-10",
                                            enabledClassName: "bg-red-600 hover:bg-red-400",
                                            children: m ? (0, d.jsxs)(d.Fragment, {
                                                children: [(0, d.jsx)(V.H_P, {
                                                    className: "animate-spin",
                                                    size: 20
                                                }), (0, d.jsx)("span", {
                                                    className: "ml-2",
                                                    children: "Stopping"
                                                })]
                                            }) : "Stop agent"
                                        })]
                                    })]
                                }), g.length && (0, d.jsx)(ej, {
                                    tasks: g
                                })]
                            })]
                        })]
                    })
                };
            var ev = ey
        }
    },
    function (e) {
        e.O(0, [876, 445, 874, 998, 774, 888, 179], function () {
            return e(e.s = 8312)
        }), _N_E = e.O()
    }
]);