import typescript from 'rollup-plugin-typescript2';
import multiInput from 'rollup-plugin-multi-input';

export default {
  input: ['src/components/**/*.tsx'],
  output: {
    format: "cjs",
    dir: 'build_rollup'
  },
  plugins: [
    multiInput(),
    typescript(),
  ]
};
