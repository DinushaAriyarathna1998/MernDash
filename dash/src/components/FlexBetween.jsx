const { Box } = require("@mui/material")
const { styled } = require("@mui/system")

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
});

// is a way for reuse styles or css in a component like manner

export default FlexBetween;