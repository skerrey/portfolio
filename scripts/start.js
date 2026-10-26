const { spawn } = require("child_process");

const port = process.env.PORT || "3000";
const nextBin = require.resolve("next/dist/bin/next");

const child = spawn(
  process.execPath,
  [nextBin, "start", "-H", "0.0.0.0", "-p", String(port)],
  {
    stdio: "inherit",
    env: {
      ...process.env,
      HOSTNAME: "0.0.0.0",
    },
  },
);

child.on("exit", (code) => {
  process.exit(code ?? 1);
});
