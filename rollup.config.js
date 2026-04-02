import copy from "rollup-plugin-copy"
import terser from "@rollup/plugin-terser"
export default [
    {
        input: "src/index.js",
        plugins: [
            copy({
                targets: [
                    {
                        src: "src/index.d.ts",
                        dest: "dist",
                        rename: "floorquery.d.ts",
                    },
                ],
            }),
        ],
        output: [
            {
                file: "dist/floorquery.esm.js",
                format: "esm"
            },
            {
                file: "dist/floorquery.cjs.js",
                format: "cjs"
            },
            {
                file: "dist/floorquery.umd.js",
                format: "umd",
                name: "Floorquery",
                plugins: [
                    terser(),
                ]
            },
        ],
    },
]
