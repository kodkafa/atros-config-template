import { AtrosStep } from "../.atros/types.ts";

const step: AtrosStep = {
  title: "Initial Step",
  tasks: [
    {
      type: "shell",
      cmd: "echo 'Hey, welcome to Atros'",
    },
  ],
};

export default step;
