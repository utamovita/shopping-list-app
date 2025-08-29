module.exports = {
  "*.{js,jsx,ts,tsx,md}": "pnpm format",
  "apps/backend/src/**/*.{ts,tsx}": "pnpm --filter backend run lint",
  "apps/frontend/src/**/*.{ts,tsx}": (filenames) => {
    const lintCommands = filenames.map(
      (filename) =>
        `pnpm --filter frontend exec next lint --dir apps/frontend --file ${filename}`,
    );

    return [
      ...lintCommands,
      "pnpm --filter frontend exec tsc --noEmit -p tsconfig.json",
    ];
  },
};
