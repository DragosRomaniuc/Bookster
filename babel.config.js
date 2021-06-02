module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            components: "./app/components",
            actions: "./app/actions",
            constant: "./app/constant",
            ducks: "./app/ducks",
            interfaces: "./app/interfaces",
            navigation: "./app/navigation",
            style: "./app/style",
            utils: "./app/utils",
            hooks: "./app/hooks",
            helpers: "./app/helpers",
          },
        },
      ],
    ],
  };
};
