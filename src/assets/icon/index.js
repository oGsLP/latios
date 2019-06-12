import "./svg";

const requireAll = requireContext => requireContext.keys().map(requireContext);
const svgs = require.context(".",false,/\.svg$/);
requireAll(svgs);
