import { AtrosStep, PredefinedParameters } from "../.atros";

// You can use these pre-defined parameters for your install tasks easily
const { apt_get, cask, yay } = PredefinedParameters;

const step: AtrosStep = {
  title: "Initial Step",
  tasks: [
    {
      type: "shell",
      cmd: "echo 'Hey, welcome to Atros'",
    },
    {
      type: "install",
      packages: [
        "example-package",
        {
          list: ["non-existing-package"],
          // Define parameters for specific packages only
          params: ["--you_can_define_params_for_specific_package_lists_too"],
        },
        {
          list: ["some-package-with-yay"],
          // Use pre-defined packages like yay
          // Hover over to the parameter to see what it does
          params: [yay],
        },
        {
          list: ["system-specific-package"],
          // Define system-specific packages
          system: "arch",
        },
      ],
      // You can do everything outside of the packages list too
      // system: "arch",
      params: [
        "--these_params_are_valid_for_each_defined_package/package_lists_in_this_install_task",
      ],
    },
  ],
};

export default step;
